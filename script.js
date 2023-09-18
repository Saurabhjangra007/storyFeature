//data
// function (){
//

const arr = [
  { img: "model1.jpg", story: "model1.jpg", name:"Add to Story" },
  { img: "model2.jpg", story: "model2.jpg",name:"Ravina" },
  { img: "model3.jpg", story: "model3.jpg",name: "Akanksha" },
  { img: "model4.jpg", story: "model4.jpg",name: "Mehak"},
  { img: "model5.jpg", story: "model5.jpg",name: "Pinki"},
  { img: "model6.jpg", story: "model6.jpg",name: "Mohini"},
  { img: "model7.jpg", story: "model7.jpg",name: "Rohit"},
];
let stories = document.querySelector(".stories");
let store = ""
arr.forEach((elem ,id)=>{
store += `<div class="story">
<div class="image" ">
    <img src="${elem.img}" id="${id}" alt="">
</div>
<p>${elem.name} </p>
</div>`
})
stories.innerHTML = store
let fullscreen = document.querySelector(".full-screen")

stories.addEventListener("click",(dets)=>{
  fullscreen.style.display = "block"
  fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
  setTimeout(()=>{
fullscreen.style.display = "none"
  },3000)
})
