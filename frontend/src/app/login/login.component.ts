import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  model: any = {};
  canLogIn = true;
  submitted = false;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private msg: ToastrService,
    private load: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    sessionStorage.setItem('holyToken', '');
  }

  signIn() {
    if (this.canLogIn) {
      this.canLogIn = false;
      this.submitted = false;
      this.canLogIn = false;
      this.model.password = '';
      return;
    }

    if (this.model.username && this.model.password) {

      if (this.model.password !== this.model.passwordConfirm) {
        this.msg.error('Mantrele nu corespund');
        return;
      }

      this.load.show();
      this.subscriptions.push(this.authService.signin(this.model.username, this.model.password).subscribe(res => {
        this.submitted = true;
        switch (res) {
          case 0:
            sessionStorage.setItem(
              'holyToken',
              btoa(this.model.username + ':' + this.model.password)
            );
            this.router.navigate(['home']);
            this.msg.success('Ați fost înregistrat cu succes!', 'Porțile s-au deschis');
            break;
          case 1:
            this.msg.error('Sistemul deja conține un păcătos cu asemenea nume, introduceți alt nume', 'Muritor existent');
            break;
          case 2:
            this.msg.info('Sistemul a respins înregistrarea deoarece au fost introduse date incorecte', 'Încercați din nou');
            break;
        }
        this.load.hide();
      }, error1 => this.load.hide()));
    } else {
      this.msg.info('Introduceți ce cere Administratorul Atotsuprem');
    }
  }

  login() {
    if (!this.canLogIn) {
      this.canLogIn = true;
      return;
    }
    if (this.model.username && this.model.password) {

      this.load.show();
      this.subscriptions.push(this.authService.login(this.model.username, this.model.password).subscribe(response => {
        this.submitted = true;
        switch (response) {
          case 0:
            sessionStorage.setItem(
              'holyToken',
              btoa(this.model.username + ':' + this.model.password)
            );
            this.router.navigate(['home']);
            this.msg.success('Începem procesul de eliberare de păcate', 'Porțile s-au deschis');
            break;
          case 1:
            this.msg.error('Introduceți o mantră mai sfântă', 'Mantră incorectă');
            break;
          case 2:
            this.msg.info('Pentru tine porțile raiului sunt închise, trebuie să te intregistrezi', 'Păcătos inexistent');
            break;
        }

        this.load.hide();
      }, error1 => this.load.hide()));
    } else {
      this.msg.info('Introduceți ce cere Administratorul Atotsuprem');
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
