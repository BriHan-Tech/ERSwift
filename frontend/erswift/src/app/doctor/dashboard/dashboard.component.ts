import { Component, OnInit } from '@angular/core';
import { interval, merge, forkJoin } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { IHospitalArea } from 'src/app/interfaces/ihospital-area';
import { HttpGetService } from 'src/app/services/http-get.service';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  hospital_areas: any = [];
  filtered_areas: any = [];

  get areaFilter(): string {
    return this.filterService.filterBy;
  }

  set areaFilter(value:string) {
    this.filterService.filterBy = value;
    this.filtered_areas = this.areaFilter ? this.performFilter(this.areaFilter) : this.hospital_areas;
  }


  constructor(private filterService: FilterService, private httpGetService: HttpGetService) { }


  ngOnInit(): void {
    // Combines the Observables
    const hospitalAreas = forkJoin([
      this.httpGetService.getPriorityAreas().pipe(),
      this.httpGetService.getHospitalAreas().pipe()
    ]).subscribe(
      areas => {
        this.sortAreas(areas);
        this.filterOnInit();
        console.log(areas)
      },
    );
  }
  
  // After Combining the Observables, the Observables look like:
  // [[{}{}{}][{}{}]]
  // Therefore, we for loop over the lists, and combine the 5 objects
  // into one big list.
  sortAreas(area:any) {
    for (let i=0; i < area.length; i++) {
      for (let j=0; j < area[i].length; j++) {
        this.hospital_areas.push(area[i][j]);
      }
    }
  }

  filterOnInit():void {
    if (this.filterService.filterBy) {
      this.filtered_areas = this.performFilter(this.filterService.filterBy);
    } else {
      this.filtered_areas = this.hospital_areas;
    }
  }


  performFilter(filterBy: string): any {
    return this.hospital_areas.filter((area: IHospitalArea) =>
      area.area.indexOf(filterBy) !== -1);
  }
}
