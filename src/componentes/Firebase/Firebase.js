// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore,collection, query, where, getDocs, getDoc,doc,addDoc} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUEuS7YpEyPgq0MfpDHikix1TFNfwTdYE",
  authDomain: "pryecto-bien-al-sur.firebaseapp.com",
  projectId: "pryecto-bien-al-sur",
  storageBucket: "pryecto-bien-al-sur.appspot.com",
  messagingSenderId: "459762975840",
  appId: "1:459762975840:web:eddf255e34a4f443fb2f05",
  measurementId: "G-Z0DPMMXGKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


//---- obetengo todos los productos con una funcion con export--------
export async function getAllBebidas(){
  const  miColec = collection(db,"productos");
  const productosSnap = await getDocs(miColec);

  const result = productosSnap.docs.map( item =>{
    return {...item.data(), id:item.id}
  })
  return result;
  
}

//------obtengo los datos filtrados por categorias en una funcion con export---- 
export async function getAllBebidasFrom(category){
  const miColec = collection(db, "productos");
  const myquery = query(miColec, where ("product", "==", category));


  const productosSnap = await getDocs(myquery);

  const result = productosSnap.docs.map( item=>{
    return {...item.data(), id : item.id}
  });

  return result;
}


//---- funlcion para obtener un solo item. 


export async function getBebida(id){
  const miColec= collection(db, "productos");
  const docRef = doc(miColec, id);

  const resultDoc= await getDoc(docRef);
  return { ...resultDoc.data(), id: resultDoc.id };

}

// ---- funcion para enviar orden del carrito a firebase.---- 


export async function sendOrder(orderData){
  const miColec=collection(db, "orders");
  const orderDoc = await addDoc(miColec, orderData);
  console.log(orderDoc.id);
  return orderDoc.id;
}
