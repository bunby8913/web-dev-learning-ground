# Overflowing content

- When there are too much content to fix in an element box

### What is overflow?

- Too much content to fit into a box

### CSS tries to avoid “data loss”

- By default, content will overflow from the box, covers the content below
	- Vertically + horizontally
- Data loss might not be noticeable, it’s better to overflow data then hide important content away
- CSS trust the developer has managed content overflow when using the “width” + “height” property
	- Usually bad practice to contain the block dimension of text
		- Text might get larger, more text might be expected depends on language

### The overflow property (“overflow”)

- Set how the browser should handle the overflow contents
	- Default value is “visible”, can see all the contents when overflow
- “hidden”: Hide away all the overflow content, only shows the content in the box, and make the rest of them invisible
- “scroll”: add scroll when content overflows, the scroll bars will always remain even there are no content overflow
	- Keep layout consistent
	- Can use the “x” / “y” to define which direction the scroll bars exist
	- Without specify the x / y axis, the same property is applied to both axis
- “auto”: the scroll bars only appears if there is an overflow, otherwise, remain hidden

### Overflow establishes a block formatting context (“scroll” + “auto”)

- Block formatting context: Element box with “overflow” properties are a self-contained layout
	- Content from outside the box cannot overlap the content inside
- Nothing from inside the box can overflow to the outside of the box

### Unwanted overflow in web design

- Always design with overflow in mind
	- Test small-> large amount of content
	- Test small-> large font size
	- Should limit the amount of usage of scrollbars to solve overflow problem