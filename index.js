// -------------------------------------------------
//            Définition des bouttons pays 
// -------------------------------------------------

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

function pays_all(a) {
  // Fonction permettat de prendre ce qui est écrit sur un boutton 
  // et de placer le contenu dans la fenêtre de pari
  var x = document.getElementById("country_button" + a).textContent // prend ce qui est écrit sur le boutton
  const y = x.split(" :") // divise ce qui est écrit
  document.getElementById("country").value = y[0]; // Place le pays dans l'input "country"
  document.getElementById("cote").textContent = "Cote : " + y[1]; // Place la cote dans le texte
}


function input_cote() {
  // Fonction permettat de prendre le nom du pays qui est écrit dans l'input
  // et d'afficher la cote correspondante dans la fenêtre de pari

  var x = document.getElementById("country").value + " "; // Enregistre ce qui est mis dans l'input

  var y = [];
  var z = [];
  var w = [];

  for (var i = 1; i < 208; i++) {
      y.push(document.getElementById("country_button" + i).textContent); // Reprend ts ce qui est écrit sur les bouton
  }

  for (var i = 0; i < y.length; i++) {
      z.push(y[i].split(":")[0]); // contient le nom du pay
      w.push(y[i].split(":")[1]); // contient la cote du pay
  }

  document.getElementById("cote").textContent = "Cote : " + w[z.findIndex(img => img === x)]; // Prend la cote du pays correspondant à x et on l'affiche dans la fenêtre des paris
}

setInterval(input_cote, 700); // Toutes les 700ms, on run la fonction input_cote

// -------------------------------------------------
//          Définition de matrices
// -------------------------------------------------

let all_country = [
    'Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina',
    'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
    'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil',
    'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon',
    'Canada', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos Islands', 'Colombia',
    'Comoros', 'Republic of the Congo', 'Democratic Republic of the Congo', 'Cook Islands', 'Costa Rica',
    'Côte d Ivoire', 'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
    'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland',
    'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon',
    'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey',
    'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and McDonald Islands', 'Vatican City State', 'Honduras',
    'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man',
    'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'North Macedonia',
    'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius',
    'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique',
    'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue',
    'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay',
    'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda',
    'Saint Barthélemy', 'Saint Helena', 'Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin',
    'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia',
    'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
    'South Africa', 'South Georgia and the South Sandwich Islands', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen',
    'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor Lest', 'Togo', 'Tokelau', 'Tonga',
    'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States Minor Outlying Islands', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam',
    'Virgin Islands', 'Virgin Islands', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'
]

let terristoire_des_pays = [
    ['France', 'Saint Pierre and Miquelon', 'French Guiana', 'Guadeloupe', 'Martinique',
        'Saint-Barthélemy', 'Saint Martin', 'New Caledonia', 'French Polynesia', 'Wallis and Futuna',
        'Clarion Island', 'Reunion', 'Mayotte', 'Europa Island', 'Bassas da India', 'Juan de Nova Island',
        'Glorioso Islands', 'Tromelin Island', 'Grande-Terre', 'Crozet Archipel', 'Clipperton Island',
        'Saint-Paul Islands', 'Amsterdam Island', 'French Southern and Antarctic Lands', 'Guadeloupe (French Territory)',
        'Martinique (French Territory)', 'Wallis And Futuna (French Territory)'
    ],
    ['United Kingdom', 'Akrotiri and Dhekelia', 'Anguilla', 'Bermuda',
        'British Indian Ocean Territory', 'British Virgin Islands', 'Cayman Islands',
        'Falkland Islands (Islas Malvinas)', 'Gibraltar', 'Guernsey', 'Isle of Man', 'Jersey',
        'Montserrat', 'Pitcairn', 'Saint Helena', 'Ascension Island', 'Tristan da Cunha',
        'South Georgia and the South Sandwich Islands', 'Turks and Caicos Islands',
        'Virgin Islands'
    ],
    ['Finland', 'Åland Islands'],
    ['United States', 'American Samoa', 'Guam', 'Northern Mariana Islands',
        'Puerto Rico', 'United States Minor Outlying Islands', 'Virgin Islands'
    ],
    ['Netherlands', 'Aruba', 'Sint Eustatius', 'Saba', 'Curaçao',
        'Caribbean Netherlands', 'Bonaire', 'Sint Eustatius and Saba', 'Sint Maarten'
    ],
    ['Norway', 'Bouvet Island', 'Svalbard and Jan Mayen'],
    ['Myanmar', 'Burma'],
    ['Australia', 'Cocos Islands', 'Coral Sea Islands', 'Heard Island and McDonald Islands', 'Norfolk Island'],
    ['New Zealand', 'Coral Sea Islands', 'Niue', 'Tokelau'],
    ['Denmark', 'Faroe Islands', 'Greenland'],
    ['China', 'Hong Kong', 'Macao'], // free Tibet
    ['Portugal', 'Azores (Portugal)']
];

let territoire_pays = [
    'Saint Pierre and Miquelon', 'French Guiana', 'Guadeloupe', 'Martinique',
    'Saint-Barthélemy', 'Saint Martin', 'New Caledonia', 'French Polynesia', 'Wallis and Futuna',
    'Clarion Island', 'Reunion', 'Mayotte', 'Europa Island', 'Bassas da India', 'Juan de Nova Island',
    'Glorioso Islands', 'Tromelin Island', 'Grande-Terre', 'Crozet Archipel', 'Clipperton Island',
    'Saint-Paul Islands', 'Amsterdam Island', 'French Southern and Antarctic Lands', 'Guadeloupe (French Territory)',
    'Martinique (French Territory)', 'Wallis And Futuna (French Territory)', 'Akrotiri and Dhekelia', 'Anguilla', 'Bermuda',
    'British Indian Ocean Territory', 'British Virgin Islands', 'Cayman Islands',
    'Falkland Islands (Islas Malvinas)', 'Gibraltar', 'Guernsey', 'Isle of Man', 'Jersey',
    'Montserrat', 'Pitcairn', 'Saint Helena', 'Ascension Island', 'Tristan da Cunha',
    'South Georgia and the South Sandwich Islands', 'Turks and Caicos Islands',
    'Virgin Islands', 'Åland Islands', 'American Samoa', 'Guam', 'Northern Mariana Islands',
    'Puerto Rico', 'United States Minor Outlying Islands', 'Virgin Islands',
    'Aruba', 'Sint Eustatius', 'Saba', 'Curaçao', 'Caribbean Netherlands', 'Bonaire', 'Sint Eustatius and Saba',
    'Sint Maarten', 'Bouvet Island', 'Svalbard and Jan Mayen',
    'Cocos Islands', 'Coral Sea Islands', 'Heard Island and McDonald Islands', 'Norfolk Island',
    'Coral Sea Islands', 'Niue', 'Tokelau', 'Faroe Islands', 'Greenland', 'Hong Kong', 'Macao'
];

