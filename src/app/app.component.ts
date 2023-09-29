import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cbrom_test';
  result: any;

  // ngOnInit() {
  //   this.getData();
  // }
  constructor() {
    this.getData();
  }
  
  async getData() {
    try {
      const response = await axios.get("https://efe59aaa282cbc.lhr.life");
      console.log(response.data)
      this.result = response.data;
    }
    catch(error){
      console.error(error);
    }
  }
  
}
