import {Component} from '@angular/core';
import {LessonRequestService} from '../../services/lesson-request/lesson-request.service';
import {LessonRequest} from '../../data/lesson-request';

@Component({
  selector: 'app-free-lesson-assignment',
  templateUrl: './app-free-lesson-assignment.component.html',
  styleUrls: ['./app-free-lesson-assignment.component.css']
})
export class AppFreeLessonAssignmentComponent {
  public lessonRequest: LessonRequest = new LessonRequest('', '');

  public constructor(
    private lessonRequestService: LessonRequestService
  ) {}

  public submit(): void {
    this.lessonRequestService
      .addLessonRequest(this.lessonRequest)
      .then(() => {
        this.lessonRequest.name = '';
        this.lessonRequest.telephone = '';
      });
  }

  public submitDisabled(): boolean {
    return !this.lessonRequest.name || !this.lessonRequest.telephone;
  }
}
