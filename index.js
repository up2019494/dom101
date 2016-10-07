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
