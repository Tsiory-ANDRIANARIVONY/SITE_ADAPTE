function chargerContenu(id, element) {
    const items = document.querySelectorAll('li');
        items.forEach(item => item.classList.remove('active'));

  // 2. Ajouter la classe 'active' UNIQUEMENT sur l'élément cliqué
    if (element) {
        element.classList.add('active');
  }
    const Affichage = document.getElementById('Affichage');

    switch (id) {
        case 'Cramer':

      Affichage.innerHTML = `
        <div id="Conteneur1">

            <div id='titre'>
                <h2 id="Resolution">Résolution de Cramer</h2>
            </div>
            <div id="Formulaire">
              <div id="Eq1">
                <label for="A11">A11 : </label>
                <input type="number" id="A11" placeholder="Ex: 1">

                <label for="A12">A12 :</label>
                <input type="number" id="A12" placeholder="Ex: 2">
        
                <label for="A13">A13 :</label>
                <input type="number" id="A13" placeholder="Ex: 3">
        
                <label for="d">B1 :</label>
                <input type="number" id="B1" placeholder="Ex: 6">
              </div>

              <div id="Eq2">
                <label for="A21">A21 :</label>
                <input type="number" id="A21" placeholder="Ex: 1">

                <label for="A22">A22 :</label>
                <input type="number" id="A22" placeholder="Ex: 2">
        
                <label for="A23">A23 :</label>
                <input type="number" id="A23" placeholder="Ex: 3">
        
                <label for="d">B2 :</label>
                <input type="number" id="B2" placeholder="Ex: 6">
              </div>

              <div id="Eq3">
                <label for="A31">A31 : </label>
                <input type="number" id="A31" placeholder="Ex: 1">

                <label for="A32">A32 :</label>
                <input type="number" id="A32" placeholder="Ex: 2">
        
                <label for="A33">A33 :</label>
                <input type="number" id="A33" placeholder="Ex: 3">
        
                <label for="d">B3 : </label>
                <input type="number" id="B3" placeholder="Ex: 6">
              </div>

              <button id="RESOUDRE">RESOUDRE</button>

              <div id="resultat"></div>
          </div>
      `;
      document.getElementById('RESOUDRE').addEventListener('click', RESOUDRECramer);
      break;

    case 'Image':

      Affichage.innerHTML = `
        <div id="Conteneur2">
          <h2 id="Redim-img">Redimensionner l'image</h2>

            <!-- Couche contenant l'image -->
          <div id="m-img">
        
            <div class="controle">
                <h2>Panneau de redimensionnement :</h2>
                <label>
                    Largeur :
                    <span id="valeur-largeur">480</span> px
                </label>

                <div id="slider-largeur" class="slider"></div>


                <label>
                    Hauteur :
                    <span id="valeur-hauteur">310</span> px
                </label>

                <div id="slider-hauteur" class="slider"></div>

            </div>

            <div id="zone-zone-image">
              <div id="zone-image">
                <input type="file" id="image" accept="image/*">
                <label for="image" id="btn-fichier">
                  📁 Choisir une image
                </label>
              </div>
            </div>
          </div>
        </div>
      `;
      $("#image").change(function() {

        let fichier = this.files[0];

        if (fichier) {
            let url = URL.createObjectURL(fichier);

            $("#zone-image").html(
                '<img src="' + url + '">'
            );
        }

      });

     $("#slider-largeur").slider({
         min: 100,
         max: 600,
         value: 480,
         range: "min",

         slide: function(event, ui) {
             $("#zone-image").css("width", ui.value + "px");
             $("#valeur-largeur").text(ui.value);
         }
     });

     $("#slider-hauteur").slider({
         min: 100,
         max: 440,
         value: 310,
         range: "min",

         slide: function(event, ui) {
             $("#zone-image").css("height", ui.value + "px");
             $("#valeur-hauteur").text(ui.value);
         }
     });

    break;

    case 'Panneau':
      Affichage.innerHTML = `<div class="panel-page">
          <h2 id="Panneau">Panneau publicitaire — construction</h2>
          <div class="panel-controls">
            <button id="startPan">Démarrer</button>
            <button id="stopPan">Arrêter</button>
            <label style="margin-left:12px">Intervalle (ms): <input id="intervalMs" type="number" value="1200" min="200" style="width:100px"></label>
          </div>
          <div id="adPanel" class="ad-panel" style="width:420px;height:280px;margin:18px auto;position:relative;overflow:hidden;border-radius:8px;border:1px solid #ccc;background:#222;"></div>
        </div>
      `;

      // Construire le panneau après injection
      createPanneau();
      document.getElementById('startPan').addEventListener('click', startRotation);
      document.getElementById('stopPan').addEventListener('click', stopRotation);
      break;
     
    case 'Datatable':
      Affichage.innerHTML = `
          <div id="Conteneur4">
          <h2 id="Donnees">Liste des produits</h2>

          <div id="FormAjout" style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:12px;">
            <label>Désignation :
              <select id="selectDesignation">
                <option value="Riz">Riz</option>
                <option value="Manioc">Manioc</option>
                <option value="Sucre">Sucre</option>
                <option value="Patate">Patate</option>
                <option value="Maïs">Maïs</option>
                <option value="Haricot">Haricot</option>
                <option value="Farine">Farine</option>
                <option value="Huile">Huile</option>
                <option value="Café">Café</option>
                <option value="Lait">Lait</option>
                <option value="Sel">Sel</option>
                <option value="Oignon">Oignon</option>
              </select>
            </label>
            <label>Quantité : <input type="number" id="inputQuantite" min="1" style="width:80px"></label>
            <label>Prix (Ar) : <input type="number" id="inputPrix" min="1" style="width:100px"></label>
            <button id="btnAjouter" type="button">Ajouter</button>
            <span id="messageLimite" style="color:red;display:none;">Limite de 10 produits atteinte</span>
        </div>

        <table id="tableProduits" class="display" style="width:100%">
          <thead>
            <tr>
              <th>Désignation</th>
              <th>Quantité</th>
              <th>Prix</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody></tbody>
          <tfoot>
            <tr id="ligneTotal">
              <th>TOTAL</th>
              <th id="totalQuantite">0</th>
              <th></th>
              <th id="totalMontant">0 Ar</th>
            </tr>
          </tfoot>
        </table>

        <div id="Statistiques" style="display:flex;gap:40px;align-items:center;margin-top:24px;flex-wrap:wrap;">
          <div id="StatsTexte" style="display:flex;flex-direction:column;gap:10px;min-width:200px;">
            <p>Prix moyen : <span id="prixMoyen">0</span> Ar</p>
            <p>Prix minimal : <span id="prixMin">0</span> Ar</p>
            <p>Prix maximal : <span id="prixMax">0</span> Ar</p>
          </div>
          <div style="flex:0 0 380px;max-width:100%;">
          <canvas id="graphePrix" width="380" height="240"></canvas>
          </div>
        </div>
      </div>
  `;
  initDatatable(); // on construit le tableau et on branche le bouton
  break;

  
  }
}

