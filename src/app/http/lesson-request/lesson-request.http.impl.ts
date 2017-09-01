import {LessonRequest} from '../../data/lesson-request';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {LessonRequestHttp} from './lesson-request.http';
import {Config} from '../../config/config';

@Injectable()
export class LessonRequestHttpImpl implements LessonRequestHttp {
  public constructor(
    private http: Http
  ) {}

  public addLessonRequest(lessonRequest: LessonRequest): Promise<any> {
    return this.http.post(Config.rootUrl + '/lesson-request/', lessonRequest).toPromise();
  }
}
