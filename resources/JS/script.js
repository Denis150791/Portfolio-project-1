let element = document.querySelector('h2');

let keyPlay = function(event) {
    event.target.style.backgroundColor = 'green';
  }

element.onmouseenter = keyPlay;