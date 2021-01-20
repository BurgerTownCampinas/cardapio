var Helpers;
(function (Helpers) {
    class Commum {
        static numeroParaString(numero) {
            return numero
                .toFixed(2)
                .toString()
                .replace('.', ',');
        }
    }
    Helpers.Commum = Commum;
})(Helpers || (Helpers = {}));
