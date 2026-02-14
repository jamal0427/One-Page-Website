function openModal(image) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = image.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
