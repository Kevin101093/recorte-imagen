import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-image-control',
  imports: [],
  templateUrl: './image-control.component.html',
  styleUrl: './image-control.component.css',
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

  placeholder = computed(() => `https://placehold.co/${this.imageWidth()}x${this.imageHeight()}`);
}
