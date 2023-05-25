# Web fonts

### Font families recap

- “font-family” variable
	- Browser will iterate through a list of font-family until an available one
- web-safe fonts: limited fonts that are available across all common system

### Web fonts 

- Can specify font file online using CSS
- Use the “@font-face” rule set (start of CSS), specific the font files to download
	- Use the font name specified in font face to apply the font to element
- Make sure to purchase / acquire proper license before putting them into CSS
- The WOFF/ WOFF2 are recommended to support all major browsers
	- WOFF2 support all true type + open type specification
- Order of list font size is important, CSS will download the first file by default, should always put the WOFF2 file at the top


### Using an online font service

- Online services that store + serve fonts so developer don’t have to worry about insert using “@font-face”
	- Google fonts (free to use)

### “@font-face” in more detail

- “font-family”: The name we want to refer the font with
- “src”: specify the path (URL) of the font
	- could include a “format()” section after, to indicate the format of the font 
- “font-weight/font-style”: Allow developer to call specify font weight + font style form the server

### Variable fonts

- Fonts contain multiple variable of typeface, incorporates into single file, allow multiple width, weight / style per file