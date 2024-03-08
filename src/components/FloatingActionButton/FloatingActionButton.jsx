/* eslint-disable no-unused-vars */
// src/components/FloatingActionButton/FloatingActionButton.jsx
import React, { useState } from "react";
import {
  FabContainer,
  FabIcon,
  FabOptions,
  FabOption,
} from "./FloatingActionButton.styles";
import ReportIssueCard from "../ReportIssueCard";

const FloatingActionButton = () => {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleFabOptions = () => {
    setIsFabOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleFabOptions();
  };

  const renderCard = () => {
    if (selectedOption === "Report an issue") {
      return <ReportIssueCard onClose={toggleFabOptions} />;
    }
    // Add other card conditions for different options if needed
    return null;
  };

  return (
    <FabContainer>
      <FabIcon isFabOpen={isFabOpen} onClick={toggleFabOptions}>
        {isFabOpen ? "×" : "+"}
      </FabIcon>
      <FabOptions isFabOpen={isFabOpen}>
        <FabOption onClick={() => handleOptionClick("Report an issue")}>
          Report an issue
        </FabOption>
        {/* Add other options here based on your configuration */}
      </FabOptions>
      {renderCard()}
    </FabContainer>
  );
};

export default FloatingActionButton;
