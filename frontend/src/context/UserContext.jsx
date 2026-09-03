import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [requirements, setRequirements] = useState([]);

  const [projectsLoading, setProjectsLoading] = useState(false);
  const [technologiesLoading, setTechnologiesLoading] = useState(false);
  const [requirementsLoading, setRequirementsLoading] = useState(false);

  const [projectsError, setProjectsError] = useState(null);
  const [technologiesError, setTechnologiesError] = useState(null);
  const [requirementsError, setRequirementsError] = useState(null);

  const serverURL = 'http://localhost:5000'

  const fetchProjects = async () => {
    try {
      setProjectsLoading(true);
      setProjectsError(null);

      const { data } = await axios.get(serverURL+"/api/projects");

      setProjects(data.projects || data.data || []);
    } catch (error) {
      setProjectsError(
        error.response?.data?.message || "Failed to fetch projects"
      );
    } finally {
      setProjectsLoading(false);
    }
  };

  const fetchTechnologies = async () => {
    try {
      setTechnologiesLoading(true);
      setTechnologiesError(null);

      const { data } = await axios.get(serverURL+"/api/technology");

      setTechnologies(data.technologies || data.data || []);
    } catch (error) {
      setTechnologiesError(
        error.response?.data?.message || "Failed to fetch technologies"
      );
    } finally {
      setTechnologiesLoading(false);
    }
  };

  const fetchRequirements = async () => {
    try {
      setRequirementsLoading(true);
      setRequirementsError(null);

      const { data } = await axios.get(serverURL+"/api/client");

      setRequirements(data.requirements || data.data || []);
    } catch (error) {
      setRequirementsError(
        error.response?.data?.message || "Failed to fetch client requirements"
      );
    } finally {
      setRequirementsLoading(false);
    }
  };

  const refreshProjects = async () => {
    await fetchProjects();
  };

  const refreshTechnologies = async () => {
    await fetchTechnologies();
  };

  const refreshRequirements = async () => {
    await fetchRequirements();
  };

  useEffect(() => {
    fetchProjects();
    fetchTechnologies();
    fetchRequirements();
  }, []);

  const value = {
    projects,
    technologies,
    requirements,

    projectsLoading,
    technologiesLoading,
    requirementsLoading,

    projectsError,
    technologiesError,
    requirementsError,

    fetchProjects,
    fetchTechnologies,
    fetchRequirements,

    refreshProjects,
    refreshTechnologies,
    refreshRequirements,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};


