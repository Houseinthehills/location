import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  search: string = "";
  venueID: string = "";
  
  venues =[]
  images = [];
  constructor(private dataServices : DataService) {}

  ngOnInit() {}

  getVenue()
  {
    this.dataServices.getData(this.search).subscribe((data:any) =>
      {
          this.venues =  data.response.venues;
          
     });
  }

  getImage(e)
  {
    this.dataServices.getVenueImage(e).subscribe((data:any)=>{
      this.images =  data.response;
      console.log(this.images);
      
    });
  }

}
