// document.querySelector("btn").onclick(function() {
//     let Value = document.getElementById("text-bx").value;
//     console.log(Value);
// })
document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("text").value;
    var Stored = text.value;
    // Reset value of input
    text.value = "";

    var items = document.getElementById('items');
    let myElm = document.createElement("li"); // Create a new element
    // Add items to container
    // items.innerHTML += Stored;
    myElm.innerText += Stored;
    items.appendChild(myElm);
});