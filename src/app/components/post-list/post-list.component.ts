import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../services/posts.service";
import { IPost } from "../../domain/ipost";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})

export class PostListComponent implements OnInit {

  data: IPost[];
  constructor(private _service: PostsService) {}

  ngOnInit() {
   this._service.getAllPosts().subscribe(res => this.data=res);
  }
}
