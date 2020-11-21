class Helper{
    mensagemDeliveryWhatsApp(telefone, tipoProduto, idproduto){
        var mensagemComum = "Olá BurgerTown gostaria de realizar o pedido do lanche " + tipoProduto + "."
                            
        idproduto.href = "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + mensagemComum;
    }

    redirecionaRedeSocial(linkRedeSocial, idRedeSocial){
        idRedeSocial.href = linkRedeSocial;
    }
}