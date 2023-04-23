import firebase from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

import firebaseConfig from 'firebase-config.js'

if (!firebaseConfig) throw new Error('Firebase config undefined')

if (firebase.getApps().length == 0) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = getFirestore()