// CRAMER
function det3x3(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
  return a11 * (a22 * a33 - a23 * a32) 
       - a12 * (a21 * a33 - a23 * a31) 
       + a13 * (a21 * a32 - a22 * a31);
}

function RESOUDRECramer() {
  const A11 = Number(document.getElementById('A11').value);
  const A12 = Number(document.getElementById('A12').value);
  const A13 = Number(document.getElementById('A13').value);
  const B1  = Number(document.getElementById('B1').value);

  const A21 = Number(document.getElementById('A21').value);
  const A22 = Number(document.getElementById('A22').value);
  const A23 = Number(document.getElementById('A23').value);
  const B2  = Number(document.getElementById('B2').value);

  const A31 = Number(document.getElementById('A31').value);
  const A32 = Number(document.getElementById('A32').value);
  const A33 = Number(document.getElementById('A33').value);
  const B3  = Number(document.getElementById('B3').value);

  const D = det3x3(A11, A12, A13, A21, A22, A23, A31, A32, A33);

  if (D === 0) {
    document.getElementById('resultat').textContent = "Le système n'a pas de solution";
    return;
  }

  const D1 = det3x3(B1, A12, A13, B2, A22, A23, B3, A32, A33);
  const D2 = det3x3(A11, B1, A13, A21, B2, A23, A31, B3, A33);
  const D3 = det3x3(A11, A12, B1, A21, A22, B2, A31, A32, B3);

  const X1 = D1 / D;
  const X2 = D2 / D;
  const X3 = D3 / D;

  document.getElementById('resultat').innerHTML = `
    <li id="X1">X1 = ${X1}<br></li>
    <li id="X2">X2 = ${X2}<br></li>
    <li id="X3">X3 = ${X3}</li>
  `;
}
//PANNEAU
// panneau pub (couches)
let panelLayers = [];
let panelIntervalId = null;
let panelCurrent = 0;

