import { Component, OnInit } from '@angular/core';
import { Product } from './products';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';


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
  msg:string;
 
  constructor(private productService: ProductService, private route:ActivatedRoute) { }
 
  ngOnInit() {
    let searchKey = this.route.snapshot.paramMap.get('key');
    this.productService.searchProducts(searchKey).subscribe(
      products => {
        this.products = products;
        if(this.products.length == 0){
          console.log(this.products);
          this.msg = 'Nothing found';
        }
      },
      
    );
    // this.getProducts();
  }
 
  // onSelect(product: Product): void {
  //   this.selectedProduct = product;
  // }
 
  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
        console.log(this.products);
  }

  
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.productService.addProduct({ name } as Product)
  //     .subscribe(product => {
  //       this.products.push(product);
  //     });
  // }
 
  // delete(product: Product): void {
  //   this.products = this.products.filter(h => h !== product);
  //   this.productService.deleteProduct(product).subscribe();
  // }

}
