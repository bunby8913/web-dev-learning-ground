# JavaScript basics

- A scripting / programming language, used to implement complex feature + logics to web pages
  - Content updates, interactive maps, animation, etc
  - Part of the standard web technologies

### What can JavaScript do

- Store value as variable, modify text + response to event on a web page
- JavaScript is able to interact with web APIs
  - Ready-made set of code, allow developer to implement features that are hard to implement
- Browser APIs vs. 3rd party APIs
  - Browser APIs: built into the web browser, expose data from surrounding environment
    - Manipulate HTML + CSS
    - Retrieves geographical information
    - "Canvas" + "Web GL" to create 2D + 3D animation + graphics
    - Audio + video APIS to apply interesting effect to multimedia
- 3rd party APIs: Needs to grab the code from the source, from the web
  - Twitter APIs, interact with twitter function + display latest tweets on website
  - Google map APIs to embed custom map to website

### JavaScript's interaction with the page

- When loading a web page, all the code (HTML, CSS + JavaScript) runs inside an execution environment (The browser tab)

##### Browser security

- Each tab in a browser is a separate execution environments
  - In most case, JavaScript codes runs independently

##### JavaScript running order

- Generally runs in top to bottom order

##### Interpreted vs. compiled code

- Interpreted, result of the code immediately available, does not need to be complied into a different language
  - i.e. JavaScript
- Compiled code needs to transformed the code into another language, usually machines code
  - Execute in binary format, i.e. C / C++
- JavaScript often uses the "just-in-time" compile to improve performance
  - Compilation handled at run time

##### Server-side vs client-side code

- Client-side: code that runs on user's computer
  - Code are downloaded + executed on user's browser
- Server-side: Code that runs on the server
  - Result are downloaded + displayed by a browser
  - i.e. PHP< python, ruby, JavaScript (Node.js), etc.

##### Dynamic vs. static code

- Dynamic code: Update the display ow web page/app to show different things + generate new contents
- Static code: Shows the same content all the time

### Add JavaScript to a page

- Use the "<script>" to add JavaScript in a page
  - Code can be added inside the HTML document, can add JavaScript inside the "<script>" block

##### External JavaScript

- if provide the "<script>" tag with a file path, to use external JavaScript file
  - Usually the preferred practice, improve readability + re-usability

##### Inline JavaScript handlers

- The HTML elements can include inline functionality
  - Bad practice, pollute HTML with JavaScript + inefficient
- Should use "addEventListener" instead
  - The "querySelectorAll()" function can select all the elements of a type
  - Allow the same functionality to be applied to all elements

##### Script loading strategies

- The JavaScript will not work unless the HTML elements has been loaded
  - For internal code, Could use event such as "DOMContentLoaded" to determine if all elements in DOM has been loaded
  - The JavaScript will not run until the all elements are loaded
- For external JavaScript code, include the keyword "defer" after the source of the file in the "<script>" tag
- Or put the script element at the bottom of the page (legacy solution)
  - Could cause performance issues if JavaScript is loaded at last

##### "async" + "defer"

- "async": Download the script without blocking the page
  - Once downloaded, execute the code immediately, block the page from rendering
  - No guarantee the code will run in specific order
    - Should be used to execute script that are independent from each other
  - Should used to load series of background scripts, loading data, etc.
- "defer": load the script in the order they appear in page
  - Won't run until all elements are loaded

### Comments

- ```javascript
  // A JavaScript comment
  /* Another form of JavaScript comment */
  ```

  