# Handling different text directions

- CSS support left-> right, right-> left + top-> bottom writings
	- Writing modes

### What are writing modes? (“writing-mode”)

- Whether text is running horizontal / vertically
- Use “writing-mode” property, can be applied to any language
	- For creative purposes
- “horizontal-tb”: top-to-bottom horizontal lines of text
- “horizontal-bt”: bottom-to-top horizontal lines of text
- “vertical-rl”: right-to-left vertical lines of text
- “vertical-lr”: left-to-right vertical lines of text

### Writing modes + block + inline layout

- Block + inline are related to writing mode
	- Blocks are only top-bottom if in horizontal writing mode
	- inline dimension is always the same as the direction of the sentence

##### Direction

- Instead of using left-> right / top-> bottom, CSS refer text direction, use start-> end instead

### Logical properties + values

- CSS a new set of mapped property
	- Replace physical properties (width + height), use logical + flow relative property instead
- inline-size: Controls the width of the box in horizontal writings
	- Height in vertical writings
- block-size: Controls the height of the box in horizontal writings
	- Width in vertical writings

##### Logical margin, border + padding properties

- Instead of using top, right, bottom, left to describe each side of the margin, use “block-start”, “inline-end”, “block-end”, + “inline-start”
- The property will be applied to different edges depends on the writing mode

##### Logical values

- physical of top, right, bottom + left can be represented with its equivalent logical values

##### Physical / logical properties?

- Logical properties is unnecessary unless you want to support multiple writing modes
	- However, logical properties make more sense for the long term future