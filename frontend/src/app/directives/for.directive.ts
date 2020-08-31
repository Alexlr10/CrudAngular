import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<any>)
    { }

    @Input('myForEm') numbers: number[];
    //@Input('myForUsando') texto: string;

ngOnInit(): void {
    for(let number of this.numbers) {
        this.container.createEmbeddedView(
            this.template, { $implicit: number });
    }

        //console.log(this.numbers);
       // console.log(this.texto);
    }
}
