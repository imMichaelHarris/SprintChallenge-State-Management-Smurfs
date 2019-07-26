1. What problem does the context API help solve?
   The context APi helps us solve the problem of "prop-drilling". This is where we pass props down through components which wont even need access to those props. It also lets us share information across sibling components instead of just parent to child,

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   An action is simply just an object that will provide information to our reducer on what our new state should be. A reducer in redux is a pure function that will take an action and create a new state based on that action. The reducer knows what to do with the state by using the action object which should have a "type" property which we can use in a switch case in the reducer and return our new state. The redux store is an application level state database, it is know as single source of truth because the only way the redux store is changed is by the reducer that is passed to it. Since the redux store can only be altered by the reducer and the redeucer will be a pure function that it's only purpose is to change the redux store, it makes state management very predictable.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    The main difference between application level state and component level state is that component state is tied to a specific component. Meaning that the component state should only effect that individual componenet like form component state. Now application level state is for multiple components. If there is information that needs to be shared across multiple components you would want application state like redux or context api.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!
