import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  ngOnInit(): void {
    //validate url not null
    if ( !this.url ) {
      throw new Error('url is required');
    }

  }


  @Input()
  public url!: string;
  @Input()
  public alt?: string;

  hasLoaded: boolean = false;

  onImageLoad(): void {
    this.hasLoaded = true;
  }



}
