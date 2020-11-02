// 1

const listElements = document.getElementsByClassName('list');

console.log(listElements);

// 2

function searchElements(searchTag) {
    const elements = document.querySelectorAll(searchTag);
    return elements;
}

const spans = searchElements('span');
console.log(spans);

// 3

const listElement = document.getElementById('list');

console.log(listElement);

// 4

function showElements(elements) {
    console.log(elements);
}

showElements(
    searchElements('li')
);
showElements(
    searchElements('ul')
);
showElements(
    searchElements('span')
);
showElements(
    searchElements('div.list span')
);
showElements(
    searchElements('div#spans span')
);
