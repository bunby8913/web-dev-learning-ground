# CSS floats

- Floating images inside a block of text

### The background of floats

- Web dev soon realized that float can be applied to all elements + be used to create multiple column layout
  - With new + better layout options, float should be considered a legacy technique

### Floating + Visualizing the float

- Float the box using the "float" properties
  - Box will be taken out of normal flow + stuck on the left-hand side of the parent container
- Can only apply margin to the "float element" but not the text

### Clearing floats ("clear")

- Clear any element next to the float element from moving next to it
  - left/right/both: clear items floated to the left / right / both

### Clearing boxes wrapped around a float

- Use the "display" property as the standard method

##### "display: flow-root"

- Create a block formatting context without unintended consequences