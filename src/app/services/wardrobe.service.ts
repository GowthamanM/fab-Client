import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from './credential.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WardrobeService {

  wardrobeData:any = [];
  apiUrl:string;
  uid:any;
  data:any;
  // public data:any={};

  constructor(
    private http:HttpClient,
    private credentials:CredentialService,
    private authService:AuthService,
    private userService:UserService,
    private router:Router
  ) {
    this.apiUrl = this.credentials.apiUrl;
    this.authService.decodeToken().subscribe(data=>{
      this.uid = JSON.parse(JSON.stringify(data)).payload.id+"";
      console.log(this.uid);
      // this.getPreferenceByUid().subscribe(data=>{
      //   this.data = data;
      //   console.log(this.data);
        
      // });
    })
  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data=>{
      if(!(data.User.isSubscribed)){
        this.router.navigateByUrl('/not-subscribed');
      }

    });
  }




  getPreferenceByUid(id:any):Observable<any>{
    
    return this.http.get(this.apiUrl+"preference/user/"+id);
  }

  setData() {
    // this.wardrobeData = this.data.preference.data;
  }

  getData():any {
    // this.authService.decodeToken().subscribe(data=>{
    //   this.uid = JSON.parse(JSON.stringify(data)).payload.id+"";
    //   console.log(this.uid);
    //   this.getPreferenceByUid().subscribe(data=>{
    //     this.data = data;
    //     console.log('return');
    //     console.log(data);
        
    //     return data;
        
    //   });
    // })
    this.setData();
    return this.wardrobeData;
  }

  showData() {
    // console.log(this.data.preference.data);
    this.setData();
    // console.log(this.wardrobeData);
  }

  // getPr
}
