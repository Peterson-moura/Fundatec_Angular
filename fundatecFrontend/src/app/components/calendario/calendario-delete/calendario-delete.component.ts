import { Calender } from "./../calendario.model";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CalendarioService } from "./../calendario.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calendario-delete",
  templateUrl: "./calendario-delete.component.html",
  styleUrls: ["./calendario-delete.component.css"],
})
export class CalendarioDeleteComponent implements OnInit {
  calender!: Calender;

  constructor(
    private calendarioService: CalendarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.calendarioService.readById(id).subscribe((calender) => {
      this.calender = calender;
    });
  }

  //com id fixo deleta
  delete(): void {
    this.calendarioService.delete("id").subscribe(() => {
      this.calendarioService.showMessage("Agenda excluída com sucesso");
      this.router.navigate(["/calendario"]);
    });
  }

  //cancelar ação
  cancel(): void {
    this.router.navigate(["/calendario"]);
  }
}
