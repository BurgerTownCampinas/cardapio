namespace Helpers {
    export class Commum {
        static numeroParaString(numero: number): string {
            if(numero === undefined)
                return;

            return numero
                .toFixed(2)
                .toString()
                .replace('.', ',');
        }
    }
}
