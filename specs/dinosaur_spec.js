var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){

  var dinosaur1;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus",2);
  })

  it("check can get dinosaur type", function(){
    assert.strictEqual("Tyrannosaurus",dinosaur1.getType());
  })

  it("check how many children per year the dinosaur can have",function(){
    assert.strictEqual(2, dinosaur1.getNoOfOffspringPerYear());
  })










})