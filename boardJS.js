//Get all data from server if is not emty draw a board
const getData = () => {
  const url = "BoardData.php";
  loading();
  fetch(url, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json === "no results found") {
        document.getElementById("board").innerHTML =
          "<center>No Images!</center>";
      } else {
        drawBoard(json);
      }
    });
};

//Create loading icon till request will be finish
const loading = () => {
  var div = document.createElement("div");
  div.classList.add("loader");
  document.getElementById("board").appendChild(div);
};

//Set max images in one page
const maxPerPage = 9;

//Get what is current page now and if is not set or not available set it to 0
let currentURL = new URL(window.location.href);
let currentPage;
if (!currentURL.searchParams.get("page")) {
  currentPage = 1;
} else {
  if (
    currentURL.searchParams.get("page") > 0 &&
    Number.isInteger(Number(currentURL.searchParams.get("page")))
  ) {
    currentPage = currentURL.searchParams.get("page");
  } else {
    currentPage = 1;
  }
}

//Draw images board and call to draw navigation of pages
const drawBoard = data => {
  drawPagesNav(data);
  const firsImage = (currentPage - 1) * maxPerPage;
  let lastImage = firsImage + maxPerPage;
  if (lastImage > data.length) {
    lastImage = data.length;
  }

  const div = document.createElement("div");
  div.classList.add("row");
  document.getElementById("board").innerHTML = "";

  for (let i = firsImage; i < lastImage; i++) {
    const id = data[i]["id"];
    const image = data[i]["image"];
    const image_title = data[i]["image_title"];
    div.innerHTML += `
    <div class="col-sm-6 col-lg-4 ">
        <div class="shadow-sm p-3 mb-2 mt-2 border-0 fadein hover">
        <img class="card-img-top" src="uploads/${id}${image}" data-toggle="modal" data-target=".bd-example-modal-lg" name="${image_title}" onclick="updateModal(this)"
            <div class="card-body py-1 text-center">
                <p class="m-0">${image_title}</p>
            </div>
        </div>
    </div>`;
  }

  document.getElementById("board").appendChild(div);
};

//Draw navigation of pages
const drawPagesNav = data => {
  document.getElementById("navBar").innerHTML = "";
  let nav = document.createDocumentFragment();
  const pages = Math.ceil(data.length / maxPerPage);

  if (currentPage > 1) {
    const prevous = document.createElement("li");
    prevous.classList.add("page-item");
    prevous.innerHTML = `<a class='page-link' href='index.php?page=${Number(
      currentPage
    ) - 1}' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a>`;
    nav.appendChild(prevous);
  }

  for (let i = 1; i <= pages; i++) {
    const number = document.createElement("li");
    number.classList.add("page-item");
    if (i === Number(currentPage)) {
      number.classList.add("active");
    }
    number.innerHTML = `<a class='page-link' href='index.php?page=${i}'>${i}</a>`;
    nav.appendChild(number);
  }

  if (currentPage < pages) {
    const next = document.createElement("li");
    next.classList.add("page-item");
    next.innerHTML = `<a class='page-link' href='index.php?page=${Number(
      currentPage
    ) + 1}' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a>`;
    nav.appendChild(next);
  }

  document.getElementById("navBar").appendChild(nav);
};

//Start
getData();
