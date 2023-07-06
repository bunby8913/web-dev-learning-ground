# JS Arrays

- List-like objects

- A single object store multiple values that can be accessed sequentially

- Initialize an array with square bracket "[]"

- Array can be printed directly, the language will iterate automatically

- Each item of the array can be different type

- Use the "var.length" to find the length of the array

- Use square bracket + index to access individual element

- Possible to have multi-dimensional array

  - Array object within array object
  - To access multi-dimensional array element, Use multiple square brackets

- Use "indexOf" to find location of element

- Use "push()" to add object to an array at the end

  - Use "unshift()" to add element to the front of the array

- To remove items at the end, use the "pop()" function

  - To remove the first element, use the "shift" function
  - To remove a particular element, use the "splice(index, count)"
    - The "count" indicate how many elements to remove, can be omitted

- For loop in JS follows the grammar "for...of"

  - ```javascript
    for (const variable of array)
    ```

- Use the "map(func)" to apply a function to every elements in an array

- To create a new array + only include certain elements, use the "filter" function

  - Takes a function arguments, depends if the function return true / false, copy / discard the items to the new array

#####  Converting between strings + arrays

- Use the "split()" method to find the character, and return the separated substring as item in array
- Covert array to string by using the "toString(arr)" method
  - Alternatively, use the "join()" function, opposite to "split(str)", to join elements in array together, with options to add extra string in between