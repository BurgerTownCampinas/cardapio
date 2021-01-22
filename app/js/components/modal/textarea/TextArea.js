var TextArea;
(function (TextArea_1) {
    class TextArea {
        view(label, id, rows, placeholder, textoTextAera = '') {
            return `<label>${label}</label>
                        <textarea id="${id}"
                            class="form-control" 
                            rows="${rows}" 
                            placeholder="${placeholder}">${textoTextAera}</textarea>
            `;
        }
    }
    TextArea_1.TextArea = TextArea;
})(TextArea || (TextArea = {}));
