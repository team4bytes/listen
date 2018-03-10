import { Component, OnInit, OnDestroy } from "@angular/core";
import { SpeechRecognitionService } from "../services/speech-recognition.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-listen",
  templateUrl: "./listen.component.html",
  styleUrls: ["./listen.component.css"]
})
export class ListenComponent implements OnInit, OnDestroy {
  showActivateButton: boolean;
  showSearchButton: boolean;

  speechData: string;

  constructor(private speechRecognitionService: SpeechRecognitionService, private router: Router) {
    this.showActivateButton = true;

    this.speechData = "";
  }

  ngOnInit() {
    console.log("hello");
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

  search(): void{
    if(!!this.speechData){
      this.router.navigate(['/result/'+this.speechData]);
      console.log('inside search');
  }
  }
}
