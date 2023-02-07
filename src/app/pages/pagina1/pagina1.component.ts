import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Alex'
  segundos: number = 0
  timerSubscription!: Subscription

  constructor() {
    console.log('Constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges');
  }
  ngDoCheck(): void {
    console.log('docheck');
  }
  ngAfterContentInit(): void {
    console.log('aftercontinit');
  }
  ngAfterContentChecked(): void {
    console.log('aftercontchek');
  }
  ngAfterViewInit(): void {
    console.log('afterviewinit');
  }
  ngAfterViewChecked(): void {
    console.log('afterviewchecked');
  }
  ngOnDestroy(): void {
    console.log('ondestroy');
    this.timerSubscription.unsubscribe();
  }
  ngOnInit(): void {
    console.log('On Init');
    this.timerSubscription = interval(1000).subscribe(i => {
      this.segundos = i;
    }
    )
  }


  guardar() {

  }
}
