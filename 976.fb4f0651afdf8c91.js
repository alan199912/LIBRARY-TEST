"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[976],{906:(b,C,r)=>{r.d(C,{L:()=>u});var l=r(6362),t=r(9349);const T=["checkbox"];function m(a,p){if(1&a){const o=t.EpF();t.TgZ(0,"th",5)(1,"input",6),t.NdJ("change",function(w){t.CHM(o);const Z=t.oxw(2);return t.KtG(Z.allSelected(w.target))}),t.qZA()()}}function e(a,p){if(1&a&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&a){const o=p.$implicit;t.xp6(1),t.Oqu(o.value)}}function c(a,p){if(1&a){const o=t.EpF();t.TgZ(0,"td")(1,"input",6,9),t.NdJ("change",function(w){t.CHM(o);const Z=t.oxw(3);return t.KtG(Z.selectedRow(w.target))}),t.qZA()()}}function d(a,p){if(1&a&&t._UZ(0,"td",10),2&a){const o=p.$implicit,g=t.oxw().$implicit;t.Q6J("innerHTML",g[o.key],t.oJD)}}function h(a,p){if(1&a&&(t.TgZ(0,"tr"),t.YNc(1,c,3,0,"td",7),t.YNc(2,d,1,1,"td",8),t.qZA()),2&a){const o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.isSelectable),t.xp6(1),t.Q6J("ngForOf",o.displayedColumns)}}const v=function(a,p,o){return{"table-bordered":a,"table-striped":p,"table-hover":o}};function O(a,p){if(1&a&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr"),t.YNc(3,m,2,0,"th",2),t.YNc(4,e,2,1,"th",3),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,h,3,2,"tr",4),t.qZA()()),2&a){const o=t.oxw();t.Q6J("ngClass",t.kEZ(4,v,o.isBordered,o.isStriped,o.isHover)),t.xp6(3),t.Q6J("ngIf",o.isSelectable),t.xp6(1),t.Q6J("ngForOf",o.displayedColumns),t.xp6(2),t.Q6J("ngForOf",o.dataSource)}}let u=(()=>{class a{constructor(o){this.renderer=o,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new t.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(o=>{this.inputCheckArr.push(o.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(o=>{if(""===o.key||""===o.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(o=>o.value=o.value.trim()),this.displayedColumns=this.displayedColumns.map(o=>(o.value=o.value.charAt(0).toUpperCase()+o.value.slice(1).toLowerCase(),o)),this.displayedColumns.map(o=>{if(o.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&o.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,o;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(o){o.checked?(this.checkbox.map(g=>this.renderer.setProperty(g.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(g=>this.renderer.setProperty(g.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(o){const g=this.inputCheckArr.indexOf(o);o.checked?this.DataSelectedArr.push(this.dataSource[g]):this.DataSelectedArr=this.DataSelectedArr.filter((w,Z)=>Z!==g),this.dataSelected.emit(this.DataSelectedArr)}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(t.Qsj))},a.\u0275cmp=t.Xpm({type:a,selectors:[["o-table"]],viewQuery:function(o,g){if(1&o&&t.Gf(T,5),2&o){let w;t.iGM(w=t.CRH())&&(g.checkbox=w)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(o,g){1&o&&t.YNc(0,O,7,8,"table",0),2&o&&t.Q6J("ngIf",g.isValidateComponent)},dependencies:[l.ez,l.mk,l.sg,l.O5]}),a})()},1225:(b,C,r)=>{r.d(C,{c:()=>m});var l=r(6362),t=r(9349);function T(e,c){if(1&e&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&e){const d=c.$implicit;t.xp6(1),t.Q6J("innerHTML",d,t.oJD)}}let m=(()=>{class e{constructor(){this.practices=[]}}return e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(d,h){1&d&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Malas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,T,2,1,"li",2),t.qZA()()),2&d&&(t.xp6(4),t.Q6J("ngForOf",h.practices))},dependencies:[l.ez,l.sg]}),e})()},553:(b,C,r)=>{r.d(C,{s:()=>m});var l=r(6362),t=r(9349);function T(e,c){if(1&e&&(t.TgZ(0,"li",3),t._UZ(1,"p",4),t.qZA()),2&e){const d=c.$implicit;t.xp6(1),t.Q6J("innerHTML",d,t.oJD)}}let m=(()=>{class e{constructor(){this.practices=[]}}return e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(d,h){1&d&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Buenas pr\xe1cticas"),t.qZA(),t.TgZ(3,"ul",1),t.YNc(4,T,2,1,"li",2),t.qZA()()),2&d&&(t.xp6(4),t.Q6J("ngForOf",h.practices))},dependencies:[l.ez,l.sg]}),e})()},4948:(b,C,r)=>{r.d(C,{B:()=>O});var l=r(6362),t=r(9349);function T(u,a){if(1&u){const p=t.EpF();t.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),t.NdJ("click",function(){t.CHM(p);const g=t.oxw();return t.KtG(g.isWindowHTML=!0)}),t.TgZ(4,"span"),t._uU(5,"HTML"),t.qZA()(),t.TgZ(6,"a",4),t.NdJ("click",function(){t.CHM(p);const g=t.oxw();return t.KtG(g.isWindowHTML=!1)}),t.TgZ(7,"span"),t._uU(8,"TS"),t.qZA()()()()()}if(2&u){const p=t.oxw();t.xp6(3),t.ekj("active",p.isWindowHTML),t.xp6(3),t.ekj("active",!p.isWindowHTML)}}function m(u,a){1&u&&(t.ynx(0),t.Hsn(1),t.BQk())}function e(u,a){1&u&&(t.ynx(0),t.Hsn(1,1),t.BQk())}function c(u,a){if(1&u&&t.YNc(0,e,2,0,"ng-container",7),2&u){const p=t.oxw(),o=t.MAs(16);t.Q6J("ngIf",p.isWindowHTML)("ngIfElse",o)}}function d(u,a){1&u&&t.Hsn(0,2)}const h=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],v=["[component]","[component-html]","[component-ts]"];let O=(()=>{class u{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return u.\u0275fac=function(p){return new(p||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[t.jDz],ngContentSelectors:v,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(p,o){if(1&p&&(t.F$t(h),t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),t.NdJ("click",function(){return o.isOpenCode=!o.isOpenCode}),t.TgZ(8,"span"),t._uU(9),t.qZA()()()()()(),t.TgZ(10,"div",5),t.YNc(11,T,9,4,"nav",6),t.YNc(12,m,2,0,"ng-container",7),t.YNc(13,c,1,2,"ng-template",null,8,t.W1O),t.YNc(15,d,1,0,"ng-template",null,9,t.W1O),t.qZA()()),2&p){const g=t.MAs(14);t.xp6(3),t.Oqu(o.title),t.xp6(4),t.ekj("active",o.isOpenCode),t.xp6(2),t.Oqu(o.linkCode),t.xp6(2),t.Q6J("ngIf",o.isOpenCode&&o.isNavCode),t.xp6(1),t.Q6J("ngIf",!o.isOpenCode)("ngIfElse",g)}},dependencies:[l.ez,l.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),u})()},1976:(b,C,r)=>{r.r(C),r.d(C,{DropdownToggleModule:()=>S});var l=r(6362),t=r(7638),T=r(5570),m=r(2069),e=r(9349),c=r(906),d=r(6434);let h=(()=>{class n{constructor(){this.columnsDropdown=T.L0,this.dataSourceDropdown=m.Le,this.dataSourceMethodsDropdown=m.Et,this.sizes=T.zf}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dropdown-toggle-api"]],decls:43,vars:9,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","code","import { ODropdownModule } from '@ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"],[1,"section-type"],[1,"section-interface"],["appPrism",""]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2"),e._uU(3,"Referencia de API para el componente Desplegable de Obelisco"),e.qZA(),e.TgZ(4,"pre",2),e._uU(5,"      "),e._UZ(6,"code",3),e._uU(7,"\n    "),e.qZA()(),e.TgZ(8,"h3"),e._uU(9,"Etiqueta"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"ODropdownToggle"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Selector: "),e.TgZ(16,"strong"),e._uU(17,"o-dropdown-toggle"),e.qZA()(),e.TgZ(18,"div",5)(19,"h5"),e._uU(20,"Propiedades"),e.qZA(),e._UZ(21,"o-table",6),e.qZA(),e.TgZ(22,"div",5)(23,"h5"),e._uU(24,"M\xe9todos"),e.qZA(),e._UZ(25,"o-table",6),e.qZA()(),e.TgZ(26,"h3"),e._uU(27,"Tipos de datos"),e.qZA(),e._UZ(28,"hr"),e.TgZ(29,"div",7)(30,"h4"),e._uU(31,"Sizes"),e.qZA(),e.TgZ(32,"p"),e._uU(33,"Permite establecer el tama\xf1o del componente "),e.TgZ(34,"strong"),e._uU(35,"ODropdownToggle"),e.qZA(),e._uU(36,"."),e.qZA(),e.TgZ(37,"div",8)(38,"pre",2),e._uU(39,"        "),e.TgZ(40,"code",9),e._uU(41),e.qZA(),e._uU(42,"\n      "),e.qZA()()()()),2&i&&(e.xp6(21),e.Q6J("displayedColumns",s.columnsDropdown)("dataSource",s.dataSourceDropdown)("isStriped",!0)("isBordered",!0),e.xp6(4),e.Q6J("displayedColumns",s.columnsDropdown)("dataSource",s.dataSourceMethodsDropdown)("isStriped",!0)("isBordered",!0),e.xp6(16),e.Oqu(s.sizes))},dependencies:[c.L,d.y]}),n})();function v(n,_){if(1&n){const i=e.EpF();e.TgZ(0,"button",4),e.NdJ("click",function(){const f=e.CHM(i).$implicit,y=e.oxw();return e.KtG(y.selectedOption(f))}),e._uU(1),e.qZA()}if(2&n){const i=_.$implicit,s=e.oxw();e.ekj("active",s.selectedOptionsArr.includes(i)),e.xp6(1),e.hij(" ",i," ")}}const O=function(n){return[n]};let u=(()=>{class n{constructor(){this.selectedOptionsArr=[],this.options=[],this.size="md",this.isBordered=!1,this.dataSelected=new e.vpe}get getIsSelectedOption(){return this.selectedOptionsArr.length>0}get getNumberSelectedOptions(){return 0!==this.selectedOptionsArr.length?`(${this.selectedOptionsArr.length})`:""}selectedOption(i){if(this.selectedOptionsArr.includes(i))return this.selectedOptionsArr.splice(this.selectedOptionsArr.indexOf(i),1),void this.dataSelected.emit(this.selectedOptionsArr);this.selectedOptionsArr.push(i),this.dataSelected.emit(this.selectedOptionsArr)}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["o-dropdown-toggle"]],inputs:{filterName:"filterName",options:"options",size:"size",isBordered:"isBordered"},outputs:{dataSelected:"dataSelected"},decls:5,vars:10,consts:[[1,"dropdown"],["type","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-dropdown","dropdown-toggle",3,"ngClass"],[1,"dropdown-menu"],["class","dropdown-item","type","button",3,"active","click",4,"ngFor","ngForOf"],["type","button",1,"dropdown-item",3,"click"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"button",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,v,2,3,"button",3),e.qZA()()),2&i&&(e.xp6(1),e.ekj("btn-dropdown-border",s.isBordered)("active",s.getIsSelectedOption),e.Q6J("ngClass",e.VKq(8,O,"md"!==s.size?"btn-dropdown-"+s.size:"")),e.xp6(1),e.AsE(" ",s.filterName," ",s.getNumberSelectedOptions," "),e.xp6(2),e.Q6J("ngForOf",s.options))},dependencies:[l.mk,l.sg]}),n})();var a=r(4948),p=r(2171);function o(n,_){if(1&n&&(e.TgZ(0,"pre",4),e._uU(1,"        "),e.TgZ(2,"button",5),e._uU(3,"Copiar"),e.qZA(),e._uU(4,"\n        "),e.TgZ(5,"code",6),e._uU(6),e.qZA(),e._uU(7,"\n    "),e.qZA()),2&n){const i=_.$implicit;e.xp6(6),e.hij("\n            ",i,"\n        ")}}let g=(()=>{class n{constructor(){this.exampleDropdownToggle=m.$G,this.exampleDropdownToggleBorder=m.xC,this.exampleDropdownSizes=[m.RV,m.ih,m.hK],this.exampeDropdownToggleTs=m.VM,this.options=["Opci\xf3n 1","Opci\xf3n 2","Opci\xf3n 3"]}getData(i){console.log(i)}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dropdown-toggle-examples"]],decls:54,vars:18,consts:[[1,"section-example"],["title","Sin borde",3,"isNavCode"],["component","",1,"dropdown-container"],["component","","filterName","Filtro",3,"options","dataSelected"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["appClipboard","","component-ts","",1,"code"],["appPrism",""],["title","Con borde",3,"isNavCode"],["component","","filterName","Filtro",3,"options","isBordered","dataSelected"],["title","Tama\xf1os",3,"isNavCode"],["component","",1,"d-flex","align-items-center","dropdown-gap"],["component","","filterName","Filtro","size","lg",3,"options","isBordered","dataSelected"],["component","","filterName","Filtro","size","sm",3,"options","isBordered","dataSelected"],["appClipboard","","component-html","","class","code",4,"ngFor","ngForOf"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-viewer",1)(2,"div",2)(3,"o-dropdown-toggle",3),e.NdJ("dataSelected",function(f){return s.getData(f)}),e.qZA()(),e.TgZ(4,"pre",4),e._uU(5,"        "),e.TgZ(6,"button",5),e._uU(7,"Copiar"),e.qZA(),e._uU(8,"\n        "),e.TgZ(9,"code",6),e._uU(10),e.qZA(),e._uU(11,"\n    "),e.qZA(),e.TgZ(12,"pre",7),e._uU(13,"        "),e.TgZ(14,"button",5),e._uU(15,"Copiar"),e.qZA(),e._uU(16,"\n        "),e.TgZ(17,"code",8),e._uU(18),e.qZA(),e._uU(19,"\n    "),e.qZA()(),e.TgZ(20,"app-viewer",9)(21,"div",2)(22,"o-dropdown-toggle",10),e.NdJ("dataSelected",function(f){return s.getData(f)}),e.qZA()(),e.TgZ(23,"pre",4),e._uU(24,"        "),e.TgZ(25,"button",5),e._uU(26,"Copiar"),e.qZA(),e._uU(27,"\n        "),e.TgZ(28,"code",6),e._uU(29),e.qZA(),e._uU(30,"\n    "),e.qZA(),e.TgZ(31,"pre",7),e._uU(32,"        "),e.TgZ(33,"button",5),e._uU(34,"Copiar"),e.qZA(),e._uU(35,"\n        "),e.TgZ(36,"code",8),e._uU(37),e.qZA(),e._uU(38,"\n    "),e.qZA()(),e.TgZ(39,"app-viewer",11)(40,"div",2)(41,"div",12)(42,"o-dropdown-toggle",13),e.NdJ("dataSelected",function(f){return s.getData(f)}),e.qZA(),e.TgZ(43,"o-dropdown-toggle",10),e.NdJ("dataSelected",function(f){return s.getData(f)}),e.qZA(),e.TgZ(44,"o-dropdown-toggle",14),e.NdJ("dataSelected",function(f){return s.getData(f)}),e.qZA()()(),e.YNc(45,o,8,1,"pre",15),e.TgZ(46,"pre",7),e._uU(47,"        "),e.TgZ(48,"button",5),e._uU(49,"Copiar"),e.qZA(),e._uU(50,"\n        "),e.TgZ(51,"code",8),e._uU(52),e.qZA(),e._uU(53,"\n    "),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("isNavCode",!0),e.xp6(2),e.Q6J("options",s.options),e.xp6(7),e.hij("\n          ",s.exampleDropdownToggle,"\n        "),e.xp6(8),e.hij("\n          ",s.exampeDropdownToggleTs,"\n        "),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(2),e.Q6J("options",s.options)("isBordered",!0),e.xp6(7),e.hij("\n          ",s.exampleDropdownToggleBorder,"\n        "),e.xp6(8),e.hij("\n          ",s.exampeDropdownToggleTs,"\n        "),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(3),e.Q6J("options",s.options)("isBordered",!0),e.xp6(1),e.Q6J("options",s.options)("isBordered",!0),e.xp6(1),e.Q6J("options",s.options)("isBordered",!0),e.xp6(1),e.Q6J("ngForOf",s.exampleDropdownSizes),e.xp6(7),e.hij("\n          ",s.exampeDropdownToggleTs,"\n        "))},dependencies:[l.sg,u,a.B,p.y,d.y],styles:["[_nghost-%COMP%]   .dropdown-container[_ngcontent-%COMP%]{min-height:170px}[_nghost-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-gap[_ngcontent-%COMP%]{gap:.5rem}"]}),n})();var w=r(553),Z=r(1225);const A=[{path:"overview",component:(()=>{class n{constructor(){this.bestPractices=m.K2,this.badPractices=m.BW}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dropdown-toggle-overview"]],decls:17,vars:2,consts:[[1,"section-overview"],[1,"lead"],[1,"section-design"],["src","https://gcba.github.io/estandares/componentes/desplegable/dise%C3%B1o-estructura-1.svg","alt","imagen sobre desplegables en forma horizontal",1,"card-img-top"],[1,"section-design-text"],["src","https://gcba.github.io/estandares/componentes/desplegable/dise%C3%B1o-estructura-2.svg","alt","imagen sobre desplegables combinados con botones y con navegaci\xf3n horizontal",1,"card-img-top"],[1,"section-usability"],[3,"practices"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"p",1),e._uU(2," Los desplegables tienen la apariencia de un bot\xf3n pero al interactuar con ellos permiten seleccionar una opci\xf3n dentro de un men\xfa. "),e.qZA(),e.TgZ(3,"div",2)(4,"h2"),e._uU(5,"Dise\xf1o y estructura (Contexto de uso)"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Se agrupan de forma horizontal."),e.qZA(),e._UZ(8,"img",3),e.TgZ(9,"p",4),e._uU(10,"Combinables con Botones y con Navegaci\xf3n horizontal."),e.qZA()(),e._UZ(11,"img",5),e.TgZ(12,"div",6)(13,"h2"),e._uU(14,"Usabilidad"),e.qZA(),e._UZ(15,"app-best-practices",7)(16,"app-bad-practices",7),e.qZA()()),2&i&&(e.xp6(15),e.Q6J("practices",s.bestPractices),e.xp6(1),e.Q6J("practices",s.badPractices))},dependencies:[w.s,Z.c],styles:["[_nghost-%COMP%]   .section-design-text[_ngcontent-%COMP%]{margin-top:1rem}"]}),n})()},{path:"api",component:h},{path:"examples",component:g},{path:"**",redirectTo:"overview",pathMatch:"full"}];let D=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[t.Bz.forChild(A),t.Bz]}),n})();var U=r(5185),M=r(858);let S=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,D,U.Z,w.s,Z.c,c.L,M.a,a.B]}),n})()},2171:(b,C,r)=>{r.d(C,{y:()=>t});var l=r(9349);let t=(()=>{class T{constructor(e,c){this.host=e,this.renderer=c}ngAfterViewInit(){if(navigator.clipboard){const e=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(e,"click",this.clipboard)}}clipboard(e){const c=e.target,d=null==c?void 0:c.parentElement,h=null==d?void 0:d.querySelector("code");navigator.clipboard.writeText(null==h?void 0:h.innerText),c.innerText="Codigo copiado!",setTimeout(()=>{c.innerText="Copiar"},1e3)}}return T.\u0275fac=function(e){return new(e||T)(l.Y36(l.SBq),l.Y36(l.Qsj))},T.\u0275dir=l.lG2({type:T,selectors:[["","appClipboard",""]],standalone:!0}),T})()}}]);
//# sourceMappingURL=976.fb4f0651afdf8c91.js.map