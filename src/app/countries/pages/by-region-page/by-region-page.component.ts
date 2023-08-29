import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../components/services/countries.service';
import { Country } from '../../components/interfaces/country';
import { Region } from '../../components/interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
      `
      .button2{
        color: white;
      }
      button{
        color: 'white';
      }
      H2{
      color: white;
    }
    `
  ]
})
export class ByRegionPageComponent implements OnInit{


  public region: Country [] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor( private countriesService:CountriesService ){}


  ngOnInit(): void {
    this.region =this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }


  searchRegion( term:Region ):void {

    this.selectedRegion = term;

    this.countriesService.searchRegion(term)
    .subscribe( region => {
      this.region = region;
    });
  }



}
