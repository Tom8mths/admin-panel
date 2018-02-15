import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from "axios";
import swal from "sweetalert";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class UserEditComponent implements OnInit {

  public user: any = {

  };

  constructor(private route: ActivatedRoute) { }

  edituser() {
    axios.put(`http://127.0.0.1:3333/api/v1/users/`, this.user, {
      headers: { Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjYwLCJpYXQiOjE1NTI5MzY5OTV9.EF-k4g_9W-WjX_jxLBlfAz3r55TAyJ3YPve7jjs4mE0" }
    })
    .then(() => {
      swal("Sucesso", "Usuário atualizado com sucesso", "success");
    })
    .catch(function () {
      swal("Erro", "Ocorreu algum erro!", "error");
    })
  }


  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.user.id = +params['id'];
    });
    try {
      const response = await axios.get(`http://127.0.0.1:3333/api/v1/users/${this.user.id}`, {
        headers: { Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjYwLCJpYXQiOjE1NTI5MzY5OTV9.EF-k4g_9W-WjX_jxLBlfAz3r55TAyJ3YPve7jjs4mE0" }
      })
      this.user = response.data
    } catch (error) {

    }
  }

}