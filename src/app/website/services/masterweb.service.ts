import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasterwebService {

  pkgDataarray:any=[];
  constructor(private _webGloSer:HttpClient) { }
  api_url_pkg='api/';
  
  //Get Pacakage
  pkg_data(){
    return this._webGloSer.get<any>( this.api_url_pkg +'pkgdata').pipe(map(res=>{
       //console.log(res.data);
       return res.data;
    }))
  }

 //Get Pricing

 pc_data(){
  return this._webGloSer.get<any>( this.api_url_pkg +'pricing').pipe(map(res=>{
     console.log(res.data);
     return res.data;
  }))
}

// get data From the testimonial 
 testi_moni(){
   return this._webGloSer.get<any>(this.api_url_pkg +'testi').pipe(map(res=>{
     console.log(res.data);
     return res.data;
   }))
 }

 //get data from aboutus table

 aboutus()
 {
    return this._webGloSer.get<any>(this.api_url_pkg +'aboutus').pipe(map(res=>{
        return res.data;
    }))
 }
 

 //get data from Home three Boxes table

 homethreee()
 {
    return this._webGloSer.get<any>(this.api_url_pkg +'homeThree').pipe(map(res=>{
        return res.data;
    }))
 }


}