let win_type = ["Nombre de tsunamis pour chaque pays", "Nombre de tremblements de terre pour chaque pays", "Nombre d'éruptions volcaniques pour chaque pays"]
let win_deces = [Math.floor(Math.random() * 500000)]
let win_cata = ['0','1', '2', '3', '4']

// -------------------------------------------------
//        Fenêtre popup de la win
// -------------------------------------------------

// Fonction pour fermer la fenêtre de la win
function togglePopup_2() {
  document.getElementById("winning").classList.toggle("active");
}


// Fonction pour le boutton valider
function Win_window() {

  document.getElementById("winning").classList.toggle("active");

  // génération d'un pays, d'une catastrophe, d'un nombre de décès et d'un nombre de dommages aléatoire
  var Matrice_du_turfu = [all_country[Math.floor(Math.random() * all_country.length)], win_type[Math.floor(Math.random() * win_type.length)], win_cata[Math.floor(Math.random() * win_cata.length)], win_deces[Math.floor(Math.random() * win_deces.length)]]

  // Définition des variables allant être affichées dans la fenêtre de la win
  var txt;
  var txt_lose;
  var txt_titre;
  var txt_argent;
  var txt_suite;
  var cote_0 = document.getElementById("cote").textContent;
  var cote_1 = cote_0.split(":");
  var mise = document.getElementById("mise").value * eval(cote_1[1]);

  if (Matrice_du_turfu[0] === document.getElementById("country").value) {
      if (Matrice_du_turfu[1] === document.getElementById("lister2").value) { mise *= 2 };
      if (Matrice_du_turfu[2] === document.getElementById("deces").value) { mise *= 2 };
      if (Matrice_du_turfu[3] === document.getElementById("dommages").value) { mise *= 2 };
      txt = "Bravo pour votre succès ! Votre compétence et votre talent ont encore une fois prouvé leurs valeurs.  Vous avez ainsi gagné:  ";
      txt_titre = "Félicitation !";
      txt_argent = String(mise) + " $";
      txt_suite = "Cette somme est un petit pas pour vous mais un grand pas dans la direction de votre future fortune. Votre talent vous menera vers un plus grand succès. Alors rejouez dès maintenant! Votre nouvelle vie vous attend!  ";
      document.getElementById("win_or_lose").innerHTML = txt;
      document.getElementById("win_or_lose_2").innerHTML = txt_titre;
      document.getElementById("win_or_lose_3").innerHTML = txt_argent;
      document.getElementById("win_or_lose_4").innerHTML = txt_suite;
    } else {
      txt_lose = "Malheureusement la chance ne vous a pas souris cette fois. Nos spécialistes en data science ont montrés que seuls les persévérants ont une chance de toucher le gros lot. Qui ose soutenir le contraire est un menteur.  ";
      txt_titre = "Outch !";
      txt_argent = " ";
      txt_suite = "Plus vous jouez, plus vous aurez de chance de gagner! Alors rejouez dès maintenant! Votre nouvelle vie vous attend !"
      document.getElementById("win_or_lose").innerHTML = txt_lose;
      document.getElementById("win_or_lose_2").innerHTML = txt_titre;
      document.getElementById("win_or_lose_3").innerHTML = txt_argent;
      document.getElementById("win_or_lose_4").innerHTML = txt_suite;
  }
  

}

// -------------------------------------------------
//            Fenêtre principale
// -------------------------------------------------


