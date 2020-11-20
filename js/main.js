window.onload = function(){
    var helper = new Helper();
    var telefoneComum = "5519989227984";

    // Mensagem redirecionada para whatsapp
    helper.mensagemDeliveryWhatsApp(telefoneComum,"Cheese Burguer",document.getElementById('cheese-burger'));
    helper.mensagemDeliveryWhatsApp(telefoneComum,"Delicious Bacon",document.getElementById('delicious-bacon'));
    helper.mensagemDeliveryWhatsApp(telefoneComum,"Cheddar Volcano",document.getElementById('cheddar-volcano'));

    // Redirecionamento para redes sociais
    helper.redirecionaRedeSocial("https://www.facebook.com/BurgerTownde.Campinas", document.getElementById('logo-facebook'));
    helper.redirecionaRedeSocial("https://www.instagram.com/burgertown.campinas", document.getElementById('logo-instagram'));
}
