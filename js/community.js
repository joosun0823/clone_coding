let $communityBanner = $(".community_banner");
let $communityList = $(".community_news");
// 610
let communityBannerIndex = 0;
let communityCount = $communityList.length;
console.log(communityCount);


function moveNextCommunity(){
  communityBannerIndex++;
  $communityBanner.css("transform", `translateX(-${communityBannerIndex*610}px)`);
  $communityBanner.css("transition", "0.5s ease");

  if(communityBannerIndex >= communityCount){
    communityBannerIndex = 0;
    $communityBanner.css("transform", `translateX(0px)`);
  }
}

setInterval(moveNextCommunity, 4000);


//620
let $pickList = $(".pick_banner");
let $pickImage = $(".banner_li");
let pickImageCount = $pickImage.length;
const page = document.querySelector(".sumgo_pick_title > span");
let pageNum = 1;


console.log(pickImageCount);
let pickIndex = 0;
let pickWidth = 310;
let pickPrevButton = $(".sumgo_pick_prev_button");
let pickNextButton = $(".sumgo_pick_next_button");

pickNextButton.on("click", movePickNext);

function movePickNext() {
  pageNum++;
  pickIndex+=2;
  $pickList.css("transform", `translateX(-${pickIndex*pickWidth}px)`);
  $pickList.css("transition", "0.5s ease");

  checkPickEnd();

  page.innerHTML = `<span>${pageNum}/3<span>`;
}

pickPrevButton.on("click", movePickPrev)

function movePickPrev() {
  pageNum--;
  pickIndex-=2;
  $pickList.css("transform", `translateX(-${pickIndex*pickWidth}px)`);
  $pickList.css("transition", "0.5s ease");

  checkPickEnd();

  page.innerHTML = `<span>${pageNum}/3<span>`;
}

function checkPickEnd() {
  if (pickIndex <= 0) {
    pickPrevButton.css("display", "none");
  } else {
    pickPrevButton.css("display", "block");
  }

  if (pickIndex >= pickImageCount - 3) {
    pickNextButton.css("display", "none");
  } else {
    pickNextButton.css("display", "block");
  }
}



//308

let $reviewList = $(".photo_review_list");
let $reviewImage = $(".photo_review_content");
let reviewImageCount = $reviewImage.length;


let reviewIndex = 0;
let reviewWidth = 308;
let reviewPrevButton = $(".photo_review_prev_button");
let reviewNextButton = $(".photo_review_next_button");

reviewNextButton.on("click", moveReviewNext);

function moveReviewNext() {
  reviewIndex+=2;
  $reviewList.css("transform", `translateX(-${reviewIndex*reviewWidth}px)`);
  $reviewList.css("transition", "0.5s ease");

  checkReviewEnd();
}

reviewPrevButton.on("click", moveReviewPrev)

function moveReviewPrev() {
  reviewIndex-=2;
  $reviewList.css("transform", `translateX(-${reviewIndex*reviewWidth}px)`);
  $reviewList.css("transition", "0.5s ease");

  checkReviewEnd();
}

function checkReviewEnd() {
  if (reviewIndex <= 0) {
    reviewPrevButton.css("display", "none");
  } else {
    reviewPrevButton.css("display", "block");
  }

  if (reviewIndex >= reviewImageCount - 3) {
    reviewNextButton.css("display", "none");
  } else {
    reviewNextButton.css("display", "block");
  }
}