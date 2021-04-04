import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {
  public isLoading = new Subject<boolean>();
  show() {
    console.log('show');
    this.isLoading.next(true);
  }
  hide() {
    console.log('hide');
    this.isLoading.next(false);
  }
}
