import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner-service.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  constructor(
    private loadingSpinnerService: LoadingSpinnerService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.listenForLoading();
  }
  listenForLoading() {
    this.loadingSpinnerService.isLoading.subscribe((loading: boolean) => {
      console.log('isLoading =' + loading);
      if (loading) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
