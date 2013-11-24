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
			
		]}
	]
	};