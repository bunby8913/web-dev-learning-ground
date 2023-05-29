# CSS Flexbox

### Why flexbox?

- Floats + positioning were the popular choice to create CSS layout + but with many limitations
  - Cannot achieve vertical centering
  - Cannot make all children in container take the same amount of space, regardless of width/height available
  - Cannot make multiple column layout have same height with different content
- Flexbox solve many of the problem + makes layout tasks a lot easier

### Specifying what elements to lay out as flexible boxes

- Default flex item setup is to solve the problem with floats + positioning

### The flex model

- Flex items are laid out in 2 axes
  - Main axis: Laid in the same direction the item is laid out in
    - Horizontally in Western writing mode
    - Main start + main end : the start + end of the axis
  - Cross axis: Axis running perpendicular to main axis
    - Cross start + cross end: the start + end of the cross
  - Flex container: The parent elements of all the flex items

### Columns / rows? ("flex-direction")

- Defines the direction of the main axis
  - Default to row, left to right in English browser
- "flex-direction" can be row, column, column-reverse + row-reverse

### Wrapping ("flex-wrap")

- To avoid flex box items from overflowing the container
- “flex-wrap”: wrap
- “flex”: Set the main axis’s size of the flex items, should be applied to the children of the flex box

### Flex-flow shorthand (“flex-direction”)

- “flex-direction” is shorthand combines “flex-wrap” + “flex-flow”

### Flexible sizing of flex items (“flex”)

- “flex” takes unit less proportion value
  - Determine how much space each flex item takes on the main axis
  - same values indicate equal amount of space for all items (after padding + margins)
    - If values is shared between all flex items, can be any values with the same effect
- Can use CSS selector to select any particular flex items + apply a different units
  - The value indicate the # of portions the flex items will take

### “flex”: shorthand vs. longhand

- “flex” shorthand specific 3 units
  - “flex-grow”: the unit less proportion value, defines the portion of spaces the flex items takes
  - “flex-shrink”: Defines how much an item will shrink to prevent overflow
  - “flex-basis”: The minimum size of the flex box
- shorthand is always recommended over long hand

### Horizontal + vertical alignment (“align-items” + “justify-content”)

- “align-items”: The default value is “stretch”
  - stretch all elements to fill the parent box
  - “center”: Maintain intrinsic dimension, centered along the cross axis (centered vertically)
  - “flex-start” + “flex-end” align items to the start + end of the cross axis
- Each individual items can have separate alignment
  - Used the “align-self” property to assign random alignment
- “justify-content”: Defines where the item sits on the main axis
  - "flex-start": Items bunched up, at the start of the main axis
  - "flex-end": Items bunched up, at the end of the main axis
  - "space-around": Items evenly along the main axis, extra space on the start + end
  - "space-between": Similar to space-around, except no extra space on start + end


### Ordering flex items

- Possible to change the layout of the flex items, impossible with traditional layout methods
  - By default, all flex items has the "order" value of "0"
    - Higher "order" value indicate later display order
    - same "order" value will follow original order
  - Can set negative "order" value to move items forward

### Nested flex boxes

- Flex items can also be a flex container, contain multiple flex item within
  - Set the flex item's "display" property to be "flex", 

### Cross-browser compatibility

- Supported by all, modern browser on all platforms
  - When implementing, need to make sure supported by as many browsers as possible
- Flex box error / lack of support could be catastrophic 