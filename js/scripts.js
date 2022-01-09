 //jQuery functions
 $(document).ready(function () {
     $("#design-cont").click(function () {
         $("#design-img").toggle();
         $(".design").toggle();
     });
     $("#develop-cont").click(function () {
         $("#develop-img").toggle();
         $(".develop").toggle();
     });
     $("#product-cont").click(function () {
         $("#product-img").toggle();
         $(".product").toggle();
     });

     $("#project-a, #project-b, #project-c, #project-d, #project-e, #project-f, #project-g, #project-h").hover(function () {
         $(this).find(".project").fadeToggle("10");
     });

 });

 //JS functions
 function alertUser() {
     let name = document.getElementById("name").value.toUpperCase();
     let userInput = document.getElementById("txtarea").value;
     let message = `, we have received your message. Thank You for contacting us.`;
     if(userInput !== ""){
        if(name !== ""){
            alert(`Hello ${name} ${message}`);
         }else{
             name = "ANONYMOUS";
             alert(`Hello ${name} ${message}`);
         }
     }else{
         return "please enter your email address"
     }
     
 }