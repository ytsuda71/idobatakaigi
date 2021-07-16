import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjNNTGq_vztPHOPhuvKwWC9aEzZ-9Ipb0",
  authDomain: "easychat-7358d.firebaseapp.com",
  projectId: "easychat-7358d",
  storageBucket: "easychat-7358d.appspot.com",
  messagingSenderId: "300039996921",
  appId: "1:300039996921:web:6ef59e031d666fa9826928",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
