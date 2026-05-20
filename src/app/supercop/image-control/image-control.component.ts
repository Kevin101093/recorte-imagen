import { Component, computed, inject, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CropperDialogComponent } from '../cropper-dialog/cropper-dialog.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-image-control',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './image-control.component.html',
  styleUrls: ['./image-control.component.css'],
})
export class ImageControlComponent {
  imageWidth = signal(0);
  @Input() set width(val: number) {
    this.imageWidth.set(val);
  }

  imageHeight = signal(0);
  @Input() set height(val: number) {
    this.imageHeight.set(val);
  }

  placeholder = computed(
    () => `https://placehold.co/${this.imageWidth()}x${this.imageHeight()}`,
  );
  // TODO: Continuar agregando cropper dialog
  dialog = inject(MatDialog);

  fileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const dialogRef = this.dialog.open(CropperDialogComponent, {
        data: {
          image: file,
          width: this.imageWidth(),
          height: this.imageHeight(),
        },
        width: '500px',
      });

        dialogRef.afterClosed().pipe(filter(result => !!result)).subscribe((result) => {

        })
    }
  }
}
