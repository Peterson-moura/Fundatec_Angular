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

  navgateToCalenderCreate(): void{
    this.router.navigate(['/calendario/create'])
  }

}
