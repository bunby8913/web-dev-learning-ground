# Debugging CSS

### The DOM vs. view source

- Difference between the source code of a webpage vs. HTML pane from the dev tools
- In rendered DOM browser may normalized + solve badly-written HTML code
	- Will also show any changes made by JavaScript
- View sources just simply shows the source code stored on the server

### Inspecting the applied CSS

- Browser should uses have a rules view panel, shows CSS properties + values applied to the element
	- Useful to detect any unexpected CSS being applied to the element
	- Also able to expand any short hand properties
	- Able to check / uncheck specific rules to apply / stop applying them to the element
		- Very useful to do A/B testing on the website, to determine which application is the best

### Editing values 

- Values can be edited using inspecting element panels

### Adding a new property

- Dev Tools allow us to add new properties before adding them into the CSS file
- Can enter new properties, devTools usually have auto-complete tools to support it

### Understanding the box mode l

- Layout views shows the diagram of box model + the values being applied to each layer
	- Include properties that are not explicitly set, but are using initial values

### Solving specificity issues

- The un-used properties will appear to be crossed out in devTools

### Debugging problems in CSS

##### Take a step back from the problem

##### Do you have valid HTML + CSS?

- Use CSS + HTML validator to ensure the code are correct
	- Browser are good to interpret wrong HTML + CSS code, however, different code may interpret differently

##### Are the property + value supported by the browser you are testing in?

- Browser ignores CSS they don’t understand
- Ensure the style sheet is understood by the browser using browser compatibility tables

##### Is something else overriding your CSS?

- Follow the specificity rules

##### Make a reduced test case of the problem

- Reduce an issue to scope the problem down, report bug + ask for help more effectively
	- Take the problematic code out + make a small example only shows the problematic codes
- Make static version of output if markup is dynamically generated
	- Copy HTML + CSS relevant code
- If removing JavaScript does not solve the problem, remove it from the code
- Remove HTML that does not contribute to the error code
- Remove CSS that does not contribute to the issue
- Always use comment to explain logic