import {
  ciaDocuments,
  militaryDocuments,
  nasaDocuments
} from "./documentsdata.js"

const ciaButton = document.getElementById('cia');

const militaryButton = document.getElementById('military');

const nasaButton = document.getElementById('nasa');

const documentsContainer = document.getElementById('documents-ctn');

function addPdf(data) {
  documentsContainer.innerHTML = '';

  for (const pdfInfo of data) {
    const makeTitle = document.createElement('div');
    makeTitle.classList.add('document-title');
    makeTitle.innerHTML = pdfInfo.title;
    const makePdfPicture = document.createElement('img');
    makePdfPicture.src = pdfInfo.img;
    const makeLink = document.createElement('a');
    makeLink.href = pdfInfo.pdf;
    makeLink.download = pdfInfo.pdf;
    const makeDownloadButton = document.createElement('button');
    makeDownloadButton.classList.add('pdf-download-btn');
    makeDownloadButton.id = pdfInfo.id;
    makeDownloadButton.innerHTML = 'Download PDF';


    documentsContainer.appendChild(makeTitle);
    documentsContainer.appendChild(makePdfPicture);
    documentsContainer.appendChild(makeLink);
    makeLink.appendChild(makeDownloadButton);
  }
};

ciaButton.addEventListener('click', () => {
  addPdf(ciaDocuments);
});

militaryButton.addEventListener('click', () => {
  addPdf(militaryDocuments);
});

nasaButton.addEventListener('click', () => {
  addPdf(nasaDocuments);
});
