
import React from 'react';
import { createRoot} from 'react-dom/client';

// import ReactDOM from 'react-dom';

const elem1 = React.createElement('span', {children: 'Hello'});
const elem2 = React.createElement('span', {children: 'World'});

const element = React.createElement('div', { a: 5, b: 10, children: [elem1, ' ', elem2]});
console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));


const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);