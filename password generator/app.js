const pwd = document.querySelector("#pwd_txt");
const generate = document.querySelector("#generate");
const clipboard = document.querySelector("#clipboard");
let pwd_length = document.querySelector("#slider");
let copy_text = document.querySelector("#copy_text");
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789";

generate.addEventListener("click", () => {
  let password = "";
  let checked = document.getElementById("checkbox").checked;
  let final_string = string;
  if (checked) {
    final_string += "@#$%^&*/=+?!";
  }
  for (let i = 0; i < pwd_length.value; i++) {
    let pwd = final_string[Math.floor(Math.random() * final_string.length)];
    password += pwd;
  }
  pwd.innerText = password;
  final_string = string;
});

clipboard.addEventListener("click", () => {
    navigator.clipboard.writeText(pwd.innerText);
    copy_text.textContent = "Password Copied!";
    copy_text.style.display = "block";
    setTimeout(() => {
      copy_text.style.display = "none";
    }, 2000);
});