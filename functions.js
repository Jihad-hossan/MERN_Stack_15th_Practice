// Set a alert
const setAlert = ( msg, type='danger' ) => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${ msg }
    <button data-bs-dismiss="alert" class="btn-close"></button>
    </p>`;
}