import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';


@Component({
  selector: 'app-primeng-basic',
  templateUrl: './primeng.basic.component.html',
  styleUrls: ['./primeng.basic.component.scss']
})

export class PrimengBasicComponent implements OnInit {
  data: any[];
  dataToChart: any;
  selectedItems: any[];
  cols: any[];
  msgs: Message[] = [];
  val1: number;
  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
  filteredBrands: any[];

  brand: string;


  constructor(
    private activatedRoute: ActivatedRoute) {
    this.dataToChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }



ngOnInit() {
  this.data = [];
  this.selectedItems = [];
  this.cols = [
    { field: 'Col1', header: 'Col1', sortable: true },
    { field: 'Col2', header: 'Col2', sortable: true },
    { field: 'Col3', header: 'Col3', sortable: true },
  ];
  for (let i = 0; i < 5; i++) {
    let group: Number = 0;

    if (i > 24) { group = 1; }
    this.data.push({
      Col1: 'Value' + i, Col2: Math.round((Math.random() * 1000000000) % 1000000),
      Col3: Math.round((Math.random() * 1000000000) % 1000000)
    });
  }

}

showSuccess() {
  this.msgs = [];
  this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
}

filterBrands(event) {
  this.filteredBrands = [];
  for (let i = 0; i < this.brands.length; i++) {
    const brand = this.brands[i];
    if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
      this.filteredBrands.push(brand);
    }
  }
}

}

