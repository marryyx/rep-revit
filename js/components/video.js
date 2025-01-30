export const videoContent = () => {
    
const btnVideoFirst = document.querySelector('.collection-video-btn-1');
const btnVideoSecond = document.querySelector('.collection-video-btn-2');
const closeVideo = document.querySelectorAll('.video-close');
const dialogVideoFirst = document.querySelector('.video-first');
const dialogVideoSecond = document.querySelector('.video-second');
const vid = document.querySelector('.video');
const vidTwo = document.querySelector('.video-two');

btnVideoFirst.addEventListener('click', () => {
    dialogVideoFirst.showModal();
});

closeVideo.forEach(element => {
    element.addEventListener('click', () => {
        dialogVideoFirst.close();
        vid.pause();
    });
});

btnVideoSecond.addEventListener('click', () => {
    dialogVideoSecond.showModal();
});

closeVideo.forEach(element => {
    element.addEventListener('click', () => {
        dialogVideoSecond.close();
        vidTwo.pause();
    });
});

const video = document.querySelectorAll('.ar-imagine__image-video img');
const footerVideos = document.querySelectorAll('.ar-imagine__footer');
const videos = document.querySelectorAll('.ar-imagine__video');

const clearSelectVideo = (element, newClass) => {
    element.forEach(elm => {
        elm.classList.remove(newClass);
    });
};

const selectVideoTab = (name, content, classHide) =>
    content.forEach(item => {
        const videoFooter = item.dataset.video

        if (name != videoFooter) {
            item.classList.add(classHide)
        } else {
            item.classList.remove(classHide)
        }
    });


video.forEach(element => {
    element.addEventListener("click", () => {
        clearSelectVideo(video, '--select')
        element.classList.add('--select');

        const tabVideo = element.dataset.video;
        selectVideoTab(tabVideo, videos, '--hide-video');
        selectVideoTab(tabVideo, footerVideos, '--hide');
    });
});
}