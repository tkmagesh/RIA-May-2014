var nodeSocket = require("nodejs-websocket");
var server = nodeSocket.createServer(function(conn){
	console.log("a new connection is established");
	conn.on("text",function(msg){
		server.connections.forEach(function(c){
			c.sendText(msg);
		});
	});
});
server.listen(9090);
console.log("Chat server listening on port 9090....");