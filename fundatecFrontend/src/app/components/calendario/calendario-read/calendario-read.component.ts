import { CalendarioService } from './../calendario.service';
import { Calender } from './../calendario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-calendario-read',
  templateUrl: './calendario-read.component.html',
  styleUrls: ['./calendario-read.component.css']
})
export class CalendarioReadComponent implements OnInit {

  calender!: Calender
  calendarios: Calender[];
  displayedColumns = ['Id','Curso','Turma','Turno','Disciplina','Professor','Data','action']

  constructor(private calendarioService: CalendarioService, private router: Router,) { }

  ngOnInit(): void {
    this.calendarioService.read().subscribe((calendarios )=>{
      this.calendarios = calendarios
      //console.log(this.calender.id)
      for(var i=0; i<calendarios.length; i++){
        console.log(this.calendarios[i]._id)
      }
      console.log("Calendários")
      
     
    })
  }
  
    
    delete(): void {
      console.log("lixeira ")
     // console.log(this.calender._id)
      this.calendarioService.delete(this.calendarios[0]._id).subscribe(() => {
        this.calendarioService.showMessage("Agenda excluída com sucesso");
        this.router.navigate(["/calendario"]);
      
      });
    }

}


/*
ngOninit
this.calendarioService.read().subscribe(calendarios=>{
      this.calendarios = calendarios
      console.log("Funcionou" + calendarios)
    })
*/