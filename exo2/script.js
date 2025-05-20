const images = document.querySelectorAll(".img-dog")
const newArray = Array.from(images)
newArray.forEach((el) => el.remove())