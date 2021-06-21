// //This is reference line.
// //another change
// const lists = Array.from( document.querySelectorAll(`li`));


// const profile_list = document.getElementById('contact-list');
// const pagination =  document.getElementById('page-nav');

//  let current_page =1;
//  let profiles =10;

//  function DisplayProfile(items, wrapper, profile_per_page, page){
//     wrapper.innerHTML = "";
//     page--;

//     let start = profile_per_page*page;
//     let end = start + profile_per_page;
//     let profileItems =items.slice(start, end);
   
//     for(let i = start; i< profileItems.length; i++){
//         let profile = profileItems[i];
//         let profile_element = document.createElement(`div`);
//         profile_element.classList.add(`profile`);
//         const item = `
//                     <li>
//                     <img src="${profileItems.img_url} >
//                     <h3>${profileItems.title}</h3>
                    
//                     <span>${profileItems.email}</span>
//                     </li>`;
//         profile_element.innerHTML = profile;
       
//         wrapper.appendChild(profile_element);
        

//     }
//  }

//     function setUpPages(items, wrapper, pages){
//         wrapper.innerHTML = "";
//         let countPage = Math.ceil(items.length/pages);
//         for(let i =1; i < countPage +1; i++){
//             let btn = PaginationFunc(i);
//             wrapper.appendChild(btn);
//         }
//     }

//     function PaginationFunc(page){
//         let button = document.createElement('button');
//         button.innerHTML = page;

//         if (current_page == page) button.classList.add('active');
//         return button;
//     }

//  DisplayProfile(lists, profile_list, profiles,current_page);
//  setUpPages(lists, pagination, profiles);

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

    for(let i=1; i<totalPages; i++){
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
