console.log('%c HI', 'color: firebrick')

var something = []
let breeds = []
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
    fetchImage()
    fetchBreed()
})
    function fetchImage() {
        fetch(imgUrl)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            // showImage(json)
            json.message.forEach(element => {
                addImage(element)

            });
        })
    
    }
    function fetchBreed() {
        fetch(breedUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            breeds = Object.keys(json.message)
            tempBreed(breeds)
        })
    }
    
    
    // function showImage(imageArray) {
    //     imageArray.map(image => addImage(image))
    // }

    function addImage(image) {
        const imageList = document.getElementById("dog-image-container")
        const img = document.createElement("img")
        img.src = image
        imageList.appendChild(img)
    }

    function tempBreed(breed) {
        // const ul = document.getElementById("dog-breeds")
        breed.forEach(element => addBreed(element))
    }

    function addBreed(b) {
        const ul = document.getElementById("dog-breeds")
        const li = document.createElement("li")
        li.innerText = b
        ul.appendChild(li)
        li.addEventListener("click", changeColor)

    }

    function changeColor(e) {
        e.target.style.color = "red" 
    }

    function selectBreed(letter) {
        const li = document.querySelectorAll("li")
        something = li.forEach(element => {if (element.textContent.startsWith(letter) == false){console.log(element)}} )
        // li.map(element => {if (element.startsWith(letter) == letter) {
        //     array.push(element)
        // }
        return something
    
    }

    // li.forEach(element => { if(element.textContent.startsWith("a") == "a") { array.push(element)}})