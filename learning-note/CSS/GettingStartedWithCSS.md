# Getting started with CSS

### Adding CSS to our document

- Link the CSS file using the "<link>" element in the head section of the HTML
  - "rel" attribute set to stylesheet, indicate the we are linking to a stylesheet
  - "href" attribute set the location of the CSS file

### Styling HTML elements

### Changing the default behavior of elements

- Browsers usually have internal stylesheets with default styles
  - Avoid text just clumping together
- Modern browser will render HTML similarly

### Adding a class

- Use class to select subset of element without changing others
  - Add class as an attribute, give class name as "attribute"
- Target the special class through ".attribute" in CSS
  - Can also specify the class of element the rule applies for
    - i.e. li.attribute
- Each set rule can be applied to multiple class of elements

### Styling things based on their location in a document

- Can use the descendant combinator to look for element inside the parent element (space)
- Can use the adjacent sibling combinator (+) to find element right after the first element

### Styling things based on state

- Style elements based on their states
  - Defines the state looking for after the (:), the styling will only apply if the target is in that particular state

### Combining selectors + combinators

- Possible to combine multiple selectors + combinators