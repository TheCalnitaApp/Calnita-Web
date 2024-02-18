import { useState } from "react";


const MultipleFileUploadClient = () => {

    const apiGatewayUrl = "https://calnita-api-gateway.onrender.com";
const graphqlUrl = `${apiGatewayUrl}/graphql`;
const uploadUrl = `${apiGatewayUrl}/upload`;
    const [selectedFiles, setSelectedFiles] = useState<any>([]);
    const [fileInputs, setFileInputs] = useState([null, null, null]);
    const [userId, setUserId] = useState(""); // User ID state
  
    const handleFileInput = (e: any) => {
      const files = e.target.files;
      setSelectedFiles([...files]);
    };
    const handleFileInputChange = (file: any, index: any) => {
      const newFileInputs = [...fileInputs];
      newFileInputs[index] = file;
      setFileInputs(newFileInputs);
    };
    const handleUserIdChange = (e: any) => {
      setUserId(e.target.value);
    };
  
    const handleUpload = async () => {
      const formData = new FormData();
      selectedFiles.forEach((file: any, index: any) => {
        formData.append(`file${index}`, file);
      });
      fileInputs.forEach((file, index) => {
        if (file) {
          formData.append(`file${index}`, file);
        }
      });
  
      // Include the userId and purpose in the request body
      formData.append("userId", userId);
      // Structure the purposes array on the client-side
      const fieldNames = ["avatar", "coverPhoto", "nafdacDoc"]; // Add your purposes here
  
      // Append the purposes array to the formData
      fieldNames.forEach((fieldName, index) => {
        formData.append(`fieldNames[${index}]`, fieldName);
      });
  
      // Upload the files to Cloudinary
      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });
  
      if (uploadResponse.ok) {
        const data = await uploadResponse.json();
        // Now, you have the URLs for all the uploaded files, and you can use them to mutate fields.
        console.log("File URLs:", data);
  
        // Example GraphQL mutation
        const mutation = `
          mutation ($_id: ID!, $avatar: String, $coverPhoto: String) {
            updateBrand(_id: $_id, brandInputUpdate: { avatar: $avatar, coverPhoto: $coverPhoto }) {
              avatar
              coverPhoto
            }
          }
        `;
  
        const graphqlResponse = await fetch(graphqlUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: mutation,
            variables: {
              _id: "63fe2076f95423bcd25e8a8f",
              avatar: data.fileUrls[0], // Adjust the field names accordingly
              coverPhoto: data.fileUrls[1],
            },
          }),
        });
  
        const result = await graphqlResponse.json();
  
        console.log(result);
      } else {
        const errorData = await uploadResponse.json();
        console.error("File upload error:", errorData.error);
      }
    };
  
    return (
      <div>
        <h3>multiple file selctor</h3>
  
        <input type="file" onChange={handleFileInput} name="file" multiple />
        <h3>single file selectors</h3>
        <input
          type="file"
          onChange={(e: any) => handleFileInputChange(e.target.files[0], 0)}
          name="file0"
        />
        <input
          type="file"
          onChange={(e: any) => handleFileInputChange(e.target.files[0], 1)}
          name="file1"
        />
        <input
          type="file"
          onChange={(e: any) => handleFileInputChange(e.target.files[0], 2)}
          name="file2"
        />
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={handleUserIdChange}
        />
  
        <button onClick={handleUpload}>Upload</button>
      </div>
    );
  };