import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../components/services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../components/interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
    `
    h2, h3{
      color: white;
    }

    `
  ]
})
export class CountryPageComponent  implements OnInit{

  public country? : Country;


  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private CountriesService: CountriesService,
     ){}


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.CountriesService.searchCountryByAlphaCode( id )),
      )
      .subscribe( country => {
        if(!country)
        {
          return this.router.navigateByUrl('');
        }

        this.country = country;
        return;
      });
  };



}
