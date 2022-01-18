import { Component, OnInit } from '@angular/core';
import { RazorpayService } from '../services/razorpay.service';
import { WindowService } from '../services/window.service';
import { UserService } from '../services/user.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  userData: any = {};
  logData: any = {};
  afterSubscription: boolean = false;
  wallet: any;

  monthPlanData: any = {
    amount: '249',
    currency: 'INR',
    notes: {
      subscriptionType: 'monthly',
    },
  };

  basicPlanData: any = {
    amount: '595',
    currency: 'INR',
    notes: {
      subscriptionType: 'three-months',
    },
  };

  starterPlanData: any = {
    amount: '1149',
    currency: 'INR',
    notes: {
      subscriptionType: 'half-yearly',
    },
  };

  premiumPlanData: any = {
    amount: '2299',
    currency: 'INR',
    notes: {
      subscriptionType: 'yearly',
    },
  };

  options = {
    key: 'rzp_live_aBcnQt1siguMyA',
    order_id: '',
    name: 'Fabrae',
    description: 'Monthly Plan',
    image: 'https://fabrae.com/assets/images/Fabrae-t3.png',
    handler: (response: any) => {
      this.printLog(response);
    },
    prefill: {
      name: 'Gaurav Kumar',
      email: 'gaurav.kumar@example.com',
      contact: '+919876543210',
    },
    notes: {
      subscriptionType: '',
    },
    theme: {
      color: '#0F5860',
    },
  };

  rzp1: any;

  constructor(
    private razorpayService: RazorpayService,
    private windowService: WindowService,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
    window.scrollTo(0, 0);
  }

  monthPlan() {
    if(this.loginCheck()){
      this.razorpayService
      .basicPlanOrder(this.monthPlanData)
      .subscribe((data) => {
        // console.log(data);

        let temp = data;
        if (temp.message === 'payment order created') {
          this.options.order_id = temp.result.orderId;
          this.options.prefill.name = temp.result.prefill.name;
          this.options.prefill.email = temp.result.prefill.email;
          this.options.prefill.contact = temp.result.prefill.contact;
          this.options.notes.subscriptionType =
            this.monthPlanData.notes.subscriptionType;
        }
        this.checkout();
      });
    }else{
      this.router.navigateByUrl('/login');
    }
    
  }

  basicPlan() {
    if(this.loginCheck()){
      this.razorpayService
      .basicPlanOrder(this.basicPlanData)
      .subscribe((data) => {
        console.log(data);

        let temp = data;
        if (temp.message === 'payment order created') {
          this.options.order_id = temp.result.orderId;
          this.options.prefill.name = temp.result.prefill.name;
          this.options.prefill.email = temp.result.prefill.email;
          this.options.prefill.contact = temp.result.prefill.contact;
          this.options.notes.subscriptionType =
            this.basicPlanData.notes.subscriptionType;
        }
        this.checkout();
      });
    }else{
      this.router.navigateByUrl('/login');
    }
    
  }

  starterPlan() {
    if(this.loginCheck()){
      this.razorpayService
      .basicPlanOrder(this.starterPlanData)
      .subscribe((data) => {
        console.log(data);

        let temp = data;
        if (temp.message === 'payment order created') {
          this.options.order_id = temp.result.orderId;
          this.options.prefill.name = temp.result.prefill.name;
          this.options.prefill.email = temp.result.prefill.email;
          this.options.prefill.contact = temp.result.prefill.contact;
          this.options.description = '6 Months Plan';
          this.options.notes.subscriptionType =
            this.starterPlanData.notes.subscriptionType;
        }
        this.checkout();
      });
    }else{
      this.router.navigateByUrl('/login');
    }
    
  }

  premiumPlan() {
    if(this.loginCheck()){
      this.razorpayService
      .basicPlanOrder(this.premiumPlanData)
      .subscribe((data) => {
        console.log(data);

        let temp = data;
        if (temp.message === 'payment order created') {
          this.options.order_id = temp.result.orderId;
          this.options.prefill.name = temp.result.prefill.name;
          this.options.prefill.email = temp.result.prefill.email;
          this.options.description = 'One Year Plan';
          this.options.prefill.contact = temp.result.prefill.contact;
          this.options.notes.subscriptionType =
            this.premiumPlanData.notes.subscriptionType;
        }
        this.checkout();
      });
    }else{
      this.router.navigateByUrl('/login');
    }
   
  }

  checkout() {
    console.log(this.options);

    this.rzp1 = new this.windowService.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }

  printLog(response: any) {
    this.spinner.show();
    this.afterSubscription = true;
    let discount = Math.floor(Math.random() * (25 - 10 + 1) + 10);
    let editData = {
      wallet: 0,
    };
    this.userService.getUserData().subscribe((data) => {
      discount = discount + data.User.wallet;
      editData.wallet = discount;
      this.userService.userUpdate(editData).subscribe();
    });

    setTimeout(() => {
      this.spinner.hide().then(() => {
        this.router.navigateByUrl('/wardrobe');
      });
    }, 5000);
  }

  loginCheck(){
    if(this.authService.getAuthStatus()){
        return true;
    }else{
      return false;
    }
  }

  getUserDetails() {}
}
