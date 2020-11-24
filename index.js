/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function replaceText(elem, str){
    elem.textContent = str;
}

function addTextTo(elem, str){
    elem.append(str);
}

function moreBears(){
    const bear = document.getElementById("animals");
    bear.src = "http://placebear.com/400/200";
    bear.title = "A BEAR!";
    bear.alt = "A bear.";
}

function setId(elem, str){
    elem.id = str;
    return elem;
}

function setClass(elem, str){
    elem.className = str;
    return elem;
}

function addAClass(elem, str){
    elem.className += ` ${str}`;
    return elem;
}

function removeAClass(elem, str){
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {
    const elem = document.createElement(name);
    return elem;
}

function findElementById(id) {
    const elem = document.getElementById(id);
    return elem;
/* 
   This is uglier, but also works..

    const elem = document.querySelector(`#${id}`);
    return elem;

*/
}

function findElementsByQuery(query){
    const elems = document.querySelectorAll(query);
    return elems;
}

function reverseList(query){
    const input_query = document.querySelector(query);
    const reversed = Array.from(input_query.querySelectorAll('li')).reverse();
    reversed.forEach(element => input_query.appendChild(element));
    return input_query;
}

function mover(moveThis, appendToThis){
    document.querySelector(appendToThis).appendChild(document.querySelector(moveThis));

}

function filler(list, candidates){
    let li;
    for(let i = 0; i < candidates.length; i++){
        li = document.createElement("li");
        li.textContent = candidates[i];
        list.append(li);
    }
}

function dupe(selector){
    const to_dupe = document.querySelector(selector);
    const parent = to_dupe.parentElement;
    const duped = to_dupe.cloneNode(true);
    duped.id = `${to_dupe.id}-copy`;
    parent.append(duped);
}

function removeAll(selector){
    const to_remove = document.querySelectorAll(selector);
    to_remove.forEach(element => element.remove());
}

function getUserData(){
    const username = document.getElementById("username").value;
    const spd = parseInt(document.getElementById("speed").value);
    const is_student = document.getElementById("student").checked;
    const user = {
        name: username,
        speed: spd,
        student: is_student
    };
    return user;
}