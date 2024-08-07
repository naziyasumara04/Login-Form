let logform=document.getElementById("loginform");

logform.addEventListener('submit', function(event){
    
    event.preventDefault();
    
    window.location.href = 'submit.html';
    // let successMessage = document.getElementById("successMessage");
    // successMessage.style.display = "block";
});