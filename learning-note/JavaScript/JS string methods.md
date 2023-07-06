# JS string methods

- String objects come with a series of properties + methods
- Use "var.length" to get the length of the string
- Use square bracket "[]" with index to retrieve characters from string
  - Start from 0
- To find substring in the string use the "include" function
  - To find substring at beginning / end of the string, use "startWith()" + "endWith()"
- To find location of a particular substring, use "indexOf()", return -1 if not found
  - To find the next substring, pass the optional starting argument 1 more than current
- To extract substring using index, use the "slice(start, finish)" function
  - The second parameter (finish) is an optional argument, if not supplied, substring will be until the end of the string
- To change cases for the string, use "toLoweCase()" + "toUpperCase()"
- To replace a substring with another substring, use "replace(old, new)"
  - Only changes the first occurrence
  - To change all, use "replaceAll()"