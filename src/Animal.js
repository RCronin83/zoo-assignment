(function() {
  'use strict';
  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    /**
    * Constructs a new Animal
    * @param  {String} name       Name of the Animal
    * @param  {Date} dateOfBirth  Date the animal was born
    * @return {void}
    */
    constructor(name, dateOfBirth){
      if (typeof(name) === 'string'){
        this.name = name;
      } else {
        throw TypeError('Please provide a string');

      }

      if (!(dateOfBirth instanceof Date)){
        dateOfBirth = new Date();
      }
      
      this.dob = dateOfBirth;
    }
    /**
    * Allows you to change the name of the Animal
    * @param {String} name   New name of Animal
    * @return {Void}
    */
    changeName(newName){
      this.name = newName;
    }
    /**
    * Gets the current age of the Animal in whole years
    * @return {Number} The age of the Animal
    */
    age(){
      return (new Date()).getFullYear() - this.dob.getFullYear();
    }
    /**
    * converts Data within the Animal object to a string
    * @return {String}   name and dob of animal
    */
    toString(){
      let result = this.name + ' was born  ' + this.dob.getFullYear();
      return result;
    }

  };

}());
