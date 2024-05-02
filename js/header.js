const headerSearchbar = document.querySelector(".searchbar_inner > input");
const headerSearchInner = document.querySelector(".searchbar_inner");
const headerList = document.querySelector(".header_list");
const headerListClose = document.querySelector(".header_list_close > span");
const headerPopular = document.querySelector(".header_popular");
const headerRecent = document.querySelector(".header_recent");
const headerPopKeyword = document.querySelector(".header_list_content > ul");
const headerRecentlySearch = document.querySelector(".header_recently_search");



headerSearchbar.addEventListener("focus", function() {
  // console.log(1212);
  headerList.classList.add('opened');
  headerSearchInner.classList.add('outline');
  headerSearchbar.style.backgroundColor = "white";
});

// headerSearchbar.addEventListener("blur", function() {
//   headerList.classList.remove('opened');
//   headerSearchInner.classList.remove('outline');
//   headerSearchbar.style.backgroundColor = "#f2f2f2";

// })

headerListClose.addEventListener("click", function(){
  headerList.classList.remove('opened');
  headerSearchInner.classList.remove('outline');
  headerSearchbar.style.backgroundColor = "#f2f2f2";

});


headerPopular.addEventListener("click", function() {
  headerPopular.classList.add('colored');
  headerRecent.classList.remove('colored');
  headerPopKeyword.style.display = "block";
  headerRecentlySearch.style.display = "none";
})

headerRecent.addEventListener("click", function() {
  headerRecent.classList.add('colored');
  headerPopular.classList.remove('colored');
  headerRecentlySearch.style.display = "flex";
  headerPopKeyword.style.display = "none";

})
