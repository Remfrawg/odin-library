//Book constructor 
function Book(title, author, pages, readOnOff){
    this.title = title;
    this.author = author;
    this.pages = pages;
    let haveRead = hasRead(readOnOff);
    this.haveRead = haveRead;
    this.id = library.length;
    //alert(haveRead);
    this.info = () => {
        return `Title: ${title} <br> Author: ${author} <br> Pages read: ${pages} <br> Have read: ${haveRead}`
    }
};
// test books


//Array of books
let library = new Array();
//puts books in array
function addBookToLibrary(book){
    library.push(book);
}

const libraryContainer = document.querySelector('.libraryContainer');
function addToDisplay(book){
        let newDiv = createCard(book);
        libraryContainer.appendChild(newDiv);

};
////addToDisplay(newBook);
//addToDisplay(newBook2);
//creates the card to add to the display
function createCard(book){
    let newDiv = document.createElement('div');
    newDiv.classList.add('libraryCards');
    newDiv.innerHTML = `${book.info()}`;
    return newDiv;

}
//add new button bringing form to the front
const addBookButton = document.querySelector('.addNew');
addBookButton.addEventListener('click', ()=>{
    document.querySelector(".bgModal").style.display = "flex";
});
//when someone submits a new book to be added to the display
const submit = document.querySelector(".submit");
submit.addEventListener('click', ()=>{
    document.querySelector(".bgModal").style.display = "none";
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const pages = document.querySelector('.pagesRead').value;
    const haveRead = document.querySelector('.haveRead').value;
    let addedBook = new Book(title,author,pages,haveRead);
    addBookToLibrary(addedBook);
    addToDisplay(addedBook);
    
});

function hasRead(onOff){
if (onOff == "on"){
    return true;
}
return false;
};
newBook = new Book('Art of Idiocracy', 'Remy Nguyen', 199, "on");
newBook2 = new Book('The Stoked Sibling', 'Genevieve Nguyen', 399, "off");
newBook3 = new Book('test', 'dsfdsfds', 34499, "on");
addBookToLibrary(newBook);
addBookToLibrary(newBook2);
addBookToLibrary(newBook3);
addToDisplay(newBook);
addToDisplay(newBook2);
addToDisplay(newBook3);
//removeAllBooks();
function removeAllBooks(){
    for (let i =0; i<library.length; i++){
        libraryContainer.removeChild(libraryContainer.firstChild);
    };
};
console.log("library length: " + library.length);