let fontSizeControl = document.querySelector( '#font-size-control' );

let textToChange = document.querySelector( '#text' );


fontSizeControl.addEventListener( 'input', changeFontSizeHandler );

function changeFontSizeHandler()
{
    textToChange.style.fontSize = fontSizeControl.value + "px"; 
}