function graphes(data, a) {

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2RlbG1vdGUiLCJhIjoiY2t3Z2w4dXU0MDZoZzJ1bzAxMHVpcnZxZyJ9.Czd_O-Z-XcEH-WmO1DTzcg';


    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [12, 50],
        zoom: 1.6
    });



    map.on('load', () => {

        map.addSource('countries', {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1'

        });

        const matchExpression = ['match', ['get', 'name_en']];


        // Boucle permettant de définir la couleur associé à chaque pays
        for (const row of data) {

            // définition des variables allant permettre de définir une couleur
            var green = 0;
            var red = 0;
            var blue = 0;

            // Tremblement de terre 
            if (a === "tremblement") {
                if (row['nbr'] < 5) { red = 246, green = 246, blue = 244 }
                if (row['nbr'] > 4 && row['nbr'] < 25) { red = 254, green = 196, blue = 79 }
                if (row['nbr'] > 24 && row['nbr'] < 50) { red = 254, green = 153, blue = 41 }
                if (row['nbr'] > 49 && row['nbr'] < 75) { red = 236, green = 112, blue = 20 }
                if (row['nbr'] > 74 && row['nbr'] < 100) { red = 204, green = 76, blue = 2 }
                if (row['nbr'] > 99 && row['nbr'] < 200) { red = 153, green = 52, blue = 4 }
                if (row['nbr'] > 199 && row['nbr'] < 300) { red = 102, green = 37, blue = 6 }
                if (row['nbr'] > 300) { red = 0, green = 0, blue = 0 }
            }
            // Tsunami
            if (a === "tsunami") {
                if (row['nbr'] < 5) { red = 246, green = 246, blue = 244 }
                if (row['nbr'] > 4 && row['nbr'] < 10) { red = 158, green = 202, blue = 225 }
                if (row['nbr'] > 9 && row['nbr'] < 25) { red = 107, green = 174, blue = 214 }
                if (row['nbr'] > 24 && row['nbr'] < 50) { red = 66, green = 146, blue = 198 }
                if (row['nbr'] > 49 && row['nbr'] < 75) { red = 33, green = 113, blue = 181 }
                if (row['nbr'] > 74 && row['nbr'] < 100) { red = 8, green = 81, blue = 156 }
                if (row['nbr'] > 99 && row['nbr'] < 150) { red = 8, green = 48, blue = 107 }
                if (row['nbr'] > 149) { red = 0, green = 0, blue = 0 }
            }
            // Eruption
            if (a === "eruption") {
                if (row['nbr'] < 2) { red = 246, green = 246, blue = 244 }
                if (row['nbr'] > 1 && row['nbr'] < 5) { red = 252, green = 146, blue = 114 }
                if (row['nbr'] > 4 && row['nbr'] < 10) { red = 251, green = 106, blue = 74 }
                if (row['nbr'] > 9 && row['nbr'] < 30) { red = 239, green = 59, blue = 44 }
                if (row['nbr'] > 29 && row['nbr'] < 60) { red = 203, green = 24, blue = 29 }
                if (row['nbr'] > 59 && row['nbr'] < 99) { red = 165, green = 15, blue = 21 }
                if (row['nbr'] > 100 && row['nbr'] < 149) { red = 103, green = 0, blue = 13 }
                if (row['nbr'] > 150) { red = 0, green = 0, blue = 0 }
            }


            var color = `rgb(${red},${green} , ${blue})`; // Définition de la couleur d'un pays
            matchExpression.push(row['country'], color); //association d'un pays à une couleur
        }

        matchExpression.push('rgba(255, 255, 255, 0)');

        map.addLayer({
                'id': 'countries-join',
                'type': 'fill',
                'source': 'countries',
                'source-layer': 'country_boundaries',
                'paint': { 'fill-color': matchExpression }
            },
            'admin-1-boundary-bg');


        map.on('mousemove', (event) => {
            const states = map.queryRenderedFeatures(event.point, {
                layers: ['countries-join']
            });

            document.getElementById('pd').innerHTML = states.length ?
                `<h4>${states[0].properties.name_en} </h4><p><strong><em> Nombre de catastrophes: ${data[data.findIndex(img => img.country === states[0].properties.name_en)].nbr}</h3><p><strong><em> Cote du pays : ${data[data.findIndex(img => img.country === states[0].properties.name_en)].cote}</strong> </em></p>` :
                `<p>     Placez le curseur sur un pays!</p>`;
        });
    });

}

function CreateSelectorOption_volcano(data1, data2) {
    var element = document.getElementById("lister3");
    if (element !== null) {
        element.remove()
    }

    let liste = []
    let newdata1 = []
    let newdata2_country = []
    let newdata2_volcanoId = []
    let newdata = []
    for (let i in data1) {
        newdata1.push({'deaths': data1[i].deaths, 'volcanoLocationId': data1[i].volcanoLocationId });
    }

    for (let i in data2) {
      newdata2_country.push(data2[i].country)
      newdata2_volcanoId.push(data2[i].id);
    }

    for (let i in newdata1) {
      var location = newdata1[i].volcanoLocationId
      var index = newdata2_volcanoId.indexOf(location)
      newdata.push({'deaths': newdata1[i].deaths, 'country': newdata2_country[index] });
  }

    // Elimination des "undefined"

    var a = 0
    for (var i in newdata) {
        if (newdata[i].deaths !== undefined) {
            liste[a] = newdata[i];
            a = a + 1;
        }
    }

    traitement_donnee_nom(liste)

    var values = [];
    for (const i in liste) {
        values[i] = liste[i].country;
    }
    values = values.sort();

    // Elimination des pays en double

    for (var i = 0; i < values.length; i++) {
      while (values[i] === values[i + 1]) {
        values.splice(i + 1, 1)
      }
    }

    var select = document.createElement("select");
    select.id = "lister3"
    select.style = "height:50px;width:292px"
    select.onchange = function() { get_value2() };
    for (const val in values) {
        var option = document.createElement("option");
        option.value = values[val];
        option.text = values[val];
        select.appendChild(option);
    }
    document.getElementById("selector").appendChild(select);
}

function CreateSelectorOption_volcano2(data1, data2) {
  var element = document.getElementById("lister4");
  if (element !== null) {
      element.remove()
  }

  let liste = []
  let newdata1 = []
  let newdata2_country = []
  let newdata2_volcanoId = []
  let newdata = []
  for (let i in data1) {
      newdata1.push({'damageAmountOrder': data1[i].damageAmountOrder, 'volcanoLocationId': data1[i].volcanoLocationId });
  }

  for (let i in data2) {
    newdata2_country.push(data2[i].country)
    newdata2_volcanoId.push(data2[i].id);
  }

  for (let i in newdata1) {
    var location = newdata1[i].volcanoLocationId
    var index = newdata2_volcanoId.indexOf(location)
    newdata.push({'damageAmountOrder': newdata1[i].damageAmountOrder, 'country': newdata2_country[index] });
}

  // Elimination des "undefined"

  var a = 0
  for (var i in newdata) {
      if (newdata[i].damageAmountOrder !== undefined) {
          liste[a] = newdata[i];
          a = a + 1;
      }
  }

  traitement_donnee_nom(liste)

  var values = [];
  for (const i in liste) {
      values[i] = liste[i].country;
  }
  values = values.sort();

  // Elimination des pays en double

  for (var i = 0; i < values.length; i++) {
    while (values[i] === values[i + 1]) {
      values.splice(i + 1, 1)
    }
  }

  var select = document.createElement("select");
  select.id = "lister4"
  select.style = "height:50px;width:292px"
  select.onchange = function() { get_value3() };
  for (const val in values) {
      var option = document.createElement("option");
      option.value = values[val];
      option.text = values[val];
      select.appendChild(option);
  }
  document.getElementById("selector2").appendChild(select);
}

