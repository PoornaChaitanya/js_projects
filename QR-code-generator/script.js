const qrInput = document.getElementById("qr-input");
const qrImage = document.getElementById("qr-image");
const qrCode = document.getElementById("qr-code");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", generateQR);

function generateQR() {
  const value = qrInput.value.trim();

  if (!value) {
    qrInput.classList.add("error");
    setTimeout(() => qrInput.classList.remove("error"), 500);
    return;
  }

  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(value);

  qrCode.classList.add("show");
}
