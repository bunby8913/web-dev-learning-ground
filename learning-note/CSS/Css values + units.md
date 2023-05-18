# CSS values + units

### what is a CSS value?

-  Value type = data type
   -  Defines a collection of allowable values

##### Numbers, lengths + percentages

- "<integer>": Only accept whole numbers
- "<numbers>": Any decimal numbers, may have decimal points
- "<dimensions>": Numbers with unit attached
- "<percentage>": Fraction of another value, always related to another value

##### Lengths

- 2 types of length (absolute / relative)

###### Absolute length units

- Generally considered to always be the same size
  - "cm", "mm", "Q"(quarter-millimeters), "in", "pc" (picas), "pt" (point), "px"
    - Pixel is the only common unit in web design

###### Relative length units

- Always relative to something else, screen size, parent element font size, viewport size, etc.
- "em": Font size of the parent (typographical properties) / font size of the element itself (other properties (i.e. width))
- “ex”: the height of the lowercase character “x”, represent the general scale of lowercase character under current font
- “ch”: Short for character, the width of the “0”(zero) character in current font
- Good to set width of element to the number of character
- “rem”: Font size of the foot element
- “lh”: Line height of the element
- “rlh”: Line height of the root element
	- When used on root element properties, refer to properties initial value
- “vw” / “vh”: 1% of the viewport’s width / height
- “vmin” / “vmax”: 1% of the viewport smaller / larger dimension
- “vb” / “vi”: 1% fo the initial containing block in block axis / inline axis
- “svw”/ “svh”: 1% of the small viewport’s width + height
	- Small viewport: When the phone viewport has the dynamically menu expanded
- “lvw” / “lvh”: 1% of the large viewport’s width + height
	- Large viewport: When the phone viewport has the dynamically menu retracted
- “dvw” / “dvh” : 1% of the dynamic viewport’s width + height
	- Dynamic viewport: Dynamically change depends on the state of the browser

##### “‘em”s and “rem” s

- The most frequently encountered relative unit
- “em”: parent element’s font size
	- If the font has a “em” > 1, in a nested environment, the font is going to get bigger
- “rem”: root element’s font size
	- The font size stays consistent, in nested environment the font does not gets bigger

##### Percentages 

- In most cases, can be treated as numerical value
	- Always set relative to some other value (usually the percentage of the value of the parent)
- In a nested environment, if all units uses percentage, the effect will be passed on to child elements
- Note some property will only accept length

##### Numbers

- Some value accept number without units, the number are being treated as percentage

### Colour

- Many different ways to specify color in CSS, every format is universal in CSS
	- The same color value can be used everywhere in CSS

##### Colour keywords

- Simple + easy to understand way to specify colour
- Certain name of the colour can be used as keywords

##### Hexadecimal RGB values

- Using 6 digit, hexadecimal RGB values, start with the “#” symbol

##### RGB + RGBA values (“rgb()”)

- “rgb()” function: Can take 3 / 4 parameters, represent red, green, blue channel (the 4th being alpha(opacity))
	- Same as the Hexadecimal RGB values (Each channel goes from 0-255)
- The opacity channel range from 0-1 (fully transparent -> fully opaque)
- For compatiability reasons, the “rgba()” function still exist, has the exact same behaviour as the “rgb()” function

##### HSL + HSLA values (“hsl()”)

- Alternative to the RGB model
	- Use Hue, Saturation + lightness value instead
	- Hue: determine the base shade of the color (0-360)
	- Saturation: the saturation of the color (0-100)
		- 0 will appear as a shade of grey, 100 has full colour saturation
	- Lightness: determine the brightness of the color (0-100)
		- 0 will appear to be fully black, 100 will appear fully white
- Can also pass a 4th parameter for alpha
	- Same as RGB, a “hsla()” function is kept in CSS for compatibility reasons

### Images

- Image type can be an image file, “url()” function link to an image / gradients

### Position

- Represent a set of 2D coordinate
	- Uses keyword (top, left, bottom, right, centre) to align items with specific edges
- Typically consist of 2 values, horizontal position, vertical position
	- If only 1 values has been specified, the other is automatically set to centre 

### String + identifiers

- Keyword (Identifiers) can be used in many cases as special value that CSS understand
	- Not treated as string
- Quoted value are being treated as string” can be assigned to a property

### Functions

- Re-usable section of code to complete a repetitive task
- CSS has a set of pre-defined function to perform certain task / create data representation