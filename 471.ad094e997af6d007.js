"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[471],{906:(O,b,a)=>{a.d(b,{L:()=>p});var _=a(6362),t=a(9349);const m=["checkbox"];function v(s,i){if(1&s){const n=t.EpF();t.TgZ(0,"th",5)(1,"input",6),t.NdJ("change",function(f){t.CHM(n);const Z=t.oxw(2);return t.KtG(Z.allSelected(f.target))}),t.qZA()()}}function c(s,i){if(1&s&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&s){const n=i.$implicit;t.xp6(1),t.Oqu(n.value)}}function g(s,i){if(1&s){const n=t.EpF();t.TgZ(0,"td")(1,"input",6,9),t.NdJ("change",function(f){t.CHM(n);const Z=t.oxw(3);return t.KtG(Z.selectedRow(f.target))}),t.qZA()()}}function h(s,i){if(1&s&&t._UZ(0,"td",10),2&s){const n=i.$implicit,l=t.oxw().$implicit;t.Q6J("innerHTML",l[n.key],t.oJD)}}function e(s,i){if(1&s&&(t.TgZ(0,"tr"),t.YNc(1,g,3,0,"td",7),t.YNc(2,h,1,1,"td",8),t.qZA()),2&s){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns)}}const C=function(s,i,n){return{"table-bordered":s,"table-striped":i,"table-hover":n}};function T(s,i){if(1&s&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr"),t.YNc(3,v,2,0,"th",2),t.YNc(4,c,2,1,"th",3),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,e,3,2,"tr",4),t.qZA()()),2&s){const n=t.oxw();t.Q6J("ngClass",t.kEZ(4,C,n.isBordered,n.isStriped,n.isHover)),t.xp6(3),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns),t.xp6(2),t.Q6J("ngForOf",n.dataSource)}}let p=(()=>{class s{constructor(n){this.renderer=n,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new t.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(n=>{this.inputCheckArr.push(n.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(n=>{if(""===n.key||""===n.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(n=>n.value=n.value.trim()),this.displayedColumns=this.displayedColumns.map(n=>(n.value=n.value.charAt(0).toUpperCase()+n.value.slice(1).toLowerCase(),n)),this.displayedColumns.map(n=>{if(n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&n.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,n;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(n){n.checked?(this.checkbox.map(l=>this.renderer.setProperty(l.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(l=>this.renderer.setProperty(l.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(n){const l=this.inputCheckArr.indexOf(n);n.checked?this.DataSelectedArr.push(this.dataSource[l]):this.DataSelectedArr=this.DataSelectedArr.filter((f,Z)=>Z!==l),this.dataSelected.emit(this.DataSelectedArr)}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(t.Qsj))},s.\u0275cmp=t.Xpm({type:s,selectors:[["o-table"]],viewQuery:function(n,l){if(1&n&&t.Gf(m,5),2&n){let f;t.iGM(f=t.CRH())&&(l.checkbox=f)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(n,l){1&n&&t.YNc(0,T,7,8,"table",0),2&n&&t.Q6J("ngIf",l.isValidateComponent)},dependencies:[_.ez,_.mk,_.sg,_.O5]}),s})()},553:(O,b,a)=>{a.d(b,{s:()=>v});var _=a(6362),t=a(9349);function m(c,g){if(1&c&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&c){const h=g.$implicit;t.xp6(1),t.Q6J("innerHTML",h,t.oJD)}}let v=(()=>{class c{constructor(){this.practices=[]}}return c.\u0275fac=function(h){return new(h||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(h,e){1&h&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Buenas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,m,2,1,"li",2),t.qZA()()),2&h&&(t.xp6(4),t.Q6J("ngForOf",e.practices))},dependencies:[_.ez,_.sg]}),c})()},4948:(O,b,a)=>{a.d(b,{B:()=>T});var _=a(6362),t=a(9349);function m(p,s){if(1&p){const i=t.EpF();t.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),t.NdJ("click",function(){t.CHM(i);const l=t.oxw();return t.KtG(l.isWindowHTML=!0)}),t.TgZ(4,"span"),t._uU(5,"HTML"),t.qZA()(),t.TgZ(6,"a",4),t.NdJ("click",function(){t.CHM(i);const l=t.oxw();return t.KtG(l.isWindowHTML=!1)}),t.TgZ(7,"span"),t._uU(8,"TS"),t.qZA()()()()()}if(2&p){const i=t.oxw();t.xp6(3),t.ekj("active",i.isWindowHTML),t.xp6(3),t.ekj("active",!i.isWindowHTML)}}function v(p,s){1&p&&(t.ynx(0),t.Hsn(1),t.BQk())}function c(p,s){1&p&&(t.ynx(0),t.Hsn(1,1),t.BQk())}function g(p,s){if(1&p&&t.YNc(0,c,2,0,"ng-container",7),2&p){const i=t.oxw(),n=t.MAs(16);t.Q6J("ngIf",i.isWindowHTML)("ngIfElse",n)}}function h(p,s){1&p&&t.Hsn(0,2)}const e=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],C=["[component]","[component-html]","[component-ts]"];let T=(()=>{class p{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return p.\u0275fac=function(i){return new(i||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[t.jDz],ngContentSelectors:C,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(i,n){if(1&i&&(t.F$t(e),t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),t.NdJ("click",function(){return n.isOpenCode=!n.isOpenCode}),t.TgZ(8,"span"),t._uU(9),t.qZA()()()()()(),t.TgZ(10,"div",5),t.YNc(11,m,9,4,"nav",6),t.YNc(12,v,2,0,"ng-container",7),t.YNc(13,g,1,2,"ng-template",null,8,t.W1O),t.YNc(15,h,1,0,"ng-template",null,9,t.W1O),t.qZA()()),2&i){const l=t.MAs(14);t.xp6(3),t.Oqu(n.title),t.xp6(4),t.ekj("active",n.isOpenCode),t.xp6(2),t.Oqu(n.linkCode),t.xp6(2),t.Q6J("ngIf",n.isOpenCode&&n.isNavCode),t.xp6(1),t.Q6J("ngIf",!n.isOpenCode)("ngIfElse",l)}},dependencies:[_.ez,_.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),p})()},3471:(O,b,a)=>{a.r(b),a.d(b,{BreadcrumbModule:()=>I});var _=a(553),t=a(6362),m=a(7638),v=a(253),c=a(8951),g=a(116),h=a(4874),e=a(9349),C=a(6317);let T=(()=>{class r{constructor(){this.breadcrumb$=new C.X({actualRoute:{name:""},routes:[],url:""})}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const p=function(r){return[r]};function s(r,d){if(1&r&&(e.TgZ(0,"a",3),e._uU(1),e.qZA()),2&r){const o=e.oxw().$implicit;e.Q6J("routerLink",e.VKq(2,p,o.url)),e.xp6(1),e.hij(" ",o.name," ")}}function i(r,d){if(1&r&&e._uU(0),2&r){const o=e.oxw().$implicit;e.Oqu(null==o?null:o.name)}}function n(r,d){if(1&r&&(e.TgZ(0,"li",2),e.YNc(1,s,2,4,"a",5),e.YNc(2,i,1,1,"ng-template",null,6,e.W1O),e.qZA()),2&r){const o=d.index,u=e.MAs(3),B=e.oxw();e.xp6(1),e.Q6J("ngIf",o!==B.routes.length-1)("ngIfElse",u)}}const l=function(){return["/"]};let f=(()=>{class r{constructor(o,u){this.router=o,this.breadcrumbService=u,this.routes=[],this.onDestroy$=new v.x}ngOnInit(){this.breadcrumbService.breadcrumb$.pipe((0,c.R)(this.onDestroy$)).subscribe(o=>{0!==Object.entries(o).length&&0!==o.routes.length&&""!==o.actualRoute.name&&""!==o.url&&(this.routes=o.routes,this.actualRoute=o.actualRoute,this.url=o.url,this.getReversedRoutes())}),0!==this.routes.length||this.actualRoute||this.getPaths()}getPaths(){this.router.events.pipe((0,c.R)(this.onDestroy$),(0,g.h)(o=>o instanceof m.m2),(0,h.O)(this.router)).subscribe({next:o=>{this.routes=[],o.url.split("/").forEach((u,B)=>(""!==u||isNaN(+u)||u.length>2)&&this.routes.push({name:this.formatedName(u),url:this.formatedUrl(u,o.url)}))}})}formatedName(o){return o&&o[0].toUpperCase()+o.split("-").join(" ").slice(1)||""}formatedUrl(o,u){return u.split(o)[0]+o}getReversedRoutes(){this.actualRoute||(this.actualRoute=this.routes[this.routes.length-1],this.routes.pop()),this.routes=[...this.routes].reverse(),this.routes=[...this.routes,this.actualRoute],this.routes=this.routes.map(o=>o.url?o:Object.assign(Object.assign({},o),{url:`/${this.url}/${o.id}`}))}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(m.F0),e.Y36(T))},r.\u0275cmp=e.Xpm({type:r,selectors:[["o-breadcrumb"]],standalone:!0,features:[e.jDz],decls:6,vars:3,consts:[["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[3,"routerLink",4,"ngIf","ngIfElse"],["nameDefault",""]],template:function(o,u){1&o&&(e.TgZ(0,"nav",0)(1,"ol",1)(2,"li",2)(3,"a",3),e._uU(4,"Inicio"),e.qZA()(),e.YNc(5,n,4,2,"li",4),e.qZA()()),2&o&&(e.xp6(3),e.Q6J("routerLink",e.DdM(2,l)),e.xp6(2),e.Q6J("ngForOf",u.routes))},dependencies:[t.ez,t.sg,t.O5,m.Bz,m.yS]}),r})();var Z=a(5185),A=a(906),x=a(5600),M=a(5570),U=a(6434);const y=function(){return["/components/breadcrumb/examples"]};let S=(()=>{class r{constructor(){this.exampleInterface1=x.c_,this.exampleInterface2=x.qm,this.dataSource=x._m,this.columns=M.L0}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-breadcrumb-api"]],decls:64,vars:9,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","language","javascript","code","import { OBreadcrumbComponent } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],["appPrism","","language","javascript","code","import { BreadCrumbService } from 'ngx-obelisco';"],["fragment","simple",3,"routerLink"],[1,"mb-5"],[3,"dataSource","displayedColumns","isBordered"],["fragment","customRoutes",3,"routerLink"],[1,"section-type","mt-5"],[1,"section-interface"],["appPrism","","language","javascript"]],template:function(o,u){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2"),e._uU(3,"Referencia de API para el componente Pan de miga de Obelisco"),e.qZA(),e.TgZ(4,"pre",2),e._uU(5,"      "),e._UZ(6,"code",3),e._uU(7,"\n    "),e.qZA()(),e.TgZ(8,"h3"),e._uU(9,"Etiqueta"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"OBreadcrumb"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Selector: "),e.TgZ(16,"strong"),e._uU(17,"o-breadcrumb"),e.qZA()(),e.TgZ(18,"div",5)(19,"h5"),e._uU(20,"Como se usa"),e.qZA(),e.TgZ(21,"p"),e._uU(22," Se puede usar agregando su etiqueta en el html para detectar desde la url que par\xe1metros agregar al breadcrumb. "),e.qZA(),e.TgZ(23,"pre",2),e._uU(24,"        "),e._UZ(25,"code",6),e._uU(26,"\n      "),e.qZA(),e.TgZ(27,"p"),e._uU(28," Ver "),e.TgZ(29,"a",7),e._uU(30,"ejemplo simple"),e.qZA()(),e.TgZ(31,"p",8),e._uU(32," De otra forma se tiene que importar el servicio "),e.TgZ(33,"strong"),e._uU(34,"BreadCrumbService"),e.qZA(),e._uU(35," desde el componente a quien le queremos cambiar o personalizar el breadcrumb y agregar el valor al BehaviorSubject "),e.TgZ(36,"strong"),e._uU(37,"breadcrumb$"),e.qZA(),e._uU(38," la ruta actual, las rutas y la url de la siguiente manera: "),e.qZA(),e._UZ(39,"o-table",9),e.TgZ(40,"p"),e._uU(41," Ver "),e.TgZ(42,"a",10),e._uU(43,"ejemplo rutas personalizadas"),e.qZA()()(),e.TgZ(44,"div",11)(45,"h4"),e._uU(46,"Breadcrumb"),e.qZA(),e.TgZ(47,"p"),e._uU(48,"Permite establecer los valores de la propiedad "),e.TgZ(49,"strong"),e._uU(50,"breadcrumb$"),e.qZA(),e._uU(51,"."),e.qZA(),e.TgZ(52,"div",12)(53,"pre",2),e._uU(54,"          "),e.TgZ(55,"code",13),e._uU(56),e.qZA(),e._uU(57,"\n        "),e.qZA()(),e.TgZ(58,"div",12)(59,"pre",2),e._uU(60,"          "),e.TgZ(61,"code",13),e._uU(62),e.qZA(),e._uU(63,"\n        "),e.qZA()()()()()),2&o&&(e.xp6(29),e.Q6J("routerLink",e.DdM(7,y)),e.xp6(10),e.Q6J("dataSource",u.dataSource)("displayedColumns",u.columns)("isBordered",!0),e.xp6(3),e.Q6J("routerLink",e.DdM(8,y)),e.xp6(14),e.Oqu(u.exampleInterface1),e.xp6(6),e.Oqu(u.exampleInterface2))},dependencies:[m.yS,U.y,A.L]}),r})();var w=a(4948),E=a(2171);const q=function(){return["/"]},P=function(){return["/components"]},D=function(){return["/components/breadcrumb"]},L=[{path:"overview",component:(()=>{class r{constructor(){this.bestPractices=x.bx}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-breadcrumb-overview"]],decls:25,vars:1,consts:[[1,"section-overview"],[1,"lead"],[1,"section-design"],["src","https://gcba.github.io/estandares/componentes/breadcrumb/breadcrumb.png","alt","imagen sobre carteles de alerta",1,"card-img-top"],[1,"section-usability"],[3,"practices"]],template:function(o,u){1&o&&(e.TgZ(0,"section",0)(1,"p",1),e._uU(2," Las migas de pan brindan un sistema de navegaci\xf3n secundaria y muestran el contexto para ayudar a los usuarios a comprender d\xf3nde se encuentran. "),e.qZA(),e.TgZ(3,"h2"),e._uU(4,"Tipos de migas de pan"),e.qZA(),e.TgZ(5,"h3"),e._uU(6,"Desktop"),e.qZA(),e.TgZ(7,"p"),e._uU(8," Las rutas de navegaci\xf3n muestran d\xf3nde se encuentra la p\xe1gina actual en la jerarqu\xeda del sitio web. Utilizar migas de pan refuerza la estructura del sitio. En desktop, se ve completo. "),e.qZA(),e.TgZ(9,"h3"),e._uU(10,"Mobile"),e.qZA(),e.TgZ(11,"p"),e._uU(12,"Mientras que en dispositivos m\xf3viles, se ve de manera reducida, solo para permitir un regreso."),e.qZA(),e.TgZ(13,"div",2)(14,"h2"),e._uU(15,"Dise\xf1o y estructura (Contexto de uso)"),e.qZA(),e.TgZ(16,"h3"),e._uU(17,"Desktop"),e.qZA(),e.TgZ(18,"p"),e._uU(19," Se ubican sobre el t\xedtulo de la p\xe1gina y muestran el progreso jer\xe1rquico desde el nivel de elemento m\xe1s alto hasta el m\xe1s bajo. Los niveles que posean m\xe1s de 30 caracteres se truncar\xe1n y agregar\xe1n tres puntos (\u2026) al final para visualizar que hay m\xe1s texto en dicho nivel. "),e.qZA()(),e._UZ(20,"img",3),e.TgZ(21,"div",4)(22,"h2"),e._uU(23,"Usabilidad"),e.qZA(),e._UZ(24,"app-best-practices",5),e.qZA()()),2&o&&(e.xp6(24),e.Q6J("practices",u.bestPractices))},dependencies:[_.s]}),r})()},{path:"api",component:S},{path:"examples",component:(()=>{class r{constructor(o){this.breadcrumb=o,this.exampleTS=x.U8}ngOnInit(){this.breadcrumb.breadcrumb$.next({actualRoute:{name:"ruta actual"},routes:[{name:"ruta 1",id:"1"},{name:"ruta 2",id:"5",url:"/routes-2/5"}],url:"url-ruta"})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(T))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-breadcrumb-examples"]],decls:39,vars:8,consts:[[1,"section-example"],["title","Simple","id","simple"],["aria-label","breadcrumb","component",""],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html","code","<o-breadcrumb></o-breadcrumb>"],["title","Rutas personalizadas","id","customRoutes",3,"isNavCode"],["component",""],["appClipboard","","component-ts","",1,"code"],["appPrism","","language","javascript"]],template:function(o,u){1&o&&(e.TgZ(0,"section",0)(1,"app-viewer",1)(2,"nav",2)(3,"ol",3)(4,"li",4)(5,"a",5),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"li",4)(8,"a",5),e._uU(9,"Components"),e.qZA()(),e.TgZ(10,"li",4)(11,"a",5),e._uU(12,"Breadcrumb"),e.qZA()(),e.TgZ(13,"li",4),e._uU(14,"Examples"),e.qZA()()(),e.TgZ(15,"pre",6),e._uU(16,"      "),e.TgZ(17,"button",7),e._uU(18,"Copiar"),e.qZA(),e._uU(19,"\n      "),e._UZ(20,"code",8),e._uU(21,"\n    "),e.qZA()(),e.TgZ(22,"app-viewer",9),e._UZ(23,"o-breadcrumb",10),e.TgZ(24,"pre",6),e._uU(25,"      "),e.TgZ(26,"button",7),e._uU(27,"Copiar"),e.qZA(),e._uU(28,"\n      "),e._UZ(29,"code",8),e._uU(30,"\n    "),e.qZA(),e.TgZ(31,"pre",11),e._uU(32,"      "),e.TgZ(33,"button",7),e._uU(34,"Copiar"),e.qZA(),e._uU(35,"\n      "),e.TgZ(36,"code",12),e._uU(37),e.qZA(),e._uU(38,"\n    "),e.qZA()()()),2&o&&(e.xp6(5),e.Q6J("routerLink",e.DdM(5,q)),e.xp6(3),e.Q6J("routerLink",e.DdM(6,P)),e.xp6(3),e.Q6J("routerLink",e.DdM(7,D)),e.xp6(11),e.Q6J("isNavCode",!0),e.xp6(15),e.Oqu(u.exampleTS))},dependencies:[m.yS,w.B,f,E.y,U.y]}),r})()},{path:"**",pathMatch:"full",redirectTo:"overview"}];let k=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.Bz.forChild(L),m.Bz]}),r})(),I=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[t.ez,k,Z.Z,_.s,w.B,f,A.L]}),r})()},2171:(O,b,a)=>{a.d(b,{y:()=>t});var _=a(9349);let t=(()=>{class m{constructor(c,g){this.host=c,this.renderer=g}ngAfterViewInit(){if(navigator.clipboard){const c=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(c,"click",this.clipboard)}}clipboard(c){const g=c.target,h=null==g?void 0:g.parentElement,e=null==h?void 0:h.querySelector("code");navigator.clipboard.writeText(null==e?void 0:e.innerText),g.innerText="Codigo copiado!",setTimeout(()=>{g.innerText="Copiar"},1e3)}}return m.\u0275fac=function(c){return new(c||m)(_.Y36(_.SBq),_.Y36(_.Qsj))},m.\u0275dir=_.lG2({type:m,selectors:[["","appClipboard",""]],standalone:!0}),m})()}}]);
//# sourceMappingURL=471.ad094e997af6d007.js.map