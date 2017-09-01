import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppHeaderComponent} from './parts/header/app-header.component';
import {RouterModule, Routes} from '@angular/router';
import {AppMainComponent} from './pages/main/app-main.component';
import {AppPricesComponent} from './pages/prices/app-prices.component';
import {AppLessonsComponent} from './pages/lessons/app-lessons.component';
import {AppAboutComponent} from './pages/about/app-about.component';
import {AppContactsComponent} from './pages/contacts/app-contacts.component';
import {AppPromoComponent} from './parts/promo/app-promo.component';
import {AppAdvantageComponent} from './parts/advantage/app-advantage.component';
import {AppFooterComponent} from './parts/footer/app-footer.component';

import {AppFreeLessonAssignmentComponent} from './parts/free-lesson-assignment/app-free-lesson-assignment.component';

import {LessonRequestService} from './services/lesson-request/lesson-request.service';
import {LessonRequestServiceImpl} from './services/lesson-request/lesson-request.service.impl';

import {LessonRequestHttp} from './http/lesson-request/lesson-request.http';
import {LessonRequestHttpImpl} from './http/lesson-request/lesson-request.http.impl';

import {AgmCoreModule} from '@agm/core';

import 'rxjs/add/operator/toPromise';

const appRoutes: Routes = [
  { path: '', component: AppMainComponent },
  { path: 'lessons', component: AppLessonsComponent },
  { path: 'prices', component: AppPricesComponent },
  { path: 'contacts', component: AppContactsComponent },
  { path: 'about', component: AppAboutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,

    AppHeaderComponent,
    AppPromoComponent,
    AppFooterComponent,
    AppAdvantageComponent,
    AppFreeLessonAssignmentComponent,

    AppMainComponent,

    AppLessonsComponent,
    AppPricesComponent,
    AppContactsComponent,
    AppAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAdCJ_gyOvHU1Pkj2IZE4aaOHVjOiqbFp0'}),
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    {provide: LessonRequestService, useClass: LessonRequestServiceImpl},
    {provide: LessonRequestHttp, useClass: LessonRequestHttpImpl}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
