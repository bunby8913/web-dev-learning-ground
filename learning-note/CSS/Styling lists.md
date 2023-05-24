# Styling lists

### Handling list spacing

- List should keep the same vertical spacing as surrounding + horizontal spacing as each other
- Starts by setting a site wide font using the “html” tag
- Then, set relative font size for heading
	- Ensure paragraph + list all have the same font size + bottom + top spacing
- Set the same line height for paragraph + list items
	- Keep the vertical spacing consistent

### list-specific styles

##### Bullet styles (“list-style-type”)

- “list-style-type” changed the type style of the bullet points
	- Many available options, check the reference page for that

##### Bullet position (list-style-position”)

- Set if the bullets appear inside the element / outside before the start of each item
	- List item align vs. bullet points align
	- if “list-style-position” is set to inside, the bullet point align at the start

##### Using a custom bullet image (“list-style-image”)

- Allow to use custom image for the bullets
	- Limited in controlling position, size, etc.
- Better of to use the background properties

##### List-style shorthand

- All 3 list-style properties can be combined in to a shorthand property “list-style”
	- Values can be in any order
		- If both type + image are specified, use type as fallback when the image won’t load

### Controlling list counting

##### Start (“start”)

- “start”: HTML property, determine the starting index for the counted list

##### Reversed (“reversed”)

- “reversed”: List counting down instead of up

##### Value (“value”)

- “value”: set the custom value for the list items