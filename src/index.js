import './styles.css';

import template from "./template/templateList.hbs";
import servis from './components/apiService'
import { alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import * as basicLinghtbox from 'basiclightbox';
import "../node_modules/basiclightbox/dist/basicLightbox.min.css";

const button = document.querySelector(".button");
let input = document.querySelector('input');
const ul = document.querySelector(".gallery");

let page=1;

const inputHeder = function () {      
    servis(input.value, page)
        .then((data) => {
           
            if (data.hits.length>=1) {
                data.hits.forEach((el) => {
                    button.classList.remove('is-hidden')
                    ul.insertAdjacentHTML("beforeend", template(el))
                });
            } else {
                alert('     Enter another name!')
                ul.innerHTML = ""
                button.classList.add('is-hidden')
            };
       
        })    
                ul.innerHTML = ""
                button.classList.add('is-hidden')
}
const loadMore = function () {
    servis(input.value, page += 1)
        .then((data) => {
            data.hits.forEach(el => {
                document.documentElement > 100
                ul.insertAdjacentHTML("beforeend", template(el))
            })

        });
};

const down = function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight - 1) {
        loadMore();            
        const fn = function () {
            window.scrollBy(0, 600);
            behavior: "smooth"
        };
        setTimeout(fn, 150);           
    };
};

const modalWindow = function (e) {
    if (e.target.nodeName === "IMG") {
        const creation = basicLinghtbox.create(` 
        <img src=${e.target.dataset["name"]}>`)
        creation.show()
    } else { " " };
};
ul.addEventListener("click", modalWindow); 
button.addEventListener("click", loadMore);
input.addEventListener('change', inputHeder);
   window.addEventListener('scroll',down);






