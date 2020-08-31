import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HeroesService, Heroe} from "../../services/heroes.service"
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  search: any[] = []
  word:string
  @Input() idx: number
  @Input() heroe: any = {}
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService,
    private router: Router
  ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.word = params["word"]
      this.search = this._heroesServices.searchHeroes(params["word"])
      console.log(this.search)
    })
    
  }
  verHeroe(){
    this.router.navigate(["/heroe", this.idx])
  }

}
