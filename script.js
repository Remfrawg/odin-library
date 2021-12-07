//js for the library odin project 
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = library.length;
    this.getId = () => {return id};
    this.info = () => {
        return `Title: ${title} <br> Author: ${author} <br> Pages read: ${pages} <br> Read before: ${this.read} <br>`
    }
};

let library = new Array();

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
        deleteButton.setAttribute('id',`${book.id}`);
        deleteButton.classList.add("cardButtons");
        const readButton = document.createElement('button');
        readButton.innerText = "Read";
        readButton.classList.add("cardButtons");
        readButton.setAttribute('id',`${book.id}`);
        addListeners(deleteButton, readButton);
        newDiv.appendChild(readButton);
        newDiv.appendChild(deleteButton);
};

function createCard(book){
    var newDiv = document.createElement('div');
    newDiv.classList.add('libraryCards');
    newDiv.innerHTML = `${book.info()}`;
    if (book.read == true){
        newDiv.style.backgroundColor = "#CCCCCC";
        newDiv.style.color = "#333333";
    }
    return newDiv;
}

function addListeners(deleteButton, readButton){
    deleteButton.addEventListener('click', function (){
        library.splice(this.id, 1);
        const n = this.id;
        for (let i = this.id;i<library.length; i++){
            library[i].id -=1;
        }
        createDisplay();
    });

    readButton.addEventListener('click',function (){
       let newHaveRead;
       let oldRead = library[this.id].read;
       if ( oldRead == true ){
           newHaveRead = false;
       }else{
            newHaveRead = true;
            let changeCard = document.getElementById(`${this.id}`);
            changeCard.style.backgroundColor = "#CCCCCC";
            changeCard.style.color = "#333333";
       }
       library[this.id].read = newHaveRead;
       
       createDisplay();
    });
};

const addBookButton = document.querySelector('.addNew');
addBookButton.addEventListener('click', ()=>{
    document.querySelector(".bgModal").style.display = "flex";
});

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
    resetForm();
});

function resetForm(){
    document.querySelector('.title').value = "";
    document.querySelector('.author').value = "";
    document.querySelector('.pagesRead').value = null;
    document.querySelector('.haveRead').checked = false;
};

function closeForm(){
    document.querySelector(".bgModal").style.display = "none";
    resetForm();
};

function removeAllBooks(){
    while (libraryContainer.lastChild){
        libraryContainer.removeChild(libraryContainer.lastChild);
    };
};
