import firebase from 'firebase';


    //paste your SDK here

const firebaseConfig = {
  apiKey: "AIzaSyBeKQnYfQEV0qikzwcTJ2ObszRiESlVVFU",
  authDomain: "project-58-f12d2.firebaseapp.com",
  projectId: "project-58-f12d2",
  storageBucket: "project-58-f12d2.appspot.com",
  messagingSenderId: "257756032513",
  appId: "1:257756032513:web:98576ca4eb9e4523971a00"
};

    
if(!firebase.app.length){
firebase.initializeApp(firebaseConfig);
}
  // Initialize Firebase
  
  
  export default firebase.database();