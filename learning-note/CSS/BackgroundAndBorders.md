# Backgrounds + borders

### Styling backgrounds in CSS

- Many available settings for background in CSS

##### Background colours

- Defines the background colour of any CSS element
	- Extend to content + padding
- Can be any types of colour representation, RGB, RGBa, name of the colour

##### Background images (“background-image)

- Display image as the background
	- By default, larger image will not scale down to fit the box
	- Smaller
- Background colour will be below the background image

###### Controlling background-repeat (“background-repeat)

- “no-repeat”: stop the background from repeating
- “repeat-x”: Only repeat horizontally
- “repeat-y”: Only repeat vertically
- “repeat”: repeat in both direction

###### Sizing the background image (background-size)

- Take length / percentage to re-size the background images
- 2 available key words
	- Cover: Will make the image just large enough to cover the box
		- Maintain original aspect ratio
		- Part of the images will likely still be covered
	- Contain: Change the image size to fit perfectly in the box
		- Maintain the aspect ratio
		- Part of the box will not be covered

###### Positioning the background image (“background-position”

- Choose where the image is applied to on the box
	- Use coordinate system
		- Defaults to (0,0)
- Takes keyword
	- top, bottom, left, right, centre
- Percentage + length value
	- Can mix percentage + length value together
- Can have edge offsets and global values
- a 4 value syntax, indicate the distance from the edge of the box (direction, unit, direction, unit)

##### Gradient backgrounds
 
- Can be used as background, set by using the “background-image” property
- Syntax
	- Linear gradient(“linear-gradient”): Transition colour along an imaginary line
	- Radial gradient(“radial-gradient()”): Transition colour from a central pint
	- Repeating gradient(“repeating-linear-gradient()” / (repeating-radial-gradient()”): Duplicate a gradient to fill a given area
	- Conic gradient(”conic-gradient()”): Transition colour around a circle
- Can be mixed with regular background images

##### Multiple background images

- Have multiple background images by including multiple “background-image” value, separate by comma
	- Background may overlap each other
	- Reverse order (the last listed background image at the bottom of the stack)
- Other background image properties can also be applied to multiple background images
	- Value for each element separated by comma
	- If # of property not the same as # of elements, Smaller numbers of value cycle
###### Background attachment (“background-attachment”)
- How the images scrolls when the content moves
- 3 available keywords
	- Scroll: Allow the background element to scroll with the content (if the page scroll, the background scrolls with it)
	- Fixed: Let the element position to be fixed when scrolling
	- Local: Background attached to the element, scroll with the element (The content needs to have scroll bars to take in effect)
		- Can provide the scroll bar with the “overflow”property (“auto” / “scroll”)

##### Using the background shorthand property

- If using multiple backgrounds, needs to set all properties for 1 background, before adding the next background (after comma)
- Background colour must be the last property to set
- “background-size” must be immediately after “background-position”

##### Accessibility considerations with backgrounds

- Need to have enough contrast for readability
- If text is placed on top of image, consider using “background-colour” allow text to be readable
	- background image might not be read by screen reader, should not include any important informations

### Borders

- Borders can be set individually (top, right, bottom, left) + set them together
- Borders have width, style and colour property

##### Rounded corners (“border-radius”)

- Achieved using “border-radius” property
- Can either set the radius for all corners
- or to use 2 values (percentage / value)
	- 1st value for horizontal radius
	- 2nd value for vertical radius