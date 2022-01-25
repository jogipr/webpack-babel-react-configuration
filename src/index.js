import { names} from './constant';
import "./style.css";

function changeStyle() {
    const conatiner = document.querySelector("#container");
    conatiner.innerHTML = "How are you!!!";
    const ul = document.createElement("ul");

    names.forEach(name => {
        const li = document.createElement("li");
        li.innerHTML = name;
        ul.appendChild(li);
    })

    conatiner.appendChild(ul);
}

const submitButton= document.querySelector("#submit-button");
submitButton.addEventListener("click",changeStyle);
