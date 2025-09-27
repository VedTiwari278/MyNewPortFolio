import React, { createContext, useContext, useState } from "react";

const SkillsContext = createContext();

export const useSkills = () => useContext(SkillsContext);

export const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://my-new-port-folio-tau.vercel.app/skills"
      );
      if (!response.ok) throw new Error("Failed to fetch skills");
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SkillsContext.Provider value={{ skills, isLoading, fetchSkills }}>
      {children}
    </SkillsContext.Provider>
  );
};
