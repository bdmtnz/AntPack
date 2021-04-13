import { ApiService } from 'src/app/proof/services/api.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {

  displayedColumns: string[] = ['name', 'email', 'city', 'company'];
  dataSource!: MatTableDataSource<{name:string, email:string, city:string, company:string}>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService:ApiService) {
    this.dataSource = new MatTableDataSource();
    this.apiService.get().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data.map( (x:any) => {
          return {name: x.name, email: x.email, city: x.address.city, company: x.company.name};
        }));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
