(function() {
  'use strict';
  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  /**
   * Creates a blueprint for the class of Cat
   * @type {Object}
   */
  window.zoo.Cat = class Cat extends Animal{
    /**
     * Creates data for individual animals to be added to the Cat object
     */
    constructor(name, dateOfBirth, methodOfTravel){
      super(name, dateOfBirth);
      this.species = Cat.toString();
      this.offspring = 'kittens';
      this.methodOfTravel = methodOfTravel;

    }
    /**
     * returns a 'string' for species type to be added to the Cat object
     */
    static toString(){
      return 'A cat is a feline';
    }
    /**
     *
     */
    methodOfTravel(){
      return (speed*duration);
    }

  };
}());
