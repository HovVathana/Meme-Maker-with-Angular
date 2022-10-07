import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemeService } from '../meme.service';
import { MemeData } from '../model/meme.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Meme';
  memeData?: MemeData;
  memeIndex:number = 0;
  captions:string[] = [];
  memeId = "";
  value = "";
  boxes = "";
  imageUrl = ""


  constructor(private memeService: MemeService, private router: Router) {}

  ngOnInit(): void {
    this.getMemeData(this.memeIndex)
  }

  makeMeme() {
    console.log(this.captions)
    this.makeMemeData(this.memeId, this.captions)

    console.log(this.imageUrl)
    // if (this.imageUrl.length === 0) {
    //   return
    // } else {
    //   this.router.navigate(['meme', this.imageUrl])
    // }


  }

  skipMeme() {
    this.getMemeData(this.memeIndex+1)
  }

  shuffleMemes = (arr:any[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };

  private makeMemeData(memeId:string, captions:string[]) {


    this.memeService.makeMemeData(memeId, captions).subscribe({
      next: (response) => {
        let _url = response.data.url
        console.log(_url)
        this.imageUrl = _url
        this.router.navigate(['meme', this.imageUrl])
      }
    })



  }

  private getMemeData(memeIndex:number) {
    this.memeService.getMemeData().subscribe({
      next: (response) => {
        const _memes = response.data.memes;
        this.shuffleMemes(_memes);
        this.memeData = _memes[memeIndex];
        console.log(this.memeData)
        this.captions = Array(_memes[memeIndex].box_count).fill("");
        this.memeId = _memes[memeIndex].id

      }
    })
  }

}

