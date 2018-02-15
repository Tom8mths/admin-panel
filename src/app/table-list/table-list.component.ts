import { Component, OnInit } from '@angular/core';
import axios from "axios";
import swal from "sweetalert";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public users: Array<any>;
  constructor() {
  }

  destroy(id: number) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["Cancel", "Ok"],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`http://127.0.0.1:3333/api/v1/users/${id}`, {
            headers: { Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjYwLCJpYXQiOjE1NTI5MzY5OTV9.EF-k4g_9W-WjX_jxLBlfAz3r55TAyJ3YPve7jjs4mE0" }
          })
            .then(() => {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              const index = this.users.findIndex(user => user.id === id);
              if (index !== -1) {
                this.users.splice(index, 1);
              }
            })
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }

  ngOnInit() {
    axios.get('http://127.0.0.1:3333/api/v1/users', {
      headers: { Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjYwLCJpYXQiOjE1NTI5MzY5OTV9.EF-k4g_9W-WjX_jxLBlfAz3r55TAyJ3YPve7jjs4mE0" }
    })
      .then((response) => {
        this.users = response.data.data

      })
      .catch(function (error) {
        console.log(error.response);
      })
  }

}
