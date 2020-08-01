import { Component } from '@angular/core';
class favoritos{
  image:string;
  title:string;
  subtitle:string;
  content:string;
  kitchenComplete:Boolean;
  freeWifi:boolean;
  bedroomComplete:boolean;
  freeBedroom:number;
  contas:boolean;
  ownerName:string;
  ownerPhoto:string;

}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 favoritos:any;

  constructor() {}

  ngOnInit(){
    this.favoritos = 
      {
      image:"assets/img/dorm2.jpg",
      title:"Quarto compartilhado - Tijuca",
      subtitle:"Republica",
      content:"Situada na Rua Tijuquinha número 123, Rio de Janeiro. Preço mensal:R$500.00 reais. Permitidos:Crianças e animais. Proibido :Fumar ",
      kitchenComplete:true,
      freeWifi:true,
      bedroomComplete:true,
      freeBedroom:2,
      contas:true,
      ownerName:"samuel",
      ownerPhoto:"../assets/img/profile.png"
      }
     
      
     
    }
}
