import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';

@Component({
  selector: 'app-image-classifier-upload',
  templateUrl: './image-classifier-upload.template.html',
  styleUrls: ['./image-classifier-upload.component.scss']
})
export class ImageClassfierUploadComponent implements OnInit {
  @ViewChild('image') imageEl: ElementRef;

  predictions: {
    className: string;
    probability: number;
  }[];

  hideImage: boolean;
  imageSrc: string;
  isLoading: boolean;
  model: mobilenet.MobileNet;


  constructor() { }

  async ngOnInit() {
    this.imageSrc = '';
    this.hideImage = true;
    this.predictions = [];
    this.isLoading = false;
    this.model = await mobilenet.load();
  }

  async fileChangeEvent(event) {
      if (event.target.files && event.target.files[0]) {
        this.isLoading = true;
        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]);

        reader.onload = (res: ProgressEvent) => {
          this.imageSrc = res.target['result'];

          this.resizeImage(res);
          this.hideImage = false;

          setTimeout(async () => {
            this.predictImage();
            this.isLoading = false;
          }, 500);

        };
      }
  }

  async predictImage() {
    const imgEl = this.imageEl.nativeElement;

    this.predictions = await this.model.classify(imgEl);
    this.parseData();
  }

  parseData() {
    if (this.predictions.length) {
      this.predictions = this.predictions.map((dataObject) => {
        dataObject.probability = Number((dataObject.probability*100).toFixed(2));
        return dataObject;
      });
    }
  }

  resizeImage(result: ProgressEvent) {
    const tempImage = new Image();
    tempImage.src = result.target['result'];

    tempImage.onload = () => {
      const height = tempImage.height;
      const width = tempImage.width;
      const aspectRatio = height/width;
      const maxHeight = 400;
      const maxWidth = 500;

      if (aspectRatio > 1) {
        this.imageEl.nativeElement.height = maxHeight;
        this.imageEl.nativeElement.width = 1/aspectRatio*maxHeight;

      } else if (aspectRatio < 1 && aspectRatio > 0) {
        this.imageEl.nativeElement.width = maxWidth;
        this.imageEl.nativeElement.height = aspectRatio*maxWidth;

      } else {
        this.imageEl.nativeElement.height = maxHeight;
        this.imageEl.nativeElement.width = aspectRatio*maxHeight;
      }
    };
  }
}
