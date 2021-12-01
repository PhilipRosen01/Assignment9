import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Content} from "../helper-files/content-interface";
import {Observable} from "rxjs";
import { ContentServiceService } from '../services/content-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
  export class ContentDetailComponent implements OnInit {


  id: number;
  //content: Content;
  constructor( private route: ActivatedRoute, private content: ContentServiceService) {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

      this.content.getContent(this.id).subscribe(
        c => this.content = c);
          console.log(this.content);

        });
  }



  getContentItem({id}: { id: any }): Observable<Content>{ console.log("Retrieving Content");
        return this.getContentItem({id: "api/content/" + id});
  }

}
