import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/common/api.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  dataSet;
  getDataFromServer() {
    let url = 'http://dummy.restapiexample.com/api/v1/employees';
    this.apiService.userService.getUser(url).subscribe(data => {
      this.dataSet = data['data'];
    })
  }



  ngOnInit() {
    this.getDataFromServer()
  }

}
