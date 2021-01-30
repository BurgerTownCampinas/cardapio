var ModalHeader;
(function (ModalHeader_1) {
    class ModalHeader {
        view() {
            return `
            <div class="modal-header">
                <button type="button" 
                    class="close" 
                    data-dismiss="modal" 
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `;
        }
    }
    ModalHeader_1.ModalHeader = ModalHeader;
})(ModalHeader || (ModalHeader = {}));