function CreateSelectorOption(data) {
  var element = document.getElementById("lister3");
  if (element !== null) {
      element.remove()
  }

  // Elimination des "undefined"

  let liste = []
  let newdata = []
  for (let i in data) {
    if (data[i].country !== undefined){
      var country = data[i].country
      var countrybis = country.charAt(0) + country.slice(1).toLowerCase()
      newdata.push({'deaths': data[i].deaths, 'country': countrybis });
    }
  }

  // Elimination des "undefined"

  var a = 0
  for (var i in newdata) {
      if (newdata[i].deaths !== undefined) {
          liste[a] = newdata[i];
          a = a + 1;
      }
  }

  var values = [];
  for (const i in liste) {
      values[i] = liste[i].country;
  }
  values = values.sort();

  // Elimination des pays en double

  for (var i = 0; i < values.length; i++) {
    while (values[i] === values[i + 1]) {
      values.splice(i + 1, 1)
    }
  }

  var select = document.createElement("select");
  select.id = "lister3"
  select.style = "height:50px;width:292px"
  select.onchange = function() { get_value2() };
  for (const val in values) {
      var option = document.createElement("option");
      option.value = values[val];
      option.text = values[val];
      select.appendChild(option);
  }
  document.getElementById("selector").appendChild(select);
}

function CreateSelectorOption2(data) {
  var element = document.getElementById("lister4");
  if (element !== null) {
      element.remove()
  }

  // Elimination des "undefined"

  let liste = []
  let newdata = []
  for (let i in data) {
    if (data[i].country !== undefined){
      var country = data[i].country
      var countrybis = country.charAt(0) + country.slice(1).toLowerCase()
      newdata.push({'damageAmountOrder': data[i].damageAmountOrder, 'country': countrybis });
    }
  }

  // Elimination des "undefined"

  var a = 0
  for (var i in newdata) {
      if (newdata[i].damageAmountOrder !== undefined) {
          liste[a] = newdata[i];
          a = a + 1;
      }
  }

  var values = [];
  for (const i in liste) {
      values[i] = liste[i].country;
  }
  values = values.sort();

  // Elimination des pays en double

  for (var i = 0; i < values.length; i++) {
    while (values[i] === values[i + 1]) {
      values.splice(i + 1, 1)
    }
  }

  var select = document.createElement("select");
  select.id = "lister4"
  select.style = "height:50px;width:292px"
  select.onchange = function() { get_value3() };
  for (const val in values) {
      var option = document.createElement("option");
      option.value = values[val];
      option.text = values[val];
      select.appendChild(option);
  }
  document.getElementById("selector2").appendChild(select);
}

function traitement_donnee(a) {

    let liste = [];
    let liste_2 = [];

    // Boucle mettant tous le nom du pays dans liste pour chaque évènement 
    for (let i in a) { liste.push(a[i].country); }

    // Boucle permettant d'associé un pays aux nombre de fois qu'il se trouve dans liste
    for (var i = 0; i < liste.length; i++) {
        liste_2.push({ 'country': liste[i].charAt(0).toUpperCase() + liste[i].slice(1).toLowerCase(), 'nbr': liste.filter(x => x === liste[i]).length });

        // Boucle permettant de retirer le pays de liste
        var duplicate = liste[i]
        for (var j = 0; j < liste.length; j++) {
            if (liste[j] === duplicate) {
                liste.splice(j, 1);
                j--;
            }
        }

    }
    return liste_2


}

function traitement_donnee_nom(b) {

    // Boucle permettant de mettre des majuscules aux commencement de chaque mot
    for (let j in b) {
        b[j].country = b[j].country.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    }

    // Boucle permettant le changement de nom de pays
    for (var i = 0; i < b.length; i++) {
        if (b[i].country === 'Usa') { b[i].country = 'United States' }
        if (b[i].country === 'Uk') { b[i].country = 'United Kingdom' }

        if (b[i].country === 'Trinidad And Tobago') { b[i].country = 'Trinidad and Tobago' }
        if (b[i].country === 'South Georgia And The South Sandwich Islands') { b[i].country = 'South Georgia and South Sandwich Islands' }

        if (b[i].country === 'Solomon Is.') { b[i].country = 'Solomon Islands' }
        if (b[i].country === 'Heard I. & Mcdonald Is.') { b[i].country = 'Heard Island and McDonald Islands' }

        if (b[i].country === 'Bosnia-herzegovina') { b[i].country = 'Bosnia and Herzegovina' }
        if (b[i].country === 'Congo') { b[i].country = 'Democratic Republic of the Congo' }
        if (b[i].country === 'Czech Republic') { b[i].country = 'Czechia' }
        if (b[i].country === 'Macedonia') { b[i].country = 'North Macedonia' }
        if (b[i].country === 'Myanmar (Burma)') { b[i].country = 'Myanmar' }
        if (b[i].country === 'Congo, Drc') { b[i].country = 'Democratic Republic of the Congo' }

        if (b[i].country === 'Holland') { b[i].country = 'Netherlands' }

        if (b[i].country === 'Antarctica') { b.splice(i, 1) }
        if (b[i].country === 'Pacific Ocean') { b.splice(i, 1) }
        if (b[i].country === 'Atlantic Ocean') { b.splice(i, 1) }
    }


    // Cette boucle permettant de lié le pays à ses territoires d'outre mer
    // Quand un des territoires est touché par une catastrophe alors tous les autres le sont aussi

    // Pour chaque territoire d'un pays
    for (var n = 0; n < terristoire_des_pays.length; n++) {
        var nbr_total_catastrophe = 0
        for (var m = 0; m < terristoire_des_pays[n].length; m++) {

            // Si un item b.country équivaut à un territoire d'un pays
            // Alors on ajoute à nbr_total_catastrophe le nbr de cata ayant eu lieu dans ce pays 
            // et on retire ce pays de b
            for (var o = 0; o < b.length; o++) {
                if (b[o].country === terristoire_des_pays[n][m]) {
                    nbr_total_catastrophe = nbr_total_catastrophe + b[o].nbr,
                        b.splice(o, 1);
                }
            }
        }
        // Si le nombre de catastrophe est supérieur à 0 alors on associe à chaque territoires d'un pays
        // au nombre de catastrophe totales et on les met dans la matrice liste 2
        if (nbr_total_catastrophe > 0) {
            for (var q = 0; q < terristoire_des_pays[n].length; q++) {
                b.push({ 'country': terristoire_des_pays[n][q], 'nbr': nbr_total_catastrophe });
            }
        }

    };

    return b

}

