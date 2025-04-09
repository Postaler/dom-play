//alert('Hi')


/*













*/

/*const highlight = (el) => {
    el.style.backgroundColor = el.style.backgroundColor === "orange" ? "white" : "orange";
  };
  */


// document.querySelector(".hamlet").style.backgroundColor = "yellow"
const myAlert = () => {alert("I'm clicked!")}

const spans = document.querySelectorAll("div#play span")

console.log(spans)



for (const mySpan of spans){
    mySpan.addEventListener("click", function(ev){
        let myActor = mySpan.dataset.actor;
        highLightActor(myActor)
       
        // alert(myActor)

    });
    
}

const highLightActor = (myActor) => {
    for (const mySpan of spans) {
        if (mySpan.dataset.actor === myActor) {
            mySpan.style.backgroundColor = "orange";
            mySpan.style.fontWeight = "bold";
        } else {
            mySpan.style.backgroundColor = "white";
            mySpan.style.fontWeight = "normal";
        }
    }
}; n