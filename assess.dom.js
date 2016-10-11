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
          main.firstElementChild.tagName,
          "P",
          "Use document.createElement to create a new paragraph element.  Append this paragraph to the `main` element."
        );

        assert.strictEqual(
          document.getElementById("example1"),
          main.firstElementChild,
          "The element you create should be given the id attribute of `example1`."
        );


        assert.strictEqual(
          document.getElementById("example1").textContent,
          "hello world",
          "Set the text of the `example1` paragraph element to be `hello world`."
        );
        console.log();
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
