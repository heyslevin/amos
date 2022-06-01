import { db } from './firebase';
import {
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore';

const loadShelves = async setShelvesData => {
  const q = query(collection(db, 'shelves'));
  const querySnapshot = await getDocs(q);
  let allShelvesData = querySnapshot.docs.map(doc => {
    let data = doc.data();
    let id = doc.id;
    return { id, ...data };
  });
  setShelvesData(allShelvesData);
};

const fetchShelfProducts = async (shelfId, setProductsInShelf) => {
  if (!shelfId) {
    return;
  }
  const productsRef = collection(db, 'product');
  const q = query(productsRef, where('shelves', 'array-contains', shelfId));
  const querySnapshot = await getDocs(q);
  const allProductData = querySnapshot.docs.map(doc => {
    return doc.data();
  });
  console.log('allProductData');
  console.log(allProductData);
  setProductsInShelf(allProductData);
};

export { loadShelves, fetchShelfProducts };
