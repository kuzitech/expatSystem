import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-faults',
  templateUrl: './faults.page.html',
  styleUrls: ['./faults.page.scss'],
})
export class FaultsPage implements OnInit {

  details = <any>[];
  fault = "heart-outline";
  color = "primary";
  favorite = false;
  favs = localStorage.getItem("favs") != null ? JSON.parse(localStorage.getItem("favs")) : [];

  constructor(
    private modal: ModalController,
    private navvy: NavParams
  ) {
    this.details = this.navvy.get('item');
    for(let [index, item] of this.favs.entries()){
      if(this.details.name == item.name){
        this.fault = "heart";
        this.color = "danger";
        this.favorite = true;
      }
    }
   }

  ngOnInit() {
  }

  close(){
    this.modal.dismiss();
  }

  async fav(boo){
    if(boo){
      return this.remove();
    }
    this.favs.push(this.details);
    localStorage.setItem("favs", JSON.stringify(this.favs));
    this.fault = "heart";
    this.color = "danger";
    this.favorite = true;
  }

  async remove(){
    for(let [index, item] of await this.favs.entries()){
      if(this.details.image == item.image){
        this.fault = "heart-outline";
        this.color = "primary";
        this.favs.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(this.favs));
        this.favorite = false;
      }
    }
  }

}
