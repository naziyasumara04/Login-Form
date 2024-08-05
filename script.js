let logform=document.getElementById("loginform");

logform.addEventListener('submit', function(event){
    event.preventDefault();
    // console.log("form submitted");
    window.location.href = 'submit.html';
});