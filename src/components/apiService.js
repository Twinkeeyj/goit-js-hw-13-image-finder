// import { forEach } from "core-js/fn/array";

export default function (value, page) {
    const TOKEN = '18953404-219a87b5236596fa40acd8a55'
   
 
       return   fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${TOKEN}`)
            .then((data) => data.json())
  
}


// import './styles.css';

// import api from "./components/apiService.js"
// import template from "./template/templateList.hbs"


// let btn = document.querySelector(".button")
// let input = document.querySelector('[type="text"]');
// let ul = document.querySelector(".gallery")
// let page = 1;


// const addCard = function () {
//     api(input.value,page)
//     .then((data) => {
//             data.hits.forEach(el => {
//             ul.insertAdjacentHTML("beforeend", template(el))
//             btn.classList.remove("is-hidden")
//             });
//             });

// }
// let a = 100;
// const loadMore = function () {
//             window.scrollTo({
//             top:document.documentElement.offsetHeight,
//             behavior: 'smooth'
//             }) 
//          api(input.value, page += 1)
//     .then((data) => {
//         data.hits.forEach(el => { 
//             document.documentElement > a + 100 
//             ul.insertAdjacentHTML("beforeend", template(el))
//         })

//     });

// }
// btn.addEventListener("click",loadMore)
// input.addEventListener("blur", addCard )
// window.addEventListener('scroll', () => {

//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//     if(clientHeight + scrollTop >= scrollHeight - 1) {
//         loadMore();
//     }
// });