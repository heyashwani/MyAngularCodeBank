import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.css']
})
export class RazorpayComponent implements OnInit {

  options = {
    "key": "rzp_test_yPitVqMAxNLbYp", // Enter the Key ID generated from the Dashboard
    "amount": "5000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://www.logolynx.com/images/logolynx/68/687fcffb64eade5ea6dee8b56d2066bd.jpeg",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

  constructor(private userService:Service2Service,private service1:Service1Service) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

  rzp1;
  pay(){
    this.rzp1 = new this.userService.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
    
  }

}
