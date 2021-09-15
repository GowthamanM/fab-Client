import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../services/user.service';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  walletAmount:any;
  selectedOption:any;
  gpayNumber:any;
  AccNo='';
  ifscCode='';
  branch='';
  errormessage='';
  itemState = [
    'GPay',
    'Bank Transfer'
  ];
  walletData:any={};
  successMessage = '';

  constructor(
    private userService:UserService,
    private walletService:WalletService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data=>{
      this.walletAmount = data.User.wallet;
    })
  }

  onChange(event:any){
    this.selectedOption = event.target.value;
  }

  onGpaySubmit(){
    var phoneno = /^\d{10}$/;
    if(this.gpayNumber.match(phoneno)){
      if(this.walletAmount > 0){
        this.walletData.userId = this.authService.getUid();
        this.walletData.wallet = this.walletAmount;
        this.walletData.payload = {};
        this.walletData.payload.paymentType = this.itemState[0];
        this.walletData.payload.gpayNumber = this.gpayNumber;
        this.userService.userUpdate(JSON.parse(JSON.stringify({"wallet":0}))).subscribe();
        this.walletService.saveWalletRequest(this.walletData).subscribe(data=>{
          console.log(data);
          this.errormessage = '';
          this.successMessage = 'Wallet Amount Will be Credited with 2-3 Working Days'
        });
        
      }else{
        this.errormessage = 'Your Wallet amount should be greater than ₹0';
      }
    }else{
      this.errormessage = 'Enter a valid Phone Number'
    }
  }

  onBankSubmit(){
    if(this.ifscCode != '' && this.AccNo != '' && this.branch != ''){
      if(this.walletAmount > 0){
        this.walletData.userId = this.authService.getUid();
        this.walletData.wallet = this.walletAmount;
        this.walletData.payload = {};
        this.walletData.payload.paymentType = this.itemState[1];
        this.walletData.payload.accNo = this.AccNo;
        this.walletData.payload.ifscCode = this.ifscCode;
        this.walletData.payload.branch = this.branch;
        this.userService.userUpdate(JSON.parse(JSON.stringify({"wallet":0}))).subscribe();
        this.walletService.saveWalletRequest(this.walletData).subscribe(data=>{
          console.log(data);
          this.errormessage = '';
          this.successMessage = 'Wallet Amount Will be Credited with 2-3 Working Days';
          setTimeout(() => {
            this.router.navigateByUrl('/wardrobe')
          }, 2000);
        });
      }else{
        this.errormessage = 'Your Wallet amount should be greater than ₹0';
      }
    }else{
      this.errormessage = 'Enter All the feilds';
    }
  }

}