function createPanneau() {
  const adPanel = document.getElementById('adPanel');
  if (!adPanel) return;
  // réinitialiser
  panelLayers = [];
  panelCurrent = 0;
  if (panelIntervalId) { clearInterval(panelIntervalId); panelIntervalId = null; }
  adPanel.innerHTML = '';

  // images locales
  const items = [
    { label: 'Riz', img: 'images/Riz.jpg' },
    { label: 'Manioc', img: 'images/Manioc.jpg' },
    { label: 'Sucre', img: 'images/Sucre.jpg' },
    { label: 'Patate', img: 'images/Patate.jpg' }
  ];

  items.forEach((it, i) => {
    const layer = document.createElement('div');
    layer.className = 'ad-layer';
    layer.dataset.index = i;
    layer.style.position = 'absolute';
    layer.style.left = '50%';
    layer.style.top = '50%';
    layer.style.transform = 'translate(-50%,-50%)';

    const img = document.createElement('img');
    img.src = it.img;
    img.alt = it.label;
    img.className = 'layer-img';

    const label = document.createElement('div');
    label.className = 'layer-label';
    label.textContent = it.label;

    layer.appendChild(img);
    layer.appendChild(label);

    adPanel.appendChild(layer);
    panelLayers.push(layer);
  });

  // position initiale
  updatePanel();
}

// mettre à jour positions des couches
function updatePanel() {
  const n = panelLayers.length;
  if (n === 0) return;
  panelLayers.forEach((layer, i) => {
    const pos = (i - panelCurrent + n) % n; // 0 = front, 1 = next, 2 = behind, ...
    layer.style.transition = 'transform 600ms cubic-bezier(.22,.9,.32,1), opacity 500ms ease';
    if (pos === 0) {
      layer.style.zIndex = n + 10;
      layer.style.opacity = '1';
      layer.style.transform = 'translate(-50%,-50%) scale(1)';
      layer.style.filter = 'none';
    } else if (pos === 1) {
      layer.style.zIndex = n + 5;
      layer.style.opacity = '0.95';
      layer.style.transform = 'translate(-50%,calc(-50% + 14px)) scale(0.96)';
      layer.style.filter = 'brightness(.95)';
    } else if (pos === 2) {
      layer.style.zIndex = n;
      layer.style.opacity = '0.8';
      layer.style.transform = 'translate(-50%,calc(-50% + 28px)) scale(0.92)';
      layer.style.filter = 'brightness(.85)';
    } else {
      // plus en arrière
      layer.style.zIndex = n - pos;
      layer.style.opacity = '0.6';
      layer.style.transform = 'translate(-50%,calc(-50% + 40px)) scale(0.88)';
      layer.style.filter = 'brightness(.75)';
    }
  });
}

// avancer la file
function rotateNext() {
  if (panelLayers.length === 0) return;
  panelCurrent = (panelCurrent + 1) % panelLayers.length;
  updatePanel();
}

// démarrer
function startRotation() {
  const ms = Number(document.getElementById('intervalMs').value) || 1200;
  if (panelIntervalId) clearInterval(panelIntervalId);
  panelIntervalId = setInterval(rotateNext, ms);
}

// arrêter
function stopRotation() {
  if (panelIntervalId) { clearInterval(panelIntervalId); panelIntervalId = null; }
}


//Datatable
let produits = [];   //tous les produits ajoutés
let tableDT = null; // référence vers l'instance DataTable
let chartPrix = null; // référence vers le graphique Chart.js

