const inputEmail = document.querySelector(".input_email");
const inputPw = document.querySelector(".input_pw");
const writeEmail = document.querySelector(".write_email");
const writePw = document.querySelector(".write_pw");

inputEmail.addEventListener("focus", function(){
  if(this.value !== ""){
    inputEmail.style.border = "2px solid #00c7ae";
  }
})


inputEmail.addEventListener("blur", function () {
  // console.log(this.value);
  inputEmail.style.outline= "none";

  if(this.value === "" ) {
    writeEmail.innerText = `이메일을 입력해주세요`;
    inputEmail.style.border = "2px solid red";
  } else {
    console.log(this.value);
    inputEmail.style.border = "1px solid #e1e1e1";
    writeEmail.innerText = ``;
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
    writePw.innerText = `비밀번호를 입력해주세요`;
    inputPw.style.border = "2px solid red";
  } else {
    console.log(this.value);
    inputPw.style.border = "1px solid #e1e1e1";
    writePw.innerText = ``;
  }
})

