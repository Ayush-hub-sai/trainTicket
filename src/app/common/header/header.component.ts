import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
// import { login, loginResponse } from 'src/app/interface/authInterface';
// import { LoginResponse } from 'src/app/interface/authInterface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loginObj: any

  constructor(private modalService: NgbModal) {
    const login = localStorage.getItem("loginUser")
    if (login != null) {
      this.loginObj = JSON.parse(login)
    }
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
    // this.toastr.success("User logged out successfully.")
    localStorage.removeItem("loginUser")
    this.loginObj = undefined
    // this.loginObj.emailId = ''
    // this.router.navigate(['/home'])
    // setTimeout(() => {
    //   location.reload()
    // }, 2000);
  }

}
