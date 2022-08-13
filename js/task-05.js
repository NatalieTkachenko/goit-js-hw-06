let namePlace = document.querySelector( "#name-output" );

let inputField = document.querySelector( "#name-input" );


inputField.addEventListener( 'input', addName );

function addName() {
  
    if ( this.value.trim().length === 0)
    {
        namePlace.textContent = "Anonymous";
    }
    else
    {
        namePlace.textContent = inputField.value;
    }
  
 }