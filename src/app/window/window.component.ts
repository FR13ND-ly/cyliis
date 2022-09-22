import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor() { }
  
  @ViewChild('window') window! : ElementRef

  @Input() name! : string

  ngOnInit(): void {
  }

  onClose() {
    this.window.nativeElement.style.display = "none"
  }

  onFullScreen() {
  }

  onMinimalize() {

  }

}
