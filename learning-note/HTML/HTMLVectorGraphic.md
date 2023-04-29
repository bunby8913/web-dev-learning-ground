# Adding vector graphics to the web

- Small file size, highly scabble, won't be pixelated / blown up

### What are vector graphics?

- 2 types of images
  - Raster images: A grid of pixels, information on where each pixel is placed + color of each pixels
    - PNG, JPEG, GIF, BMP
  - Vector images: Defined using algorithm, Computer calculate the shape through shape + path
    - Much lighter, only requires algorithms rather than pixel placement
    - SVG

### What is SVG?

- Scalable vector graphics: XML-based language, contain many different elements to define the shape + effect appear on screen.
- Possible to create easy vector graphic by hand, but recommend for more complex cases, should use Inkscape / Illustrator
- Additional benefit for SVG
  - Text in vector image are still accessible (good for SEO)
  - Well to styling /scripting, every component of SVG can be styled with CSS + scripted with JavaScript
- Disadvantage of SVG
  - File size grows rapidly, uses significant amount of processing power
  - Harder to create than raster images

### Adding SVG to your pages

##### The quick way: <img> elements

- Reference in the "src" attribute, need to set "height" + "width" attribute manual
  - SVG do not have inherent aspect ratio
- Pros:
	- Familiar syntax to embed image
	- Make image into hyperlink by nesting <img> element instead an <a> element
	- Can be cached by Browser, allow faster reload time
- Cons:
	- Cannot manipulate with JavaScript + manipulated only by Inline CSS
	- Canno re-style the image with CSS pseudo classes

##### Troubleshooting + cross-browser support

- Some earlier browser may not support SVG
	- Use “srcset” to load the SVG only in supported browser, otherwise, a PNG/JPEG will be loaded
- Also use SVG as CSS background image
	- SVG inserted using CSS background image cannot be manipulated by JavaScript

##### Include SVG code instead your HTML <svg>

- SVG inline, copy the SVG code directly into HTML
- Use the “<svg>” tag to wrap the code
- Pros:
	- Saves an HTTP request to the file, reduce loading time mildly
	- Assign class / id to the SVG element, allow direct manipulation from CSS + JavaScript
	- Allow CSS to implement animations for the SVG
	- Can turn the SVG into hyperlink with the “<a> element
- Cons:
	- Hard to maintain duplication of SVG in multiple different place
	- Increase the size of HTML
	- Cannot cache inline SVG
	- Browser support SVG will still download fall back images

##### Embed an SVG with an <iframe>

- Cons:
	- Browser will only display fallback if not support <iframe> element
	- SVG needs to be placed at same location with JavaScript to be manipulated