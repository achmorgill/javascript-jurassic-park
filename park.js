var Park = function() {
  this.enclosureArray = [];
}

Park.prototype = {
  
  getNoInEnclosure: function(){
    return this.enclosureArray.length;
  },

  add: function(dinosaur) {
    this.enclosureArray.push(dinosaur);
  },

  remove: function(dinosaur) {
    var i;
    loopSize = (this.enclosureArray.length - 1);

    for (i=loopSize; i>=0; i--) {
      if (this.enclosureArray[i].type === dinosaur) {
        this.enclosureArray.splice(i, 1);
      }
    }
  },

  getNoWithMoreThan2Offspring() {
    var i;
    var count = 0;

    for(i in this.enclosureArray) {
      if (this.enclosureArray[i].noOfOffspring > 2) {
        count += 1;
      }
    }
    return count;
  },

  getNoOfDinosaursAfterYear1(years) {

    var j = 0;
    var total = this.enclosureArray.length;


    for (j=0; j<years; j++) {
      console.log("j  total " + j + " " + total);

      for ( i in this.enclosureArray) {  

      console.log('i ' + i);
      console.log("before total " + total)
        total += (this.enclosureArray[i].noOfOffspring) * j+1;
        console.log("total" + total);
      }
    }
    return total;

  }
  
  

}


module.exports = Park;