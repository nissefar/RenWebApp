import { Component, OnInit, Input, Output } from '@angular/core';
import { Member } from 'src/app/member/member';
import { ApiDataService } from 'src/app/Api-Services/api-data.service';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ApiFileService } from 'src/app/Api-Services/api-file.service';
import { UserLoggedInService } from 'src/app/Api-Services/user-logged-in.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  member: Member = {};
  profilePic: File
  constructor(private apiDataService: ApiDataService, private apiFileServive: ApiFileService, private userLoggedId: UserLoggedInService) {

  }

  ngOnInit(): void {
    this.apiDataService.validateMember(localStorage.getItem('Email'),localStorage.getItem('Token'))
      .subscribe(
        result => this.member =result,
        error => console.log(error)
        )
  }

  closeEdit(): void {
  }

  handleFileInput(files: FileList) {
    this.profilePic = files.item(0);
}

uploadFileToActivity() {
  this.apiFileServive.postFile(this.profilePic).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}

  onSubmit(form: NgForm){
    this.apiDataService.patchMember(this.member)
    .subscribe(
      result => {
        this.closeEdit();
      },
      error => {
        console.log('err', error)
      }
    )
      this.uploadFileToActivity();
  }

}
