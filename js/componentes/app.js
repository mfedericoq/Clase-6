import Video from "./video.js";

//funcion para crear videos
function createVideo(url, height, width) {
    let nuevoVideo = new Video("ubicarvideo", url , height, width);
    nuevoVideo.render();
    }

createVideo("https://www.youtube.com/embed/R_5AwR27wj4", "200", "300");