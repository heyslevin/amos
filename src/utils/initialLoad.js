import { firestore, auth } from './firebase';

const initialDataLoad = async () => {
  //   const collectionRef = firestore.collection(db, 'players');
  //   const snapshot = await firestore.getDocs(collectionRef);
  //   let playersArray = snapshot.docs.map(doc => {
  //     let docData = doc.data();
  //     return { name: docData.name, time: docData.time };
  //   });
  //   return playersArray;
};

export { initialDataLoad };
