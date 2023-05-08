# Cascade, specificity + inheritance

- Controls how CSS is applied to HTML + how conflict are solved between styles declarations

### Conflicting rules

- Result from create 2 rules that apply different value to the same property

##### Cascade

- Algorithm defines how browser combines property together from different sources
  - Determine precedence

###### Origin types

- 3 different types of origin of CSS, Browser, author, user
- User-agent stylesheets: Provide basic style to any document
  - Some browser simulate stylesheet in code, others majority have dedicated stylesheets
  - Some browser let user modify stylesheet (rare)
  - To save time, web dev often use CSS reset stylesheet to set common properties value before adding custom ones
  - Author stylesheet always take precedence over browser stylesheets
- Author stylesheets
  - Most common, styles written by web dev
  - Can import stylesheet or write "<style>" blocks in HTML
  - Defines the website style
- User stylesheets
  - Possible for user to add custom user stylesheet, via browser extensions
- Cascade layers
  - Based on the original type
    - Within each original type, rules are arranged in their declaration order

###### Cascading order

1. Relevance
   - Filter out all the rules that are not related to the current element
2. Origin + importance
   - Sorts the rule according to importance
   - Browser < user < author (normal)
   - Author < user < browser (important)
   - normal < "!important"
   - CSS keyframe animation are the most important normal type
   - Transition property value takes the highest priority (above "!important")
3. Specificity
   - If equality of origin, specificity rules kicks in
4. Order of appearance
   - If equality in specificity level, then the last rule gets applied

###### Author style: inline styles, layers + precedence

- Order of declaration is important to determine precedence
- (Normal) Prior layer < normal style in a layer < normal style declared outside any layer < inline layer < animation
- (!important) important style declared outside any layer < latter layer < important style in a layer < inline layer < transitions

###### Inline styles

- Normal inline style take precedence over all normal author style (apart from animation)
- Important inline style take precedence over all author style
	- Can be overwritten with
		1. Important user style
		2. Important user agent style
		3. Transition property

###### Importance + layers

- Important style outside the cascade layers have lower precedence
- Early important style has more precedence than later cascade layers

##### Which CSS entities participate in the cascade

- Only property-value pair follows the cascade rule
	- at-rule unaffected, contain descriptors
	- No specificity for the at-rule
- Some at-rules contains declarations that participate in cascade layer
- Import don’t participate in cascade, but the imported style do

##### CSS animations + cascade

- Define CSS animation using @keyframe
	- CSS will only take value from 1 @keyframe at any time
- Last defined key frame is used
	- keyframe with same name does not combine

##### Resetting styles

- Use the “all” CSS property to reset almost all the properties back to a known state

#### Specificity

- Algorithm to determine which CSS declaration is most relevant to an element
	- Calculate the weight of CSS selector, determine which rule to apply to the element
##### How is specificity calculated

- 3 column value of 3 categories / weight
	- ID, Class, type
- Count the number of selector components for each categories in the selector matches the element

###### Selector weight categories

- ID column: Only ID selectors
	- Add 1-0-0 to the weight value
- Class column: Include class selectors + pseudo-classes + attribute selectors
	- Add 0-1-0 to the weight value
- TYPE column: Include type selector + pseudo-element + all other double colon notation
	- Add 0-0-1 to the weight value
- No value: Universal selector + :where()(Pseudo-class, take a selector list as argument + select any element that can be selected by one of the selectors in list)does not contribute to weight
	- Combinator does not add value to weight
	- “:not()”, “:is()”, + “:has()” are exception with no weight

###### Three-column comparison

- Comparison are from left to right
- Greater ID values wins no matter the rest of the column
- If the ID filed has the same value, compare class
	- The selector with greater class values wins, no matter the type column
- If ID + class all have the sam value, the greater filed value wins
- If all 3 column have the same value, proximity rules determine the last declared style gets precedence

###### The “:is()”, “:not()” + “:has()” exceptions

- “is”: Matches any pseudo-class
- “has”: relational pseudo-class
- “not”: negation pseudo-class
- The parentheses parameter of the pseudo-classes are considered as part of the weight
- They accept complex selector list, can be used to increase selector’s specificity
	- Make sure to leave comment when you do

###### Inline styles

- Inline always overwrite any normal style in author style sheet
- Use important + targeted selector (attribute selector) to override inline styles
	- Leave comment about to the specific inline changes
###### The “!important” exception

- Not directly related to specificity
	- Reveres the cascade order of stylesheets
- Should not use “!important” to override specificity (bad practice)
- Good practice to comment the reason for using “!important”
	- Do not use “!important” in plugin / frameworks

###### The “:where() exception

- Replace the specificity with 0-0-0
- CSS selector can select specific element without increasing specificity
- When making CSS framework for others, good practice make CSS rules specificity as low as possible

##### Tips for handling specificity headaches

- Use cascade layers + low weight specificity to apply specific rules to individual elements

###### Making selectors specific with + without adding specificity

- Indicate the section of with id before the element require styling
	- Make the rule more specific
- Using different specificity modifiers can generate different specificity order

###### Reducing ID specificity

- Reducing using ID selector is a good way to make element more specific without over abundance specificity
	- Use “:where()” and ID as attribute are more preferred

###### Increasing specificity by duplicating selector

- Duplicating selector can increase specificity, override any selector with less duplicated selectors, without using “!important”
	- Make sure to comment in CSS
- Can also duplicate selectors in “:is()”, “:not()” + “:has()” to boost specificity

###### Precedence over 3rd party CSS

- Cascade layers can enable 1 set of style over another set
	- Imported layer has lower precedence than un-layered author styles 
- Import the style with no controls as cascade layer, then override using un-layered style sheet

###### Avoiding + overriding “!important”

- Best approach to not use “!important”
- Remove the “!important” flag and alter the specificity level for the appropriate functions
- If cannot remove the “!important” flag, creating a new cascade layer and override the original style sheet
- 2 methods to achieve that
	- Create separate , short style sheet only contains the change
		- Import the CSS using “layer()”, ensure the override style sheet is priority
	- Create a new cascade layer, and to override any important CSS rules, override them in the new cascade layer

###### Tree proximity ignorance

- Proximity of the same element has no effect on specificity
	- Last declared will always win

###### Directly targeted elements vs. inherited styles

- Directly target element will take precedence over inherited styles
	- Even if selector is an ID selector of the parent of an element, the most accurate selector will still win

#### Inheritance

- Some CSS property are inherited, some are not
	- i.e. font-family + colour are inherited, width are not 

### Understanding how the concepts work together

### Understanding inheritance

- Class CSS properties are inherited by all its children

##### Controlling inheritance

- 5 special universal property value for controlling inheritance (accepted by all)
	- Inherit: turn on inheritance, set the element to the same as parent element
	- Initial: set the value to apply the initial value of the property
		- For non-inherited properties, initial value is used on all elements
		- For inherited properties, initial value is only applied to the root
	- Revert: Revert cascade value to the style origin (its inherited value)
		- Behaves similar to unset
	- revert-layer: Revert to cascade value to the value from previous cascade layer
	- unset: Return to the natural cascade value, if inherited, it will return the revert value, if not, return to initial value

##### Resetting all property values

- the “all” keyword can be used to apply inheritance value to all properties
	- Include inheritance value
	- 

### Understanding the cascade

- 3 factors to consider
	1. Source order
	2. Specificity
	3. Importance

### The effect of CSS location

- Precedence of CSS depends on the order of style sheet + cascade layer specified in

##### Order of Cascade layers

- CSS declared outside any layers are combined together

