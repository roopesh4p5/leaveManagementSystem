import { Component, } from '@angular/core';
import { NationalholidaysService } from '../allservice/nationalholidays.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nationalHolidays: any[] = [];
  selectedYear: number = new Date().getFullYear();

  constructor(private holidayService: NationalholidaysService ) { }

  ngOnInit(): void {
    this.getNationalHolidays();
  }

  getNationalHolidays() {
    this.holidayService.getNationalHolidays(this.selectedYear)
      .subscribe(data => {
        this.nationalHolidays = data;
        console.log(data);
      });
  }
}
