import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBjFP7LihsrKjswi44jGF2Xa_Nhb3jK_20',
  authDomain: 'erp-wikilore.firebaseapp.com',
  databaseURL: 'https://erp-wikilore.firebaseio.com',
  projectId: 'erp-wikilore',
  storageBucket: 'erp-wikilore.appspot.com',
  messagingSenderId: '284366799914'
})

export const db = app.database()
