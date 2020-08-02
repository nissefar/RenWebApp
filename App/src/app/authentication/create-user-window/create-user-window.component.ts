import { Component, OnInit } from '@angular/core';
import { Member } from '../../member/member';
import { ApiDataService } from '../../Api-Services/api-data.service';
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
    return (form.value['password'] === form.value['passwordConfirm']) ? true : false ;
  }

  onSubmit(form: NgForm){
    this.apiDataService.postMember(this.member)
    .subscribe(
      result => {
        form.reset();
      },
      error => {
        console.log('err', error)
      }
    )

  }

  ngOnInit(): void {
  }


}
