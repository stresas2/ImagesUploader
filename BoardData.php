<?php

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    require_once("db.php");
    $sql = "SELECT * FROM images";
    $result = $db->query($sql);

    if (mysqli_num_rows($result) > 0) {
        $rows = array();
        while ($row = mysqli_fetch_array($result)) {

            $rows[] = $row;
        }

        echo json_encode($rows);
    } else {
        echo json_encode("no results found");
    }
}

?>