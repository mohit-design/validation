$(function() {
  $(".username-show-hide").hide(700);
  // Username 1st Character of Each word to Uppercase JS
  $("#username").keyup(function() {
    var usernameVal = $("#username").val();  
    var usernameValSplit = usernameVal.split(" ");
    for ( var i = 0; i < usernameValSplit.length; i++ ) {
      var j = usernameValSplit[i].charAt(0).toUpperCase();
      usernameValSplit[i] = j + usernameValSplit[i].substr(1);
    }
    $("#username").val(usernameValSplit.join(" "));
  });
  // Username onkeyup Validation
  $("#username").keyup(function() {
    if(($(this).val().length <= 2) || ($(this).val().length >= 25)) {
      $(".username-show-hide").show(700);
    } else {
      $(".username-show-hide").hide(700);
    }
  });
  // Email onkeyup Validation
  $(".email-show-hide").hide(700);
  var validateEmail = function(emailElementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailElementValue);
  }
  $("#email").keyup(function() {
    var emailValue = $(this).val();
    var emailValid = validateEmail(emailValue);
    if (!emailValid) {
      $(".email-show-hide").show(700);
    } else {
      $(".email-show-hide").hide(700);
    }
  });
  // Password onkeyup Validation
  var passwordVal = document.getElementById("password");
  var lowerCaseLetterPwdVal = document.getElementById("lowerCaseLetterPwd");
  var upperCaseLetterPwdVal = document.getElementById("upperCaseLetterPwd");
  var numberPwd = document.getElementById("numberPwd");
  var lengthPwd = document.getElementById("lengthPwd");
  $("#password").focusin(function() {
    $(".password-show-hide").slideDown(700);
  });
  $("#password").focusout(function() {
    $(".password-show-hide").slideUp(700);
  });
  $("#password").keyup(function() {
    // Validate lowercase letters
    var lowerCaseLetterPwd = /[a-z]/g;
    if(passwordVal.value.match(lowerCaseLetterPwd)) {  
      lowerCaseLetterPwdVal.classList.remove("invalidPasswordType");
      lowerCaseLetterPwdVal.classList.add("validPasswordType");
    } else {
      lowerCaseLetterPwdVal.classList.remove("validPasswordType");
      lowerCaseLetterPwdVal.classList.add("invalidPasswordType");
    }
    // Validate Uppercase Letters
    var upperCaseLetterPwd = /[A-Z]/g;
    if(passwordVal.value.match(upperCaseLetterPwd)) {  
      upperCaseLetterPwdVal.classList.remove("invalidPasswordType");
      upperCaseLetterPwdVal.classList.add("validPasswordType");
    } else {
      upperCaseLetterPwdVal.classList.remove("validPasswordType");
      upperCaseLetterPwdVal.classList.add("invalidPasswordType");
    }
    // Validate Numbers
    var numbersPwd = /[0-9]/g;
    if(passwordVal.value.match(numbersPwd)) {  
      numberPwd.classList.remove("invalidPasswordType");
      numberPwd.classList.add("validPasswordType");
    } else {
      numberPwd.classList.remove("validPasswordType");
      numberPwd.classList.add("invalidPasswordType");
    }
    // Validate Length of Password
    if(passwordVal.value.length >= 8) {
      lengthPwd.classList.remove("invalidPasswordType");
      lengthPwd.classList.add("validPasswordType");
    } else {
      lengthPwd.classList.remove("validPasswordType");
      lengthPwd.classList.add("invalidPasswordType");
    }
  });
  // Confirm Password onkeyup Validation
  $(".confirm-password-show-hide").hide(700);
  $("#confirmPassword").keyup(function() {
    var passwordVal = $("#password").val();
    var confirmPasswordVal = $("#confirmPassword").val();
    if(passwordVal === confirmPasswordVal) {
      $(".confirm-password-show-hide").hide(700);
    } else {
      $(".confirm-password-show-hide").show(700);
    }
  });
});