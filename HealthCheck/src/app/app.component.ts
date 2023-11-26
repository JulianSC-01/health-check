import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Wait 3 seconds to give the ASP.NET
    // Web API time to start.
    setTimeout(() => {
      this.getForecasts();
    }, 3000);
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').
      subscribe({
        next: (result) => {
          this.forecasts = result;
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }

  title = 'HealthCheck';
}
