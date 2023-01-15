import { Injectable } from '@angular/core';
import { Firestore, addDoc, query, where, collectionData, getDocs,doc,updateDoc} from "@angular/fire/firestore";
import { collection } from "@firebase/firestore";
import { Observable } from 'rxjs';
import { Lot } from '../commons/interfaces/lot.interface';

@Injectable({
  providedIn: 'root',
})
export class LotsService {

  constructor(private firestore: Firestore) { }

  addlot(lot: Lot) {
    const lotRef = collection(this.firestore, 'lots');
    return addDoc(lotRef, lot);
  }

  getLot(filter = '') {
    const lotRef = collection(this.firestore, 'lots');
    let q = query(lotRef);
    if (filter) {
      q = query(lotRef, where('name', '==', filter));
    }
    return collectionData(q) as unknown as Observable<Lot[]>;
  }

  async updateLot(lot: Lot) {
    const lotRef = collection(this.firestore, 'lost');
    let q = query(lotRef, where('id', '==', lot.id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.firestore, 'lots', document.id);
      await updateDoc(docRef, { ...lot});
    });
  };
  
}
