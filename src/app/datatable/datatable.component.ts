import { Component, OnInit ,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort ,MatPaginator} from '@angular/material';
export interface PeriodicElement{
  name:string;
  position:number;
  weight:number;
  symbol:string;

}

const ELEMENT_DATA: PeriodicElement[] = [

  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}

];







@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @ViewChild (MatSort) sort: MatSort;
  @ViewChild (MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['position', 'name', 'symbol','weight',];
  displayedColumnsData: string[] = ['position','name','symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

 logData(row){
   console.log(row,"checking row details")
 }

 applyFilter(filteredValue:string){
  this.dataSource.filter = filteredValue.trim().toLowerCase();
}

}
