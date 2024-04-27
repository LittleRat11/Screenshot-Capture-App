const container = document.querySelector("#container");
const captureBtn = document.querySelector("#capture-btn");
const downloadBtn = document.querySelector("#download-btn");
const previewContainer = document.querySelector("#preview-container");

captureBtn.addEventListener("click", async() => {
    downloadBtn.classList.remove("hide");
    const canvas = await html2canvas(container);
    const img = canvas.toDataURL();
    previewContainer.innerHTML = `<img src="${img}" id="image">`;
    downloadBtn.href = img;
    downloadBtn.download = "img.jpeg";
})

window.onload = () => {
    downloadBtn.classList.add("hide");
    previewContainer.innerHTML = ""
}