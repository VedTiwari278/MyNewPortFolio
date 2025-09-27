import React, { createContext, useContext, useState } from "react";

const ProjectsContext = createContext();

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://my-new-port-folio-tau.vercel.app/project"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectsContext.Provider value={{ projects, loading, fetchProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
