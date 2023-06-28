import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService: GifsService) { }

  get tags(): string[] {
    return this.gifService.tagHistory;
  }


  @ViewChild('textTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  searchTag(tag:string) {
    this.gifService.searchTag( tag );
  }

}
