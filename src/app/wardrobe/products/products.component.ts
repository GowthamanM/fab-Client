import { Component, OnInit } from '@angular/core';
import { CredentialService } from 'src/app/services/credential.service';
import { WardrobeService } from 'src/app/services/wardrobe.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data:any = [];
  userTrue: boolean = false;

  constructor(private wardrobeService: WardrobeService, private credentialService: CredentialService) { }

  ngOnInit(): void {
    this.wardrobeService.showData();
    this.data = this.wardrobeService.getData();
    console.log(this.data);
    this.userTrue = this.credentialService.userLoggedIn;
    window.scrollTo(0, 0);
  }

}
