import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App'; // Adjust the import based on your directory structure

const Main = () => {
    return <App />;
};

AppRegistry.registerComponent('YourAppName', () => Main); // Replace 'YourAppName' with the name of your application
