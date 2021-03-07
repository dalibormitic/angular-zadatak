import { Component, OnInit } from '@angular/core';
import {FilesService} from '../services/files.service';

@Component({
  selector: 'app-add-pdf',
  templateUrl: './add-pdf.component.html',
  styleUrls: ['./add-pdf.component.css']
})
export class AddPdfComponent implements OnInit {
  selectedFiles?: FileList;

  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  uploadFile(): void {
    this.filesService.addFile(this.selectedFiles[0].name);
  }
}
