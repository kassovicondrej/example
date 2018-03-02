import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';


@Component({
    selector: 'app-primeng-table',
    templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {

    studentlist: any[];
    cols: any[];

    constructor(
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.studentlist = [{
            StudentId: 1000230,
            Dept: 'Computer Science',
            PassoutYear: 2017
        }, {
            StudentId: 3444434,
            Dept: 'Computer Science2',
            PassoutYear: 2018
        }];

        this.cols = [{
            field: 'StudentId',
            header: 'Student Code'
        }, {
            field: 'Dept',
            header: 'Department'
        }, {
            field: 'PassoutYear',
            header: 'Passout Year'
        }];
    }

    nieco() {
        console.log('Klikol som');
    }

}

