Projet JS : Boutique en ligne

Le contenu de la boutique est construit automatiquement au chargement de la page par rapport à des données définies dans un catalogue.
La page de la boutique présente deux zones, une page à gauche, la boutique, à droite, le panier. Différents catalogues doivent être utilisés sans avoir à modifier le code qui permet le chargement de la page.
Dans la boutique, l’utilisateur peut choisir la quantité qu’il souhaite acheter à l’aide d’un champ de saisi correspondant. Cette quantité doit toujours être comprise entre 0 et 9. Il ne peut pas commander plus de 9 fois le même article.
Cette contrainte de validité est garantie lorsqu’on utilise des flèches. Il doit ensuite cliquer sur le bouton représentant un panier de course pour mettre dans le panier cet article avec la quantité désignée. 
La mise en bouton de panier doit être activé uniquement si 1 article. L’inactivité du chariot par une opacité à 0.25. A partir du moment où il clique sur le chariot, l’opacité passe à 1 et l’article est ajouté au panier.
Après avoir mis l’article dans le panier, la quantité dans la boutique doit être repassé à 0. L’article et sa quantité doivent être présente dans le panier de droite. S’il recommande le même article, celui-ci doit se rajouter sur la pile précédente.
En cliquant sur la poubelle, on supprime l’article qu’elle que soit sa quantité. 
Le montant total des articles apparait dans une zone, ce montant est mis à jour à chaque changement.
 Au-dessus du total, se trouve une zone de texte qui permet de filtrer les produits de la boutique. Seuls les produits dont le nom contenant la chaîne de caractère présente dans le filtre est affiché.
 
Index.html
	Data
		Catalogue1.js
			(var catalog = {« name » : « Nounours », « description » : « image » : « images/nounours »}
		Catalogue2.js
	Images
		File.jpg
	Scripts
		Controleur.js
	Style
		Icônes (chariot, poubelle, …)
		Style.css