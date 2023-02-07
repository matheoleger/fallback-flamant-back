# fallback-flamant-back

## Projet
Ce projet a été réalisé dans le cadre du Challenge 48 Heures 2023 de Nantes ynov Campus.

Le principal objectif était de décentraliser les sites de 1522 commerçants. Cela leur permettrait d'avoir plus de visibilité car il formerait un [fediverse]("https://serveur410.com/le-fediverse-cest-quoi-et-comment-lutiliser/").

La décentralisation a plusieurs avantages, notamment le fait de pouvoir se créer un compte sur un serveur et pouvoir se connecter sur un autre serveur via ce même compte. Conséquemment, l'utilisateur peut acheter les articles d'un marchand sur le site d'un autre marchand (seulement s'il accepte de bien vouloir vendre ces produits) car chaque serveur peut avoir ses propres règles de gestion et choix d'affichage ! De sus, cela permet de ne pas devoir se créer un compte sur chaque serveur, ce qui apporte un gros gain de place pour stocker les données et améliore l'expérience utilisateur.

Concrètement, nous devions former un réseau de serveurs servants chacun leurs propres produits ainsi que les produits des autres serveurs auxquels ils sont connectés, et ceci *sans entité centrale*.

[ENONCÉ](https://tardigrade.land/campus/0/module/7/assignment/0?share=72c63dde-8aac-4a34-8ca4-dc36851b137f)

## TECHNOLOGIES UTILISÉES + INSTALLATIONS

* PostgreSQL (SGBDR)

Voici un lien pour pouvoir télécharger PostgreSQL : https://www.postgresql.org/download

* PgAdmin (pour environnement local)

Une fois que vous avez téléchargé PostgreSQL, téléchargez [pgAdmin](https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.19/).

* AdonisJS (NodeJs)

Voici le site officiel d'AdonisJS pour le télécharger : https://docs.adonisjs.com/guides/installation

* Postman

[PostMan](https://www.postman.com/downloads/) est utilisé afin d'interroger les APIs à l'aide de requêtes HTTP.

* React (TypeScript) / HTML / CSS

Voici un lien pour télécharger React sous Windows : https://learn.microsoft.com/fr-fr/windows/dev-environment/javascript/react-on-windows

* Docker (conteneurisation des serveurs)

Téléchargez Docker ici : https://docs.docker.com/get-docker/

## LANCER LE SERVEUR 

Afin de pouvoir lancer le serveur, il vous suffit de renseigner la commande ``` git clone  https://github.com/matheoleger/fallback-flamant-back.git```.

Ensuite, accédez au dossier nommé *server* en tapant la commande ```cd server```.

Il vous suffit ensuite d'exécuter la commande ```npm run dev``` et de vous rendre sur l'adresse http://127.0.0.1:3333.

## SOLUTION ENVISAGÉE

Nous avions comme idée de mettre en place sur Docker un container par site avec dedans, chaque élément dont on avait besoin (back/front/api). Chaque site aurait ses propres données mais respecterait certaines règles quant à la disposition de leur API.

Pour rechercher ou changer une information, on enverrait une requête qui parcourerait chaque API de tous les noeuds possibles tant qu'elle n'aurait pas trouvé la valeur (si la valeur n'existe pas on enverrait un message une fois tous les noeuds parcourus).

### POUR ALLER PLUS LOIN 

Nous avions pensé à pouvoir rassembler les serveurs/base de données en fonction des personnes qui les fréquentent. Par exemple, si 2 sites internet reçoivent des clients très rapprochés, il faudrait les renseignés sur des noeuds voisins dans le but de pouvoir parcourir et récupérer les données utiles plus rapidement.

## SOLUTION APPORTÉE 

Nous avons pu développer l'API ainsi qu'un Docker mais faute de temps, nous n'avons pas réussi à lier les sites entre eux ou à récupérer les valeurs d'un autre site depuis un site. Mais avec plus de temps, nous sommes sûrs que nous aurions réussi à pouvoir lier les API ainsi que les sites.

## PERFORMANCE 

Notre méthode est performante dans le sens ou si elle trouve une valeur dans les noeuds proches de notre site et bien l'on aura parcouru un nombre minime de données ce qui nous évite des tas de calculs inutiles notamment dans le cas où on tirait les sites dans les noeuds en fonction des personnes qui s'y connectent. 

Avec la décentralisation, il y a également une économie des données, on peut utiliser des plus petits serveurs sans pour autant diminuer le nombre de sites.

Concernant Docker, nous l'avons choisi car il permet une grande mobilité de déploiement et une forte scalabilité comparée à des VMs classiques.

La décentralisation est un nouveau moyen de naviguer et améliore grandement l'expérience utilisateur. L'utilisateur n'a pas besoin de sortir du site pour rechercher un article, ce qui fait gagner en ergonomie.

# CONTRIBUTEURS

* [Nathan SCHNEIDER](https://github.com/NatSch45) - B3 IA/Data
* Romain DUVERGER - B3 Cybersec
* [Mathéo LEGER](https://github.com/matheoleger) - B3 Dev
* [Flavio CORMERAIS](https://github.com/FCORMERAIS) - B2
* Jordan ZOKPODO - B2
* [Tilio BOURIGAULT](https://github.com/Tilio44) - B1
* Mathis SILOTIA - B1
