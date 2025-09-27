import React, { createContext, useContext, useState } from "react";

const EducationContext = createContext();

export const useEducation = () => useContext(EducationContext);

export const EducationProvider = ({ children }) => {
  const [educationData, setEducationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEducationData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://my-new-port-folio-jbab.vercel.app/education");
      if (!response.ok) throw new Error("Failed to fetch education data");
      const data = await response.json();
      setEducationData(data);
    } catch (error) {
      console.error("Error fetching education data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EducationContext.Provider value={{ educationData, isLoading, fetchEducationData }}>
      {children}
    </EducationContext.Provider>
  );
};