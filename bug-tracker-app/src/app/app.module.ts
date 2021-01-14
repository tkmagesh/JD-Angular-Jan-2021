import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';

import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { BugStorageService } from './bug-tracker/services/bugStorage.service';

import { BugStatsComponent } from './bug-tracker/views/bug-stats/bug-stats.component'
import { BugEditComponent } from './bug-tracker/views/bug-edit/bug-edit.component';

import { CalculatorComponent } from './calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
    , HttpClientModule
    , FormsModule
    , UtilsModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
