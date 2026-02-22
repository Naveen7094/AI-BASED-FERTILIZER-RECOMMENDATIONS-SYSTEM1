# AI-BASED-FERTILIZER-RECOMMENDATIONS-SYSTEM1
index.html   (Login Page)
dashboard.html  (Recommendation Page)
style.css
script.js
<!DOCTYPE html>
<html>
<head>
    <title>Login - AI Fertilizer System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="login-container">
    <h2>AI Fertilizer Recommendation System</h2>
    <form onsubmit="return loginUser()">
        <input type="text" id="username" placeholder="Enter Username" required>
        <input type="password" id="password" placeholder="Enter Password" required>
        <button type="submit">Login</button>
    </form>
</div>

<script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>Fertilizer Recommendation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Enter Soil Details</h2>

    <input type="number" id="nitrogen" placeholder="Nitrogen (N)">
    <input type="number" id="phosphorus" placeholder="Phosphorus (P)">
    <input type="number" id="potassium" placeholder="Potassium (K)">
    <input type="number" id="ph" placeholder="pH Value">

    <button onclick="recommendFertilizer()">Get Recommendation</button>

    <h3 id="result"></h3>

    <div class="products">
        <h2>Available Fertilizer Products</h2>
        <ul>
            <li>Urea</li>
            <li>DAP</li>
            <li>MOP</li>
            <li>NPK 10-26-26</li>
            <li>NPK 20-20-20</li>
            <li>Organic Compost</li>
            <li>Vermicompost</li>
            <li>Ammonium Sulphate</li>
            <li>Calcium Nitrate</li>
            <li>Bio Fertilizer</li>
        </ul>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial;
    background: #f0f8ff;
    text-align: center;
}

.login-container, .container {
    width: 350px;
    margin: auto;
    padding: 20px;
    background: white;
    margin-top: 100px;
    box-shadow: 0 0 10px gray;
    border-radius: 10px;
}

input {
    width: 90%;
    padding: 10px;
    margin: 8px;
}

button {
    padding: 10px 20px;
    background: green;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background: darkgreen;
}

.products {
    margin-top: 20px;
    text-align: left;
}
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
<!DOCTYPE html>
<html>
<head>
    <title>AI Fertilizer Recommendation</title>
    <style>
        body {
            font-family: Arial;
            background: #f2f9f2;
            text-align: center;
        }

        .container {
            width: 400px;
            margin: 80px auto;
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }

        input, select {
            width: 90%;
            padding: 10px;
            margin: 8px;
        }

        button {
            padding: 10px 15px;
            background: green;
            color: white;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background: darkgreen;
        }

        #result {
            margin-top: 20px;
            font-weight: bold;
            color: blue;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>AI Fertilizer Recommendation System</h2>

    <input type="number" id="nitrogen" placeholder="Nitrogen (N)" required>
    <input type="number" id="phosphorus" placeholder="Phosphorus (P)" required>
    <input type="number" id="potassium" placeholder="Potassium (K)" required>
    <input type="number" step="0.1" id="ph" placeholder="Soil pH" required>

    <select id="crop">
        <option value="">Select Crop</option>
        <option value="rice">Rice</option>
        <option value="wheat">Wheat</option>
        <option value="maize">Maize</option>
        <option value="cotton">Cotton</option>
        <option value="sugarcane">Sugarcane</option>
    </select>

    <button onclick="recommendFertilizer()">Get Recommendation</button>

    <div id="result"></div>
</div>

<script src="script.js"></script>
</body>
</html>
function recommendFertilizer() {

    let n = parseInt(document.getElementById("nitrogen").value);
    let p = parseInt(document.getElementById("phosphorus").value);
    let k = parseInt(document.getElementById("potassium").value);
    let ph = parseFloat(document.getElementById("ph").value);
    let crop = document.getElementById("crop").value;

    let recommendation = "";

    // Basic AI rule-based logic
    if (n < 50) {
        recommendation = "Urea (Nitrogen Deficiency)";
    }
    else if (p < 30) {
        recommendation = "DAP (Phosphorus Deficiency)";
    }
    else if (k < 40) {
        recommendation = "MOP (Potassium Deficiency)";
    }
    else if (ph < 6) {
        recommendation = "Lime Application (Low pH Soil)";
    }
    else if (ph > 7.5) {
        recommendation = "Gypsum (High pH Soil)";
    }
    else {
        recommendation = "NPK 20-20-20 (Balanced Fertilizer)";
    }

    // Crop-based suggestion
    if (crop === "rice") {
        recommendation += " | Suitable for Rice";
    }
    else if (crop === "wheat") {
        recommendation += " | Suitable for Wheat";
    }
    else if (crop === "maize") {
        recommendation += " | Suitable for Maize";
    }
    else if (crop === "cotton") {
        recommendation += " | Suitable for Cotton";
    }
    else if (crop === "sugarcane") {
        recommendation += " | Suitable for Sugarcane";
    }

    document.getElementById("result").innerHTML =
        "Recommended Fertilizer: " + recommendation;
}
