import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';


@Component({
    selector: 'app-primeng-galleria',
    templateUrl: './galleria.component.html'
})

export class GalleriaComponent implements OnInit {

    images: any[];

    constructor(
        private activatedRoute: ActivatedRoute) {
    }



    ngOnInit() {
        this.images = [];
        this.images.push({
            source: 'assets/images/galleria/galleria1.jpg', alt: 'Description for Image 1',
            title: 'Title 1'
        });
        this.images.push({
            source: 'assets/images/galleria/galleria2.jpg', alt: 'Description for Image 2',
            title: 'Title 2'
        });
        this.images.push({
            source: 'assets/images/galleria/galleria3.jpg', alt: 'Description for Image 3',
            title: 'Title 3'
        });
        this.images.push({
            source: 'assets/images/galleria/galleria4.jpg', alt: 'Description for Image 4',
            title: 'Title 4'
        });
    }

}

