import { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = e => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      {preview && <img src={preview} width="200" />}
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUpload;
