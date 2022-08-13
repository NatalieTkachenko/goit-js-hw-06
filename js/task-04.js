let counterValue = 0;

const addBtn = document.querySelector( 'button[data-action="increment"]' );

const descentBtn = document.querySelector( 'button[data-action = "decrement"]' );

const scoreboard = document.querySelector( '#value' );



addBtn.addEventListener( "click", () =>
{
    counterValue += 1;
    scoreboard.textContent = counterValue;

} );


descentBtn.addEventListener( "click", () =>
{
    counterValue -= 1;
    scoreboard.textContent = counterValue;
} );
