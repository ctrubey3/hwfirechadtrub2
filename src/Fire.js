import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAoAtHA18ZCNIFVUrYG9Go_7cBbZCeFUI",
    authDomain: "firetesterchad.firebaseapp.com",
    databaseURL: "https://firetesterchad-default-rtdb.firebaseio.com",
    projectId: "firetesterchad",
    storageBucket: "firetesterchad.appspot.com",
    messagingSenderId: "644069058684",
    appId: "1:644069058684:web:aeba6195901e00530fc1f9"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;