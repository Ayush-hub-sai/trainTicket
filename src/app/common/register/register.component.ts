import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Register } from 'src/app/interface/authInterface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RailwayService } from 'src/app/services/railway/railway.service';
import { LoginComponent } from '../login/login.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerObj: Register = new Register

  constructor(public activeModal: NgbActiveModal, private _authService: AuthService,
    private _railwayService: RailwayService,
    public _translateService: TranslateService,
    private modalService: NgbModal,
    private _toasterService: ToastrService,
    private _spinnerService: NgxSpinnerService,

  ) {
    this._railwayService.myBehaviorSubject.subscribe((res: any) => {
      _translateService.use(res)
    })
  }

  ngOnInit(): void {
  }

  register() {
    if (this.login) {
      this.activeModal.close();
    } else {
      this._spinnerService.show()
      this._authService.register(this.registerObj).subscribe({
        next: (res: any) => {
          if (res.result) {
            this._spinnerService.hide()
            this._toasterService.success("User Registered Successfully");
            this.loginModal()
          } else {
            this._spinnerService.hide()
            this._toasterService.error(res.message);
          }
        },
        error: (error: any) => {
          this._toasterService.error("An error occurred during registration. Please try again later.");
        },
        complete: () => {
          this._spinnerService.hide()
          this.activeModal.close();
        }
      });
    }
  }

  login: boolean = false
  loginModal() {
    this.login = true
    this.register()
    const modalRef = this.modalService.open(LoginComponent, {
      size: 'md',
      centered: true
    });
  }

}
