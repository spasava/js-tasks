/* Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра,
а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены. */


let day = 3
let night = 2
const allWay = 5
let answer
if (allWay <= 5) {
  answer = (allWay - day) / (day - night) + (day - night)
  console.log(answer)
} else {
  console.log("ops!")
}