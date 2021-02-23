import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class BoardUserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(id: number){
    this.router.navigate(['user-details', id]);
  }

  updateUser(id: number){
    this.router.navigate(['user-update', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }
}
