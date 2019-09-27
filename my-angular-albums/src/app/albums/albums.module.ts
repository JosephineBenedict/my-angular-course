import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import {FormsModule} from '@angular/forms';
import { AddAlbumComponent } from './add-album/add-album.component';



@NgModule({
  declarations: [AlbumListComponent,
    AlbumCardComponent,
    AlbumDetailsComponent, AddAlbumComponent], 
  imports: [
    CommonModule,
    AlbumsRoutingModule , FormsModule
  ]
})
export class AlbumsModule { }
