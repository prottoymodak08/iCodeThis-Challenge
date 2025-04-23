function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    iconEye.style.display = "inline-block";
    iconEyeSlash.style.display = "none";
  } else {
    passwordInput.type = "password";
    iconEye.style.display = "none";
    iconEyeSlash.style.display = "inline-block";
  }
}

let passwordInput = document.getElementById("password");
let iconEye = document.querySelector(".fa-eye");
let iconEyeSlash = document.querySelector(".fa-eye-slash");

iconEye.style.display = "none";
iconEyeSlash.style.display = "inline-block";

iconEye.addEventListener("click", togglePasswordVisibility);
iconEyeSlash.addEventListener("click", togglePasswordVisibility);
