import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  baseUri: string = 'https://tienda-discos.herokuapp.com/api';
  headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }

    //Método para agregar un nuevo producto
    agregarDisco(data):Observable<any> {
      let url = `${this.baseUri}/create`;
      return this.http.post(url,data).pipe(catchError(this.errorMgmt));
    }
  
    //Método para obtener todos los productos
    getDiscos() {
      return this.http.get(`${this.baseUri}/`);
    }
  
    //Método para obtener el documento de un producto por medio de su ID
    getDisco(id):Observable<any> {
      let url = `${this.baseUri}/producto/${id}`;
      return this.http.get(url, {headers: this.headers}).pipe(map((res : Response) => {
        return res || {};
      }),catchError(this.errorMgmt));
    }
  
    //Método para actualizar la información de un producto
    updateDisco(id,data):Observable<any> {
      let url = `${this.baseUri}/update/${id}`;
      return this.http.put(url, data, {headers: this.headers}).pipe(catchError(this.errorMgmt));
    }
  
    //Método para eliminar un producto
    deleteDisco(id): Observable<any> {
      let url = `${this.baseUri}/delete/${id}`;
      return this.http.delete(url, {headers: this.headers}).pipe(catchError(this.errorMgmt));
    }
  
    //Manejador de errores
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        //Obtenemos el error del lado del cliente
        errorMessage = error.error.message;
      }else {
        //Obtenemos el error del lado del servidor
        errorMessage = `Código de error: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => {
        return errorMessage;
      })
    }
}
