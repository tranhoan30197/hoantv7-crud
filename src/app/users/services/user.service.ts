// import { Injectable } from '@angular/core';
// import { User } from '../models/user.model';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   users: User[] = [
//     {
//       id: 1,
//       lastname: 'Hoan',
//       firstname: 'Tran',
//       age: 23
//     },
//     {
//       id: 2,
//       lastname: 'Vy',
//       firstname: 'Tran',
//       age: 22
//     }

//   ]
//   constructor() { }

//   getUserList(): Observable<User[]>{
//     return of(this.users);
//   }

//   getUserById(id:number): Observable<User>{
//     let user = this.users.find(item => item.id == id);
//     if(user){
//       return of(user);
//     }
//     return of(null);
//   }

//   addNewUser(userData: User): boolean{
//     let user = this.users.find(item => item.id == userData.id);
//     if(user){
//       return false
//     }

//     this.users.push(userData)
//     return true;
//   }

//   updateUser(userData: User): boolean {
//     let user = this.users.find(item => item.id == userData.id);
//     if(user) {
//       this.users.forEach(function(item, index) {
//         if(item.id == userData.id) {
//           item.id = userData.id;
//           item.lastname = userData.lastname;
//           item.firstname = userData.firstname;
//           item.age = userData.age
//         }
//       });
//       console.log('da update', this.users);
//       return true;
//     } 
//     return false;
//   }
// }
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) {

  }

  getUserList(): Observable<User[]> {
    return this.http
      .get<User[]>(`/api/users`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  getUserById(id: number): Observable<User> {
    return this.http
      .get<User>(`/api/users/${id}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  addNewUser(userData: User): Observable<User> {
    return this.http
      .post<User>(`/api/users`, userData)
      .pipe(catchError((error: any) => throwError(error.json())));
  }


  updateUser(userData: User): Observable<User>  {
    return this.http
      .put<User>(`/api/users/${userData.id}`, userData)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  searchUser(keyword: any): Observable<User[]> {
    return of(null);
  }
}
