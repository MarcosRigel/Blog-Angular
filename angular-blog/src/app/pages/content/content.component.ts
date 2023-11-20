import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://media.contentapi.ea.com/content/dam/news/www-ea/common/ea-motive-new-title-teaser-16x9.jpg.adapt.1456w.jpg"
  contentTitle:string = "NOTICIA EXEMPLO"
  contentDescription:string = " jdasjidjasjidasjiijasdakl"

  constructor() { }

  ngOnInit(): void {
  }

}
