import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreComponentsModule } from './_components/core-components.module';
import { AuthInterceptor } from './_services/auth.interceptor';
import { ErrorInterceptor } from './_services/error.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreComponentsModule
  ],
  exports: [
    CoreComponentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})

export class CoreModule { }
