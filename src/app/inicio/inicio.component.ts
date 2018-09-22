import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  name: string = '';
  lastname: string = '';
  age: string = '';
  gender: string = '';
  email: string = '';

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSave(form) {
    console.log(form);
    let data = {
      name: this.name,
      lastname: this.lastname,
      age: this.age,
      gender: this.gender,
      email: this.email
    }

    let userRef = this.db.database.ref('/users');

    userRef.push(data, (err) => {
      if (err) return;
      console.log('se ha registrado correctamente');

      setTimeout(() => {
        window.location.href = 'https://youtube.com'
      }, 3000)
    });
  }

}
