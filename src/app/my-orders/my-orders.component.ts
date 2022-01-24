import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  data:any = [];
  

  constructor(
    private orderService:OrderService,
    private userService:UserService,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data=>{
      this.orderService.getUserOrders(data.User._id).subscribe(data => {
        let result = JSON.parse(JSON.stringify(data));
        this.data = result.data;
        console.log(this.data);
        
      });
    });
  }

  goToTrackingPage(relatedTo:any){
    relatedTo = JSON.parse(JSON.stringify(relatedTo));
    if(relatedTo.hasOwnProperty('order_id')){
      window.open("https://fabtrack.shiprocket.co/tracking/order/"+relatedTo.order_id,"_blank");
    }else{
      this.router.navigateByUrl("/order-not-confirmed");
    }
  }
  
}
