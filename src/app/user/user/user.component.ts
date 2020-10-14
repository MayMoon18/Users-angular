import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { UserService } from '../services/user.service';
import { IPerson } from '../models/person';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {
  @Input() person: IPerson;

  name: string;
  gender: string;
  profession: string;
  knowFor: string;

  constructor(private userService: UserService) { }

  ngOnChanges() {
    if (this.person) {
      const { name, gender, profession, knowFor } = this.person;
      this.name = `${name.first} ${name.last}`;
      this.gender = gender;
      this.profession = profession;
      this.knowFor = knowFor;
    }
  }
}
