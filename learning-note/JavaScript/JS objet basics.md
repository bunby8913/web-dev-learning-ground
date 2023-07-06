# JS objet basics

- A collection of related data/functionality

  - Data member + member function

- Object in JS are created using curly brackets

  - ```javascript
    const Sample_Object = {}; // Sample_Object is an empty object
    ```

- Object functions are in the same format as object variable

  - ```javascript
    const Sample_OBject = {
        Sample_Var: 'some value',
        Sample_Fun: function(var1){},
        Sample_Fun2(){},
        Sample_Var2: 32
    };
    ```

- Each object member has a name + values (values could be function)

  - Object function member can be simplified with shorter syntax

- Object literal: Object content are filled in manually, instead of using a class constructor to instigated an object from a class

- Improves the cohesiveness of the code

- Members of an object are accessed using the "dot" operator "."
  - The object name is the namespace (scope)

- Object can be nested within another object
  - To access nested object's data member, both the outer + inner objects needs to be explicitly stated

- Data member can also be accessed using the bracket notation "["key"]"
  - Access value through "key" values
  - If an object property name is within a variable, it can only be accessed with key value

- Objects in JS is an associative arrays of dynamic type member

- All members are public by default, they can be modified with assignment operator "="

- New members of an object can be created at run-time
  - If the key does not exist in the object prior, it will be added as a new member

- Bracket notation can set member value + member name dynamically
  - It can passes stored value as key to an object

- "this" refer to the current object, same in C++

- Constructors in JS is an independent function

  - It create an empty object, initialize + add all the data member + functions + return it object
  - Constructors are called using the "new" keyword
  - ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.SomeFunction = function(){
            // code for the function
        };
    }
    ```

-  Call the constructor to create an object the following way

  - ```javascript
    const Tom = new Person ('Tom', 32);
    ```

- In OOP languages, everything is an object

  - Not all object + APIs can create object automatically in JS
    - i.e. Notifications API need manual instantiate the object

