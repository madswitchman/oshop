import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  categories$: Observable<any[]>;
 
  constructor(private db: AngularFireDatabase) { }
 
getCategories () {
    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges();
  }
}