---
# Banner
banner:
  title: "L'Association"
  content: >
    Nous sommes l'équipe de 180°C, l'association de promotion de la cuisine à l'UNIL et l'EPFL ! Nous avons pour mission de partager notre passion de la cuisine et la rendre simple, accessible et durable pour les étudiant.e.s.
    <br><br>
    Parmi nos projets : La **Spice League** : un top chef étudiant, le deuxième volume du livre de cuisine étudiante nommé **Fringale**, et le **Crieur**, notre carnet virtuel d'adresses étudiantes à Lausanne. <br><br>
    Nous nous organisons en 4 pôles: événementiel, création, sponsoring et communication. Plus d'informations sur chacun ci-dessous. Tu trouveras également <a href="https://drive.google.com/drive/folders/1LDxSLxTfI73BrOuSdPGvZBFT5lAK-W7E?usp=share_link" target="_blank">ici</a> notre AG, statuts ainsi que la charte de l'association !

  image: "/images/association.png"
  button:
    enable: true
    label: "Nous rejoindre"
    link: "mailto:epfl180c@gmail.com"

comity:
  - name: "Jens Nordgren"
    role: "Président & Responsable Création"
    # Define the member hierarchy in the pole. There are two possible values : "chief" and "members". Defaults to "members"
    # if not defined for a user.
    # Chief members are placed atop the other members.
    type: "chief"
    # An image that represent the member. Optional.
    # image: "/images/members/2024/julia.jpg"
    link: "https://people.epfl.ch/jens.nordgren"

  - name: "Maria Maqueo"
    role: "Vice-Présidente & Responsable Event"
    type: "chief"
    # image: "/images/members/2024/alice.jpg"
    link: "https://people.epfl.ch/maria.maquero"

  - name: "Adèle Linette"
    role: "Trésorière"
    # image: "/images/members/2024/veronika.jpg"
    link: "https://people.epfl.ch/adele.linette"

  - name: "Valentin Sutyushev"
    role: "Responsable Sponsoring"
    # image: "/images/members/2024/benoît.jpg"
    link: "https://people.epfl.ch/valentin.sutyushev"

  - name: "N'Zian Koffi"
    role: "Responsable Communication"
    # image: "/images/members/2024/adèle.png"
    link: "https://people.epfl.ch/nzian.koffi"

  - name: "Eliott Tornassat"
    role: "Responsable IT"
    # image: "/images/members/2024/laura.jpg"
    link: "https://people.epfl.ch/eliott.tornassat"

# Poles
poles:
  - name: "Comité"
    description: "C'est lui qui gère la partie administrative de l'Association."
    # define the theme to apply to the member cards. Default to "default" if not set.
    #  - "comity" : meant to be used only for the comity. Images are forced to show even if not set, 
    #             in which case a placeholder is shown.
    #  - "default" : meant to be used for the others category.
    theme: "comity"
    members:
      - name: "Jens Nordgren"
        role: "Président & Responsable Création"
        # Define the member hierarchy in the pole. There are two possible values : "chief" and "members". Defaults to "members"
        # if not defined for a user.
        # Chief members are placed atop the other members.
        type: "chief"
        # An image that represent the member. Optional.
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/jens.nordgren"

      - name: "Maria Maqueo"
        role: "Vice-Présidente & Responsable Event"
        type: "chief"
        # image: "/images/members/2024/alice.jpg"
        link: "https://people.epfl.ch/maria.maquero"

      - name: "Adèle Linette"
        role: "Trésorière"
        # image: "/images/members/2024/veronika.jpg"
        link: "https://people.epfl.ch/adele.linette"

      - name: "Valentin Sutyushev"
        role: "Responsable Sponsoring"
        # image: "/images/members/2024/benoît.jpg"
        link: "https://people.epfl.ch/valentin.sutyushev"

      - name: "N'Zian Koffi"
        role: "Responsable Communication"
        # image: "/images/members/2024/adèle.png"
        link: "https://people.epfl.ch/nzian.koffi"

      - name: "Eliott Tornassat"
        role: "Responsable IT"
        # image: "/images/members/2024/laura.jpg"
        link: "https://people.epfl.ch/eliott.tornassat"

  - name: "Pôle événementiel"
    description: "C'est lui qui gère l'organisation des différents événements de 180°C ainsi que la partie catering de l'Association."
    members:
      - name: "N'Zian Koffi"
        type: "chief"
        role: "Responsable Communication"
        # image: "/images/members/2024/adèle.png"
        link: "https://people.epfl.ch/nzian.koffi"

      - name: "Sarah Ihadadene"
        # image: "/images/members/2024/veronika.jpg"
        link: "https://people.epfl.ch/sarah.ihadadene"

  - name: "Pôle Création"
    description: "C'est lui qui gère la création du livre de recette Fringale ainsi que du guide étudiant Le Crieur."
    members:
      - name: "Jens Nordgren"
        role: "Responsable Création"
        type: "chief"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/jens.nordgren"

      - name: "Kenza Hessissen"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/kenza.hessissen"

      - name: "Vittorio	Sandri"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/vittorio.sandri"

      - name: "Adélie	Teissier Zimmermann"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/adelie.teissier-zimmerman"

      - name: "Paul	Nauche"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/paul.nauche"

      - name: "Mo	Zhou"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/mo.zhou"

      - name: "Hamish	Starling"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/hamish.starling"

      - name: "Marcy Vonarburg"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/marcy.vonarburg"

      - name: "Claudia Leslie	Arias Coquil"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/claudia.arias-coquil"

      - name: "Camille Begon"
        # image: "/images/members/2024/julia.jpg"
        link: "https://people.epfl.ch/camille.begon"

  - name: "Pôle Sponsoring"
    description: "C'est le pôle en charge du dossier de sponsoring ainsi que des relations avec les différents sponsors et partenaires."
    members:
      - name: "Valentin Sutyushev"
        role: "Responsable Sponsoring"
        type: "chief"
        # image: "/images/members/2024/benoît.jpg"
        link: "https://people.epfl.ch/valentin.sutyushev"
        
      - name: "Joanne	Jegou"
        # image: "/images/members/2024/luca.png"
        link: "https://people.epfl.ch/joanne.jegou"

  - name: "Pôle Communication"
    description: "C'est lui qui gère l'identité visuelle ainsi que les réseaux sociaux de 180°C."
    members:
      - name: "N'Zian Koffi"
        role: "Responsable Communication"
        type: "chief"
        # image: "/images/members/2024/adèle.png"
        link: "https://people.epfl.ch/nzian.koffi"

      - name: "Arij	Ben Salah"
        # image: "/images/members/2024/jailane.png"
        link: "https://people.epfl.ch/arij.ben-salah"

      - name: "Sarah Ihadadene"
        # image: "/images/members/2024/rebecca.png"
        link: "https://people.epfl.ch/sarah.ihadadene"
---
