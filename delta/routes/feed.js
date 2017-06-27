
/*
 * Post Feed .
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
	

	// Create some random feed content for the response
	var result = {};
	var feed = [];
	var item = {};
	item.title = "Paddleboarding";
	item.image = "./assets/images/feed/500x333paddleboarding.png";
	item.description = "Paddleboarding participants are propelled by a swimming motion using their arms while lying, kneeling, or standing on a paddleboard in the ocean";
	item.likes = 52;
	item.comments = 5;
	item.liked = true;
    feed.push(item);
	
	// Prepare the response into JSON format
    res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(JSON.stringify({feed: feed}));
	res.end();
	
};

