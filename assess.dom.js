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
