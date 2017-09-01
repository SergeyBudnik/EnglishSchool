import {LessonRequest} from '../../data/lesson-request';

export abstract class LessonRequestService {
  public abstract addLessonRequest(lessonRequest: LessonRequest): Promise<any>;
}
