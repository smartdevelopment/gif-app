import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent  {
  constructor(private gifsService: GifsService) { }

  @ViewChild('textTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  searchTag( ) {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag( newTag );

    this.tagInput.nativeElement.value = '';
  }

}
