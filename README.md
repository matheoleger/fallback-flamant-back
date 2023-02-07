# fallback-flamant-back

## Projet
Ce projet a été réaliser pendant un challenge 48 heures à l'école Nantes ynov Campus 

Nous devions faire en sorte de pouvoir décentraliser les sites de 1522 commerçants. Cela leur permettrait d'avoir plus de visibilité car il formerait un fediverse["https://serveur410.com/le-fediverse-cest-quoi-et-comment-lutiliser/"].

La décentralisation a plusieurs avantages notamment le faite de pouvoir se créer un compte sur un serveur mais pouvoir s'y connecter depuis un autre serveur, d'acheter des articles d'un marchand sur le site d'un autre marchand (seulement s'il accepte de bien vouloir vendre ces produits) car oui chaque serveur peut avoir ses propres règles et choix d'affichage ! Un autre gros avantage encore est de ne pas devoir se créer un compte sur chaque serveur ce qui apporte un gros gain de place pour stocker les données.

Concrètement nous devions former un réseau de serveurs servants chacun leurs propres produits ainsi que les produits des autres serveurs auxquels ils sont connectés, *sans entité centrale*

ENONCÉ[https://tardigrade.land/campus/0/module/7/assignment/0?share=72c63dde-8aac-4a34-8ca4-dc36851b137f]

## TECHNOLOGIES UTILISÉES + INSTALLATIONS

* PostGre (pour la base de données)

Voici un lien pour pouvoir télécharger Postgre : https://www.postgresql.org/download

* pgAdmin

Une fois que vous avez téléchargé PostGre télécharger pgAdmin[https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.19/]

* adonisJS (NodeJs)

Voici le site officiel d' Adonis pour le télécharger : https://docs.adonisjs.com/guides/installation

* postman

PostMan est utile pour pouvoir faire des requêtes HTTP (POST/GET/PUT etc...) https://www.postman.com/downloads/

* React(TypeScript)/HTML/CSS

Voici un lien pour télécharger React sous Windows : https://learn.microsoft.com/fr-fr/windows/dev-environment/javascript/react-on-windows

* Docker (pour héberger notre serveur)

Télécharger Docker ici : https://docs.docker.com/get-docker/

## LANCER LE SERVEUR 

pour pouvoir lancer le serveur il vous suffit d'aller sur votre éditeur de code, d'ouvrir un terminal et de taper la commande ``` git clone  https://github.com/matheoleger/fallback-flamant-back.git```

ensuite rentrer dans le dossier "serveur" en tapant la commande ```cd server```

il vous suffit ensuite de taper la commande ```npm run dev``` et de vous rendre sur l'adresse http://127.0.0.1:3333

## SOLUTION ENVISAGÉE

Nous avions comme idée de mettre sur docker un container par site avec dedans, chaque partie dont on avait besoin (back/front/api). Chaque site aurait ses propres donnés mais avec les mêmes models.

Pour rechercher ou changer une information on enverrait une requête qui parcourait chaque API de tous les noeuds possibles tant qu'elle n'aurait pas trouvé la valeur (si la valeur n'existe pas on enverrait un message une fois tous les noeuds parcourus).

### POUR ALLER PLUS LOIN 

Nous avions pensé à pouvoir rassembler les sites/base de données en fonction des personnes qui les fréquentent par exemple si 2 sites internet reçoivent des clients très rapprocher il faudrait les mettre sur des noeuds voisins pour pouvoir parcourir et récupéré les données utiles plus rapidement.

## SOLUTION APPORTÉ 

Nous avons pu faire l'API ainsi que la docker mais faute de temps, nous n'avons pas réussi à lier les sites entre eux ou à récupérer les valeurs d'un autre site depuis un site. Mais avec plus de temps nous sommes sûrs que nous aurions réussi à pouvoir lier les API ainsi que les sites.

## PERFORMANCE 

Notre méthode est performante dans le sens ou si elle trouve une valeur dans les noeuds proches de notre site et bien l'on aura parcouru un nombre minime de données ce qui nous évite des tas de calculs inutiles notamment dans le cas où on tirait les sites dans les noeuds en fonction des personnes qui s'y connectent. 

Avec la décentralisation il y a également une economie de données on peut utiliser des plus petits serveur sans pour autant diminuer le nombre de sites 

Concernant Docker nous l'avons choisi car il permet une grande mobilité de déploiement et une forte scalabilité comparée à des VM classiques.

La décentralisation est un nouveau moyen de naviguer et facile d'accès. L'utilisateur n'a pas besoin de sortir du site pour rechercher un article ce qui fait gagner en ergonomie.

# CONTRIBUTEURS

* [Nathan SCHNEIDER](https://github.com/NatSch45) - B3 IA/Data
* Romain DUVERGER - B3 Cybersec
* [Mathéo LEGER](https://github.com/matheoleger) - B3 Dev
* [Flavio CORMERAIS](https://github.com/FCORMERAIS) - B2
* Jordan ZOKPODO - B2
* [Tilio BOURIGAULT](https://github.com/Tilio44) - B1
* Mathis SILOTIA - B1
