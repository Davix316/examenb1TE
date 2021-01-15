// dashboard.page.ts
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';

interface MessageData {
  Name: string;
  Message: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  userEmail: string;
  messageList = [];
  messageData: MessageData;
  messageForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private firebaseService: FirebaseService,
    public fb: FormBuilder
  ) { 
    this.messageData = {} as MessageData;
  }

  ngOnInit() {

    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })

    this.messageForm = this.fb.group({
      Name: this.userEmail,
      Message: ['', [Validators.required]]
    })

    this.firebaseService.read_messages().subscribe(data => {

      this.messageList = data.map(e => {
        return {
          id: e.payload.doc.id,
          Name: e.payload.doc.data()['Name'],
          Message: e.payload.doc.data()['Message'],
        };
      })

    });

  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }

  CreateRecord() {
    this.firebaseService.create_message(this.messageForm.value)
      .then(resp => {
        //Reset form
        console.log(this.userEmail);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
