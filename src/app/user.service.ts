import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { AppUser } from './models/app-user';
import { AngularFirestore} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
    .then(() => console.log('user saved successfully'))
    .catch((reason: any) => console.log('user save failed', reason));
  }

  get(uid: string): Observable<any> {
    return this.db.object('/users/' + uid).valueChanges() as Observable<AppUser>;
 }
}
