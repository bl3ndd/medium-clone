import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from 'app/auth/store/actions/getCurrentUserAction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-blog';

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
  constructor(private store: Store) {}
}
