//o codigo abaixo foi gerado na página do projeto no firebase
//depois da versão 9, é preciso colocar compat na importação do firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBMPktGLWlN2p8OIpkDCAk_7k9yjPJiGWI",
    authDomain: "certificate-1859d.firebaseapp.com",
    projectId: "certificate-1859d",
    storageBucket: "certificate-1859d.appspot.com",
    messagingSenderId: "576721143263",
    appId: "1:576721143263:web:71c8c6e81367f36459306a",
    measurementId: "G-XP4F4HNPM2"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase