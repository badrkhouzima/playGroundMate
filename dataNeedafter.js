//window.populate = populate
//globalThis.populate = populate;
//the above lines when popular were global and i couldnt call that function

const provincias = [
    "Alava",
    "Albacete",
    "Alicante",
    "Almería",
    "Asturias",
    "Avila",
    "Badajoz",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Cantabria",
    "Castellón",
    "Ciudad Real",
    "Córdoba",
    "La Coruña",
    "Cuenca",
    "Gerona",
    "Granada",
    "Guadalajara",
    "Guipúzcoa",
    "Huelva",
    "Huesca",
    "Islas Baleares",
    "Jaén",
    "León",
    "Lérida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Murcia",
    "Navarra",
    "Orense",
    "Palencia",
    "Las Palmas",
    "Pontevedra",
    "La Rioja",
    "Salamanca",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Santa Cruz de Tenerife",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza",
  ];

const todasCuidadesDeProvincias = [
    { provincia: "Alava", cuidades: ["Alva", "Calva", "samva"] },
    {
      provincia: "Alicante",
      cuidades: ["Sabicatete", "Labsati", "Ksee"],
    },
    {
      provincia: "Barcelona",
      cuidades: [
        "Ciutat Vella",
        "Eixample",
        "Sants-Montjuïc",
        "Les Corts",
        "Sarria-Sant Gervasi",
        "Gracia",
        "Horta-Guinardó",
        "Nou Barris",
        "Sant Andreu",
        "Sant Martí",
      ],
    },
  ]; 
