import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IRCTC Next Generation eTicket Booking';

  constructor(private titleData: Title, private meta: Meta) {

  }

  ngOnInit(): void {
    // this.meta.removeTag('name=keywords')
    this.titleData.setTitle(this.title)
    this.meta.addTag({ name: 'keywords', content: 'Angular Project, Create Angular Project' });
    this.meta.addTag({ name: 'description', content: 'Angular project training on rsgitech.com' });
    this.meta.addTag({ name: 'author', content: 'rsgitech' });
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'keywords', content: 'Web Devlopment, Software Development' });
  }
}
