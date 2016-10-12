"use strict";

QUnit.module("DOM");


// turns an array-like into an array
function arr(a) {
  return Array.prototype.slice.call(a);
}


QUnit.test("addSometext",
    function(assert) {
        assert.ok(
            typeof addTo === "function",
            "Put all your code in a function called `addTo`."
        );

        assert.strictEqual(
            document.getElementById('addto').textContent,
            "Does it work yet?",
            "Before your function runs, this paragraph contains only the text `Does it work yet?`"
        );

        addTo();

        assert.strictEqual(
            document.getElementById('addto').textContent,
            "Does it work yet? Yes!",
            "After your function runs, this paragraph contains the text `Does it work yet? Yes!` - i.e. your code must add the text ` Yes` to the end of the existing text content."
        );
    }
);



QUnit.test("replaceSomeText",
    function(assert) {
        assert.ok(
            typeof replaceText === "function",
            "Put all your code in a function called `replaceText`."
        );

        assert.strictEqual(
            document.getElementById('replacethis').textContent,
            "𝔯𝔢𝔭𝔩𝔞𝔠𝔢 𝔱𝔥𝔦𝔰",
            "Before your function runs, this paragraph contains only the text `𝔯𝔢𝔭𝔩𝔞𝔠𝔢 𝔱𝔥𝔦𝔰`"
        );

        replaceText();

        assert.strictEqual(
            document.getElementById('replacethis').textContent,
            "The text has been replaced.",
            "After your function runs, the `replacehere` paragraph should contain the text `The text has been replaced.` - i.e. your code must insert that text instead of what is originally there."
        );

        assert.notStrictEqual(
            document.getElementById('replacethis').textContent,
            "𝔯𝔢𝔭𝔩𝔞𝔠𝔢 𝔱𝔥𝔦𝔰",
            "After your function, the original text must definitely not be there!"
        );
    }
);

QUnit.test("findElementById",
    function(assert) {
        assert.ok(
            typeof findElementById === "function",
            "Write a function `findElementById` which, given one parameter called ID, returns the element that has that id."
        );

        assert.strictEqual(
            findElementById('thisisaparagraph'),
            window.thisisaparagraph
        );

        assert.strictEqual(
            findElementById('selectus'),
            window.selectus
        );

        assert.strictEqual(
            findElementById('mustnotexist'),
            null
        );
    }
);


QUnit.test("findElementByQuery",
    function(assert) {
        assert.ok(
            typeof findElementByQuery === "function",
            "Write a function `findElementByQuery` which, given one parameter called query, returns all the elements that match the query selector in that parameter."
        );

        assert.deepEqual(
            arr(findElementByQuery('#thisisaparagraph')),
            [ window.thisisaparagraph ]
        );

        assert.deepEqual(
            arr(findElementByQuery('#selectus *')),
            arr(window.selectus.children)
        );

        assert.deepEqual(
            arr(findElementByQuery('.selectus')),
            arr(window.selectus.getElementsByTagName('P'))
        );

        assert.deepEqual(
            arr(findElementByQuery('mustnotexist')),
            []
        );
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

        // leave it reversed so it looks nice
        reverseList("#reverseme");


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



QUnit.test("removeAllMatchingNodes",
    function(assert) {

        var parent = window.noevens;

        assert.ok(
            typeof removeAll === "function",
            "Write a function `removeAll` that accepts one parameter, a selector.  All nodes that match that selector should be removed."
        );

        removeAll("#noevens p:nth-child(odd)");

        var paras = document.querySelectorAll("#noevens p");

        assert.strictEqual(
          paras.length,
          3,
          "There should be three paras after the test."
        );

        for (var i = 0; i < paras.length; i++) {
          assert.strictEqual(
            paras[i].textContent,
            "I love you",
            "The remaining text should only say I love you."
          );
      }

    }
);
