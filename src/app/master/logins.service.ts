import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {
 
  // Not used any place
  private apiRoot = "api";
  // This is array define
  arrData=[];

  constructor( private _http:HttpClient) { }

// Get ALL
public getContacts(): Observable<Student>{
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append( "Content-Type", "application/json");
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    
    return this._http.get<any>('api/student',{headers: headers}).pipe(map(res => {
         //console.log(res.data);
         return  this.arrData = res.data;
    }))
}

  // Get Single
  public getContacts_single(u1,p1): Observable<Student>{
    let username=u1;
    let password=p1;
   
    //console.log(username + password);
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append( "Content-Type", "application/json");
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    
    return this._http.get<any>('api/user/'+ password +'/usershow/'+ username).pipe(map(res => {
         //console.log(res.status);
        if(res.status=='Error')
        {
          return  this.arrData = res.status;
        }
        else {
          return  this.arrData = res.data;
        }
        
    }))
}

}
