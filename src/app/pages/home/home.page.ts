import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AnimationController } from '@ionic/angular';
import { Faults } from '../../../assets/mokas/mockdata.js';
import { BrandPage } from '../brand/brand.page';
import { FaultsPage } from '../faults/faults.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  quickfaults = [
    {
      name: 'Charger',
      logo: 'battery-charging-outline'
    },
    {
      name: 'Battery',
      logo: 'battery-dead-outline'
    },
    {
      name: 'Screen',
      logo: 'phone-portrait-outline'
    },
    {
      name: 'Camera',
      logo: 'videocam-outline'
    }
  ];

  items = {
    Battery: 2,
    Charger: 1,
    Camera: 3,
    Screen: 0
  }

  opts = {
    slidesPerView: 3.4,
    spaceBetween: 10,
    freeMode: true
  };

  constructor(
    private modal: ModalController,
    private render: AnimationController,
    private router: Router
  ) { }

  ngOnInit() {

  }

  changeMode(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDark.addListener((e) => console.log(e.matches));
    document.querySelector('body').classList.toggle('dark');
  }

  async slideclick(a:string){    
    const detailsModal = await this.modal.create({
      component: FaultsPage,
      componentProps: {item:Faults.brand[1].faults[this.items[a]]},
      cssClass: 'showModal'
    })
    detailsModal.present();
  }

  async faulty(name:string){
    const fmodal = await this.modal.create({
      component: BrandPage,
      componentProps: {data:name},
      animated: true,
      //enterAnimation: this.enterAnimation,
      //leaveAnimation: this.leaveAnimation,
      cssClass: ['brandModal']
    })
    fmodal.present();


  }

  history(){
    this.router.navigate(['favorites']);
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.render
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.render
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' },
      ]);

    return this.render
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;



    const wrapperAnimation = this.render
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, transform: 'translate3d(0, 10px, 0) scaleY(0.995)' },
        { offset: 0.4, opacity: '1', transform: 'translate3d(0, -5px, 0) scaleY(0.9)' },
        { offset: 1, opacity: '0', transform: 'translate3d(0, 200px, 0) scaleY(3)' },
      ]);

    
    return this.render
      .create()
      .addElement(baseEl)
      .easing('ease-in')
      .duration(200)
      .addAnimation([wrapperAnimation]);
  };

}