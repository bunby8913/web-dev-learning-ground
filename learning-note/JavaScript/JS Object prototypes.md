# JS Object prototypes

- Every object in JS has a set of default properties + functions (prototype)
  - Prototype are very much like a inheritance, object will usually have a chain of prototype, until a parent object with "null" prototype

- To access any properties in an object, the chain of prototype will be searched, until either the properties is found / the property chain ends
  - Use the `getPrototypeOf()` function to find out the prototype of the current object

- `object.prototype` is the parent of all prototype, the most basic, end of the prototype chain

  - The most default prototype

- If a property in the current object has the same defined in object's prototype, the property from the protype will be shadowed

  - JS will look for property in the current object first, if not found, then move to prototype to search

- Several ways to set object's prototype

  - `Object.create`: Create a new object + specify an object used as object's prototype

    - ```javascript
    	const ClassPrototype = {
    	    someFunction();
    	}
    	const ClassDerived = Object.create(ClassPrototypeo);
    	// Now ClassDerived can use funcctions in ClassPrototype
    	```

  - By setting the `prototype` variable of the constructor function, all objects created with the constructor will have the same `prototype` property

  	- ```javascript
  		const ClassPrototype = {
  		}
  		function Person(name){
  		    this.name = name;
  		}
  		// Assign the prototype for the person object
  		Object.assign(Person.prototype, ClassPrototype);
  		// Now every Person object created with the person constructor contains the prototype ClassPrototype
  		
  		```

- Often, the data properties of an object is defined on the constructor + function properties (method) is defined on prototype

	- The function will largely be the same, but each object will have their own data properties

- Inheritance: Fundamental part of OOP, prototype if JS's inheritance, we can have an common abstracted class (a parent prototype) that several inherited functions and data properties from
