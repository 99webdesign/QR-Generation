function generateQRCode() {
  const urlInput = document.getElementById('urlInput').value;
  const qrCodeContainer = document.getElementById('generated-qrcode');
  qrCodeContainer.innerHTML = ''; // Clear previous QR code

  if (urlInput.trim() !== '') {
    const qrcode = new QRCode(qrCodeContainer, {
      text: urlInput,
      width: 200,
      height: 200
    });
  } else {
    alert('Please enter a valid URL');
  }
}
