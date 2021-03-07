import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  files: Array<any> = [
    {
      id: 1,
      filename: 'adobe.pdf'
    },
    {
      id: 2,
      filename: 'bestsample.pdf'
    },
    {
      id: 3,
      filename: 'newtest.pdf'
    },
    {
      id: 4,
      filename: 'sample_file.pdf'
    },
    {
      id: 5,
      filename: 'testtest.pdf'
    }
  ];

  constructor() { }

  getFiles(): Array<any> {
    return this.files;
  }

  addFile(file: any): void {
    this.files.push({id: Math.random().toString(36).substr(2, 9), filename: file});
  }

  deleteFile(file: any): void {
    this.files.splice(this.files.findIndex(f => f.id === file.id), 1);
  }
}
