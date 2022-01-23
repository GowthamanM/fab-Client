import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CountryStateApiService } from 'src/app/services/country-state-api.service';
import { OrderService } from 'src/app/services/order.service';
import { RazorpayService } from 'src/app/services/razorpay.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  data:any = [];
  subTotal:any = 0;
  shippingCharges:any = 0;
  total = 0;
  formState:boolean = true;
  states:any=[];
  cities:any = [];

  options = {
    key: 'rzp_live_aBcnQt1siguMyA',
    order_id: '',
    name: 'Fabrae',
    description: 'Monthly Plan',
    image: 'https://fabrae.com/assets/images/Fabrae-t3.png',
    handler: (response: any) => {
      this.updateOrderStatus(response);
    },
    prefill: {
      name: 'Gaurav Kumar',
      email: 'gaurav.kumar@example.com',
      contact: '+919876543210',
    },
    notes: {
      subscriptionType: ''
    },
    theme: {
      color: '#0F5860',
    },
  };

  rzp1: any;

  public prdQuantity = 1;

  constructor(
    private userService:UserService,
    private fb: FormBuilder,
    private storageService:StorageService,
    private route:ActivatedRoute,
    private stateApi:CountryStateApiService,
    private razorPayService:RazorpayService,
    private windowService: WindowService,
    private orderService:OrderService
  ) {
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        if(this.isJson(params.order)) {
          this.data = JSON.parse(params.order);
          for(let i=0;i<this.data.length;i++){

            this.subTotal += parseInt(this.data[i].price);
          }
          if(this.data.length > 0){
            this.shippingCharges = 0;
          }
          this.total= this.subTotal + this.shippingCharges;
        }
      });
      
      this.stateApi.getStates().subscribe(data=>{
        let stateData = JSON.parse(JSON.stringify(data));
        if(!stateData.error){
          this.states = stateData.data.states;     
        }
      });
  }

  getCities() {
    this.deliveryForm.controls['city'].enable();
    this.stateApi.getCities(this.deliveryForm.controls['state'].value).subscribe(data=>{
      let cityData = JSON.parse(JSON.stringify(data));
      this.cities = cityData.data;
    });
  }

  isJson(orderParam:any) : boolean { 
    try {
      JSON.parse(orderParam);
    } catch (e) {
      return false;
    }
    return true;
  }

  removeProduct(product: any) {

  }

  deliveryForm = this.fb.group({
    name: ['',[
      Validators.required
    ]],
    email: ['',[
      Validators.required,
      Validators.email
    ]],
    address: ['',[
      Validators.required
    ]],
    city: [{value: null, disabled: true},[
      Validators.required,
    ]],
    state: ['',[
      Validators.required
    ]],
    pincode: ['',[
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6),
      Validators.pattern("^[0-9]*$")
    ]],
    phone: ['',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern("^[0-9]*$")
    ]],
  });

  get fab() {
    return this.deliveryForm.controls;
  }

  showData() {
    if(this.deliveryForm.valid) {
      this.formState = true;
    }
    if(this.deliveryForm.value.pincode.length == 6) {
      console.log(true);  
    }
    console.log(this.deliveryForm.value); 
  }

  paynow() {
    let orderPlanData: any = {
      amount: this.total + "",
      currency: 'INR',
      notes: {
        subscriptionType: 'monthly'
      },
    };
    this.razorPayService.basicPlanOrder(orderPlanData).subscribe(data=>{
      console.log(data);
      let temp = data;
        if (temp.message === 'payment order created') {
          this.options.order_id = temp.result.orderId;
          this.options.prefill.name = temp.result.prefill.name;
          this.options.prefill.email = temp.result.prefill.email;
          this.options.description = 'Product Plan';
          this.options.prefill.contact = temp.result.prefill.contact;
          this.options.notes.subscriptionType =
            orderPlanData.notes.subscriptionType;
        }
        this.checkout();
    });
  }

  checkout() {
    console.log(this.options);
    this.rzp1 = new this.windowService.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
    this.updateOrderStatus("asf");
  }

  updateOrderStatus(response:any){
    let orderData :any= {};
    orderData.relatedTo = {};
    this.userService.getUserData().subscribe(data=>{
      console.log(data);
      orderData.userId = data.User._id;
      orderData.relatedTo.mailId = data.User.email;
      orderData.products = this.data;
      orderData.amount = this.total;
      orderData.address = this.deliveryForm.value;
      orderData.relatedTo.status = 200;
      console.log(orderData);
      this.orderService.saveOrder(orderData).subscribe(data => {
        console.log(data);
      });
    });
    
    
  }

}
