import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor(private sanitizer : DomSanitizer) { }

  windows : SafeHtml[] = [
    this.sanitizer.bypassSecurityTrustHtml(`<app-gallery></app-gallery>`)
  ]

  ngOnInit(): void {
  }

}
