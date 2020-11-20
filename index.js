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
