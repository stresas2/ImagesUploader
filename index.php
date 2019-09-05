<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <title>Images</title>
  </head>
  <body>
    <div class="col-12 p-0 mt-2">
      <?php include "header.php" ?>
      <?php include "pagesNav.php" ?>
      <?php include "modal.php" ?>
      <div id="board" class="container p-0"></div>
    </div>

    <script src="uploadJS.js"></script>
    <script src="boardJS.js"></script>
    <script src="navPageScript.js"></script>
  </body>
</html>
