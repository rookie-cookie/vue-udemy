Vue JS 2.0 - Mastering Web Apps

https://www.udemy.com/course/vue-web-apps/


Vue Syntax and Essentials

Understanding VueJS, Syntax, and the Essentials

In this section, you got familiar with the syntax of Vue. You went over some key concepts to understand how Vue works. With this foundational knowledge, you can now move on to start exploring application development with Vue!

A Vue instance accepts an options object that allows us to manipulate html and add reactivity through various Vue features.

A Vue directive follows the v- pattern and allows us to add dynamic attributes to elements of the html.

The v-if directive accomplishes conditional rendering.

The v-for directive creates dynamic lists.

V-on allows interactivity by binding instance methods to the click handler of elements.

Components in Vue encapsulate HTML with Vue interactivity and create reusable code.

V-models map data to pieces of HTML to allow two-way data binding,

Computed properties use complex logic to return modified pieces of data.

Lifecycle hooks like created, mounted, and updated allow vue instances to run specific code throughout its lifespan.

Again, this fundamental understanding of Vue will provide the foundational layer for building very complex and meaningful apps.

------------------------------------------------------

Web Requests

Let’s take some time to go over web requests. On the web, companies and organizations store large databases of information. They have lists of users, collections of folders, and massive troves of files. Some companies allow developers to interact with that information with web requests and APIs.

These APIs allow for all different types of web requests, including GET, POST, HEAD, DELETE, and more. Most often, you’ll use the GET and POST web requests.

GET allows you to receive information from the API based on specific parameters.

POST sends data to the API for the company to work with.

And that covers a quick intro to Web Requests!


---------------------------------------------------------

Three items to the Vuex Recipe:

The store centralizes all state in one global store object. That way, all components have access to the same state. As a result, updating state happens in a very controlled and predictable manner.

Mutations represent the only way to update state. By having very specific function names, these mutations can be committed from actions anywhere in the application in order to modify the state.

Actions commit mutations. These actions signal a mutation to fire from anywhere in the application.

Overall, Vuex will help make your applications more sophisticated and easily maintained, especially as they become larger in scale.

----------------------------------------------------------

For future reference, remember that there’s three steps to the Vuex recipe:


The Store refers to the centralized object for the entire application that gives state to every component.

Mutations represent the only way to modify and update the store. Having these strict functions to modify state allows for predictable app behavior.

Actions resemble mutations, but differ in that they commit mutations. Actions are callable by other functions in order to signal a mutation to fire and update the store.

Just remember, store, mutations, and actions and you should be good to go!
