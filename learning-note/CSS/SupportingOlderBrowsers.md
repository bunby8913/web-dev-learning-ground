# Supporting older browsers

### What is the browser landscape for your site

- Should always find out the # / % of people using older browsers to access the site
  - Consider the type of devices users use to access the site

### What is the support for the features you want to use

- MDN generally provide great browser compatibility information on all major browsers
  - Or use the "can I use" website

### Support doesn't mean "looks the same"

- Website cannot possibly look the same in all browser
  - Serving a version of the web content designed defensively
  - Look great on modern browser, look reasonable / usable on older browsers
- Should always start with a well-structured HTML document
- Accessibility of the site should be more important than supporting older browsers

### Creating fallbacks in CSS

- Create simple CSS layers of layout using legacy methodology

##### Falling back from grid to float

- Include both float + grid layout code, older browser is going to ignore the code relate to grid layout, and only apply the float layout to the items

##### Fallback methods

- Float + clear: remove CSS properties if the layout if floater/ cleared item becomes flex / grid items
- "display: inline-block" : Create column layout, if the elements become flex / grid items
- "display: table": Create table layout for older browsers, will be ignored if items becomes flex / grid items
- Multiple-column layout: Create multiple column layout, if it becomes grid container, multi-column will be ignored
- Flexbox as a fallback for grid: Flex box has better support, so if any flex box container turns into grid container, flex properties will be ignored

### Features queries

- Use features queries to test if particular features is supported by the browser

  - Code will be ignored if not supported

  - ```css
    @support (display: grid)
    {
        /* CSS codes */
    }
    ```

- However, older browsers might also not support features queries

- It will becomes a more useful feature in the future

### The IE10 + 11 prefixed version of grid

- IE 10 + IE 11 support grid, but require a special prefix "-ms-"
  - Grid layout with the prefix can be used by IE + edge, ignored by the rest of the browsers

### Testing older browsers

- Several online testing tools + cross browser testing module available
- Could also use virtual machines to run older OS + browsers