import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable()
export class ProduitMockService {

private Prod:Produit[]=[];

constructor(){

  let p1:Produit=new Produit('p1',20,30);
  let p2:Produit=new Produit('p2',30,40);
  let p3:Produit=new Produit('p3',40,50);
  this.Prod.push(p1);
  this.Prod.push(p2);
  this.Prod.push(p2);
}

public getProduit():Produit[]{
  return this.Prod;
}
}
