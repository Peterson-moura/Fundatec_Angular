import { Calender } from "./calendario.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CalendarioService {
  baseUrl = "http://localhost:3001/calender";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(calender: Calender): Observable<Calender> {
    return this.http.post<Calender>(this.baseUrl, calender);
  }

  read(): Observable<Calender[]> {
    return this.http.get<Calender[]>(this.baseUrl);
  }

  readById(id:string | null):Observable<Calender>{
    const url = `${this.baseUrl}/${id}`
 return this.http.get<Calender>(url)
  }

  updated(calender: Calender): Observable<Calender>{
    const url = `${this.baseUrl}/${calender.id}`
    return this.http.put<Calender>(url,calender)    
  }
}
