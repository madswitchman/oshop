import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges()
    .pipe(map( action => action
      .map(a => {
        const key = a.payload.key;
        const data = a.payload.val();
          return  {key, data};
      })));
  }
 
  get(productId) {
    console.log(productId);
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}

