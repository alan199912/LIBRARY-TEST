"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[948],{906:(b,f,a)=>{a.d(f,{L:()=>m});var u=a(6362),t=a(9349);const h=["checkbox"];function e(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"th",5)(1,"input",6),t.NdJ("change",function(T){t.CHM(n);const Z=t.oxw(2);return t.KtG(Z.allSelected(T.target))}),t.qZA()()}}function r(i,s){if(1&i&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&i){const n=s.$implicit;t.xp6(1),t.Oqu(n.value)}}function l(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"td")(1,"input",6,9),t.NdJ("change",function(T){t.CHM(n);const Z=t.oxw(3);return t.KtG(Z.selectedRow(T.target))}),t.qZA()()}}function p(i,s){if(1&i&&t._UZ(0,"td",10),2&i){const n=s.$implicit,d=t.oxw().$implicit;t.Q6J("innerHTML",d[n.key],t.oJD)}}function C(i,s){if(1&i&&(t.TgZ(0,"tr"),t.YNc(1,l,3,0,"td",7),t.YNc(2,p,1,1,"td",8),t.qZA()),2&i){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns)}}const v=function(i,s,n){return{"table-bordered":i,"table-striped":s,"table-hover":n}};function x(i,s){if(1&i&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr"),t.YNc(3,e,2,0,"th",2),t.YNc(4,r,2,1,"th",3),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,C,3,2,"tr",4),t.qZA()()),2&i){const n=t.oxw();t.Q6J("ngClass",t.kEZ(4,v,n.isBordered,n.isStriped,n.isHover)),t.xp6(3),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns),t.xp6(2),t.Q6J("ngForOf",n.dataSource)}}let m=(()=>{class i{constructor(n){this.renderer=n,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new t.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(n=>{this.inputCheckArr.push(n.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(n=>{if(""===n.key||""===n.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(n=>n.value=n.value.trim()),this.displayedColumns=this.displayedColumns.map(n=>(n.value=n.value.charAt(0).toUpperCase()+n.value.slice(1).toLowerCase(),n)),this.displayedColumns.map(n=>{if(n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&n.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,n;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(n){n.checked?(this.checkbox.map(d=>this.renderer.setProperty(d.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(d=>this.renderer.setProperty(d.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(n){const d=this.inputCheckArr.indexOf(n);n.checked?this.DataSelectedArr.push(this.dataSource[d]):this.DataSelectedArr=this.DataSelectedArr.filter((T,Z)=>Z!==d),this.dataSelected.emit(this.DataSelectedArr)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(t.Qsj))},i.\u0275cmp=t.Xpm({type:i,selectors:[["o-table"]],viewQuery:function(n,d){if(1&n&&t.Gf(h,5),2&n){let T;t.iGM(T=t.CRH())&&(d.checkbox=T)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(n,d){1&n&&t.YNc(0,x,7,8,"table",0),2&n&&t.Q6J("ngIf",d.isValidateComponent)},dependencies:[u.ez,u.mk,u.sg,u.O5]}),i})()},1225:(b,f,a)=>{a.d(f,{c:()=>e});var u=a(6362),t=a(9349);function h(r,l){if(1&r&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&r){const p=l.$implicit;t.xp6(1),t.Q6J("innerHTML",p,t.oJD)}}let e=(()=>{class r{constructor(){this.practices=[]}}return r.\u0275fac=function(p){return new(p||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(p,C){1&p&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Malas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,h,2,1,"li",2),t.qZA()()),2&p&&(t.xp6(4),t.Q6J("ngForOf",C.practices))},dependencies:[u.ez,u.sg]}),r})()},553:(b,f,a)=>{a.d(f,{s:()=>e});var u=a(6362),t=a(9349);function h(r,l){if(1&r&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&r){const p=l.$implicit;t.xp6(1),t.Q6J("innerHTML",p,t.oJD)}}let e=(()=>{class r{constructor(){this.practices=[]}}return r.\u0275fac=function(p){return new(p||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(p,C){1&p&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Buenas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,h,2,1,"li",2),t.qZA()()),2&p&&(t.xp6(4),t.Q6J("ngForOf",C.practices))},dependencies:[u.ez,u.sg]}),r})()},4948:(b,f,a)=>{a.d(f,{B:()=>x});var u=a(6362),t=a(9349);function h(m,i){if(1&m){const s=t.EpF();t.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),t.NdJ("click",function(){t.CHM(s);const d=t.oxw();return t.KtG(d.isWindowHTML=!0)}),t.TgZ(4,"span"),t._uU(5,"HTML"),t.qZA()(),t.TgZ(6,"a",4),t.NdJ("click",function(){t.CHM(s);const d=t.oxw();return t.KtG(d.isWindowHTML=!1)}),t.TgZ(7,"span"),t._uU(8,"TS"),t.qZA()()()()()}if(2&m){const s=t.oxw();t.xp6(3),t.ekj("active",s.isWindowHTML),t.xp6(3),t.ekj("active",!s.isWindowHTML)}}function e(m,i){1&m&&(t.ynx(0),t.Hsn(1),t.BQk())}function r(m,i){1&m&&(t.ynx(0),t.Hsn(1,1),t.BQk())}function l(m,i){if(1&m&&t.YNc(0,r,2,0,"ng-container",7),2&m){const s=t.oxw(),n=t.MAs(16);t.Q6J("ngIf",s.isWindowHTML)("ngIfElse",n)}}function p(m,i){1&m&&t.Hsn(0,2)}const C=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],v=["[component]","[component-html]","[component-ts]"];let x=(()=>{class m{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return m.\u0275fac=function(s){return new(s||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[t.jDz],ngContentSelectors:v,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(s,n){if(1&s&&(t.F$t(C),t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),t.NdJ("click",function(){return n.isOpenCode=!n.isOpenCode}),t.TgZ(8,"span"),t._uU(9),t.qZA()()()()()(),t.TgZ(10,"div",5),t.YNc(11,h,9,4,"nav",6),t.YNc(12,e,2,0,"ng-container",7),t.YNc(13,l,1,2,"ng-template",null,8,t.W1O),t.YNc(15,p,1,0,"ng-template",null,9,t.W1O),t.qZA()()),2&s){const d=t.MAs(14);t.xp6(3),t.Oqu(n.title),t.xp6(4),t.ekj("active",n.isOpenCode),t.xp6(2),t.Oqu(n.linkCode),t.xp6(2),t.Q6J("ngIf",n.isOpenCode&&n.isNavCode),t.xp6(1),t.Q6J("ngIf",!n.isOpenCode)("ngIfElse",d)}},dependencies:[u.ez,u.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),m})()},7948:(b,f,a)=>{a.r(f),a.d(f,{CardContainerHorizontalModule:()=>U});var u=a(6362),t=a(7638),h=a(5570),e=a(9349),r=a(906),l=a(6434);let p=(()=>{class o{constructor(){this.columns=h.L0,this.dataSource=[{name:"@Input() <br/> title: string",description:"Se utiliza para colocar el t\xedtulo del card."},{name:"@Input() <br/> text: string",description:"Se utiliza para colocar el texto del card."},{name:"@Input() <br/> img: string",description:"Se utiliza para colocar la imagen del card."},{name:"@Input() <br/> link: string",description:"Se utiliza para establecer el hiperv\xednculo del card."},{name:"@Input() <br/> route: string",description:"Se utiliza para establecer la ruta del hiperv\xednculo con el routing de Angular."},{name:"@Input() <br/> isBig: boolean",description:"Se utiliza para establecer el tama\xf1o del card."}]}}return o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-card-container-horizontal-api"]],decls:22,vars:4,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","code"," import { OCardModule } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"]],template:function(c,_){1&c&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2"),e._uU(3,"Referencia de API para el componente Tarjeta con contenedor horizontal de Obelisco"),e.qZA(),e.TgZ(4,"pre",2),e._uU(5,"      "),e._UZ(6,"code",3),e._uU(7,"\n    "),e.qZA()(),e.TgZ(8,"h3"),e._uU(9,"Etiqueta"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"OCardContainerHorizontal"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Selector: "),e.TgZ(16,"strong"),e._uU(17,"o-card-container-horizontal"),e.qZA()(),e.TgZ(18,"div",5)(19,"h5"),e._uU(20,"Propiedades"),e.qZA(),e._UZ(21,"o-table",6),e.qZA()()()),2&c&&(e.xp6(21),e.Q6J("displayedColumns",_.columns)("dataSource",_.dataSource)("isStriped",!0)("isBordered",!0))},dependencies:[r.L,l.y]}),o})();var C=a(6527),v=a(4948),x=a(2171),m=a(1515);const i=["card"];function s(o,g){if(1&o&&(e.TgZ(0,"p",6),e._uU(1),e.qZA()),2&o){const c=e.oxw();e.xp6(1),e.Oqu(c.text)}}let n=(()=>{class o{constructor(c){this.renderer=c,this.isBig=!1}ngAfterViewInit(){this.link&&this.renderer.setAttribute(this.card.nativeElement,"href",this.link)}}return o.\u0275fac=function(c){return new(c||o)(e.Y36(e.Qsj))},o.\u0275cmp=e.Xpm({type:o,selectors:[["o-card-container-horizontal"]],viewQuery:function(c,_){if(1&c&&e.Gf(i,5),2&c){let O;e.iGM(O=e.CRH())&&(_.card=O.first)}},inputs:{title:"title",text:"text",img:"img",link:"link",route:"route",isBig:"isBig"},decls:7,vars:7,consts:[[1,"card","card-horizontal",3,"routerLink"],["card",""],["oDefaultImage","",1,"card-img-left",3,"src","alt"],[1,"card-body"],[1,"card-title"],["class","card-text",4,"ngIf"],[1,"card-text"]],template:function(c,_){1&c&&(e.TgZ(0,"a",0,1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"h4",4),e._uU(5),e.qZA(),e.YNc(6,s,2,1,"p",5),e.qZA()()),2&c&&(e.ekj("card-lg",_.isBig),e.Q6J("routerLink",_.route),e.xp6(2),e.Q6J("src",_.img,e.LSH)("alt",_.title),e.xp6(3),e.Oqu(_.title),e.xp6(1),e.Q6J("ngIf",_.text))},dependencies:[u.O5,t.yS,m.z]}),o})(),d=(()=>{class o{constructor(){this.cardMedium=C.YE,this.cardBig=C.TL}}return o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-card-container-horizontal-examples"]],decls:21,vars:3,consts:[[1,"section-example"],["title","Mediano"],["component","","title","T\xedtulo de tarjeta","text","Recomendamos en este espacio no utilizar m\xe1s de 3 l\xedneas, para generar una lectura \xf3ptima.","img","https://gcba.github.io/Obelisco/cards/paseobajo-wide.png","route","/components"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["title","Grande"],["component","","title","T\xedtulo de tarjeta","text","Recomendamos en este espacio no utilizar m\xe1s de 3 l\xedneas, para generar una lectura \xf3ptima.","img","https://gcba.github.io/Obelisco/cards/paseobajo-wide.png","route","/components",3,"isBig"]],template:function(c,_){1&c&&(e.TgZ(0,"section",0)(1,"app-viewer",1),e._UZ(2,"o-card-container-horizontal",2),e.TgZ(3,"pre",3),e._uU(4,"      "),e.TgZ(5,"button",4),e._uU(6,"Copiar"),e.qZA(),e._uU(7,"\n      "),e.TgZ(8,"code",5),e._uU(9),e.qZA(),e._uU(10,"\n    "),e.qZA()(),e.TgZ(11,"app-viewer",6),e._UZ(12,"o-card-container-horizontal",7),e.TgZ(13,"pre",3),e._uU(14,"      "),e.TgZ(15,"button",4),e._uU(16,"Copiar"),e.qZA(),e._uU(17,"\n      "),e.TgZ(18,"code",5),e._uU(19),e.qZA(),e._uU(20,"\n    "),e.qZA()()()),2&c&&(e.xp6(9),e.Oqu(_.cardMedium),e.xp6(3),e.Q6J("isBig",!0),e.xp6(7),e.Oqu(_.cardBig))},dependencies:[v.B,x.y,n,l.y]}),o})();var T=a(553),Z=a(1225);const A=[{path:"overview",component:(()=>{class o{constructor(){this.bestPractices=C.qO,this.badPractices=C.RB}}return o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-card-container-horizontal-overview"]],decls:48,vars:2,consts:[[1,"section-overview"],[1,"lead"],[1,""],[1,"section-design"],["src","https://gcba.github.io/estandares/componentes/card/horizontal_chica.svg","alt","imagen sobre contenedor horizontal chica",1,"card-img-top"],["src","https://gcba.github.io/estandares/componentes/card/horizontal_mediana.svg","alt","imagen sobre contenedor horizontal mediana",1,"card-img-top"],["src","https://gcba.github.io/estandares/componentes/card/horizontal_6_chica.svg","alt","imagen sobre contenedor horizontal 6 chica",1,"card-img-top"],["src","https://gcba.github.io/estandares/componentes/card/horizontal_6_mediana.svg","alt","imagen sobre contenedor horizontal 6 chica",1,"card-img-top"],[1,"section-usability"],[3,"practices"]],template:function(c,_){1&c&&(e.TgZ(0,"section",0)(1,"p",1),e._uU(2," Las tarjetas agrupan informaci\xf3n en contenedores flexibles y act\xfaan como punto de entrada que permite introducir un tema en espec\xedfico. "),e.qZA(),e.TgZ(3,"div",2)(4,"h3"),e._uU(5,"Con contenedor - Horizontal - Chica"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Se utilizan para acceder a informaci\xf3n y dependen de un encabezado."),e.qZA(),e.TgZ(8,"h3"),e._uU(9,"Con contenedor - Horizontal - Mediana"),e.qZA(),e.TgZ(10,"p"),e._uU(11,"Se utilizan para acceder a informaci\xf3n y dependen de un encabezado."),e.qZA(),e.TgZ(12,"h3"),e._uU(13,"Con contenedor - Horizontal 6 Chica"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Se utilizan para acceder a informaci\xf3n y dependen de un encabezado que las agrupe."),e.qZA(),e.TgZ(16,"h3"),e._uU(17,"Con contenedor - Horizontal 6 Mediana"),e.qZA(),e.TgZ(18,"p"),e._uU(19,"Se utilizan para acceder a informaci\xf3n y dependen de un encabezado que las agrupe."),e.qZA()(),e.TgZ(20,"div",3)(21,"h2"),e._uU(22,"Dise\xf1o y estructura (Contexto de uso)"),e.qZA(),e.TgZ(23,"h3"),e._uU(24,"Con contenedor - Horizontal - Chica"),e.qZA(),e.TgZ(25,"p"),e._uU(26," En su disposici\xf3n horizontal pueden organizarse solo 3 por l\xednea en desktop. Al truncar el layout como en mobile, se apilan una por debajo de la otra. "),e.qZA(),e._UZ(27,"img",4),e.TgZ(28,"h3"),e._uU(29,"Con contenedor - Horizontal - Mediana"),e.qZA(),e.TgZ(30,"p"),e._uU(31," En su disposici\xf3n horizontal pueden organizarse solo 3 por l\xednea en desktop. Al truncar el layout como en mobile, se apilan una por debajo de la otra. "),e.qZA(),e._UZ(32,"img",5),e.TgZ(33,"h3"),e._uU(34,"Con contenedor - Horizontal 6 Chica"),e.qZA(),e.TgZ(35,"p"),e._uU(36," En su disposici\xf3n horizontal pueden organizarse solo 2 por l\xednea en desktop. Al truncar el layout como en mobile, se apilan una por debajo de la otra. "),e.qZA(),e._UZ(37,"img",6),e.TgZ(38,"h3"),e._uU(39,"Con contenedor - Horizontal 6 Mediana"),e.qZA(),e.TgZ(40,"p"),e._uU(41," En su disposici\xf3n horizontal pueden organizarse solo 2 por l\xednea en desktop. Al truncar el layout como en mobile, se apilan una por debajo de la otra. "),e.qZA(),e._UZ(42,"img",7),e.qZA(),e.TgZ(43,"div",8)(44,"h2"),e._uU(45,"Usabilidad"),e.qZA(),e._UZ(46,"app-best-practices",9)(47,"app-bad-practices",9),e.qZA()()),2&c&&(e.xp6(46),e.Q6J("practices",_.bestPractices),e.xp6(1),e.Q6J("practices",_.badPractices))},dependencies:[T.s,Z.c]}),o})()},{path:"api",component:p},{path:"examples",component:d},{path:"**",pathMatch:"full",redirectTo:"overview"}];let z=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.Bz.forChild(A),t.Bz]}),o})();var y=a(5185),M=a(6889);let U=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,z,y.Z,T.s,Z.c,r.L,v.B,M.V]}),o})()},2171:(b,f,a)=>{a.d(f,{y:()=>t});var u=a(9349);let t=(()=>{class h{constructor(r,l){this.host=r,this.renderer=l}ngAfterViewInit(){if(navigator.clipboard){const r=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(r,"click",this.clipboard)}}clipboard(r){const l=r.target,p=null==l?void 0:l.parentElement,C=null==p?void 0:p.querySelector("code");navigator.clipboard.writeText(null==C?void 0:C.innerText),l.innerText="Codigo copiado!",setTimeout(()=>{l.innerText="Copiar"},1e3)}}return h.\u0275fac=function(r){return new(r||h)(u.Y36(u.SBq),u.Y36(u.Qsj))},h.\u0275dir=u.lG2({type:h,selectors:[["","appClipboard",""]],standalone:!0}),h})()}}]);
//# sourceMappingURL=948.25a4e74d4a8d3ffc.js.map