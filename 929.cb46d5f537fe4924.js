"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[929],{906:(x,h,o)=>{o.d(h,{L:()=>e});var c=o(6362),t=o(9349);const m=["checkbox"];function T(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"th",5)(1,"input",6),t.NdJ("change",function(Z){t.CHM(n);const v=t.oxw(2);return t.KtG(v.allSelected(Z.target))}),t.qZA()()}}function r(i,s){if(1&i&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&i){const n=s.$implicit;t.xp6(1),t.Oqu(n.value)}}function p(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"td")(1,"input",6,9),t.NdJ("change",function(Z){t.CHM(n);const v=t.oxw(3);return t.KtG(v.selectedRow(Z.target))}),t.qZA()()}}function l(i,s){if(1&i&&t._UZ(0,"td",10),2&i){const n=s.$implicit,u=t.oxw().$implicit;t.Q6J("innerHTML",u[n.key],t.oJD)}}function _(i,s){if(1&i&&(t.TgZ(0,"tr"),t.YNc(1,p,3,0,"td",7),t.YNc(2,l,1,1,"td",8),t.qZA()),2&i){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns)}}const b=function(i,s,n){return{"table-bordered":i,"table-striped":s,"table-hover":n}};function C(i,s){if(1&i&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr"),t.YNc(3,T,2,0,"th",2),t.YNc(4,r,2,1,"th",3),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,_,3,2,"tr",4),t.qZA()()),2&i){const n=t.oxw();t.Q6J("ngClass",t.kEZ(4,b,n.isBordered,n.isStriped,n.isHover)),t.xp6(3),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns),t.xp6(2),t.Q6J("ngForOf",n.dataSource)}}let e=(()=>{class i{constructor(n){this.renderer=n,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new t.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(n=>{this.inputCheckArr.push(n.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(n=>{if(""===n.key||""===n.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(n=>n.value=n.value.trim()),this.displayedColumns=this.displayedColumns.map(n=>(n.value=n.value.charAt(0).toUpperCase()+n.value.slice(1).toLowerCase(),n)),this.displayedColumns.map(n=>{if(n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&n.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,n;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(n){n.checked?(this.checkbox.map(u=>this.renderer.setProperty(u.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(u=>this.renderer.setProperty(u.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(n){const u=this.inputCheckArr.indexOf(n);n.checked?this.DataSelectedArr.push(this.dataSource[u]):this.DataSelectedArr=this.DataSelectedArr.filter((Z,v)=>v!==u),this.dataSelected.emit(this.DataSelectedArr)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(t.Qsj))},i.\u0275cmp=t.Xpm({type:i,selectors:[["o-table"]],viewQuery:function(n,u){if(1&n&&t.Gf(m,5),2&n){let Z;t.iGM(Z=t.CRH())&&(u.checkbox=Z)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(n,u){1&n&&t.YNc(0,C,7,8,"table",0),2&n&&t.Q6J("ngIf",u.isValidateComponent)},dependencies:[c.ez,c.mk,c.sg,c.O5]}),i})()},1225:(x,h,o)=>{o.d(h,{c:()=>T});var c=o(6362),t=o(9349);function m(r,p){if(1&r&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&r){const l=p.$implicit;t.xp6(1),t.Q6J("innerHTML",l,t.oJD)}}let T=(()=>{class r{constructor(){this.practices=[]}}return r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(l,_){1&l&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Malas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,m,2,1,"li",2),t.qZA()()),2&l&&(t.xp6(4),t.Q6J("ngForOf",_.practices))},dependencies:[c.ez,c.sg]}),r})()},553:(x,h,o)=>{o.d(h,{s:()=>T});var c=o(6362),t=o(9349);function m(r,p){if(1&r&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&r){const l=p.$implicit;t.xp6(1),t.Q6J("innerHTML",l,t.oJD)}}let T=(()=>{class r{constructor(){this.practices=[]}}return r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(l,_){1&l&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Buenas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,m,2,1,"li",2),t.qZA()()),2&l&&(t.xp6(4),t.Q6J("ngForOf",_.practices))},dependencies:[c.ez,c.sg]}),r})()},4948:(x,h,o)=>{o.d(h,{B:()=>C});var c=o(6362),t=o(9349);function m(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),t.NdJ("click",function(){t.CHM(s);const u=t.oxw();return t.KtG(u.isWindowHTML=!0)}),t.TgZ(4,"span"),t._uU(5,"HTML"),t.qZA()(),t.TgZ(6,"a",4),t.NdJ("click",function(){t.CHM(s);const u=t.oxw();return t.KtG(u.isWindowHTML=!1)}),t.TgZ(7,"span"),t._uU(8,"TS"),t.qZA()()()()()}if(2&e){const s=t.oxw();t.xp6(3),t.ekj("active",s.isWindowHTML),t.xp6(3),t.ekj("active",!s.isWindowHTML)}}function T(e,i){1&e&&(t.ynx(0),t.Hsn(1),t.BQk())}function r(e,i){1&e&&(t.ynx(0),t.Hsn(1,1),t.BQk())}function p(e,i){if(1&e&&t.YNc(0,r,2,0,"ng-container",7),2&e){const s=t.oxw(),n=t.MAs(16);t.Q6J("ngIf",s.isWindowHTML)("ngIfElse",n)}}function l(e,i){1&e&&t.Hsn(0,2)}const _=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],b=["[component]","[component-html]","[component-ts]"];let C=(()=>{class e{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[t.jDz],ngContentSelectors:b,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(s,n){if(1&s&&(t.F$t(_),t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),t.NdJ("click",function(){return n.isOpenCode=!n.isOpenCode}),t.TgZ(8,"span"),t._uU(9),t.qZA()()()()()(),t.TgZ(10,"div",5),t.YNc(11,m,9,4,"nav",6),t.YNc(12,T,2,0,"ng-container",7),t.YNc(13,p,1,2,"ng-template",null,8,t.W1O),t.YNc(15,l,1,0,"ng-template",null,9,t.W1O),t.qZA()()),2&s){const u=t.MAs(14);t.xp6(3),t.Oqu(n.title),t.xp6(4),t.ekj("active",n.isOpenCode),t.xp6(2),t.Oqu(n.linkCode),t.xp6(2),t.Q6J("ngIf",n.isOpenCode&&n.isNavCode),t.xp6(1),t.Q6J("ngIf",!n.isOpenCode)("ngIfElse",u)}},dependencies:[c.ez,c.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),e})()},929:(x,h,o)=>{o.r(h),o.d(h,{PanelLargeFeaturedModule:()=>U});var c=o(6362),t=o(5185),m=o(906),T=o(4681),r=o(1225),p=o(553),l=o(4948),_=o(7638),b=o(5570),C=o(5871),e=o(9349),i=o(6434);let s=(()=>{class a{constructor(){this.dataSource=C.i8,this.columns=b.L0}}return a.\u0275fac=function(d){return new(d||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-panel-large-featured-api"]],decls:22,vars:4,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","language","javascript","code","import { OPanelModule } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"]],template:function(d,g){1&d&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2"),e._uU(3,"Referencia de API para el componente Panel Destacado Grande de Obelisco"),e.qZA(),e.TgZ(4,"pre",2),e._uU(5,"      "),e._UZ(6,"code",3),e._uU(7,"\n    "),e.qZA()(),e.TgZ(8,"h3"),e._uU(9,"Etiqueta"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"OLargeFeaturedPanel"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Selector: "),e.TgZ(16,"strong"),e._uU(17,"o-large-featured-panel"),e.qZA()(),e.TgZ(18,"div",5)(19,"h5"),e._uU(20,"Propiedades"),e.qZA(),e._UZ(21,"o-table",6),e.qZA()()()),2&d&&(e.xp6(21),e.Q6J("displayedColumns",g.columns)("dataSource",g.dataSource)("isStriped",!0)("isBordered",!0))},dependencies:[m.L,i.y]}),a})();var n=o(1515);function u(a,f){if(1&a&&e._UZ(0,"img",6),2&a){const d=e.oxw();e.Q6J("src",d.url,e.LSH)("alt",d.title)}}function Z(a,f){if(1&a&&(e.TgZ(0,"video",7),e._UZ(1,"source",8),e.TgZ(2,"p"),e._uU(3,"Su navegador no soporta v\xeddeos HTML5."),e.qZA()()),2&a){const d=e.oxw();e.xp6(1),e.Q6J("src",d.url,e.LSH)}}const v=function(a){return[a]},O=["*"];let A=(()=>{class a{constructor(){this.isVideo=!1,this.isVertical=!1}}return a.\u0275fac=function(d){return new(d||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["o-large-featured-panel"]],inputs:{title:"title",description:"description",url:"url",isVideo:"isVideo",isVertical:"isVertical"},ngContentSelectors:O,decls:9,vars:7,consts:[[1,"card","card-simple",3,"ngClass"],["oDefaultImage","","class","card-img",3,"src","alt",4,"ngIf"],["class","card-img","controls","",4,"ngIf"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["oDefaultImage","",1,"card-img",3,"src","alt"],["controls","",1,"card-img"],["type","video/mp4",3,"src"]],template:function(d,g){1&d&&(e.F$t(),e.TgZ(0,"div",0),e.YNc(1,u,1,2,"img",1),e.YNc(2,Z,4,1,"video",2),e.TgZ(3,"div",3)(4,"h2",4),e._uU(5),e.qZA(),e.TgZ(6,"p",5),e._uU(7),e.qZA(),e.Hsn(8),e.qZA()()),2&d&&(e.Q6J("ngClass",e.VKq(5,v,g.isVertical?"panel-vertical":"panel-horizontal")),e.xp6(1),e.Q6J("ngIf",!g.isVideo),e.xp6(1),e.Q6J("ngIf",g.isVideo),e.xp6(3),e.Oqu(g.title),e.xp6(2),e.hij(" ",g.description," "))},dependencies:[c.mk,c.O5,n.z]}),a})();var P=o(2171);const L=[{path:"api",component:s},{path:"examples",component:(()=>{class a{constructor(){this.examplePanelLargeImageHorizontalHTML=C.kG,this.examplePanelLargeImageHorizontalDownloadButtonHTML=C.qO,this.examplePanelLargeImageHorizontalDownloadLinkHTML=C.KK,this.examplePanelLargeVideoHorizontalHTML=C.dS,this.examplePanelLargeImageVerticalHTML=C.f_,this.examplePanelLargeVideoVerticalHTML=C.HM}}return a.\u0275fac=function(d){return new(d||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-panel-large-featured-examples"]],decls:83,vars:10,consts:[[1,"section-example"],["title","Horizontal con Imagen"],["component","","title","Encabezado","description","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nostrum quo animi dignissimos omnis dicta quia placeat, nesciunt quasi hic autem iure eum necessitatibus ea expedita quas. Rem, aspernatur repudiandae.","url","https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.jpg"],["type","button",1,"btn","btn-lg","btn-primary","card-link"],["type","button",1,"btn","btn-lg","btn-secondary","card-link"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["title","Horizontal con Imagen - Bot\xf3n de descarga"],["href","panel/larreta.jpg","download","",1,"btn","btn-secondary","btn-lg","download-link"],["title","Horizontal con Imagen - Enlace de descarga"],["href","panel/larreta.jpg","download","",1,"download"],["title","Horizontal con Video"],["component","","title","Encabezado","description","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nostrum quo animi dignissimos omnis dicta quia placeat, nesciunt quasi hic autem iure eum necessitatibus ea expedita quas. Rem, aspernatur repudiandae.","url","https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.mp4",3,"isVideo"],["title","Vertical con Imagen"],["component","",1,"col-5"],["title","Encabezado","description","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nostrum quo animi dignissimos omnis dicta quia placeat, nesciunt quasi hic autem iure eum necessitatibus ea expedita quas. Rem, aspernatur repudiandae.","url","https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.jpg",3,"isVertical"],["title","Vertical con Video"],["component","","title","Encabezado","description","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nostrum quo animi dignissimos omnis dicta quia placeat, nesciunt quasi hic autem iure eum necessitatibus ea expedita quas. Rem, aspernatur repudiandae.","url","https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.mp4",3,"isVertical","isVideo"]],template:function(d,g){1&d&&(e.TgZ(0,"section",0)(1,"app-viewer",1)(2,"o-large-featured-panel",2)(3,"button",3),e._uU(4,"Bot\xf3n"),e.qZA(),e.TgZ(5,"button",4),e._uU(6,"Bot\xf3n"),e.qZA()(),e.TgZ(7,"pre",5),e._uU(8,"      "),e.TgZ(9,"button",6),e._uU(10,"Copiar"),e.qZA(),e._uU(11,"\n      "),e.TgZ(12,"code",7),e._uU(13),e.qZA(),e._uU(14,"\n    "),e.qZA()(),e.TgZ(15,"app-viewer",8)(16,"o-large-featured-panel",2)(17,"a",9),e._uU(18," Descargar "),e.qZA()(),e.TgZ(19,"pre",5),e._uU(20,"      "),e.TgZ(21,"button",6),e._uU(22,"Copiar"),e.qZA(),e._uU(23,"\n      "),e.TgZ(24,"code",7),e._uU(25),e.qZA(),e._uU(26,"\n    "),e.qZA()(),e.TgZ(27,"app-viewer",10)(28,"o-large-featured-panel",2)(29,"a",11),e._uU(30,"Descargar"),e.qZA()(),e.TgZ(31,"pre",5),e._uU(32,"      "),e.TgZ(33,"button",6),e._uU(34,"Copiar"),e.qZA(),e._uU(35,"\n      "),e.TgZ(36,"code",7),e._uU(37),e.qZA(),e._uU(38,"\n    "),e.qZA()(),e.TgZ(39,"app-viewer",12)(40,"o-large-featured-panel",13)(41,"button",3),e._uU(42,"Bot\xf3n"),e.qZA(),e.TgZ(43,"button",4),e._uU(44,"Bot\xf3n"),e.qZA()(),e.TgZ(45,"pre",5),e._uU(46,"      "),e.TgZ(47,"button",6),e._uU(48,"Copiar"),e.qZA(),e._uU(49,"\n      "),e.TgZ(50,"code",7),e._uU(51),e.qZA(),e._uU(52,"\n    "),e.qZA()(),e.TgZ(53,"app-viewer",14)(54,"div",15)(55,"o-large-featured-panel",16)(56,"button",3),e._uU(57,"Bot\xf3n"),e.qZA(),e.TgZ(58,"button",4),e._uU(59,"Bot\xf3n"),e.qZA()()(),e.TgZ(60,"pre",5),e._uU(61,"      "),e.TgZ(62,"button",6),e._uU(63,"Copiar"),e.qZA(),e._uU(64,"\n      "),e.TgZ(65,"code",7),e._uU(66),e.qZA(),e._uU(67,"\n    "),e.qZA()(),e.TgZ(68,"app-viewer",17)(69,"div",15)(70,"o-large-featured-panel",18)(71,"button",3),e._uU(72,"Bot\xf3n"),e.qZA(),e.TgZ(73,"button",4),e._uU(74,"Bot\xf3n"),e.qZA()()(),e.TgZ(75,"pre",5),e._uU(76,"      "),e.TgZ(77,"button",6),e._uU(78,"Copiar"),e.qZA(),e._uU(79,"\n      "),e.TgZ(80,"code",7),e._uU(81),e.qZA(),e._uU(82,"\n    "),e.qZA()()()),2&d&&(e.xp6(13),e.Oqu(g.examplePanelLargeImageHorizontalHTML),e.xp6(12),e.Oqu(g.examplePanelLargeImageHorizontalDownloadButtonHTML),e.xp6(12),e.Oqu(g.examplePanelLargeImageHorizontalDownloadLinkHTML),e.xp6(3),e.Q6J("isVideo",!0),e.xp6(11),e.Oqu(g.examplePanelLargeVideoHorizontalHTML),e.xp6(4),e.Q6J("isVertical",!0),e.xp6(11),e.Oqu(g.examplePanelLargeImageVerticalHTML),e.xp6(4),e.Q6J("isVertical",!0)("isVideo",!0),e.xp6(11),e.Oqu(g.examplePanelLargeVideoVerticalHTML))},dependencies:[A,l.B,P.y,i.y]}),a})()},{path:"**",redirectTo:"api",pathMatch:"full"}];let M=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[_.Bz.forChild(L),_.Bz]}),a})(),U=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[c.ez,M,t.Z,m.L,T.v,l.B,p.s,r.c]}),a})()},2171:(x,h,o)=>{o.d(h,{y:()=>t});var c=o(9349);let t=(()=>{class m{constructor(r,p){this.host=r,this.renderer=p}ngAfterViewInit(){if(navigator.clipboard){const r=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(r,"click",this.clipboard)}}clipboard(r){const p=r.target,l=null==p?void 0:p.parentElement,_=null==l?void 0:l.querySelector("code");navigator.clipboard.writeText(null==_?void 0:_.innerText),p.innerText="Codigo copiado!",setTimeout(()=>{p.innerText="Copiar"},1e3)}}return m.\u0275fac=function(r){return new(r||m)(c.Y36(c.SBq),c.Y36(c.Qsj))},m.\u0275dir=c.lG2({type:m,selectors:[["","appClipboard",""]],standalone:!0}),m})()}}]);
//# sourceMappingURL=929.cb46d5f537fe4924.js.map