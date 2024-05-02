const searchBarContainer = document.querySelector('.section_one_searchbar');
// const searchBar = document.querySelector('.section_one_searchbar > input');
const searchBar = document.getElementById('main_searchbar');
const searchList = document.querySelector('.searchbar_list');
const closeButton = document.querySelector('.list_close > span');
const popKeywordTab = document.querySelector(".popular");
const recentSearchTab = document.querySelector(".recent");
const popKeyword = document.querySelector(".list_content > ul");
const recentSearch = document.querySelector(".recently_search");



searchBar.addEventListener("click", function() {
    searchList.classList.add('opened');
    searchBarContainer.classList.add('outline');
    searchBar.style.backgroundColor = "white"
    // console.log("클릭");
    
})

// searchBar.addEventListener("blur",function(){
//   searchList.classList.remove('opened');
//   searchBarContainer.classList.remove('outline');
//   searchBar.style.backgroundColor = "#f2f2f2";
// })


closeButton.onclick = function(){
  searchList.classList.remove('opened');
  searchBarContainer.classList.remove('outline');
  searchBar.style.backgroundColor = "#f2f2f2";
  console.log("닫기");
}

popKeywordTab.addEventListener("click", function() {
  popKeyword.style.display = "block";
  recentSearch.style.display = "none";
  popKeywordTab.classList.add('colored');
  recentSearchTab.classList.remove('colored');
  
})


recentSearchTab.addEventListener("click", function() {
  recentSearch.style.display = "flex";
  popKeyword.style.display = "none";
  recentSearchTab.classList.add('colored');
  popKeywordTab.classList.remove('colored');

})




let $banner = $(".banner_img");
//움직여야될 ul
let $bannerImg = $(".bannerImage");
//이미지
let bannerWidth = 970;
//배너 이미지
let nowBannerIndex = 0;
//현재 배너 위치

let bannerPrevButton = $(".banner_prev_button");
//이전 버튼
let bannerNextButton = $(".banner_next_button");
//이후 버튼

let slideCnt = $bannerImg.length;
//이미지 개수
console.log(slideCnt);

bannerNextButton.on("click",moveBannerNext);
// 이후 배너버튼 클릭했을 때 함수 호출

function moveBannerNext(){
  // console.log(1);

  nowBannerIndex++;
  //위치 +1
  console.log(nowBannerIndex);
  //현재 위치 출력
  $banner.css("transform", `translateX(-${nowBannerIndex*bannerWidth}px)`);
  //X방향으로 배너이미지너비만큼 움직여줌
  $banner.css("transition", "0.5s ease");

  if (nowBannerIndex >= slideCnt) {
    nowBannerIndex = 0;
    $banner.css("transform", `translateX(0px)`);
  }
}



bannerPrevButton.on("click", moveBannerPrev);

function moveBannerPrev(){
  console.log(22);
  nowBannerIndex--;
  $banner.css("transform", `translateX(-${nowBannerIndex*bannerWidth}px)`);
  $banner.css("transition", "0.5s ease");

}

setInterval(moveBannerNext,4000);




let $serviceList = $(".service");
let $serviceImages = $(".service_img");
let serviceImageCount = $serviceImages.length;
let serviceIndex = 0;
// console.log(serviceImageCount);

let serviceWidth = 245;
// -490px
// -245px

let serviceNextButton = $(".service_next_button");
let servicePrevButton = $(".service_prev_button");

serviceNextButton.on("click", moveServiceNext);

function moveServiceNext(){
  // console.log(12);
  serviceIndex+=2;
  console.log(serviceIndex);
  $serviceList.css("transform", `translateX(-${serviceIndex*serviceWidth}px)`);
  $serviceList.css("transition", "0.5s ease");

  checkServiceEnd();
}

servicePrevButton.on("click", moveServicePrev);

function moveServicePrev(){
  serviceIndex-=2;
  console.log(serviceIndex);
  $serviceList.css("transform", `translateX(-${serviceIndex*serviceWidth}px)`);
  $serviceList.css("transition", "0.5s ease");

  checkServiceEnd();
}

