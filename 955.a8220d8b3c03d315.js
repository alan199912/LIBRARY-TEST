"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[955],{906:(O,g,o)=>{o.d(g,{L:()=>t});var m=o(6362),e=o(9349);const u=["checkbox"];function C(a,r){if(1&a){const n=e.EpF();e.TgZ(0,"th",5)(1,"input",6),e.NdJ("change",function(T){e.CHM(n);const Z=e.oxw(2);return e.KtG(Z.allSelected(T.target))}),e.qZA()()}}function s(a,r){if(1&a&&(e.TgZ(0,"th",5),e._uU(1),e.qZA()),2&a){const n=r.$implicit;e.xp6(1),e.Oqu(n.value)}}function l(a,r){if(1&a){const n=e.EpF();e.TgZ(0,"td")(1,"input",6,9),e.NdJ("change",function(T){e.CHM(n);const Z=e.oxw(3);return e.KtG(Z.selectedRow(T.target))}),e.qZA()()}}function c(a,r){if(1&a&&e._UZ(0,"td",10),2&a){const n=r.$implicit,p=e.oxw().$implicit;e.Q6J("innerHTML",p[n.key],e.oJD)}}function _(a,r){if(1&a&&(e.TgZ(0,"tr"),e.YNc(1,l,3,0,"td",7),e.YNc(2,c,1,1,"td",8),e.qZA()),2&a){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.isSelectable),e.xp6(1),e.Q6J("ngForOf",n.displayedColumns)}}const x=function(a,r,n){return{"table-bordered":a,"table-striped":r,"table-hover":n}};function h(a,r){if(1&a&&(e.TgZ(0,"table",1)(1,"thead")(2,"tr"),e.YNc(3,C,2,0,"th",2),e.YNc(4,s,2,1,"th",3),e.qZA()(),e.TgZ(5,"tbody"),e.YNc(6,_,3,2,"tr",4),e.qZA()()),2&a){const n=e.oxw();e.Q6J("ngClass",e.kEZ(4,x,n.isBordered,n.isStriped,n.isHover)),e.xp6(3),e.Q6J("ngIf",n.isSelectable),e.xp6(1),e.Q6J("ngForOf",n.displayedColumns),e.xp6(2),e.Q6J("ngForOf",n.dataSource)}}let t=(()=>{class a{constructor(n){this.renderer=n,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new e.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(n=>{this.inputCheckArr.push(n.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(n=>{if(""===n.key||""===n.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(n=>n.value=n.value.trim()),this.displayedColumns=this.displayedColumns.map(n=>(n.value=n.value.charAt(0).toUpperCase()+n.value.slice(1).toLowerCase(),n)),this.displayedColumns.map(n=>{if(n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&n.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,n;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(n){n.checked?(this.checkbox.map(p=>this.renderer.setProperty(p.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(p=>this.renderer.setProperty(p.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(n){const p=this.inputCheckArr.indexOf(n);n.checked?this.DataSelectedArr.push(this.dataSource[p]):this.DataSelectedArr=this.DataSelectedArr.filter((T,Z)=>Z!==p),this.dataSelected.emit(this.DataSelectedArr)}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(e.Qsj))},a.\u0275cmp=e.Xpm({type:a,selectors:[["o-table"]],viewQuery:function(n,p){if(1&n&&e.Gf(u,5),2&n){let T;e.iGM(T=e.CRH())&&(p.checkbox=T)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(n,p){1&n&&e.YNc(0,h,7,8,"table",0),2&n&&e.Q6J("ngIf",p.isValidateComponent)},dependencies:[m.ez,m.mk,m.sg,m.O5]}),a})()},1225:(O,g,o)=>{o.d(g,{c:()=>C});var m=o(6362),e=o(9349);function u(s,l){if(1&s&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&s){const c=l.$implicit;e.xp6(1),e.Q6J("innerHTML",c,e.oJD)}}let C=(()=>{class s{constructor(){this.practices=[]}}return s.\u0275fac=function(c){return new(c||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(c,_){1&c&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Malas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,u,2,1,"li",2),e.qZA()()),2&c&&(e.xp6(4),e.Q6J("ngForOf",_.practices))},dependencies:[m.ez,m.sg]}),s})()},553:(O,g,o)=>{o.d(g,{s:()=>C});var m=o(6362),e=o(9349);function u(s,l){if(1&s&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&s){const c=l.$implicit;e.xp6(1),e.Q6J("innerHTML",c,e.oJD)}}let C=(()=>{class s{constructor(){this.practices=[]}}return s.\u0275fac=function(c){return new(c||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(c,_){1&c&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Buenas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,u,2,1,"li",2),e.qZA()()),2&c&&(e.xp6(4),e.Q6J("ngForOf",_.practices))},dependencies:[m.ez,m.sg]}),s})()},4948:(O,g,o)=>{o.d(g,{B:()=>h});var m=o(6362),e=o(9349);function u(t,a){if(1&t){const r=e.EpF();e.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),e.NdJ("click",function(){e.CHM(r);const p=e.oxw();return e.KtG(p.isWindowHTML=!0)}),e.TgZ(4,"span"),e._uU(5,"HTML"),e.qZA()(),e.TgZ(6,"a",4),e.NdJ("click",function(){e.CHM(r);const p=e.oxw();return e.KtG(p.isWindowHTML=!1)}),e.TgZ(7,"span"),e._uU(8,"TS"),e.qZA()()()()()}if(2&t){const r=e.oxw();e.xp6(3),e.ekj("active",r.isWindowHTML),e.xp6(3),e.ekj("active",!r.isWindowHTML)}}function C(t,a){1&t&&(e.ynx(0),e.Hsn(1),e.BQk())}function s(t,a){1&t&&(e.ynx(0),e.Hsn(1,1),e.BQk())}function l(t,a){if(1&t&&e.YNc(0,s,2,0,"ng-container",7),2&t){const r=e.oxw(),n=e.MAs(16);e.Q6J("ngIf",r.isWindowHTML)("ngIfElse",n)}}function c(t,a){1&t&&e.Hsn(0,2)}const _=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],x=["[component]","[component-html]","[component-ts]"];let h=(()=>{class t{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[e.jDz],ngContentSelectors:x,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(r,n){if(1&r&&(e.F$t(_),e.TgZ(0,"div",0)(1,"div",1)(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),e.NdJ("click",function(){return n.isOpenCode=!n.isOpenCode}),e.TgZ(8,"span"),e._uU(9),e.qZA()()()()()(),e.TgZ(10,"div",5),e.YNc(11,u,9,4,"nav",6),e.YNc(12,C,2,0,"ng-container",7),e.YNc(13,l,1,2,"ng-template",null,8,e.W1O),e.YNc(15,c,1,0,"ng-template",null,9,e.W1O),e.qZA()()),2&r){const p=e.MAs(14);e.xp6(3),e.Oqu(n.title),e.xp6(4),e.ekj("active",n.isOpenCode),e.xp6(2),e.Oqu(n.linkCode),e.xp6(2),e.Q6J("ngIf",n.isOpenCode&&n.isNavCode),e.xp6(1),e.Q6J("ngIf",!n.isOpenCode)("ngIfElse",p)}},dependencies:[m.ez,m.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),t})()},5955:(O,g,o)=>{o.r(g),o.d(g,{PanelInformationModule:()=>A});var m=o(6362),e=o(5185),u=o(906),C=o(4681),s=o(1225),l=o(553),c=o(4948),_=o(7638),x=o(5570),h=o(5871),t=o(9349),a=o(6434);let r=(()=>{class i{constructor(){this.dataSource=h.CG,this.columns=x.L0,this.exampleIterfacePanelInformation=h.KL}}return i.\u0275fac=function(d){return new(d||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-panel-information-api"]],decls:39,vars:5,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","language","javascript","code","import { OPanelModule } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"],[1,"section-type"],[1,"section-interface"],["appPrism","","language","javascript"]],template:function(d,v){1&d&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2"),t._uU(3,"Referencia de API para el componente Panel Informativo de Obelisco"),t.qZA(),t.TgZ(4,"pre",2),t._uU(5,"      "),t._UZ(6,"code",3),t._uU(7,"\n    "),t.qZA()(),t.TgZ(8,"h3"),t._uU(9,"Etiqueta"),t.qZA(),t._UZ(10,"hr"),t.TgZ(11,"div",4)(12,"h4"),t._uU(13,"OInformationPanel"),t.qZA(),t.TgZ(14,"p"),t._uU(15,"Selector: "),t.TgZ(16,"strong"),t._uU(17,"o-information-panel"),t.qZA()(),t.TgZ(18,"div",5)(19,"h5"),t._uU(20,"Propiedades"),t.qZA(),t._UZ(21,"o-table",6),t.qZA()(),t.TgZ(22,"h3"),t._uU(23,"Tipos de datos"),t.qZA(),t._UZ(24,"hr"),t.TgZ(25,"div",7)(26,"h4"),t._uU(27,"PanelInformationItem"),t.qZA(),t.TgZ(28,"p"),t._uU(29,"Permite establecer los valores de la propiedad "),t.TgZ(30,"strong"),t._uU(31,"panelList"),t.qZA(),t._uU(32,"."),t.qZA(),t.TgZ(33,"div",8)(34,"pre",2),t._uU(35,"        "),t.TgZ(36,"code",9),t._uU(37),t.qZA(),t._uU(38,"\n      "),t.qZA()()()()),2&d&&(t.xp6(21),t.Q6J("displayedColumns",v.columns)("dataSource",v.dataSource)("isStriped",!0)("isBordered",!0),t.xp6(16),t.Oqu(v.exampleIterfacePanelInformation))},dependencies:[u.L,a.y]}),i})();var n=o(1515);function p(i,f){if(1&i&&(t.ynx(0),t.TgZ(1,"div",2),t._UZ(2,"img",3),t.TgZ(3,"div",4)(4,"h4",5),t._uU(5),t.qZA(),t.TgZ(6,"p",6),t._uU(7),t.qZA()()(),t.BQk()),2&i){const d=f.$implicit;t.xp6(2),t.Q6J("src",d.image,t.LSH)("alt",d.title),t.xp6(3),t.Oqu(d.title),t.xp6(2),t.hij(" ",d.description," ")}}let T=(()=>{class i{}return i.\u0275fac=function(d){return new(d||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["o-information-panel"]],inputs:{panelList:"panelList"},decls:2,vars:1,consts:[[1,"panel-deck","max-cards-2"],[4,"ngFor","ngForOf"],[1,"card","card-simple","card-horizontal"],["oDefaultImage","",1,"card-img-left-panel",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text-panel"]],template:function(d,v){1&d&&(t.TgZ(0,"div",0),t.YNc(1,p,8,4,"ng-container",1),t.qZA()),2&d&&(t.xp6(1),t.Q6J("ngForOf",v.panelList))},dependencies:[m.sg,n.z]}),i})();var Z=o(2171);const P=[{path:"api",component:r},{path:"examples",component:(()=>{class i{constructor(){this.panelInformationList=h.kj,this.examplePanelInformationHTML=h.R$,this.examplePanelInformationTS=h.d0}}return i.\u0275fac=function(d){return new(d||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-panel-information-examples"]],decls:19,vars:4,consts:[[1,"section-example"],["title","Panel Informativo b\xe1sico",3,"isNavCode"],["component","",3,"panelList"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["appClipboard","","component-ts","",1,"code"],["appPrism",""]],template:function(d,v){1&d&&(t.TgZ(0,"section",0)(1,"app-viewer",1),t._UZ(2,"o-information-panel",2),t.TgZ(3,"pre",3),t._uU(4,"      "),t.TgZ(5,"button",4),t._uU(6,"Copiar"),t.qZA(),t._uU(7,"\n      "),t.TgZ(8,"code",5),t._uU(9),t.qZA(),t._uU(10,"\n    "),t.qZA(),t.TgZ(11,"pre",6),t._uU(12,"      "),t.TgZ(13,"button",4),t._uU(14,"Copiar"),t.qZA(),t._uU(15,"\n      "),t.TgZ(16,"code",7),t._uU(17),t.qZA(),t._uU(18,"\n    "),t.qZA()()()),2&d&&(t.xp6(1),t.Q6J("isNavCode",!0),t.xp6(1),t.Q6J("panelList",v.panelInformationList),t.xp6(7),t.Oqu(v.examplePanelInformationHTML),t.xp6(8),t.Oqu(v.examplePanelInformationTS))},dependencies:[T,c.B,Z.y,a.y]}),i})()},{path:"**",redirectTo:"api",pathMatch:"full"}];let b=(()=>{class i{}return i.\u0275fac=function(d){return new(d||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.Bz.forChild(P),_.Bz]}),i})(),A=(()=>{class i{}return i.\u0275fac=function(d){return new(d||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,b,e.Z,u.L,C.v,c.B,l.s,s.c]}),i})()},2171:(O,g,o)=>{o.d(g,{y:()=>e});var m=o(9349);let e=(()=>{class u{constructor(s,l){this.host=s,this.renderer=l}ngAfterViewInit(){if(navigator.clipboard){const s=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(s,"click",this.clipboard)}}clipboard(s){const l=s.target,c=null==l?void 0:l.parentElement,_=null==c?void 0:c.querySelector("code");navigator.clipboard.writeText(null==_?void 0:_.innerText),l.innerText="Codigo copiado!",setTimeout(()=>{l.innerText="Copiar"},1e3)}}return u.\u0275fac=function(s){return new(s||u)(m.Y36(m.SBq),m.Y36(m.Qsj))},u.\u0275dir=m.lG2({type:u,selectors:[["","appClipboard",""]],standalone:!0}),u})()}}]);
//# sourceMappingURL=955.a8220d8b3c03d315.js.map