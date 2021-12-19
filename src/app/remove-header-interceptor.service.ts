import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoveHeaderInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the headers without content-type
    let others = { ...req.headers };
    console.log(others);
    // As the request is immutable, clone the original
    // with the new headers
    const newReq = req.clone();

    // dispatch the new request with the new headers
    // without content-type
    return next.handle(newReq);
  }
}
