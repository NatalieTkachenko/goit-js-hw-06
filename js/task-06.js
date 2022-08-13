let inputField = document.querySelector( '#validation-input' );

let availableInputLength = inputField.getAttribute( 'data-length' );

inputField.addEventListener( 'blur', blurEventHandler );

function blurEventHandler()
{
    if ( this.value.trim().length === Number(availableInputLength) )
    {
        inputField.classList.add( 'valid' );
    }
    else
    {
        inputField.classList.add( 'invalid' );
    }
}