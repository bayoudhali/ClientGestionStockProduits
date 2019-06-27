import {Component,OnInit} from "@angular/core";
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

import {Produit} from '../shared/produit';
import {ProduitService} from './produit.service';

@Component({

  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit{

produits:Produit[];
produitForm: FormGroup;

operation: string = 'add';

selectedProduit : Produit;

constructor(private ServiceProduit:ProduitService, private fb: FormBuilder){
  this.produitForm=this.fb.group({
    ref:['', Validators.required],
    quantite:'',
    prixunitaire:''
  });
}

ngOnInit(){
  this.initProduit();
  this.loadProduit();
}

loadProduit(){

  this.ServiceProduit.getProduits().subscribe(
    data => {this.produits =data},
    error => {console.log('error to display data')},
    () => {console.log('succes to load data')}
  );
}

addProduit(){
  const p =this.produitForm.value;
this.ServiceProduit.addProduit(p).subscribe(
  res => {
    this.loadProduit();

  }
)
}
//updateProduit(){

//  this.ServiceProduit.updateProduit().subscribe(
  //  res => {
  //    this.loadProduit();

  //  }
//  )
//}

//deleteProduit(){
  //this.ServiceProduit.deleteProduit().subscribe(

    //res => {
      //this.loadProduit();
  //  }
//}

initProduit() {
  this.selectedProduit = new Produit();
}

}
