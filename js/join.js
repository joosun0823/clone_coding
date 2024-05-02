NodeList.prototype.map = Array.prototype.map;
const check = document.querySelectorAll(".check");
const checkAll = document.querySelector(".checkAll");
const checkMessage = document.querySelector(".please_check");



checkAll.addEventListener("click", () => {
  check.forEach((check) => {
    check.checked = checkAll.checked;
  });
  checkAlert();
});

check.forEach((c) => {
  c.addEventListener("click", () => {
    checkAll.checked = check.map((c) => c.checked).filter((checked) => checked).length === 6;
    checkAlert();
  });

  
});


function checkAlert() {
  if(check[0].checked && check[1].checked && check[2].checked){
    checkMessage.innerText = '';
  } else{
    checkMessage.innerText = '이용약관을 동의해주세요.';
  }
}



const inputName = document.querySelector(".input_join_name");
const inputEmail = document.querySelector(".input_join_email");
const inputPw = document.querySelector(".input_join_password");
const writeJoinName = document.querySelector(".write_join_name");
const writeJoinEmail = document.querySelector(".write_join_email");
const writeJoinPw = document.querySelector(".write_join_pw");

inputName.addEventListener("focus", function(){
  if(this.value !== ""){
    inputName.style.border = "2px solid #00c7ae";
  }
})

inputName.addEventListener("blur", function () {
  // console.log(this.value);
  inputName.style.outline= "none";

  if(this.value === "" ) {
    writeJoinName.innerText = `이름을 입력해주세요.`;
    inputName.style.border = "2px solid red";
  } else {
    console.log(this.value);
    inputName.style.border = "1px solid #e1e1e1";
    writeJoinName.innerText = ``;
  }
})


inputEmail.addEventListener("focus", function(){
  if(this.value !== ""){
    inputEmail.style.border = "2px solid #00c7ae";
  }
})

inputEmail.addEventListener("blur", function () {
  // console.log(this.value);
  inputEmail.style.outline= "none";

  if(this.value === "" ) {
    writeJoinEmail.innerText = `이메일 주소를 입력해주세요.`;
    inputEmail.style.border = "2px solid red";
  } else {
    console.log(this.value);
    inputEmail.style.border = "1px solid #e1e1e1";
    writeJoinEmail.innerText = ``;
  }
})


inputPw.addEventListener("focus", function(){
  if(this.value !== ""){
    inputPw.style.border = "2px solid #00c7ae";
  }
})

inputPw.addEventListener("blur", function () {
  // console.log(this.value);
  inputPw.style.outline= "none";

  if(this.value === "" ) {
    writeJoinPw.innerText = `영문+숫자 조합 8자리 이상 입력해주세요.`;
    inputPw.style.border = "2px solid red";
  } else {
    console.log(this.value);
    inputPw.style.border = "1px solid #e1e1e1";
    writeJoinPw.innerText = ``;
  }
})


