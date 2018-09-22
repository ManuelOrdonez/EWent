import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/js/canvasjs.min';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  countMale: number = 0;
  countFemale: number = 0;
  maxAge: number = 0;
  minAge: number = 0;
  maxAgeFem: number = 0;
  minAgeFem: number = 0;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    let usersList = this.db.list('/users');
    usersList.valueChanges(["child_added"]).subscribe((item) => {
      console.log(item);
      item.forEach(element => {
        let el: any = element;
        if (el.gender === "Male") {
          this.countMale++;
          if (+el.age >= 18) {
            this.maxAge++;
          } else {
            this.minAge++;
          }
        }

        if (el.gender === 'Female') {
          this.countFemale++;
          if (+el.age >= 18) {
            this.maxAgeFem++;
          } else {
            this.minAgeFem++;
          }
        }
      })

      let chartMale = new CanvasJS.Chart("chartGenderMale", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: `Estadisticas por Hombres, Cantidad: ${this.countMale}`
        },
        data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: [
            { y: this.maxAge, name: "Mayor a 18 años" },
            { y: this.minAge, name: "Menor a 18 años" }
          ]
        }]
      });
        
      let chartFemale = new CanvasJS.Chart("chartGenderFemale", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: `Estadisticas por Mujeres, Cantidad: ${this.countFemale}`
        },
        data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: [
            { y: this.maxAgeFem, name: "Mayor a 18 años" },
            { y: this.minAgeFem, name: "Menor a 18 años" }
          ]
        }]
      });

      chartMale.render();
      chartFemale.render();
    })
    
  }

}
