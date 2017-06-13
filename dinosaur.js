var Dinosaur = function(type, noOfOffspring) {
  this.type = type;
  this.noOfOffspring = noOfOffspring;

  this.getType = function(){
    return this.type;
  }

  this.getNoOfOffspringPerYear = function() {
    return this.noOfOffspring;
  }
}


module.exports = Dinosaur;