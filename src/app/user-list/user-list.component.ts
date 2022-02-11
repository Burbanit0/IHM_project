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
  selectedUser?:User;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.findAll().subscribe(data => {this.users = data})
  }

  onSelected(user:User) : void{
    this.selectedUser = user; 
  }
}
