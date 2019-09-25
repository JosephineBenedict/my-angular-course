import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../album.model';

@Component({
    selector: 'app-album-card',
    templateUrl: './album-card.component.html',
    styleUrls: ['./album-card.component.css'],
})
export class AlbumCardComponent implements OnInit {
    constructor() {}
    @Input()
    album: Album;
    @Output()
    albumClicked: EventEmitter<Album> = new EventEmitter<Album>();
    showAlbum() {
      this.albumClicked.emit(this.album);
    }
    showArtist(){
      console.log("Alubum Name:" + this.album.artist);
    }
    
    ngOnInit() {}
}