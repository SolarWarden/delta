
/*
 * Post Login user.
 */

var crypto = require('crypto');

exports.list = function(req, res){
  
	var header = req.get("authorization");
	
	console.log(header);
	
	var body = req.body;
	console.log(body);
	
	var id = req.body.q.id;
	console.log(id);
	
	var name = req.body.q.name;
	console.log(name);
	
	var result = {};
	var token = crypto.randomBytes(64).toString('hex');
	
	result.id = id;
	result.token = token;
	
	res.send(JSON.stringify(result));
	
	res.send(result);
};