function checkServiceEnd() {
  if (serviceIndex <= 0) {
    servicePrevButton.css("display", "none");
  } else {
    servicePrevButton.css("display", "block");
  }

  if (serviceIndex >= 3) {
    serviceNextButton.css("display", "none");
  } else {
    serviceNextButton.css("display", "block");
  }
}

let $portfolioList = $(".portfolio");
let $portfolioImage = $(".portfolio_img");
let portfolioImageCount = $portfolioImage.length;
let portfolioIndex = 0;
let portfolioWidth = 248;

let portfolioNextButton = $(".portfolio_next_button");
let portfolioPrevButton = $(".portfolio_prev_button");

portfolioNextButton.on("click", movePortNext);

function movePortNext(){
  portfolioIndex+=2;
  $portfolioList.css("transform", `translateX(-${portfolioIndex*portfolioWidth}px)`);
  $portfolioList.css("transition", "0.5s ease");
  checkPortEnd();
}

portfolioPrevButton.on("click", movePortPrev);

function movePortPrev(){
  portfolioIndex-=2;
  $portfolioList.css("transform", `translateX(-${portfolioIndex*portfolioWidth}px)`);
  $portfolioList.css("transition", "0.5s ease");
  checkPortEnd();
}


function checkPortEnd() {
  if (portfolioIndex <= 0) {
    portfolioPrevButton.css("display", "none");
  } else {
    portfolioPrevButton.css("display", "block");
  }

  if (portfolioIndex >= 3) {
    portfolioNextButton.css("display", "none");
  } else {
    portfolioNextButton.css("display", "block");
  }
}


let $lessonList = $(".lesson");
let $lessonImage = $(".lesson_list");
let lessonImageCount = $lessonImage.length;

let lessonIndex = 0;
let lessonWidth = 245;

let lessonPrevButton = $(".lesson_prev_button");
let lessonNextButton = $(".lesson_next_button");

lessonNextButton.on("click", moveLessonNext);

function moveLessonNext() {
  lessonIndex+=2;
  $lessonList.css("transform", `translateX(-${lessonIndex*lessonWidth}px)`);
  $lessonList.css("transition", "0.5s ease");

  checkLessonEnd();
}

lessonPrevButton.on("click", moveLessonPrev)

function moveLessonPrev() {
  lessonIndex-=2;
  $lessonList.css("transform", `translateX(-${lessonIndex*lessonWidth}px)`);
  $lessonList.css("transition", "0.5s ease");

  checkLessonEnd();
}

function checkLessonEnd() {
  if (lessonIndex <= 0) {
    lessonPrevButton.css("display", "none");
  } else {
    lessonPrevButton.css("display", "block");
  }

  if (lessonIndex >= 1) {
    lessonNextButton.css("display", "none");
  } else {
    lessonNextButton.css("display", "block");
  }
}

let $storyList = $(".story");
let $storyImage = $(".story_img");
let storyImageCount = $storyImage.length;

let storyIndex = 0;
let storyWidth = 325;

let storyPrevButton = $(".story_prev_button");
let storyNextButton = $(".story_next_button");

storyNextButton.on("click", moveStoryNext);

function moveStoryNext() {
  storyIndex++;
  $storyList.css("transform", `translateX(-${storyIndex*storyWidth}px)`);
  $storyList.css("transition", "0.5s ease");

  checkStoryEnd();
}

storyPrevButton.on("click", moveStoryPrev)

function moveStoryPrev() {
  storyIndex--;
  $storyList.css("transform", `translateX(-${storyIndex*storyWidth}px)`);
  $storyList.css("transition", "0.5s ease");

  checkStoryEnd();
}

function checkStoryEnd() {
  if (storyIndex <= 0) {
    storyPrevButton.css("display", "none");
  } else {
    storyPrevButton.css("display", "block");
  }

  if (storyIndex >= storyImageCount-3) {
    storyNextButton.css("display", "none");
  } else {
    storyNextButton.css("display", "block");
  }
}