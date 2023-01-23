const buttonTrailer = document.querySelector(".button-trailer")

buttonTrailer.addEventListener('click', () => {
   modal.classList.add('open')
   video.setAttribute('src', linkVideo)
})

const modal = document.querySelector('.modal')

const buttonClose = document.querySelector('.close-modal')

buttonClose.addEventListener('click', () => {
   modal.classList.remove('open')
   video.setAttribute('src', "")
})

const linkVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk"
const video = document.getElementById('video')