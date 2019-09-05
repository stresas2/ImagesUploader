//Get info about uploaded image and check if it appropriate
const loadImg = () => {
  const image = document.getElementById("image").files[0];
  const imageTitle = document.getElementById("imagetitle").value;

  if (typeof image === "undefined") {
    printText("Please select image!");
  } else {
    const fileExtensions = ["jpeg", "jpg", "png", "gif"]; // Get all the file extensions
    const fileSize = image["size"];
    const fileNameArray = image["name"].split(".");
    const fileExtension = fileNameArray[fileNameArray.length - 1].toLowerCase();

    const formData = new FormData();
    const imageTitle = document.getElementById("imagetitle").value;
    formData.append("image", image);
    formData.append("imageTitle", imageTitle);

    if (imageTitle !== null && imageTitle !== "") {
      if (fileExtensions.includes(fileExtension)) {
        if (fileSize < 2000000) {
          //Pass all requirements and it's ready be uploaded
          imageUpload(formData);
        } else {
          printText(
            "This file is more than 2MB. Sorry, it has to be less than or equal to 2MB"
          );
        }
      } else {
        printText(
          "This file extension is not allowed. Please upload a JPEG, PNG or GIF file"
        );
      }
    } else {
      printText("Please enter image title!");
    }
  }
};

//Send to server, update images board and clear old data in inputs
const imageUpload = formData => {
  const url = "imageUpload.php";
  fetch(url, {
    method: "POST",
    body: formData
  }).then(response => {
    printText("Your image is successfully uploaded!");
    getData();
    document.getElementById("image").value = null;
    document.getElementById("imagetitle").value = "";
  });
};

//Print warning or succes messages
const printText = text => {
  document.getElementById("messages").innerHTML = text;
};

//Update modal og image
const updateModal = data => {
  const title = data.getAttribute("name");
  const img = data.getAttribute("src");
  document.getElementById("title").innerHTML = title;
  document.getElementById("modalimg").src =
    document.location.origin + "/" + img;
};
