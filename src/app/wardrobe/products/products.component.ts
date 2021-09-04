import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CredentialService } from 'src/app/services/credential.service';
import { WardrobeService } from 'src/app/services/wardrobe.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  maleData:any = [];
  data:any=[];
  femaleData:any=[];
  kidData:any=[];
  gender:any;
  userTrue: boolean = false;
  uid:any;

  constructor(private wardrobeService: WardrobeService, private credentialService: CredentialService,
    private authService:AuthService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.wardrobeService.showData();
    this.uid = this.authService.getUid();
    this.route.queryParams.subscribe(params => {

      this.gender = params['gender']+""; 
      console.log(params['gender']);
      
    });
    this.wardrobeService.getPreferenceByUid(this.uid).subscribe(data=>{
      console.log(data);
      
      let temp = data;
      this.maleData = temp.preference.maleData;
      this.femaleData = temp.preference.femaleData;
      this.kidData = temp.preference.kidData;
      this.setData();
    })
    // this.data = this.wardrobeService.getData();
    // console.log(this.data);
    this.userTrue = this.authService.getAuthStatus();
    window.scrollTo(0, 0);
  }

  openProduct(id:any,data:any){
    console.log(data);
    
    this.credentialService.productData = data;
    this.router.navigateByUrl('/wardrobe/product/'+id);
  }

  setData(){
    console.log('gender'+this.gender);
    
    if(this.gender == "male"){
      this.data = this.maleData;
      console.log(this.data);
      
    }else if(this.gender == "female"){
      this.data = this.femaleData;
    }else{
      this.data = this.kidData;
    }
  }

}
