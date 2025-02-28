function openFullImage(src) {
    document.getElementById("full-image").src = src;
    document.getElementById("image-modal").style.display = "flex";
}

function closeFullImage() {
    document.getElementById("image-modal").style.display = "none";
}
