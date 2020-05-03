import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { Store, select } from '@ngrx/store';
import { UserState, loadUserList, selectUserList, selectUserErrors } from '../../store';

@Component({
  selector: 'fis-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {
  
  userList$: Observable<User[]>;
  errors$: Observable<any>;

  constructor(private userStore: Store<UserState>) { }

  ngOnChanges(changes: SimpleChanges): void {
    //this.onGetUserList();
  }

  ngOnInit(): void {
    this.userStore.dispatch(loadUserList());
    this.userList$ = this.userStore.pipe(select(selectUserList));
    this.errors$ = this.userStore.pipe(select(selectUserErrors));
  }

  // onGetUserList(){
  //   this.userList$ = this.userService.getUserList();
  // }
}
