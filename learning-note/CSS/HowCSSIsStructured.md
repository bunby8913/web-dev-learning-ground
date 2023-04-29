# How CSS is structured

### Applying CSS to HTML

##### External stylesheet

- CSS in a separate file, most common + useful
- Can link single CSS to multiple files

##### Internal stylesheet

- Can also play CSS inside HTML
  - Place CSS inside the "<style>" element in the "<head>" section
- Each web page requires their own stylesheets

##### Inline styles

- CSS declaration that only affect 1 element
  - Using the "style" attribute
- Opposite of best practice, avoid using normally

### Selectors

- Selector tell the browser which element(s) should the rules apply for

##### Specificity

- Rules to control which selector is stronger during conflict
- Cascade: Styles appear later in the stylesheet will take priority
- Specificity: The specific the selectors (i.e. class over element) the higher the priority

### Properties + values

- 2 basic components of CSS, forms CSS declarations
- Properties: identifiers indicate which stylistic feature to modify
- Values: Assign a value to each property, indicate how to style
- Paired with selectors to produce CSS rulesets
- Properties are value + case-insensitive

##### Functions

- Some values take the form of functions

###### The calc() function

- Perform simple math in CSS, can dynamically change the size of elements, change depends on the window width

###### Transform functions

- many different transform functions (i.e. rotate)

### @rules

- Instruction on what CSS should perform + how to behave
  - Can be used to import from CSS stylesheet
- i.e. @media: Create a media queries
  - Media queries: Key component of responsive design, apply CSS depending on device characteristics (i.e. viewport size)
  - Can also use container queries to base changes on the size of the container instead of the viewport

### Shorthand

- Properties that has to set several values in a single line
  - i.e. font, background, padding, border + margin
- Shorthand is really good to reset any elements

### Comments

- ```css
  /* Comment in CSS */
  ```

### White space

- Browser ignores any white space in CSS, white space is only to improve readability
  - Good practice to declare on individual lines
- Property name never have space
- Unit always need white space