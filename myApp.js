
var request = require ('request');

//HTTP GET request to api.medium.com.
request.get({
	url:'https://api.medium.com/v1/users/13cebc6d1c92e9a9168665273721747b2f969bdc35c2f54cca453f267145ed323/publications',  
	headers: {
		'Authorization':'Bearer 2793bbbb4fde64c720815fd47ede38f1c1ac798a65c2f3e0189b32fe933daa2ad'
	}
},
function (error, response, body) {
    console.log(body);
});
var Medium = function(){
	this.medium = ('');
this.create = function(medium_post) {
	var rl= require('readline');
    var int = rl.createInterface ({
		input: process.stdin,
		output: process.stdout
	})
	int.question(medium_post, function(ans) {
		console.log(ans);
	})
}
}

