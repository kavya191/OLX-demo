import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDNuxzYPet94NvlaXADQxKRrzAAj2jCXFA",
    authDomain: "olx-demo-12401.firebaseapp.com",
    databaseURL: "https://olx-demo-12401-default-rtdb.firebaseio.com",
    projectId: "olx-demo-12401",
    storageBucket: "olx-demo-12401.appspot.com",
    messagingSenderId: "386245645990",
    appId: "1:386245645990:web:71db6b345a5a3632404667",
    measurementId: "G-926KWT6KEL"
  };

   export default firebase.initializeApp(firebaseConfig)