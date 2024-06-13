import {
  laserVideos,
  constructionVideos,
  bedfordVideos,
} from "./experimentsdata.js";

const laserExperimentsButton = document.getElementById("laser-experiments");

const constructionExperimentsButton = document.getElementById(
  "construction-experiments"
);

const bedfordExperimentsButton = document.getElementById("bedford-experiments");

const experimentsContainer = document.getElementById("experiments-ctn");

function addVideo(data) {
  experimentsContainer.innerHTML = "";

  for (const video of data) {
    //Title of video
    const makeTitle = document.createElement("div");
    makeTitle.innerHTML = video.title;
    makeTitle.setAttribute("tabindex", "0");
    //Video
    const makeVideo = document.createElement("iframe");
    makeVideo.setAttribute("allow", "autoplay;");
    makeVideo.setAttribute("allowfullscreen", "");
    makeVideo.src = video.src;
    //Link to video
    const makeLink = document.createElement("a");
    makeLink.href = video.link;
    makeLink.target = "_blank";
    makeLink.innerHTML = video.linkTitle;
    //PDF and link to PDF container
    const makePdfContainer = document.createElement("div");
    makePdfContainer.id = "pdf-ctn";
    //PDF and link to PDF
    const makePdfLink = document.createElement("a");
    makePdfLink.href = video.pdf;
    makePdfLink.download = video.pdf;
    const makePdfDownloadButton = document.createElement("button");
    makePdfDownloadButton.classList.add("pdf-download-btn");
    makePdfDownloadButton.id = video.id;
    makePdfDownloadButton.innerHTML = "Download PDF";
    const makeLinkToPdf = document.createElement("a");
    makeLinkToPdf.classList.add("pdf-link");
    makeLinkToPdf.href = video.pdfLink;
    makeLinkToPdf.target = "_blank";
    makeLinkToPdf.innerHTML = video.pdfLinkTitle;

    experimentsContainer.appendChild(makeTitle);
    experimentsContainer.appendChild(makeVideo);
    if (video.link) {
      experimentsContainer.appendChild(makeLink);
    }
    if (video.pdf) {
      experimentsContainer.appendChild(makePdfContainer);
      makePdfContainer.appendChild(makePdfLink);
      makePdfLink.appendChild(makePdfDownloadButton);
      makePdfContainer.appendChild(makeLinkToPdf);
    }
  }
}

laserExperimentsButton.addEventListener("click", () => {
  addVideo(laserVideos);
});

constructionExperimentsButton.addEventListener("click", () => {
  addVideo(constructionVideos);
});

bedfordExperimentsButton.addEventListener("click", () => {
  addVideo(bedfordVideos);
});
