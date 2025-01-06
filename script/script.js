const burger= document.getElementById("burger");
const website = document.getElementById("nav-holder");

function burgershow() {
    console.log("click!")
    if (website.style.display=="flex") {
        website.style.display="none";
        burger.style.background ="url('./assets/Menu.png')";
        burger.style.backgroundSize="cover";
    }
    else{
        website.style.display="flex";
        burger.style.background ="url(./assets/Close.png)";
        burger.style.backgroundSize="cover";
    }
    
}