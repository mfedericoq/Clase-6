export default class Video {
    constructor(parentID, url, height, width) {
          this.parentID = parentID;
          this.url = url;
          this.height = height;
          this.width = width;
    }
    render() {
        let myVideo = document.getElementById(this.parentID);
        const myVideoHTML = "<video  height=" + this.height + "  width=" 
        + this.width + " controls><source src=" + this.url + 
        " type='video/mp4'></video>";
        myVideo.innerHTML = myVideoHTML;
    }
}


