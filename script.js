// QR code type
var typeNumber = 10

// Low level
var errorCorrectionLevel = 'L';

// Function to make QR code
function makeQR() {
    
    // Paramaters for the QR code
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    var params = new URLSearchParams();
    var cc = document.getElementById("cc").value
    params.append("to", document.getElementById("name").value)
    if (cc != "") {
        params.append("cc", cc)
    }
qr.addData(location.href+'?'+params.toString());
qr.make();
document.getElementById('placeholder').innerHTML = qr.createImgTag();

}

// Send email
document.getElementById("update").onclick=makeQR;
var params = new URLSearchParams(location.search);
var name = params.get("to") // Send email to name
var subject = "Lost item!" // Subject of email
params.append("subject", subject)
var body = "You have lost an item at Lost and Found! Pick it up there." // Body of email
// Define the scrambled password
var password = "8=8?7"
var unscrambled = ""
// Unscramble the password
for (var i = 0; i<password.length; i++) {
    unscrambled+=String.fromCharCode(password.charCodeAt(i)-7)
}
params.append("body", body)
if (name!="null" && prompt("Enter password") == unscrambled) {
    location.replace("mailto:?"+params.toString().replaceAll("+","%20"))
}
