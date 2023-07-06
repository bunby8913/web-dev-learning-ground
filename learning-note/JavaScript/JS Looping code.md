# JS Looping code

- "random(x)": Return a whole number between 0 and x - 1
- Looping allow the developer to re-use the same code snippet multiple times

- Apart from the standard for loop, JS also have more specialized loop function , "map()" + "filter()"

  - map to iterate every items in collection + apply a function to them
  - filter to test each items in a collection + return the items that pass the test

-  Both function can be used with function expression

  - ```javascript
    const var1 = obj.filter(cat => cat.startsWith("l"));
    ```

- The standard for loop syntax applies

  - ```javascript
    for (initializer; condition; final-expression)
    ```

    - More likely to generate error in code

  - ```javascript
    for (const var1 of var2)
    ```

- "break" + "continue" statement have the standard syntax
  - "break" Exit the loop before its completed
  - "continue" skip from executing the rest of the code + jump to the next iteration

- While loop is the same as standard syntax
  - "do...while" loop execute the body section at least once, before checking the conditions to continue the loop