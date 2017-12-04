var evPos = require('../../');
var testContainersParent = document.createElement('div');
var testContainers = [];

var headline = document.createElement('h1');
headline.innerText = 'Click the red areas and view the browser console output';

testContainersParent.style.display = 'block';
testContainersParent.style.padding = '10px';
testContainersParent.style.width = '600px';
testContainersParent.style.margin = 'auto';
testContainersParent.style.backgroundColor = 'lightgrey';

for (var i = 0, n = 3; i < n; i++) {

    testContainers[i] = document.createElement('div');
    testContainers[i].style.display = 'inline-block';
    testContainers[i].style.width = '200px';
    testContainers[i].style.height = '150px';
    testContainers[i].style.backgroundColor = 'red';
    testContainers[i].style.margin = i * 50 + 'px';
    testContainers[i].style.padding = i * 5 + 'px';

    testContainers[i].addEventListener('click', onTestContainerClicked);
    testContainersParent.appendChild(testContainers[i]);

}

document.body.appendChild(headline);
document.body.appendChild(testContainersParent);

function onTestContainerClicked(ev) {

    var pos = evPos(ev, ev.currentTarget);
    var posParent = evPos(ev, testContainersParent);
    var posBody = evPos(ev, document.body);
    console.log('\n');
    console.log('relative to ev.currentTarget', pos.x, pos.y);
    console.log('relative to parent:', posParent.x, posParent.y);
    console.log('relative to document.body:', posBody.x, posBody.y);

}
