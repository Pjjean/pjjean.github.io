//Activate the image gallery
//The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click



function activateGallery(){
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img")
  let mainImage = document.querySelector("#gallery-photo > img")

  thumbnails.forEach(function(thumbnail){
    let newImgSrc = thumbnail.dataset.largeVersion
    let preloadImg = new Image()
    preloadImg.src = newImgSrc

    thumbnail.addEventListener("click",function() {
      //code to set clicked image as main image
      //let newImgSrc = thumbnail.dataset.largeVersion
      mainImage.setAttribute("src", newImgSrc)
      mainImage.setAttribute("alt",thumbnail.alt)

      // change clicked image as current
      document.querySelector(".current").classList.remove("current")
      thumbnail.parentNode.classList.add("current")

      //change description on click accordingly
      let galleryInfo = document.querySelector("#gallery-info")
      let description = galleryInfo.querySelector(".description")
      let title = galleryInfo.querySelector(".title")

      title.innerHTML = thumbnail.dataset.title
      description.innerHTML = thumbnail.dataset.description
    })
  })
}
