function onload() {
    console.info('Loading scripts...');
    
    setRandomRannaFaceAnimation();

    setRandomBackgroundVideo();
}

function setRandomRannaFaceAnimation() {
    var rannaFace = document.getElementById("ranna-face");

    const rannaFaceStyles = [
        'left-right-bounce',
    ]

    const randomRannaFaceStyle = rannaFaceStyles[Math.floor(Math.random() * rannaFaceStyles.length)]
    console.info('Chose Ranna Face Style: ' + randomRannaFaceStyle)
    rannaFace.setAttribute('id', randomRannaFaceStyle)
}

function setRandomBackgroundVideo() {
   console.info(process.env.derp)
}