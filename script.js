var typeNumber = 10
var errorCorrectionLevel = 'L';

function makeQR() {
    
    var params = new URLSearchParams();
    params.append("to", document.getElementById("name").value)
    var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData(location.href+'?'+params.toString());
qr.make();
document.getElementById('placeholder').innerHTML = qr.createImgTag();

}

document.getElementById("name").oninput=makeQR;
var params = new URLSearchParams(location.search);
var name = params.get("to")
var subject = "Lost item!"
params.append("subject", subject)
var body = "You have lost an item at Lost and Found! Pick it up there."
var password = "nhsluypjl"
var unscrambled = ""
for (var i = 0; i<password.length; i++) {
    unscrambled+=String.fromCharCode(password.charCodeAt(i)-7)
}
params.append("body", body)
if (name!="null" && prompt("Enter password") == unscrambled) {
    location.replace("mailto:?"+params.toString().replaceAll("+","%20"))
}
