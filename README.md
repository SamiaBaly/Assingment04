1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ANSWER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                   ## getElementById means selects Only single element by idname.
                   ## getElementsByClassName means selects all elements by classname.
                   ## querySelector means selects first element matching id and classname.
                   ## querySelectorAll means selects all elements matching id and classname.


2. How do you create and insert a new element into the DOM?

                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ANSWER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                   ## document.createElement("div");



3. What is Event Bubbling? And how does it work?


                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ANSWER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                   ## Event Bubbling is how events travel in the DOM.
                   ## It works 3 steps. capture phase ( top to down), target phase(click element), Bubbling phase(down to top);


4. What is Event Delegation in JavaScript? Why is it useful?


                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ANSWER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                   ## Event Delegation means instead of adding event listener to many child elements, add one event listener to their parent,  
                   ## It is useful to better performance, dynamic elements and clener code.


5. What is the difference between preventDefault() and stopPropagation() methods?


                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ANSWER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                   ## preventDefault() means stops the browsers automatic action for an element.  
                   ## stopPropagation() means stop the event moving up the DOM tree.
                  
