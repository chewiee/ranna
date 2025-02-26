function onload() {
    console.info('Loading scripts...');
    
    setRandomRannaFaceAnimation();

    setRandomBackgroundVideo();
}

function chooseRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setRandomRannaFaceAnimation() {
    var rannaFace = document.getElementById("ranna-face");

    const rannaFaceStyles = [
        'left-right-bounce',
        'pulse','fade-in', 'float'
    ]

    const randomRannaFaceStyle = chooseRandomFromArray(rannaFaceStyles);
    console.info('Chose Ranna Face Style: ' + randomRannaFaceStyle);
    if (rannaFace !== null) {
        rannaFace.classList.add(randomRannaFaceStyle);
    }
}

function setRandomBackgroundVideo() {
    var backgroundVideo = document.getElementById("background-video");

    const backgroundVideos = [
        './sky.mp4',
    ]

    const randomBackgroundVideo = chooseRandomFromArray(backgroundVideos);
    console.info('Chose Background Video: ' + randomBackgroundVideo);
    backgroundVideo.setAttribute('src', randomBackgroundVideo);
}