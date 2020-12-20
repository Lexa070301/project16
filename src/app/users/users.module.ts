import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { DepartmentPipe } from '../shared/pipes/department.pipe';
import { SearchPipe } from '../shared/pipes/search.pipe';
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [UsersComponent, UserEditComponent, UserListComponent, DepartmentPipe, SearchPipe],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule, FormsModule, NgxMaskModule],
})
export class UsersModule {}
