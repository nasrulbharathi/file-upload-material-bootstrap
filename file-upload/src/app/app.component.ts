import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public totalDocumentSize = 0;

  public totalSizeEvent(fileSize) {
    this.totalDocumentSize += fileSize;
  }

  public removeFromTotalSize(fileSize) {
    this.totalDocumentSize -= fileSize;
  }
}
