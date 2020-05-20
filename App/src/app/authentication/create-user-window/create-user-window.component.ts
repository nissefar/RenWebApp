import { Component, OnInit } from '@angular/core';
import { Member } from '../../member/member';
import { ApiDataService } from '../../member/api-data.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-user-window',
  templateUrl: './create-user-window.component.html',
  styleUrls: ['./create-user-window.component.scss','../../../assets/shared-styles/authentication-content-shared.scss']
})
export class CreateUserWindowComponent implements OnInit {

member: Member = {};
apiDataService: ApiDataService;

  constructor(private ApiDataService: ApiDataService) {
    this.apiDataService = ApiDataService;
  }

  private passCheck(form: NgForm){
    console.log(form.value['password'], " ", form.value['passwordConfirm']);
    return (form.value['password'] === form.value['passwordConfirm']) ? true : false ;
  }

  onSubmit(form: NgForm){
    console.log("In Onsubmit");
    this.apiDataService.postMember(this.member)
    .subscribe(
      result => {
        console.log(this.passCheck(form));
        console.log(result);
        form.reset();
      },
      error => console.log('err', error)
    )

  }

  ngOnInit(): void {
  }


}
