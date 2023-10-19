function updateSaveCode() {
    // Get the values from the input fields
    var saveCode = document.getElementById("saveCode").value;
    var money = document.getElementById("money").value;
    var bb = document.getElementById("bb").value;
    var level = document.getElementById("level").value;

    // Decode the base64 save code
    var decodedSaveCode = atob(saveCode);

    // Split the decoded save code by ","
    var saveArray = decodedSaveCode.split(",");

    // Check if the third value is -inf, and change it to 0 if true
    if (saveArray[2] === "-inf") {
        saveArray[2] = "0";
    }

    // Update the second value (index 1) with the entered money amount
    if (money) {
        saveArray[1] = money;
    }

    // Update the eigth value (index 7) with the entered BB amount
    if (bb) {
        saveArray[104] = bb;
    }

    // Update the first value (index 0) with the entered level
    if (level) {
        saveArray[0] = level;
    }

    // Join the array back into a string
    var updatedSaveCode = saveArray.join(",");

    // Encode the updated save code to base64
    var encodedSaveCode = btoa(updatedSaveCode);

    // Display the updated base64 save code
    document.getElementById("updatedSaveCode").innerHTML = encodedSaveCode;

    // Display the updated non-base64 save code
    document.getElementById("updatedNonBase64SaveCode").innerHTML = updatedSaveCode;
}

// Function to copy the code to the clipboard
function copyToClipboard(targetId) {
    var copyText = document.getElementById(targetId);
    var textArea = document.createElement("textarea");

    // Set the text content of the text area to the code
    textArea.value = copyText.textContent;

    // Append the text area to the document
    document.body.appendChild(textArea);

    // Select the text in the text area
    textArea.select();

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the text area
    document.body.removeChild(textArea);

    // Provide feedback to the user
    alert("Copied to clipboard!");
}