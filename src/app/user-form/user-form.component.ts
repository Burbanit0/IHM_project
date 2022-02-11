import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from '../model/message';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  message: Message = {};

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.message = {name:"", text:""}
  }

  onSubmit() {
    alert(this.message.name + "\n" + this.message.text)
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
