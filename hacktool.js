function updateSaveCode() {
    // Get the values from the input fields
    var saveCode = document.getElementById("saveCode").value;
    var money = document.getElementById("money").value;
    var bb = document.getElementById("bb").value;
    var gold = document.getElementById("gold").value;
    var prgold = document.getElementById("prgold").value;
    var skillpoints = document.getElementById("skillpoints").value;
    var level = document.getElementById("level").value;
    var basicballs = document.getElementById("basicballs").value;
    var plasmaballs = document.getElementById("plasmaballs").value;
    var sniperballs = document.getElementById("sniperballs").value;
    var scatterballs = document.getElementById("scatterballs").value;
    var cannonballs = document.getElementById("sniperballs").value;
    var poisonballs = document.getElementById("scatterballs").value;

    // Decode the base64 save code
    var decodedSaveCode = atob(saveCode);

    // Split the decoded save code by ","
    var saveArray = decodedSaveCode.split(",");

    // Check if the third value is -inf, and change it to 0 if true
    if (saveArray[2] === "-inf") {
        saveArray[2] = "0";
    }

    if (money) {
        saveArray[1] = money;
    }

    if (gold) {
        saveArray[2] = gold;
    }

    if (prgold) {
        saveArray[3] = prgold;
    }

    if (skillpoints) {
        saveArray[109] = skillpoints;
    }

    if (bb) {
        saveArray[104] = bb;
    }

    if (level) {
        saveArray[0] = level;
    }

    if (basicballs) {
        saveArray[28] = basicballs;
    }

    if (plasmaballs) {
        saveArray[29] = plasmaballs;
    }

    if (sniperballs) {
        saveArray[30] = sniperballs;
    }

    if (scatterballs) {
        saveArray[31] = scatterballs;
    }

    if (cannonballs) {
        saveArray[32] = cannonballs;
    }

    if (poisonballs) {
        saveArray[33] = poisonballs;
    }

    // Join the array back into a string
    var updatedSaveCode = saveArray.join(",");

    // Encode the updated save code to base64
    var encodedSaveCode = btoa(updatedSaveCode);

    // Display the updated base64 save code
    var updatedSaveCodeElement = document.getElementById("updatedSaveCode");
    updatedSaveCodeElement.innerHTML = encodedSaveCode;

    // Show the "Modded Save Code" header and "Copy New Save Code" button
    var moddedSaveCodeHeader = document.getElementById("moddedSaveCodeHeader");
    var copyNewSaveCodeButton = document.getElementById("copyNewSaveCode");
    moddedSaveCodeHeader.style.display = "block";
    copyNewSaveCodeButton.style.display = "block";
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
