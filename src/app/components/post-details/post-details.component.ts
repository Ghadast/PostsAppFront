import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../domain/ipost';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
//injecer le service dns les constructeur
idPost: number;
post: IPost;
  constructor(private _route: ActivatedRoute,private _service: PostsService) {}

  ngOnInit() {
//using a snapshot
  // this.idPost= +this._route.snapshot.params['id'];
// usig an observable
this._route.params.subscribe(PARAMETERS => this.idPost =PARAMETERS['id']);

   this._service.getPostById(this.idPost).subscribe(res=> this.post = res);
  }

}
