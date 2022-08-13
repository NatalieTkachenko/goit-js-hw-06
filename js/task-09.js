function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector( 'button' );

const colorCode = document.querySelector( '.color' );

const body = document.querySelector( 'body' );

changeColorBtn.addEventListener( 'click', changeColorHandler );

function changeColorHandler() {
  let randomColor = getRandomHexColor();
  colorCode.textContent = ` - ${ randomColor }`;
  body.style.backgroundColor = randomColor;
};

 