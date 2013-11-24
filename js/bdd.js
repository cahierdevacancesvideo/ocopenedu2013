var note = 	0;
var start = 0;
var video = 0;
var i = 2;
var date = 20131124;
var lock1;
var counter = 0;
var nbvideo = 3;
var bdd = {
	"user" : 
	[
		{"id":1,"prenom":"Albert","password":"xxxx","mail":"","video":
		[
			{"id":"1","note":0,"view":0}
		]}
	],
	"video" :
	[

		/*
		{"id":"x17jvo9","title":"titre","description":"description","date":"20131124","link":"#","min":"http://www.chutextrem.com/images/galerie/saut-en-parachute-tandem-zoom.jpg","questions":
		[
			{"question":"question0","time":  1,"answer":[{"text":"reponse 1","win":0},{"text":"bonne reponse","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question1","time": 10,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question2","time": 15,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question3","time": 20,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question4","time":25,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question5","time":30,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question6","time":35,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question7","time":40,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question8","time":45,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question9","time":50,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]}
			
		]},
		{"id":"x12qyle","title":"titre","description":"description","date":"20131125","link":"#","min":"http://www.chutextrem.com/images/galerie/saut-en-parachute-tandem-zoom.jpg","questions":
		[
			{"question":"question0","time":  5,"answer":[{"text":"reponse 1","win":0},{"text":"bonne reponse","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question1","time": 10,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question2","time": 15,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question3","time": 20,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question4","time":25,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question5","time":30,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question6","time":35,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question7","time":40,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question8","time":45,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]},
			{"question":"question9","time":50,"answer":[{"text":"reponse 1","win":0},{"text":"reponse 2","win":1},{"text":"reponse 3","win":0},{"text":"reponse 4","win":0},]}
			
		]},

		*/

		{"id":"x17jil0","title":"Philosophes","description":"Introduction au concept de vérité absolue et immuable à la base d'une démarche philosophique","date":"20131122","link":"#","min":"images/Philosophe.png","questions":
		[
			{"question":"Qui a dit que : 'le doute est absurde' ?","time":  48,"answer":[{"text":"Voltaire","win":1},{"text":"Diderot","win":0},{"text":"Rousseau","win":0},{"text":"Toto","win":0},]},
			{"question":"Quel animal transport un bébé dans la vidéo ?","time": 62,"answer":[{"text":"Une hase","win":0},{"text":"Une poule","win":0},{"text":"Une cigogne","win":1},{"text":"Une vache","win":0},]},
			{"question":"Quand la révolution a-t-elle éclatée ?","time": 120,"answer":[{"text":"11 ans apres la mort de Voltaire","win":1},{"text":"le 4 aout 1789","win":0},{"text":"A la mort de Voltaire","win":0},{"text":"un beau matin","win":0},]},
		]},

		{"id":"x17jitg","title":"My way","description":"Comment trouver son chemin dans un pays anglophone avec un vocabulaire simple","date":"20131123","link":"#","min":"images/chemin.jpg","questions":
		[
			{"question":"De quelle ville est-il question ?","time":  28,"answer":[{"text":"Paris","win":0},{"text":"Londres","win":1},{"text":"New York","win":0},{"text":"Sidney","win":0},]},
			{"question":"Ou Clement veut-il se rendre ?","time": 38,"answer":[{"text":"Aux toilettes","win":0},{"text":"Au British Museum","win":1},{"text":"A la gare ferroviaire","win":0},{"text":"Au palais de Westminster","win":0},]},
			{"question":"Qui appelle Noémie et Clément ?","time": 119,"answer":[{"text":"Lucile","win":0},{"text":"Natasha","win":0},{"text":"Pierre","win":0},{"text":"Emilie","win":1},]},
		]},

		{"id":"x17kgox","title":"Tesla","description":"Une video sur l'électricité de niveau 3ème abordant les notions de courant alternatif, de tension électrique, de court-circuit a travers l'exemple des bobines de Tesla","questions":
		[
			{"question":"Quel est le thème abordé ?","time":  21,"answer":[{"text":"World of Warcraft","win":0},{"text":"L'arc électrique","win":1},{"text":"La musique électronique","win":0},{"text":"Les orages","win":0},]},
		]},


		{"id":"xxx","title":"titre","description":"description","date":"20131125","link":"#","min":"http://www.chutextrem.com/images/galerie/saut-en-parachute-tandem-zoom.jpg","questions":
		[	
		]},

		{"id":"xxx","title":"titre","description":"description","date":"20131126","link":"#","min":"http://www.chutextrem.com/images/galerie/saut-en-parachute-tandem-zoom.jpg","questions":
		[	
		]},

		{"id":"xxx","title":"titre","description":"description","date":"20131127","link":"#","min":"http://www.chutextrem.com/images/galerie/saut-en-parachute-tandem-zoom.jpg","questions":
		[	
		]}


		/*

Tesla coil
"DailyShock" :
	[
		{"id":"1","title":"","description":"","questions":
		[
			{"question":"Quel est le thème abordé ?","time":  21,"answer":[{"text":"World of Warcraft","win":0},{"text":"L'arc électrique","win":1},{"text":"La musique électronique","win":0},{"text":"Les orages","win":0},]},
		]}
	]

Philosophie
"Philosophes_Les_grandes_ides_tout_simplement" :
	[
		{"id":"1","title":"","description":"","questions":
		[
			{"question":"Qui a dit que : "le doute est absurde" ?","time":  48,"answer":[{"text":"Voltaire","win":1},{"text":"Diderot","win":0},{"text":"Rousseau","win":0},{"text":"Toto","win":0},]},
			{"question":"Quel animal transport un bébé dans la vidéo ?","time": 62,"answer":[{"text":"Une hase","win":0},{"text":"Une poule","win":0},{"text":"Une cigogne","win":1},{"text":"Une vache","win":0},]},
			{"question":"Quand la révolution a-t-elle éclatée ?","time": 120,"answer":[{"text":"11 ans apres la mort de Voltaire","win":1},{"text":"le 4 aout 1789","win":0},{"text":"A la mort de Voltaire","win":0},{"text":"un beau matin","win":0},]},
			]}
	]

Se déplacer en anglais
"chemin" :
	[
		{"id":"1","title":"","description":"","questions":
		[
			{"question":"De quelle ville est-il question ?","time":  28,"answer":[{"text":"Paris","win":0},{"text":"Londres","win":1},{"text":"New York","win":0},{"text":"Sidney","win":0},]},
			{"question":"Ou Clément veut-il se rendre ?","time": 38,"answer":[{"text":"Aux toilettes","win":0},{"text":"Au British Museum","win":1},{"text":"A la gare ferroviaire","win":0},{"text":"Au palais de Westminster","win":0},]},
			{"question":"Qui appelle Noémie et Clément ?","time": 119,"answer":[{"text":"Lucile","win":0},{"text":"Natasha","win":0},{"text":"Pierre","win":0},{"text":"Emilie","win":1},]},
			]}
	]

		*/
	]
	};