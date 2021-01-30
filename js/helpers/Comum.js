var Helpers;
(function (Helpers) {
    class Commum {
        static numeroParaString(numero) {
            if (numero === undefined)
                return;
            return numero
                .toFixed(2)
                .toString()
                .replace('.', ',');
        }
    }
    Helpers.Commum = Commum;
})(Helpers || (Helpers = {}));
