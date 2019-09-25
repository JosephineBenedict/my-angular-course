import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Angular Albums";
  handler(album) {
    alert('Album ' + album.albumName + ' was sent from the album card component');
}
}
