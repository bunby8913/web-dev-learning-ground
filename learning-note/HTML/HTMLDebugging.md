# Debugging HTML

## HTML and debugging

- Interpreted, not compiled

### Permissive code

- Syntax error: Spelling errors, easy to fix
- Logic errors: Syntax are correct, but unintended program result, harder to fix
- HTML does not suffer from syntax errors, page will still load

## HTML validation

- Markup validation service
	- https://validator.w3.org/
	- Take HTML as input, and tells you what’s wrong with it
### Interpreting the error messages

- End tag implied, but there were open elements
	- Open elements needs to be closed with tag
- Unclosed element
- End tag violates nesting rules: incorrect nesting elements, indicated by the line
- End of file reached when inside an attribute value
	- Attribute value not properly formed, possibly near the end of file
- End of files seen and there were open elements
	- Some elements were not properly closed
