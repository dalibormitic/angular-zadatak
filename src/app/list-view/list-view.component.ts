import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  showLoader = true;

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

  constructor(private modalService: NgbModal) {
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
  }

}
