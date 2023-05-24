# Styling link

### Some link examples

##### Link states

- Different states that links can exist in
	- Link: Link with a destination / address
	- Visited: Link that has already been visited
	- Hover: A link being hovered by a pointing device
	- Focus: Linked moved on by a keyboard “tab”
	- Active: When a link is clicked on

##### Default styles

- Links are always underlined
- Unvisited links are blue, visited link are purple
- Hovering over link changes the mouse icon
- focused link have a outline around them
- Active link are red
- Kept the same for consistency reason
	- Should not change appearance of link too drastically
- Make sure to only use underline for links
- Make link reachable when hovered / focused

### Including icons on links

- links styles should be designed in sets
	- link set should be in the correct order
	- LoVe Fears HAte
	- link -> visited -> focus - > hover -> active

### Including icons on links

- Include icons to links to provide more indication on the purpose of the link
	- Insert custom background image on external link
- Similar to how custom bullets icons are added to list items
	- Except link icons is added to the right hand side
- Use “background-size” to re-size the image, not supported by some older browsers
- Use “padding-right” to make space for the image to avoid overlapping with text
- The external link icon should only be used for external links
	- For links within the site, proper HTML relative link should be applied
	- Use a attribute selector and only apply the background images to absolute links that starts with “a[hrew^=“http]”

### Styling links as buttons

- Many states applied to links can be applied to other elements
- Links are commonly styles to look like button
- The button should be created using flex box, contains a series of flex items
- Turn default “text-decoration” + “outline” off
- Set the “line-height” to the higher to make the button bigger

