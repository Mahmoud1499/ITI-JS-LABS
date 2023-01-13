// console.log("Object Methods");


//==================== METHOD 1 ========================================================================
// - Object.values() :
// - static method returns an array of a given object's own enumerable string-keyed property values.
// =====================================================================================================
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
  // Expected output: Array ["somestring", 42, false]

//==================== METHOD 2 ========================================================================
// - Object.keys() :
// - static method returns an array of a given object's own enumerable string-keyed property names
// =====================================================================================================
const object3 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object3));
  // Expected output: Array ["a", "b", "c"]

//==================== METHOD 3 ========================================================================
// - Object.seal() :
// - static method seals an object.
// - new properties cannot be added, existing properties cannot be removed
// -Values of existing properties can still be changed 
// =====================================================================================================
const object2 = {
    property1: 42
  };
  
  Object.seal(object1);
  object2.property1 = 33;
  console.log(object2.property1);
  // Expected output: 33
  
  delete object2.property1; // Cannot delete when sealed
  console.log(object2.property1);
  // Expected output: 33

//==================== METHOD 4 ========================================================================
// - Object.isSealed() :
// -  static method determines if an object is sealed.
// =====================================================================================================
const object4 = {
    property1: 42
  };
  
  console.log(Object.isSealed(object4));
  // Expected output: false
  
  Object.seal(object4);
  
  console.log(Object.isSealed(object4));
  // Expected output: true

//==================== METHOD 5 ========================================================================
// -  Object.is() :
// -  static method determines whether two values are the same value.
// =====================================================================================================
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true

//==================== METHOD 6 ========================================================================
// -  Object.hasOwn() :
// -  static method returns true if the specified object has the indicated property as its own property.
// -  If the property is inherited, or does not exist, the method returns false.
// =====================================================================================================
const object5 = {
    prop: 'exists'
  };
  
  console.log(Object.hasOwn(object5, 'prop'));
  // Expected output: true
  
  console.log(Object.hasOwn(object5, 'toString'));
  // Expected output: false

//==================== METHOD 7 =============================================================================
// -  Object.assign() :
// -  static method copies all enumerable own properties from one or more source objects to a target object.
// -  It returns the modified target object.
// ==========================================================================================================
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

 Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

//==================== METHOD 8 ===================================================================================
// -  Object.create() :
// -  static method creates a new object, using an existing object as the prototype of the newly created object.
// ================================================================================================================
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();

//==================== METHOD 9 ===================================================================================
// - Object.create() :
// - static method defines new or modifies existing properties directly on an object, 
// - returning the object.
// ================================================================================================================
const object9 = {};

Object.defineProperties(object9, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object9.property1);
// Expected output: 42

//==================== METHOD 10 ===================================================================================
// - Object.freeze() :
// - static method freezes an object.  
// - Freezing makes existing properties non-writable and non-configurable
// - frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed,
// - value cannot be changed
// - object's prototype cannot be re-assigned
// - object's prototype cannot be re-assigned
// - returns the same object that was passed in.
// ================================================================================================================
const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // Expected output: 42


//==================== METHOD 11===================================================================================
// - Object.isFrozen() :
// - static method determines if an object is frozen.
// ================================================================================================================

const object11 = {
  property1: 42
};

console.log(Object.isFrozen(object11));
// Expected output: false

Object.freeze(object11);

console.log(Object.isFrozen(object11));
// Expected output: true
