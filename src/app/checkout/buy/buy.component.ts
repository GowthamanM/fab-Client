import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CountryStateApiService } from 'src/app/services/country-state-api.service';
import { OrderService } from 'src/app/services/order.service';
import { RazorpayService } from 'src/app/services/razorpay.service';
import { ShipRocketService } from 'src/app/services/ship-rocket.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  data: any = [];
  subTotal: any = 0;
  shippingCharges: any = 0;
  total = 0;
  formState: boolean = true;
  states: any = [];
  cities: any = [];
  weight: any = 0;
  orderResponse: any = {};
  orderId: any;

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

  shipRocketData = {
    "order_id": "",
    "order_date": "2022-01-20",
    "pickup_location": "Office",
    "channel_id": "",
    "comment": "",
    "reseller_name": "",
    "company_name": "",
    "billing_customer_name": "Gowthaman M",
    "billing_last_name": "",
    "billing_address": "4/192 Q,Sri Annai Iyammal Nagar",
    "billing_address_2": "",
    "billing_isd_code": "",
    "billing_city": "",
    "billing_pincode": "641016",
    "billing_state": "Tamil Nadu",
    "billing_country": "India",
    "billing_email": "gowthamankyo12@gmail.com",
    "billing_phone": "9566615244",
    "billing_alternate_phone": "",
    "shipping_is_billing": true,
    "shipping_customer_name": "",
    "shipping_last_name": "",
    "shipping_address": "",
    "shipping_address_2": "",
    "shipping_city": "",
    "shipping_pincode": "",
    "shipping_country": "",
    "shipping_state": "",
    "shipping_email": "",
    "shipping_phone": "",
    "order_items": [],
    "payment_method": "prepaid",
    "shipping_charges": "0",
    "giftwrap_charges": "",
    "transaction_charges": "",
    "total_discount": "",
    "sub_total": "18",
    "length": "",
    "breadth": "",
    "height": "",
    "weight": "",
    "ewaybill_no": "",
    "customer_gstin": "",
    "invoice_number": "",
    "order_type": ""
  };

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private stateApi: CountryStateApiService,
    private razorPayService: RazorpayService,
    private windowService: WindowService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router,
    private shipRocketService: ShipRocketService,
    private zone: NgZone
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (this.isJson(params.order)) {
        this.data = JSON.parse(params.order);
        if (params.cart) {
          console.log(true);
        } else {
          console.log(false);
        }
        for (let i = 0; i < this.data.length; i++) {
          console.log("enter");

          console.log(this.data[i]);
          this.weight += parseFloat(this.data[i].relatedTo.weight);
          this.subTotal += parseInt(this.data[i].price);
        }
        if (this.data.length > 0) {
          this.shippingCharges = 0;
        }
        this.total = this.subTotal + this.shippingCharges;
      }
    });

    this.stateApi.getStates().subscribe(data => {
      let stateData = JSON.parse(JSON.stringify(data));
      if (!stateData.error) {
        this.states = stateData.data.states;
      }
    });
  }

  getCities() {
    this.deliveryForm.controls['city'].enable();
    this.stateApi.getCities(this.deliveryForm.controls['state'].value).subscribe(data => {
      let cityData = JSON.parse(JSON.stringify(data));
      this.cities = cityData.data;
    });
  }

  isJson(orderParam: any): boolean {
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
    name: ['', [
      Validators.required
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    address: ['', [
      Validators.required
    ]],
    city: [{ value: null, disabled: true }, [
      Validators.required,
    ]],
    state: ['', [
      Validators.required
    ]],
    pincode: ['', [
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6),
      Validators.pattern("^[0-9]*$")
    ]],
    phone: ['', [
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
    if (this.deliveryForm.valid) {
      this.formState = true;
    }
    if (this.deliveryForm.value.pincode.length == 6) {
      console.log(true);
    }
    console.log(this.deliveryForm.value);
  }

  paynow() {
    this.authService.authCheck().subscribe(data => {
      let response = JSON.parse(JSON.stringify(data));
      if (response.status) {

        let orderPlanData: any = {
          amount: this.total + "",
          currency: 'INR',
          notes: {
            subscriptionType: 'monthly'
          },
        };
        this.razorPayService.basicPlanOrder(orderPlanData).subscribe(data => {
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
      } else {
        this.authService.logoutSession();
        this.router.navigateByUrl("/login");
      }
    })
  }


  setShipRocketData() {

    this.orderId = (Math.floor(1000000000 + Math.random() * 9000000000) + "");
    this.shipRocketData.order_id = this.orderId;

    let today = new Date();
    let orderDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    this.shipRocketData.order_date = orderDate;

    this.shipRocketData.billing_address = this.deliveryForm.value.address;
    this.shipRocketData.billing_city = this.deliveryForm.value.city;
    this.shipRocketData.billing_country = "India";
    this.shipRocketData.billing_customer_name = this.deliveryForm.value.name;
    this.shipRocketData.billing_email = this.deliveryForm.value.email;
    this.shipRocketData.billing_state = this.deliveryForm.value.state;
    this.shipRocketData.billing_pincode = this.deliveryForm.value.pincode;
    this.shipRocketData.billing_phone = this.deliveryForm.value.phone;

    let orders: any = [];
    for (let i = 0; i < this.data.length; i++) {
      let product: any = {};
      product.name = this.data[i].productName;
      product.sku = this.data[i].relatedTo.sku;
      product.units = "1";
      product.selling_price = this.data[i].price;
      product.discount = "";
      product.tax = "";
      product.hsn = "";
      orders.push(product);
    }

    this.shipRocketData.order_items = orders;

    this.shipRocketData.sub_total = this.subTotal;
    this.shipRocketData.length = "35";
    this.shipRocketData.height = "2";
    this.shipRocketData.breadth = "27";
    this.shipRocketData.weight = this.weight;

    console.log(this.shipRocketData);


  }

  checkout() {
    console.log(this.options);
    this.rzp1 = new this.windowService.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }

  /**
   * First Message
   * @param response 
   */
  updateOrderStatus(response: any) {
    this.shipRocketService.generateOAuthToken().subscribe(data => {
      this.setShipRocketData();
      let response = JSON.parse(JSON.stringify(data));
      this.shipRocketService.saveOrder(response.token, this.shipRocketData).subscribe(data => {
        this.orderResponse = JSON.parse(JSON.stringify(data));

        console.log("orderRespose");
        console.log(this.orderResponse);

        let orderData: any = {};
        orderData.relatedTo = {};
        this.userService.getUserData().subscribe(data => {
          let userData = JSON.parse(JSON.stringify(data));
          console.log(data);
          orderData.userId = userData.User._id;
          orderData.relatedTo.mailId = userData.User.email;
          orderData.products = this.data;
          orderData.amount = this.total;
          orderData.address = this.deliveryForm.value;
          orderData.relatedTo.status = 300;
          orderData.relatedTo.ship_rocket_order_id = this.orderResponse.order_id;
          orderData.relatedTo.ship_rocket_shipment_id = this.orderResponse.shipment_id;
          orderData.relatedTo.order_id = this.orderId;
          console.log(orderData);
          this.route.queryParams.subscribe(params => {
            if (params.cart) {
              console.log("entering");

              let userEditData: any = {};
              userEditData.relatedTo = {};
              userEditData.relatedTo.cart = [];
              this.userService.userUpdate(userEditData).subscribe(data => {
                console.log(data);
              });
            }
          });
          this.orderService.saveOrder(orderData).subscribe(data => {
            /**
             * This method is used when external window is opened and after success action, navigateUrl won't work outer ngZone
             */
            this.zone.run(() => {
              this.router.navigate(['/my-orders']);
            });
          });

        });


      })
    });
  }

}
