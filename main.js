document.getElementById("generate-button").addEventListener("click", function () {
    var type = document.getElementById("qr-type").value;
    var content = document.getElementById("qr-content").value;

    var qrcode = new QRCode("qr-code", {
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    if (type === "text") {
        qrcode.makeCode(content);
    } else if (type === "url") {
        qrcode.makeCode("http://" + content);
    } else if (type === "phone") {
        qrcode.makeCode("tel:" + content);
    } else if (type === "email") {
        qrcode.makeCode("mailto:" + content);
    } else if (type === "geo") {
        qrcode.makeCode("geo:" + content);
    }
});

// var qrcode = new QRCode("qrcode");

// function makeCode() {
//     var elText = document.getElementById("text");

//     if (elText.value == null) {
//         alert("Input a text");
//         elText.focus();
//         return;
//     }

//     qrcode.makeCode(elText.value);
// }

// makeCode();

// $("#text").
//     on("blur", function () {
//         makeCode();
//     }).
//     on("keydown", function (e) {
//         if (e.keyCode == 13) {
//             makeCode();
//         }
//     })