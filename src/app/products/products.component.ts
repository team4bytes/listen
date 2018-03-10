import { Component, OnInit } from '@angular/core';
import { Product } from './products';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // // product:Product={
  // //   id:1,
  // //   name:'pen'
  // // };

  // selectedProduct: Product;
 
  products: Product[];
 
  constructor(private productService: ProductService) { }
 
  ngOnInit() {
    this.getProducts();
  }
 
  // onSelect(product: Product): void {
  //   this.selectedProduct = product;
  // }
 
  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.addProduct({ name } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }
 
  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }

}
