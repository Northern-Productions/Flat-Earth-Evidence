import {
  highAltitudeVideos,
  highAltitudePictures,
  longDistanceVideos,
  longDistancePictures,
  nasaPictures,
  documentaries,
  tideVideos,
  circumnavigation
} from "./vidpicdata.js";

const vidButton = document.getElementById('vid');

const picButton = document.getElementById('pic');

const vidPicCtnTitle = document.getElementById('vid-pic-ctn-title')

const vidPicContainer = document.getElementById('vid-pic-ctn');

const vidTitleId = document.getElementById('vid-title');

const picTitleId = document.getElementById('pic-title');

//Video category buttons
const vidHighAltitudeButton = document.getElementById('vid-high-altitude');

const vidLongDistanceButton = document.getElementById('vid-long-distance');

const vidDocumentariesButton = document.getElementById('vid-documentaries');

const vidTidesButton = document.getElementById('vid-tides');

const vidCircumnavigationButton = document.getElementById('vid-circumnavigation');

//Picture category buttons
const picHighAltitudeButton = document.getElementById('pic-high-altitude');

const picLongDistanceButton = document.getElementById('pic-long-distance');

const picNasaButton = document.getElementById('pic-nasa');

function addVideos(data) {
  vidPicContainer.innerHTML = '';

  for (const video of data) {
    const makeTitle = document.createElement('div');
      makeTitle.innerHTML = video.title;
    const makeVideo = document.createElement('iframe');
      makeVideo.src = video.src;
      makeVideo.setAttribute('allow', 'autoplay;');
      makeVideo.setAttribute('allowfullscreen', '');
    const makeLink = document.createElement('a');
      makeLink.href = video.link;
      makeLink.target = '_blank';
      makeLink.innerHTML = video.linkTitle;

    if (video.title) {
      vidPicContainer.appendChild(makeTitle);
    }
    if (video.src) {
      vidPicContainer.appendChild(makeVideo);
    }
    if (video.link) {
      vidPicContainer.appendChild(makeLink);
    }

    makeVideo.addEventListener('click', function () {
      if (makeVideo.paused) {
        makeVideo.play();
      } else {
        makeVideo.pause();
      }
    });
  }
}

function addPictures(data) {
  vidPicContainer.innerHTML = '';

  for (const picture of data) {
    const makeTitle = document.createElement('div');
      makeTitle.innerHTML = picture.title;
    const makePictures = document.createElement('img');
      makePictures.src = picture.src;
      if (picture.id) {
        makePictures.id = picture.id;
      }
    const makeInfo = document.createElement('p');
      makeInfo.innerHTML = picture.info;
    const makeLinkContainer = document.createElement('div');
      makeLinkContainer.id = 'link-ctn';
    const makeLink = document.createElement('a');
      makeLink.href = picture.link;
      makeLink.target = '_blank';
      makeLink.innerHTML = picture.linkTitle;
    const makeLink2 = document.createElement('a');
      makeLink2.href = picture.link2;
      makeLink2.target = '_blank';
      makeLink2.innerHTML = picture.link2Title;

    if (picture.title) {
      vidPicContainer.appendChild(makeTitle);
    }
    if (picture.src) {
      vidPicContainer.appendChild(makePictures);
    }
    if (picture.info) {
      vidPicContainer.appendChild(makeInfo);
    }
    if (picture.link) {
      vidPicContainer.appendChild(makeLinkContainer);
    }
    if (picture.linkTitle) {
      makeLinkContainer.appendChild(makeLink);
    }
    if (picture.link2Title) {
      makeLinkContainer.appendChild(makeLink2);
    }
  }
}

function addVidCatBtn() {
  vidPicContainer.innerHTML = '';
  vidTitleId.style.display = 'block';
  vidHighAltitudeButton.style.display = 'block';
  vidLongDistanceButton.style.display = 'block';
  vidDocumentariesButton.style.display = 'block';
  vidTidesButton.style.display = 'block';
  vidCircumnavigationButton.style.display = 'block';
  picTitleId.style.display = 'none';
  picHighAltitudeButton.style.display = 'none';
  picLongDistanceButton.style.display = 'none';
  picNasaButton.style.display = 'none';
}

function addPicCatBtn() {
  vidPicContainer.innerHTML = '';
  vidTitleId.style.display = 'none';
  vidHighAltitudeButton.style.display = 'none';
  vidLongDistanceButton.style.display = 'none';
  vidDocumentariesButton.style.display = 'none';
  vidTidesButton.style.display = 'none';
  vidCircumnavigationButton.style.display = 'none';
  picTitleId.style.display = 'block';
  picHighAltitudeButton.style.display = 'block';
  picLongDistanceButton.style.display = 'block';
  picNasaButton.style.display = 'block';
}

function removeAllCatBtn() {
  vidTitleId.style.display = 'none';
  vidHighAltitudeButton.style.display = 'none';
  vidLongDistanceButton.style.display = 'none';
  vidDocumentariesButton.style.display = 'none';
  vidTidesButton.style.display = 'none';
  vidCircumnavigationButton.style.display = 'none';
  picTitleId.style.display = 'none';
  picHighAltitudeButton.style.display = 'none';
  picLongDistanceButton.style.display = 'none';
  picNasaButton.style.display = 'none';
}

//Main buttons
vidButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  addVidCatBtn();
});

picButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  addPicCatBtn();
});

//Category buttons
//High Altitude
vidHighAltitudeButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  const catTitle = document.createElement('h2');
    catTitle.innerHTML = 'High Altitude Videos'
  vidPicCtnTitle.appendChild(catTitle);
  addVideos(highAltitudeVideos);
  removeAllCatBtn();
});

picHighAltitudeButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  const catTitle = document.createElement('h2');
    catTitle.innerHTML = 'High Altitude Pictures'
  vidPicCtnTitle.appendChild(catTitle);
  addPictures(highAltitudePictures);
  removeAllCatBtn();
});

//Long Distance
vidLongDistanceButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  const catTitle = document.createElement('h2');
    catTitle.innerHTML = 'Long Distance Videos'
  vidPicCtnTitle.appendChild(catTitle);
  addVideos(longDistanceVideos);
  removeAllCatBtn();
});

picLongDistanceButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  const catTitle = document.createElement('h2');
    catTitle.innerHTML = 'Long Distance Pictures'
  vidPicCtnTitle.appendChild(catTitle);
  addPictures(longDistancePictures);
  removeAllCatBtn();
});

//NASA
picNasaButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  const catTitle = document.createElement('h2');
    catTitle.innerHTML = 'NASA Pictures'
  vidPicCtnTitle.appendChild(catTitle);
  addPictures(nasaPictures);
  removeAllCatBtn();
});

//Documentaries
vidDocumentariesButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  const catTitle = document.createElement('h2');
    catTitle.innerHTML = 'Documentaries'
  vidPicCtnTitle.appendChild(catTitle);
  addVideos(documentaries);
  removeAllCatBtn();
});

//Tides
vidTidesButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  const catTitle = document.createElement('h2');
    catTitle.innerHTML = 'Tide Videos'
  vidPicCtnTitle.appendChild(catTitle);
  addVideos(tideVideos);
  removeAllCatBtn();
});

//Circumnavigation/Timezones
vidCircumnavigationButton.addEventListener('click', () => {
  vidPicCtnTitle.innerHTML = '';
  const catTitle = document.createElement('h2');
    catTitle.innerHTML = 'Circumnavigation'
  vidPicCtnTitle.appendChild(catTitle);
  addVideos(circumnavigation);
  removeAllCatBtn();
});
