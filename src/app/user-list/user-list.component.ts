import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../_services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] | undefined;
  currentUser:User = {};
  currentIndex = -1;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.findAll().subscribe(data => {
        this.users = data
      })
  }

  setActiveUser(user: User, index:number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }
}
