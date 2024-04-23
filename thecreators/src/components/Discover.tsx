import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.guild.xyz/v2/guilds/guild-page/thecreators');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assuming "roles" is an array under the top-level data object
        const rolesData = data.roles;
        setRoles(rolesData);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <Box color="black"> {/* Set the text color to black */}
      <h1>Roles Data:</h1>
      <ul>
        {roles.map(role => (
          <li key={role.id}>
            {/* Render your role data here */}
            <div>Name: {role.name}</div>
            <div>Permissions: {role.permissions}</div>
            {/* Add other role properties as needed */}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default YourComponent;
