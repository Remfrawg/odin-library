# odin-library
This project ties in object manipulation with DOM manipulation, to create a CRUD (kind of) application. The books in the DOM/viewer can be created and deleted and the internal array reflects those changes. 

Overall this project was challenging as it was the first object oriented project I've done, and the main obstacles were understanding what i could call `this.` on and how to keep the DOM and array in sync.

I felt like I was able to identify what wasn't working in the code faster than on previous projects and have gained a deeper understanding for how the different moving parts interact. Oh and I made a form for the first time, that was a trip. Surprisingly few hiccups with that. 

I chose to use createDisplay() rebuild the library after an element is deleted instead of changing the 2 button ids, library id, and div id of all the books after the element deleted from the array. Might be slightly less efficient for huge libraries but it makes sense for this one. In the future I'd like to learn how to make sliding Id's? or just how to target things without calling ids at all, just use `this` or something. 


