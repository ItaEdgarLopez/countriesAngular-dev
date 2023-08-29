import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../components/services/countries.service';
import { Country, Name, CapitalInfo } from '../../components/interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [ `
    H2{
      color: white;
    }
  `
  ]
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue:string = '';

  constructor( public countriesService:CountriesService ) {}


  ngOnInit(): void {
   this.countries = this.countriesService.cacheStore.byCapital.countries;
   this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term:string ):void {

    this.isLoading = true;

    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }




}
