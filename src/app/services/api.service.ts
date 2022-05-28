import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<any>("https://gamer-town-9b863-default-rtdb.firebaseio.com/products.json")
  .pipe(map((res:any)=>{
  return res;
  }))
  }
}
