let namePlace = document.querySelector( "#name-output" );

let inputField = document.querySelector( "#name-input" );


inputField.addEventListener( 'input', addName );

function addName()
{
    const { value } = event.target;
  
    if ( value.trim().length === 0)
    {
        namePlace.textContent = "Anonymous";
    }
    else
    {
        namePlace.textContent = inputField.value;
    }
  
 }