import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.component.html',
  styleUrls: ['./codigo-qr.component.css']
})
export class CodigoQRComponent {

  public qrdata: string = null;

  constructor () {
    console.log('AppComponent running');
    this.qrdata = 'MyUrl de registro';
  }

  changeValue( newValue: string): void {
    this.qrdata = newValue;
  }
}
