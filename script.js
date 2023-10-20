var typeNumber = 4;
var errorCorrectionLevel = 'L';

function makeQR() {
    
    var params = new URLSearchParams();
    params.append("name", document.getElementById("name").value)
    var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData(location.origin+'?'+params.toString());
qr.make();
document.getElementById('placeholder').innerHTML = qr.createImgTag();

}

document.getElementById("name").oninput=makeQR;
var params = new URLSearchParams(location.search);
var name = params.get("name")
if (name!="null") {
    location.replace("mailto:"+name)
}
