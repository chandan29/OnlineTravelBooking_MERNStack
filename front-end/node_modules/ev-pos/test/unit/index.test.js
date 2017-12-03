var test = require('tape');
var evPos = require('../../');
var elements = [], i;

var NR_OF_ELEMENTS = 3;
for (i = 0; i < NR_OF_ELEMENTS; i++) {
    elements[i] = document.createElement('div');
    elements[i].classList.add('test');
    document.body.appendChild(elements[i]);
}

test('Has a test suite', function(t) {
    t.plan(1);
    t.equal(1, 1, 'yes');
});

test('There is a browser environment', function(t) {
    t.equal(document.querySelectorAll('.test').length, NR_OF_ELEMENTS, 'elements are there' );
    t.end();
});

//@TODO
