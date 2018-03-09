import { Component, OnInit, OnDestroy } from "@angular/core";
import { SpeechRecognitionService } from "../services/speech-recognition.service";

@Component({
  selector: "app-listen",
  templateUrl: "./listen.component.html",
  styleUrls: ["./listen.component.css"]
})
export class ListenComponent implements OnInit, OnDestroy {
  showActivateButton: boolean;
  showSearchButton: boolean;

  speechData: string;

  constructor(private speechRecognitionService: SpeechRecognitionService) {
    this.showActivateButton = true;
    this.showSearchButton = false;

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
          this.showSearchButton = true;
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
      console.log('inside search');
  }
}
