//Script permettant de charger les différents catalogue
test();
var div_boutique = document.querySelector(".boutique")

function charger_catalogue(catalogue_a_afficher, display_mode) {
    catalogue_a_afficher.forEach(item => {
        //Création de la div produit
        var div_produit = document.createElement("div");
        div_produit.setAttribute("class","produit "+item.categorie);
        div_produit.setAttribute("id",item.id)
        div_produit.style.display  = display_mode
        div_boutique.appendChild(div_produit)
        //Création et ajout de l'image
        var img_produit = document.createElement("img");
        img_produit.setAttribute("class","img_produit");
        img_produit.setAttribute("href",item.img);
        div_produit.appendChild(img_produit);
        //Création et ajout de la sous-div contenant les infos
            var div_info_produit = document.createElement("div");
            div_info_produit.setAttribute("class","info_quantite");
            div_produit.appendChild(div_info_produit);
            //Création et ajout champs nom du priduit
            var p_nom_produit = document.createElement("p");
            p_nom_produit.setAttribute("class","nom_produit");
            p_nom_produit.innerHTML = item.name;
            div_info_produit.appendChild(p_nom_produit);
            //Création et ajout img logo + 
            var img_logo_plus = document.createElement("img");
            img_logo_plus.setAttribute("class","btn_plus "+item.id);
            img_logo_plus.setAttribute("src","Style/logo_plus.png");
            div_info_produit.appendChild(img_logo_plus);
            //Création et ajout champs quantité produit
            var p_selection = document.createElement("p");
            p_selection.setAttribute("class","selection "+item.id);
            p_selection.innerHTML = "0";
            div_info_produit.appendChild(p_selection);
            //Création et ajout img logo -
            var img_logo_moins = document.createElement("img");
            img_logo_moins.setAttribute("class","btn_moins "+item.id);
            img_logo_moins.setAttribute("src","Style/logo_moin.png");
            div_info_produit.appendChild(img_logo_moins);
        //Création et ajout bouton ajouter panier
        var div_ajouter_panier = document.createElement("div");
        div_ajouter_panier.setAttribute("class","ajouter_panier "+item.id);
        div_produit.appendChild(div_ajouter_panier);
        //Création et ajout img logo_panier
        var img_logo_panier = document.createElement("img");
        img_logo_panier.setAttribute("class","logo_panier")
        img_logo_panier.setAttribute("src","Style/ajouter_panier.png")
        div_ajouter_panier.appendChild(img_logo_panier);
    });
}

function charger_tous_les_catalogues() {
    charger_catalogue(catalogue_pdt, "none")
    charger_catalogue(catalogue_voiture, "initial")
    //charger_catalogue(catalogue_informatique, "none")
    //charger_catalogue(catalogue_oiseau, "none")
    //charger_catalogue(catalogue_peluche, "none")
}

function afficher_catalogue(catalogue_a_afficher) {
    var tableau_produit = document.querySelectorAll(".produit."+catalogue_a_afficher);
    tableau_produit.forEach(element => {
        element.style.display = 'initial'
    });
}

function cacher_catalogue(catalogue_a_cacher) {
    var tableau_produit = document.querySelectorAll(".produit."+catalogue_a_cacher);
    tableau_produit.forEach(element => {
        element.style.display = 'none'
    });
}

//On charge les catalogue
charger_tous_les_catalogues();

//Listener qui permet de changer les catalogues en fonction des clics sur les catégories
var cat = document.querySelectorAll(".catalogue");
console.log(cat)
cat.forEach(element => {
    element.addEventListener('click', function() {
        console.log("Vous m'avez cliqué !");
        var id_div_clicked = this.getAttribute('id');
        console.log(id_div_clicked)
        switch (id_div_clicked) {
            case "voiture":
                afficher_catalogue("voiture");
                cacher_catalogue("pdt");
                cacher_catalogue("informatique");
                cacher_catalogue("oiseau");
                cacher_catalogue("peluche");
                break;
            case "pdt":
                afficher_catalogue("pdt");
                cacher_catalogue("voiture");
                cacher_catalogue("informatique");
                cacher_catalogue("oiseau");
                cacher_catalogue("peluche");
                break;
            case "informatique":
                afficher_catalogue("informatique");
                cacher_catalogue("pdt");
                cacher_catalogue("voiture");
                cacher_catalogue("oiseau");
                cacher_catalogue("peluche");
                break;
            case "oiseau":
                afficher_catalogue("oiseau");
                cacher_catalogue("pdt");
                cacher_catalogue("voiture");
                cacher_catalogue("informatique");
                cacher_catalogue("peluche");
                break;
            case "peluche":
                afficher_catalogue("peluche");
                cacher_catalogue("pdt");
                cacher_catalogue("voiture");
                cacher_catalogue("oiseau");
                cacher_catalogue("informatique");
                break;
            default:
                afficher_catalogue("voiture");
                cacher_catalogue("pdt");
                cacher_catalogue("informatique");
                cacher_catalogue("oiseau");
                cacher_catalogue("peluche");
                break;
        }
        ajouter_quantite();
        console.log("fini")
    }, false);  
});


//Augmenter le nombre de la sélection

document.querySelectorAll(".btn_plus").forEach(btn =>{
    btn.addEventListener('click', function() {
        id_prod = this.parentNode.parentNode.getAttribute("id");
        var quantite_actuelle = Number(document.querySelector(".selection."+id_prod).innerHTML);
        if (quantite_actuelle === 9) {
            alert("Vous ne pouvez pas commander plus de 9 articles.")
        }
        else{
            if (quantite_actuelle === 0) {
                console.log(quantite_actuelle)
                document.querySelector(".ajouter_panier."+id_prod).style.opacity = "1";
            }
            document.querySelector(".selection."+id_prod).innerHTML =  quantite_actuelle + 1;

        };
    });
});


//Diminuer le nombre de la sélection
document.querySelectorAll(".btn_moins").forEach(btn =>{
    btn.addEventListener('click', function() {
        id_prod = this.parentNode.parentNode.getAttribute("id");
        quantite_actuelle = Number(document.querySelector(".selection."+id_prod).innerHTML)
        console.log(quantite_actuelle);
        if (quantite_actuelle > 0) {
            if (quantite_actuelle === 1) {
                console.log(quantite_actuelle)
                document.querySelector(".ajouter_panier."+id_prod).style.opacity = "0.25";
            }
            document.querySelector(".selection."+id_prod).innerHTML =  quantite_actuelle - 1;
        }
    });
});

document.querySelectorAll(".ajouter_panier").forEach(btn =>{
    btn.addEventListener('click', function() {
        id_prod = this.parentNode.parentNode.getAttribute("id");
        div_panier = document.querySelector(".container_panier");
        if (div_panier.querySelector(".achat."+id_prod) === null) {
            
        }else{
            //à compléter
        }
    });
});

console.log(document.querySelector(".c_marcherapa"))


console.log("fin du programme");
