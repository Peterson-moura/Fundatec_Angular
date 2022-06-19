import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-calendario-crud',
  templateUrl: './calendario-crud.component.html',
  styleUrls: ['./calendario-crud.component.css']
})
export class CalendarioCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //navega para a página create
  //tras a lista com os dados do banco
  navgateToCalenderCreate(): void{
    this.router.navigate(['/calendario/create'])
  }

}
