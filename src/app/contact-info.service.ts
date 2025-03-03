import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
    address: Signal<string> = signal('204, Hespelar Road, Cambridge, ON, Canada');
    phone:  Signal<string> = signal('+12269387633');
    email: Signal<string> = signal('hetvi.patel.developer@gmail.com');
}
