<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image'])) {
    //sql insert
    require_once("db.php");

    $currentDir = getcwd();
    $uploadDirectory = "/uploads/";

    $image = $_FILES['image']['name'];
    $fileTmpName  = $_FILES['image']['tmp_name'];

    $imageTitle = $_POST['imageTitle'];

    $sql = "INSERT INTO images (image, image_title) VALUES ('$image', '$imageTitle')";

        if (mysqli_query($db, $sql)) {
            $last_id = mysqli_insert_id($db);
            $uploadPath = $currentDir . $uploadDirectory . $last_id . basename($image); 
            $didUpload = move_uploaded_file($fileTmpName, $uploadPath);
        }
    
    }
}

?>