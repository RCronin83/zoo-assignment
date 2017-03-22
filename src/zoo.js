(function() {
  'use strict';
  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;
  let Dog = window.zoo.Dog;
  let Cat = window.zoo.Cat;



  let zoe = new Dog('zoe', new Date('3/17/2008'));
  // console.log(zoe);
  zoe.changeName('Mickey');
  // console.log(zoe.name);
  // console.log(Dog.toString());
  zoe.age();
  // console.log(zoe.toString());


  let peaches = new Cat('peaches', new Date('3/17/2009'));
  // console.log(peaches);
  peaches.changeName('Kodi');
  // console.log(peaches.name);
  // console.log(Cat.toString());
  peaches.age();
  // console.log(peaches.toString());

  // try ... catch
  try {
    let newVar = new Animal();
  } catch(err) {
    console.warn(err);
  }




})();
