"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[930],{906:(f,b,s)=>{s.d(b,{L:()=>c});var u=s(6362),t=s(9349);const _=["checkbox"];function C(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"th",5)(1,"input",6),t.NdJ("change",function(Z){t.CHM(a);const o=t.oxw(2);return t.KtG(o.allSelected(Z.target))}),t.qZA()()}}function m(n,i){if(1&n&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&n){const a=i.$implicit;t.xp6(1),t.Oqu(a.value)}}function T(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"td")(1,"input",6,9),t.NdJ("change",function(Z){t.CHM(a);const o=t.oxw(3);return t.KtG(o.selectedRow(Z.target))}),t.qZA()()}}function p(n,i){if(1&n&&t._UZ(0,"td",10),2&n){const a=i.$implicit,r=t.oxw().$implicit;t.Q6J("innerHTML",r[a.key],t.oJD)}}function e(n,i){if(1&n&&(t.TgZ(0,"tr"),t.YNc(1,T,3,0,"td",7),t.YNc(2,p,1,1,"td",8),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.Q6J("ngIf",a.isSelectable),t.xp6(1),t.Q6J("ngForOf",a.displayedColumns)}}const h=function(n,i,a){return{"table-bordered":n,"table-striped":i,"table-hover":a}};function v(n,i){if(1&n&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr"),t.YNc(3,C,2,0,"th",2),t.YNc(4,m,2,1,"th",3),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,e,3,2,"tr",4),t.qZA()()),2&n){const a=t.oxw();t.Q6J("ngClass",t.kEZ(4,h,a.isBordered,a.isStriped,a.isHover)),t.xp6(3),t.Q6J("ngIf",a.isSelectable),t.xp6(1),t.Q6J("ngForOf",a.displayedColumns),t.xp6(2),t.Q6J("ngForOf",a.dataSource)}}let c=(()=>{class n{constructor(a){this.renderer=a,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new t.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(a=>{this.inputCheckArr.push(a.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(a=>{if(""===a.key||""===a.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(a=>a.value=a.value.trim()),this.displayedColumns=this.displayedColumns.map(a=>(a.value=a.value.charAt(0).toUpperCase()+a.value.slice(1).toLowerCase(),a)),this.displayedColumns.map(a=>{if(a.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&a.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,a;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(a){a.checked?(this.checkbox.map(r=>this.renderer.setProperty(r.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(r=>this.renderer.setProperty(r.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(a){const r=this.inputCheckArr.indexOf(a);a.checked?this.DataSelectedArr.push(this.dataSource[r]):this.DataSelectedArr=this.DataSelectedArr.filter((Z,o)=>o!==r),this.dataSelected.emit(this.DataSelectedArr)}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(t.Qsj))},n.\u0275cmp=t.Xpm({type:n,selectors:[["o-table"]],viewQuery:function(a,r){if(1&a&&t.Gf(_,5),2&a){let Z;t.iGM(Z=t.CRH())&&(r.checkbox=Z)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(a,r){1&a&&t.YNc(0,v,7,8,"table",0),2&a&&t.Q6J("ngIf",r.isValidateComponent)},dependencies:[u.ez,u.mk,u.sg,u.O5]}),n})()},4948:(f,b,s)=>{s.d(b,{B:()=>v});var u=s(6362),t=s(9349);function _(c,n){if(1&c){const i=t.EpF();t.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),t.NdJ("click",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.isWindowHTML=!0)}),t.TgZ(4,"span"),t._uU(5,"HTML"),t.qZA()(),t.TgZ(6,"a",4),t.NdJ("click",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.isWindowHTML=!1)}),t.TgZ(7,"span"),t._uU(8,"TS"),t.qZA()()()()()}if(2&c){const i=t.oxw();t.xp6(3),t.ekj("active",i.isWindowHTML),t.xp6(3),t.ekj("active",!i.isWindowHTML)}}function C(c,n){1&c&&(t.ynx(0),t.Hsn(1),t.BQk())}function m(c,n){1&c&&(t.ynx(0),t.Hsn(1,1),t.BQk())}function T(c,n){if(1&c&&t.YNc(0,m,2,0,"ng-container",7),2&c){const i=t.oxw(),a=t.MAs(16);t.Q6J("ngIf",i.isWindowHTML)("ngIfElse",a)}}function p(c,n){1&c&&t.Hsn(0,2)}const e=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],h=["[component]","[component-html]","[component-ts]"];let v=(()=>{class c{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[t.jDz],ngContentSelectors:h,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(i,a){if(1&i&&(t.F$t(e),t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),t.NdJ("click",function(){return a.isOpenCode=!a.isOpenCode}),t.TgZ(8,"span"),t._uU(9),t.qZA()()()()()(),t.TgZ(10,"div",5),t.YNc(11,_,9,4,"nav",6),t.YNc(12,C,2,0,"ng-container",7),t.YNc(13,T,1,2,"ng-template",null,8,t.W1O),t.YNc(15,p,1,0,"ng-template",null,9,t.W1O),t.qZA()()),2&i){const r=t.MAs(14);t.xp6(3),t.Oqu(a.title),t.xp6(4),t.ekj("active",a.isOpenCode),t.xp6(2),t.Oqu(a.linkCode),t.xp6(2),t.Q6J("ngIf",a.isOpenCode&&a.isNavCode),t.xp6(1),t.Q6J("ngIf",!a.isOpenCode)("ngIfElse",r)}},dependencies:[u.ez,u.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),c})()},5930:(f,b,s)=>{s.r(b),s.d(b,{TableModule:()=>Z});var u=s(6362),t=s(5185),_=s(906),C=s(4948),m=s(7638),T=s(5570),p=s(2544),e=s(9349),h=s(6434);let v=(()=>{class o{constructor(){this.dataSource=p.if,this.columns=T.L0,this.dataSourceMethods=p.o5,this.exampleIterfaceColumn=p.mw}}return o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-table-api"]],decls:42,vars:9,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","code","import { OTableComponent } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],[3,"displayedColumns","dataSource","isStriped","isBordered"],[1,"section-type"],[1,"section-interface"],["appPrism","",3,"code"]],template:function(d,l){1&d&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2"),e._uU(3,"Referencia de API para el componente Tabla de Obelisco"),e.qZA(),e.TgZ(4,"pre",2),e._uU(5,"      "),e._UZ(6,"code",3),e._uU(7,"\n    "),e.qZA()(),e.TgZ(8,"h3"),e._uU(9,"Etiqueta"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"OTable"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Selector: "),e.TgZ(16,"strong"),e._uU(17,"o-table"),e.qZA()(),e.TgZ(18,"div",5)(19,"h5"),e._uU(20,"Propiedades"),e.qZA(),e._UZ(21,"o-table",6),e.qZA(),e.TgZ(22,"div",5)(23,"h5"),e._uU(24,"M\xe9todos"),e.qZA(),e._UZ(25,"o-table",6),e.qZA()(),e.TgZ(26,"h3"),e._uU(27,"Tipos de datos"),e.qZA(),e._UZ(28,"hr"),e.TgZ(29,"div",7)(30,"h4"),e._uU(31,"Column"),e.qZA(),e.TgZ(32,"p"),e._uU(33,"Permite establecer los valores de la propiedad "),e.TgZ(34,"strong"),e._uU(35,"displayedColumns"),e.qZA(),e._uU(36,"."),e.qZA(),e.TgZ(37,"div",8)(38,"pre",2),e._uU(39,"        "),e._UZ(40,"code",9),e._uU(41,"\n      "),e.qZA()()()()),2&d&&(e.xp6(21),e.Q6J("displayedColumns",l.columns)("dataSource",l.dataSource)("isStriped",!0)("isBordered",!0),e.xp6(4),e.Q6J("displayedColumns",l.columns)("dataSource",l.dataSource)("isStriped",!0)("isBordered",!0),e.xp6(15),e.s9C("code",l.exampleIterfaceColumn))},dependencies:[_.L,h.y]}),o})();var c=s(2171);const a=[{path:"overview",component:(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-table-overview"]],decls:49,vars:0,consts:[[1,"section-overview"],[1,"lead"],[1,"section-design"],[1,"section-usability"]],template:function(d,l){1&d&&(e.TgZ(0,"section",0)(1,"p",1),e._uU(2,"El componente Tabla se utiliza para organizar y mostrar datos de manera eficiente."),e.qZA(),e.TgZ(3,"div",2)(4,"h2"),e._uU(5,"Dise\xf1o y estructura (Contexto de uso)"),e.qZA(),e.TgZ(6,"h3"),e._uU(7,"Tabla Normal"),e.qZA(),e.TgZ(8,"p"),e._uU(9,"Tabla que no presenta bordes ni intercalaci\xf3n de colores en cada fila."),e.qZA(),e.TgZ(10,"h3"),e._uU(11,"Tabla con Bordes"),e.qZA(),e.TgZ(12,"p"),e._uU(13,"Tabla con bordes."),e.qZA(),e.TgZ(14,"h3"),e._uU(15,"Tabla Intercalada"),e.qZA(),e.TgZ(16,"p"),e._uU(17,"Tabla con colores intercalados en cada fila."),e.qZA(),e.TgZ(18,"h3"),e._uU(19,"Tabla Resaltable"),e.qZA(),e.TgZ(20,"p"),e._uU(21,"Tabla donde al hacer hover en cada fila, se modifica el color de fondo."),e.qZA(),e.TgZ(22,"h3"),e._uU(23,"Tabla con distintas caracter\xedsticas"),e.qZA(),e.TgZ(24,"p"),e._uU(25," Tabla con bordes, colores intercalados en cada fila, y al hacer hover en cada fila, se modifica el color de fondo. "),e.qZA(),e.TgZ(26,"h3"),e._uU(27,"Tabla Seleccionable"),e.qZA(),e.TgZ(28,"p"),e._uU(29,"Tabla con inputs checks para seleccionar filas."),e.qZA()(),e.TgZ(30,"div",3)(31,"h2"),e._uU(32,"Usabilidad"),e.qZA(),e.TgZ(33,"p")(34,"strong"),e._uU(35,"Alinear a la izquierda datos textuales."),e.qZA(),e._uU(36," Los datos textuales siempre est\xe1n alineados a la izquierda dentro de una tabla. La alineaci\xf3n central nunca debe usarse. "),e.qZA(),e.TgZ(37,"p")(38,"strong"),e._uU(39,"Alinear a la derecha datos num\xe9ricos."),e.qZA(),e._uU(40,' Los datos num\xe9ricos siempre est\xe1n alineados a la derecha dentro de una tabla. La alineaci\xf3n central nunca debe usarse. Solo debe alinearse a la izquierda cuando los n\xfameros son identificadores arbitrarios, conocidos como "n\xfameros nominales", lo que significa que no se pueden comparar o combinar aritm\xe9ticamente (por ejemplo, c\xf3digos postales, direcciones IP, n\xfameros de tel\xe9fono). Los encabezados de columna siguen la alineaci\xf3n de los datos. '),e.qZA(),e.TgZ(41,"p")(42,"strong"),e._uU(43,"Respete la alineaci\xf3n vertical."),e.qZA(),e._uU(44," Todo el contenido debe estar centrado verticalmente dentro de la fila para ofrecer el equilibrio visual adecuado. "),e.qZA(),e.TgZ(45,"p")(46,"strong"),e._uU(47,"Utilice un guion (-) para los valores faltantes."),e.qZA(),e._uU(48," Cuando haya brechas en los datos, use un gui\xf3n corto (-) para representar valores nulos o no aplicables (N / A). "),e.qZA()()())}}),o})()},{path:"api",component:v},{path:"examples",component:(()=>{class o{constructor(){this.dataSourceTableExample=p.bl,this.columnsTableExample=p.N9,this.exampleNormalHTML=p.lA,this.exampleNormalTS=p.HN,this.exampleBorderedHTML=p.gc,this.exampleStripedHTML=p.om,this.exampleHoverHTML=p.qX,this.exampleAllHTML=p.OQ,this.exampleSelectableHTML=p.Fb,this.exampleSelectableTS=p.Qj}dataSelected(d){console.log(d)}}return o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-table-examples"]],decls:103,vars:38,consts:[[1,"section-example"],["title","Tabla Normal",3,"isNavCode"],["component","",3,"displayedColumns","dataSource"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html",3,"code"],["appClipboard","","component-ts","",1,"code"],["appPrism",""],["title","Tabla con Bordes",3,"isNavCode"],["component","",3,"displayedColumns","dataSource","isBordered"],["title","Tabla Intercalada",3,"isNavCode"],["component","",3,"displayedColumns","dataSource","isStriped"],["title","Tabla Resaltable",3,"isNavCode"],["component","",3,"displayedColumns","dataSource","isHover"],["title","Todo Junto",3,"isNavCode"],["component","",3,"displayedColumns","dataSource","isStriped","isBordered","isHover"],["title","Seleccionable",3,"isNavCode"],["component","",3,"displayedColumns","dataSource","isHover","isSelectable","dataSelected"]],template:function(d,l){1&d&&(e.TgZ(0,"section",0)(1,"app-viewer",1),e._UZ(2,"o-table",2),e.TgZ(3,"pre",3),e._uU(4,"      "),e.TgZ(5,"button",4),e._uU(6,"Copiar"),e.qZA(),e._uU(7,"\n      "),e._UZ(8,"code",5),e._uU(9,"\n    "),e.qZA(),e.TgZ(10,"pre",6),e._uU(11,"      "),e.TgZ(12,"button",4),e._uU(13,"Copiar"),e.qZA(),e._uU(14,"\n      "),e.TgZ(15,"code",7),e._uU(16),e.qZA(),e._uU(17,"\n    "),e.qZA()(),e.TgZ(18,"app-viewer",8),e._UZ(19,"o-table",9),e.TgZ(20,"pre",3),e._uU(21,"      "),e.TgZ(22,"button",4),e._uU(23,"Copiar"),e.qZA(),e._uU(24,"\n      "),e._UZ(25,"code",5),e._uU(26,"\n    "),e.qZA(),e.TgZ(27,"pre",6),e._uU(28,"      "),e.TgZ(29,"button",4),e._uU(30,"Copiar"),e.qZA(),e._uU(31,"\n      "),e.TgZ(32,"code",7),e._uU(33),e.qZA(),e._uU(34,"\n    "),e.qZA()(),e.TgZ(35,"app-viewer",10),e._UZ(36,"o-table",11),e.TgZ(37,"pre",3),e._uU(38,"      "),e.TgZ(39,"button",4),e._uU(40,"Copiar"),e.qZA(),e._uU(41,"\n      "),e._UZ(42,"code",5),e._uU(43,"\n    "),e.qZA(),e.TgZ(44,"pre",6),e._uU(45,"      "),e.TgZ(46,"button",4),e._uU(47,"Copiar"),e.qZA(),e._uU(48,"\n      "),e.TgZ(49,"code",7),e._uU(50),e.qZA(),e._uU(51,"\n    "),e.qZA()(),e.TgZ(52,"app-viewer",12),e._UZ(53,"o-table",13),e.TgZ(54,"pre",3),e._uU(55,"      "),e.TgZ(56,"button",4),e._uU(57,"Copiar"),e.qZA(),e._uU(58,"\n      "),e._UZ(59,"code",5),e._uU(60,"\n    "),e.qZA(),e.TgZ(61,"pre",6),e._uU(62,"      "),e.TgZ(63,"button",4),e._uU(64,"Copiar"),e.qZA(),e._uU(65,"\n      "),e.TgZ(66,"code",7),e._uU(67),e.qZA(),e._uU(68,"\n    "),e.qZA()(),e.TgZ(69,"app-viewer",14),e._UZ(70,"o-table",15),e.TgZ(71,"pre",3),e._uU(72,"      "),e.TgZ(73,"button",4),e._uU(74,"Copiar"),e.qZA(),e._uU(75,"\n      "),e._UZ(76,"code",5),e._uU(77,"\n    "),e.qZA(),e.TgZ(78,"pre",6),e._uU(79,"      "),e.TgZ(80,"button",4),e._uU(81,"Copiar"),e.qZA(),e._uU(82,"\n      "),e.TgZ(83,"code",7),e._uU(84),e.qZA(),e._uU(85,"\n    "),e.qZA()(),e.TgZ(86,"app-viewer",16)(87,"o-table",17),e.NdJ("dataSelected",function(U){return l.dataSelected(U)}),e.qZA(),e.TgZ(88,"pre",3),e._uU(89,"      "),e.TgZ(90,"button",4),e._uU(91,"Copiar"),e.qZA(),e._uU(92,"\n      "),e._UZ(93,"code",5),e._uU(94,"\n    "),e.qZA(),e.TgZ(95,"pre",6),e._uU(96,"      "),e.TgZ(97,"button",4),e._uU(98,"Copiar"),e.qZA(),e._uU(99,"\n      "),e.TgZ(100,"code",7),e._uU(101),e.qZA(),e._uU(102,"\n    "),e.qZA()()()),2&d&&(e.xp6(1),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("displayedColumns",l.columnsTableExample)("dataSource",l.dataSourceTableExample),e.xp6(6),e.s9C("code",l.exampleNormalHTML),e.xp6(8),e.Oqu(l.exampleNormalTS),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("displayedColumns",l.columnsTableExample)("dataSource",l.dataSourceTableExample)("isBordered",!0),e.xp6(6),e.s9C("code",l.exampleBorderedHTML),e.xp6(8),e.Oqu(l.exampleNormalTS),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("displayedColumns",l.columnsTableExample)("dataSource",l.dataSourceTableExample)("isStriped",!0),e.xp6(6),e.s9C("code",l.exampleStripedHTML),e.xp6(8),e.Oqu(l.exampleNormalTS),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("displayedColumns",l.columnsTableExample)("dataSource",l.dataSourceTableExample)("isHover",!0),e.xp6(6),e.s9C("code",l.exampleHoverHTML),e.xp6(8),e.Oqu(l.exampleNormalTS),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("displayedColumns",l.columnsTableExample)("dataSource",l.dataSourceTableExample)("isStriped",!0)("isBordered",!0)("isHover",!0),e.xp6(6),e.s9C("code",l.exampleAllHTML),e.xp6(8),e.Oqu(l.exampleNormalTS),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(1),e.Q6J("displayedColumns",l.columnsTableExample)("dataSource",l.dataSourceTableExample)("isHover",!0)("isSelectable",!0),e.xp6(6),e.s9C("code",l.exampleSelectableHTML),e.xp6(8),e.Oqu(l.exampleSelectableTS))},dependencies:[_.L,C.B,c.y,h.y]}),o})()},{path:"**",pathMatch:"full",redirectTo:"overview"}];let r=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(a),m.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,r,t.Z,_.L,C.B]}),o})()},2171:(f,b,s)=>{s.d(b,{y:()=>t});var u=s(9349);let t=(()=>{class _{constructor(m,T){this.host=m,this.renderer=T}ngAfterViewInit(){if(navigator.clipboard){const m=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(m,"click",this.clipboard)}}clipboard(m){const T=m.target,p=null==T?void 0:T.parentElement,e=null==p?void 0:p.querySelector("code");navigator.clipboard.writeText(null==e?void 0:e.innerText),T.innerText="Codigo copiado!",setTimeout(()=>{T.innerText="Copiar"},1e3)}}return _.\u0275fac=function(m){return new(m||_)(u.Y36(u.SBq),u.Y36(u.Qsj))},_.\u0275dir=u.lG2({type:_,selectors:[["","appClipboard",""]],standalone:!0}),_})()}}]);
//# sourceMappingURL=930.fd0804777e8adb26.js.map