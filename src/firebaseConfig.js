
import Firebase from 'firebase'
 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD_tBOvuAUnJ3x9QdqTaazUg9yiO2yXelM",
    authDomain: "waterapp-1b016.firebaseapp.com",
    databaseURL: "https://waterapp-1b016.firebaseio.com",
    projectId: "waterapp-1b016",
    storageBucket: "waterapp-1b016.appspot.com",
    messagingSenderId: "1050640758465"
  };
  const  firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database();
  export const MenuRef =  db.ref('menu');
  export const OrdersRef = db.ref('orders')

