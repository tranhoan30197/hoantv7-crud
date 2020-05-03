import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// pages
import * as fromPages from './containers';

// Components

import {StoreModule} from "@ngrx/store";
import { UserReducer, UserEffects} from "./store";
import {EffectsModule} from "@ngrx/effects";
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    ...fromPages.containers
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,

    StoreModule.forFeature('users', UserReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
