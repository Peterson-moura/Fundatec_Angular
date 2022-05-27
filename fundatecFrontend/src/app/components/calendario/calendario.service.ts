import { Calender } from "./calendario.model";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})


export class CalendarioService {

  calender!: Calender

  baseUrl = "http://localhost:3000/";
  baseUrl2 = "http://localhost:3000/calender/"

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
    const url = `${this.baseUrl2}/${id}`
 return this.http.get<Calender>(url)
  }

  updated(calender: Calender): Observable<Calender>{
    const url = `${this.baseUrl}/${calender.id}`
    return this.http.put<Calender>(url,calender)    
  }

  //deletando produto
  delete(id: string): Observable<Calender>{
   const url = `${this.baseUrl2}/${id}`
   console.log(url)
    return this.http.delete<Calender>(url)
  }
}
