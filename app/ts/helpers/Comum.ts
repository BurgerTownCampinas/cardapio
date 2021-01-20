namespace Helpers {
    export class Commum {
        static numeroParaString(numero: number): string {
            return numero
                .toFixed(2)
                .toString()
                .replace('.', ',');
        }
    }
}
