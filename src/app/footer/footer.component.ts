import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  presentYear: any;

  constructor() { }

  ngOnInit(): void {
    this.presentYear = new Date().getFullYear();
    console.log(this.presentYear);
  }

  whatsapp() {
    var media = window.matchMedia("(max-width: 576px)");

    // If media query matches
    if (media.matches) {
      var url = 'https://wa.me/+919566615244/?text=';
    } else {
      var url = 'https://web.whatsapp.com/send?phone=+919566615244&text=';
    }

    //define the message text
    var text = 'Hey Specialist!, I need your help \n';

    //encode the text
    var encodedText = encodeURIComponent(text);

    console.log(url + encodedText);

    var finalUrl = url + encodedText;

    window.open(finalUrl,'_blank');
  }

}
