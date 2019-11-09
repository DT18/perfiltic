import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class EcommerceComponent implements OnInit {
    private collapsed = true;
    orderFinished = false;
 
    @ViewChild('productsC')
    productsC: ProductsComponent;
 
 
    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }
 
    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }
 
    reset() {
        this.orderFinished = false;
        this.productsC.reset();
    }
}