function cotes_map(data, nombre_total) {
    let data_2 = []
    for (i = 0; i < data.length; i++) {
      if (data[i].nbr === 0) { data_2.push({ 'country': data[i].country, 'nbr': data[i].nbr, 'cote': (nombre_total / (1 * data[i].nbr + 0.01)).toFixed(2) }) } else { data_2.push({ 'country': data[i].country, 'nbr': data[i].nbr, 'cote': (nombre_total / (1 * data[i].nbr)).toFixed(2) }) }
    }
    return data_2
}

function cotes_bouton(a) {

  let nombre_total = a.length;

  var b = traitement_donnee(a);
  var c = traitement_donnee_nom(b);
  var d = rajout_pays(c);
  var f = reject_territory(d); // tous les pays sans les territoires + le nbre d'évènement

  // -------------------------------------------------
  //    Définition des cotes de pari pour chaque pays
  // -------------------------------------------------

  let cote = []
  let listebis = []

  for (i = 0; i < f.length; i++) {

      listebis[i] = f[i].country
  }
  for (i = 0; i < f.length; i++) {
      if (f[i].nbr === 0) { cote[i] = nombre_total / (1 * f[i].nbr + 0.01) } else { cote[i] = nombre_total / (1 * f[i].nbr) }
  }

  // Ajout des pays sur les boutons
  for (i = 1; i < f.length; i++) {
      document.getElementById("country_button" + i).textContent = " ";
  }
  // Ajout de la cote
  for (i = 1; i < f.length; i++) {
      var min = Math.min(...cote);
      var argmin = cote.indexOf(min);
      document.getElementById("country_button" + i).textContent = listebis[argmin] + " : " + cote[argmin].toFixed(2);
      cote.splice(argmin, 1);
      listebis.splice(argmin, 1);
  }


}

function reject_territory(b) {
    // Si un des pays de "territoire_pays" se trouve dans b 
    // Alors on retire ce dernier de b
    for (i = 0; i < territoire_pays.length; i++) {
        var add_country = b.findIndex(img => img.country === territoire_pays[i]) // add_country est l'index de b ou se trouve le
        if (add_country !== -1) {
            b.splice(add_country, 1);
        }
    }
    return b;

}

// Fonction permettant de rajouter les pays ne se trouvant pas dans l'argument de la fonction

function rajout_pays(b) {

    // Si un des pays de "all_country" ne se trouve pas dans b 
    // Alors on rajoute ce dernier avec un nombre de catastrophe valant 0
    for (i = 0; i < all_country.length; i++) {
        var add_country = b.findIndex(img => img.country === all_country[i])
        if (add_country === -1) { b.push({ 'country': all_country[i], 'nbr': 0 }) }
    }
    return b;

}

// Définition de la fonction relative au boutton du changement de carte 
// Permet : le changement de carte et le changement du titre de la carte

function get_value(a) {

  if (a === "boutton") { var selected_value = document.getElementById("lister2").value; } else { var selected_value = document.getElementById("lister").value; }
  if (selected_value === "Nombre de tsunamis pour chaque pays") {
      // Affichage de la nouvelle carte
      new Data2().test5();
      // Changement du titre
      document.getElementById("Titre de la carte").textContent =selected_value;
      document.getElementById("child5_bis").textContent = "Nombre de décès par tsunami";
      document.getElementById("child4_bis").textContent = "Catégorie de dommages par tsunami";
      if (a === "boutton") { document.getElementById("lister2").value = selected_value; }
      document.getElementById("lister2").value = selected_value;
  }
  if (selected_value === "Nombre de tremblements de terre pour chaque pays") {
      // Affichage de la nouvelle carte
      new Data2().test6()
          // Changement du titre
      document.getElementById("Titre de la carte").textContent =selected_value;
      document.getElementById("child5_bis").textContent = "Nombre de décès par tremblement de terre";
      document.getElementById("child4_bis").textContent = "Catégorie de dommages par tremblement de terre";
      if (a === "boutton") { document.getElementById("lister2").value = selected_value; }
      document.getElementById("lister2").value = selected_value;
  }
  if (selected_value === "Nombre d'éruptions volcaniques pour chaque pays") {
      // Affichage de la nouvelle carte
      new Data2().test4()
          // Changement du titre
      document.getElementById("Titre de la carte").textContent =selected_value;
      document.getElementById("child5_bis").textContent = "Nombre de décès par éruption volcanique";
      document.getElementById("child4_bis").textContent = "Catégorie de dommages par éruption volcanique";
      if (a === "boutton") { document.getElementById("lister2").value = selected_value; }
      document.getElementById("lister2").value = selected_value;
  }
}

function get_value2() {
    var country = document.getElementById("lister3").value;
    var selected_value = document.getElementById("lister").value;
    if (selected_value === "Nombre de tsunamis pour chaque pays") {
        new Data1().tsunami(country);
    }
    if (selected_value === "Nombre de tremblements de terre pour chaque pays") {
        new Data1().tremb(country);
    }
    if (selected_value === "Nombre d'éruptions volcaniques pour chaque pays") {
        new Data1().volcan(country);
    }
}

function get_value3() {
  var country = document.getElementById("lister4").value;
  var selected_value = document.getElementById("lister").value;
  if (selected_value === "Nombre de tsunamis pour chaque pays") {
      new Data3().tsunami(country);
  }
  if (selected_value === "Nombre de tremblements de terre pour chaque pays") {
      new Data3().tremb(country);
  }
  if (selected_value === "Nombre d'éruptions volcaniques pour chaque pays") {
      new Data3().volcan(country);
  }
}

