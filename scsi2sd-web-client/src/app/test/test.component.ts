import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  public msg : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public async testUSB() {
    this.msg = '';

    if (!navigator.usb) {
      this.msg = "Browser does not support WebUSB";
    }
    else {
      navigator.usb.requestDevice({filters: [{ vendorId: 0x16d0, productId: 0x0bd4}]})
        .then(device => {
          this.msg = `It worked, device name = ${device.productName}`
        })
        .catch(() => {
          this.msg = "It failed :-(";
        });
    }
  }
  /*
  public testHID() {
    this.msg = '';

    // Cast to type from @types/w3c-web-usb to ensure the USB types are defined
    let nav = <Navigator>navigator;

    nav.hid.requestDevice({filters: [{ vendorId: 0x16d0, productId: 0x0bd4}]})
      .then(device => {
        this.msg = `It worked, device name = ${device.productName}`
      })
      .catch(() => {
        this.msg = "It failed :-(";
      });
  }
  */
}
