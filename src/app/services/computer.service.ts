import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Computer from '../models/computer';
import cardError from '../models/cardError';
import cardInside from '../models/cardInside';
import cardOutside from '../models/cardOutside';
import cardSave from '../models/cardSave';
import cardDone from '../models/Done';


@Injectable({
  providedIn: 'root'
})

export class ComputerService {
  updateSortAdminMateriTopicLesson(materiSlug: any, state: any) {
    throw new Error('Method not implemented.');
  }

  private dbPath = '/computers';

  ComputersRef: AngularFirestoreCollection<Computer> = null;

  constructor(private db: AngularFirestore) {
    this.ComputersRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Computer> {
    return this.ComputersRef;
  }

  create(Computer: Computer): any {
    return this.ComputersRef.add({ ...Computer });
  }

  update(id: string, data: any): Promise<void> {
    return this.ComputersRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.ComputersRef.doc(id).delete();
  }
}
 
@Injectable({
  providedIn: 'root'
})
export class CardInsideService {

  private dbPath = '/cardInside';

  cardInsidesRef: AngularFirestoreCollection<cardInside> = null;

  constructor(private db: AngularFirestore) {
    this.cardInsidesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Computer> {
    return this.cardInsidesRef;
  }

  create(CardError: Computer): any {
    return this.cardInsidesRef.add({ ...CardError });
  }

  update(id: string, data: any): Promise<void> {
    return this.cardInsidesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.cardInsidesRef.doc(id).delete();
  }
}
@Injectable({
  providedIn: 'root'
})
export class CardOutsideService {

  private dbPath = '/cardOutside';

  cardOutsidesRef: AngularFirestoreCollection<cardOutside> = null;

  constructor(private db: AngularFirestore) {
    this.cardOutsidesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Computer> {
    return this.cardOutsidesRef;
  }

  create( CardOutside: Computer): any {
    return this.cardOutsidesRef.add({ ...CardOutside });
  }

  update(id: string, data: any): Promise<void> {
    return this.cardOutsidesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.cardOutsidesRef.doc(id).delete();
  }
}
@Injectable({
  providedIn: 'root'
})
export class CardDoneService {

  private dbPath = '/cardDone';

  cardDonesRef: AngularFirestoreCollection<cardDone> = null;

  constructor(private db: AngularFirestore) {
    this.cardDonesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Computer> {
    return this.cardDonesRef;
  }

  create(CardDone: Computer): any {
    return this.cardDonesRef.add({ ...CardDone });
  }

  update(id: string, data: any): Promise<void> {
    return this.cardDonesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.cardDonesRef.doc(id).delete();
  }
}

@Injectable({
  providedIn: 'root'
})
export class CardSaveService {
  currenComputer:any;
  private dbPath = '/cardSave';

  CardSavesRef: AngularFirestoreCollection<cardSave> = null;

  constructor(private db: AngularFirestore) {
    this.CardSavesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Computer> {
    return this.CardSavesRef;
  }

  create(CardSave: Computer): any {
    return this.CardSavesRef.add({ ...CardSave });
  }

  update(id: string, data: any): Promise<void> {
    return this.CardSavesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.CardSavesRef.doc(id).delete();
  }
}
