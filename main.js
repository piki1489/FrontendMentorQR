document.addEventListener("DOMContentLoaded", function () {
  const createButton = document.querySelector(".create");

  if (createButton) {
    // Asegurarse de que el botón existe antes de agregar el evento de clic
    createButton.addEventListener("click", function () {
      openModal();
      console.log("Has hecho clic");
    });
  }
});

function openModal() {
  const modal = document.getElementById("qr-modal");
  if (modal.style.display !== "block") {
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.getElementById("qr-modal");
  modal.style.display = "none";
  // Limpiar el código QR al cerrar el modal
  document.getElementById("qr-code").innerHTML = "";
}

function generateQRCode() {
  const urlInput = document.getElementById("url-input");
  const qrCodeData = urlInput.value;

  // Limpiar el código QR antes de generar uno nuevo
  document.getElementById("qr-code").innerHTML = "";

  const qrcode = new QRCode(document.getElementById("qr-code"), {
    text: qrCodeData,
    width: 128,
    height: 128,
  });

  openModal(); // Abre el modal para mostrar el código QR generado
}
