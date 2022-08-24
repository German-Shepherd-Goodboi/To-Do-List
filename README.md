How have I created this App?

Step 1 - create-react-app and clean up the unnecessary general code

---------------------------------------------------------------------

Step 2 - create a store folder and create store.js file inside of if

in this file i initialize my **tasks** state and state updating function **addTask** which updates tasks array using a spread operator with an old array + a new object with name key that's assigned task value and key key that's assigned unique 0-1 value

---------------------------------------------------------------------

Step 3 - I want to fill my array with tasks **Input.js** Component

I will use useRef hook to do it

I import and initialize useRef(), add ref prop to input I'm returning

Next, I initialize **addNewTask** function and use **addTask** state updating function there. Thus I need to import **addTask**

---------------------------------------------------------------------

Step 4 - Map items into tasks array

Now that everything's ready I can start mapping tasks into tasks array

I will be using tasks state so I import it

Into ul into tasks array i will map every task, I pass the object keys as values into wrapping div and li 

Use helper variable content to show user how many tasks there are to do

---------------------------------------------------------------------

Step 5 - Add onClick={addNewTask} prop to button

details: Add a simple validation if string is empty, don't add task

Clear the input field when state has been updated

---------------------------------------------------------------------

Step 6 - I want to show user completed tasks

I will need a new state **completedTasks** and new state updating function **addCompletedTask**, initialize them in store.js

import addCompletedTask 

create a new Component CompletedTasks where I import the state and map completedTasks into completedTasks array

add button with onClick={() => addCompletedTask(task)}

---------------------------------------------------------------------

Step 7 - I want user to be able to delete tasks

add **deleteTask** state updating function

import it, add button, add state updating function onClick={() => deleteTask(task.key)

---------------------------------------------------------------------
