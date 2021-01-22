namespace TextArea{
    export class TextArea {
        view(label: string, id: string, rows: string, placeholder: string, textoTextAera = ''): string{
            return`<label>${label}</label>
                        <textarea id="${id}"
                            class="form-control" 
                            rows="${rows}" 
                            placeholder="${placeholder}">${textoTextAera}</textarea>
            `;
        }
    }
}