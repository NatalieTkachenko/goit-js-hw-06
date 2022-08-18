let inputField = document.querySelector( '#validation-input' );

let availableInputLength = inputField.getAttribute( 'data-length' );

inputField.addEventListener( 'blur', blurEventHandler );

function blurEventHandler()
{
        
    if ( event.currentTarget.value.trim().length === Number( availableInputLength ) )
    {
        inputField.classList.add( 'valid' )
        inputField.classList.remove( 'invalid')
    }
    
    
    else if ( event.currentTarget.value.trim().length === 0 )
    {
        inputField.classList.remove( 'valid' );
        inputField.classList.remove( 'invalid' )
    }
    else
        {
        inputField.classList.add( 'invalid' );
        inputField.classList.remove( 'valid' );
        }
}