import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const addNewShelf = async data => {
  try {
    console.log(data);
    const docRef = await addDoc(collection(db, 'shelves'), data);
    console.log(docRef.id);
  } catch (error) {
    console.error(error);
  }
};

const addNewProduct = async (data, shelf) => {
  try {
    const docRef = await addDoc(collection(db, shelf), data);
    console.log(docRef.id);
  } catch (error) {
    console.error(error);
  }
};

export { addNewShelf, addNewProduct };
