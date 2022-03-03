let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

const likeArr = []



// for(const element of btns){
//   document.addEventListener("click",(event) => {
//     console.log(element)
//   })
// }

// function goThruButtons(){
//   for (let i = 0; i < btns.length; i++){
//     btns[i].addEventListener("click", function(){
//       console.log("i work")
//     })
//   }
// }



const btns = [...document.querySelectorAll(".like-btn")]


const toysUrl = "http://localhost:3000/toys"

fetch(toysUrl)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      const toys = data
      
      toys.forEach(element => {
        // console.log(element)
        // console.log(element.id)
        // console.log(element.name)
        // console.log(element.image)
        // console.log(element[0].likes)
        const toyDiv = document.createElement("div")
        toyDiv.className = "card"
        toyDiv.setAttribute("id", element.id)
        const toyH = document.createElement("h2")
        toyH.innerHTML = element.name
        toyDiv.appendChild(toyH)
        const toyImg = document.createElement("img")
        toyImg.src = element.image
        toyImg.className = "toy-avatar"
        toyDiv.appendChild(toyImg)
        const toyP = document.createElement("p")
        toyP.innerHTML = element.likes + " likes"
        // likeArr.push(element.likes)
        // console.log(likeArr)
        toyDiv.appendChild(toyP)
        const toyButton = document.createElement("button")
        toyButton.className = "like-btn"
        toyButton.setAttribute("id", element.id)
        toyButton.innerHTML = "Like ❤️"
        toyDiv.appendChild(toyButton)
        const toyColl = document.getElementById("toy-collection")
        toyColl.appendChild(toyDiv)
        likeArr.push(element.likes)
        //goThruButtons()
        const btns = [...document.querySelectorAll(".like-btn")]

      for(const element of btns){
        document.addEventListener("click",(event) => {
          console.log(element)
        })
      }



        // likeArr.forEach(element => {
        //   document.addEventListener("click", (event) => {
        //     console.log(element)
        //   })

        // })

//console.log(event)
            //console.log(likeArr)

     

      
      });      

    })
});







const jessToy = {"name": "Jessie", "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist", "likes": 0
}



const toysUrl = "http://localhost:3000/toys"



const submitInput = document.getElementsByClassName("submit")

submitInput.submit.addEventListener("click", (event) => {
  event.preventDefault()
  }
)

const input = document.querySelector('input')

input.addEventListener('input', createNewtoy)

function createNewtoy(event) {

  console.log(event.target.value)
  if (jessToy.name === event.target.value){

    console.log("KEEP GOING")
    submitInput.submit.addEventListener("click", (event) => {
      event.preventDefault()
  
      console.log(jessToy.name)
      console.log(jessToy.image)
      // //WORKS FROM HERE
      fetch(toysUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(jessToy),
      })
      .then(response => response.json())
      .then(data => {
        // console.log('Success:', data)
        const newToy = data
        console.log(newToy)
        const toyDiv = document.createElement("div")
        toyDiv.className = "card"
        const toyH = document.createElement("h2")

        toyH.innerHTML = jessToy.name 
        toyDiv.appendChild(toyH)
        const toyImg = document.createElement("img")
        toyImg.src = jessToy.image
        toyImg.className = "toy-avatar"
        toyDiv.appendChild(toyImg)
        const toyP = document.createElement("p")
        toyP.innerHTML = jessToy.likes + " likes"
        toyDiv.appendChild(toyP)  
        const toyButton = document.createElement("button")
        toyButton.className = "like-btn"
        toyButton.setAttribute("id", newToy.id)
        toyButton.innerHTML = "Like ❤️"
        toyDiv.appendChild(toyButton)
        const toyColl = document.getElementById("toy-collection")
        toyColl.appendChild(toyDiv)

        })

        .catch((error) => {
          console.error('Error:', error);
        })
  
    })

  }

}



    //     // DELETE
    // fetch(toysUrl, {
    //   method:'DELETE'
    //   }).then(response=>{
    //   return response.json()
    //   }).then(data=> 
    //   // this is the data we get after putting our data,
    //   console.log(data)
    // )

const toysUrlId = "http://localhost:3000/toys/:id"








//   for(const elements of btns){
//     console.log(elements.id)
//     console.log(likeArr)
//   }




    // fetch(toysUrl, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   },
    //   body: JSON.stringify(),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // console.log('Success:', data)
    //   const toyId = data.id


     

    //   .catch((error) => {
    //     console.error('Error:', error);
    //   })
    






