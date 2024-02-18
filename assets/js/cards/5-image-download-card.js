const buttonDownload = document.getElementById("button-download");
const containerImgDownload = document.getElementById("card-image__download");

buttonDownload.addEventListener("click", () => {
  html2canvas(containerImgDownload).then((canvas) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/png");

    downloadLink.download = "imovelGuide.png";
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
})