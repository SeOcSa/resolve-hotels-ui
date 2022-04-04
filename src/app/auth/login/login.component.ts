import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import { FormlyFieldConfig } from '@ngx-formly/core';
import {AlerterService} from "../../lib/dialogs";
import {UserApiService} from "../providers/user-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public form = new FormGroup({});
  public model: { email?: string; password?: string } = {};
  public fields: FormlyFieldConfig[] = [
    {
      key: "email",
      type: "input",
      validators: { validation: [Validators.email] },
      templateOptions: {
        label: "Email address",
        type: "email",
        required: true,
      },
    },
    {
      key: "password",
      type: "input",
      validators: { validation: [Validators.minLength(3)] },
      templateOptions: {
        label: "Password",
        type: "password",
        required: true,
      },
    },
  ];

  constructor(public userApi: UserApiService,
              public alerterService: AlerterService,
              private route: ActivatedRoute,
              private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public async onSubmit(): Promise<void> {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    const result = await this.userApi.login(this.model);
    if (result.success) {
      this.router.navigate(["hotels/dashboard"]).then();
    } else {
      this.alerterService.alert({ message: result.errorMessage });
    }
  }

}
