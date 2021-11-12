var uid = document.getElementById("uid");
var userText = document.getElementById("user-text");

uid.addEventListener("focusout", onfocusout1);

function onfocusout1(e) {
    if (uid.value.length > 0) uid.classList.add('not-empty');
    else uid.classList.remove('not-empty');
}

// allow focus of the input even on click of div
userText.onclick = function (e) {
    uid.focus();
}



var pw = document.getElementById("pw");
var pwdText = document.getElementById("pwd-text");

pw.addEventListener("focusout", onfocusout2);

function onfocusout2(e) {
    if (pw.value.length > 0) pw.classList.add('not-empty');
    else {
      pw.classList.remove('not-empty');
      var element = document.getElementsByClassName("check");
      for (var i = 0; i < element.length; i++) {
        element[i].className = element[i].className.replace(" active", "");
      }
    }
}

// allow focus of the input even on click of div
pwdText.onclick = function (e) {
    pw.focus();
}
