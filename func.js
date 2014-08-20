// Function to amend array with commas
Array.prototype.toComma = function () {
    return this.join(",");
}

// Function to amend array with dashes
Array.prototype.toDash = function () {
    return this.join("-");
}

// Function to amend array with single quotes and a comma
Array.prototype.toSingleQuotedString = function () {
  return "'" + this.join("','") + "'";
}

// Function to amend string with semi-colons
Array.prototype.toSemiColon = function () {
    return this.join(";");
}

// Main function to ammend inputted strings
function change() {

    var doc                 = document,
        string_input        = doc.getElementById('string_input'),
        radio_comma         = doc.getElementById('radioComma'),
        radio_singlequote   = doc.getElementById('radioSingleQuote'),
        radio_dash          = doc.getElementById('radioDash'),
        radio_semi          = doc.getElementById('radioSemi'),
        maxLength           = 600;

    // Regex radio conditions
    if (radioWhitespace.checked) {
        stringArray = string_input.value.replace(/^\s+|\s+$/g, '').split(/\s+/);
    } 
    else if (radioNewline.checked) {
        stringArray = string_input.value.replace(/^\n+|\n+$/g, '').split(/\n+/);
    }


    // Text formatting radio conditions
    if (radio_comma.checked) {
        string_output = stringArray.toComma();
    } 
    else if (radio_singlequote.checked) {
        string_output = stringArray.toSingleQuotedString();
    }
    else if (radio_dash.checked) {
        string_output = stringArray.toDash();
    }
    else if (radio_semi.checked) {
        string_output = stringArray.toSemiColon();
    }

    // Displays formatted array providing the input is less than maxLength
    if(stringArray.length <= maxLength){
        doc.getElementById("string_output").value = (string_output);
    } else {
        doc.getElementById("string_output").value = "";
        doc.getElementById("string_output").value = "Input limited to " + maxLength + ".  Please reduce and try again.";
    }
};


// Function clears both text areas
function clearText() {
    document.getElementById("string_input").value = "";
    document.getElementById("string_output").value = "";
}
