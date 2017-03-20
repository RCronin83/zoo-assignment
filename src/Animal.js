(function() {
  'use strict';
  window.zoo = window.zoo || {};
  /**
   * Creates a blueprint for the class of Animal
   * @type {Object}
   */
  window.zoo.Animal = class Animal {
    /**
     * creates data for individual Animals to be added to the Animal object
     */
    constructor(name, dateOfBirth){

      this.name = name;
      if (!(dateOfBirth instanceof Date)){
        dateOfBirth = new Date();
      }
      this.dob = dateOfBirth;
    }
    /**
     * Allows you to change the name of the Animal
     */
    changeName(newName){
      this.name = newName;
    }
    /**
     * Allows you to determine the age of the Animal
     */
    age(){
      let now = new Date();
      let ageInYears = (now.getFullYear() - this.dob.getFullYear());
      console.log(ageInYears);
      return ageInYears;
    }
    /**
     * converts Data within the Animal object to a string
     */
    toString(){
      let result = this.name + ' was born  ' + this.dob.getFullYear();
      return result;
    }



  };



}());
