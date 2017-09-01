import {LessonRequest} from '../../data/lesson-request';

export abstract class LessonRequestHttp {
  public abstract addLessonRequest(lessonRequest: LessonRequest): Promise<any>;
}
