import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
	dataProducts: object[];
	constructor(private productsService: ProductsService) {}

	ngOnInit() {
		this.dataProducts = this.productsService.getData();
	}

}