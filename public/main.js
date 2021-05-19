let addToTeam1 = 0
let addToTeam2 = 0

function handleClick1(event) {
  const buttonClicked = event.target

  addToTeam1++
  const team1Score = document.querySelector('.team1 h3')
  team1Score.textContent = `${addToTeam1}`
  // console.log(addToTeam1)

  // console.log(team1Score)
}

function handleClick2(event) {
  const buttonClicked = event.target
  addToTeam2++
  const team2Score = document.querySelector('.team2 h3')
  team2Score.textContent = `${addToTeam2}`
}

function handleSub1(event) {
  const buttonClicked = event.target
  addToTeam1--
  const team1Score = document.querySelector('.team1 h3')
  team1Score.textContent = `${addToTeam1}`
}
function handleSub2(event) {
  const buttonClicked = event.target
  addToTeam2--
  const team2Score = document.querySelector('.team2 h3')
  team2Score.textContent = `${addToTeam2}`
  // console.log(team2Score)
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
}

document.addEventListener('DOMContentLoaded', main)
