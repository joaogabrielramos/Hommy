import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular';
class republica{
  image:string;
  title:string;
  subtitle:string;
  content:string;
  more:string;

}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  republicas:republica[];
  
  constructor() {}
  

  ngOnInit(){
    this.republicas = [
      {
      image:"assets/img/dorm2.jpg",
      title:"Quarto compartilhado - Tijuca",
      subtitle:"Republica",
      content:"Situada na Rua Tijuquinha número 123, Rio de Janeiro",
      more:"Mais...",
      },
      {
      image:"assets/img/dorm.jpg",
      title:"Quarto individual - Ilha do Governador",
      subtitle:"Republica",
      content:"Situada na Rua Ilhazinha número 457,Rio de Janeiro",
      more:"Mais...",
      },
      {
      image:"assets/img/dorm.jpg",
      title:"Quarto individual - Ilha do Governador",
      subtitle:"Republica",
      content:"Situada na Rua Ilhazinha número 457,Rio de Janeiro",
      more:"Mais...",
        
      },
      {
      image:"https://images.unsplash.com/photo-1576095910326-9de5a8b207e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title:"Quarto individual - Barra da Tijuca",
      subtitle:"Republica",
      content:"Situada na Rua Barrinha número 223, Rio de Janeiro",
      more:"Mais...",
      },
      {
      image:"https://images.unsplash.com/photo-1588750653876-52ad8a14af1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title:"Quarto individual - Seropédica",
      subtitle:"Republica",
      content:"Situada na Rua Seropedinha número 220, Rio de Janeiro",
      more:"Mais...",

      },
      {
        image:"https://images.unsplash.com/photo-1574716236621-87d2be17b3a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title:"Quarto compartilhado - Niterói",
        subtitle:"republica",
        content:"Situada na Rua Niteróizinha número 447, Rio de Janeiro",
        more:"Mais...",


      }
     
    ]}
    
}