function initDatatable() {
  produits = []; // vidé à chaque réouverture de l'onglet

// Création du DataTable, vide au départ
  tableDT = $('#tableProduits').DataTable({
    data: [],
   columns: [
  { data: 'designation' },
  { data: 'quantite' },
  {
    data: 'prix',
    /* 'type' nous dit ce que DataTables est en train de faire :
    display = affichage à l'écran, sort/filter = tri et recherche
    on garde le nombre brut pour le tri, et on ajoute "Ar" juste pour l'affichage */
    render: function(data, type, row) {
      return type === 'display' ? data + ' Ar' : data;
    }
  },
  {
  // colonne calculée : pas de data directe, on calcule le montant nous-mêmes
    data: null,
    render: function(data, type, row) {
      const montant = row.quantite * row.prix;
      return type === 'display' ? montant + ' Ar' : montant;
    }
  }
],
    paging: false,      // inutile : on a 10 produits max, pas besoin de pages
    lengthChange: false, // supprime le menu "afficher 10/25/50..."
    info: false,       // supprime le texte "affichage de x à y sur z"
    searching: true,     // recherche
    ordering: true,
    language: {
      search: "Rechercher :",
      zeroRecords: "Aucun produit ne correspond à la recherche",
      emptyTable: "Aucun produit pour l'instant — utilisez le formulaire ci-dessus"
    }
  });

  updateTotauxEtStats(); // affiche 0 partout au départ

  document.getElementById('btnAjouter').addEventListener('click', ajouterProduit);
}

// Appelée quand on clique sur "Ajouter"
function ajouterProduit() {
  // on bloque si on a déjà atteint la limite
  if (produits.length >= 10) return;

  const designation = document.getElementById('selectDesignation').value;
  const quantite = Number(document.getElementById('inputQuantite').value);
  const prix = Number(document.getElementById('inputPrix').value);

  // on vérifie que les champs sont bien remplis avant d'ajouter
  if (!quantite || !prix || quantite <= 0 || prix <= 0) {
    alert("Veuillez saisir une quantité et un prix valides.");
    return;
  }

  const produit = { designation, quantite, prix };
  produits.push(produit); // on garde une trace dans notre tableau JS

  /* on ajoute la ligne via l'API DataTables (row.add), pas en touchant le HTML à la main,
  sinon le tri et la recherche de DataTables ne fonctionnent plus correctement */
  tableDT.row.add(produit).draw(false);

  // on vide les champs pour le prochain ajout
  document.getElementById('inputQuantite').value = '';
  document.getElementById('inputPrix').value = '';

  updateTotauxEtStats(); // on recalcule totaux, stats et graphe

  // si on vient d'atteindre 10, on bloque le bouton
  const btn = document.getElementById('btnAjouter');
  const msg = document.getElementById('messageLimite');
  if (produits.length >= 10) {
    btn.disabled = true;
    msg.style.display = 'inline';
  }
}

/* Recalcule le total, les stats (moyen/min/max) et redessine le graphique
Se base sur "produits" (tous les produits), pas sur ce qui est filtré par la recherche */
function updateTotauxEtStats() {
  let totalQuantite = 0;
  let totalMontant = 0;
  produits.forEach(p => {
    totalQuantite += p.quantite;
    totalMontant += p.quantite * p.prix;
  });
  document.getElementById('totalQuantite').textContent = totalQuantite;
  document.getElementById('totalMontant').textContent = totalMontant + ' Ar';

  const ctx = document.getElementById('graphePrix').getContext('2d');

  // si aucun produit, on remet tout à zéro et on enlève le graphe
  if (produits.length === 0) {
    document.getElementById('prixMoyen').textContent = 0;
    document.getElementById('prixMin').textContent = 0;
    document.getElementById('prixMax').textContent = 0;
    if (chartPrix) { chartPrix.destroy(); chartPrix = null; }
    return;
  }

  const prixListe = produits.map(p => p.prix);
  const moyen = prixListe.reduce((a, b) => a + b, 0) / prixListe.length;
  const min = Math.min(...prixListe);
  const max = Math.max(...prixListe);

  document.getElementById('prixMoyen').textContent = moyen.toFixed(0);
  document.getElementById('prixMin').textContent = min;
  document.getElementById('prixMax').textContent = max;

  // on détruit l'ancien graphe avant d'en recréer un, sinon Chart.js superpose les anciens
  if (chartPrix) chartPrix.destroy();
  chartPrix = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Prix moyen', 'Prix minimal', 'Prix maximal'],
      datasets: [{
        label: 'Prix (Ar)',
        data: [moyen.toFixed(0), min, max],
        backgroundColor: ['#247BA0', '#AEDFF7', '#5959c5']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}