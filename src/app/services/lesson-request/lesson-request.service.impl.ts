import {LessonRequestService} from './lesson-request.service';
import {LessonRequest} from '../../data/lesson-request';
import {Injectable} from '@angular/core';
import {LessonRequestHttp} from '../../http/lesson-request/lesson-request.http';

@Injectable()
export class LessonRequestServiceImpl implements LessonRequestService {
  public constructor(
    private lessonRequestHttp: LessonRequestHttp
  ) {}

  public addLessonRequest(lessonRequest: LessonRequest): Promise<any> {
    return this.lessonRequestHttp.addLessonRequest(lessonRequest);
  }
}
