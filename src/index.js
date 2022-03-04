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
        toyDiv.appendChild(toyP)
        const toyButton = document.createElement("button")

        toyButton.addEventListener("click",(event) => {
          
          console.log(toyDiv.id)
          // console.log(toyButton.id)
          if(toyDiv.id === toyButton.id){
            //console.log("KEEP GOING")
            element.likes = element.likes + 1
            // console.log(element.likes)
            toyP.innerHTML = element.likes + " likes"
            // toyDiv.appendChild(toyP)
            fetch(`http://localhost:3000/toys/${toyDiv.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"},
                body: JSON.stringify({
                  "likes": element.likes
                }),
              })
              
              .then(response => response.json())
              .then(data => {
                console.log('Success:', data)
              })
              
              .catch((error) => {
                console.error('Error:', error);
              })
          }
         })
        toyButton.className = "like-btn"
        toyButton.setAttribute("id", element.id)
        toyButton.innerHTML = "Like ❤️"
        toyDiv.appendChild(toyButton)
        const toyColl = document.getElementById("toy-collection")
        toyColl.appendChild(toyDiv)
        
      });      

    })
});




const jessToy = {"name": "Jessie", "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist", "likes": 0
}


const submitInput = document.getElementsByClassName("submit")

submitInput.submit.addEventListener("click", (event) => {
  event.preventDefault()
  }
)


const input = document.querySelector('input')

input.addEventListener('input', createNewtoy)

const toysUrl = "http://localhost:3000/toys"


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

    //FINSINED LAB 
    //PERSONAL CODE - FIX
    //DIFFERENT PICS WITH IMG
    //NEW CARD DIDNT LIKE
