"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[919],{906:(x,f,i)=>{i.d(f,{L:()=>_});var m=i(6362),t=i(9349);const C=["checkbox"];function e(r,s){if(1&r){const n=t.EpF();t.TgZ(0,"th",5)(1,"input",6),t.NdJ("change",function(h){t.CHM(n);const b=t.oxw(2);return t.KtG(b.allSelected(h.target))}),t.qZA()()}}function c(r,s){if(1&r&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&r){const n=s.$implicit;t.xp6(1),t.Oqu(n.value)}}function l(r,s){if(1&r){const n=t.EpF();t.TgZ(0,"td")(1,"input",6,9),t.NdJ("change",function(h){t.CHM(n);const b=t.oxw(3);return t.KtG(b.selectedRow(h.target))}),t.qZA()()}}function p(r,s){if(1&r&&t._UZ(0,"td",10),2&r){const n=s.$implicit,d=t.oxw().$implicit;t.Q6J("innerHTML",d[n.key],t.oJD)}}function v(r,s){if(1&r&&(t.TgZ(0,"tr"),t.YNc(1,l,3,0,"td",7),t.YNc(2,p,1,1,"td",8),t.qZA()),2&r){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns)}}const T=function(r,s,n){return{"table-bordered":r,"table-striped":s,"table-hover":n}};function Z(r,s){if(1&r&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr"),t.YNc(3,e,2,0,"th",2),t.YNc(4,c,2,1,"th",3),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,v,3,2,"tr",4),t.qZA()()),2&r){const n=t.oxw();t.Q6J("ngClass",t.kEZ(4,T,n.isBordered,n.isStriped,n.isHover)),t.xp6(3),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns),t.xp6(2),t.Q6J("ngForOf",n.dataSource)}}let _=(()=>{class r{constructor(n){this.renderer=n,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new t.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(n=>{this.inputCheckArr.push(n.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(n=>{if(""===n.key||""===n.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(n=>n.value=n.value.trim()),this.displayedColumns=this.displayedColumns.map(n=>(n.value=n.value.charAt(0).toUpperCase()+n.value.slice(1).toLowerCase(),n)),this.displayedColumns.map(n=>{if(n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&n.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,n;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(n){n.checked?(this.checkbox.map(d=>this.renderer.setProperty(d.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(d=>this.renderer.setProperty(d.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(n){const d=this.inputCheckArr.indexOf(n);n.checked?this.DataSelectedArr.push(this.dataSource[d]):this.DataSelectedArr=this.DataSelectedArr.filter((h,b)=>b!==d),this.dataSelected.emit(this.DataSelectedArr)}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(t.Qsj))},r.\u0275cmp=t.Xpm({type:r,selectors:[["o-table"]],viewQuery:function(n,d){if(1&n&&t.Gf(C,5),2&n){let h;t.iGM(h=t.CRH())&&(d.checkbox=h)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(n,d){1&n&&t.YNc(0,Z,7,8,"table",0),2&n&&t.Q6J("ngIf",d.isValidateComponent)},dependencies:[m.ez,m.mk,m.sg,m.O5]}),r})()},1225:(x,f,i)=>{i.d(f,{c:()=>e});var m=i(6362),t=i(9349);function C(c,l){if(1&c&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&c){const p=l.$implicit;t.xp6(1),t.Q6J("innerHTML",p,t.oJD)}}let e=(()=>{class c{constructor(){this.practices=[]}}return c.\u0275fac=function(p){return new(p||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(p,v){1&p&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Malas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,C,2,1,"li",2),t.qZA()()),2&p&&(t.xp6(4),t.Q6J("ngForOf",v.practices))},dependencies:[m.ez,m.sg]}),c})()},553:(x,f,i)=>{i.d(f,{s:()=>e});var m=i(6362),t=i(9349);function C(c,l){if(1&c&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&c){const p=l.$implicit;t.xp6(1),t.Q6J("innerHTML",p,t.oJD)}}let e=(()=>{class c{constructor(){this.practices=[]}}return c.\u0275fac=function(p){return new(p||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(p,v){1&p&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Buenas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,C,2,1,"li",2),t.qZA()()),2&p&&(t.xp6(4),t.Q6J("ngForOf",v.practices))},dependencies:[m.ez,m.sg]}),c})()},4948:(x,f,i)=>{i.d(f,{B:()=>Z});var m=i(6362),t=i(9349);function C(_,r){if(1&_){const s=t.EpF();t.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),t.NdJ("click",function(){t.CHM(s);const d=t.oxw();return t.KtG(d.isWindowHTML=!0)}),t.TgZ(4,"span"),t._uU(5,"HTML"),t.qZA()(),t.TgZ(6,"a",4),t.NdJ("click",function(){t.CHM(s);const d=t.oxw();return t.KtG(d.isWindowHTML=!1)}),t.TgZ(7,"span"),t._uU(8,"TS"),t.qZA()()()()()}if(2&_){const s=t.oxw();t.xp6(3),t.ekj("active",s.isWindowHTML),t.xp6(3),t.ekj("active",!s.isWindowHTML)}}function e(_,r){1&_&&(t.ynx(0),t.Hsn(1),t.BQk())}function c(_,r){1&_&&(t.ynx(0),t.Hsn(1,1),t.BQk())}function l(_,r){if(1&_&&t.YNc(0,c,2,0,"ng-container",7),2&_){const s=t.oxw(),n=t.MAs(16);t.Q6J("ngIf",s.isWindowHTML)("ngIfElse",n)}}function p(_,r){1&_&&t.Hsn(0,2)}const v=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],T=["[component]","[component-html]","[component-ts]"];let Z=(()=>{class _{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return _.\u0275fac=function(s){return new(s||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[t.jDz],ngContentSelectors:T,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(s,n){if(1&s&&(t.F$t(v),t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),t.NdJ("click",function(){return n.isOpenCode=!n.isOpenCode}),t.TgZ(8,"span"),t._uU(9),t.qZA()()()()()(),t.TgZ(10,"div",5),t.YNc(11,C,9,4,"nav",6),t.YNc(12,e,2,0,"ng-container",7),t.YNc(13,l,1,2,"ng-template",null,8,t.W1O),t.YNc(15,p,1,0,"ng-template",null,9,t.W1O),t.qZA()()),2&s){const d=t.MAs(14);t.xp6(3),t.Oqu(n.title),t.xp6(4),t.ekj("active",n.isOpenCode),t.xp6(2),t.Oqu(n.linkCode),t.xp6(2),t.Q6J("ngIf",n.isOpenCode&&n.isNavCode),t.xp6(1),t.Q6J("ngIf",!n.isOpenCode)("ngIfElse",d)}},dependencies:[m.ez,m.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),_})()},919:(x,f,i)=>{i.r(f),i.d(f,{CardEventModule:()=>I});var m=i(6362),t=i(7638),C=i(5570),e=i(9349),c=i(906),l=i(6434);let p=(()=>{class a{constructor(){this.columns=C.L0,this.dataSource=[{name:"@Input() <br/> title: string",description:"Se utiliza para colocar el t\xedtulo del card."},{name:"@Input() <br/> eventName: string",description:"Se utiliza para colocar el nombre del evento del card."},{name:"@Input() <br/> initialDate: Date",description:"Se utiliza para colocar la fecha en la que inicia el evento."},{name:"@Input() <br/> finalDate: Date",description:"Se utiliza para colocar la fecha en la que finaliza el evento."},{name:"@Input() <br/> img: string",description:"Se utiliza para colocar la imagen del card."},{name:"@Input() <br/> imgEvent: string",description:"Se utiliza para colocar la imagen del evento del card."},{name:"@Input() <br/> link: string",description:"Se utiliza para establecer el hiperv\xednculo del card."},{name:"@Input() <br/> route: string",description:"Se utiliza para establecer la ruta del hiperv\xednculo con el routing de Angular."}]}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-card-event-api"]],decls:22,vars:4,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","code"," import { OCardModule } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"]],template:function(o,g){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2"),e._uU(3,"Referencia de API para el componente Tarjeta evento de Obelisco"),e.qZA(),e.TgZ(4,"pre",2),e._uU(5,"      "),e._UZ(6,"code",3),e._uU(7,"\n    "),e.qZA()(),e.TgZ(8,"h3"),e._uU(9,"Etiqueta"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"OCardEvent"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Selector: "),e.TgZ(16,"strong"),e._uU(17,"o-card-event"),e.qZA()(),e.TgZ(18,"div",5)(19,"h5"),e._uU(20,"Propiedades"),e.qZA(),e._UZ(21,"o-table",6),e.qZA()()()),2&o&&(e.xp6(21),e.Q6J("displayedColumns",g.columns)("dataSource",g.dataSource)("isStriped",!0)("isBordered",!0))},dependencies:[c.L,l.y]}),a})();var v=i(6527),T=i(4948),Z=i(1515);let _=(()=>{class a{transform(o){return o.toLocaleDateString("es",{day:"numeric",month:"long"})}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275pipe=e.Yjl({name:"numberDayMonthFormatPipe",type:a,pure:!0,standalone:!0}),a})();const r=["card"];function s(a,u){if(1&a&&e._UZ(0,"img",9),2&a){const o=e.oxw();e.Q6J("src",o.img,e.LSH)("alt",o.title)}}function n(a,u){if(1&a&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&a){const o=e.oxw();e.xp6(1),e.Q6J("src",o.imgEvent,e.LSH)}}function d(a,u){if(1&a&&(e.TgZ(0,"p",12),e._uU(1),e.qZA()),2&a){const o=e.oxw();e.xp6(1),e.Oqu(o.eventName)}}function h(a,u){if(1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"numberDayMonthFormatPipe"),e.BQk()),2&a){const o=e.oxw(2);e.xp6(1),e.hij("al ",e.lcZ(2,1,o.finalDate),"")}}function b(a,u){if(1&a&&(e.TgZ(0,"p",13),e._uU(1),e.ALo(2,"numberDayMonthFormatPipe"),e.YNc(3,h,3,3,"ng-container",14),e.qZA()),2&a){const o=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,2,o.initialDate)," "),e.xp6(2),e.Q6J("ngIf",o.finalDate)}}let A=(()=>{class a{constructor(o){this.renderer=o}ngAfterViewInit(){this.link&&this.renderer.setAttribute(this.card.nativeElement,"href",this.link)}}return a.\u0275fac=function(o){return new(o||a)(e.Y36(e.Qsj))},a.\u0275cmp=e.Xpm({type:a,selectors:[["o-card-event"]],viewQuery:function(o,g){if(1&o&&e.Gf(r,5),2&o){let y;e.iGM(y=e.CRH())&&(g.card=y.first)}},inputs:{title:"title",eventName:"eventName",initialDate:"initialDate",finalDate:"finalDate",headline:"headline",img:"img",imgEvent:"imgEvent",link:"link",route:"route"},decls:10,vars:6,consts:[[1,"card",3,"routerLink"],["card",""],[1,"card-event-top"],["oDefaultImage","","class","card-event-bg",3,"src","alt",4,"ngIf"],["class","card-event-img",4,"ngIf"],["class","card-event-name",4,"ngIf"],[1,"card-body"],["class","card-headline",4,"ngIf"],[1,"card-title"],["oDefaultImage","",1,"card-event-bg",3,"src","alt"],[1,"card-event-img"],["oDefaultImage","","alt","descripci\xf3n alternativa",3,"src"],[1,"card-event-name"],[1,"card-headline"],[4,"ngIf"]],template:function(o,g){1&o&&(e.TgZ(0,"a",0,1)(2,"div",2),e.YNc(3,s,1,2,"img",3),e.YNc(4,n,2,1,"div",4),e.YNc(5,d,2,1,"p",5),e.qZA(),e.TgZ(6,"div",6),e.YNc(7,b,4,4,"p",7),e.TgZ(8,"h4",8),e._uU(9),e.qZA()()()),2&o&&(e.Q6J("routerLink",g.route),e.xp6(3),e.Q6J("ngIf",g.img),e.xp6(1),e.Q6J("ngIf",g.imgEvent),e.xp6(1),e.Q6J("ngIf",g.eventName),e.xp6(2),e.Q6J("ngIf",g.initialDate),e.xp6(2),e.Oqu(g.title))},dependencies:[m.O5,t.yS,Z.z,_]}),a})();var w=i(2171);let M=(()=>{class a{constructor(){this.cardExampleHtml=v.Uo,this.cardExampleTs=v.sZ,this.initialDate=new Date("January 18"),this.finalDate=new Date("February 1")}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-card-event-examples"]],decls:20,vars:5,consts:[[1,"section-example"],["title","Simple",3,"isNavCode"],["component","",2,"width","500px"],["title","Comienza una nueva edici\xf3n de actividades en polideportivos","eventName","Actividades y clases en polideportivos","img","https://gcba.github.io/Obelisco/cards/evento-bg.jpg","imgEvent","https://gcba.github.io/Obelisco/cards/evento-thumb.jpg","route","/components",3,"initialDate","finalDate"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["appClipboard","","component-ts","",1,"code"],["appPrism",""]],template:function(o,g){1&o&&(e.TgZ(0,"section",0)(1,"app-viewer",1)(2,"div",2),e._UZ(3,"o-card-event",3),e.qZA(),e.TgZ(4,"pre",4),e._uU(5,"      "),e.TgZ(6,"button",5),e._uU(7,"Copiar"),e.qZA(),e._uU(8,"\n      "),e.TgZ(9,"code",6),e._uU(10),e.qZA(),e._uU(11,"\n    "),e.qZA(),e.TgZ(12,"pre",7),e._uU(13,"      "),e.TgZ(14,"button",5),e._uU(15,"Copiar"),e.qZA(),e._uU(16,"\n      "),e.TgZ(17,"code",8),e._uU(18),e.qZA(),e._uU(19,"\n    "),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("isNavCode",!0),e.xp6(2),e.Q6J("initialDate",g.initialDate)("finalDate",g.finalDate),e.xp6(7),e.Oqu(g.cardExampleHtml),e.xp6(8),e.Oqu(g.cardExampleTs))},dependencies:[T.B,A,w.y,l.y]}),a})();var O=i(553),E=i(1225);const D=[{path:"overview",component:(()=>{class a{constructor(){this.bestPractices=v.qO,this.badPractices=v.RB}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-card-event-overview"]],decls:17,vars:2,consts:[[1,"section-overview"],[1,"lead"],[1,""],[1,"section-design"],["src","https://gcba.github.io/estandares/componentes/card/vertical.svg","alt","imagen sobre carteles de noticia",1,"card-img-top"],[1,"section-usability"],[3,"practices"]],template:function(o,g){1&o&&(e.TgZ(0,"section",0)(1,"p",1),e._uU(2," Las tarjetas agrupan informaci\xf3n en contenedores flexibles y act\xfaan como punto de entrada que permite introducir un tema en espec\xedfico. "),e.qZA(),e.TgZ(3,"div",2)(4,"p"),e._uU(5,"Se utilizan para acceder a informaci\xf3n y dependen de un encabezado que las agrupe."),e.qZA()(),e.TgZ(6,"div",3)(7,"h2"),e._uU(8,"Dise\xf1o y estructura (Contexto de uso)"),e.qZA(),e.TgZ(9,"p"),e._uU(10," En su disposici\xf3n horizontal pueden organizarse solo 3 por l\xednea en desktop. Al truncar el layout como en mobile, se agrupan para un desplazamiento horizontal. "),e.qZA()(),e._UZ(11,"img",4),e.TgZ(12,"div",5)(13,"h2"),e._uU(14,"Usabilidad"),e.qZA(),e._UZ(15,"app-best-practices",6)(16,"app-bad-practices",6),e.qZA()()),2&o&&(e.xp6(15),e.Q6J("practices",g.bestPractices),e.xp6(1),e.Q6J("practices",g.badPractices))},dependencies:[O.s,E.c]}),a})()},{path:"api",component:p},{path:"examples",component:M},{path:"**",pathMatch:"full",redirectTo:"overview"}];let P=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[t.Bz.forChild(D),t.Bz]}),a})();var S=i(5185),U=i(6889);let I=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.ez,P,S.Z,O.s,E.c,c.L,T.B,U.V]}),a})()},2171:(x,f,i)=>{i.d(f,{y:()=>t});var m=i(9349);let t=(()=>{class C{constructor(c,l){this.host=c,this.renderer=l}ngAfterViewInit(){if(navigator.clipboard){const c=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(c,"click",this.clipboard)}}clipboard(c){const l=c.target,p=null==l?void 0:l.parentElement,v=null==p?void 0:p.querySelector("code");navigator.clipboard.writeText(null==v?void 0:v.innerText),l.innerText="Codigo copiado!",setTimeout(()=>{l.innerText="Copiar"},1e3)}}return C.\u0275fac=function(c){return new(c||C)(m.Y36(m.SBq),m.Y36(m.Qsj))},C.\u0275dir=m.lG2({type:C,selectors:[["","appClipboard",""]],standalone:!0}),C})()}}]);
//# sourceMappingURL=919.8f04a85a487f86e2.js.map