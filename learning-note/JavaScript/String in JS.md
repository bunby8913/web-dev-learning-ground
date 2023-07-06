# String in JS

- If the content does not have "quotation", JS would attempt to read them as other variables

- Very little difference between single + double quote, entirely base on personal preference

  - However, different quotations could be confusing + they cannot be mixed up in use
  - The text cannot contain the character (single/double quote), use the other quotation mark instead

- Add "\" in front of character to explicit state they are character

- Use the backtick ("`") character to declare a template literal

  - Behaves just like String with extra features

    - Include another variables to it using "${}"

  - ```javascript
    const variable = `hello, ${name}`; // Add name to the variable string template literal
    ```

  - Can also be used to join 2 string variables together

- Alternatively, concatenate using the plus symbol ("+")

  - Template literal is more readable + easier to understand

- If adding a string + number, will convert the into string + concatenate 2 strings together

- The "Number()" operation covert anything into a number + the "toString()" method covert a number into string explicitly

- Can include JS expression in template literals, to perform simple calculations between variables

- Template literal will display line break in code
  - Normal string uses the standard "\n" as next line character



