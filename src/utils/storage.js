import { storage } from './firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const uploadFromBlobAsync = async function ({ blobUrl, name }) {
  if (!blobUrl || !name) return null;

  try {
    const blob = await fetch(blobUrl).then(r => r.blob());
    const rootProductsRef = ref(storage, 'products');
    const imageRef = ref(rootProductsRef, name);
    return uploadBytes(imageRef, blob).then(snapshot => {
      console.log('Uploaded blob!');
    });

    // const snapshot = firebase.storage().ref().child(name).put(blob);
    // return await snapshot.ref.getDownloadURL();
  } catch (error) {
    throw error;
  }
};

export { uploadFromBlobAsync };
