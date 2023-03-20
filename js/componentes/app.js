import Video from "./video.js";

//funcion para crear videos
function createVideo(url, height, width) {
    let nuevoVideo = new Video("ubicarvideo", url , height, width);
    nuevoVideo.render();
    }

createVideo( "documentacion/videoejemplo.MP4", "200", "300");