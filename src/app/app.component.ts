import { Component, OnInit } from '@angular/core';
import { UserService } from './user/services/user.service';
import { IResponse, IPerson } from './user/models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Users Angular';

  person: IPerson;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    this.userService
    .getPerson().
    subscribe((response: IResponse) => {
      const { data } = response;
      this.person = data;
    });
  }
}
