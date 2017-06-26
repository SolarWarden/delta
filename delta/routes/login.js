
/*
 * Post Login user.
 */

var crypto = require('crypto');

exports.list = function(req, res){
  
	// Parse Header Example
	var header = req.get("authorization");
	var customerId = req.get("cid");
	var product = req.get("pn");
	var productVersion= req.get("pv");
	var requestId = req.get("rid");
	
	console.log("HEADERS: ");
	console.log(header);
	console.log(customerId);
	console.log(product);
	console.log(productVersion);
	console.log(requestId);
	console.log("\n\n");
	
	// Parse Body Example
	console.log("BODY: ");
	var body = req.body;
	console.log(body);
	console.log("\n\n");
	
	
	
	// Useful Values
	console.log("USEFUL: ");
	
	var id = req.body.q.id;
	console.log(id);
	
	var name = req.body.q.name;
	console.log(name);
	console.log("\n\n");
	
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

