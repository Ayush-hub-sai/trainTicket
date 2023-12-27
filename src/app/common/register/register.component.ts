import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Register } from 'src/app/interface/authInterface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerObj: Register = new Register
  constructor(public activeModal: NgbActiveModal, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this._authService.register(this.registerObj).subscribe((res: any) => {
      this.activeModal.close()
    })
  }
}
