exports.action = function(data, callback){
	
	var tblCommand = {
		parle: function() {parle(data, client, txt);}
	};
	
	info("Parle command:", data.action.command.yellow, "From:", data.client.yellow);
	
	let client = setClient(data);
	let txt = data.action.txt;
	info(txt)
	var room = setClient(data);
	
	tblCommand[data.action.command]();
	
	callback();
}

function parle(data, client, txt){
		Avatar.speak(txt, data.client, function () {
		});
}

var setClient = function (data) {
	
	// client direct (la commande provient du client et est exécutée sur le client)
	var client = data.client;	
	// Client spécifique fixe (la commande ne provient pas du client et n'est pas exécutée sur le client et ne peut pas changer)
	if (data.action.room) 
		client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
	// Client spécifique non fixe dans la commande HTTP (la commande ne provient pas du client et n'est pas exécutée sur le client et peut changer)
	if (data.action.setRoom) 
		client = data.action.setRoom;
	
	return client;
}