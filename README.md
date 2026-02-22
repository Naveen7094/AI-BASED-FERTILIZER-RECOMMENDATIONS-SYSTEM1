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
