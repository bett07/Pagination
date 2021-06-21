
const list = document.querySelector('.contact-list');
const listItem = list.children;
const maxPerPage = 10;
var page =1;

const displayContacts = (items, page) => {
    for(let i =0; i < items.length; i++){
        if(i<(page)*10 || i>(page)*10+9){
            items[i].style.display = "none";
        }
        else{
            items[i].style.display = "block";
        }
    }
}

displayContacts(listItem,0);

const addPageNumbers = (items) => {
    const totalPages = Math.ceil(items.length/maxPerPage);
    console.log(totalPages);
    const pageList = document.querySelector('div.pagination');

    for(let i=1; i<=totalPages; i++){
        var addbutton = document.createElement('li');
        addbutton.innerHTML = '<a class ="active" >' + i +'</a>';
        pageList.appendChild(addbutton);
    }
     var itembuttons = document.querySelectorAll('.active');

      for(let i=0; i< itembuttons.length; i++){
          itembuttons[i].classList.remove('active');
      }

      for(let i =0; i< itembuttons.length; i++){
          for(let j =0; j< itembuttons.length; j++){
              itembuttons[j].classList.remove('active');
          }
          itembuttons[i].addEventListener('click', () => {
              displayContacts(listItem,i);
              itembuttons[i].classList.add('ative');
              itembuttons[i].classList.remove('active');
          })
      }
}

addPageNumbers(listItem);
