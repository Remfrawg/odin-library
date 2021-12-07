//Book constructor 
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //this.haveRead = haveRead;
    this.id = library.length;
    //alert(haveRead);
    this.getId = () => {return id};
    this.info = () => {
        return `Title: ${title} <br> Author: ${author} <br> Pages read: ${pages} <br> Read before: ${this.read} <br>`
    }
};
// test books


//Array of books
let library = new Array();
//puts books in array
function addBookToLibrary(book){
    library.push(book);
}

function createDisplay(){
    removeAllBooks();
    library.forEach(book =>{
        addToDisplay(book);
    });
};

const libraryContainer = document.querySelector('.libraryContainer');
function addToDisplay(book){
        let newDiv = createCard(book);
        newDiv.setAttribute('id', `${book.id}`);
        libraryContainer.appendChild(newDiv);
        const deleteButton = document.createElement('button');
        deleteButton.innerText="Delete";
        deleteButton.classList.add("deleteButtons");
        deleteButton.setAttribute('id',`${book.id}`);
        const readButton = document.createElement('button');
        readButton.innerText = "Read";
        readButton.classList.add("readButtons");
        readButton.setAttribute('id',`${book.id}`);
        addListeners(deleteButton, readButton);
        newDiv.appendChild(readButton);
        newDiv.appendChild(deleteButton);
};

function addListeners(deleteButton, readButton){
    deleteButton.addEventListener('click', function (){
        library.splice(this.id, 1);
        const n = this.id;
        //const removal = document.getElementById(this.id);
        //libraryContainer.removeChild(removal);
        //alert(n);
        for (let i = this.id;i<library.length; i++){
            library[i].id -=1;
        }
        createDisplay();
    });

    readButton.addEventListener('click',function (){
       let newHaveRead;
       let oldRead = library[this.id].read;
       console.log("pre read :" + library[this.id].read);
       if ( oldRead == true ){
           newHaveRead = false;
       }else{
           newHaveRead = true;
       }
       console.log("new read :" +newHaveRead);
       library[this.id].read = newHaveRead;
       console.log("after read :" + library[this.id].read);
       createDisplay();
    });
};
////addToDisplay(newBook);
//addToDisplay(newBook2);
//creates the card to add to the display
function createCard(book){
    var newDiv = document.createElement('div');
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
    const haveRead = document.querySelector('.haveRead').checked;
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

//removeAllBooks();

function removeAllBooks(){
    while (libraryContainer.lastChild){
        console.log("removing book: " + libraryContainer.firstChild.title);
        libraryContainer.removeChild(libraryContainer.lastChild);
    };
    console.log("removed books, library length: " + library.length);
};
