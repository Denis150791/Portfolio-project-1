let element = document.querySelector('h2');

let keyPlay = function(event) {
    event.target.style.border = '2px solid green';

  }

  let keyReturn = function(event) {
    event.target.style.border = '';

  }


element.onmouseenter = keyPlay;
element.onmouseout = keyReturn;



