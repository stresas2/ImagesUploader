<div class="container py-3 shadow-sm bg-light">
  <div class="text-dark h1 text-center font-italic">
    Images Website!
  </div>
  <hr />

  <div class="form-row">
    <div class="custom-file col-sm-12 col-lg-6 my-2">
      <div class="input-group">
        <input type="file" class="custom-file-input" id="image" />
        <label class="custom-file-label">Choose file</label>
      </div>
    </div>

    <div class="col-sm-12 col-lg-6 my-2">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Image Title"
          id="imagetitle"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            onclick="loadImg()"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="messages" class="text-dark ml-1 mt-2"></div>
</div>
