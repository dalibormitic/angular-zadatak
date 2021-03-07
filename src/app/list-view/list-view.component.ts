import {Component, OnInit, ViewChild} from '@angular/core';
import { NgbModal, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import {FilesService} from '../services/files.service';
import {debounceTime} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  showLoader = true;
  files: Array<any>;
  successMessage = '';
  private _success = new Subject<string>();

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;


  constructor(private modalService: NgbModal, private filesService: FilesService) {
  }

  pdfSrc = '';

  setPdfSrc(src: string): void {
    this.pdfSrc = `./assets/pdf/${src}`;
  }

  openModal(content): void{
    this.showLoader = true;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl', scrollable: true});
  }

  hideLoader(): void {
    this.showLoader = false;
  }

  ngOnInit(): void {
    this.files = this.filesService.getFiles();
  }

  deleteFile(file: any): void {
    this.filesService.deleteFile(file);
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(1500)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
    this._success.next('Successfully deleted!');
  }

}
