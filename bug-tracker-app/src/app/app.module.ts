import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';

import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { SortPipe } from './bug-tracker/pipes/sort.pipe';

import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';

import { BugStatsComponent } from './bug-tracker/views/bug-stats/bug-stats.component'

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    ClosedCountPipe,
    TrimTextPipe,
    SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
