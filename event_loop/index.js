var events = require("events");

var eventEmitter = new events.EventEmitter();

var hi_handler = function hi()
{
	console.log("hi,boy!");
}

var newlistener = function(){console.log("new")};
var removelistener = function(){console.log("remove")};

eventEmitter.on('newListener',newlistener);
eventEmitter.on('removeListener',removelistener);
eventEmitter.on('hi',hi_handler);

console.log("hi");
eventEmitter.emit('hi');
