import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from "@app/modules/manage-board/pages/board/board.component";



const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBoardRoutingModule { }
