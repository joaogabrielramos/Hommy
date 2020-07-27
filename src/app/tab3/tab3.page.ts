import { Component } from '@angular/core';
class favorito{
  image:string;
  title:string;
  subtitle:string;
  content:string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  favoritos:favorito[];

  constructor() {}

  ngOnInit(){
    this.favoritos = [
      {
      image:"assets/img/dorm2.jpg",
      title:"Quarto compartilhado - Tijuca",
      subtitle:"Republica",
      content:"Situada na Rua Tijuquinha número 123, Rio de Janeiro. Contas inclusas(água,luz,gás), preço mensal:R$300.00 reais. Permitidos:Crianças e animais. Proibido :Fumar "
       
      
      },
      {
      image:"https://images.unsplash.com/photo-1588750653876-52ad8a14af1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title:"Quarto individual - Seropédica",
      subtitle:"Republica",
      content:"Situada na Rua Seropedinha número 220, Rio de Janeiro. Contas não inclusas, preço mensal:R$150.00. Permitidos: Crianças, Proibido:Fumar e animais.",
      
     
      },
      
     
    ]}
}
