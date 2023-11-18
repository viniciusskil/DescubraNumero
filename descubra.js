var numeroAleatorio = 0;
var tentativa = 0;

alert ("REGRAS DO JOGO: \n 1.Insira um numero e pressione enviar. \n 2.Caso erre, insira novamente até acertar. \n 3.Fique atento nas dicas após os numeros inseridos. ");

function resetar (){

    tentativa = 0;
    numeroAleatorio = parseInt(Math.random() * 100);
    document.getElementById('valor').value='';
    
    console.log(numeroAleatorio)
}

function verificar(){

    let valor = parseInt(document.getElementById("valor").value);

    if(valor > 100 || valor < 1)
    {
        alert ("Aposta inválida");
        return;
    }

    if(valor > numeroAleatorio)
    {

        tentativa++;
        alert ("O número para ser encontrado precisa ser MENOR!!.");
    }

    else if(valor < numeroAleatorio)
    {
        tentativa++;
        alert("O número para ser encontrado precisa ser MAIOR!!.")
    }
    
    else
    {
        tentativa++;
        alert("Vocé acertou com " +tentativa+ " tentativas.")
        resetar();
    } 
}
resetar();