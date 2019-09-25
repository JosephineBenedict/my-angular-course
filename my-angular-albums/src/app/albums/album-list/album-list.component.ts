import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from '../album.model';
import { ALBUMS } from "../albums.data";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
albumsArray: Album [];
  titleCounter = 1;
  constructor() { }
  clickedAlbum: string ;
  @Output()
  lastClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.albumsArray =  ALBUMS;
   }
  parentFunctionHandler(album) {
    alert('Album ' + album.albumName + ' was sent from the album card component');
    this.clickedAlbum = album.albumName + ' ' + album.id ;
    this.lastClicked.emit(this.clickedAlbum);
}

}
