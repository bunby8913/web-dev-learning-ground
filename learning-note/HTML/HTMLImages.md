# Images in HTML

## How do we put an image on a webpage? <img>

- Void elements: cannot have children, cannot have end tag
	- Also known as replaced elements: Content + size of the elements are defined by external source
- 2 useful attributes
	- “src”: URL to the image, can be absolute / relative address, but absolute address not recommended
		- Give image file descriptive name to help SEO
		- More advanced website will use CDN to deploy media content
		- Warning: Never point to any image hosted on other people’s website (hotlinking), highly unethical
	- “alt”: Textual description of the image
		- For accessibilities / when the Internet is too slow to load the image
		- Can test out “alt” by misspelling image files name
		- Used when the browser doesn’t support the image type
		- Used when user turns on low data mode
		- Helps with SEO
	- Content of “alt” attribute
		- Decoration: Blank descriptive image will be skipped by screen reader
		- Content: If the main text already describe the image, can leave “alt” blank
		- Link: Provide accessible link text in anchor’s description or image’s
		- Text: Should never put set into images, if you have to, supply the text also in “alt” attribute

### Width + height

- “width” + “height” attribute to specify
- Allow browser to save space for the image before it loads
	- Smoother + quicker page loading
- Should not alter the size of image using HTML
	- Distort the image / bad aspect ratio

### Image titles “title”

- Tooltip on mouse hover, but not recommended
	- Does not support screen reader
	- Only available when hovering over
- Should use the title in article text, instead of image

## Annotating images with figures + figure captions <figure> + <figcaption>

- Can just write the caption as a p tag, but does not semantically links the image to caption
- Better solution to use figure + figure caption tags
	- Wrap the image in the <figure> tag + write the caption for the image in the <figcaption> tag
- <figcaption> vs. “alt”
	- <figcaption>: Additional information to the image who can see the images
	- “alt”: provide description to the image in the absence of the image / for people who can’t see them
- <figure> can be used on many other elements

## CSS background images “background-image”

- Use CSS to embed images into webpages
	- There are other “background-*” properties to control placement
- Easier to position + easier to control, but for decoration only
- If image has meaning for the content, use HTML, otherwise, use CSS background images