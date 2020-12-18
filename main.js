// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// const errorMsg = document.querySelector("#modal")
// errorMsg.hidden = true


let hearts = document.querySelectorAll(".like")

function likeHeart(e) {
  let like = e.target
  let color = like.style.color

  mimicServerCall("fakeUrl")
    .then(function(resp) {
      myFunction()
      function myFunction() {
        let x = document.querySelector(".like-glyph");
        if (x.innerHTML === '♡') {
          x.innerHTML = '♥';
        } else {
          x.innerHTML = '♡';
        }
      }
      like.style.color = color === "red" ? "white" : "red"
    })
    .catch(function(error) {
      document.querySelector("#modal").className = ""
    })
}




for (let heart of hearts) {
  heart.addEventListener("click", likeHeart)
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
