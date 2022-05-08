import { Calender } from './../calendario.model';
import { CalendarioService } from './../calendario.service';
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-calendario-create',
  templateUrl: './calendario-create.component.html',
  styleUrls: ['./calendario-create.component.css']
})
export class CalendarioCreateComponent implements OnInit {

  calender: Calender = {
      Curso: "",
      Turma: "",
      Turno: "",
      Disciplina: "",
      Professor: "",
      Data: ""
  }

  constructor(private calendarioService: CalendarioService, private router:Router) { }

  ngOnInit(): void {    
  }

  createCalendario(): void {
    this.calendarioService.create(this.calender).subscribe(() =>{
      this.calendarioService.showMessage('Agendado com Sucesso')
      this.router.navigate(['/calendario'])

    })
    
  }

  cancel(): void {
    this.router.navigate(['/calendario'])
  }
}


