




const loginBtn = document.getElementById("loginBtn");
console.log(loginBtn);
loginBtn.addEventListener('click', function()
{
  console.log("login click");
  window.open("https://www.naver.com","_self");
});

const authorityBtn = document.getElementById("authorityBtn");
console.log(authorityBtn);
authorityBtn.addEventListener('click', function()
{
  console.log("login click");
  window.open("https://www.kakao.com","_self");
});