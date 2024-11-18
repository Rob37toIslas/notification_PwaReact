import app from './firebase.js'

import { getMessaging, getToken } from "firebase/messaging";
const messaging = getMessaging(app);

const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      
      console.log('Notification permission granted.');
      getTokenForMessaging(); // Llama para obtener el token solo si el permiso fue concedido
    } else {
      console.log('Notification permission denied.');
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
  }
};

const getTokenForMessaging = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: 'BIThvVSh6XB5GBHCjQZSQkv2dYsZw3xfAtu1h_bFOp86eulWMp0nHxQepFlOH5EI08I23ZruN77LQlleE14A3Lo',
    });
    if (currentToken) {
      console.log('Current token:', currentToken);
    } else {
      console.log('No Instance ID token available.');
    }
  } catch (error) {
    console.error('Error getting token:', error);
  }
};

export default requestNotificationPermission