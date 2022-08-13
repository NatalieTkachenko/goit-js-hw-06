let form = document.querySelector( 'form' );

const credObj = {
    email: "",
    password: "",
};


form.addEventListener( 'submit', submitEventHandler );

function submitEventHandler(event)
{
    event.preventDefault();
    if ( ( form.email.value === "" ) || ( form.password.value === "" ) )
    {
        alert("Остались незаполненные поля формы. Заполните, пожалуйста, все поля формы перед отправкой!")
    }
    else
    {
        credObj.email = form.email.value;
        credObj.password = form.password.value
        console.log( credObj );
    }

    event.currentTarget.reset();

}

