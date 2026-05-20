import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { MatButton } from '@angular/material/button';
//import { } from

export type CropperDialogData = {
  image: File;
  width: number;
  height: number;
};

export type CropperDialogResult = {
  blob: Blob;
  imageUrl: string;
};

@Component({
  selector: 'app-cropper-dialog',
  imports: [ImageCropperComponent, MatDialogModule, MatButton],
  templateUrl: './cropper-dialog.component.html',
  styleUrls: ['./cropper-dialog.component.css'],
})
export class CropperDialogComponent {
  data: CropperDialogData = inject(MAT_DIALOG_DATA);

  result = signal<CropperDialogResult | undefined>(undefined);

  imageCropped(event: ImageCroppedEvent) {
    const { blob, objectUrl } = event;
    if (blob && objectUrl) {
      this.result.set({
        blob,
        imageUrl: objectUrl,
      });
    }
  }
}
