/*
for(var i = 100; i > 0; i--){

}*/


var Doors = function(){};

Doors.prototype.doorList = new Array(100);

Doors.prototype.toggleDoor = function(id){
    this.doorList[id] = !Boolean(this.doorList[id]);
};

Doors.prototype.isDoorOpen = function(id){
    return Boolean(this.doorList[id]);
};

Doors.prototype.toggleEach = function(offset){
    for (var i = offset; i < this.doorList.length; i += offset){
        this.toggleDoor(i);
    }
};

Doors.prototype.toggleXDoor = function(){
    for (var i = 1; i <= this.doorList.length+1; i++){
        this.toggleEach(i);
    }
};

Doors.prototype.resetDoorList = function(){
    this.doorList = new Array(100);
};

module.exports = Doors;