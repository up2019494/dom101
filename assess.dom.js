"use strict";

QUnit.module("DOM");

QUnit.test("testMutateMainUsingDocument",
    function(assert) {

        assert.ok(
            typeof mutateMain === "function",
            "Create a function called `mutateMain` that changes the `main` element within the DOM and thus allows all of the assertions in this test to pass."
        );

        mutateMain();

        assert.strictEqual(
          window.main.firstElementChild.tagName,
          "P",
          "Use document.createElement to create a new paragraph element.  Append this paragraph to the `main` element."
        );


        assert.strictEqual(
          document.getElementById("example1"),
          window.main.firstElementChild,
          "The element you create should be given the id attribute of `example1`."
        );


        assert.strictEqual(
          document.getElementById("example1").textContent,
          "hello world",
          "Set the text of the `example1` paragraph element to be `hello world`."
        );
        window.console.log();
    }
);




QUnit.test("reverseList",
    function(assert) {

        assert.ok(
            typeof reverseList === "function",
            "Write a function `reverseList` that can reverse the content of a list.  The function should take one parameter which is a selector, used to choose which list is reversed."
        );

        assert.strictEqual(
          window.reverseme.firstElementChild.textContent,
          "1",
          "Before running, first element is 1."
        );

        reverseList("#reverseme");

        assert.strictEqual(
          window.reverseme.firstElementChild.textContent,
          "5",
          "After running, first element must be 5."
        );

        assert.strictEqual(
          window.reverseme.lastElementChild.textContent,
          "1",
          "After running, last element must be 1."
        );

        reverseList("#reverseme");

        assert.strictEqual(
          window.reverseme.firstElementChild.textContent,
          "1",
          "After running again, first element is 1."
        );

    }
);


QUnit.test("listMover",
    function(assert) {

        assert.ok(
            typeof mover === "function",
            "Write a function `mover` that accepts two parameters, the first is a selector for the element to move, the second is a selector for the elenebt that it should be appended to."
        );

        assert.ok(
          window.moveme.parentElement == window.listone,
          "Before, moveme has listone as a parent."
        );


        assert.strictEqual(
          window.listone.children.length,
          4,
          "Before running, list one has 4 elements."
        );

        assert.strictEqual(
          window.listtwo.children.length,
          3,
          "Before running, list one has 3 elements."
        );

        mover( "#moveme", "#listtwo");


        assert.strictEqual(
          window.listone.children.length,
          3,
          "After running, list one has 3 elements."
        );

        assert.strictEqual(
          window.listtwo.children.length,
          4,
          "Before running, list one has 4 elements."
        );

        assert.ok(
          window.moveme.parentElement == window.listtwo,
          "After, moveme has a new parent."
        );

    }
);



QUnit.test("duplication",
    function(assert) {

        var thingToBeDuped = window.dupeme;

        assert.ok(
            typeof dupe === "function",
            "Write a function `dupe` that accepts one parameter, a selector, The function should duplicate."
        );

        assert.strictEqual(
          thingToBeDuped.parentElement.children.length,
          2,
          "The parent of #dupeme should have just two children before the test run, a heading and #dupeme."
        );

        dupe("#dupeme");

        assert.strictEqual(
          thingToBeDuped.parentElement.children.length,
          3,
          "The parent of #dupeme should have three children after the test run, a heading and #dupeme AND the duplicate."
        );

        var paras = thingToBeDuped.parentElement.querySelectorAll("p");

        assert.strictEqual(
          paras.length,
          2,
          "There should be two paras after the test."
        );

        assert.strictEqual(
          paras[0].textContent,
          paras[1].textContent,
          "The two paragraphs should have the same text."
        );


    }
);
