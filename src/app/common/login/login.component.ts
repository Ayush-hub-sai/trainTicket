import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { login } from 'src/app/interface/authInterface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RailwayService } from 'src/app/services/railway/railway.service';
import { RegisterComponent } from '../register/register.component';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: login = new login
  register: boolean = false
  @Output() loginData: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal,
    private _authService: AuthService,
    private modalService: NgbModal,
    private _railwayService: RailwayService,
    public _translateService: TranslateService,
    private _toasterService: ToastrService,
    private _spinnerService: NgxSpinnerService,
  ) {
    this._railwayService.myBehaviorSubject.subscribe((res: any) => {
      _translateService.use(res)
    })
  }

  login() {
    if (this.register) {
      this.activeModal.close();
    } else {
      this._spinnerService.show()
      this._authService.login(this.loginObj).subscribe({
        next: (res: any) => {
          if (res.result) {
            this._spinnerService.hide()
            this.loginObj = res.data;
            localStorage.setItem("loginUser", JSON.stringify(this.loginObj));
            this.loginData.emit(this.loginObj);
            this._toasterService.success("User Logged in Successfully");
          } else {
            this._spinnerService.hide()
            this._toasterService.error("Login failed. Please check your credentials.");
          }
        },
        error: (error: any) => {
          console.error("Login error:", error);
          this._toasterService.error("An error occurred during login. Please try again later.");
        },
        complete: () => {
          this._spinnerService.hide()
          this.activeModal.close();
        }
      });
    }
  }
  

  registerModal() {
    this.register = true
    this.login()
    const modalRef = this.modalService.open(RegisterComponent, {
      size: 'md',
      centered: true
    });
  }

}
