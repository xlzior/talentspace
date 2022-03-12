import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

async function getDocs(db, col) {
  const queryCol = collection(db, col)
  const querySnapshot = await getDocs(queryCol)
  const queryList = querySnapshot.docs.map(doc => doc.data())
  return queryList
}

//addCompany(db, doc),
//where doc = {"id": "c1",
        //     "data":{
        //        "description":"Company 1 is a state-of-the-art tech firm that...",
        //        "assignments":[
        //            {"__datatype__":"documentReference","value":"assignments/c1a1"}],
        //        "name":"Company 1",
        //        "__collections__":{}
        //        }
        //     }
async function addCompany(db, doc) {
  await setDoc(doc(db, "companies", doc.id), doc.data)
}

async function addAssignment(db, doc) {
  await setDoc(doc(db, "assignments", doc.id), doc.data)
}