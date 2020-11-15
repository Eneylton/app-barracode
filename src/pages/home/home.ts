import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  options: BarcodeScanner;
  encodeText:string="";
  encodeData: any={};
  scanerData: any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  
  scan(){

    this.barcodeScanner.scan().then((data)=>{

      this.scanerData = data;

    }, (err) => {

      console.log("error: ", err );
      
    });
  }
  
  encode(){
    
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeText).then((data)=>{
      
      this.scanerData = data ;
      
    }, (err) => {
      
      console.log("error: ", err );


    });

  }

}
