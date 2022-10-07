import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {

  link = "";

  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.link = this.activatedRoute.snapshot.params['link']
    console.log(this.link)
  }

  createMore() {
    this.route.navigate(["home"])
  }


}
