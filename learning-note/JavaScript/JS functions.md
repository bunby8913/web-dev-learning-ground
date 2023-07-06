# JS Functions

- Some functions in JavaScript utilize background browser code, written largely in C++
  - Built-in function are not part of the language, part of the browser APIs

- Methods: Functions that are part of an object (Similar to the concept of class function in C++)

- Custom-function: Function defined in code, not in the browser

  - To Call a custom function, use the function name + parentheses

    - ```javascript
      func();
      ```

- Functions must be declared + defined before called

- Some functions require argument / properties, parameters / attributes

  - Multiple parameters are separated by comma ","

  - Some parameters are optional, the function can still run without them

    - In custom functions, to support optional parameters, define a default parameters

      - ```javascript
        function func1(var1 = "DefaultValue")
        {}
        ```

- JS support un-named function (anonymous function)

  - Typically used as a parameter of a function

    - Instead of writing a custom function to be triggered / used by another function, the parameter can be replaced with an anonymous function

    - ```javascript
      (function(){
      	 // The body of the function
       });
      //alternatively
      (event) => {
          // The body of the function
      };
      ```

- If the function only contain 1 lines of return statement "return" keyword + braces can be omitted (similar to Lambda expression)

- Scope: variables + statement within a function is contained within the function scope

  - Variable with the same name are ignored
  - Global scope: Variables outside all functions

- Functions improve security + organization

### Function's return values

- The values the functions returns when complete
  - JS do have some void functions + most return functions performs some intermediate steps on data + return for further data processing
- The custom functions returns value with the "return" keyword
- 