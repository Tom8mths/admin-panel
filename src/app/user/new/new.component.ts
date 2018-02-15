import { Component, OnInit } from '@angular/core';
import axios from "axios";
import swal from "sweetalert";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewUserComponent implements OnInit {

  constructor() { }
  public user: any = { 

  };

  newuser() {
    axios.post(`http://127.0.0.1:3333/api/v1/users/`, this.user, {
      headers: { Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjYwLCJpYXQiOjE1NTI5MzY5OTV9.EF-k4g_9W-WjX_jxLBlfAz3r55TAyJ3YPve7jjs4mE0" }
    })
    .then( function(response) {
      if(this.user.password != this.user.password_confirmation) {
        swal("Erro", "Senhas não combinam", "error");
        console.log(response);
      } else {
        swal("Erro", "Senhas diferentes", "suscess");
      }
    })
    .catch(() => {

    })
  }

  ngOnInit() {
  }

}
