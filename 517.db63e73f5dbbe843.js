"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[517],{4479:(h,u,c)=>{c.d(u,{n:()=>m});var n=c(9808),e=c(1573),d=c(1223);let m=(()=>{class i{}return i.\u0275fac=function(p){return new(p||i)},i.\u0275mod=d.oAB({type:i}),i.\u0275inj=d.cJS({imports:[n.ez,e.Bz]}),i})()},7440:(h,u,c)=>{c.d(u,{x:()=>f});var n=c(1223),e=c(9808),d=c(1573);const m=["access"];function i(_,a){if(1&_&&(n.TgZ(0,"div",6)(1,"span",7),n._uU(2),n.qZA(),n.TgZ(3,"p",8),n._uU(4),n.qZA()()),2&_){const s=n.oxw().$implicit;n.xp6(2),n.Oqu(s.title),n.xp6(2),n.Oqu(s.description)}}function l(_,a){if(1&_&&(n.TgZ(0,"span",7),n._uU(1),n.qZA()),2&_){const s=n.oxw().$implicit;n.xp6(1),n.Oqu(s.title)}}const p=function(_,a,s,o){return{"item-sm":_,"list-group-item-logout":a,"card-item":s,"descriptive-item":o}};function g(_,a){if(1&_&&(n.TgZ(0,"a",2,3),n.YNc(2,i,5,2,"div",4),n.YNc(3,l,2,1,"ng-template",null,5,n.W1O),n.qZA()),2&_){const s=a.$implicit,o=n.MAs(4),t=n.oxw();n.Q6J("routerLink",s.route)("ngClass",n.l5B(4,p,!t.isBig,t.isLogOut,t.isCard,t.isDescriptive)),n.xp6(2),n.Q6J("ngIf",s.description)("ngIfElse",o)}}let f=(()=>{class _{constructor(s){this.renderer=s,this.isLogOut=!1,this.isBig=!1,this.isCard=!1,this.isDescriptive=!1,this.isHorizontal=!1}ngAfterViewInit(){var s;const o=null===(s=this.accessList)||void 0===s?void 0:s.map((t,r)=>r);this.access.forEach((t,r)=>{(""===t.nativeElement.href||!t.nativeElement.href)&&o.includes(r)&&this.renderer.setAttribute(t.nativeElement,"href",this.accessList[r].link)})}}return _.\u0275fac=function(s){return new(s||_)(n.Y36(n.Qsj))},_.\u0275cmp=n.Xpm({type:_,selectors:[["o-access"]],viewQuery:function(s,o){if(1&s&&n.Gf(m,5),2&s){let t;n.iGM(t=n.CRH())&&(o.access=t)}},inputs:{accessList:"accessList",isLogOut:"isLogOut",isBig:"isBig",isCard:"isCard",isDescriptive:"isDescriptive",isHorizontal:"isHorizontal"},decls:2,vars:3,consts:[[1,"list-group"],["class","list-group-item",3,"routerLink","ngClass",4,"ngFor","ngForOf"],[1,"list-group-item",3,"routerLink","ngClass"],["access",""],["class","access-content",4,"ngIf","ngIfElse"],["accessTitle",""],[1,"access-content"],[1,"access-title"],[1,"access-text"]],template:function(s,o){1&s&&(n.TgZ(0,"div",0),n.YNc(1,g,5,9,"a",1),n.qZA()),2&s&&(n.ekj("list-group-row",o.isHorizontal),n.xp6(1),n.Q6J("ngForOf",o.accessList))},dependencies:[e.mk,e.sg,e.O5,d.yS]}),_})()},906:(h,u,c)=>{c.d(u,{L:()=>a});var n=c(9808),e=c(1223);const d=["checkbox"];function m(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"th",5)(1,"input",6),e.NdJ("change",function(C){e.CHM(t);const O=e.oxw(2);return e.KtG(O.allSelected(C.target))}),e.qZA()()}}function i(s,o){if(1&s&&(e.TgZ(0,"th",5),e._uU(1),e.qZA()),2&s){const t=o.$implicit;e.xp6(1),e.Oqu(t.value)}}function l(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"td")(1,"input",6,9),e.NdJ("change",function(C){e.CHM(t);const O=e.oxw(3);return e.KtG(O.selectedRow(C.target))}),e.qZA()()}}function p(s,o){if(1&s&&e._UZ(0,"td",10),2&s){const t=o.$implicit,r=e.oxw().$implicit;e.Q6J("innerHTML",r[t.key],e.oJD)}}function g(s,o){if(1&s&&(e.TgZ(0,"tr"),e.YNc(1,l,3,0,"td",7),e.YNc(2,p,1,1,"td",8),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.isSelectable),e.xp6(1),e.Q6J("ngForOf",t.displayedColumns)}}const f=function(s,o,t){return{"table-bordered":s,"table-striped":o,"table-hover":t}};function _(s,o){if(1&s&&(e.TgZ(0,"table",1)(1,"thead")(2,"tr"),e.YNc(3,m,2,0,"th",2),e.YNc(4,i,2,1,"th",3),e.qZA()(),e.TgZ(5,"tbody"),e.YNc(6,g,3,2,"tr",4),e.qZA()()),2&s){const t=e.oxw();e.Q6J("ngClass",e.kEZ(4,f,t.isBordered,t.isStriped,t.isHover)),e.xp6(3),e.Q6J("ngIf",t.isSelectable),e.xp6(1),e.Q6J("ngForOf",t.displayedColumns),e.xp6(2),e.Q6J("ngForOf",t.dataSource)}}let a=(()=>{class s{constructor(t){this.renderer=t,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new e.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(t=>{this.inputCheckArr.push(t.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(t=>{if(""===t.key||""===t.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(t=>t.value=t.value.trim()),this.displayedColumns=this.displayedColumns.map(t=>(t.value=t.value.charAt(0).toUpperCase()+t.value.slice(1).toLowerCase(),t)),this.displayedColumns.map(t=>{if(t.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&t.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,t;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(t){t.checked?(this.checkbox.map(r=>this.renderer.setAttribute(r.nativeElement,"checked","true")),this.DataSelectedArr=this.dataSource):(this.checkbox.map(r=>this.renderer.setAttribute(r.nativeElement,"checked","false")),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(t){const r=this.inputCheckArr.indexOf(t);t.checked?this.DataSelectedArr.push(this.dataSource[r]):this.DataSelectedArr=this.DataSelectedArr.filter((C,O)=>O!==r),this.dataSelected.emit(this.DataSelectedArr)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.Qsj))},s.\u0275cmp=e.Xpm({type:s,selectors:[["o-table"]],viewQuery:function(t,r){if(1&t&&e.Gf(d,5),2&t){let C;e.iGM(C=e.CRH())&&(r.checkbox=C)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(t,r){1&t&&e.YNc(0,_,7,8,"table",0),2&t&&e.Q6J("ngIf",r.isValidateComponent)},dependencies:[n.ez,n.mk,n.sg,n.O5]}),s})()},1225:(h,u,c)=>{c.d(u,{c:()=>m});var n=c(9808),e=c(1223);function d(i,l){if(1&i&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&i){const p=l.$implicit;e.xp6(1),e.Q6J("innerHTML",p,e.oJD)}}let m=(()=>{class i{constructor(){this.practices=[]}}return i.\u0275fac=function(p){return new(p||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(p,g){1&p&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Malas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,d,2,1,"li",2),e.qZA()()),2&p&&(e.xp6(4),e.Q6J("ngForOf",g.practices))},dependencies:[n.ez,n.sg]}),i})()},553:(h,u,c)=>{c.d(u,{s:()=>m});var n=c(9808),e=c(1223);function d(i,l){if(1&i&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&i){const p=l.$implicit;e.xp6(1),e.Q6J("innerHTML",p,e.oJD)}}let m=(()=>{class i{constructor(){this.practices=[]}}return i.\u0275fac=function(p){return new(p||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(p,g){1&p&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Buenas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,d,2,1,"li",2),e.qZA()()),2&p&&(e.xp6(4),e.Q6J("ngForOf",g.practices))},dependencies:[n.ez,n.sg]}),i})()},4948:(h,u,c)=>{c.d(u,{B:()=>_});var n=c(9808),e=c(1223);function d(a,s){if(1&a){const o=e.EpF();e.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.isWindowHTML=!0)}),e.TgZ(4,"span"),e._uU(5,"HTML"),e.qZA()(),e.TgZ(6,"a",4),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.isWindowHTML=!1)}),e.TgZ(7,"span"),e._uU(8,"TS"),e.qZA()()()()()}if(2&a){const o=e.oxw();e.xp6(3),e.ekj("active",o.isWindowHTML),e.xp6(3),e.ekj("active",!o.isWindowHTML)}}function m(a,s){1&a&&(e.ynx(0),e.Hsn(1),e.BQk())}function i(a,s){1&a&&(e.ynx(0),e.Hsn(1,1),e.BQk())}function l(a,s){if(1&a&&e.YNc(0,i,2,0,"ng-container",7),2&a){const o=e.oxw(),t=e.MAs(16);e.Q6J("ngIf",o.isWindowHTML)("ngIfElse",t)}}function p(a,s){1&a&&e.Hsn(0,2)}const g=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],f=["[component]","[component-html]","[component-ts]"];let _=(()=>{class a{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[e.jDz],ngContentSelectors:f,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(o,t){if(1&o&&(e.F$t(g),e.TgZ(0,"div",0)(1,"div",1)(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),e.NdJ("click",function(){return t.isOpenCode=!t.isOpenCode}),e.TgZ(8,"span"),e._uU(9),e.qZA()()()()()(),e.TgZ(10,"div",5),e.YNc(11,d,9,4,"nav",6),e.YNc(12,m,2,0,"ng-container",7),e.YNc(13,l,1,2,"ng-template",null,8,e.W1O),e.YNc(15,p,1,0,"ng-template",null,9,e.W1O),e.qZA()()),2&o){const r=e.MAs(14);e.xp6(3),e.Oqu(t.title),e.xp6(4),e.ekj("active",t.isOpenCode),e.xp6(2),e.Oqu(t.linkCode),e.xp6(2),e.Q6J("ngIf",t.isOpenCode&&t.isNavCode),e.xp6(1),e.Q6J("ngIf",!t.isOpenCode)("ngIfElse",r)}},dependencies:[n.ez,n.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),a})()},2171:(h,u,c)=>{c.d(u,{y:()=>e});var n=c(1223);let e=(()=>{class d{constructor(i,l){this.host=i,this.renderer=l}ngAfterViewInit(){if(navigator.clipboard){const i=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(i,"click",this.clipboard)}}clipboard(i){const l=i.target,p=null==l?void 0:l.parentElement,g=null==p?void 0:p.querySelector("code");navigator.clipboard.writeText(null==g?void 0:g.innerText),l.innerText="Codigo copiado!",setTimeout(()=>{l.innerText="Copiar"},1e3)}}return d.\u0275fac=function(i){return new(i||d)(n.Y36(n.SBq),n.Y36(n.Qsj))},d.\u0275dir=n.lG2({type:d,selectors:[["","appClipboard",""]],standalone:!0}),d})()}}]);