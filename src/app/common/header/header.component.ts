import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { TranslateService } from '@ngx-translate/core';
import { RailwayService } from 'src/app/services/railway/railway.service';
import { isPlatformBrowser } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
// import { login, loginResponse } from 'src/app/interface/authInterface';
// import { LoginResponse } from 'src/app/interface/authInterface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginObj: any
  switchLanguage: string = 'en'
  browserLang: any;
  constructor(private modalService: NgbModal,
    public _translateService: TranslateService,
    private _railwayService: RailwayService,
    private _spinnerService: NgxSpinnerService,
    @Inject(PLATFORM_ID) private platformId: Object) {

    _translateService.addLangs(['en', 'hi'])
    _translateService.setDefaultLang('en')

    this._railwayService.myBehaviorSubject.subscribe((res: any) => {
      _translateService.use(res)
    })


  }

  ngOnInit(): void {
    // this is working on while i run the project on server side. 
    // So always try to access localstorage data on ng onint isplatformbrowser 
    if (isPlatformBrowser(this.platformId)) {
      const login = localStorage.getItem("loginUser")
      if (login != null) {
        this.loginObj = JSON.parse(login)
      }
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
    this._spinnerService.show()
    localStorage.removeItem("loginUser")
    this.loginObj = undefined
    setTimeout(() => {
      this._spinnerService.hide()
    }, 2000);
  }

}