function histogram_deaths_volcano(data1, data2, country) {
    d3.select("#svg1 > *").remove();
    const svg = d3.select('#svg1');
    const svgContainer = d3.select('#container');

    let newdata = []
    let newdatabis = []
    var newdatatri = []
    let liste_year = []
    let newdata1 = []
    let newdata2_country = []
    let newdata2_volcanoId = []
    for (let i in data1) {
        newdata1.push({'year': data1[i].year, 'deaths': data1[i].deaths, 'volcanoLocationId': data1[i].volcanoLocationId,'id': data1[i].id });
    }

    for (let i in data2) {
      newdata2_country.push(data2[i].country)
      newdata2_volcanoId.push(data2[i].id);
    }

    for (let i in newdata1) {
      var location = newdata1[i].volcanoLocationId
      var index = newdata2_volcanoId.indexOf(location)
      newdata.push({'year': newdata1[i].year, 'deaths': newdata1[i].deaths, 'country': newdata2_country[index], 'id': newdata1[i].id }); 
    }

    // console.log(newdata)

    // Elimination des "undefined"

    var a = 0
    for (var i = 0; i < newdata.length; i++) {
        if (newdata[i].deaths !== undefined) {
            newdatabis[a] = newdata[i];
            a = a + 1;
        }
    }

    // console.log(newdatabis)

    // Elimination des autres pays

    var a = 0
    country = country
    for (var i = 0; i < newdatabis.length; i++) {
        if (newdatabis[i].country === country) {
            newdatatri[a] = newdatabis[i];
            liste_year[a] = newdatabis[i].year;
            a = a + 1;
        }
    }

    // console.log(newdatatri)

    // Ordre de date décroissant

    const b = liste_year.length
    newdata = []
    for (i = 0; i < b; i++) {
        var max = Math.max(...liste_year);
        var index = liste_year.indexOf(max);
        newdata[i] = newdatatri[index];
        liste_year.splice(index, 1);
        newdatatri.splice(index, 1);
    }

    // console.log(newdata)

    const margin = 60;
    const width = 0.9 * b * margin; // 1500
    const height = 330 - 2 * margin;

    const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${85 * margin/100})`);

    const xScale = d3.scaleBand()
        .range([0, width])
        .domain(newdata.map((s) => s.year + s.country + s.deaths + s.id))
        .padding(0.4)

    const yScale = d3.scaleLog()
        .range([height, 0])
        .domain([1, 100000]);

    const makeYLines = () => d3.axisLeft()
        .scale(yScale)

    chart.append('g')
        .attr('transform', `translate(0, ${107 * height/100})`)
        .call(xScale)
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        // .attr("transform", "rotate(-20)")
        .style("text-anchor", "end");

    chart.append('g')
        .call(d3.axisLeft(yScale))


    chart.append('g')
        .attr('class', 'grid')
        .call(makeYLines()
            .tickSize(-width, 0, 0)
            .tickFormat('')
        )

    const barGroups = chart.selectAll()
        .data(newdata)
        .enter()
        .append('g')

    barGroups
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (g) => xScale(g.year + g.country + g.deaths + g.id))
        .attr('y', (g) => yScale(g.deaths))
        .attr('height', (g) => height - yScale(g.deaths + 0.1))
        .attr('width', xScale.bandwidth())
        .on('mouseenter', function(actual, i) {
            d3.selectAll('.deaths')
                .attr('opacity', 0)
        })

    barGroups
        .append('text')
        .attr('class', 'value')
        .attr('x', (a) => xScale(a.year + a.country + a.deaths + a.id) + xScale.bandwidth() / 2)
        .attr('y', (a) => yScale(a.deaths))
        .attr('text-anchor', 'middle')
        .text((a) => `${a.deaths}`)

    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.year + a.country + a.deaths + a.id) + xScale.bandwidth() / 2)
      .attr('y', yScale(1)-yScale(900000))
      .attr('text-anchor', 'middle')
      .text((a) => `#${a.id}`)
    
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.year + a.country + a.deaths + a.id) + xScale.bandwidth() / 2)
      .attr('y', yScale(1)-yScale(250000))
      .attr('text-anchor', 'middle')
      .text((a) => `${a.year}`)
}

function histogram_damages_volcano(data1, data2, country) {
  d3.select("#svg2 > *").remove();
  const svg = d3.select('#svg2');
  const svgContainer = d3.select('#container');

  let newdata = []
  let newdatabis = []
  var newdatatri = []
  let liste_year = []
  let newdata1 = []
  let newdata2_country = []
  let newdata2_volcanoId = []
  for (let i in data1) {
      newdata1.push({'year': data1[i].year, 'damageAmountOrder': data1[i].damageAmountOrder, 'volcanoLocationId': data1[i].volcanoLocationId, 'id': data1[i].id });
  }

  for (let i in data2) {
    newdata2_country.push(data2[i].country)
    newdata2_volcanoId.push(data2[i].id);
  }

  for (let i in newdata1) {
    var location = newdata1[i].volcanoLocationId
    var index = newdata2_volcanoId.indexOf(location)
    newdata.push({'year': newdata1[i].year, 'damageAmountOrder': newdata1[i].damageAmountOrder, 'country': newdata2_country[index], 'id': newdata1[i].id }); 
  }

  // console.log(newdata)

  // Elimination des "undefined"

  var a = 0
  for (var i = 0; i < newdata.length; i++) {
      if (newdata[i].damageAmountOrder !== undefined) {
          newdatabis[a] = newdata[i];
          a = a + 1;
      }
  }

  // console.log(newdatabis)

  // Elimination des autres pays

  var a = 0
  country = country
  for (var i = 0; i < newdatabis.length; i++) {
      if (newdatabis[i].country === country) {
          newdatatri[a] = newdatabis[i];
          liste_year[a] = newdatabis[i].year;
          a = a + 1;
      }
  }

  // console.log(newdatatri)

  // Ordre de date décroissant

  const b = liste_year.length
  newdata = []
  for (i = 0; i < b; i++) {
      var max = Math.max(...liste_year);
      var index = liste_year.indexOf(max);
      newdata[i] = newdatatri[index];
      liste_year.splice(index, 1);
      newdatatri.splice(index, 1);
  }

  // console.log(newdata)

  const margin = 60;
  const width = 0.9 * b * margin; // 1500
  const height = 330 - 2 * margin;

  const chart = svg.append('g')
      .attr('transform', `translate(${margin}, ${85 * margin/100})`);

  const xScale = d3.scaleBand()
      .range([0, width])
      .domain(newdata.map((s) => s.year + s.country + s.damageAmountOrder + s.id))
      .padding(0.4)

  const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 4]);

  const makeYLines = () => d3.axisLeft()
      .scale(yScale)

  chart.append('g')
      .attr('transform', `translate(0, ${107 * height/100})`)
      .call(xScale)
      .selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".35em")
      // .attr("transform", "rotate(-20)")
      .style("text-anchor", "end");

  chart.append('g')
      .call(d3.axisLeft(yScale))


  chart.append('g')
      .attr('class', 'grid')
      .call(makeYLines()
          .tickSize(-width, 0, 0)
          .tickFormat('')
      )

  const barGroups = chart.selectAll()
      .data(newdata)
      .enter()
      .append('g')

  barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.year + g.country + g.damageAmountOrder + g.id))
      .attr('y', (g) => yScale(g.damageAmountOrder))
      .attr('height', (g) => height - yScale(g.damageAmountOrder + 0.1))
      .attr('width', xScale.bandwidth())
      .on('mouseenter', function(actual, i) {
          d3.selectAll('.damageAmountOrder')
              .attr('opacity', 0)
      })

  barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.year + a.country + a.damageAmountOrder + a.id) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.damageAmountOrder))
      .attr('text-anchor', 'middle')
      .text((a) => `${a.damageAmountOrder}`)

  barGroups
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.year + a.country + a.damageAmountOrder + a.id) + xScale.bandwidth() / 2)
    .attr('y', yScale(-0.8))
    .attr('text-anchor', 'middle')
    .text((a) => `#${a.id}`)
  
  barGroups
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.year + a.country + a.damageAmountOrder + a.id) + xScale.bandwidth() / 2)
    .attr('y', yScale(-0.4))
    .attr('text-anchor', 'middle')
    .text((a) => `${a.year}`)
}

