# JS Events

- The signal the system produces + mechanism for actions to be activated automatically

  - i.e. User interaction (keyboard, mouse), browser window adjustment, page loading, form submission, video playbacks, error occur, etc.

- An event handler is responsible for listening to the event + react (usually custom functions)

- Event listener (listen for the event) + event handler (perform actions base on the event)

- To listen for an event from an object use the "addEventListener()" method

  - ```javascript
    const btn = document.querySelector('button');
    function someFunc()
    {}
    btn.addEventListener("click", someFunc())
    ```

  - The 1st parameter string defines what kind of event to listen for

    - i.e. (click, keydown, etc.)
    - Other available event include "focus + blur" (When a button is focused / unfocused), dblclick (double clicked), mouseover + mouseout

- Event listener can be removed at run-time using the "removeEventListener()" function

  - Alternatively, it's possible to pass an abort signal to the event listener + later pass an abort function to the abort controller

- Each event can have multiple handler

  - Having more than 1 "addEventListener()"

- There are 2 other alternative ways to register event handlers

  - Event handler properties

    - Some HTML object has "on" properties (i.e. "onClick")

    - JS can listen to event handler properties

      - Uses assignment operator

      - ```javascript
        const btn = document.querySelector("button");
        function func1()
        {
            
        }
        nbtn.onClick = func1;
        ```

      - Since the event handler is assigned to object properties, object can only have 1 handler per event

  - Inline event handler (should be avoided)

    - Bad practice, unmanageable + inefficient
    - Many server will disallow inline JS for security purpose

##### Event objects

- Parameter can take special keyword "event", "evt" / "e" (event objects)
  - They represent the object that emit the event, used to provide extra features + information
  - In theory the object can be any name, but use "event", "evt", "e" for consistency
- Most event object has a set of properties + method to use
  - i.e. The "keydown" event has a property "key" to store what key was pressed

##### Preventing default behavior

- The "e.preventDefault()" method could be used to prevent event from its default behaviour
  - Prevent default is part of the event object
  - The normal event will be stopped, and code will continue to execute

##### Event bubbling

- JS event bubbles up from the innermost to the outermost

  - i.e. If a button is contained in a div which is part of the body, then the button click event will be triggered first, then the DIV event, finally the body event

- To stop JS event bubbling up to parent, use the "stopPropagation()" function, part of the event object

  - Prevent event from bubbling to parent elements + prevent the parent's event handling being called

- Event capture: The opposite of event bubbling, the outermost event is called first, the innermost event last

  - ```javascript
    const container = document.querySelecto("#container");
    const butn = document.querySelecto("button"); // Assume container is the parent of the button
    function func1(){
        
    }
    function func2(){
        
    }
    document.body.addEventListener("click", func1, {capture:true});
    document.body.addEventListener("click", func2, {capture:true});
    ```

  - Back in the day, different browser supported different order of events, later standardized to include both

##### Event delegation

- Event bubbling allow multiple children to a run a same set of base code, from the parent event listener
  - Use "event.target" to get the element that started the event (the innermost element)
    - To get the event handler element, use "event.currentTarget"
- Event could differ in different development environment