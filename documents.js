import {
  ciaDocuments,
  militaryDocuments,
  nasaDocuments,
} from "./documentsdata.js";

const ciaButton = document.getElementById("cia");

const militaryButton = document.getElementById("military");

const nasaButton = document.getElementById("nasa");

const documentsContainer = document.getElementById("documents-ctn");

window.onload = function () {
  var video = document.querySelector(".background-vid video");

  // Hide the body content initially
  document.body.style.display = "none";

  video.oncanplaythrough = function () {
    // When the video can play through, display the body content
    document.body.style.display = "block";
  };
};

function addPdf(data) {
  documentsContainer.innerHTML = "";

  for (const pdfInfo of data) {
    const makeTitle = document.createElement("div");
    makeTitle.id = pdfInfo.id;
    makeTitle.classList.add("document-title");
    makeTitle.innerHTML = pdfInfo.title;
    makeTitle.setAttribute("tabindex", "0");
    const makePdfPicture = document.createElement("img");
    makePdfPicture.src = pdfInfo.img;
    const makeLinkContainer = document.createElement("div");
    makeLinkContainer.classList.add("pdf-link-container");
    const makeLink = document.createElement("a");
    makeLink.href = pdfInfo.pdf;
    makeLink.download = pdfInfo.pdf;
    const makeDownloadButton = document.createElement("button");
    makeDownloadButton.classList.add("pdf-download-btn");
    makeDownloadButton.id = pdfInfo.id;
    makeDownloadButton.innerHTML = "Download PDF";
    const makeLinkToPdf = document.createElement("a");
    makeLinkToPdf.classList.add("pdf-link");
    makeLinkToPdf.href = pdfInfo.link;
    makeLinkToPdf.target = "_blank";
    makeLinkToPdf.innerHTML = pdfInfo.linkTitle;

    documentsContainer.appendChild(makeTitle);
    documentsContainer.appendChild(makePdfPicture);
    documentsContainer.appendChild(makeLinkContainer);
    makeLinkContainer.appendChild(makeLink);
    makeLink.appendChild(makeDownloadButton);
    if (pdfInfo.link) {
      makeLinkContainer.appendChild(makeLinkToPdf);
    }
  }
}

ciaButton.addEventListener("click", () => {
  addPdf(ciaDocuments);
});

militaryButton.addEventListener("click", () => {
  addPdf(militaryDocuments);
});

nasaButton.addEventListener("click", () => {
  addPdf(nasaDocuments);
});
