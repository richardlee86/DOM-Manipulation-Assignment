//Selectors for DOM elements
const header = document.getElementById('main-heading'); 
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const button = document.getElementById('btn');
const para4 = document.getElementById('para4');
const redCard = document.getElementById('red');
const blueCard = document.getElementById('blue');
const yellowCard = document.getElementById('yellow');
const greenCard = document.getElementById('green');
const blackCard = document.getElementById('black');

//2. Change header text
header.textContent = 'New Dom Layout';

//3. Access p tags and change text content
para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

//4. Add a click event to "Click Me!" button
button.addEventListener('click', function () {
    para4.textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';    
});

//5. Change the colors of the divs with the addition to classLists and removal of certain classes

redCard.classList.add("bg-danger");
redCard.classList.remove('bg-white');
blueCard.classList.add('bg-primary');
blueCard.classList.remove('bg-white');
yellowCard.classList.add('bg-warning');
yellowCard.classList.remove('bg-white');
greenCard.classList.add('bg-success');
greenCard.classList.remove('bg-white');
blackCard.classList.add('bg-dark');
blackCard.classList.remove('text-dark');
blackCard.classList.remove('bg-white');