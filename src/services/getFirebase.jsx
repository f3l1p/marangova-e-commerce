import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAl-ZG4UjwazLEJknBXiZ4hQ0wlkJj61jM",
	authDomain: "marangova-26160.firebaseapp.com",
	projectId: "marangova-26160",
	storageBucket: "marangova-26160.appspot.com",
	messagingSenderId: "1044975530816",
	appId: "1:1044975530816:web:29b6d837b504eecfbe80a5",
	measurementId: "G-80CNLJJ0VF",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}
