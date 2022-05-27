import { CalendarioService } from './../calendario.service';
import { Calender } from './../calendario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-read',
  templateUrl: './calendario-read.component.html',
  styleUrls: ['./calendario-read.component.css']
})
export class CalendarioReadComponent implements OnInit {

  calendarios: Calender[] = [];
  displayedColumns = ['Id','Curso','Turma','Turno','Disciplina','Professor','Data','action']

  constructor(private calendarioService: CalendarioService) { }

  ngOnInit(): void {
    this.calendarioService.read().subscribe(calendarios=>{
      this.calendarios = calendarios
      console.log("Funcionou" + calendarios)
    })
  }

}
