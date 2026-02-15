<?php

include 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $title = mysqli_real_escape_string($conn, $_POST['bookTitle']);
    $price = mysqli_real_escape_string($conn, $_POST['bookPrice']);
    $name  = mysqli_real_escape_string($conn, $_POST['sellerName']);
    $email = mysqli_real_escape_string($conn, $_POST['sellerEmail']);
    $phone = mysqli_real_escape_string($conn, $_POST['sellerPhone']);

    
    $sql = "INSERT INTO books (title, price, seller_name, seller_email, seller_phone)
            VALUES ('$title', '$price', '$name', '$email', '$phone')";

    if ($conn->query($sql) === TRUE) {
       
        echo "<script>
                alert('Success! Your book has been listed.');
                window.location.href='index.html';
              </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>