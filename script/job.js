
let interviewList = [];
let rejectList = [];
let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

let cardCount = document.getElementById("card-count");


function calculateCount() {
  totalCount.innerText = cardCount.children.length;
}
calculateCount();
