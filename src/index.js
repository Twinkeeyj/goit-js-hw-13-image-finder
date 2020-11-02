import './styles.css';

import template from "./template/templateList.hbs";
import servis from './components/apiService'

const button=document.querySelector(".button")
const input = document.querySelector('[type ="text"]')
const ul =document.querySelector(".gallery")
let array;
let page=1;

const inputHeder = function () {
    servis(input.value, page)
        .then((data ) => {
            data.hits.forEach((el) => {
            button.classList.remove('is-hidden') 
             ul.insertAdjacentHTML("beforeend", template(el))  
            });
      
        })
    
       
}
let opo = function () {
    servis(input.value, page += 1)
    .then((data ) => {
            data.hits.forEach((el) => {
            button.classList.remove('is-hidden') 
             ul.insertAdjacentHTML("beforeend", template(el))  
            });
       
        })
}
   button.addEventListener("click", opo)
   input.addEventListener('blur', inputHeder)






