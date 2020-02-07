import { Component, OnInit } from '@angular/core';
import { MasterwebService } from '../services/masterweb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p_t:any;
  p_img:any;
  p_con:any;
  section: any = {};
  section_pricing: any = {};
  section_testimonial: any = {};
  section_aboutus: any = {};
  section_homethree: any = {};
  // I have added variable for the package color
  pckage_name_color:any; 
  constructor(private webGlobalser:MasterwebService) { }

  ngOnInit() {

    // Get Package name
    this.webGlobalser.pkg_data().subscribe((data=>{
      this.section =data;
      //console.log(this.section[0]);
    }))

    //Get Pricing 
    this.webGlobalser.pc_data().subscribe((data=>{
      this.section_pricing =data;
      //console.log(this.section_pricing);

      console.log(this.section_pricing);
    }))

    // get testimonials result

    this.webGlobalser.testi_moni().subscribe((data=>{
        this.section_testimonial=data;
    }))

    // get aboutus data

    this.webGlobalser.aboutus().subscribe((data=>{
          this.section_aboutus=data;
          
    }))

    this.webGlobalser.homethreee().subscribe((res=>{
        this.section_homethree=res;
        
    }))
    
  }
  getColorPc(color_name:any){
    if(color_name=='1')
    {
      return 'danger';
    }
    else
    { return 'teal';
    }
 }
  
  
}
