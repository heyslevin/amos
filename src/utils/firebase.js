// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const auth = async function () {
  // Initialize Firebase

  const authCredentials = getAuth();

  const authInit = async () => {
    try {
      // Sign in
      const resp = await signInWithEmailAndPassword(
        authCredentials,
        process.env.REACT_APP_email,
        process.env.REACT_APP_password
      );
      const user = resp.user;
      console.log('Signed in');
      console.log(user);
    } catch (error) {
      const errorCode = error.errorCode;
      const errorMessage = error.message;
      console.log('Could not sign in');
      console.log(errorMessage);
    }
  };

  return { authInit };
};

export { auth, db, storage };
