import { CalendarioService } from "./../calendario.service";
import { Calender } from "./../calendario.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-calendario-read",
  templateUrl: "./calendario-read.component.html",
  styleUrls: ["./calendario-read.component.css"],
})
export class CalendarioReadComponent implements OnInit {
  calender!: Calender;
  calendarios: Calender[];
  displayedColumns = [
    "Id",
    "Curso",
    "Turma",
    "Turno",
    "Disciplina",
    "Professor",
    "Data",
    "action",
  ];

  constructor(
    private calendarioService: CalendarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.calendarioService.read().subscribe((calendarios) => {
      this.calendarios = calendarios;
      //console.log(this.calender.id)
      for (var i = 0; i < calendarios.length; i++) {
        console.log(this.calendarios[i]._id);
      }
      console.log("Calendários");
    });
  }

  //result = array.map(person => ({ value: person.id, text: person.name }));

  delete(): void {
    console.log("lixeira ");
    this.calendarioService.delete(this.calendarios[0]._id).subscribe(() => {  //ver como puxar cada id
      console.log(this.calendarios[1]);
      this.calendarioService.showMessage("Agenda excluída com sucesso");
      //  this.router.navigate(["/calendario"]);
    });
  }
}

/*
 delete(): void {
      console.log("lixeira ")
     // console.log(this.calender._id)
      this.calendarioService.delete(this.calendarios[0]._id).subscribe(() => { //ver como puxar cada id
        this.calendarioService.showMessage("Agenda excluída com sucesso");
      //  this.router.navigate(["/calendario"]);
      
      });
    }
    
         let calendarioPercorrido = this.calendarios.find(function(calendarios) {
      return calendarios._id === "id";
    });
    console.log(calendarioPercorrido)
*/

/*
ngOninit
this.calendarioService.read().subscribe(calendarios=>{
      this.calendarios = calendarios
      console.log("Funcionou" + calendarios)
    })
*/
