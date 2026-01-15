import { createContext, useContext, useState } from "react";
import { experts as initialExperts } from "../data/experts";

const ExpertContext = createContext();

export const ExpertProvider = ({ children }) => {
  const [experts, setExperts] = useState(initialExperts);

  const toggleAvailability = (id) => {
    setExperts((prev) =>
      prev.map((expert) =>
        expert.id === id
          ? {
              ...expert,
              availability:
                expert.availability === "Available"
                  ? "Not Available"
                  : "Available",
            }
          : expert
      )
    );
  };

  const addExpert = (newExpert) => {
    setExperts((prev) => [...prev, newExpert]);
  };

  const updateExpert = (updatedExpert) => {
    setExperts((prev) =>
      prev.map((expert) =>
        expert.id === updatedExpert.id ? updatedExpert : expert
      )
    );
  };

  return (
    <ExpertContext.Provider
      value={{ experts, toggleAvailability, addExpert, updateExpert }}
    >
      {children}
    </ExpertContext.Provider>
  );
};

export const useExperts = () => useContext(ExpertContext);
