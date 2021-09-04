import { Component, OnInit } from '@angular/core';
import { RazorpayService } from '../services/razorpay.service';
import { WindowService } from '../services/window.service';
import {UserService} from '../services/user.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  
  userData:any={};
  logData:any={};
  afterSubscription:boolean = false;

  basicPlanData :any = {
    "amount" : "449",
    "currency" : "INR",
    "notes" : {
        "subscriptionType" : "monthly"
    }
}

starterPlanData :any = {
  "amount" : "1999",
  "currency" : "INR",
  "notes" : {
      "subscriptionType" : "half-yearly"
  }
}

premiumPlanData :any = {
  "amount" : "2999",
  "currency" : "INR",
  "notes" : {
      "subscriptionType" : "yearly"
  }
}

options = { 
  key: 'rzp_test_COSZxgtxNusnuj', 
  order_id: '', 
  name: 'Fabrae', 
  description: 'Monthly Test Plan', 
  image: 'https://fabrae.com/assets/images/Fabrae-t3.png', 
  handler:(response:any)=>{
    this.printLog(response);
  }, 
  prefill: { 
    name: 'Gaurav Kumar', 
    email: 'gaurav.kumar@example.com', 
    contact: '+919876543210', 
  }, 
  notes: { 
    subscriptionType:''
  }, 
  theme: { 
    color: '#0F5860', 
  }, 
}; 

  rzp1:any;


  constructor(
    private razorpayService:RazorpayService,
    private windowService:WindowService,
    private userService:UserService,
    private spinner: NgxSpinnerService,
    private router:Router
  ) { }

  ngOnInit(): void {
    // this.getUserDetails();
    window.scrollTo(0, 0);
    
  }

  basicPlan(){
     this.razorpayService.basicPlanOrder(this.basicPlanData).subscribe(data=>{
      console.log(data);
      
      let temp = data;
      if(temp.message === "payment order created"){
        this.options.order_id = temp.result.orderId;
        this.options.prefill.name = temp.result.prefill.name;
        this.options.prefill.email = temp.result.prefill.email;
        this.options.prefill.contact = temp.result.prefill.contact;
        this.options.notes.subscriptionType = this.basicPlanData.notes.subscriptionType;
      }
      this.checkout();
      
    });
  }

  starterPlan(){
    this.razorpayService.basicPlanOrder(this.basicPlanData).subscribe(data=>{
     console.log(data);
     
     let temp = data;
     if(temp.message === "payment order created"){
       this.options.order_id = temp.result.orderId;
       this.options.prefill.name = temp.result.prefill.name;
       this.options.prefill.email = temp.result.prefill.email;
       this.options.prefill.contact = temp.result.prefill.contact;
       this.options.notes.subscriptionType = this.basicPlanData.notes.subscriptionType;
     }
     this.checkout();
     
   });
 }

 premiumPlan(){
  this.razorpayService.basicPlanOrder(this.basicPlanData).subscribe(data=>{
   console.log(data);
   
   let temp = data;
   if(temp.message === "payment order created"){
     this.options.order_id = temp.result.orderId;
     this.options.prefill.name = temp.result.prefill.name;
     this.options.prefill.email = temp.result.prefill.email;
     this.options.prefill.contact = temp.result.prefill.contact;
     this.options.notes.subscriptionType = this.basicPlanData.notes.subscriptionType;
   }
   this.checkout();
   
 });
}


  checkout(){
    console.log(this.options);
    
      this.rzp1 = new this.windowService.nativeWindow.Razorpay(this.options); 
      this.rzp1.open(); 
  }

  printLog(response:any){
    this.afterSubscription = true;
    let discount = Math.floor(Math.random() * (25 - 10 + 1) + 10);
    let editData = {
      "wallet":0
    };
    editData.wallet = discount;
    this.userService.userUpdate(editData).subscribe();
    setInterval(()=>{
      console.log('entering');
      
      this.userService.getUserData().subscribe(data=>{
        console.log(data);
        if(data.isSubscribed == true){
          this.router.navigateByUrl('/wardrobe');
        }
      });
    },5000);



  }

  getUserDetails(){
    this.userService.getUserData().subscribe(data=>{
      console.log(data);
    })
  }

}
