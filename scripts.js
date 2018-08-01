document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    let flexContainer = document.createElement("div");
    flexContainer.className = "flex-container";
    document.body.appendChild(flexContainer);

    btn.addEventListener("click", function () {
        let div = document.createElement("div");
        div.className = "divSquare";
        flexContainer.appendChild(div);
    });



});