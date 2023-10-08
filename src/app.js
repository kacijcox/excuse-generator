/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomNumber = Math.random() *10;
  document.querySelector('#btn').addEventListener("click", function() {
    document.querySelector('#the-excuse').innerHTML = generateExcuse();

  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () {
  let pronoun = ['A','The'];
  let subject = ['dog', 'dragon', 'pokemon','rat','felicia'];
  let action = ['took my', 'trashed my','rained on my', 'deleted my'];
  let possession =["my homework",'my trophy','my computer','my girlfriend'];
  let where = ['on the roof','in the sewer','in my fridge','under my bed'];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length)
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);


  return pronoun[pronounIndex] + '' + subject[subjectIndex] + '' + action[actionIndex] + '' + possession[possessionIndex] + '' + where[whereIndex];
}