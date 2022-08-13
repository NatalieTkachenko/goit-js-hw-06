function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const areaForCollection = document.querySelector( '#boxes' );

const inputField = document.querySelector( 'input' );

const btnCreate = document.querySelector( 'button[data-create]' );

const btnDestroy = document.querySelector( 'button[data-destroy]' );

console.log( areaForCollection );
console.log( inputField );
console.log( btnCreate );
console.log( btnDestroy );


btnCreate.addEventListener( 'click', createBoxesHandler );

function createBoxesHandler(event)
{  
  let boxesNumber = Number( inputField.value );

  if ( boxesNumber === 0 )
  {
    alert( "Коллекция не может быть создана из 0 элментов" );
  }
  else
  {
    console.log( "Я должен создать ", boxesNumber, " боксов" );
    for ( let i = 1; i <= boxesNumber; i += 1 )
    {
      const box = document.createElement( 'div' );
      box.style.width = `${i * 10 + 20}px`;
      box.style.height = `${i * 10 + 20}px`;
      box.style.backgroundColor = getRandomHexColor();
      areaForCollection.append( box );
      console.log( box );
    }
  }
}

btnDestroy.addEventListener( 'click', destroyBoxesHandler );
function destroyBoxesHandler( event )
{
  areaForCollection.innerHTML = "";  
  console.log( "Я разрушил, все, что ты построил:(" );
}
  

