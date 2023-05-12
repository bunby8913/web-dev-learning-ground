# Cascade layers

- Help to manage code base from different parties, plugins + development teams
- Only 1 value can be applied to CSS element property
  - Developer tools shows the selector being used + value being applied to the property
  - Style panel also shows the crossed-out (not applied) value for each property (due to cascade)
  - Any declaration might have several sources not used
- Allow web developer to prioritize section of CSS without worry about specificity

### Review of the cascade concept
- Relevance, importance, origin, layers specificity + order of appearance

##### Origin + cascade

- 3 cascade origin types, each type could be normal / important
	- 8 levels of precedence + 6 origin types + animation + transformation

##### Origin + specificity

- The value from the highest precedence gets applied
	- Specificity determine within a origin which selector to take priority
		- Never between selector from different origins
- Order of appearance only matters when declaration in the origin of precedence have the sam specificity

### Overview of cascade layers

##### Cascade layers precedence order

- sub-origin level of priority in any levels of origin
	- Multiple cascade layers in any 6 origin types
- Order of layer creation matters
	- Set precedence between layers in an origin
- Sorted in the order of creation, Later created layer takes precedence
- In important style, layer precedence is reversed
	- The important un-layered styles have the lowest precedence among important styles

##### Issues cascade layers can solve

- CSS can come from many different sources, but are all combined to a single origin, the author style sheet
	- Can cause problem especially from the lack for communication
		- Different team have different method
- The quick easy solution (i.e. “!important” also can cause bigger problem down the line)
- Cascade layer balance code from multiple origins, a layer per sources
	- Rules within a layers do not compete with rules in other layers
- Layers precedence > selector specificity
	- Won’t be any specificity concern between layers, only the most precedence layer are considered

##### Issues nested cascade layers can solve

- Cascade layers can contain multiple nested layers
	- Use specific cascade layer to avoid specificity conflict with other styles in author style sheet
	- The cascade layer can then contain multiple nested layers for different themes, differentiate by viewport size / orientation
	- Create theme that does not conflict base on specificity
- Useful for creating libraries, framework, widgets + themes
- Solves the issue with conflicting layer names
- Layer can be re-ordered explicitly, without altering selector + specificity within layers + their order of rules

### Creating cascade layers

- Few method to create cascade layers

  - "@layer" statement at-rule: Declare with the name of 1 or more layers

    - Creates the layer without assigning any styles

    - ```css
      @layer layer1, layer2, layer3
      ```

    - Creates new layer in the name has not been used

      - If the name already exist, the pre-existed layer will have higher precedence

    - The first line of CSS should be layer declaration

  - "@layer" block at-rule: Add all styles to a link, add the block to a named / un-named layer

    - If layer name already exist, the rule will be added to the pre-existing layers, if not, a new layer will be created

    - ```css
      @layer layer1{
          main{
              /*rules...*/
          }
      }
      
      @layer {
          body {
              /*rules..., layer does not need a name*/
          }
      }
      ```

    - Not possible to change the layer order once created, the un-name layer is always at last

    - New un-name layer will be an additional unnamed layers, not a previously existing unnamed layer

    - Use "@media + feature" to decide which layer to be declared first, ultimately decide which layer to load

  - "@import" rule + "layer" keyword / "layer()" function, assign imported file to a layer

    - Import style rules into CSS file / "<style>" block
    - Import statement must be at the top of the document, but can be after the layer declaration
      - Can import to named, nested named + un-named layers
        - Use the "layer" keyword to determine which layer to set the imported stylesheet to
    - Each layer support multiple files
    - Can create + import layer base on media + feature queries

- If name of the layer not specified, styles will be categorized into unlayered styles

  - Cannot be referenced in any way

### Overview of nested cascade layers

- Layer within named + un-named layers
  - Layers imported into other layers

##### Advantages of nesting layers

- Avoid conflict between external + internal style sheets

##### Creating nested cascade layers

- Can be created with the same method as regular cascade layers
  - If imported CSS has layers, it automatically becomes nested layers

### Determining the precedence based on the order of layers

- Order of layer = layer precedence
- Cascade order of layer = origin layer type + importance

##### Precedence order of regular cascade layers

- In normal styles, layer precedence is in increment order (the later ones are more important), un-named layer take highest precedence
- In important styles, layer precedence is in decrement order (the earlier ones are more important), un-named layer takes lowest precedence
- In-line style takes more precedence than cascade layers (normal + important)

##### Precedence order of nested cascade layers

- Similar to precedence order of regular cascade layers
  - Non-nested styles have precedence over nested styles
- In important styles, layer styles take precedence over un-layered styles