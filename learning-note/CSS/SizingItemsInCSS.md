# Sizing items in CSS

### The natural / intrinsic size of things

- HTML element have ways to set size of items before CSS
	- Image contain sizing information
		- Intrinsic size: The size defined by the element
- If An image is placed on page without change of height / width (Attribute / CSS), intrinsic size will be used

### Setting a specific size

- Extrinsic size: Given the element a specific size using CSS
	- Given an element a specific extrinsic size, the size will remain the same regardless the content it contains
		- Could lead to problem with overflow content

##### Using percentages

- Percentage can also be used interchangeably with lengths 
- Percentage uses the size of the parent block

##### Percentage margins + paddings

- Margin + padding as percentage could cause unexpected behaviour
	- Margin + padding percentages is calculated using inline size (width in horizontal writing mode)

### Min- + max- sizes
- can provide element with minimum / maximum size
	- i.e. If an box has variable amount of content, but you want the width to be fixed, can set the “min-width” of the box
		- Box can grow wider but nor narrower
	- i.e. We can use “max-width” to scale image down if not enough space to display with intrinsic width
		- If the image is smaller than the box’s width, using “max-width” ensure image will not be forced to stretch, prevent pixelation
- Make image responsive
	- However, image should be properly sized, avoid user from downloading over large images

### Viewport units

- Viewport size can be measured by CSS
	- “vw” / “vh”: viewport width / viewport height
- Useful in design
	- By set hero section of page 100vh high, will always covert the all viewport + push the rest of the content below the viewport