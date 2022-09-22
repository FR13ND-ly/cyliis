import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesktopComponent } from './desktop/desktop.component';
import { BarComponent } from './bar/bar.component';
import { OverlayComponent } from './overlay/overlay.component';
import { MaterialModule } from './material.module';
import { WindowComponent } from './window/window.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { AlumniComponent } from './alumni/alumni.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    BarComponent,
    OverlayComponent,
    WindowComponent,
    GalleryComponent,
    TeamComponent,
    AlumniComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
