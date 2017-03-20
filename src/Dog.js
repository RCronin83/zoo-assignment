(function() {
  'use strict';
  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  /**
   * Creates a blueprint for the class of Dog
   * @type {Object}
   */
  window.zoo.Dog = class Dog extends Animal{
    /**
     * creates Data for individual animals to be added to the Dog object
     */
    constructor(name, dateOfBirth, methodOfTravel){
      super(name, dateOfBirth);
      this.species = Dog.toString();
      this.offspring = 'puppies';
      this.methodOfTravel = methodOfTravel;
    }
    /**
     * returns a 'string' for species type to be added to the Dog object
     */
    static toString(){
      return 'A dog is a canine';
    }
    /**
     *
     */
    methodOfTravel(duration){
      return (speed*duration);
    }


  };
}());
