import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { TranslateService } from '@ngx-translate/core';
import { RailwayService } from 'src/app/services/railway/railway.service';
// import { login, loginResponse } from 'src/app/interface/authInterface';
// import { LoginResponse } from 'src/app/interface/authInterface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loginObj: any
  switchLanguage: string = 'en'
  browserLang: any;
  constructor(private modalService: NgbModal, public _translateService: TranslateService, private _railwayService: RailwayService) {

    _translateService.addLangs(['en', 'hi'])
    _translateService.setDefaultLang('en')

    this._railwayService.myBehaviorSubject.subscribe((res: any) => {
      _translateService.use(res)
    })

    const login = localStorage.getItem("loginUser")
    if (login != null) {
      this.loginObj = JSON.parse(login)
    }
  }

  changeLanguage(event: any) {
    const selectedLanguage = event.target.value;
    this._railwayService.myBehaviorSubject.next(selectedLanguage)
  }

  loginModal() {
    const modalRef = this.modalService.open(LoginComponent, {
      size: 'md',
      centered: true
    });
    modalRef.componentInstance.loginData.subscribe((res: any) => {
      if (res) {
        this.loginObj = res
      }
    })
  }

  LogOut() {
    localStorage.removeItem("loginUser")
    this.loginObj = undefined
  }

}
