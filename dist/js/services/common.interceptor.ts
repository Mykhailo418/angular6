import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// we can use @Injectable() in order to inject other service here
export class CommonInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('CommonInterceptor: ', req);
        // editing http request, because req is immutable
        const copiedReq = req.clone({ params: req.params.append('interceptorParam', '789') })
        return next.handle(copiedReq);
    }
}
