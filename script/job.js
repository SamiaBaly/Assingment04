
let interviewList = [];
let rejectList = [];
let currentStatus = 'all';


let totalCount = document.getElementById("total-count");
let sideTotalCount = document.getElementById("side-total-count")
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");


const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectBtn = document.getElementById("reject-btn");


let cardCount = document.getElementById("card-count");
const cardDiv = document.querySelector('.card-div');
const noJob = document.getElementById("no-job");




const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");



function calculateCount() {
  totalCount.innerText = cardCount.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectList.length;
}
calculateCount()
toggolNoJobCard();


function toggolNoJobCard() {

  let showCount = 0;
  if (currentStatus === 'interview-btn') {
    showCount = interviewList.length;
  } else if (currentStatus === 'reject-btn') {
    showCount = rejectList.length;
  } else {
    showCount = cardCount.children.length;
  }

  if (showCount === 0) {
    noJob.classList.remove('hidden');
  } else {
    noJob.classList.add('hidden');
  }
  sideTotalCount.innerText = `${showCount} of ${cardCount.children.length}`
};


function toggleStyle(id) {

  allBtn.classList.remove('btn-info', 'text-white');
  interviewBtn.classList.remove('btn-info', 'text-white');
  rejectBtn.classList.remove('btn-info', 'text-white');



  allBtn.classList.add('bg-base-200', 'text-neutral-500');
  interviewBtn.classList.add('bg-base-200', 'text-neutral-500');
  rejectBtn.classList.add('bg-base-200', 'text-neutral-500');

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove("bg-base-200", 'text-neutral-500');
  selected.classList.add("btn-info", 'text-white');




  if (id == 'interview-btn') {

    cardCount.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview();
    toggolNoJobCard();

  } else if (id == "all-btn") {

    cardCount.classList.remove('hidden');
    filterSection.classList.add('hidden');
    toggolNoJobCard();

  } else if (id == "reject-btn") {

    cardCount.classList.add('hidden');
    filterSection.classList.remove('hidden');


    renderRejected();
    toggolNoJobCard();
  }
}
calculateCount()



mainContainer.addEventListener('click', function (event) {

  if (event.target.classList.contains('btn-success')) {

    const parentNode = event.target.parentNode.parentNode;
    const cardName = parentNode.querySelector('.big-text').innerText;
    const small1Text = parentNode.querySelector('.small1-text').innerText;
    const samll2Text = parentNode.querySelector('.small2-text').innerText;
    const btnText = parentNode.querySelector('.btn-text').innerText;
    
    const small3Text = parentNode.querySelector('.small3-text').innerText;

    parentNode.querySelector('.btn-text').innerText = "INTERVIEWED";
    parentNode.querySelector('.btn-text').classList.add('btn-success');
    parentNode.querySelector('.btn-text').classList.remove('hidden');

    const cardInfo = {
      cardName,
      small1Text,
      samll2Text,
      btnText: 'INTERVIEWED',
      small3Text
    }

    const cardExist = interviewList.find(item => item.cardName == cardInfo.cardName);


    if (!cardExist) {

      interviewList.push(cardInfo);
    }

    rejectList = rejectList.filter(item => item.cardName != cardInfo.cardName);


    if (currentStatus == "reject-btn") {

      renderRejected();
      toggolNoJobCard();
    }
    calculateCount();


  } else if (event.target.classList.contains('btn-error')) {

    const parentNode = event.target.parentNode.parentNode;
    const cardName = parentNode.querySelector('.big-text').innerText;
    const small1Text = parentNode.querySelector('.small1-text').innerText;
    const samll2Text = parentNode.querySelector('.small2-text').innerText;
    const btnText = parentNode.querySelector('.btn-text').innerText;
    const small3Text = parentNode.querySelector('.small3-text').innerText;

    parentNode.querySelector('.btn-text').innerText = "REJECTED";
    parentNode.querySelector('.btn-text').classList.add('btn-error');

    const cardInfo = {
      cardName,
      small1Text,
      samll2Text,
      btnText: 'REJECTED',
      small3Text
    }

    const cardExist = rejectList.find(item => item.cardName == cardInfo.cardName);



    if (!cardExist) {
      rejectList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.cardName != cardInfo.cardName);


    if (currentStatus == "interview-btn") {

      renderInterview();
      toggolNoJobCard();
    }

    calculateCount();

  }
});


filterSection.addEventListener('click', function (e) {
  const btn = e.target.closest('.delete-btn');
  if (!btn) return;
  const card = btn.closest('.card-div');
  const name = card.querySelector('.big-text').innerText;

  interviewList = interviewList.filter(item => item.cardName !== name);
  rejectList = rejectList.filter(item => item.cardName !== name);
  card.remove();
  calculateCount();
  toggolNoJobCard();
});


function renderInterview() {

  filterSection.innerHTML = '';

  for (let inter of interviewList) {

    let div = document.createElement('div');
    div.className = `card-div bg-base-100 p-6 rounded-xl`
    div.innerHTML = ` 
    <div class=" grid grid-cols-2">
          <div>
            <h2 class="big-text text-xl font-semibold pb-2">${inter.cardName}</h2>
            <p class="small1-text text-neutral-500">${inter.small1Text}</p>
          </div>
          <div class="text-right flex justify-end">
            <div class="delete-btn w-12 h-12 bg-base-200 rounded-full flex justify-center items-center border border-neutral-200">
              <i class=" fa-regular fa-trash-can text-neutral-400 cursor-pointer"></i></div>
          </div>
        </div>
        <div class="py-6">
          <p class="small2-text text-neutral-500">${inter.samll2Text}</p>
        </div>
        <button class="btn btn-success btn-text">${inter.btnText}</button>
        <p class="small3-text text-neutral-600 py-2">${inter.small3Text}</p>
        <div class="py-4">
          <button class="btn btn-outline btn-success mr-2">INTERVIEW</button>
          <button class="btn btn-outline btn-error">REJECTED</button>
        </div>
    `;
    filterSection.appendChild(div)
  }
}
function renderRejected() {
  filterSection.innerHTML = '';
  for (let reject of rejectList) {

    let div = document.createElement('div');
    div.className = `card-div bg-base-100 p-6 rounded-xl`
    div.innerHTML = ` 
    <div class=" grid grid-cols-2">
          <div>
            <h2 class="big-text text-xl font-semibold pb-2">${reject.cardName}</h2>
            <p class="small1-text text-neutral-500">${reject.small1Text}</p>
          </div>
          <div class="text-right flex justify-end">
            <div class="delete-btn w-12 h-12 bg-base-200 rounded-full flex justify-center items-center border border-neutral-200">
              <i class=" fa-regular fa-trash-can text-neutral-400 cursor-pointer"></i></div>
          </div>
        </div>
        <div class="py-6">
          <p class="small2-text text-neutral-500">${reject.samll2Text}</p>
        </div>
        <button class="btn btn-error btn-text">${reject.btnText}</button>
        <p class="small3-text text-neutral-600 py-2">${reject.small3Text}</p>
        <div class="py-4">
          <button class="btn btn-outline btn-success mr-2">INTERVIEW</button>
          <button class="btn btn-outline btn-error">REJECTED</button>
        </div>
    `;
    filterSection.appendChild(div)
  }
}

calculateCount();
toggolNoJobCard();



cardCount.addEventListener('click', function (e) {
  const btn = e.target.closest('.delete-btn');
  if (!btn) return;
  const card = btn.closest('.card-div');
  if (card) card.remove();
  calculateCount();
  toggolNoJobCard();

});


