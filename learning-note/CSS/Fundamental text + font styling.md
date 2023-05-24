# Fundamental text + font styling

### Styling text in CSS

- Content start from the top left corner of the box, flow until the end of the line, move onto the next line, until the end of the content
	- Act like a series of inline element, does not break until a “<br>” element
- 2 categories of CSS properties to style text
	- Font styles: Affect texts font (which font being applied, size, special properties, etc.)
	- Text layout styles: Affect spacing + layout of the text the overall styles of the content block
- Text inside a single element is affected as single entity
	- Cannot select + styles subsection

### Fonts

##### Colour

- Sets the foreground content of the element
	- not only text, also affect “text-decoration” property

##### Font families (“font-family”)

- Specify a font(s) for the browser to apply to elements
	- Font will only be applied if it’s available on user’s machine
		- If not, default font will be applied (ariel)
###### Web safe fonts

- A number of fonts that are generally available on all machines
	- Available on all major OS
- List evolves as OS evolves

###### Default fonts

- 5 generic names for fonts
	- Serif: Font with small details at the end of the stokes
	- sans-serif: Fonts without serifs 
	- monospace: Every character has the same width, uses in code listing
	- cursive: Intend to emulate hand writing, flowing + connected strokes
	- fantasy: intended to be decorative
- Browser will try to provide font that its most appropriate to the type of the font in worst case
	- cursive + fantasy are less predictable, should be used with care

###### Font stacks

- Supply multiple fonts to the browser as fail safe for browser to choose from
	- provide multiple values to the “font-family” property, separated by commas
		- Font name that are more than 1 words must be surrounded with quotation mark
- Browser start from beginning of the list, iterate through list until a font is available on user’s machine
- Good practice to provide suitable generic font at the end

##### Font size (“font-size”)

- Some of the most common units for font size
	- px (pixel): # of pixels of the font’s height
	- em: Font size of the parent element, width of the letter “M” in the parent element
	- rem: Font size of the letter “M” in the root element (“<html>”), might not be supported on older browser
- All inherited from the root “<html>” element, by default , 16px across browsers
- Keep in mind nested “em” multiplies every nest
	- Best to use rem to keep consistency across nested elements

##### Font style, font weight, text transform + text decoration

- “font-style”: Set if the text are italic or not (rarely used)
	- normal: italics off, text to normal font
	- italic: set text to italic version, if not found, use oblique method
	- oblique: Set text to simulate italic font by slanting the normal version
- “font-weight”: Set if the text is bold-ness of the text
	- Normal, bold: (the most common option) normal / bold font weight
	- lighter, bolder: one slight thinner + bolder than normal, bold
	- 100 - 900: Numeric boldness, provide finer controls if needed
- “text-transform”: transform the font in a various way
	- none: does not have any transform
	- uppercase: transform all character to upper case
	- lowercase: transform all character to lowe case
	- capitalize: transform only the first letter to be capitalized
	- full-width: Transform all character to be monospace spacing, allow alignment with latin character + asian language
- “text-decoration”: sets/ insets decoration on fonts
	- none: unseat any text decorations
	- underline: provide underline on the text
	- overline: over line on the text
	- line-through: strikethrough the text
	- Accept multiple values at once

##### Text drop shadows (“text-shadow”)

- Takes 4 values
	1. Horizontal offset of the shadow (in px) (+ = moving right, - = moving left)
		- must include a value
	2. Vertical offset of the shadow, moves shadow (+ = up, - = down)
	3. The blur radius: higher means shadow is dispersed more widely, default to 0
	4. Base colour of the shadow, default to current colour

##### Multiple shadows

- Can provide multiple shadows, values separated by comma (“,”)

### Text layout

##### Text alignment (“text-align”)

- How text is aligned in the content box
	- left, right, centre
	- Justify: make the text spread out, vary the gaps between text so every lines of text has the same width
		- Might look terrible, use with cautions

##### Line height (“line-height”)

- Set the height of each line
	- Can take normal length + size unit + unit less value
		- Act as multiplier to the current value
		- “font-size” multiplied by “line-height”
- Line height are recommended 1.5 - 2

##### Letter + word spacing (“letter-spacing” + “word-spacing”)

- Not used very often usually to improve legibility of particularly dense font
- Take any length + size unit

##### Other available font properties

- font-variant: switch from small caps + normal font
- font-kerning: enable/disable font kerning (adjust spacing between specific pairs of character for better readability)
- font-feature-setting: switch openType feature on/off
- font-variant-alternates: control the use of alternate glyphs
- font-variant-caps: control the use of alternate capital glyphs
- font-variant-east-asian: usage of alternate glyphs for east asian script
- font-variant-ligatures: ligatures + contextual forms
- font-size-adjust: adjust the visual side of the font, independent from the actual size of the font
- font-stretch: switch between normal / stretched version of the font
- text-underline-position: specify the position of the underline
	- Underline set by the text-decoration property
- text-rendering: try to perform text rendering optimization
- text-indent: specify how much text indent on the first line
- white-space: determine how white space + line break are handled in box
- word-break: determine if word should be breaker into multiple lines
- hyphens: support hyphens on/off for supported language
- line-break: relax / strengthen line breaking for asian language
- text-align-last: define how last line are aligned
- overflow-wrap: determine if the browser may break lines or let the word overflow

### Font shorthand

- Most font properties are included in the shorthand property “font”
	- In the following order: “font-style”, “font-variant”, “font-weight”, “font-stretch”, “font-size”, “font-height” + “font-family”
	- Need a forward slash (“/“) between “font-size” + “font-height”
