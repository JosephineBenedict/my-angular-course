import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';
import { AlbumService } from '../shared/album.service';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
    albumsArray: Album[];
    titleCounter = 1;
    clickedAlbum: string;
    constructor(private albumService: AlbumService) {}
    @Output()
    lastClicked: EventEmitter<string> = new EventEmitter<string>();

    getAlbums() {
        this.albumService.getAlbums()
        .subscribe(
            albums => this.albumsArray = albums,
            error => console.log("Error: ", error));
    }

    ngOnInit() {
        this.getAlbums();
    }

    parentFunctionHandler(album) {
        alert(
            'Album ' +
                album.albumName +
                ' was sent from the album card component'
        );
        this.clickedAlbum = album.albumName + ' ' + album.id;
        this.lastClicked.emit(this.clickedAlbum);
    }
}
