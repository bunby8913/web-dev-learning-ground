# Box model

- Everything in CSS is contained in a box

### Block + inline boxes

- 2 categories of boxes, block + inline
  - Determine how the box behave + relate to other boxes
- Inner vs. outer display type
- use the "display" property to set up display type box

### Outer display type

- Block outer display box:
  - Break onto a new line
  - Use width + height properties
    - If width not specified, box will fill the container
  - Padding, margin + border will push other element away from the box
  - i.e. "<h1>" + "<p>" uses block outer display by default
- Inline outer display box:
  - Will not break onto a new line
  - Does not apply width + height properties
  - Top + bottom padding, margin + border will apply, but not push any element away
    - Left + right padding, margin + border will apply and push things away
    - "<a>" , "<span>" + "<em>" use inline outer display box by default

### Inner display type

- Determine how element are displayed inside a box
- By default, element uses inline + block
	- However, other type i.e. Grid + flex are available

### What is the CSS box model?

- Apply block boxes + define different parts of a box to display on a web page
	- Inline has more limited options
- Standard vs. alternate box model
	- Browser by default use standard model
##### Parts of a box

- Content box: Area where content it’s displayed
	- Controls size through width, height, block-size + inline-size
- Padding box: Padding around the content (white space)
	- controlled by padding + related properties
- Border box: Wraps around padding + content box:
	- Controlled by border + related properties
- Margin box: the outmost layer, wrapping all the element above
	- Controlled by margin + related properties

##### The standard CSS box model

- Width + height (block-size) controls the size of the content box
	- Using the block size allows element to adjust box size base on writing modes (horizontal vs. vertical)
- Width (inline-size) controls sizes of the inline box (left + right)
	- Inline-size allow custom inline-level element along the inline axis, similar to (block-size)
- Note: The actual size of the box does not include margin
	- Area stops at the border

##### The alternative CSS box model

- Width is the visible box on the page
	- Content width = width - border - padding
- Turn alternative element by setting “box-sizing” to “border-box”
	- Can also set the value in HTML and ask all other element to inherit from it

### Margins, padding + borders

- Use shorthands to set all side of box at once
	- Equivalent longhand properties for more details

##### Margin

- Invisible space around the box
	- Pushes other elements away
	- Can be positive / negative
- Added after the visible box has been calculated
- 4 available properties
	- top, right, bottom, left

###### Margin collapsing

- Only relevant in vertical directions
	- Does not collapse in flex / grid display mode
- When 2 margins controls the same area, result depends on if the margins touch are positive / negative
	- 2 positive margins: Margins will collapse to the largest individual margin
	- 2 negative margins: Margins will collapse to the smallest individual margin
	- 1 positive + 1 negative: Subtracted to get the total margin
- Floating + absolutely positioned element not affected
- Occurs in 3 basic cases
	- Adjacent siblings
	- No content separating parent + descendants: No border, padding, inline part, block formatting context between “margin-top” of block + “margin-top” of descendant blocks
		- Also applies to “margin-bottom”
	- Empty blocks: When no border, padding, inline content, height, min-height to separate “margin-top” from “margin-bottom”, top + bottom collapse

##### Borders

- Between margin + padding
- In standard mode, borders adds to height + width of the visible box
- In alternative mode, borders make box smaller, takes up width + height space
- Large number of properties to select from
	- Top, right, bottom, left
	- Width, style, colour

##### Padding

- Between the border + content area
	- Push the content away from border
- Cannot have negative padding
- Background applied to element will be behind the padding
- Possible to control padding on each side individually

### The box model + inline boxes

- Only some of the above mentioned properties can be applied to inline boxes
	- Width + height are ignored
	- Margin is only applied on the same line
	- Padding is applied in all directions, overlapping and blocking all the other elements

### Using display: inline-block

- “display: inline-block”: middle ground between inline + block
	- Item stays on the same line, but respect height + width properties
- Becomes larger when height + width increases
- Useful to increase the size of padding that will interact with the rest of the elements