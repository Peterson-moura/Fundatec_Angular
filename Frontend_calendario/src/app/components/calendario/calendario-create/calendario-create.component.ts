import { Calender } from "../calendario.model";
import { CalendarioService } from "../calendario.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-calendario-create",
  templateUrl: "./calendario-create.component.html",
  styleUrls: ["./calendario-create.component.css"],
})
export class CalendarioCreateComponent implements OnInit {
  //Leva para o banco com informações
  calender: Calender = {
    _id: "",
    Curso: "",
    Turma: "",
    Turno: "",
    Disciplina: "",
    Professor: "",
    Data: "",
  };

  //Buscar infos sobre o construtor
  constructor(
    private calendarioService: CalendarioService,
    private router: Router
  ) {}

  //buscar infos
  ngOnInit(): void {}

  //Crea o calendário e subscreve com a informação inserida,
  //envia para o front a mensagem de agendado com sucesso
  createCalendario(): void {
    this.calendarioService.create(this.calender).subscribe(() => {
      this.calendarioService.showMessage("Agendado com Sucesso");
      this.router.navigate(["/calendario"]);
    });
  }

  //retorna para página de resumo
  cancel(): void {
    this.router.navigate(["/calendario"]);
  }
}
