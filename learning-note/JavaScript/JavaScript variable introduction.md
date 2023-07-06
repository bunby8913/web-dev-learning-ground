# JavaScript Variable Introduction

- Variable: a container of value, can store any kind of data
  - Can be used as struct + represent function name
- Variable are the container of type, does not contain the value in raw
- Variable should be declared using the "let" keyword
- To retrieve the value the variable represent, use the name of the variable
  - All lines of code in JS should end with (":")
- To define a variable, use the assignment operator ("=")
  - Possible to declare + define at the same time

- "var" is a legacy way to create variable, used to support hoisting (Allow an variable to be declare after the initialization)
  - Used to support variable declaration overriding
  - Should only be used for legacy browser support
- To update a variable, use the assign operator ("=")
- Follow the standard variable naming rules, make sure to avoid JS keywords

#### Variable types

- Numbers: Integer + floating-point
- Strings: Piece of text, text can be wrapped in single / double quotation
- Booleans: true / false;
  - Standard operator operations available
- Arrays: Multiple values enclosed in square bracket
  - Separated by comma
  - Access location through array index "[]"
- Object: A structure of code, OOP object
  - Contain multiple variables, each value can be any type
    - Access element of the object using the access operator (".")

#### Dynamic typing

- Do not need to specify the type of the variable
- "typeof": determines the type of the variable

#### Constants

- Must be initialized when declared\
- A non-const object cannot be changed to a const object
- Cannot change the value of constant variable
- Different meaning of const, "top-level const", the name of the const must remain the same, the content of the const can change
- Always use "const" unless "let" have to be used

