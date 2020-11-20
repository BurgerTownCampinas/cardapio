class Helper{
    mensagemDeliveryWhatsApp(telefone, tipoProduto, idproduto){
        var mensagemComum = "Olá BurgerTown gostaria de realizar o pedido do lanche " + tipoProduto + "." +
                            " Meu nome é: [Coloque seu nome aqui]" +
                            " Entregar no endereço: [Coloque aqui seu endereço]";

        idproduto.href = "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + mensagemComum;
    }

    redirecionaRedeSocial(linkRedeSocial, idRedeSocial){
        idRedeSocial.href = linkRedeSocial;
    }
}