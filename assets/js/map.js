(function () {
  "use strict";

  // Get the filter modal, close button, and open filter button elements
  const filterModal = document.getElementById("filter-modal");
  const closeButton = document.querySelector(".close-button");
  const openFilterButton = document.getElementById("open-filter-button");

  // Function to open the modal
  function openModal() {
    filterModal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    filterModal.style.display = "none";
  }

  // Event listener to open the modal when the open filter button is clicked
  openFilterButton.addEventListener("click", openModal);

  // Event listener to close the modal when the close button is clicked
  closeButton.addEventListener("click", closeModal);

  // Close the modal if the user clicks outside of it
  window.addEventListener("click", (event) => {
    if (event.target === filterModal) {
      closeModal();
    }
  });

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

  const popup_container = document.getElementById('map-popup');
  const popup_content = document.getElementById('map-popup-content');
  const popup_closer = document.getElementById('map-popup-closer');

  var map;
  var overlay;

  var marker_style = new ol.style.Style({
    image: new ol.style.Icon({
      src: MAP_MARKER,
      offset: [0, 0],
      opacity: 1,
      scale: .1,
    })
  })


  var placesLayer = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: function (feature, resolution) {
      const display = feature.get('display')
      if (display == false) return null
      return marker_style;
    }
  });

  $(document).ready(function () {

    const config = CRIEUR_CONFIG;
    const data = CRIEUR_PLACES

    const chLayer = new TileLayer({
      source: new ol.source.XYZ({
        url: "http://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
      })
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
        popup_content.innerHTML = `<div class="crieur-place-card flex flex-col gap-2">
          <div class="flex flex-col">
            <h4>${feature.values_.title}</h4>
            <h6>${feature.values_.style}</h6>
          </div>
          <hr>
          <div class="flex flex-col gap-2">
            <div>
                <th>Prix : </th>
                <td class="text-start">${'<i class="fas fa-dollar-sign"></i>'.repeat(feature.values_.price)}</td>
            </div>
            <div>
                <th>Type : </th>
                <td>${feature.values_.types.map(x => config['types'].filter(type => x == type.code)[0].name).join(', ')}</td>
            </div>
          </div>
          <hr>
          <a href="${feature.values_.url}" class="btn btn-primary flex justify-center">Voir</a>
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

    // Add markers to the map
    addPlacesFeatures(data)
    // On filter change event
    $('#filter-controls').on('change', 'input[type="checkbox"]', function () {
      var types = $('#filter-controls .types input:checked').map(function () { return $(this).val() }).get()
      var prices = $('#filter-controls .prices input:checked').map(function () { return $(this).val() }).get()
      filterFeatures(types, prices)
    })
  })




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
          }, { style: marker_style })
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
        price: parseInt(place.pricetag),
        style: place.style,
        title: place.title,
        url: place.url,
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
})();