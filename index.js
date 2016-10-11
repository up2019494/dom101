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
