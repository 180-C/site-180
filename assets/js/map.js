(function () {
  "use strict";

  const Map = ol.Map;
  const OSM = ol.source.OSM
  const TileLayer = ol.layer.Tile
  const View = ol.View
  const Proj = ol.proj
  const parser = new ol.format.WMTSCapabilities();
  const extent = [420000, 30000, 900000, 350000];

  var placesLabelLayer = new ol.layer.Image();


  const coord_default = "EPSG:3857";
  const coord_world = "EPSG:4326";

  const popup_container = document.getElementById('popup');
  const popup_content = document.getElementById('popup-content');
  const popup_closer = document.getElementById('popup-closer');

  var map;
  var overlay;
  var config

  var markers_styles = {
    'active': new ol.style.Style({
      image: new ol.style.Icon({
        src: '/images/place_icon.svg',
        offset: [0, 0],
        opacity: 1,
        scale: 1.2,
        color: '#f22'
      })
    }),
    'inactive': new ol.style.Style({
      image: new ol.style.Icon({
        src: '/images/place_icon.svg',
        offset: [0, 0],
        opacity: 1,
        scale: 1.2,
        color: '#088'
      })
    })
  }


  var placesLayer = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: function (feature, resolution) {
      const active = feature.get('active')
      const display = feature.get('display')
      if (display == false) return null
      return active ? markers_styles['active'] : markers_styles['inactive'];
    }
  });

  config = CRIEUR_CONFIG;

  $(document).ready(function () {

    const chLayer = new TileLayer({
      source: new OSM(),
    })

    overlay = new ol.Overlay({
      element: popup_container,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    map = new ol.Map({
      target: "map",
      layers: [chLayer],
      overlays: [overlay],
      view: new ol.View({
        center: ol.proj.fromLonLat([6.632492959462926, 46.519704897854744]),
        zoom: 14,
      }),
      logo: false,
    });


    /* --------------- */
    /* EVENT LISTENERS */
    /* --------------- */

    map.on("singleclick", function (evt) {
      var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
      });
      if (feature) {
        /* Popup */
        popup_content.innerHTML = `<div class="col-12 text-center p-3">
          <h4 class="mb-2">${feature.values_.name}</h4>
          <h6>${feature.values_.style}</h6>
          <hr>
          <table>
            <tbody>
              <tr>
                <th>Prix : </th>
                <td class="text-start">${'<i class="fas fa-dollar-sign"></i>'.repeat(feature.values_.price)}</td>
              </tr>
              <tr>
                <th>Type : </th>
                <td>${feature.values_.types.map(x => config['types'].filter(type => x == type.code)[0].name).join(', ')}</td>
              </tr>
            </tbody>
          </table>
          <hr>
          <a href="${feature.values_.url}" class="btn btn-danger w-100 mt-2">Voir</a>
        </div>`;
        overlay.setPosition(evt.coordinate);
      } else {
        popup_content.innerHTML = "";
        overlay.setPosition(undefined);
        popup_closer.blur();
      }
    });

    map.on('pointermove', function (e) {
      var pixel = map.getEventPixel(e.originalEvent);
      var hit = map.hasFeatureAtPixel(pixel);
      map.getViewport().style.cursor = hit ? 'pointer' : '';
    });

    // Add data
    const data = CRIEUR_PLACES
    /*addPlacesFeatures(data)
    // On filter change event
    $('#filter-controls').on('change', 'input[type="checkbox"]', function () {
      var types = $('#filter-controls .types input:checked').map(function () { return $(this).val() }).get()
      var prices = $('#filter-controls .prices input:checked').map(function () { return $(this).val() }).get()
      filterFeatures(types, prices)
      updateActiveMarkers()
    })
  })*/




    /* --------- */
    /* FUNCTIONS */
    /* --------- */

    function addPlacesFeatures(data) {

      data.forEach((place) => {
        place.locations.forEach((location) => {
          placesLayer.getSource().addFeature(
            PlaceFeature({
              ...place,
              ...location
            }, { style: markers_styles['inactive'] })
          );
        })
      });

      map.addLayer(placesLayer);

      // Place Feature skeleton
      function PlaceFeature(place) {
        let latitude = Object.keys(place.latitude).includes('$numberDecimal') ? place.latitude.$numberDecimal : place.latitude;
        let longitude = Object.keys(place.longitude).includes('$numberDecimal') ? place.longitude.$numberDecimal : place.longitude;
        return new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.transform([longitude, latitude], coord_world, coord_default)
          ),
          code: place.code,
          types: place.types,
          price: place.priceTag,
          style: place.style,
          name: place.name,
          url: '/crieur/' + place.code,
          types: place.types
        });
      }
    }

    /* --------- */
    /* FUNCTIONS */
    /* --------- */

    // -- MAP -- //

    // Filter Features on the map according to selected filters
    function filterFeatures(types, prices) {
      let features = placesLayer.getSource().getFeatures();

      features.forEach(function (feature) {
        let values = feature.getProperties()
        let validType = false
        let validPrice = false

        for (let type of types) {
          if (values.types.includes(type)) validType = true
        }
        for (let price of prices) {
          if (price == values.price) validPrice = true
        }
        if (validPrice && validType) {
          feature.set('display', true)
        } else {
          feature.set('display', false)
        }

      })
      placesLayer.changed();
    }
  })

})();