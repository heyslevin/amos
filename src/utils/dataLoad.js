import { db } from './firebase';
import {
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore';

const loadShelfName = async (shelfId, setShelfName) => {
  const docRef = doc(db, 'shelves', shelfId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    setShelfName(docSnap.data().title);
  } else {
    console.log('no document');
  }
};

const loadShelves = async (setShelvesData, setFinishLoading) => {
  const q = query(collection(db, 'shelves'));
  const querySnapshot = await getDocs(q);
  let allShelvesData = querySnapshot.docs.map(doc => {
    let data = doc.data();
    let id = doc.id;
    return { id, ...data };
  });
  setShelvesData(allShelvesData);
  setFinishLoading(true);
};

const fetchShelfProducts = async (
  shelfId,
  setProductsInShelf,
  setEmptyProducts
) => {
  if (!shelfId) {
    return;
  }
  const productsRef = collection(db, 'product');
  const q = query(productsRef, where('shelves', 'array-contains', shelfId));
  const querySnapshot = await getDocs(q);
  const allProductData = querySnapshot.docs.map(doc => {
    return doc.data();
  });

  setProductsInShelf(allProductData);
  if (allProductData.length === 0) {
    setEmptyProducts(true);
  }
};

export { loadShelves, fetchShelfProducts, loadShelfName };
