# fallback-flamant-back

## Projet
Ce projet a été réaliser pendant un challenge 48 heures à l'école Nantes ynov Campus 

Nous devions faire en sorte de pouvoir décentraliser les sites de 1522 commerçants. Cela leur permettrait d'avoir plus de visibilité car il formerait un fediverse("https://serveur410.com/le-fediverse-cest-quoi-et-comment-lutiliser/").

La décentralisation a plusieurs avantages notamment le faite de pouvoir se créer un compte sur un serveur mais pouvoir s'y connecter depuis un autre serveur, d'acheter des articles d'un marchand sur le site d'un autre marchand (seulement s'il accepte de bien vouloir vendre ces produits) car oui chaque serveur peut avoir ses propres règles et choix d'affichage ! Un autre gros avantage encore est de ne pas devoir se créer un compte sur chaque serveur ce qui apporte un gros gain de place pour stocker les données.

Concrètement nous devions former un réseau de serveurs servants chacun leurs propres produits ainsi que les produits des autres serveurs auxquels ils sont connectés, *sans entité centrale*

ENONCÉ(https://tardigrade.land/campus/0/module/7/assignment/0?share=72c63dde-8aac-4a34-8ca4-dc36851b137f)

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
