import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {

  @Input()
  public totalUploadFileSize;
  @Input()
  public uploadLabel = 'Upload';
  @Input()
  public deleteButtonIcon = 'close';

  @Output()
  public fileSizeEvent = new EventEmitter();
  @Output()
  public fileRemoveSizeEvent = new EventEmitter();

  @ViewChild('fileUpload', { static: false })
  public fileUpload: ElementRef;

  @ViewChild('toastMessage', { static: false })
  public toast: ElementRef;


  public files = [];
  public toastMessageText: string;

  constructor() { }

  public onClick(): void {
    if (this.fileUpload) {
      this.fileUpload.nativeElement.click();
    }
  }

  public onFileSelected(event): void {
    const files = event.target.files;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (this.validate(file)) {
        this.files.push(files[i]);
        this.fileSizeEvent.emit(files[i].size / (1024 * 104));
        this.totalUploadFileSize += files[i].size / (1024 * 104);
      }
    }
  }

  public removeFile(event, file): void {
    const index = this.files.indexOf(file);
    this.fileRemoveSizeEvent.emit(file.size / (1024 * 104));
    this.totalUploadFileSize -= file.size / (1024 * 104);
    if (this.files && -1 !== (index)) {
      this.files.splice(index, 1);
      this.clearInputElement();
    }
  }

  public validate(file): boolean {
    for (const f of this.files) {
      if (f.name === file.name
        && f.lastModified === file.lastModified
        && f.size === file.size
        && f.type === file.type
      ) {
        this.openSnackBar('File has been already uploaded');
        return false;
      }
    }
    const fileSize = file.size / (1024 * 1024);
    if (fileSize + this.totalUploadFileSize > 20) {
      this.openSnackBar('Exceeding Total Upload Space of 20MB');
      return false;
    } else {
      return true;
    }
  }

  private clearInputElement(): void {
    this.fileUpload.nativeElement.value = '';
  }

  private openSnackBar(message: string) {
    this.toast.nativeElement.style.opacity = 1;
    this.toastMessageText = message;
    setTimeout(() => {
      this.toast.nativeElement.style.opacity = 0;
    }, 3000);
  }

}
