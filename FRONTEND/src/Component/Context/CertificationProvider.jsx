import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const CertificationContext = createContext();

export const useCertification = () => useContext(CertificationContext);

export const CertificationProvider = ({ children }) => {
  const [certifications, setCertifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCertifications = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://my-new-port-folio-jbab.vercel.app/certification"
      );
      setCertifications(response.data);
    } catch (error) {
      console.error("Error fetching certifications:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CertificationContext.Provider
      value={{
        certifications,
        isLoading,
        fetchCertifications,
      }}
    >
      {children}
    </CertificationContext.Provider>
  );
};