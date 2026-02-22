function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "dashboard.html";
        return false;
    } else {
        alert("Invalid Login!");
        return false;
    }
}

function recommendFertilizer() {
    var n = document.getElementById("nitrogen").value;
    var p = document.getElementById("phosphorus").value;
    var k = document.getElementById("potassium").value;
    var ph = document.getElementById("ph").value;

    let result = "";

    if (n < 50) {
        result = "Recommended: Urea";
    } else if (p < 30) {
        result = "Recommended: DAP";
    } else if (k < 40) {
        result = "Recommended: MOP";
    } else if (ph < 6) {
        result = "Recommended: Calcium Nitrate";
    } else {
        result = "Recommended: NPK 20-20-20";
    }

    document.getElementById("result").innerHTML = result;
}
