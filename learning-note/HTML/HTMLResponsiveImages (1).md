# Responsive images

### Why responsive images?

- To solve issues of viewing the site on different size of screen
- Art direction problem: Serve different cropped image for different layouts
- Depends on the platform, there is no need to embed large images
	- Should make mulitple resolutions available to user, and browser can determine the optimal resolution to load
- Vector image does not necessarily solve the problem 
	- Not suitable for all image type
- Offer browser several image file of the same thing, load different file depends on the environment

### Create responsive images

- CSS has better tools for responsive images

#### Resolution switching: different sizes “srcset” + “sizes”

- Use comma to separate item in set (list)
- “srcset”: Defines an image with 2 info field, separate by a space
	- An image file name
	- Image’s intrinsic width in pixel (different from pax)
- “sizes”: Conatins the condition to choose the particular image, separate by space
	- Media condition: Condition being evaluated to be true or false, used to
	- Statement that will change the property of the image if true or false
		- The size could also be described using viewport (vw) width relative to the size of the viewport
		- Browser will ignore anything after the first matching condition
	- If the size does not match the image width, browser will choose the first image that’s larger than the selected image width
- Older browser might not support responsive image, might just load the original “src” image instead
- Some mobile browser could lie about viewport width, to load desktop website, then shrink the overall page size down

##### Resolution switching: Same size, different resolutions

- Easier syntax, use CSS to apply the pixel width to the screen
	- Define the size (scale) of the image in the “srcset” attribute
- “sizes” won’t be needed
- The browser will work on the resolution and apply automatically

##### Art direction

- Wanting to change the image displayed to suit the different screen sizes
- The “<picture>” element allow portrait + zoomed in image on different devices
	- The “<picture>” element is a wrapper + could have > 1 “<img>” elements
- Each “<img>” element in the “<pictures>” works the same as 
- Need to provide basic case for older browser to fall back on

##### CSS or JavaScript?

- Images are preloaded before CSS + JavaScript
	- Cannot use CSS / JavaScript to select different image source