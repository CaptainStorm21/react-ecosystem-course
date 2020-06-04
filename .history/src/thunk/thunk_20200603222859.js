 import { loadTodosInProgress, loadTodosSuccess, loadTodosFailiure} from '../'
export const displayAlert = () => () => {
    alert("hello");
}

export const loadTodos = () => async (dispatch, getState) => {};

/*
Now it's time to create our first thunk. Inside our to-do folder, 
let's create a new file called thunks.js and this is where we'll put the thunks 
for our project. So what does a thunk actually look like? 
Well, in Redux, a thunk is simply a function that returns another function, 
which contains the actual logic that we want to perform when it's triggered. 
So for our first thunk, let's do something fairly simple. We're going to define 
a thunk called display alert. So we'll say export const displayAlert, 
and what it's going to do is simply return another function that displays 
an alert on the user's screen. 
So we'll say alert, hello. So this is about as simple as thunks can get. 
We'll see later on how we can add a lot more functionality to our thunks, 
but first let's see how to dispatch a thunk. You might be happy to find out 
that the way we dispatch a thunk is nearly identical to the way 
that we dispatch actions. We dispatch them inside the map dispatch to props 
for a given component. So just as a demonstration, we're going to open up our 
to-do list component and we're going to make it dispatch this display alert thunk 
that we just defined. So up at the top, let's import it. We'll say import displayAlert 
from thunks, and then inside mapDispatchToProps, we're going to define a prop 
that gets passed to our component and we're just going to call this one 
onDisplayAlertClicked, and this is going to be a function that doesn't take 
any arguments, and when it gets called, it will simply dispatch the thunk 
we just created. So dispatch, displayAlert. And then up at the top of our component
 in the props, let's get access to this onDisplayAlertClicked prop, 
 and just for demonstration purposes, we're going to replace the onCompletePressed 
 method of the to-do list items with this onDisplayAlertClicked. 
 So we'll go up here and replace onCompletePressed here. 
 We'll say onDisplayAlertClicked instead. 
 And now if we run our app, npm run dev, and open our app up in a browser, 
 if we click on the mark as completed button for any of these to-dos, 
 we see that it displays an alert using our thunk, which is pretty cool. 
 So the thunk that we created here didn't take any arguments, but it definitely 
 can if we want it to. If we go back and modify our thunk to take a text property, 
 for example, we'll say text, and then in this alert, we'll use back ticks and say 
 you clicked on and print the text, and then what we can do is go back to our 
 to-do list component and add this argument into our mapDispatchToProps 
 function like this. We'll say text and have displayAlert get called with text, 
 and then what we can do is go back to our application and click on mark as 
 completed and we'll see that the text of each of our to-dos is now getting 
 passed to the thunk. And those are the basics of how thunks work in a React application. 
 Obviously there are much more complex things that we can do with thunks 
 and we'll take a look at that shortly. For now, let's change back this component to the way it was before. 
 So we'll delete this prop, delete this prop, and make it pass onCompletePressed again.
*/