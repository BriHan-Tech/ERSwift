import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpGetService } from '../services/http-get.service';

@Component({
  selector: 'app-queue-position',
  templateUrl: './queue-position.component.html',
  styleUrls: ['./queue-position.component.scss']
})
export class QueuePositionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpGetService: HttpGetService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      
    )
    
  }

}
