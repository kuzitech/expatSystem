import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FadeupDirective } from "./fadeup.directive";

@NgModule({
    declarations: [
        FadeupDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [ FadeupDirective]
})
export class CollectedDirectivesModule {}