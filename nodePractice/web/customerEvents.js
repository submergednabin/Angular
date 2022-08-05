var util = require('util');
var EventEmitter = require('events').EventEmitter;

var MyEventClass = function(initial_no){
    this.count = initial_no;
}

util.inherits(MyEventClass, EventEmitter);

MyEventClass.prototype.increment = function(){
    var self= this;
    setInterval(function(){
        if(self.count%2==0) self.emit("even");
        self.count++;
    },300);
}

var access = new MyEventClass(10);
access.on("even", function(){
    util.puts("Number is even! :: " + this.count );
});
access.increment();