// Function to ammend string with single quotes and a comma
Array.prototype.toSingleQuotedString = function () {
  return "'" + this.join("','") + "'";
}

// Main function to ammend inputted strings
function change() {

    var string_input = (document.getElementById('string_input')),
        stringArray = string_input.value.replace(/^\s+|\s+$/g, '').split(/\s+/),
        radio_comma = document.getElementById("radioComma"),
        radio_singlequote = document.getElementById("radioSingleQuote"),
        radio_dash = document.getElementById("radioDash");
        maxLength = 600;

    if (radio_comma.checked) {
        string_output = stringArray.join(radio_comma.value);
    } 
    else if (radio_singlequote.checked) {
        string_output = stringArray.toSingleQuotedString();
    }
    else if (radio_dash.checked) {
        string_output = stringArray.join(radio_dash.value);
    }

    // Displays formatted string
    if(stringArray.length <= maxLength){
        document.getElementById("string_output").value = (string_output);
    } else {
        document.getElementById("string_output").value = "";
        document.getElementById("string_output").value = "Input limited to " + maxLength + ".  Please reduce and try again.";
    }
};


// Function clears both text areas
function clearText() {
    document.getElementById("string_input").value = "";
    document.getElementById("string_output").value = "";
}