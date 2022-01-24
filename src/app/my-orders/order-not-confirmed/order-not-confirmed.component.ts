import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-not-confirmed',
  templateUrl: './order-not-confirmed.component.html',
  styleUrls: ['./order-not-confirmed.component.scss']
})
export class OrderNotConfirmedComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  goToOrders(){
    this.router.navigateByUrl("/my-orders");
  }

}
