import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { IProduct } from './products';
import { Subscription } from 'rxjs';

@Component({
     
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']
 


})

export class  ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string = "product list";
    imageWidth  =50;
    imageMargin = 2 ;
    showImage=false;
    errorMessage='';
    sub!: Subscription;
    
    constructor(private productServise:ProductService){  
    }

    private _listFilter : string = ''; 
    get listFilter():string{
      return this._listFilter ;
    }
    set listFilter(value:string){
      this._listFilter = value;
      console.log('this setter :', value);
      this.filterProducts = this.performFilter(value);
    }

    
    filterProducts : IProduct[] =[]; 
    products : IProduct[] =  [];
      performFilter(filterBy :string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
          product.productName.toLocaleLowerCase().includes(filterBy));

      }
      toggleImage():void {
        this.showImage =  !this.showImage ;
      }
      ngOnInit ()  {
          this.sub= this.productServise.getProducts().subscribe({
          next: product => {
            this.products=product;
            this.filterProducts=this.products; 
          },
          error:err=> this.errorMessage=err
        });
        
        
      }
      ngOnDestroy(){
        this.sub.unsubscribe();
      }
      onRatingClicked(message:string):void{
        this.pageTitle= "product list :" +message;
      }
    
}