import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Member } from 'src/app/member/member';
import { ApiDataService } from 'src/app/Api-Services/api-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoutService } from 'src/app/authentication/logout-service/logout.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
  token: string = "";
  profilePicUrl: string = "";
  safeProfilePicUrl: SafeResourceUrl = "";
  member: Member = { };
  searchParam: string;
  timeStamp: Number;

  constructor(private _router: Router, private sanitizer: DomSanitizer, private apiDataService: ApiDataService, private route: ActivatedRoute, private logout: LogoutService) {
    this.token = localStorage.getItem('Token');

    this.route.params.subscribe(params => {
      this.searchParam = params['email'];
    })

  }

  ngOnInit(): void {

    this.updateProfile();
  }

  logUserOut(): void{
    this.logout.logout();
    setTimeout(() => {
      this._router.navigate(['authentication'])
    }, 100);

  }

  updateProfile(): void{


    setTimeout(()=>{
    //Timestampet har til formål at sikre at url'en ændres hver gang siden loades
    //hvilket gør at billedet bliver hentet fra serveren i stedet for cashen
    //Timeouten har til formål at give api'en tid til at gemme billedet på serveren inden
    this.timeStamp = new Date().getTime();
    this.profilePicUrl = "http://localhost:3000/members/profilepic/" + this.token +'?'+this.timeStamp;
    this.safeProfilePicUrl = this.sanitizer.bypassSecurityTrustUrl(this.profilePicUrl);
    }, 100)

    this.apiDataService.validateMember(this.searchParam,localStorage.getItem('Token'))
    .subscribe(
      result => this.member = result,
      error => console.log(error)
    );
  }

}
