import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log("interceptor called");
        // request = request.clone({ headers: request.headers.set('myAuthority', 'yyuutt') });
        // request = request.clone({ headers: request.headers.set('clientIdentity', 'xyz') });
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                // alert(data);
                // this.errorDialogService.openDialog(data);
                return throwError(error);
            }));
      
    }
}