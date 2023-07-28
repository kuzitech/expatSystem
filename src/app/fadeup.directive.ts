import { Directive, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeup]'
})
export class FadeupDirective {
  @Input('appFadeup') showup : any;
  @Input('appFadeup') showupx : any;
  @ViewChild('showbg') bg : any;

  constructor(private render: Renderer2, private domc: DomController) { }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any){
    const scrollTop : number = $event.detail.scrollTop;
    let newopc = Math.max(100 - (scrollTop/3), 0);

    let bbs = document.getElementById("showup");
    let bbsx = document.getElementById("showupx");
    let modPage = document.querySelector(".brandModal ion-toolbar");
    let modPage2 = document.querySelector(".showModal ion-toolbar");
    let modPagebtn = document.querySelector(".brandModal ion-toolbar ion-button");
    let modPagebtn2 = document.querySelector(".showModal ion-toolbar ion-button");

    //console.log(scrollTop)
    if(scrollTop < 197){
      bbs != null ? this.render.removeClass(bbs, 'show') : '';
      bbs != null ? this.render.addClass(bbs, 'hide') : '';
      bbsx != null ? this.render.removeClass(bbsx, 'show') : '';
      bbsx != null ? this.render.addClass(bbsx, 'hide') : '';
      modPage != null ? this.render.addClass(modPage, 'no-background') : '';
      modPagebtn != null ? this.render.addClass(modPagebtn, 'tulbtn') : '';
      modPagebtn != null ? this.render.setAttribute(modPagebtn, 'color', 'light') : '';
      modPage2 != null ? this.render.addClass(modPage2, 'no-background') : '';
      modPagebtn2 != null ? this.render.addClass(modPagebtn2, 'tulbtn') : '';
      modPagebtn2 != null ? this.render.setAttribute(modPagebtn2, 'color', 'light') : '';
    }else{
      this.domc.write(()=>{
        //this.render.setStyle(this.showup, 'display', 'none');
        bbs != null ? this.render.addClass(bbs, 'abfix') : '';
        bbs != null ? this.render.removeClass(bbs, 'hide') : '';
        bbs != null ? this.render.addClass(bbs, 'show') : '';

        bbsx != null ? this.render.removeClass(bbsx, 'hide') : '';
        bbsx != null ? this.render.addClass(bbsx, 'show') : '';

        modPage != null ? this.render.removeClass(modPage, 'no-background') : '';
      modPagebtn != null ? this.render.removeClass(modPagebtn, 'tulbtn') : '';
      modPagebtn != null ? this.render.setAttribute(modPagebtn, 'color', 'medium') : '';
      modPage2 != null ? this.render.removeClass(modPage2, 'no-background') : '';
      modPagebtn2 != null ? this.render.removeClass(modPagebtn2, 'tulbtn') : '';
      modPagebtn2 != null ? this.render.setAttribute(modPagebtn2, 'color', 'medium') : '';
      })
    }

    
  }
}
