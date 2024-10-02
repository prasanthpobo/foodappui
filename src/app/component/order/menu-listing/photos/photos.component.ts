import { Component } from '@angular/core';
import { photosData } from '../../../../shared/interface/photos';
import { PhotosService } from '../../../../shared/services/photos.service';
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";
import { CommonModule } from '@angular/common';
import { Gallery, GalleryItem, GalleryModule, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [LightboxModule,CommonModule,GalleryModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})

export class PhotosComponent {

  public photos : photosData[];
  private items: GalleryItem[];

  constructor(public photosService: PhotosService ,public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(Response => {
      this.photos = Response.photos;
    })
    this.items = this.photos?.map(item => new ImageItem({ src: item.image_url }));
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
    lightboxRef.load(this.items);
  }

}
