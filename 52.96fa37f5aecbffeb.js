"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[52],{906:(b,h,i)=>{i.d(h,{L:()=>m});var l=i(6362),e=i(9349);const u=["checkbox"];function f(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"th",5)(1,"input",6),e.NdJ("change",function(C){e.CHM(t);const v=e.oxw(2);return e.KtG(v.allSelected(C.target))}),e.qZA()()}}function a(o,s){if(1&o&&(e.TgZ(0,"th",5),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.xp6(1),e.Oqu(t.value)}}function p(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"td")(1,"input",6,9),e.NdJ("change",function(C){e.CHM(t);const v=e.oxw(3);return e.KtG(v.selectedRow(C.target))}),e.qZA()()}}function r(o,s){if(1&o&&e._UZ(0,"td",10),2&o){const t=s.$implicit,c=e.oxw().$implicit;e.Q6J("innerHTML",c[t.key],e.oJD)}}function g(o,s){if(1&o&&(e.TgZ(0,"tr"),e.YNc(1,p,3,0,"td",7),e.YNc(2,r,1,1,"td",8),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.isSelectable),e.xp6(1),e.Q6J("ngForOf",t.displayedColumns)}}const Z=function(o,s,t){return{"table-bordered":o,"table-striped":s,"table-hover":t}};function x(o,s){if(1&o&&(e.TgZ(0,"table",1)(1,"thead")(2,"tr"),e.YNc(3,f,2,0,"th",2),e.YNc(4,a,2,1,"th",3),e.qZA()(),e.TgZ(5,"tbody"),e.YNc(6,g,3,2,"tr",4),e.qZA()()),2&o){const t=e.oxw();e.Q6J("ngClass",e.kEZ(4,Z,t.isBordered,t.isStriped,t.isHover)),e.xp6(3),e.Q6J("ngIf",t.isSelectable),e.xp6(1),e.Q6J("ngForOf",t.displayedColumns),e.xp6(2),e.Q6J("ngForOf",t.dataSource)}}let m=(()=>{class o{constructor(t){this.renderer=t,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new e.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(t=>{this.inputCheckArr.push(t.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(t=>{if(""===t.key||""===t.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(t=>t.value=t.value.trim()),this.displayedColumns=this.displayedColumns.map(t=>(t.value=t.value.charAt(0).toUpperCase()+t.value.slice(1).toLowerCase(),t)),this.displayedColumns.map(t=>{if(t.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&t.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,t;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(t){t.checked?(this.checkbox.map(c=>this.renderer.setProperty(c.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(c=>this.renderer.setProperty(c.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(t){const c=this.inputCheckArr.indexOf(t);t.checked?this.DataSelectedArr.push(this.dataSource[c]):this.DataSelectedArr=this.DataSelectedArr.filter((C,v)=>v!==c),this.dataSelected.emit(this.DataSelectedArr)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.Qsj))},o.\u0275cmp=e.Xpm({type:o,selectors:[["o-table"]],viewQuery:function(t,c){if(1&t&&e.Gf(u,5),2&t){let C;e.iGM(C=e.CRH())&&(c.checkbox=C)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(t,c){1&t&&e.YNc(0,x,7,8,"table",0),2&t&&e.Q6J("ngIf",c.isValidateComponent)},dependencies:[l.ez,l.mk,l.sg,l.O5]}),o})()},1225:(b,h,i)=>{i.d(h,{c:()=>f});var l=i(6362),e=i(9349);function u(a,p){if(1&a&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&a){const r=p.$implicit;e.xp6(1),e.Q6J("innerHTML",r,e.oJD)}}let f=(()=>{class a{constructor(){this.practices=[]}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(r,g){1&r&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Malas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,u,2,1,"li",2),e.qZA()()),2&r&&(e.xp6(4),e.Q6J("ngForOf",g.practices))},dependencies:[l.ez,l.sg]}),a})()},553:(b,h,i)=>{i.d(h,{s:()=>f});var l=i(6362),e=i(9349);function u(a,p){if(1&a&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&a){const r=p.$implicit;e.xp6(1),e.Q6J("innerHTML",r,e.oJD)}}let f=(()=>{class a{constructor(){this.practices=[]}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(r,g){1&r&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Buenas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,u,2,1,"li",2),e.qZA()()),2&r&&(e.xp6(4),e.Q6J("ngForOf",g.practices))},dependencies:[l.ez,l.sg]}),a})()},4948:(b,h,i)=>{i.d(h,{B:()=>x});var l=i(6362),e=i(9349);function u(m,o){if(1&m){const s=e.EpF();e.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),e.NdJ("click",function(){e.CHM(s);const c=e.oxw();return e.KtG(c.isWindowHTML=!0)}),e.TgZ(4,"span"),e._uU(5,"HTML"),e.qZA()(),e.TgZ(6,"a",4),e.NdJ("click",function(){e.CHM(s);const c=e.oxw();return e.KtG(c.isWindowHTML=!1)}),e.TgZ(7,"span"),e._uU(8,"TS"),e.qZA()()()()()}if(2&m){const s=e.oxw();e.xp6(3),e.ekj("active",s.isWindowHTML),e.xp6(3),e.ekj("active",!s.isWindowHTML)}}function f(m,o){1&m&&(e.ynx(0),e.Hsn(1),e.BQk())}function a(m,o){1&m&&(e.ynx(0),e.Hsn(1,1),e.BQk())}function p(m,o){if(1&m&&e.YNc(0,a,2,0,"ng-container",7),2&m){const s=e.oxw(),t=e.MAs(16);e.Q6J("ngIf",s.isWindowHTML)("ngIfElse",t)}}function r(m,o){1&m&&e.Hsn(0,2)}const g=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],Z=["[component]","[component-html]","[component-ts]"];let x=(()=>{class m{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return m.\u0275fac=function(s){return new(s||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[e.jDz],ngContentSelectors:Z,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(s,t){if(1&s&&(e.F$t(g),e.TgZ(0,"div",0)(1,"div",1)(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),e.NdJ("click",function(){return t.isOpenCode=!t.isOpenCode}),e.TgZ(8,"span"),e._uU(9),e.qZA()()()()()(),e.TgZ(10,"div",5),e.YNc(11,u,9,4,"nav",6),e.YNc(12,f,2,0,"ng-container",7),e.YNc(13,p,1,2,"ng-template",null,8,e.W1O),e.YNc(15,r,1,0,"ng-template",null,9,e.W1O),e.qZA()()),2&s){const c=e.MAs(14);e.xp6(3),e.Oqu(t.title),e.xp6(4),e.ekj("active",t.isOpenCode),e.xp6(2),e.Oqu(t.linkCode),e.xp6(2),e.Q6J("ngIf",t.isOpenCode&&t.isNavCode),e.xp6(1),e.Q6J("ngIf",!t.isOpenCode)("ngIfElse",c)}},dependencies:[l.ez,l.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),m})()},52:(b,h,i)=>{i.r(h),i.d(h,{LinkListModule:()=>k});var l=i(6362),e=i(9349);function u(n,_){if(1&n&&e._UZ(0,"img",7),2&n){const d=e.oxw();e.Q6J("src",d.image,e.LSH)("alt",d.title)}}function f(n,_){if(1&n&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&n){const d=e.oxw();e.xp6(1),e.hij(" ",d.description," ")}}const a=[[["","list-link",""]]],p=["[list-link]"];let r=(()=>{class n{}return n.\u0275fac=function(d){return new(d||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["o-link-list"]],inputs:{title:"title",description:"description",image:"image"},standalone:!0,features:[e.jDz],ngContentSelectors:p,decls:9,vars:3,consts:[[1,"panel-container"],[1,"card","card-simple","panel-list-link"],["oDefaultImage","","class","rounded-lg mb-4","width","154","height","154",3,"src","alt",4,"ngIf"],[1,"card-body"],[1,"card-title"],["class","card-text",4,"ngIf"],[1,"list-link"],["oDefaultImage","","width","154","height","154",1,"rounded-lg","mb-4",3,"src","alt"],[1,"card-text"]],template:function(d,T){1&d&&(e.F$t(a),e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,u,1,2,"img",2),e.TgZ(3,"div",3)(4,"h3",4),e._uU(5),e.qZA(),e.YNc(6,f,2,1,"p",5),e.qZA(),e.TgZ(7,"div",6),e.Hsn(8),e.qZA()()()),2&d&&(e.xp6(2),e.Q6J("ngIf",T.image),e.xp6(3),e.Oqu(T.title),e.xp6(1),e.Q6J("ngIf",T.description))},dependencies:[l.ez,l.O5]}),n})();var g=i(5185),Z=i(906),x=i(1225),m=i(553),o=i(4948),s=i(7638),t=i(5570),c=i(3449),C=i(6434);let v=(()=>{class n{constructor(){this.dataSource=c.HK,this.columns=t.L0}}return n.\u0275fac=function(d){return new(d||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-link-list-api"]],decls:22,vars:4,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","language","javascript","code","import { OLinkListComponent } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"]],template:function(d,T){1&d&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2"),e._uU(3,"Referencia de API para el componente Lista de Enlaces de Obelisco"),e.qZA(),e.TgZ(4,"pre",2),e._uU(5,"      "),e._UZ(6,"code",3),e._uU(7,"\n    "),e.qZA()(),e.TgZ(8,"h3"),e._uU(9,"Etiqueta"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"OLinkList"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Selector: "),e.TgZ(16,"strong"),e._uU(17,"o-link-list"),e.qZA()(),e.TgZ(18,"div",5)(19,"h5"),e._uU(20,"Propiedades"),e.qZA(),e._UZ(21,"o-table",6),e.qZA()()()),2&d&&(e.xp6(21),e.Q6J("displayedColumns",T.columns)("dataSource",T.dataSource)("isStriped",!0)("isBordered",!0))},dependencies:[Z.L,C.y]}),n})();var L=i(2171);const O=[{path:"api",component:v},{path:"examples",component:(()=>{class n{constructor(){this.exampleDownloadButtonHTML=c.wt,this.exampleLinkHTML=c.bu,this.exampleDownloadLinkHTML=c.BD}}return n.\u0275fac=function(d){return new(d||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-link-list-examples"]],decls:73,vars:3,consts:[[1,"section-example"],["title","Lista con botones de descarga"],["component","",1,"col-5"],["title","Lista de enlaces","description","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.","image","https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"],["list-link",""],[1,"list-link-item-title"],["href","#","target","_blank","rel","noreferrer",1,"btn","btn-secondary","btn-sm","download-link","card-link"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["title","Lista con enlaces"],["component","","title","Lista de enlaces","description","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.","image","https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"],["href","#","target","_blank","rel","noreferrer",1,"card-link"],["title","Lista con enlaces de descarga"],["href","#","target","_blank","rel","noreferrer",1,"download","card-link"]],template:function(d,T){1&d&&(e.TgZ(0,"section",0)(1,"app-viewer",1)(2,"div",2)(3,"o-link-list",3)(4,"div",4)(5,"h4",5),e._uU(6,"Nombre del archivo"),e.qZA(),e.TgZ(7,"a",6),e._uU(8," Descargar "),e.qZA(),e.TgZ(9,"h4",5),e._uU(10,"Nombre del archivo"),e.qZA(),e.TgZ(11,"a",6),e._uU(12," Descargar "),e.qZA(),e.TgZ(13,"h4",5),e._uU(14,"Nombre del archivo"),e.qZA(),e.TgZ(15,"a",6),e._uU(16," Descargar "),e.qZA()()()(),e.TgZ(17,"pre",7),e._uU(18,"      "),e.TgZ(19,"button",8),e._uU(20,"Copiar"),e.qZA(),e._uU(21,"\n      "),e.TgZ(22,"code",9),e._uU(23),e.qZA(),e._uU(24,"\n    "),e.qZA()(),e.TgZ(25,"app-viewer",10)(26,"div",2)(27,"o-link-list",11)(28,"div",4)(29,"h4",5),e._uU(30,"Nombre del archivo"),e.qZA(),e.TgZ(31,"a",12),e._uU(32,"Enlace"),e.qZA(),e.TgZ(33,"h4",5),e._uU(34,"Nombre del archivo"),e.qZA(),e.TgZ(35,"a",12),e._uU(36,"Enlace"),e.qZA(),e.TgZ(37,"h4",5),e._uU(38,"Nombre del archivo"),e.qZA(),e.TgZ(39,"a",12),e._uU(40,"Enlace"),e.qZA()()()(),e.TgZ(41,"pre",7),e._uU(42,"      "),e.TgZ(43,"button",8),e._uU(44,"Copiar"),e.qZA(),e._uU(45,"\n      "),e.TgZ(46,"code",9),e._uU(47),e.qZA(),e._uU(48,"\n    "),e.qZA()(),e.TgZ(49,"app-viewer",13)(50,"div",2)(51,"o-link-list",11)(52,"div",4)(53,"h4",5),e._uU(54,"Nombre del archivo"),e.qZA(),e.TgZ(55,"a",14),e._uU(56," Enlace "),e.qZA(),e.TgZ(57,"h4",5),e._uU(58,"Nombre del archivo"),e.qZA(),e.TgZ(59,"a",14),e._uU(60," Enlace "),e.qZA(),e.TgZ(61,"h4",5),e._uU(62,"Nombre del archivo"),e.qZA(),e.TgZ(63,"a",14),e._uU(64," Enlace "),e.qZA()()()(),e.TgZ(65,"pre",7),e._uU(66,"      "),e.TgZ(67,"button",8),e._uU(68,"Copiar"),e.qZA(),e._uU(69,"\n      "),e.TgZ(70,"code",9),e._uU(71),e.qZA(),e._uU(72,"\n    "),e.qZA()()()),2&d&&(e.xp6(23),e.Oqu(T.exampleDownloadButtonHTML),e.xp6(24),e.Oqu(T.exampleLinkHTML),e.xp6(24),e.Oqu(T.exampleDownloadLinkHTML))},dependencies:[r,o.B,L.y,C.y]}),n})()},{path:"**",pathMatch:"full",redirectTo:"api"}];let A=(()=>{class n{}return n.\u0275fac=function(d){return new(d||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(O),s.Bz]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(d){return new(d||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,A,g.Z,Z.L,r,o.B,m.s,x.c]}),n})()},2171:(b,h,i)=>{i.d(h,{y:()=>e});var l=i(9349);let e=(()=>{class u{constructor(a,p){this.host=a,this.renderer=p}ngAfterViewInit(){if(navigator.clipboard){const a=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(a,"click",this.clipboard)}}clipboard(a){const p=a.target,r=null==p?void 0:p.parentElement,g=null==r?void 0:r.querySelector("code");navigator.clipboard.writeText(null==g?void 0:g.innerText),p.innerText="Codigo copiado!",setTimeout(()=>{p.innerText="Copiar"},1e3)}}return u.\u0275fac=function(a){return new(a||u)(l.Y36(l.SBq),l.Y36(l.Qsj))},u.\u0275dir=l.lG2({type:u,selectors:[["","appClipboard",""]],standalone:!0}),u})()}}]);
//# sourceMappingURL=52.96fa37f5aecbffeb.js.map