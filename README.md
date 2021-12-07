# odin-library
add a delete book button
make the exit button work on the form
add a read unread toggle option on the book page



Thoughts --
There's two processes here:
adding the books to a internal library
adding them to the DOM
These work independently 
The internal library keeps track of which element is being added to the dom through the id, which is it's position in the array

can i cycle through the array and call the add to display function?


read button:
will change the read status to the opposite
will change the dom element's textinfo to the new book.info

delete button:
find the dom element in the array
delete it from the array
maybe it can select the child in the dom and delete that child? 
Maybe I just have to reload all of the dom elements 

todo:
make the read button work
form formatting
form exit button 
css


addBookToLibrary(newBook);
addToDisplay(newBook);
addBookToLibrary(newBook2);
addToDisplay(newBook2);
addBookToLibrary(newBook3);
addToDisplay(newBook3);

Lessons learned:
    creating forms 
    first object oriented program
    adding an index id to objects
    pushing those objects to the screen
        manipulating the DOM with the stored objec
    
I chose to rebuild the library after an element is deleted instead of changing the 2 button, library id, and div id of all the books after the element deleted. Might be slightly less efficient for huge libraries but it makes sense for this one. In the future I'd like to learn how to make sliding Id's? or just how to target things without calling ids at all, just use `this` or something. 
