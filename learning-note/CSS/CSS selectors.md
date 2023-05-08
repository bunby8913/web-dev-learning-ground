# CSS selectors

- Wide variety CSS selectors available, for fine tuning + select particular elements

### What is a selector

- Tell the browser which HTML element are selected
  - The subject of the selector
- Most browser support majority of the selectors

### Selector lists

- If rule(s) need to be applied to > 1 elements, can combine the selector into list
  - If any selector are invalid, than the rule set will not eb applied

### Types of selectors

### Type, class + ID selectors

##### Type selectors

- Tag name selector / element selector

##### The universal selector ("*")

- Select everything in the document / everything in the parent element using descendant combinator
- Also known as "reset stylesheets" : strip out all the browser styling

###### Using the universal selector to make your selectors easier to read

- Making selector easier to read, more obvious what they do

  - Specify the element the pseudo classes are being applied

- e.g.

  - ```css
    article :first-child == /* article *:first-child, Get the first child of every article */
    /* It is the not the same as*/
    article:first-child /* Get the article that is the first child of another element */
    ```

- Add the universal selector ("*") to avoid confusion, indicate the universal selector is applied to the element instead of the whole document

##### Class selectors (".")

- Indicated by the dot character, select everything in the document with the class applied to it

###### Targeting classes on particular elements

- Can target particular element with class selector applied
  - i.e. Can select a h1 element with particular class name
  - Reduce the scope of the rule

###### Target an element if it has > 1 class applied

- Rules for individual class will still be applied individually to the element with > 1 applied
- Can define rules for the combination of >1 classes for the particular element
  - Rules for combination of > 1 classes will not apply the rule to individual classes

##### ID selectors ("#")

- Used the same way as class selector
  - Except ID can only be used once per page
  - Element can only have 1 ID assigned
- Using same ID multiple times might work for styling, but could cause unexpected behavior
- Overall, class is preferred over ID

### Attribute selectors

- Can use attribute selectors to select element with certain attributes

##### Presence + value selector

- "[attr]": Match elements with an attr attribute
- "[attr=value]": Matches element with attr attribute + has the exactly the same value
- "[attr~=value]": Matches element with attr attribute + has the exactly / contains the value as list of values
- "[attr|=value]": Matches element with attr attribute + has the exactly value / begin with value, immediately follow by a hyphen ("-")

##### Substring matching selectors

- "[attr^=value]": Matches element with an attr attribute + has the value begin with the variable value
- "[attr$=value]": Matches element with an attr attribute + has the value end with the variable value
- "[attr*=value]": Matches element with an attr attribute + contain the substring of the variable value anywhere in the value
- Part of regular expression

##### Case-sensitivity ("i")

- Use ("i") as a flag before closing bracket to match attribute case-insensitively

### Pseudo-classes + pseudo-element

##### Pseudo-class (":")

- Use the colon keyword

- Selector that select element that are in specific state
- Cut down excess classes + more flexible + maintainable code
  - Avoid assigning classes, but instead use the states of the element in the document
  - Behaving as the states has been added as a class in HTML

###### User-action pseudo classes

- Some pseudo classes are only applied with user interaction
  - Dynamic pseudo-classes
  - i.e. hover, focus, visited
    - Focus described any event where the elements are targeted with other input method than mouse cursor (i.e. keyboard based + other based interaction)

##### Pseudo-element("::")

- Behave like a newly added HTML element, instead of applying to pre-existing elements
- i.e. ("::first-line"): Always get all the text on the first line, and update each time the line length changes

##### Combining pseudo-classes + pseudo-elements

##### Generate content with ::before + ::after

- Use the before / after pseudo-elements with the "content" property to inserts content from CSS
  - Text will be inaccessible for screen reader, hard to find + edit in the future
- However, good to include icon + other information does not need to be picked up by screen reader

### Combinators

- Combine selectors + give them meaningful relationship

##### Descendant combinator (" ")

- Combine 2 selectors, where the right selector is the descendant (children) of the left selector

##### Child combinator (">")

- Placed between 2 CSS selectors
- Elements matched by the second selector are the direct children of elements matched by the first
  - Much more tight relationship than descendant combinator

##### Adjacent sibling combinator ("+")

- Placed between 2 CSS selectors
- Matches when the second element is the next sibling of the first element
  - i.e. Looking for paragraph that are directly after heading

##### General sibling combinator ("~")

- Placed between 2 CSS selectors

- Select all the second element that come anywhere the first element
  - More general sibling relationship

##### Using combinators

- Can combine any selectors together
- More specific rules are hard to be re-applied to other part of the document
  - Often better to create simple class + apply to element

