/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/ReportIssueCard.jsx
import React, { useState } from "react";

const ReportIssueCard = ({ onClose }) => {
  const [selectedSection, setSelectedSection] = useState(""); // Initialize with the pre-selected section

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Submitted:", { selectedSection });
    onClose(); // Close the card after submission
  };

  return (
    <div>
      <h2>Title</h2>
      <hr />
      <label>
        Choose a section:
        <select value={selectedSection} onChange={handleSectionChange}>
          <option value="Interview Question">Interview Question</option>
          {/* Add other section options here based on your configuration */}
        </select>
      </label>
      <br />
      <label>
        Describe the issue in detail:
        <textarea rows="4" cols="50" placeholder="Write here..." />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReportIssueCard;
