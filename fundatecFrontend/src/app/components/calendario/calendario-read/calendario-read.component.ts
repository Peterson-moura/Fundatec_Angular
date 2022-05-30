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
      console.log(calendarios)
    })
  }

  //com id fixo deleta
  delete(): void {
    this.calendarioService.delete("629559a8343a272853b17e84").subscribe(() => {
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