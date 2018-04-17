function htmlListener() {
    // retrieve user input and clean it
    var a; // to tell the difference between no number and 0
    var pre_a = document.getElementById("number1").value;
    if (pre_a == '') {
        a = undefined; // try Number('') to see why I do this
    } else {
        a = Number(pre_a);
    };

    var b;
    var pre_b = document.getElementById("string1").value;
    if (pre_b == '') {
        b = undefined;
    } else {
        b = toString(pre_b);
    }

    var ourOutput;
    var unique_outPut = document.getElementById("output").value;
    if (unique_outPut == '') {
        ourOutput = undefined;
    } else {
        ourOutput = unique_outPut;
    }
    
    // pass through logic as pure values
    var result = repeatStringNTimes(ourOutput, a, b);

    // draw result to dom	
    var outputbox = document.getElementById("output")
    outputbox.innerHTML = result
}

// var operator_button = document.getElementById("button");
// operator_button.addEventListener("click", htmlListener);