function histogram_deaths(data, country) {
  d3.select("#svg1 > *").remove();
  const svg = d3.select('#svg1');
  const svgContainer = d3.select('container');

  let newdata = []
  let newdatabis = []
  var newdatatri = []
  let liste_year = []

  for (let i in data) {
      newdata.push({ 'year': data[i].year, 'deaths': data[i].deaths, 'country': data[i].country, 'id': data[i].id });
  }

  // Elimination des "undefined"

  var a = 0
  for (var i = 0; i < newdata.length; i++) {
      if (newdata[i].deaths !== undefined) {
          newdatabis[a] = newdata[i];
          a = a + 1;
      }
  }

  // Elimination des autres pays

  var a = 0
  country = country.toUpperCase()
  for (var i = 0; i < newdatabis.length; i++) {
      if (newdatabis[i].country === country) {
          newdatatri[a] = newdatabis[i];
          liste_year[a] = newdatabis[i].year;
          a = a + 1;
      }
  }

  // Ordre de date décroissant

  const b = liste_year.length
  newdata = []
  for (i = 0; i < b; i++) {
      var max = Math.max(...liste_year);
      var index = liste_year.indexOf(max);
      newdata[i] = newdatatri[index];
      liste_year.splice(index, 1);
      newdatatri.splice(index, 1);
  }

  console.log(newdata)

  const margin = 60;
  const width = 0.9 * b * margin; // 1500
  const height = 330 - 2 * margin;

  const chart = svg.append('g')
      .attr('transform', `translate(${margin}, ${85 * margin/100})`);

  const xScale = d3.scaleBand()
      .range([0, width])
      .domain(newdata.map((s) => s.year + s.country + s.deaths + s.id))
      .padding(0.4)

  const yScale = d3.scaleLog()
      .range([height, 0])
      .domain([1, 100000]);

  const makeYLines = () => d3.axisLeft()
      .scale(yScale)

  chart.append('g')
      .attr('transform', `translate(0, ${107 * height/100})`)
      .call(xScale)
      .selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".35em")
      // .attr("transform", "rotate(-20)")
      .attr("text-anchor", "end");

  chart.append('g')
      .call(d3.axisLeft(yScale))


  chart.append('g')
      .attr('class', 'grid')
      .call(makeYLines()
          .tickSize(-width, 0, 0)
          .tickFormat('')
      )

  const barGroups = chart.selectAll()
      .data(newdata)
      .enter()
      .append('g')

  barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.year + g.country + g.deaths + g.id))
      .attr('y', (g) => yScale(g.deaths))
      .attr('height', (g) => height - yScale(g.deaths + 0.1))
      .attr('width', xScale.bandwidth())

  barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.year + a.country + a.deaths + a.id) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.deaths))
      .attr('text-anchor', 'middle')
      .text((a) => `${a.deaths}`)

  barGroups
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.year + a.country + a.deaths + a.id) + xScale.bandwidth() / 2)
    .attr('y', yScale(1)-yScale(900000))
    .attr('text-anchor', 'middle')
    .text((a) => `#${a.id}`)

    barGroups
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.year + a.country + a.deaths + a.id) + xScale.bandwidth() / 2)
    .attr('y', yScale(1)-yScale(250000))
    .attr('text-anchor', 'middle')
    .text((a) => `${a.year}`)
}

