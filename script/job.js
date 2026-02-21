
let interviewList = [];
let rejectList = [];


let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");


let cardCount = document.getElementById("card-count");
const mainContainer = document.querySelector("main");
console.log(mainContainer);


function calculateCount() {
  totalCount.innerText = cardCount.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectList.length; 
}
calculateCount();



function toggleStyle(id) {
  console.log("clicked")
}
