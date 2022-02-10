import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UsersService} from '../../../services/users.service';

export interface DialogData {
  description: string;
  name: string;
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public usersService: UsersService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addUser(){
    console.log(this.data);
    const body = {
      name: this.data.name,
      description: this.data.description
    };
    this.usersService.addUser(body).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
