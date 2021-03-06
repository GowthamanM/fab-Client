import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-war-choice',
  templateUrl: './war-choice.component.html',
  styleUrls: ['./war-choice.component.scss']
})
export class WarChoiceComponent implements OnInit {

  constructor(private route: Router,
    private userService:UserService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data=>{
      if(!(data.User.isSubscribed)){
        this.route.navigateByUrl('/not-subscribed');
      }
    });
    window.scrollTo(0, 0);
  }

  men() {
    console.log("Men");
    this.route.navigateByUrl('wardrobe/product?gender=male');
  }

  women() {
    console.log("Women");
    this.route.navigateByUrl('wardrobe/product?gender=female');
  }

  kids() {
    console.log("Kids");
    this.route.navigateByUrl('wardrobe/product?gender=kid');
  }
}
