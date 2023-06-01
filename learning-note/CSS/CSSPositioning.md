# CSS Positioning

### Introducing positioning ("position")

- Overriding normal document flow
  - Adjust the position / create UI elements floats above other elements
  - UI element that stays in the same position
- All under the "position" property

### Static positioning ("position: static")

- The default positioning method, default behavior
  - The element remain in the normal flow

### Relative positioning ("position: relative")

- Taking the element out of static positioning, still apart of normal flow, ready to move the element
  - use the "top, bottom, left + right" properties to move

##### Introducing "top, bottom, left + right"

- Used to specify where the element to move to
  - Takes any units + values
- Counterintuitive, positive values means going the opposite direction
  - i.e. positive top value means pushing the element down

### Absolute positioning ("position: absolute")

##### Setting position: absolute

- Taking the element out of normal flow, place on a separate layer
  - Isolated UI feature without affecting the rest of the page
- Positional properties calculate from the top left corner of the contain element
  - Margin still affect absolute position elements

##### Positioning contexts

- Containing element of the absolute positioning depends on the ancestor's positioning properties
  - If not specifically defined, static position by default
    - Contained in the initial containing block (the HTML element block)
    - The entire viewport
  - Possible to change the positioning context by setting positioning property for its ancestor

##### Introducing ("z-index")

- Determines the Z axis order of the elements
- Z-axis runs from the screen to the reader
  - Positive value move the element closer to reader
  - "auto" z-axis positioning is 0
- "z-index" is an index instead of position values, only compares the value 

### Fixed positioning ("position: fixed")

- Place element fixed at a visible portion of the viewport
  - Exception: If any ancestor of the fixed positioning block is also a fixed position block, transform property will not be none
- Set the "top: 0" to fix the element to the top of the screen

### Sticky positioning ("position: sticky")

- Hybrid between relative + fixed
  - Act like relative until the page is scrolled down enough
  - Make effect to let nav bar to scroll before sticking to the top of the screen

##### Scrolling index

- By setting titles sticky and a solid background color, can cover the previous title on the top of the screen, to always the sub-title on the top of the screen

