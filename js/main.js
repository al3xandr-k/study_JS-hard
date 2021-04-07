const body = document.querySelector('body');

class DomElement {

  constructor(selector, height, width, bg) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
  }

  addElement(selector, height, width, bg) {

    let addDivElement = document.createElement('div');

    addDivElement.style.position = 'absolute';
    addDivElement.style.height = height;
    addDivElement.style.width = width;
    addDivElement.style.background = bg;

    document.addEventListener('keydown', (event) => {

      let cs = window.getComputedStyle(addDivElement);
      let left = parseInt(cs.marginLeft);
      let top = parseInt(cs.marginTop);

      switch (event.key) {
        case 'ArrowLeft':
          if (left > 0) addDivElement.style.marginLeft = left - 10 + 'px';
          break;
        case 'ArrowUp':
          if (top > 0) addDivElement.style.marginTop = top - 10 + 'px';
          break;
        case 'ArrowRight':
          if (left < document.documentElement.clientWidth - 100)
            addDivElement.style.marginLeft = left + 10 + 'px';
          break;
        case 'ArrowDown':
          if (top < document.documentElement.clientHeight - 100)
            addDivElement.style.marginTop = top + 10 + 'px';
          break;
      }

      console.log('event.key: ', event.key);
      console.log('event: ', event);
    });

    selector.append(addDivElement);
  };
};

const domElement = new DomElement();

domElement.addElement(body, '100px', '100px', 'red');