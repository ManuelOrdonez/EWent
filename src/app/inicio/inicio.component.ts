import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import swal from 'sweetalert'

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

      swal({
        title: "Gracias por tu informacion",
        text: "Serás redirigido a la url de regalo",
        icon: "success"
      }).then(() => {
        window.location.href = 'https://www.youtube.com/watch?v=YXnjy5YlDwk'
      })
    });
  }

}
