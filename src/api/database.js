import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, getDoc, doc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: "AIzaSyBzgxlq-pOuo4juvoTX7xRbV7FjvEj5sL0",
  authDomain: "talentspace-12caa.firebaseapp.com",
  projectId: "talentspace-12caa",
  storageBucket: "talentspace-12caa.appspot.com",
  messagingSenderId: "563261973451",
  appId: "1:563261973451:web:c39905ba01bb98803f0c4e",
  measurementId: "G-ZLFFTRP8EX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getDocuments(col) {
  const queryCol = collection(db, col)
  const querySnapshot = await getDocs(queryCol)
  const queryList = querySnapshot.docs.map(doc => ({data: doc.data(), id: doc.id}))

  return queryList
}

export function getAssignments() {
  return getDocuments("assignments")
}

export function getCompanies() {
  return getDocuments("companies")
}

export function getSubmissions() {
  return getDocuments("submissions")
}

export async function getAssignment(assignmentID) {
  const docSnap = await getDoc(doc(db, "assignments", assignmentID)).then(doc => doc.data())
  const colSnapshot = await getDocs(collection(db, "assignments", assignmentID, "questions"))
  const queryList = colSnapshot.docs.map(doc => doc.data())
  docSnap.questions = queryList
  return docSnap
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