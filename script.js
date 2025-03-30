document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu when clicking the mobile menu button
    mobileMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});

//   gogglesheets to submit form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzgBe4UGVRdM35pIIi__EL_ngrwxLA1NcxlEwW2K1fDAmTLgH7RdiWFkwkNey2GL6TgeQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
           msg.innerHTML = "" 
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})