import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpeechProcessingService } from '../services/speech-processing.service';
import { NlpKB } from './nlp-kb';
import { SpeechRecognitionService } from '../services/speech-recognition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speech-processing',
  templateUrl: './speech-processing.component.html',
  styleUrls: ['./speech-processing.component.css']
})
export class SpeechProcessingComponent implements OnInit, OnDestroy {
  BrainJSClassifier = require('natural-brain');
  classifier: any;
  nlpKB: NlpKB[] = [];
  speechData: string;
  showActivateButton: boolean = false;
  constructor(private speechProcessingSvc: SpeechProcessingService, 
    private speechRecognitionService: SpeechRecognitionService,
    private router: Router) {
    this.showActivateButton = true;
    this.speechData = "";
  }

  ngOnInit() {
    this.classifier = new this.BrainJSClassifier();
    console.log(this.classifier);
    this.getNlpKB();
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeechSearch(): void {
    this.showActivateButton = false;

    this.speechRecognitionService
      .record()

      .subscribe(
        //listener

        value => {
          this.speechData = value;
          console.log(value);
        },

        //errror

        err => {
          console.log(err);

          if (err.error == "no-speech") {
            console.log("--restatring service--");

            this.activateSpeechSearch();
          }
        },

        //completion

        () => {
          this.showActivateButton = true;

          console.log("--complete--");

          this.activateSpeechSearch();
        }
      );
  }


  getNlpKB(): void {
    this.speechProcessingSvc.getNlpKB()
      .subscribe(
        nlpKB => {
          this.nlpKB = nlpKB;
          console.log(this.nlpKB)
          for (let nlpkbrow of this.nlpKB) {
            console.log(nlpkbrow.keyword);
            this.classifier.addDocument(nlpkbrow.classifier, nlpkbrow.keyword);
          }
          console.log(this.classifier);
          this.classifier.train();
        },

    );

  }

  search(): void {
    let outcome = this.classifier.classify(this.speechData);
    if(outcome === 'stores'){
      this.router.navigate(['/store']);
    }
    if(outcome === 'logout'){
      this.router.navigate(['/logout']);
    }
    console.log(outcome); // -> software
  }
}

