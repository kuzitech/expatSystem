import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FaultsPage } from '../faults/faults.page';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  pageTitle: string = '';
  pageData = <any>[];

  constructor(private modalz: ModalController) { }

  ngOnInit() {
    this.pageData = localStorage.getItem("favs") != null ? JSON.parse(localStorage.getItem("favs")) : [];
  }

  

  async show(item:any){
    const detailsModal = await this.modalz.create({
      component: FaultsPage,
      componentProps: {item:item},
      cssClass: 'showModal'
    })
    detailsModal.present();
  }
}
