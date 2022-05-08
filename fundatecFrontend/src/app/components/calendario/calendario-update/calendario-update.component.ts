import { Calender } from "./../calendario.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CalendarioService } from "./../calendario.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calendario-update",
  templateUrl: "./calendario-update.component.html",
  styleUrls: ["./calendario-update.component.css"],
})
export class CalendarioUpdateComponent implements OnInit {
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

  updateCalendario(): void {
    this.calendarioService.updated(this.calender).subscribe(() => {
      this.calendarioService.showMessage("Agenda alterada com sucesso!");
      this.router.navigate(["/calendario"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/calendario"]);
  }
}
