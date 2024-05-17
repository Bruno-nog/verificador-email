const btnEmail = document.getElementById('btn-email')

btnEmail.addEventListener('click', () => {
    let registerEmail = document.getElementById('register-email').value

    if(registerEmail == ''){
        alert('Informe seu Email');
    }else if((!/^[^@]+@gmail\.com$/.test(registerEmail)) && (!/^[^@]+@hotmail\.com$/.test(registerEmail)) && (!/^[^@]+@yahoo\.com$/.test(registerEmail)) && (!/^[^@]+@icloud\.com$/.test(registerEmail)) && (!/^[^@]+@aol\.com$/.test(registerEmail)) && (!/^[^@]+@outlook\.com$/.test(registerEmail))){
        alert('email não encontrado')
    }else{
        confirm(`Você digitou: ${registerEmail}`)
    }
    
})
