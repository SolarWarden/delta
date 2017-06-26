
/*
 * Post Login user.
 */

var crypto = require('crypto');

exports.list = function(req, res){
  
	// Parse Header Example
	var header = req.get("authorization");
	console.log(header);
	
	// Parse Body Example
	var body = req.body;
	console.log(body);
	
	var id = req.body.q.id;
	console.log(id);
	
	var name = req.body.q.name;
	console.log(name);
	
	// Create some random content for the response
	var result = {};
	var token = crypto.randomBytes(64).toString('hex');
	
	result.id = id;
	result.token = token;
	
	// Prepare the response into JSON format
	res.send(JSON.stringify(result));
	
	// Send result
	res.send(result);
};