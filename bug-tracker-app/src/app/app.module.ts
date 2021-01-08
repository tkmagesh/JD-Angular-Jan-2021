import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';

import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { SortPipe } from './bug-tracker/pipes/sort.pipe';
import { ElapsedPipe } from './bug-tracker/pipes/elapsed.pipe';

import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { BugStorageService } from './bug-tracker/services/bugStorage.service';

import { BugStatsComponent } from './bug-tracker/views/bug-stats/bug-stats.component'
import { BugEditComponent } from './bug-tracker/views/bug-edit/bug-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe,
    TrimTextPipe,
    SortPipe,
    ElapsedPipe,
  ],
  imports: [
    BrowserModule
    , HttpClientModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
