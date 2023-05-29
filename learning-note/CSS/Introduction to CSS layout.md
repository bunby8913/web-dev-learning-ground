# Introduction to CSS layout

### Normal flow

- The default way of browser layout, no special controls
- Should always start with a well-structured HTML file

### The display property

- All page layout are applied through the "display" property
  - Able to pick values base on functionality without worrying about appearance
- Additional property to further customize the layout, "display:flex" + "display: grid"

### Flexbox ("display:flex")

- Flexible box layout CSS module
  - Easy to lay things out in 1 dimension, row / column
  - Apply the "display:flex" attribute to any parent element
    - All children element will become flex items

##### Setting display: flex

- Usually "<div>" element are block element
  - However, once apply "display:flex" to their parents, all div arrange into the same columns
    - Affected by the same initial element, become a flex set
      - In a row due to the "flex-direction" property
      - "align-items": Initial value to "stretch, defined by the tallest element

##### Setting the flex property

- Properties can also be applied to flex items
- "flex": Set how I flex item grow / shrink to fill the space in a flex container
  - Set to 1 will have all the elements grow, leave no space in the middle

### Grid layout

- Designed for 2D layout, lining rows + column

##### Setting display: grid ("display:grid")

- Enable the grid layout with the "display:grid" value
  - Defines row + column tracks with "grid-template-rows" + "grid-template-column"

##### Placing items on the grid

- Explicitly place the item on the grid
  - Define the "grid-column" + "grid-row" of the items on the grid
  - Column + row can be a range, split by "/"

### Floats

- Floated element moved to left / right + surrounding elements floats around it
- 4 possible values
  - "left" / "right" : elements float to the left / right
  - "none" : The default value, no floating at all
  - "inherit": take the same float value from their parent
- Float is still used as a legacy layout method

### Positioning techniques

- Move an element from its location in normal flow to a different location
  - For managing + fine-tuning position of specific items on pages
- Static positioning: The default positioning for every elements, puts element in the normal flow

##### Relative positioning ("position: relative")

- Offset an element from its normal flow location
- The "position: relative" does not do anything on its own
  - Needs to set "top" + "left" properties
    - Opposite to common sense, positive "top" + "left" value will push elements down + right

##### Absolute positioning ("position: absolute")

- Complete remove the element from the normal flow + position using offsets from the edges of the block
  - Offset calculated from the top + left of the block

##### Fixed positioning ("position: fixed")

- Complete remote the element from the normal flow + set the element at a fixed position on the viewport (instead of an absolute position on the page)
  - Offset calculated from the top + left of the block 

##### Sticky positioning ("position: sticky")

- Mixes relative + fixed positioning
  - Scroll in normal flow until it hit pre-defined viewport offset
    - Becomes stuck + fixed position rule applies

### Table layout ("display: table")

- An early method to create web page layout
  - Inflexible, heavy on markup, difficult to debug, semantically wrong (Not friendly to screen reader)
- Considered as a legacy method, should only be used if browser does not support grid + flex box

### Multi-column layout ("column-count" / "column-width")

- Layout CSS modules in columns, like newspaper
- Either use "column-count" to tell browser how many column we want / use "column-width" to define the width of each column



