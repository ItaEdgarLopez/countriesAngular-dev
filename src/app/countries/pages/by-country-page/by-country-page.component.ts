import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../components/services/countries.service';
import { Country } from '../../components/interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
      `
      H2{
      color: white;
    }
    `
  ]
})
export class ByCountryPageComponent implements OnInit {

  public country: Country[] = [];
  public initialValue:string = '';

  constructor( private countriesService:CountriesService){}



  ngOnInit(): void {
    this.country = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchCountry( term:string ):void {
    this.countriesService.searchCountry(term)
    .subscribe( country => {
      this.country = country;
    });
  }

}
