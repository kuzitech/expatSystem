import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Faults } from '../../../assets/mokas/mockdata.js';
import { FaultsPage } from '../faults/faults.page';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {

  pageTitle: string = '';
  pageData = <any>[];
  pages = {
    Android: 0,
    General: 1,
    Windows: 2,
    iPhone: 3
  }

  constructor(
    private modalz: ModalController,
    private navv: NavParams
  ) {
      this.pageTitle = this.navv.get('data');
   }

  ngOnInit() {
    this.pageData = Faults.brand[this.pages[this.pageTitle]];
  }

  close(){
    this.modalz.dismiss();
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
