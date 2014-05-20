var nodeSocket = require("nodejs-websocket");

var server = nodeSocket.createServer(function(conn){
	var timer;
	console.log("a new connection is established");
	conn.on("text", function(data){
		console.log("message received - ", data);
		if (data === "time"){
			timer = setInterval(function(){
				conn.sendText(new Date().toString());
			},5000);
		} else if (data === "stop"){
			clearInterval(timer);
			conn.sendText("Thanks for using the time service");
		}
	});
});
server.listen(9090);