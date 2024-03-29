const handleImageUploadSubmit = async (ev) => {
    ev.preventDefault();
  
    const imageFileFieldElement = document.querySelector("#imageFile");
    const formData = new FormData();
  
    formData.append("image", imageFileFieldElement.files[0]);
  
    try {
      const response = await fetch("/api/images/upload", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
  
      // returns the file info as stored on Cloudinary
      console.log(response);
      document.querySelector(
        "#image-placeholder"
      ).innerHTML = `<h4>Your image</h4><img src="${response.path}" alt="${response.originalname}" />`;
      imageFileFieldElement.value = "";
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  document
  .querySelector("#image-uploader")
  .addEventListener("submit", handleImageUploadSubmit);  