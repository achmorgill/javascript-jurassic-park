var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require ("../dinosaur.js");

describe("Park", function(){

  var dinosaur1;
  var park;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus",2);
    dinosaur2 = new Dinosaur("Velociraptor",3);
    dinosaur3 = new Dinosaur("Triceratops",1);
    park = new Park();
  })

  it ("check the enclosure is empty", function() {
    assert.strictEqual(0,park.getNoInEnclosure());
  })

  it ("check a dinosaur can be added to the enclosure", function(){
    park.add(dinosaur1);
    assert.strictEqual(1,park.getNoInEnclosure());
  })

  it ("check 3 different dinosaurs can be added to the enclosure", function() {
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    assert.strictEqual(3,park.getNoInEnclosure());
  })

  it ("remove dinosaurs by type from the enclosure", function() {
    park.add(dinosaur1);
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur1);
    park.add(dinosaur3);
    park.remove(dinosaur1.type);
    assert.strictEqual(2, park.getNoInEnclosure());
  })

  it ("count how many dinosaurs have over 2 offspring per year", function() {
    park.add(dinosaur1);
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur1);
    park.add(dinosaur3);
    assert.strictEqual(1,park.getNoWithMoreThan2Offspring());
  })

  it ("calculate number of dinosaurs after 1 year starting with one dinosaur1", function() {
    var years = 1;
    park.add(dinosaur1);
    assert.strictEqual(3, park.getNoOfDinosaursAfterYear1(years));

  })

  it ("calculate number of dinosaurs after 1 year starting with two dinosaur1", function() {
    var years = 1;
    park.add(dinosaur1);
    park.add(dinosaur1);
    assert.strictEqual(6, park.getNoOfDinosaursAfterYear1(years));
  })


  it ("calculate number of dinosaurs after 2 year starting with one dinosaur1", function() {
    var years = 2;
    park.add(dinosaur1);
    assert.strictEqual(9,park.getNoOfDinosaursAfterYear1(years));
  })

  it ("calculate number of dinosaurs after 2 year starting with two dinosaur1", function() {
    var years = 2;
    park.add(dinosaur1);
    park.add(dinosaur1);
    assert.strictEqual(18,park.getNoOfDinosaursAfterYear1(years));
  })

  // it ("calculate number of dinosaurs after 2 year starting with one dinosaur3", function() {
  //   var years = 2;
  //   park.add(dinosaur3);
  //   assert.strictEqual(4,park.getNoOfDinosaursAfterYear1(years));
  // })

  // it ("calculate number of dinosaurs after 2 year starting with two dinosaur3", function() {
  //   var years = 2;
  //   park.add(dinosaur3);
  //   park.add(dinosaur3);
  //   assert.strictEqual(8,park.getNoOfDinosaursAfterYear1(years));
  // })

})
