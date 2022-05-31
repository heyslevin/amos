import { db } from './firebase';
import {
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore';

const loadShelves = async setShelves => {
  const q = query(collection(db, 'shelves'));
  const querySnapshot = await getDocs(q);
  let allData = querySnapshot.docs.map(doc => {
    return doc.data();
  });
  console.log('here come the data');
  console.log(allData);
  setShelves(allData);
};

export { loadShelves };
