import { Calender } from "./calendario.model";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CalendarioService {
  calender!: Calender;

  //Local API get
  baseUrl = "http://localhost:3000/";
  //Local  API para deletar
  baseUrl2 = "http://localhost:3000/calender/delete";
  //Local API get
  baseUrl3 = "http://localhost:3000/calender";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  //Local onde aparece uma mensagem que leta ou salva
  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  //Salva calender
  create(calender: Calender): Observable<Calender> {
    return this.http.post<Calender>(this.baseUrl, calender);
  }

  //Lê a base de dados do calender
  read(): Observable<Calender[]> {
    return this.http.get<Calender[]>(this.baseUrl);
  }

  //Lê por Id
  readById(id: string): Observable<Calender> {
    console.log(this.calender._id);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Calender>(url);
  }

  //deletando produto por Id
  delete(id: string): Observable<Calender> {
    const url = `${this.baseUrl2}/${id}`;
    console.log(url);
    return this.http.delete<Calender>(url);
  }
}
