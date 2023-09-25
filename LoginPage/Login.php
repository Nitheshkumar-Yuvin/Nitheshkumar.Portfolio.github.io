<?php
/*header("Access-Control-Allow-Origin: http://localhost/"); // Change * to your allowed domains if needed
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root@localhost";
$password = "yuvin";
$dbname = "user_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Hash the password (replace with your own password hashing method)
    $hashedPassword = md5($password);
    
    $sql = "SELECT * FROM users_details WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);
    
    if ($result->num_rows == 1) {
        // User found, perform login actions
        echo "Login successful!";
    } else {
        echo "Login failed. Invalid username or password.";
    }
}

$conn->close();*/

    $username = $_POST["username"];
    $password = $_POST["password"];

    echo $username;
    echo $password;      
?>
