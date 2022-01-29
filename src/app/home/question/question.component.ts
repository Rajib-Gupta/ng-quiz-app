import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  name: string | undefined;
  questions: any[] = [];
  currentQuestion: number = 0;
  points: number = 0;
  count: any = 15;
  interval$!: Subscription;
  correctAns: number = 0;
  incorrectAns: number = 0;
  score: number = 0;
  isCompleted!: boolean;
  qualified!: boolean;
  attemptQuestions: number = 0;
  constructor(private question: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getData();
    this.timer();
  }

  getData() {
    this.question.getQuestions().subscribe((res) => {
      this.questions = res.questions;
    });
  }
  submit() {
    this.currentQuestion++;
  }
  answar(i: any, option: any) {
    if (option.correct === true) {
      this.points += 5;
      this.attemptQuestions++;
      this.currentQuestion++;
      this.correctAns++;
      this.score += 5;
      if (this.score === 15) {
        this.qualified = true;
      }
      if (i === this.questions.length) {
        this.isCompleted = true;
        this.stopCounter();
      } else {
        this.isCompleted = false;
        this.resetCounter();
      }
    } else {
      this.attemptQuestions++;
      this.points--;
      this.incorrectAns++;
      this.score -= 1;
      this.isCompleted = true;
      this.stopCounter();
    }
  }

  timer() {
    this.interval$ = interval(1500).subscribe((res) => {
      this.count--;
      if (this.count === 0) {
        this.points--;
        this.score -= 1;
        this.incorrectAns++;
        this.attemptQuestions++;
        this.isCompleted = true;
      }
    });
  }
  resetCounter() {
    this.count = 15;
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.count = 0;
  }
}
