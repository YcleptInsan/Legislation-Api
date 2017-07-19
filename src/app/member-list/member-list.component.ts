import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
 @Input() childLegislators;
  constructor() { }

  ngOnInit() {
    console.log(this.childLegislators)
  }

}
