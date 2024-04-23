import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context to manage user data
const UserContext = createContext();

// Custom hook to access user data and fetch it if not already cached
const useUserData = (apiUrl) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedUserData = localStorage.getItem(apiUrl);
        if (cachedUserData) {
          setUserData(JSON.parse(cachedUserData));
        } else {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userData = await response.json();
          localStorage.setItem(apiUrl, JSON.stringify(userData));
          setUserData(userData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return userData;
};

const UserDataComponent = ({ apiUrl }) => {
  const userData = useUserData(apiUrl);
  const displayName = userData ? userData.result.user.displayName : '';

  return (
    <div>
      <h2></h2>
      <p>{displayName}</p>
    </div>
  );
};

const UserDataFetcher = () => {
  return (
    <>
      <UserDataComponent apiUrl="https://api.neynar.com/v1/farcaster/user/?api_key=NEYNAR_API_DOCS&viewerFid=-1&fid=410846" />
      <UserDataComponent apiUrl="https://api.neynar.com/v1/farcaster/user/?api_key=NEYNAR_API_DOCS&viewerFid=-1&fid=436966" />
      <UserDataComponent apiUrl="https://api.neynar.com/v1/farcaster/user/?api_key=NEYNAR_API_DOCS&viewerFid=-1&fid=408268" />
    </>
  );
};

export default UserDataFetcher;
