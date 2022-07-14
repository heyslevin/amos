import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const addNewShelf = async (
  data,
  setError,
  setSuccessForm,
  setIsLoading,
  setShelfId
) => {
  try {
    console.log(data);
    const docRef = await addDoc(collection(db, 'shelves'), data);
    console.log(docRef.id);
    setSuccessForm(true);
    setIsLoading(false);
    setShelfId(docRef.id);
  } catch (error) {
    console.error(error);
    setError(true);
    setIsLoading(false);
  }
};

const addNewProduct = async (data, shelfId) => {
  try {
    console.log('Data sent:');
    console.log(data);
    console.log(shelfId);
    const docRef = await addDoc(collection(db, 'product'), data);
    console.log(docRef.id);
  } catch (error) {
    console.error(error);
  }
};

export { addNewShelf, addNewProduct };