let minicipios = [
    {
      provincia: "Barcelona",
      minicipios: [
        "Abrera",
        "Alella",
        "Arenys de Mar",
        "Arenys de Munt",
        "Argentona",
        "Artés",
        "Badalona",
        "Badia del Vallès",
        "Barberà del Vallès",
        "Barcelona",
        "Begues",
        "Berga",
        "Bigues i Riells",
        "Cabrils",
        "Caldes de Montbui",
        "Calella",
        "Canet de Mar",
        "Canovelles",
        "Capellades",
        "Cardedeu",
        "Castellar del Vallès",
        "Castellbisbal",
        "Castelldefels",
        "Centelles",
        "Cerdanyola del Vallès",
        "Cervelló",
        "Corbera de Llobregat",
        "Cornellà de Llobregat",
        "Cubelles",
        "Dosrius",
        "El Masnou",
        "El Prat de Llobregat",
        "Esparreguera",
        "Esplugues de Llobregat",
        "Gavà",
        "Gelida",
        "Granollers",
        "Igualada",
        "L'Ametlla del Vallès",
        "L'Hospitalet de Llobregat",
        "La Garriga",
        "La Llagosta",
        "La Roca del Vallès",
        "Les Franqueses del Vallès",
        "Lliçà d'Amunt",
        "Lliçà de Vall",
        "Llinars del Vallès",
        "Malgrat de Mar",
        "Manlleu",
        "Manresa",
        "Martorell",
        "Masquefa",
        "Matadepera",
        "Mataró",
        "Moià",
        "Molins de Rei",
        "Mollet del Vallès",
        "Montcada i Reixac",
        "Montgat",
        "Montmeló",
        "Montornès del Vallès",
        "Navarcles",
        "Navàs",
        "Olesa de Montserrat",
        "Palafolls",
        "Palau-solità i Plegamans",
        "Pallejà",
        "Parets del Vallès",
        "Piera",
        "Pineda de Mar",
        "Polinyà",
        "Premià de Dalt",
        "Premià de Mar",
        "Ripollet",
        "Roda de Ter",
        "Rubí",
        "Sabadell",
        "Sallent",
        "Sant Adrià de Besòs",
        "Sant Andreu de la Barca",
        "Sant Andreu de Llavaneres",
        "Sant Antoni de Vilamajor",
        "Sant Boi de Llobregat",
        "Sant Celoni",
        "Sant Cugat del Vallès",
        "Sant Esteve Sesrovires",
        "Sant Feliu de Codines",
        "Sant Feliu de Llobregat",
        "Sant Fost de Campsentelles",
        "Sant Fruitós de Bages",
        "Sant Joan de Vilatorrada",
        "Sant Joan Despí",
        "Sant Just Desvern",
        "Sant Pere de Ribes",
        "Sant Pol de Mar",
        "Sant Quirze del Vallès",
        "Sant Sadurní d'Anoia",
        "Sant Vicenç de Castellet",
        "Sant Vicenç de Montalt",
        "Sant Vicenç dels Horts",
        "Santa Coloma de Cervelló",
        "Santa Coloma de Gramenet",
        "Santa Eulàlia de Ronçana",
        "Santa Margarida de Montbui",
        "Santa Margarida i els Monjos",
        "Santa Maria de Palautordera",
        "Santa Perpètua de Mogoda",
        "Santpedor",
        "Sentmenat",
        "Sitges",
        "Súria",
        "Taradell",
        "Teià",
        "Terrassa",
        "Tiana",
        "Tona",
        "Tordera",
        "Torelló",
        "Torrelles de Llobregat",
        "Vacarisses",
        "Vallirana",
        "Vic",
        "Viladecans",
        "Viladecavalls",
        "Vilafranca del Penedès",
        "Vilanova del Camí",
        "Vilanova del Vallès",
        "Vilanova i la Geltrú",
        "Vilassar de Dalt",
        "Vilassar de Mar",
      ],
    },
    {
      provincia: "Alava",
      minicipios: [
        "Alegría-Dulantzi",
        "Añana",
        "Aramaio",
        "Armiñón",
        "Arraia-Maeztu",
        "Arratzua-Ubarrundia",
        "Artziniega",
        "Asparrena",
        "Ayala/Aiara",
        "Baños de Ebro/Mañueta",
        "Barrundia",
        "Berantevilla",
        "Bernedo",
        "Campezo/Kanpezu",
        "Elburgo/Burgelu",
        "Elciego",
        "Elvillar/Bilar",
        "Erriberabeitia",
        "Erriberagoitia/Ribera Alta",
        "Harana/Valle de Arana",
        "Iruña Oka/Iruña de Oca",
        "Iruraiz-Gauna",
        "Kripan",
        "Kuartango",
        "Labastida/Bastida",
        "Lagrán",
        "Laguardia",
        "Lanciego/Lantziego",
        "Lantarón",
        "Lapuebla de Labarca",
        "Legutio",
        "Leza",
        "Moreda de Álava/Moreda Araba",
        "Navaridas",
        "Okondo",
        "Oyón-Oion",
        "Peñacerrada-Urizaharra",
        "Samaniego",
        "San Millán/Donemiliaga",
        "Urkabustaiz",
        "Valdegovía/Gaubea",
        "Villabuena de Álava/Eskuernaga",
        "Yécora/Iekora",
        "Zalduondo",
        "Zambrana",
        "Zigoitia",
        "Zuia",
      ],
    },
    {
      provincia: "Albacete",
      minicipios: [
        "Abengibre",
        "Alatoz",
        "Albatana",
        "Alborea",
        "Alcadozo",
        "Alcalá del Júcar",
        "Alcaraz",
        "Alpera",
        "Ayna",
        "Balazote",
        "Balsa de Ves",
        "Barrax",
        "Bienservida",
        "Bogarra",
        "Bonete",
        "Carcelén",
        "Casas de Juan Núñez",
        "Casas de Lázaro",
        "Casas de Ves",
        "Casas-Ibáñez",
        "Cenizate",
        "Chinchilla de Monte-Aragón",
        "Corral-Rubio",
        "Cotillas",
        "El Ballestero",
        "El Bonillo",
        "Elche de la Sierra",
        "Férez",
        "Fuensanta",
        "Fuente-Álamo",
        "Fuentealbilla",
        "Golosalvo",
        "Higueruela",
        "Hoya-Gonzalo",
        "Jorquera",
        "La Gineta",
        "La Herrera",
        "La Recueja",
        "Letur",
        "Lezuza",
        "Liétor",
        "Madrigueras",
        "Mahora",
        "Masegoso",
        "Minaya",
        "Molinicos",
        "Montalvos",
        "Montealegre del Castillo",
        "Motilleja",
        "Munera",
        "Navas de Jorquera",
        "Nerpio",
        "Ontur",
        "Ossa de Montiel",
        "Paterna del Madera",
        "Peñas de San Pedro",
        "Peñascosa",
        "Pétrola",
        "Povedilla",
        "Pozo Cañada",
        "Pozo-Lorente",
        "Pozohondo",
        "Pozuelo",
        "Riópar",
        "Robledo",
        "Salobre",
        "San Pedro",
        "Socovos",
        "Valdeganga",
        "Vianos",
        "Villa de Ves",
        "Villalgordo del Júcar",
        "Villamalea",
        "Villapalacios",
        "Villatoya",
        "Villavaliente",
        "Villaverde de Guadalimar",
        "Viveros",
        "Yeste",
      ],
    },
    {
      provincia: "Alicante",
      minicipios: [
        "Agost",
        "Agres",
        "Aigües",
        "Alcalalí",
        "Alcocer de Planes",
        "Alcoleja",
        "Alfafara",
        "Algorfa",
        "Algueña",
        "Almudaina",
        "Balones",
        "Benasau",
        "Beneixama",
        "Benferri",
        "Beniarbeig",
        "Beniardá",
        "Beniarrés",
        "Benidoleig",
        "Benifallim",
        "Benifato",
        "Benigembla",
        "Benijófar",
        "Benilloba",
        "Benillup",
        "Benimantell",
        "Benimarfull",
        "Benimassot",
        "Benimeli",
        "Benitachell/el Poble Nou de Benitatxell",
        "Biar",
        "Bolulla",
        "Busot",
        "Campo de Mirra/el Camp de Mirra",
        "Cañada",
        "Castell de Castells",
        "Confrides",
        "Daya Nueva",
        "Daya Vieja",
        "el Castell de Guadalest",
        "el Fondó de les Neus/Hondón de las Nieves",
        "el Ràfol d'Almúnia",
        "el Verger",
        "els Poblets",
        "Fageca",
        "Famorca",
        "Formentera del Segura",
        "Gaianes",
        "Gorga",
        "Granja de Rocamora",
        "Hondón de los Frailes",
        "Jacarilla",
        "l'Alqueria d'Asnar",
        "l'Atzúbia",
        "la Romana",
        "la Vall d'Alcalà",
        "la Vall d'Ebo",
        "la Vall de Gallinera",
        "la Vall de Laguar",
        "Llíber",
        "Lorcha/l'Orxa",
        "Millena",
        "Murla",
        "Orba",
        "Orxeta",
        "Parcent",
        "Penàguila",
        "Planes",
        "Quatretondeta",
        "Rafal",
        "Relleu",
        "Sagra",
        "Salinas",
        "San Isidro",
        "Sanet y Negrals",
        "Sella",
        "Senija",
        "Tàrbena",
        "Tibi",
        "Tollos",
        "Tormos",
        "Torremanzanas/la Torre de les Maçanes",
        "Xaló",
      ],
    },
  ];
  