import { db } from './firebase';
import {
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  limit,
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

const loadShelfImageSamples = async (shelfId, setProductImages) => {
  //Query Images with shelfId
  const productsRef = collection(db, 'product');
  const q = query(
    productsRef,
    where('shelves', 'array-contains', shelfId),
    limit(3)
  );
  const querySnapshot = await getDocs(q);
  const allProductData = async () => {
    return querySnapshot.docs.map(doc => {
      return doc.data();
    });
  };

  const allProjectData = await allProductData();
  const onlyImages = allProjectData.map(product => {
    return product.image;
  });

  setProductImages(onlyImages);
  //Load 3 images
  //Return array of 3 image links
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

export {
  loadShelves,
  fetchShelfProducts,
  loadShelfName,
  loadShelfImageSamples,
};
