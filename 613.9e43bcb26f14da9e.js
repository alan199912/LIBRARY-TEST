"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[613],{906:(Z,h,i)=>{i.d(h,{L:()=>m});var l=i(6362),e=i(9349);const C=["checkbox"];function t(c,s){if(1&c){const n=e.EpF();e.TgZ(0,"th",5)(1,"input",6),e.NdJ("change",function(v){e.CHM(n);const b=e.oxw(2);return e.KtG(b.allSelected(v.target))}),e.qZA()()}}function r(c,s){if(1&c&&(e.TgZ(0,"th",5),e._uU(1),e.qZA()),2&c){const n=s.$implicit;e.xp6(1),e.Oqu(n.value)}}function p(c,s){if(1&c){const n=e.EpF();e.TgZ(0,"td")(1,"input",6,9),e.NdJ("change",function(v){e.CHM(n);const b=e.oxw(3);return e.KtG(b.selectedRow(v.target))}),e.qZA()()}}function d(c,s){if(1&c&&e._UZ(0,"td",10),2&c){const n=s.$implicit,u=e.oxw().$implicit;e.Q6J("innerHTML",u[n.key],e.oJD)}}function f(c,s){if(1&c&&(e.TgZ(0,"tr"),e.YNc(1,p,3,0,"td",7),e.YNc(2,d,1,1,"td",8),e.qZA()),2&c){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.isSelectable),e.xp6(1),e.Q6J("ngForOf",n.displayedColumns)}}const T=function(c,s,n){return{"table-bordered":c,"table-striped":s,"table-hover":n}};function x(c,s){if(1&c&&(e.TgZ(0,"table",1)(1,"thead")(2,"tr"),e.YNc(3,t,2,0,"th",2),e.YNc(4,r,2,1,"th",3),e.qZA()(),e.TgZ(5,"tbody"),e.YNc(6,f,3,2,"tr",4),e.qZA()()),2&c){const n=e.oxw();e.Q6J("ngClass",e.kEZ(4,T,n.isBordered,n.isStriped,n.isHover)),e.xp6(3),e.Q6J("ngIf",n.isSelectable),e.xp6(1),e.Q6J("ngForOf",n.displayedColumns),e.xp6(2),e.Q6J("ngForOf",n.dataSource)}}let m=(()=>{class c{constructor(n){this.renderer=n,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new e.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(n=>{this.inputCheckArr.push(n.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(n=>{if(""===n.key||""===n.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(n=>n.value=n.value.trim()),this.displayedColumns=this.displayedColumns.map(n=>(n.value=n.value.charAt(0).toUpperCase()+n.value.slice(1).toLowerCase(),n)),this.displayedColumns.map(n=>{if(n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&n.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,n;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(n){n.checked?(this.checkbox.map(u=>this.renderer.setProperty(u.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(u=>this.renderer.setProperty(u.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(n){const u=this.inputCheckArr.indexOf(n);n.checked?this.DataSelectedArr.push(this.dataSource[u]):this.DataSelectedArr=this.DataSelectedArr.filter((v,b)=>b!==u),this.dataSelected.emit(this.DataSelectedArr)}}return c.\u0275fac=function(n){return new(n||c)(e.Y36(e.Qsj))},c.\u0275cmp=e.Xpm({type:c,selectors:[["o-table"]],viewQuery:function(n,u){if(1&n&&e.Gf(C,5),2&n){let v;e.iGM(v=e.CRH())&&(u.checkbox=v)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(n,u){1&n&&e.YNc(0,x,7,8,"table",0),2&n&&e.Q6J("ngIf",u.isValidateComponent)},dependencies:[l.ez,l.mk,l.sg,l.O5]}),c})()},1225:(Z,h,i)=>{i.d(h,{c:()=>t});var l=i(6362),e=i(9349);function C(r,p){if(1&r&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&r){const d=p.$implicit;e.xp6(1),e.Q6J("innerHTML",d,e.oJD)}}let t=(()=>{class r{constructor(){this.practices=[]}}return r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(d,f){1&d&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Malas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,C,2,1,"li",2),e.qZA()()),2&d&&(e.xp6(4),e.Q6J("ngForOf",f.practices))},dependencies:[l.ez,l.sg]}),r})()},553:(Z,h,i)=>{i.d(h,{s:()=>t});var l=i(6362),e=i(9349);function C(r,p){if(1&r&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&r){const d=p.$implicit;e.xp6(1),e.Q6J("innerHTML",d,e.oJD)}}let t=(()=>{class r{constructor(){this.practices=[]}}return r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(d,f){1&d&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Buenas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,C,2,1,"li",2),e.qZA()()),2&d&&(e.xp6(4),e.Q6J("ngForOf",f.practices))},dependencies:[l.ez,l.sg]}),r})()},4948:(Z,h,i)=>{i.d(h,{B:()=>x});var l=i(6362),e=i(9349);function C(m,c){if(1&m){const s=e.EpF();e.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),e.NdJ("click",function(){e.CHM(s);const u=e.oxw();return e.KtG(u.isWindowHTML=!0)}),e.TgZ(4,"span"),e._uU(5,"HTML"),e.qZA()(),e.TgZ(6,"a",4),e.NdJ("click",function(){e.CHM(s);const u=e.oxw();return e.KtG(u.isWindowHTML=!1)}),e.TgZ(7,"span"),e._uU(8,"TS"),e.qZA()()()()()}if(2&m){const s=e.oxw();e.xp6(3),e.ekj("active",s.isWindowHTML),e.xp6(3),e.ekj("active",!s.isWindowHTML)}}function t(m,c){1&m&&(e.ynx(0),e.Hsn(1),e.BQk())}function r(m,c){1&m&&(e.ynx(0),e.Hsn(1,1),e.BQk())}function p(m,c){if(1&m&&e.YNc(0,r,2,0,"ng-container",7),2&m){const s=e.oxw(),n=e.MAs(16);e.Q6J("ngIf",s.isWindowHTML)("ngIfElse",n)}}function d(m,c){1&m&&e.Hsn(0,2)}const f=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],T=["[component]","[component-html]","[component-ts]"];let x=(()=>{class m{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return m.\u0275fac=function(s){return new(s||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[e.jDz],ngContentSelectors:T,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(s,n){if(1&s&&(e.F$t(f),e.TgZ(0,"div",0)(1,"div",1)(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),e.NdJ("click",function(){return n.isOpenCode=!n.isOpenCode}),e.TgZ(8,"span"),e._uU(9),e.qZA()()()()()(),e.TgZ(10,"div",5),e.YNc(11,C,9,4,"nav",6),e.YNc(12,t,2,0,"ng-container",7),e.YNc(13,p,1,2,"ng-template",null,8,e.W1O),e.YNc(15,d,1,0,"ng-template",null,9,e.W1O),e.qZA()()),2&s){const u=e.MAs(14);e.xp6(3),e.Oqu(n.title),e.xp6(4),e.ekj("active",n.isOpenCode),e.xp6(2),e.Oqu(n.linkCode),e.xp6(2),e.Q6J("ngIf",n.isOpenCode&&n.isNavCode),e.xp6(1),e.Q6J("ngIf",!n.isOpenCode)("ngIfElse",u)}},dependencies:[l.ez,l.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),m})()},9613:(Z,h,i)=>{i.r(h),i.d(h,{CardNoticeModule:()=>D});var l=i(6362),e=i(7638),C=i(6527),t=i(9349),r=i(553),p=i(1225);let d=(()=>{class o{constructor(){this.bestPractices=C.qO,this.badPractices=C.RB}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-card-notice-overview"]],decls:17,vars:2,consts:[[1,"section-overview"],[1,"lead"],[1,""],[1,"section-design"],["src","https://gcba.github.io/estandares/componentes/card/vertical.svg","alt","imagen sobre carteles de noticia",1,"card-img-top"],[1,"section-usability"],[3,"practices"]],template:function(a,g){1&a&&(t.TgZ(0,"section",0)(1,"p",1),t._uU(2," Las tarjetas agrupan informaci\xf3n en contenedores flexibles y act\xfaan como punto de entrada que permite introducir un tema en espec\xedfico. "),t.qZA(),t.TgZ(3,"div",2)(4,"p"),t._uU(5,"Se utilizan para acceder a informaci\xf3n y dependen de un encabezado que las agrupe."),t.qZA()(),t.TgZ(6,"div",3)(7,"h2"),t._uU(8,"Dise\xf1o y estructura (Contexto de uso)"),t.qZA(),t.TgZ(9,"p"),t._uU(10," En su disposici\xf3n horizontal pueden organizarse solo 3 por l\xednea en desktop. Al truncar el layout como en mobile, se agrupan para un desplazamiento horizontal. "),t.qZA()(),t._UZ(11,"img",4),t.TgZ(12,"div",5)(13,"h2"),t._uU(14,"Usabilidad"),t.qZA(),t._UZ(15,"app-best-practices",6)(16,"app-bad-practices",6),t.qZA()()),2&a&&(t.xp6(15),t.Q6J("practices",g.bestPractices),t.xp6(1),t.Q6J("practices",g.badPractices))},dependencies:[r.s,p.c]}),o})();var f=i(5570),T=i(906),x=i(6434);let m=(()=>{class o{constructor(){this.columns=f.L0,this.dataSource=[{name:"@Input() <br/> title: string",description:"Se utiliza para colocar el t\xedtulo del card."},{name:"@Input() <br/> img: string",description:"Se utiliza para colocar la imagen del card."},{name:"@Input() <br/> tags: string[]",description:"Se utiliza para colocar las etiquetas del card."},{name:"@Input() <br/> text: string",description:"Se utiliza para colocar el texto del card."},{name:"@Input() <br/> link: string",description:"Se utiliza para establecer el hiperv\xednculo del card."},{name:"@Input() <br/> route: string",description:"Se utiliza para establecer la ruta del hiperv\xednculo con el routing de Angular."},{name:"@Input() <br/> datePublication: Date",description:"Se utiliza para colocar la fecha de publicaci\xf3n del card."},{name:"@Input() <br/> srcAudio: string",description:"Se utiliza para colocar la fuente del audio del card."}]}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-card-notice-api"]],decls:22,vars:4,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","code"," import { OCardModule } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"]],template:function(a,g){1&a&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2"),t._uU(3,"Referencia de API para el componente Tarjeta noticia de Obelisco"),t.qZA(),t.TgZ(4,"pre",2),t._uU(5,"      "),t._UZ(6,"code",3),t._uU(7,"\n    "),t.qZA()(),t.TgZ(8,"h3"),t._uU(9,"Etiqueta"),t.qZA(),t._UZ(10,"hr"),t.TgZ(11,"div",4)(12,"h4"),t._uU(13,"OCardNotice"),t.qZA(),t.TgZ(14,"p"),t._uU(15,"Selector: "),t.TgZ(16,"strong"),t._uU(17,"o-card-notice"),t.qZA()(),t.TgZ(18,"div",5)(19,"h5"),t._uU(20,"Propiedades"),t.qZA(),t._UZ(21,"o-table",6),t.qZA()()()),2&a&&(t.xp6(21),t.Q6J("displayedColumns",g.columns)("dataSource",g.dataSource)("isStriped",!0)("isBordered",!0))},dependencies:[T.L,x.y]}),o})();var c=i(4948),s=i(1515);const n=["card"];function u(o,_){if(1&o&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&o){const a=_.$implicit;t.xp6(1),t.Oqu(a)}}function v(o,_){if(1&o&&(t.TgZ(0,"div",8),t.YNc(1,u,2,1,"span",9),t.qZA()),2&o){const a=t.oxw();t.xp6(1),t.Q6J("ngForOf",a.tags)}}function b(o,_){if(1&o&&(t.TgZ(0,"p",11),t._uU(1),t.qZA()),2&o){const a=t.oxw();t.xp6(1),t.Oqu(a.text)}}function A(o,_){if(1&o&&(t.TgZ(0,"div",12)(1,"small"),t._uU(2),t.ALo(3,"date"),t.qZA()()),2&o){const a=t.oxw();t.xp6(2),t.hij("Fecha de publicaci\xf3n: ",t.xi3(3,1,a.datePublication,"shortDate"),"")}}const y=[[["","audio",""]]],M=["[audio]"];let w=(()=>{class o{constructor(a){this.renderer=a,this.tags=[]}get getIsTags(){return this.tags.length>0}ngAfterViewInit(){this.link&&this.renderer.setAttribute(this.card.nativeElement,"href",this.link)}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(t.Qsj))},o.\u0275cmp=t.Xpm({type:o,selectors:[["o-card-notice"]],viewQuery:function(a,g){if(1&a&&t.Gf(n,5),2&a){let O;t.iGM(O=t.CRH())&&(g.card=O.first)}},inputs:{title:"title",img:"img",tags:"tags",text:"text",link:"link",route:"route",datePublication:"datePublication",srcAudio:"srcAudio"},ngContentSelectors:M,decls:10,vars:7,consts:[[1,"card",3,"routerLink"],["card",""],["oDefaultImage","",1,"card-img-top",3,"src","alt"],[1,"card-body"],["class","mb-2",4,"ngIf"],[1,"card-title"],["class","card-text",4,"ngIf"],["class","card-footer",4,"ngIf"],[1,"mb-2"],["class","badge badge-info",4,"ngFor","ngForOf"],[1,"badge","badge-info"],[1,"card-text"],[1,"card-footer"]],template:function(a,g){1&a&&(t.F$t(y),t.TgZ(0,"a",0,1),t._UZ(2,"img",2),t.Hsn(3),t.TgZ(4,"div",3),t.YNc(5,v,2,1,"div",4),t.TgZ(6,"h4",5),t._uU(7),t.qZA(),t.YNc(8,b,2,1,"p",6),t.qZA(),t.YNc(9,A,4,4,"div",7),t.qZA()),2&a&&(t.Q6J("routerLink",g.route),t.xp6(2),t.Q6J("src",g.img,t.LSH)("alt",g.title),t.xp6(3),t.Q6J("ngIf",g.getIsTags),t.xp6(2),t.Oqu(g.title),t.xp6(1),t.Q6J("ngIf",g.text),t.xp6(1),t.Q6J("ngIf",g.datePublication))},dependencies:[l.sg,l.O5,e.yS,s.z,l.uU]}),o})();var E=i(2171);const P=[{path:"overview",component:d},{path:"api",component:m},{path:"examples",component:(()=>{class o{constructor(){this.tags=["Etiqueta 1","Etiqueta 2","Etiqueta 3"],this.date=new Date,this.cardExampleHTML=C.xP,this.cardExampleTS=C.cD}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-card-notice-examples"]],decls:20,vars:5,consts:[[1,"section-example"],["title","Simple",3,"isNavCode"],["component","",2,"width","500px"],["title","T\xedtulo de tarjeta","text","Recomendamos en este espacio no utilizar m\xe1s de 3 l\xedneas, para generar una lectura \xf3ptima.","route","/components","img","https://gcba.github.io/Obelisco/cards/evento.jpg",3,"tags","datePublication"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["appClipboard","","component-ts","",1,"code"],["appPrism",""]],template:function(a,g){1&a&&(t.TgZ(0,"section",0)(1,"app-viewer",1)(2,"div",2),t._UZ(3,"o-card-notice",3),t.qZA(),t.TgZ(4,"pre",4),t._uU(5,"      "),t.TgZ(6,"button",5),t._uU(7,"Copiar"),t.qZA(),t._uU(8,"\n      "),t.TgZ(9,"code",6),t._uU(10),t.qZA(),t._uU(11,"\n    "),t.qZA(),t.TgZ(12,"pre",7),t._uU(13,"      "),t.TgZ(14,"button",5),t._uU(15,"Copiar"),t.qZA(),t._uU(16,"\n      "),t.TgZ(17,"code",8),t._uU(18),t.qZA(),t._uU(19,"\n    "),t.qZA()()()),2&a&&(t.xp6(1),t.Q6J("isNavCode",!0),t.xp6(2),t.Q6J("tags",g.tags)("datePublication",g.date),t.xp6(7),t.Oqu(g.cardExampleHTML),t.xp6(8),t.Oqu(g.cardExampleTS))},dependencies:[c.B,w,E.y,x.y]}),o})()},{path:"**",pathMatch:"full",redirectTo:"overview"}];let S=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.Bz.forChild(P),e.Bz]}),o})();var N=i(5185),U=i(6889);let D=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,S,N.Z,r.s,p.c,T.L,c.B,U.V]}),o})()},2171:(Z,h,i)=>{i.d(h,{y:()=>e});var l=i(9349);let e=(()=>{class C{constructor(r,p){this.host=r,this.renderer=p}ngAfterViewInit(){if(navigator.clipboard){const r=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(r,"click",this.clipboard)}}clipboard(r){const p=r.target,d=null==p?void 0:p.parentElement,f=null==d?void 0:d.querySelector("code");navigator.clipboard.writeText(null==f?void 0:f.innerText),p.innerText="Codigo copiado!",setTimeout(()=>{p.innerText="Copiar"},1e3)}}return C.\u0275fac=function(r){return new(r||C)(l.Y36(l.SBq),l.Y36(l.Qsj))},C.\u0275dir=l.lG2({type:C,selectors:[["","appClipboard",""]],standalone:!0}),C})()}}]);
//# sourceMappingURL=613.9e43bcb26f14da9e.js.map