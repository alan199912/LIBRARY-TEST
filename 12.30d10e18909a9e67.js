"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[12],{906:(A,T,o)=>{o.d(T,{L:()=>m});var d=o(6362),t=o(9349);const g=["checkbox"];function r(a,s){if(1&a){const n=t.EpF();t.TgZ(0,"th",5)(1,"input",6),t.NdJ("change",function(C){t.CHM(n);const f=t.oxw(2);return t.KtG(f.allSelected(C.target))}),t.qZA()()}}function e(a,s){if(1&a&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&a){const n=s.$implicit;t.xp6(1),t.Oqu(n.value)}}function l(a,s){if(1&a){const n=t.EpF();t.TgZ(0,"td")(1,"input",6,9),t.NdJ("change",function(C){t.CHM(n);const f=t.oxw(3);return t.KtG(f.selectedRow(C.target))}),t.qZA()()}}function p(a,s){if(1&a&&t._UZ(0,"td",10),2&a){const n=s.$implicit,u=t.oxw().$implicit;t.Q6J("innerHTML",u[n.key],t.oJD)}}function v(a,s){if(1&a&&(t.TgZ(0,"tr"),t.YNc(1,l,3,0,"td",7),t.YNc(2,p,1,1,"td",8),t.qZA()),2&a){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns)}}const Z=function(a,s,n){return{"table-bordered":a,"table-striped":s,"table-hover":n}};function U(a,s){if(1&a&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr"),t.YNc(3,r,2,0,"th",2),t.YNc(4,e,2,1,"th",3),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,v,3,2,"tr",4),t.qZA()()),2&a){const n=t.oxw();t.Q6J("ngClass",t.kEZ(4,Z,n.isBordered,n.isStriped,n.isHover)),t.xp6(3),t.Q6J("ngIf",n.isSelectable),t.xp6(1),t.Q6J("ngForOf",n.displayedColumns),t.xp6(2),t.Q6J("ngForOf",n.dataSource)}}let m=(()=>{class a{constructor(n){this.renderer=n,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new t.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(n=>{this.inputCheckArr.push(n.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(n=>{if(""===n.key||""===n.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(n=>n.value=n.value.trim()),this.displayedColumns=this.displayedColumns.map(n=>(n.value=n.value.charAt(0).toUpperCase()+n.value.slice(1).toLowerCase(),n)),this.displayedColumns.map(n=>{if(n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&n.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,n;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(n){n.checked?(this.checkbox.map(u=>this.renderer.setProperty(u.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(u=>this.renderer.setProperty(u.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(n){const u=this.inputCheckArr.indexOf(n);n.checked?this.DataSelectedArr.push(this.dataSource[u]):this.DataSelectedArr=this.DataSelectedArr.filter((C,f)=>f!==u),this.dataSelected.emit(this.DataSelectedArr)}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(t.Qsj))},a.\u0275cmp=t.Xpm({type:a,selectors:[["o-table"]],viewQuery:function(n,u){if(1&n&&t.Gf(g,5),2&n){let C;t.iGM(C=t.CRH())&&(u.checkbox=C)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(n,u){1&n&&t.YNc(0,U,7,8,"table",0),2&n&&t.Q6J("ngIf",u.isValidateComponent)},dependencies:[d.ez,d.mk,d.sg,d.O5]}),a})()},1225:(A,T,o)=>{o.d(T,{c:()=>r});var d=o(6362),t=o(9349);function g(e,l){if(1&e&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&e){const p=l.$implicit;t.xp6(1),t.Q6J("innerHTML",p,t.oJD)}}let r=(()=>{class e{constructor(){this.practices=[]}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(p,v){1&p&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Malas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,g,2,1,"li",2),t.qZA()()),2&p&&(t.xp6(4),t.Q6J("ngForOf",v.practices))},dependencies:[d.ez,d.sg]}),e})()},553:(A,T,o)=>{o.d(T,{s:()=>r});var d=o(6362),t=o(9349);function g(e,l){if(1&e&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&e){const p=l.$implicit;t.xp6(1),t.Q6J("innerHTML",p,t.oJD)}}let r=(()=>{class e{constructor(){this.practices=[]}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(p,v){1&p&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Buenas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,g,2,1,"li",2),t.qZA()()),2&p&&(t.xp6(4),t.Q6J("ngForOf",v.practices))},dependencies:[d.ez,d.sg]}),e})()},4948:(A,T,o)=>{o.d(T,{B:()=>U});var d=o(6362),t=o(9349);function g(m,a){if(1&m){const s=t.EpF();t.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),t.NdJ("click",function(){t.CHM(s);const u=t.oxw();return t.KtG(u.isWindowHTML=!0)}),t.TgZ(4,"span"),t._uU(5,"HTML"),t.qZA()(),t.TgZ(6,"a",4),t.NdJ("click",function(){t.CHM(s);const u=t.oxw();return t.KtG(u.isWindowHTML=!1)}),t.TgZ(7,"span"),t._uU(8,"TS"),t.qZA()()()()()}if(2&m){const s=t.oxw();t.xp6(3),t.ekj("active",s.isWindowHTML),t.xp6(3),t.ekj("active",!s.isWindowHTML)}}function r(m,a){1&m&&(t.ynx(0),t.Hsn(1),t.BQk())}function e(m,a){1&m&&(t.ynx(0),t.Hsn(1,1),t.BQk())}function l(m,a){if(1&m&&t.YNc(0,e,2,0,"ng-container",7),2&m){const s=t.oxw(),n=t.MAs(16);t.Q6J("ngIf",s.isWindowHTML)("ngIfElse",n)}}function p(m,a){1&m&&t.Hsn(0,2)}const v=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],Z=["[component]","[component-html]","[component-ts]"];let U=(()=>{class m{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return m.\u0275fac=function(s){return new(s||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[t.jDz],ngContentSelectors:Z,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(s,n){if(1&s&&(t.F$t(v),t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),t.NdJ("click",function(){return n.isOpenCode=!n.isOpenCode}),t.TgZ(8,"span"),t._uU(9),t.qZA()()()()()(),t.TgZ(10,"div",5),t.YNc(11,g,9,4,"nav",6),t.YNc(12,r,2,0,"ng-container",7),t.YNc(13,l,1,2,"ng-template",null,8,t.W1O),t.YNc(15,p,1,0,"ng-template",null,9,t.W1O),t.qZA()()),2&s){const u=t.MAs(14);t.xp6(3),t.Oqu(n.title),t.xp6(4),t.ekj("active",n.isOpenCode),t.xp6(2),t.Oqu(n.linkCode),t.xp6(2),t.Q6J("ngIf",n.isOpenCode&&n.isNavCode),t.xp6(1),t.Q6J("ngIf",!n.isOpenCode)("ngIfElse",u)}},dependencies:[d.ez,d.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),m})()},2012:(A,T,o)=>{o.r(T),o.d(T,{NavigationVerticalModule:()=>b});var d=o(6362),t=o(7638),g=o(5570),r=o(7152),e=o(9349),l=o(906),p=o(6434);let v=(()=>{class i{constructor(){this.columns=g.L0,this.dataSourceNavigationVertical=r.bY,this.exampleIterface=r.zJ}}return i.\u0275fac=function(_){return new(_||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-navigation-vertical-api"]],decls:39,vars:5,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","code","import { ONavModule } from '@ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"],[1,"section-type"],[1,"section-interface"],["appPrism","","language","javascript"]],template:function(_,c){1&_&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2"),e._uU(3,"Referencia de API para el componente Navegacion vertical de Obelisco"),e.qZA(),e.TgZ(4,"pre",2),e._uU(5,"        "),e._UZ(6,"code",3),e._uU(7,"\n      "),e.qZA()(),e.TgZ(8,"h3"),e._uU(9,"Etiqueta"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"ONavVertical"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Selector: "),e.TgZ(16,"strong"),e._uU(17,"o-nav-vertical"),e.qZA()(),e.TgZ(18,"div",5)(19,"h5"),e._uU(20,"Propiedades"),e.qZA(),e._UZ(21,"o-table",6),e.qZA()(),e.TgZ(22,"h3"),e._uU(23,"Tipos de datos"),e.qZA(),e._UZ(24,"hr"),e.TgZ(25,"div",7)(26,"h4"),e._uU(27,"NavVerticalItems"),e.qZA(),e.TgZ(28,"p"),e._uU(29,"Permite establecer los valores de la propiedad "),e.TgZ(30,"strong"),e._uU(31,"NavItems"),e.qZA(),e._uU(32,"."),e.qZA(),e.TgZ(33,"div",8)(34,"pre",2),e._uU(35,"          "),e.TgZ(36,"code",9),e._uU(37),e.qZA(),e._uU(38,"\n        "),e.qZA()()()()),2&_&&(e.xp6(21),e.Q6J("displayedColumns",c.columns)("dataSource",c.dataSourceNavigationVertical)("isStriped",!0)("isBordered",!0),e.xp6(16),e.Oqu(c.exampleIterface))},dependencies:[l.L,p.y]}),i})();var Z=o(7202),U=o(4948),m=o(2171);let a=(()=>{class i{constructor(){this.navigationSimpleComponent=r.Lk,this.navigationSimpleIconComponent=r.Zf,this.levelTwoComponent=r.Et,this.levelTwoIconComponent=r.hd,this.levelThreeComponent=r.xS,this.levelThreeIconComponent=r.t6,this.simpleHTML=r.Vf,this.exampleTs=r.ml,this.exampleTsIcon=r.eD,this.exampleTsTwo=r.HT,this.exampleTsTwoIcon=r.DN,this.exampleTsThree=r.uv,this.exampleTsThreeIcon=r.sb}}return i.\u0275fac=function(_){return new(_||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-navigation-vertical-examples"]],decls:109,vars:24,consts:[[1,"section-example"],["title","Simple",3,"isNavCode"],["component","",3,"navItems"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["appClipboard","","component-ts","",1,"code"],["appPrism",""],["title","Simple con icono",3,"isNavCode"],["title","Con dos niveles",3,"isNavCode"],["appPrism","","language","javascript"],["title","Con dos niveles e icono",3,"isNavCode"],["title","Con tres niveles",3,"isNavCode"],["title","Con tres niveles e icono",3,"isNavCode"]],template:function(_,c){1&_&&(e.TgZ(0,"section",0)(1,"app-viewer",1),e._UZ(2,"o-nav-vertical",2),e.TgZ(3,"pre",3),e._uU(4,"          "),e.TgZ(5,"button",4),e._uU(6,"Copiar"),e.qZA(),e._uU(7,"\n          "),e.TgZ(8,"code",5),e._uU(9),e.qZA(),e._uU(10,"\n        "),e.qZA(),e.TgZ(11,"pre",6),e._uU(12,"          "),e.TgZ(13,"button",4),e._uU(14,"Copiar"),e.qZA(),e._uU(15,"\n          "),e.TgZ(16,"code",7),e._uU(17),e.qZA(),e._uU(18,"\n        "),e.qZA()(),e.TgZ(19,"app-viewer",8),e._UZ(20,"o-nav-vertical",2),e.TgZ(21,"pre",3),e._uU(22,"          "),e.TgZ(23,"button",4),e._uU(24,"Copiar"),e.qZA(),e._uU(25,"\n          "),e.TgZ(26,"code",5),e._uU(27),e.qZA(),e._uU(28,"\n        "),e.qZA(),e.TgZ(29,"pre",6),e._uU(30,"          "),e.TgZ(31,"button",4),e._uU(32,"Copiar"),e.qZA(),e._uU(33,"\n          "),e.TgZ(34,"code",7),e._uU(35),e.qZA(),e._uU(36,"\n        "),e.qZA()(),e.TgZ(37,"app-viewer",9),e._UZ(38,"o-nav-vertical",2),e.TgZ(39,"pre",3),e._uU(40,"          "),e.TgZ(41,"button",4),e._uU(42,"Copiar"),e.qZA(),e._uU(43,"\n          "),e.TgZ(44,"code",5),e._uU(45),e.qZA(),e._uU(46,"\n        "),e.qZA(),e.TgZ(47,"pre",6),e._uU(48,"          "),e.TgZ(49,"button",4),e._uU(50,"Copiar"),e.qZA(),e._uU(51,"\n          "),e.TgZ(52,"code",10),e._uU(53),e.qZA(),e._uU(54,"\n        "),e.qZA()(),e.TgZ(55,"app-viewer",11),e._UZ(56,"o-nav-vertical",2),e.TgZ(57,"pre",3),e._uU(58,"          "),e.TgZ(59,"button",4),e._uU(60,"Copiar"),e.qZA(),e._uU(61,"\n          "),e.TgZ(62,"code",5),e._uU(63),e.qZA(),e._uU(64,"\n        "),e.qZA(),e.TgZ(65,"pre",6),e._uU(66,"          "),e.TgZ(67,"button",4),e._uU(68,"Copiar"),e.qZA(),e._uU(69,"\n          "),e.TgZ(70,"code",10),e._uU(71),e.qZA(),e._uU(72,"\n        "),e.qZA()(),e.TgZ(73,"app-viewer",12),e._UZ(74,"o-nav-vertical",2),e.TgZ(75,"pre",3),e._uU(76,"          "),e.TgZ(77,"button",4),e._uU(78,"Copiar"),e.qZA(),e._uU(79,"\n          "),e.TgZ(80,"code",5),e._uU(81),e.qZA(),e._uU(82,"\n        "),e.qZA(),e.TgZ(83,"pre",6),e._uU(84,"          "),e.TgZ(85,"button",4),e._uU(86,"Copiar"),e.qZA(),e._uU(87,"\n          "),e.TgZ(88,"code",10),e._uU(89),e.qZA(),e._uU(90,"\n        "),e.qZA()(),e.TgZ(91,"app-viewer",13),e._UZ(92,"o-nav-vertical",2),e.TgZ(93,"pre",3),e._uU(94,"          "),e.TgZ(95,"button",4),e._uU(96,"Copiar"),e.qZA(),e._uU(97,"\n          "),e.TgZ(98,"code",5),e._uU(99),e.qZA(),e._uU(100,"\n        "),e.qZA(),e.TgZ(101,"pre",6),e._uU(102,"          "),e.TgZ(103,"button",4),e._uU(104,"Copiar"),e.qZA(),e._uU(105,"\n          "),e.TgZ(106,"code",10),e._uU(107),e.qZA(),e._uU(108,"\n        "),e.qZA()()()),2&_&&(e.xp6(1),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("navItems",c.navigationSimpleComponent),e.xp6(7),e.hij("\n            ",c.simpleHTML,"\n          "),e.xp6(8),e.hij("\n            ",c.exampleTs,"\n          "),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("navItems",c.navigationSimpleIconComponent),e.xp6(7),e.hij("\n            ",c.simpleHTML,"\n          "),e.xp6(8),e.hij("\n            ",c.exampleTsIcon,"\n          "),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("navItems",c.levelTwoComponent),e.xp6(7),e.hij("\n            ",c.simpleHTML,"\n          "),e.xp6(8),e.hij("\n            ",c.exampleTsTwo,"\n          "),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("navItems",c.levelTwoIconComponent),e.xp6(7),e.hij("\n            ",c.simpleHTML,"\n          "),e.xp6(8),e.hij("\n            ",c.exampleTsTwoIcon,"\n          "),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("navItems",c.levelThreeComponent),e.xp6(7),e.hij("\n            ",c.simpleHTML,"\n          "),e.xp6(8),e.hij("\n            ",c.exampleTsThree,"\n          "),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("navItems",c.levelThreeIconComponent),e.xp6(7),e.hij("\n            ",c.simpleHTML,"\n          "),e.xp6(8),e.hij("\n            ",c.exampleTsThreeIcon,"\n          "))},dependencies:[Z.F,U.B,m.y,p.y]}),i})();var s=o(553),n=o(1225);const C=[{path:"overview",component:(()=>{class i{constructor(){this.bestPractices=r.JR,this.badPractices=r.VX}}return i.\u0275fac=function(_){return new(_||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-navigation-vertical-overview"]],decls:19,vars:2,consts:[[1,"section-overview"],[1,"lead"],[1,"section-collapse"],[1,"section-design"],["src","https://gcba.github.io/estandares/componentes/navegacion/navegacion-2.svg","alt","imagen sobre navegacion vertical",1,"card-img-top"],[1,"section-usability"],[3,"practices"]],template:function(_,c){1&_&&(e.TgZ(0,"section",0)(1,"p",1),e._uU(2," La navegaci\xf3n permite jerarquizar elementos al margen izquierdo de una p\xe1gina en forma vertical, o mostrar la sub navegaci\xf3n dentro de una secci\xf3n de un sitio web de forma horizontal. "),e.qZA(),e.TgZ(3,"div",2)(4,"h2"),e._uU(5,"Navegaci\xf3n Vertical"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Se utilizan para brindarle a los usuarios una navegacion ordenada, mostrando enlaces para redireccionamiento organizados de manera vertical incluyendo sub elementos. Generalmente los podemos encontrar en el aside. "),e.qZA()(),e.TgZ(8,"div",3)(9,"h2"),e._uU(10,"Dise\xf1o y estructura (Contexto de uso)"),e.qZA(),e.TgZ(11,"p"),e._uU(12,"Solo la navegaci\xf3n vertical tiene hasta 3 niveles de navegaci\xf3n."),e.qZA()(),e._UZ(13,"img",4),e.TgZ(14,"div",5)(15,"h2"),e._uU(16,"Usabilidad"),e.qZA(),e._UZ(17,"app-best-practices",6)(18,"app-bad-practices",6),e.qZA()()),2&_&&(e.xp6(17),e.Q6J("practices",c.bestPractices),e.xp6(1),e.Q6J("practices",c.badPractices))},dependencies:[s.s,n.c]}),i})()},{path:"api",component:v},{path:"examples",component:a},{path:"**",pathMatch:"full",redirectTo:"overview"}];let f=(()=>{class i{}return i.\u0275fac=function(_){return new(_||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[t.Bz.forChild(C),t.Bz]}),i})();var x=o(5185);let b=(()=>{class i{}return i.\u0275fac=function(_){return new(_||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,f,x.Z,s.s,n.c,l.L,U.B]}),i})()},2171:(A,T,o)=>{o.d(T,{y:()=>t});var d=o(9349);let t=(()=>{class g{constructor(e,l){this.host=e,this.renderer=l}ngAfterViewInit(){if(navigator.clipboard){const e=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(e,"click",this.clipboard)}}clipboard(e){const l=e.target,p=null==l?void 0:l.parentElement,v=null==p?void 0:p.querySelector("code");navigator.clipboard.writeText(null==v?void 0:v.innerText),l.innerText="Codigo copiado!",setTimeout(()=>{l.innerText="Copiar"},1e3)}}return g.\u0275fac=function(e){return new(e||g)(d.Y36(d.SBq),d.Y36(d.Qsj))},g.\u0275dir=d.lG2({type:g,selectors:[["","appClipboard",""]],standalone:!0}),g})()}}]);
//# sourceMappingURL=12.30d10e18909a9e67.js.map