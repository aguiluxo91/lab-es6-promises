// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/* for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
} */

// Iteration 1 using callbacks
const promise1 = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
const promise2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
    
        })
      })
    })
  })
});


// Iteration 3 using async and await

async function makeFood(step) {
    // ... your code here
    for (let i = 0; i < step.length; i++) {
      await addFood(step[i], "#brusselSprouts");
    }
  }
const promise3 = makeFood(brusselSprouts);
let steakImg = new Image();
steakImg.src = 'public/images/steak.jpg';
document.getElementById('table').appendChild(steakImg);
let potatoImg = new Image();
potatoImg.src = 'public/images/mashPotatoes.jpg';
document.getElementById('table').appendChild(potatoImg);
let sproutsImg = new Image();
sproutsImg.src = 'public/images/brusselSprouts.jpg';
document.getElementById('table').appendChild(sproutsImg);

Promise.all([promise1, promise2, promise3]).then(() => {
  document.querySelector("body").innerHTML +=
    `<button id="btn">Dinner is served!</button>`;
    document.getElementById('btn').addEventListener('click', audio);
})


const dinnerSound = new Audio();
dinnerSound.src = 'public/media/dinnerIsServed.mp3';

function audio () {
  dinnerSound.play();
}
