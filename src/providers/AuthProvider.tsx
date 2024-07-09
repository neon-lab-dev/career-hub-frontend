// @ts-nocheck
"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import api from '@/api';
import { deleteUser, getUserDataFromLocalStorage } from '@/api/authentication';

type TType = {
  userType : "Student" | "Employer";
}

interface AuthContextType {
  user: any;
  login: (userData: any) => void;
  logout: () => void;
  fetchProfile: () => void;
  userType: TType;
  setUserType: (type: "Student" | "Employer") => void;
}



const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userType, setUserType] = useState<"Student" | "Employer">("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    localStorage.getItem('userType')
  }, [])

  useEffect(() => {
    localStorage.setItem('userType', userType)
  }, [userType])

  useEffect(() => {
   const type : TType= localStorage.getItem('userType');
   console.log(type)
    setUserType(type)
  }, []);



  

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      const apiEndpoint = userType === "Student" ? api.employeeLogout : userType === "Employer"? api.employerLogout : null;
     const res=  await axios.get(apiEndpoint, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
     console.log(res.data);
      if(res.data.success){
        setUser(null);
        deleteUser();
        // location.reload();
        console.log(user);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };




  const fetchProfile = async () => {
    const userData = getUserDataFromLocalStorage()
    if(!userData){
      return
    }
    try {
      console.log("object");
      const apiEndpoint = userType === "Student" ? api.employeeProfile : userType === "Employer" ? api.employerProfile : null
      console.log(userType)
      const response = await axios.get(apiEndpoint, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log(response.data.user)
      setUser(response.data.user);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, fetchProfile, userType, setUserType }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
