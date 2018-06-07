import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

interface myData {
  response: Object;
}

@Injectable() //This service can also have some injectables comands
export class DataService {
    
  constructor(private http:HttpClient) {}
   v:string;
   client_id: string;
   client_secret: string;
   longlat: string;
   query: string;
   url: string;

   results:any;
   //Rxjs reactive javascript
   getData(search)
   {
     this.v = 'v=20180323';
    this.client_id = 'client_id=F2RPZRORI153NZRIJ0YDEQEGIAKW0WDTPXP0AGDDDEXPN4HX';
    this.client_secret = 'client_secret=05P3UNFOLXF2UMK04ZFKNNUEDN40VV55DJU1VZQFIL0NVHOH';
    this.longlat = 'll=-26.26781,27.85849';
	  this.query = 'query='+search; 
    this.url = "https://api.foursquare.com/v2/venues/search?"+this.v+"&"+this.client_id+"&"+this.client_secret+"&"+this.longlat+"&"+this.query; 
     return this.http.get<myData>(this.url);
   }

   getVenueImage(venueID)
   {

    this.v = 'v=20180323';
    this.client_id = 'client_id=F2RPZRORI153NZRIJ0YDEQEGIAKW0WDTPXP0AGDDDEXPN4HX';
    this.client_secret = 'client_secret=05P3UNFOLXF2UMK04ZFKNNUEDN40VV55DJU1VZQFIL0NVHOH';
    this.url = "https://api.foursquare.com/v2/venues/"+ venueID +"/photos/?"+this.v+"&"+this.client_id+"&"+this.client_secret;
     return this.http.get<myData>(this.url);
   }

}
