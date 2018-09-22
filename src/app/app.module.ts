import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admin/admin.component';
import { CodigoQRComponent } from './codigo-qr/codigo-qr.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'qr', component: CodigoQRComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    AdminComponent,
    CodigoQRComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QRCodeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
