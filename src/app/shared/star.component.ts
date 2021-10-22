
import { Component, OnChanges,Input ,EventEmitter, Output} from '@angular/core';
import { ProductListComponent } from '../products/product-list.component';


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls: ['./star.component.css']


}) 


export class StarComponent implements OnChanges {
    @Input() rating : number=0 ;
    cropWidth : number = 75 ; 
    @Output() ratingClicked : EventEmitter <string>= 
                    new EventEmitter<string>() ;

ngOnChanges():void{
    this.cropWidth = this.rating * 15; 
}
onClick():void{
    this.ratingClicked.emit(`you clicked  ${this.rating} rating that have ${this.cropWidth}px width `)


}

    
}
