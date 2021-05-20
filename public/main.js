let addToTeam1 = 0
let addToTeam2 = 0

// Add to Team 1
function handleClick1(event) {
  const buttonClicked = event.target
  const team1Score = document.querySelector('.team1 h3')
  addToTeam1++
  team1Score.textContent = `${addToTeam1}`
  if (addToTeam1 === 21) {
    buttonClicked.classList.add('taken')
    return
  }
}

// Add to Team 2
function handleClick2(event) {
  const buttonClicked = event.target
  const team2Score = document.querySelector('.team2 h3')
  addToTeam2++
  team2Score.textContent = `${addToTeam2}`
  if (addToTeam2 === 21) {
    buttonClicked.classList.add('taken')
  }
}

// Subtract from Team 1
function handleSub1(event) {
  const buttonClicked = event.target
  addToTeam1--
  const team1Score = document.querySelector('.team1 h3')
  team1Score.textContent = `${addToTeam1}`
}

// Subtract from Team 2
function handleSub2(event) {
  const buttonClicked = event.target
  addToTeam2--
  const team2Score = document.querySelector('.team2 h3')
  team2Score.textContent = `${addToTeam2}`
}

// Update Team 1 Name
function input1(event) {
  const typing = event.target.value
  const inputValue = document.querySelector('input')
  const name = document.querySelector('.team1 h2')
  name.textContent = typing
}

// Update Team 2 Name
function input2(event) {
  const typing2 = event.target.value
  const inputValue2 = document.querySelector('input')
  const name2 = document.querySelector('.team2 h2')
  name2.textContent = typing2
}

function main() {
  const score1 = document.querySelector('.one.add')
  score1.addEventListener('click', handleClick1)

  const score2 = document.querySelector('.two.add')
  score2.addEventListener('click', handleClick2)

  const sub1 = document.querySelector('.one.subtract')
  sub1.addEventListener('click', handleSub1)

  const sub2 = document.querySelector('.two.subtract')
  sub2.addEventListener('click', handleSub2)

  const newName = document.querySelector('.team1 input')
  newName.addEventListener('input', input1)

  const newName2 = document.querySelector('.team2 input')
  newName2.addEventListener('input', input2)
}

document.addEventListener('DOMContentLoaded', main)
