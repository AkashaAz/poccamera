import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  selectedFile = null;

  onFileSelected(event : any)
  {
    this.selectedFile = event.target.files[0];
  }

  onUpload()
  {
    console.log(this.selectedFile);
  }
}