function histogram_damages(data, country) {
  d3.select("#svg2 > *").remove();
  const svg = d3.select('#svg2');
  const svgContainer = d3.select('container');

  let newdata = []
  let newdatabis = []
  var newdatatri = []
  let liste_year = []

  for (let i in data) {
      newdata.push({ 'year': data[i].year, 'damageAmountOrder': data[i].damageAmountOrder, 'country': data[i].country, 'id' : data[i].id});
  }

  // Elimination des "undefined"

  var a = 0
  for (var i = 0; i < newdata.length; i++) {
      if (newdata[i].damageAmountOrder !== undefined) {
          newdatabis[a] = newdata[i];
          a = a + 1;
      }
  }

  // Elimination des autres pays

  var a = 0
  country = country.toUpperCase()
  for (var i = 0; i < newdatabis.length; i++) {
      if (newdatabis[i].country === country) {
          newdatatri[a] = newdatabis[i];
          liste_year[a] = newdatabis[i].year;
          a = a + 1;
      }
  }

  // Ordre de date décroissant

  const b = liste_year.length
  newdata = []
  for (i = 0; i < b; i++) {
      var max = Math.max(...liste_year);
      var index = liste_year.indexOf(max);
      newdata[i] = newdatatri[index];
      liste_year.splice(index, 1);
      newdatatri.splice(index, 1);
  }

  // console.log(newdatabis)

  const margin = 60;
  const width = 0.9 * b * margin; // 1500
  const height = 330 - 2 * margin;

  const chart = svg.append('g')
      .attr('transform', `translate(${margin}, ${85 * margin/100})`);

  const xScale = d3.scaleBand()
      .range([0, width])
      .domain(newdata.map((s) => s.year + s.country + s.damageAmountOrder + s.id))
      .padding(0.4)

  const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 4]);

  const makeYLines = () => d3.axisLeft()
      .scale(yScale)

  chart.append('g')
      .attr('transform', `translate(0, ${107 * height/100})`)
      .call(xScale)
      .selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".35em")
      // .attr("transform", "rotate(-20)")
      .style("text-anchor", "end");

  chart.append('g')
      .call(d3.axisLeft(yScale))


  chart.append('g')
      .attr('class', 'grid')
      .call(makeYLines()
          .tickSize(-width, 0, 0)
          .tickFormat('')
      )

  const barGroups = chart.selectAll()
      .data(newdata)
      .enter()
      .append('g')

  barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.year + g.country + g.damageAmountOrder + g.id))
      .attr('y', (g) => yScale(g.damageAmountOrder))
      .attr('height', (g) => height - yScale(g.damageAmountOrder + 0.1))
      .attr('width', xScale.bandwidth())
      .on('mouseenter', function(actual, i) {
          d3.selectAll('.damageAmountOrder')
              .attr('opacity', 0)
      })

  barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.year + a.country + a.damageAmountOrder + a.id) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.damageAmountOrder))
      .attr('text-anchor', 'middle')
      .text((a) => `${a.damageAmountOrder}`)

    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.year + a.country + a.damageAmountOrder + a.id) + xScale.bandwidth() / 2)
      .attr('y', yScale(-0.8))
      .attr('text-anchor', 'middle')
      .text((a) => `#${a.id}`)
  
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.year + a.country + a.damageAmountOrder + a.id) + xScale.bandwidth() / 2)
      .attr('y', yScale(-0.4))
      .attr('text-anchor', 'middle')
      .text((a) => `${a.year}`)
}

class Data2 {

    constructor(name) {
        // Prise des données relatives aux légendes dans le html 
        this.countryLegendEl_1 = document.getElementById("county-legend1");
        this.countryLegendEl_2 = document.getElementById("county-legend2");
        this.countryLegendEl_3 = document.getElementById("county-legend3");
    }

    async test4() {
        // Téléchargement des données
        var EQ = await d3.json("./volcano_locations.json");

        // Traitement des données 
        var liste_2 = traitement_donnee(EQ);
        var liste_3 = traitement_donnee_nom(liste_2);
        // Tracer les graphiques
        var EQ2 = await d3.json("./volcano_events.json");
        CreateSelectorOption_volcano(EQ2, EQ);
        get_value2()
        CreateSelectorOption_volcano2(EQ2, EQ);
        get_value3()
        var liste_4 = rajout_pays(liste_3);
        var liste_5 = cotes_map(liste_4, EQ.length);

        // Tracer la carte 
        graphes(liste_5, "eruption");

        // Calcul des côtes pour chaque pays
        cotes_bouton(EQ)

        // Montrer la légende
        this.countryLegendEl_1.style.display = 'block';
        this.countryLegendEl_2.style.display = 'none';
        this.countryLegendEl_3.style.display = 'none';

    }

    async test5() {
        // Téléchargement des données 
        var EQ = await d3.json("./tsunamis_events.json");

        // Traitement des données  
        var liste_2 = traitement_donnee(EQ);
        var liste_3 = traitement_donnee_nom(liste_2);
        // Tracer les graphiques
        CreateSelectorOption(EQ);
        get_value2()
        CreateSelectorOption2(EQ);
        get_value3()
        var liste_4 = rajout_pays(liste_3);
        var liste_5 = cotes_map(liste_4, EQ.length);


        // Tracer la carte 
        graphes(liste_5, "tsunami");

        // Calcul des côtes pour chaque pays
        cotes_bouton(EQ);

        // Montrer la légende
        this.countryLegendEl_3.style.display = 'block';
        this.countryLegendEl_1.style.display = 'none';
        this.countryLegendEl_2.style.display = 'none';
    }


    async test6() {
        // Téléchargement des données
        var EQ = await d3.json("./earthquakes_events.json");

        // Traitement des données
        var liste_2 = traitement_donnee(EQ);
        var liste_3 = traitement_donnee_nom(liste_2);
        // Tracer les graphiques
        CreateSelectorOption(EQ);
        get_value2()
        CreateSelectorOption2(EQ);
        get_value3()
        var liste_4 = rajout_pays(liste_3);
        var liste_5 = cotes_map(liste_4, EQ.length);

        // Tracer la carte
        graphes(liste_5, "tremblement");

        // Calcul des côtes pour chaque pays
        cotes_bouton(EQ);

        // Montrer la légende
        this.countryLegendEl_2.style.display = 'block';
        this.countryLegendEl_1.style.display = 'none';
        this.countryLegendEl_3.style.display = 'none';


    }

}

class Data1 {

    async volcan(country) {
        var EQ = await d3.json("./volcano_events.json");
        var EQ2 = await d3.json("./volcano_locations.json");
        histogram_deaths_volcano(EQ, EQ2, country);
    }
    async tsunami(country) {
        var EQ = await d3.json("./tsunamis_events.json");
        histogram_deaths(EQ, country);
    }
    async tremb(country) {
        var EQ = await d3.json("./earthquakes_events.json");
        histogram_deaths(EQ, country);
    }
}

class Data3 {

  async volcan(country) {
      var EQ = await d3.json("./volcano_events.json");
      var EQ2 = await d3.json("./volcano_locations.json");
      histogram_damages_volcano(EQ, EQ2, country);
  }
  async tsunami(country) {
      var EQ = await d3.json("./tsunamis_events.json");
      histogram_damages(EQ, country);
  }
  async tremb(country) {
      var EQ = await d3.json("./earthquakes_events.json");
      histogram_damages(EQ, country);
  }
}

new Data2().test6()