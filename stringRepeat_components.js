var render_component = function(container){
    var n_container = document.getElementById(container);

    var first_input = document.createElement("input");
    first_input.setAttribute("id","number1");

    var second_input = document.createElement("input");
    second_input.setAttribute("id", "string1");

    var button = document.createElement("button");
    button.setAttribute("id", "button");
    button.setAttribute("class", "btn btn-light");
    button.innerHTML ="Submit"

    var display = document.createElement("p");
    display.setAttribute("id", "output");




    n_container.appendChild(first_input);
    n_container.appendChild(second_input);
    n_container.appendChild(button);
    n_container.appendChild(display);
   

    // var analyze_button = document.getElementById("button")
    button.addEventListener("click", htmlListener)
}

render_component("calc-div")