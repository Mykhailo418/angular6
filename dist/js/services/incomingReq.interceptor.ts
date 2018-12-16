import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// we can use @Injectable() in order to inject other service here
export class IncomingRequestInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
          tap((event) => {
            console.log('IncomingRequestInterceptor: ', event);
          })
        );
    }
}
