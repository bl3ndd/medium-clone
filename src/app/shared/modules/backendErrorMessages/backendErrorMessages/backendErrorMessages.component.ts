import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'app/shared/types/backendErrors.interface';

@Component({
  selector: 'app-backend-errors',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;
  // alias for props for better readability

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const messages = this.backendErrorsProps[name].join(', ');
      return `${name} ${messages}`;
    });
  }

  initializeValues() {}
}
