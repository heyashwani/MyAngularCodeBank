import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-push-notification-firebase',
  templateUrl: './push-notification-firebase.component.html',
  styleUrls: ['./push-notification-firebase.component.css']
})
export class PushNotificationFirebaseComponent implements OnInit {

  paymentHandler:any = null;

  constructor(private service1:Service1Service) { 
    this.service1.HeaderDisplay.emit(true);
  }


  

  ngOnInit() {

    this.invokeStripe();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LTmdcSAEe22zrnvyOQRaedDOdALFQFDDRUFIlCt9vAerYa0pHCmLmiawLuNdSYbfy7Xs1WwlnmtiAODIVHyOyQe00NTTHtQ3T',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      name: 'Ashwani Kumar',
      description: 'Buying a Hot Coffee',
      amount: amount * 100
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LTmdcSAEe22zrnvyOQRaedDOdALFQFDDRUFIlCt9vAerYa0pHCmLmiawLuNdSYbfy7Xs1WwlnmtiAODIVHyOyQe00NTTHtQ3T',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

}
