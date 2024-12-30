import React, { useState } from "react";

const AdmissionForm2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    course: "",
    generatedId: "",
    twelfthMarksheet: null,
    aadharCard: null,
    passportPhoto: null,
  });

  const generateId = (course) => {
    const courseCode = {
      "B.Sc IT": "IT",
      "B.Com": "BC",
      "BBA": "BA",
      "B.Sc Plain": "BS",
      "BBI": "BI",
    }[course];

    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit random number
    return courseCode ? `${courseCode}${randomNumber}` : "";
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "course") {
      const generatedId = generateId(value);
      setFormData({ ...formData, [name]: value, generatedId });
    } else if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("middleName", formData.middleName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("dob", formData.dob);
    formDataToSubmit.append("address", formData.address);
    formDataToSubmit.append("course", formData.course);
    formDataToSubmit.append("generatedId", formData.generatedId);
    formDataToSubmit.append("twelfthMarksheet", formData.twelfthMarksheet || "");
    formDataToSubmit.append("aadharCard", formData.aadharCard || "");
    formDataToSubmit.append("passportPhoto", formData.passportPhoto || "");
  
    // Debug FormData content
    for (const [key, value] of formDataToSubmit.entries()) {
      console.log(`${key}:`, value instanceof File ? value.name : value);
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/students/register", {
        method: "POST",
        body: formDataToSubmit,
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Form submitted successfully:", responseData);
        alert("Form submitted successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData);
        alert(`Error: ${errorData.message || "Form submission failed"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admission Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your middle name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
           Address
         </label>
         <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="4"
          placeholder="Enter your address"
          required
        ></textarea>
        </div>


          {/* Other Details */}
          <div className="mb-4">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Preferred Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select a course</option>
              <option value="B.Sc IT">B.Sc IT</option>
              <option value="B.Com">B.Com</option>
              <option value="BBA">BBA</option>
              <option value="B.Sc Plain">B.Sc Plain</option>
              <option value="BBI">BBI</option>
            </select>
          </div>

          {/* Generated ID */}
          {formData.generatedId && (
            <div className="mb-4">
              <label htmlFor="generatedId" className="block text-sm font-medium text-gray-700">
                Generated ID
              </label>
              <input
                type="text"
                id="generatedId"
                name="generatedId"
                value={formData.generatedId}
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-100"
                readOnly
              />
              <div className="text-sm text-red-500">Remember this Id, this could be your login Id</div>
            </div>
          )}

          {/* File Uploads */}
          <div className="mb-4">
            <label htmlFor="twelfthMarksheet" className="block text-sm font-medium text-gray-700">
              Upload 12th Marksheet
            </label>
            <input
              type="file"
              id="twelfthMarksheet"
              name="twelfthMarksheet"
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="aadharCard" className="block text-sm font-medium text-gray-700">
              Upload Aadhaar Card
            </label>
            <input
              type="file"
              id="aadharCard"
              name="aadharCard"
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="passportPhoto" className="block text-sm font-medium text-gray-700">
              Upload Passport Photo
            </label>
            <input
              type="file"
              id="passportPhoto"
              name="passportPhoto"
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              accept=".jpg,.jpeg,.png"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm2;
