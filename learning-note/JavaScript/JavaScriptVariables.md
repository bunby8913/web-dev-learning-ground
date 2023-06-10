# JavaScript variables

### Variable basics

- A container of a value, does not have to define type
  - Able to contain data structure + functions

### Declaring a variable ("let")

- Use "let" to define changeable variable
- Use the variable name to directly access the content
  - If no value stored, variable will return "undefined"
  - Error message if the variable does not exist

### Initializing a variable

- Use the assignment operator "=" to assign value to variable
- JavaScript does not require initialization on declaration

### A note about "var"

- "var": The legacy way to create variable
  - Confusing + error-prone
- "var" allow declaration after assigning a value (hoisting)
  - Declaration are always processed before any other code, can be placed any where in code, does not work with "let"
- "var" allow re-declaration of the same variable
  - Not possible with "let"
- All modern browser support "let" since 2015, "let" should be the preferred variable to use

### Updating a variable

- Update a variable using the assignment operator "="

##### An aside on variable naming rules

- Variable naming should only consist of "0-9, a-z, A-Z" + underscore "_"
  - Shouldn't use other character, could cause error + hard for international audience to understand
  - Should not start variable name with "_", saved for special constructor in JavaScript
  - Should not use number to start variable name, not allowed
  - Variable in JavaScript are case sensitive, camel naming convention recommended
  - Avoid using JavaScript keyword as variable name

### Variable types

##### Numbers

- Include int / floats

##### Strings

- Piece of text, Needs to be wrapped in a single/double quotation mark ('' / "")
  - Otherwise, JavaScript will interpret as variable name

##### Booleans

- True/false value, used to test conditions

##### Arrays

- Single object contain multiple values
  - All values wrapped with square bracket "[]"
  - Values separated with comma
- Access element using index inside the square bracket "[]"
  - Index start at 0

##### Objects

- Structure of code contain multiple different types of data
- All data variable are wrapped in a curly bracket "{}"
  - Each variable followed by the value, separated by a colon ":"
  - Each variable: value pair separated by comma
- To retrieve value, use the object name + internal variable name, separated by ","

### Dynamic typing

- JavaScript is a dynamically typed language
  - Do not need to specify the type of data the variable contain
- Use "typeof" operator to return the type of the variable

### Constants in JavaScript

- Must assign value during declaration
- Assigned value cannot be changed after the initialization
- Use the "const" keyword to declare a constant
  - Equivalent to low-level const in C++
  - The const variable must points to the same object, but the content of the object is free to change

### When to use const vs. let

- "const" communicate that the variable will not be assigned to a different value
  - Use "const" always, use "let" if have to