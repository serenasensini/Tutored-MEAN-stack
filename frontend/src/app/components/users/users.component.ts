import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserData, UsersService} from '../../services/users.service';
import {MatDialog} from '@angular/material/dialog';
import {NewUserComponent} from './new-user/new-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'action'];
  dataSource: MatTableDataSource<UserData>;
  users: UserData[];

  name: string;
  description: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  // STEP 4: import servizio per la gestione delle richieste
  constructor(public usersService: UsersService, public dialog: MatDialog) {
  }


  // STEP 5: recupero richieste e popolamento datasource della tabella
  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe((users: UserData[]) => {
        // @ts-ignore
        console.log(users.data);
        // @ts-ignore
        this.users = users.data;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
      });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  addUser() {
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '250px',
      data: {name: this.name, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // tslint:disable-next-line:typedef
  deleteUser(user_id: any) {
    console.log(user_id);
    this.usersService.deleteUser(user_id).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
