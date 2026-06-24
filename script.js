console.log("Script Loaded");
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer","AI Developer","Video Editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
emailjs.init("r26pp9KKEvFd9cV8G");

document.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_1cl6acw",
        "template_x6geiov",
        this
    )
    .then(function(){
        alert("Message Sent Successfully ✅");
        document.getElementById("contact-form").reset();
    })
    .catch(function(error){
        alert("Error ❌");
        console.log(error);
    });

});