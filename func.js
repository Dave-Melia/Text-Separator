// Function to ammend string with single quotes and a comma
Array.prototype.toSingleQuotedString = function () {
  return "'" + this.join("','") + "'";
}

// Main function to ammend inputted strings
function change() {
 	// Assigns textarea to id "string_input"
    var string_input = (document.getElementById('string_input')).value;

    // Breaks string_input up in to an array
    var stringArray = string_input.split('\n');

    // Assigns variable to comma
    var radio_comma = document.getElementById("radioComma").value;

    // Assigns variable to single quote
    var radio_singlequote = document.getElementById("radioSingleQuote").value;

    // Assigns variable to dash
    var radio_dash = document.getElementById("radioDash").value;

    
    
    // If radio button 1 is selected, join a comma to the end of the string
    if (document.getElementById("radioComma").checked) {
    	string_output = stringArray.join(radio_comma);
    // If radio button 2 is selected, join a single quote to the end of the string
    } 
    // If radio button 2 is selected, join a single quote to the end of the string
    else if (document.getElementById("radioSingleQuote").checked) {
        string_output = stringArray.toSingleQuotedString();
    }
    // If radio button 3 is selected, join a dash to the end of the string
    else if (document.getElementById("radioDash").checked) {
        string_output = stringArray.join(radio_dash);
    }

    // Displays formatted string
    document.getElementById("string_output").value = (string_output);
    console.log(string_output);

};


// Function clears both text areas
function clearText() {
    document.getElementById("string_input").value = "";
    document.getElementById("string_output").value = "";
}