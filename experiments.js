import {
  laserVideos,
  constructionVideos,
  bedfordVideos
} from './experimentsdata.js';

const laserExperimentsButton = document.getElementById('laser-experiments');

const constructionExperimentsButton = document.getElementById('construction-experiments');

const bedfordExperimentsButton = document.getElementById('bedford-experiments');

const experimentsContainer = document.getElementById('experiments-ctn');

function addVideo(data) {
  experimentsContainer.innerHTML = '';

  for (const video of data) {
    const makeTitle = document.createElement('div');
    makeTitle.innerHTML = video.title;
    const makeVideo = document.createElement('iframe');
    makeVideo.setAttribute('allow', 'autoplay;');
    makeVideo.setAttribute('allowfullscreen', '');
    makeVideo.src = video.src;
    const makeLink = document.createElement('a');
      makeLink.href = video.link;
      makeLink.target = '_blank';
      makeLink.innerHTML = video.linkTitle;
    const makePdfLink = document.createElement('a');
    if (video.pdf) {
      makePdfLink.href = video.pdf;
      makePdfLink.download = video.pdf;
    }
    const makePdfDownloadButton = document.createElement('button');
    if (video.pdf) {
      makePdfDownloadButton.classList.add('pdf-download-btn');
      makePdfDownloadButton.id = video.id;
      makePdfDownloadButton.style.marginTop = '-1rem';
      makePdfDownloadButton.innerHTML = 'Download PDF';
    }

    experimentsContainer.appendChild(makeTitle);
    experimentsContainer.appendChild(makeVideo);
    if (video.link) {
      experimentsContainer.appendChild(makeLink);
    }
    if (video.pdf) {
      experimentsContainer.appendChild(makePdfLink);
      makePdfLink.appendChild(makePdfDownloadButton);
    }
  }
};

laserExperimentsButton.addEventListener('click', () => {
  addVideo(laserVideos);
});

constructionExperimentsButton.addEventListener('click', () => {
  addVideo(constructionVideos);
});

bedfordExperimentsButton.addEventListener('click', () => {
  addVideo(bedfordVideos);
});