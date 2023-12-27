import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { login } from 'src/app/interface/authInterface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RailwayService } from 'src/app/services/railway/railway.service';
import { RegisterComponent } from '../register/register.component';

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
    private _authService: AuthService, private modalService: NgbModal) { }


  login() {
    if (this.register) {
      this.activeModal.close()
    }
    else {
      this._authService.login(this.loginObj).subscribe((res: any) => {
        this.loginObj = res.data
        localStorage.setItem("loginUser", JSON.stringify(this.loginObj))
        this.loginData.emit(this.loginObj)
        this.activeModal.close()
      })
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
