import { Component, OnInit } from '@angular/core';
import { SpeechProcessingService } from '../services/speech-processing.service';
import { NlpKB } from './nlp-kb';

@Component({
  selector: 'app-speech-processing',
  templateUrl: './speech-processing.component.html',
  styleUrls: ['./speech-processing.component.css']
})
export class SpeechProcessingComponent implements OnInit {
  BrainJSClassifier = require('natural-brain');
  classifier:any;
  nlpKB: NlpKB[]=[];
  speechData: string;
  constructor(private speechProcessingSvc:SpeechProcessingService) { }

  ngOnInit() {
    // var BrainJSClassifier = require('natural-brain');
this.classifier = new this.BrainJSClassifier();
console.log(this.classifier);
this.classifier.addDocument('can you play some new music?', 'music');
this.getNlpKB();
/* this.classifier.addDocument('can you play some new music?', 'music');

this.classifier.train(); */

/* this.classifier.addDocument('my unit-tests failed.', 'software-failed');
this.classifier.addDocument('my unit-tests passed.', 'software-passed');
this.classifier.addDocument('tried the program, but it was buggy.', 'software');
this.classifier.addDocument('tomorrow we will do standup.', 'meeting');
this.classifier.addDocument('the drive has a 2TB capacity.', 'hardware');
this.classifier.addDocument('i need a new power supply.', 'hardware');
this.classifier.addDocument('can you play some new music?', 'music'); */



/* console.log(this.classifier.classify('test passed?')); // -> software
console.log(this.classifier.classify('did you buy a new drive?')); // -> hardware
console.log(this.classifier.classify('What is the capacity?')); // -> hardware
console.log(this.classifier.classify('Lets meet tomorrow?')); // -> meeting
console.log(this.classifier.classify('Can you play some stuff?')); // -> music */
  }

  
  getNlpKB(): void {
    this.speechProcessingSvc.getNlpKB()
        .subscribe(
          nlpKB => {
            this.nlpKB = nlpKB;
            console.log(this.nlpKB)
            for(let nlpkbrow of this.nlpKB){
              console.log(nlpkbrow.possibleOutcome);
              this.classifier.addDocument(nlpkbrow.kbKeyString, nlpkbrow.possibleOutcome);
            }
            console.log(this.classifier);
            this.classifier.train();
          },
          
        );
        
  }

  search(): void{
    // this.classifier.train();
    console.log(this.classifier.classify(this.speechData)); // -> software
  }
}

