import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

const signInUser = async (
  formData,
  setIsLoading,
  setSignInSuccess,
  setSignInError
) => {
  const auth = getAuth();
  setIsLoading(true);
  return signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then(() => {
      setSignInSuccess(true);
      setIsLoading(false);

      return auth.currentUser.uid;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      setIsLoading(false);
      setSignInError(true);
    });
};

const signUpUser = async (formData, setIsLoading, setSignUpSuccess) => {
  const auth = getAuth();
  setIsLoading(true);

  return createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then(userCredentials => {
      //Signed in
      const user = userCredentials.user;
      console.log('success! signed up');

      //Add user to collection
      setDoc(doc(db, 'users', user.uid), {
        name: formData.name,
        email: formData.email,
        uid: auth.currentUser.uid,
      });

      setSignUpSuccess(true);
      setIsLoading(false);
      return auth.currentUser.uid;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      setIsLoading(false);
      setSignUpSuccess(false);
    });

  //Create new user document
};

export { signUpUser, signInUser };
