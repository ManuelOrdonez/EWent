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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';

const routes: Routes = [
  { path: 'register', component: InicioComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'qr', component: CodigoQRComponent },
  { path: '', component: AdminComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

var config = {
  apiKey: "AIzaSyBUxDOcUZn-lx2ta5K36L_1pP2Xp2p7Kb0",
  authDomain: "ewent-9cc7c.firebaseapp.com",
  databaseURL: "https://ewent-9cc7c.firebaseio.com",
  projectId: "ewent-9cc7c",
  storageBucket: "ewent-9cc7c.appspot.com",
  messagingSenderId: "752559934795"
};

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
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(config),
  ],
  providers: [
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
