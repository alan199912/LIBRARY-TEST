"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[508],{906:(Z,C,o)=>{o.d(C,{L:()=>m});var d=o(6362),e=o(9349);const u=["checkbox"];function t(a,s){if(1&a){const n=e.EpF();e.TgZ(0,"th",5)(1,"input",6),e.NdJ("change",function(f){e.CHM(n);const b=e.oxw(2);return e.KtG(b.allSelected(f.target))}),e.qZA()()}}function i(a,s){if(1&a&&(e.TgZ(0,"th",5),e._uU(1),e.qZA()),2&a){const n=s.$implicit;e.xp6(1),e.Oqu(n.value)}}function c(a,s){if(1&a){const n=e.EpF();e.TgZ(0,"td")(1,"input",6,9),e.NdJ("change",function(f){e.CHM(n);const b=e.oxw(3);return e.KtG(b.selectedRow(f.target))}),e.qZA()()}}function l(a,s){if(1&a&&e._UZ(0,"td",10),2&a){const n=s.$implicit,p=e.oxw().$implicit;e.Q6J("innerHTML",p[n.key],e.oJD)}}function g(a,s){if(1&a&&(e.TgZ(0,"tr"),e.YNc(1,c,3,0,"td",7),e.YNc(2,l,1,1,"td",8),e.qZA()),2&a){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.isSelectable),e.xp6(1),e.Q6J("ngForOf",n.displayedColumns)}}const T=function(a,s,n){return{"table-bordered":a,"table-striped":s,"table-hover":n}};function x(a,s){if(1&a&&(e.TgZ(0,"table",1)(1,"thead")(2,"tr"),e.YNc(3,t,2,0,"th",2),e.YNc(4,i,2,1,"th",3),e.qZA()(),e.TgZ(5,"tbody"),e.YNc(6,g,3,2,"tr",4),e.qZA()()),2&a){const n=e.oxw();e.Q6J("ngClass",e.kEZ(4,T,n.isBordered,n.isStriped,n.isHover)),e.xp6(3),e.Q6J("ngIf",n.isSelectable),e.xp6(1),e.Q6J("ngForOf",n.displayedColumns),e.xp6(2),e.Q6J("ngForOf",n.dataSource)}}let m=(()=>{class a{constructor(n){this.renderer=n,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new e.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(n=>{this.inputCheckArr.push(n.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(n=>{if(""===n.key||""===n.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(n=>n.value=n.value.trim()),this.displayedColumns=this.displayedColumns.map(n=>(n.value=n.value.charAt(0).toUpperCase()+n.value.slice(1).toLowerCase(),n)),this.displayedColumns.map(n=>{if(n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&n.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,n;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(n){n.checked?(this.checkbox.map(p=>this.renderer.setProperty(p.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(p=>this.renderer.setProperty(p.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(n){const p=this.inputCheckArr.indexOf(n);n.checked?this.DataSelectedArr.push(this.dataSource[p]):this.DataSelectedArr=this.DataSelectedArr.filter((f,b)=>b!==p),this.dataSelected.emit(this.DataSelectedArr)}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(e.Qsj))},a.\u0275cmp=e.Xpm({type:a,selectors:[["o-table"]],viewQuery:function(n,p){if(1&n&&e.Gf(u,5),2&n){let f;e.iGM(f=e.CRH())&&(p.checkbox=f)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(n,p){1&n&&e.YNc(0,x,7,8,"table",0),2&n&&e.Q6J("ngIf",p.isValidateComponent)},dependencies:[d.ez,d.mk,d.sg,d.O5]}),a})()},1225:(Z,C,o)=>{o.d(C,{c:()=>t});var d=o(6362),e=o(9349);function u(i,c){if(1&i&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&i){const l=c.$implicit;e.xp6(1),e.Q6J("innerHTML",l,e.oJD)}}let t=(()=>{class i{constructor(){this.practices=[]}}return i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(l,g){1&l&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Malas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,u,2,1,"li",2),e.qZA()()),2&l&&(e.xp6(4),e.Q6J("ngForOf",g.practices))},dependencies:[d.ez,d.sg]}),i})()},553:(Z,C,o)=>{o.d(C,{s:()=>t});var d=o(6362),e=o(9349);function u(i,c){if(1&i&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&i){const l=c.$implicit;e.xp6(1),e.Q6J("innerHTML",l,e.oJD)}}let t=(()=>{class i{constructor(){this.practices=[]}}return i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(l,g){1&l&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Buenas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,u,2,1,"li",2),e.qZA()()),2&l&&(e.xp6(4),e.Q6J("ngForOf",g.practices))},dependencies:[d.ez,d.sg]}),i})()},4948:(Z,C,o)=>{o.d(C,{B:()=>x});var d=o(6362),e=o(9349);function u(m,a){if(1&m){const s=e.EpF();e.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),e.NdJ("click",function(){e.CHM(s);const p=e.oxw();return e.KtG(p.isWindowHTML=!0)}),e.TgZ(4,"span"),e._uU(5,"HTML"),e.qZA()(),e.TgZ(6,"a",4),e.NdJ("click",function(){e.CHM(s);const p=e.oxw();return e.KtG(p.isWindowHTML=!1)}),e.TgZ(7,"span"),e._uU(8,"TS"),e.qZA()()()()()}if(2&m){const s=e.oxw();e.xp6(3),e.ekj("active",s.isWindowHTML),e.xp6(3),e.ekj("active",!s.isWindowHTML)}}function t(m,a){1&m&&(e.ynx(0),e.Hsn(1),e.BQk())}function i(m,a){1&m&&(e.ynx(0),e.Hsn(1,1),e.BQk())}function c(m,a){if(1&m&&e.YNc(0,i,2,0,"ng-container",7),2&m){const s=e.oxw(),n=e.MAs(16);e.Q6J("ngIf",s.isWindowHTML)("ngIfElse",n)}}function l(m,a){1&m&&e.Hsn(0,2)}const g=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],T=["[component]","[component-html]","[component-ts]"];let x=(()=>{class m{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return m.\u0275fac=function(s){return new(s||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[e.jDz],ngContentSelectors:T,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(s,n){if(1&s&&(e.F$t(g),e.TgZ(0,"div",0)(1,"div",1)(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),e.NdJ("click",function(){return n.isOpenCode=!n.isOpenCode}),e.TgZ(8,"span"),e._uU(9),e.qZA()()()()()(),e.TgZ(10,"div",5),e.YNc(11,u,9,4,"nav",6),e.YNc(12,t,2,0,"ng-container",7),e.YNc(13,c,1,2,"ng-template",null,8,e.W1O),e.YNc(15,l,1,0,"ng-template",null,9,e.W1O),e.qZA()()),2&s){const p=e.MAs(14);e.xp6(3),e.Oqu(n.title),e.xp6(4),e.ekj("active",n.isOpenCode),e.xp6(2),e.Oqu(n.linkCode),e.xp6(2),e.Q6J("ngIf",n.isOpenCode&&n.isNavCode),e.xp6(1),e.Q6J("ngIf",!n.isOpenCode)("ngIfElse",p)}},dependencies:[d.ez,d.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),m})()},3508:(Z,C,o)=>{o.r(C),o.d(C,{CardEventSimpleModule:()=>S});var d=o(6362),e=o(7638),u=o(6527),t=o(9349),i=o(553),c=o(1225);let l=(()=>{class r{constructor(){this.bestPractices=u.qO,this.badPractices=u.RB}}return r.\u0275fac=function(_){return new(_||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-card-event-simple-overview"]],decls:17,vars:2,consts:[[1,"section-overview"],[1,"lead"],[1,""],[1,"section-design"],["src","https://gcba.github.io/estandares/componentes/card/vertical.svg","alt","imagen sobre carteles de noticia",1,"card-img-top"],[1,"section-usability"],[3,"practices"]],template:function(_,v){1&_&&(t.TgZ(0,"section",0)(1,"p",1),t._uU(2," Las tarjetas agrupan informaci\xf3n en contenedores flexibles y act\xfaan como punto de entrada que permite introducir un tema en espec\xedfico. "),t.qZA(),t.TgZ(3,"div",2)(4,"p"),t._uU(5,"Se utilizan para acceder a informaci\xf3n y dependen de un encabezado que las agrupe."),t.qZA()(),t.TgZ(6,"div",3)(7,"h2"),t._uU(8,"Dise\xf1o y estructura (Contexto de uso)"),t.qZA(),t.TgZ(9,"p"),t._uU(10," En su disposici\xf3n horizontal pueden organizarse solo 3 por l\xednea en desktop. Al truncar el layout como en mobile, se agrupan para un desplazamiento horizontal. "),t.qZA()(),t._UZ(11,"img",4),t.TgZ(12,"div",5)(13,"h2"),t._uU(14,"Usabilidad"),t.qZA(),t._UZ(15,"app-best-practices",6)(16,"app-bad-practices",6),t.qZA()()),2&_&&(t.xp6(15),t.Q6J("practices",v.bestPractices),t.xp6(1),t.Q6J("practices",v.badPractices))},dependencies:[i.s,c.c]}),r})();var g=o(5570),T=o(906),x=o(6434);let m=(()=>{class r{constructor(){this.columns=g.L0,this.dataSource=[{name:"@Input() <br/> title: string",description:"Se utiliza para colocar el t\xedtulo del card."},{name:"@Input() <br/> text: string",description:"Se utiliza para colocar el texto del card."},{name:"@Input() <br/> img: string",description:"Se utiliza para colocar la imagen del card."},{name:"@Input() <br/> date: Date",description:"Se utiliza para colocar la fecha del card."},{name:"@Input() <br/> route: string",description:"Se utiliza para establecer la ruta del hiperv\xednculo con el routing de Angular."},{name:"@Input() <br/> link: string",description:"Se utiliza para establecer el hiperv\xednculo del card."},{name:"@Input() <br/> hours: number[]",description:"Se utiliza para colocar las horas del card."}]}}return r.\u0275fac=function(_){return new(_||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-card-event-simple-api"]],decls:22,vars:4,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","code"," import { OCardModule } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"]],template:function(_,v){1&_&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2"),t._uU(3,"Referencia de API para el componente Tarjeta evento simple de Obelisco"),t.qZA(),t.TgZ(4,"pre",2),t._uU(5,"      "),t._UZ(6,"code",3),t._uU(7,"\n    "),t.qZA()(),t.TgZ(8,"h3"),t._uU(9,"Etiqueta"),t.qZA(),t._UZ(10,"hr"),t.TgZ(11,"div",4)(12,"h4"),t._uU(13,"OCardEventSimple"),t.qZA(),t.TgZ(14,"p"),t._uU(15,"Selector: "),t.TgZ(16,"strong"),t._uU(17,"o-card-event-simple"),t.qZA()(),t.TgZ(18,"div",5)(19,"h5"),t._uU(20,"Propiedades"),t.qZA(),t._UZ(21,"o-table",6),t.qZA()()()),2&_&&(t.xp6(21),t.Q6J("displayedColumns",v.columns)("dataSource",v.dataSource)("isStriped",!0)("isBordered",!0))},dependencies:[T.L,x.y]}),r})();var a=o(4948),s=o(1030),n=o(2171);const f=[{path:"overview",component:l},{path:"api",component:m},{path:"examples",component:(()=>{class r{constructor(){this.date=new Date,this.hours=[20,21,22],this.cardExampleHTML=u.nr,this.cardExampleTS=u.di}}return r.\u0275fac=function(_){return new(_||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-card-event-simple-examples"]],decls:20,vars:5,consts:[[1,"section-example"],["title","Simple",3,"isNavCode"],["component","",2,"width","500px"],["title","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed","text","Recomendamos en este espacio no utilizar m\xe1s de 3 l\xedneas, para generar una lectura \xf3ptima.","img","https://gcba.github.io/Obelisco/cards/evento.jpg","route","/components",3,"date","hours"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["appClipboard","","component-ts","",1,"code"],["appPrism",""]],template:function(_,v){1&_&&(t.TgZ(0,"section",0)(1,"app-viewer",1)(2,"div",2),t._UZ(3,"o-card-event-simple",3),t.qZA(),t.TgZ(4,"pre",4),t._uU(5,"      "),t.TgZ(6,"button",5),t._uU(7,"Copiar"),t.qZA(),t._uU(8,"\n      "),t.TgZ(9,"code",6),t._uU(10),t.qZA(),t._uU(11,"\n    "),t.qZA(),t.TgZ(12,"pre",7),t._uU(13,"      "),t.TgZ(14,"button",5),t._uU(15,"Copiar"),t.qZA(),t._uU(16,"\n      "),t.TgZ(17,"code",8),t._uU(18),t.qZA(),t._uU(19,"\n    "),t.qZA()()()),2&_&&(t.xp6(1),t.Q6J("isNavCode",!0),t.xp6(2),t.Q6J("date",v.date)("hours",v.hours),t.xp6(7),t.Oqu(v.cardExampleHTML),t.xp6(8),t.Oqu(v.cardExampleTS))},dependencies:[a.B,s.K,n.y,x.y]}),r})()},{path:"**",pathMatch:"full",redirectTo:"overview"}];let b=(()=>{class r{}return r.\u0275fac=function(_){return new(_||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[e.Bz.forChild(f),e.Bz]}),r})();var O=o(5185),E=o(6889);let S=(()=>{class r{}return r.\u0275fac=function(_){return new(_||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.ez,b,O.Z,i.s,c.c,T.L,a.B,E.V]}),r})()},2171:(Z,C,o)=>{o.d(C,{y:()=>e});var d=o(9349);let e=(()=>{class u{constructor(i,c){this.host=i,this.renderer=c}ngAfterViewInit(){if(navigator.clipboard){const i=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(i,"click",this.clipboard)}}clipboard(i){const c=i.target,l=null==c?void 0:c.parentElement,g=null==l?void 0:l.querySelector("code");navigator.clipboard.writeText(null==g?void 0:g.innerText),c.innerText="Codigo copiado!",setTimeout(()=>{c.innerText="Copiar"},1e3)}}return u.\u0275fac=function(i){return new(i||u)(d.Y36(d.SBq),d.Y36(d.Qsj))},u.\u0275dir=d.lG2({type:u,selectors:[["","appClipboard",""]],standalone:!0}),u})()}}]);
//# sourceMappingURL=508.0914ca8e93d05f0d.js.map