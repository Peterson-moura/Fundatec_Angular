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
    });
  }

  //função deletar na Página read, atualmente deleta objeto na posição 0 do array
  delete(row_id:string): void {    
      this.calendarioService.delete(row_id).subscribe(() => {
      this.calendarioService.showMessage("Agenda excluída com sucesso");
      this.router.navigate(["/calendario"]);
      
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
