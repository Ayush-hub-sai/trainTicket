import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Register } from 'src/app/interface/authInterface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RailwayService } from 'src/app/services/railway/railway.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerObj: Register = new Register
  
  constructor(public activeModal: NgbActiveModal, private _authService: AuthService,
    private _railwayService: RailwayService,
    public _translateService: TranslateService,) {
    this._railwayService.myBehaviorSubject.subscribe((res: any) => {
      _translateService.use(res)
    })
  }

  ngOnInit(): void {
  }

  register() {
    this._authService.register(this.registerObj).subscribe((res: any) => {
      this.activeModal.close()
    })
  }
}
