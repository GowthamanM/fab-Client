import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  selectedOption:any;
  gpayNumber:any;
  itemState = [
    'GPay',
    'Bank Transfer'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event:any){
    this.selectedOption = event.target.value;
  }

  onGpaySubmit(){
    alert(this.gpayNumber);
  }

}
