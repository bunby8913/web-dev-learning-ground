# How CSS works

### How does CSS actually work

- Document are processed in # of stages
  1. Browser load the HTML
  2. the HTML is converted into DOM (document object model), memory of the computer
  3. Fetch any resources linked by the HTML document, images, video, embed, CSS, etc.
  4. Browser parses the CSS, Sort rules by selector types, into different bucket
     - Attach rules to element in DOM
  5. Render tree changes layout after CSS rules applied
  6. Visually display the page (painting)

### About the DOM

- Tree-like structure
  - Each segment in DOM becomes a node
  - DOM defines the relationship between other DOM element
  - Parent, children + sibling relationship

### A real DOM representation

### Applying CSS to the DOM

### In case CSS doesn't understand

- Does nothing, just move on to the next rule
  - If encountered selector doesn't exist, move on to the next selectors element
  - If the browser does not recognized the rule, just move on to the next one
- Enable basic fallback styling
  - No error in trying new rules