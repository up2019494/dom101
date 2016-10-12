/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "1";
    // e.g. return "UP654321";
}

function fn() {
    return "1";
}

function sn() {
    return "1";
}

function addTextTo(el, str) {
  el.textContent += str;
}

function replaceText(a,b) {
  a.textContent = b;
}


function moreBears() {
  document.querySelector("#animals").src = "http://placebear.com/400/200";
  document.querySelector("#animals").alt = "A bear.";
  document.querySelector("#animals").title = "A BEAR!";
}

function findElementById(id) {
  return document.querySelector("#"+id);
}

function findElementByQuery(query) {
  return document.querySelectorAll(query);
}

function setId(x, s) {
  x.id=s;
  return x;
}

function filler(where, what) {
  for (var i = 0; i < what.length; i++) {
    var li = document.createElement("li");
    li.textContent = what[i];
    where.appendChild(li);
  }
}

function setClass(elem, c) {
  elem.classList = c;
  return elem;
}

function addAClass(elem, c) {
  elem.classList.add(c);
  return elem;
}

function removeAClass(elem, c) {
  elem.classList.remove(c);
  return elem;
}


function mutateMain() {
  var main = document.querySelector("main");
  var p = document.createElement("p");
  p.id = "example1";
  p.innerText = "hello world";
  main.appendChild(p);
}

function reverseList(selector) {
  var list = document.querySelector(selector);
  var items = [];
  var i;
  for (i = 0; i < list.children.length; i++) {
    items.unshift(list.children[i]);
  }
  for (i = 0; i < list.children.length; i++) {
    list.appendChild(items[i]);
  }
  return list;
}


function mover(whatToMove, whereToMove) {
  var moveThisThing = document.querySelector(whatToMove);
  var moveToHere = document.querySelector(whereToMove);
  moveToHere.appendChild(moveThisThing);
}


function dupe(what) {
  var dupeThis = document.querySelector(what);
  var duped = dupeThis.cloneNode(true);
  if (duped.id) {
    duped.id += "_";
  }
  dupeThis.parentElement.insertBefore(duped, dupeThis);
}

function removeAll(selector) {
  var removables = document.querySelectorAll(selector);
  for (var i = 0; i < removables.length; i++) {
    removables[i].parentElement.removeChild(removables[i]);
  }
}

function findElementById(id) { return document.getElementById(id); }
function findElementByQuery(id) { return document.querySelectorAll(id); }

function newElement(name) { return document.createElement(name); }
function getUserData() {
  return { name: window.username.value, speed: window.speed.valueAsNumber, student: window.student.checked };
}
