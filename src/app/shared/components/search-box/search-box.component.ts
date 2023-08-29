import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy{



  private debouncer: Subject<string> = new Subject<string>();
  private debounceSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';



  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
   this.debounceSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }

  ngOnDestroy(): void {
   this.debounceSuscription?.unsubscribe();
  }


  emitvalue( value:string ):void {

  }

  onKeyPress( searchTerm: string) {
    this.debouncer.next( searchTerm );
  }




}