import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserComponent } from './../../pages/user/user.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MatButtonModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgZorroAntdModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    DashboardComponent,
    IconsComponent,
    UserComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
