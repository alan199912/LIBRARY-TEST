"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[924],{906:(x,C,o)=>{o.d(C,{L:()=>g});var d=o(6362),e=o(9349);const h=["checkbox"];function v(a,r){if(1&a){const n=e.EpF();e.TgZ(0,"th",5)(1,"input",6),e.NdJ("change",function(T){e.CHM(n);const S=e.oxw(2);return e.KtG(S.allSelected(T.target))}),e.qZA()()}}function c(a,r){if(1&a&&(e.TgZ(0,"th",5),e._uU(1),e.qZA()),2&a){const n=r.$implicit;e.xp6(1),e.Oqu(n.value)}}function l(a,r){if(1&a){const n=e.EpF();e.TgZ(0,"td")(1,"input",6,9),e.NdJ("change",function(T){e.CHM(n);const S=e.oxw(3);return e.KtG(S.selectedRow(T.target))}),e.qZA()()}}function m(a,r){if(1&a&&e._UZ(0,"td",10),2&a){const n=r.$implicit,_=e.oxw().$implicit;e.Q6J("innerHTML",_[n.key],e.oJD)}}function f(a,r){if(1&a&&(e.TgZ(0,"tr"),e.YNc(1,l,3,0,"td",7),e.YNc(2,m,1,1,"td",8),e.qZA()),2&a){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.isSelectable),e.xp6(1),e.Q6J("ngForOf",n.displayedColumns)}}const Z=function(a,r,n){return{"table-bordered":a,"table-striped":r,"table-hover":n}};function b(a,r){if(1&a&&(e.TgZ(0,"table",1)(1,"thead")(2,"tr"),e.YNc(3,v,2,0,"th",2),e.YNc(4,c,2,1,"th",3),e.qZA()(),e.TgZ(5,"tbody"),e.YNc(6,f,3,2,"tr",4),e.qZA()()),2&a){const n=e.oxw();e.Q6J("ngClass",e.kEZ(4,Z,n.isBordered,n.isStriped,n.isHover)),e.xp6(3),e.Q6J("ngIf",n.isSelectable),e.xp6(1),e.Q6J("ngForOf",n.displayedColumns),e.xp6(2),e.Q6J("ngForOf",n.dataSource)}}let g=(()=>{class a{constructor(n){this.renderer=n,this.isValidateComponent=!1,this.displayedColumns=[],this.dataSource=[],this.isBordered=!1,this.isStriped=!1,this.isHover=!1,this.isSelectable=!1,this.dataSelected=new e.vpe,this.inputCheckArr=[],this.DataSelectedArr=[]}ngOnInit(){this.componentValidations()}ngAfterViewInit(){this.checkbox.map(n=>{this.inputCheckArr.push(n.nativeElement)})}componentValidations(){if(this.isValidateComponent=this.displayedColumns.length>0&&this.dataSource.length>0,!this.isValidateComponent)throw new Error("The displayedColumns and dataSource must not be empty");this.displayedColumns.map(n=>{if(""===n.key||""===n.value)throw this.isValidateComponent=!1,new Error("The displayedColumns must not have null values")}),this.displayedColumns.map(n=>n.value=n.value.trim()),this.displayedColumns=this.displayedColumns.map(n=>(n.value=n.value.charAt(0).toUpperCase()+n.value.slice(1).toLowerCase(),n)),this.displayedColumns.map(n=>{if(n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/)&&n.key.match(/^[a-zA-Z ]*$/))return this.isValidateComponent=!0,n;throw this.isValidateComponent=!1,new Error("The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents")})}allSelected(n){n.checked?(this.checkbox.map(_=>this.renderer.setProperty(_.nativeElement,"checked",!0)),this.DataSelectedArr=this.dataSource):(this.checkbox.map(_=>this.renderer.setProperty(_.nativeElement,"checked",!1)),this.DataSelectedArr=[]),this.dataSelected.emit(this.DataSelectedArr)}selectedRow(n){const _=this.inputCheckArr.indexOf(n);n.checked?this.DataSelectedArr.push(this.dataSource[_]):this.DataSelectedArr=this.DataSelectedArr.filter((T,S)=>S!==_),this.dataSelected.emit(this.DataSelectedArr)}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(e.Qsj))},a.\u0275cmp=e.Xpm({type:a,selectors:[["o-table"]],viewQuery:function(n,_){if(1&n&&e.Gf(h,5),2&n){let T;e.iGM(T=e.CRH())&&(_.checkbox=T)}},inputs:{displayedColumns:"displayedColumns",dataSource:"dataSource",isBordered:"isBordered",isStriped:"isStriped",isHover:"isHover",isSelectable:"isSelectable"},outputs:{dataSelected:"dataSelected"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","table",3,"ngClass",4,"ngIf"],[1,"table",3,"ngClass"],["scope","col",4,"ngIf"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["type","checkbox","aria-label","checkbox",3,"change"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],["checkbox",""],[3,"innerHTML"]],template:function(n,_){1&n&&e.YNc(0,b,7,8,"table",0),2&n&&e.Q6J("ngIf",_.isValidateComponent)},dependencies:[d.ez,d.mk,d.sg,d.O5]}),a})()},1225:(x,C,o)=>{o.d(C,{c:()=>v});var d=o(6362),e=o(9349);function h(c,l){if(1&c&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&c){const m=l.$implicit;e.xp6(1),e.Q6J("innerHTML",m,e.oJD)}}let v=(()=>{class c{constructor(){this.practices=[]}}return c.\u0275fac=function(m){return new(m||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-bad-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-bad-practices"],[1,"usability"],["class","dont",4,"ngFor","ngForOf"],[1,"dont"],[3,"innerHTML"]],template:function(m,f){1&m&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Malas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,h,2,1,"li",2),e.qZA()()),2&m&&(e.xp6(4),e.Q6J("ngForOf",f.practices))},dependencies:[d.ez,d.sg]}),c})()},553:(x,C,o)=>{o.d(C,{s:()=>v});var d=o(6362),e=o(9349);function h(c,l){if(1&c&&(e.TgZ(0,"li",3),e._UZ(1,"p",4),e.qZA()),2&c){const m=l.$implicit;e.xp6(1),e.Q6J("innerHTML",m,e.oJD)}}let v=(()=>{class c{constructor(){this.practices=[]}}return c.\u0275fac=function(m){return new(m||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-best-practices"]],inputs:{practices:"practices"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"section-best-practices"],[1,"usability"],["class","do",4,"ngFor","ngForOf"],[1,"do"],[3,"innerHTML"]],template:function(m,f){1&m&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Buenas pr\xe1cticas"),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,h,2,1,"li",2),e.qZA()()),2&m&&(e.xp6(4),e.Q6J("ngForOf",f.practices))},dependencies:[d.ez,d.sg]}),c})()},4948:(x,C,o)=>{o.d(C,{B:()=>b});var d=o(6362),e=o(9349);function h(g,a){if(1&g){const r=e.EpF();e.TgZ(0,"nav")(1,"ul",2)(2,"li",3)(3,"a",4),e.NdJ("click",function(){e.CHM(r);const _=e.oxw();return e.KtG(_.isWindowHTML=!0)}),e.TgZ(4,"span"),e._uU(5,"HTML"),e.qZA()(),e.TgZ(6,"a",4),e.NdJ("click",function(){e.CHM(r);const _=e.oxw();return e.KtG(_.isWindowHTML=!1)}),e.TgZ(7,"span"),e._uU(8,"TS"),e.qZA()()()()()}if(2&g){const r=e.oxw();e.xp6(3),e.ekj("active",r.isWindowHTML),e.xp6(3),e.ekj("active",!r.isWindowHTML)}}function v(g,a){1&g&&(e.ynx(0),e.Hsn(1),e.BQk())}function c(g,a){1&g&&(e.ynx(0),e.Hsn(1,1),e.BQk())}function l(g,a){if(1&g&&e.YNc(0,c,2,0,"ng-container",7),2&g){const r=e.oxw(),n=e.MAs(16);e.Q6J("ngIf",r.isWindowHTML)("ngIfElse",n)}}function m(g,a){1&g&&e.Hsn(0,2)}const f=[[["","component",""]],[["","component-html",""]],[["","component-ts",""]]],Z=["[component]","[component-html]","[component-ts]"];let b=(()=>{class g{constructor(){this.isNavCode=!1,this.isOpenCode=!1,this.isWindowHTML=!0}get linkCode(){return this.isOpenCode?"Esconder codigo":"Mostrar codigo"}}return g.\u0275fac=function(r){return new(r||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-viewer"]],inputs:{title:"title",isNavCode:"isNavCode"},standalone:!0,features:[e.jDz],ngContentSelectors:Z,decls:17,vars:7,consts:[[1,"example-wrapper"],[1,"example-viewer"],[1,"nav","flex-row","nav-pills"],[1,"nav-item","d-flex"],[1,"nav-link",3,"click"],[1,"wrapper"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["codeTemplate",""],["windowTs",""]],template:function(r,n){if(1&r&&(e.F$t(f),e.TgZ(0,"div",0)(1,"div",1)(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"nav")(5,"ul",2)(6,"li",3)(7,"a",4),e.NdJ("click",function(){return n.isOpenCode=!n.isOpenCode}),e.TgZ(8,"span"),e._uU(9),e.qZA()()()()()(),e.TgZ(10,"div",5),e.YNc(11,h,9,4,"nav",6),e.YNc(12,v,2,0,"ng-container",7),e.YNc(13,l,1,2,"ng-template",null,8,e.W1O),e.YNc(15,m,1,0,"ng-template",null,9,e.W1O),e.qZA()()),2&r){const _=e.MAs(14);e.xp6(3),e.Oqu(n.title),e.xp6(4),e.ekj("active",n.isOpenCode),e.xp6(2),e.Oqu(n.linkCode),e.xp6(2),e.Q6J("ngIf",n.isOpenCode&&n.isNavCode),e.xp6(1),e.Q6J("ngIf",!n.isOpenCode)("ngIfElse",_)}},dependencies:[d.ez,d.O5],styles:["[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:4px;padding:0 24px;border:1px solid rgba(0,0,0,.2);margin-bottom:5rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}"]}),g})()},1062:(x,C,o)=>{o.r(C),o.d(C,{StatusBarModule:()=>w});var d=o(6362),e=o(9349),h=o(253),v=o(8951),c=o(3092),l=o(6354);function m(i,u){if(1&i&&(e.TgZ(0,"li",4)(1,"p",5),e._uU(2),e.qZA(),e.TgZ(3,"p",6),e._uU(4),e.qZA()()),2&i){const t=u.$implicit;e.ekj("completed",t.completed)("active",t.active),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.hij(" ",t.description," ")}}let f=(()=>{class i extends c.K{constructor(t){super(t),this.statusBarService=t,this.steps=[],this.isExpanded=!1,this.stopSteps=new e.vpe(!1),this.onDestroy$=new h.x}ngOnInit(){this.statusBarService.getNext.pipe((0,v.R)(this.onDestroy$)).subscribe(()=>{this.nextStep()}),this.statusBarService.getPrevious.pipe((0,v.R)(this.onDestroy$)).subscribe(()=>{this.previousStep()}),this.steps=this.steps.map((t,s)=>(t.active=!1,t.completed=!1,0===s&&(t.active=!0,t.completed=!0),t))}previousStep(){this.setpsService.isFirstStep.emit(!1);const t=this.steps.findIndex(s=>s.active);0!==t?this.steps=this.steps.map((s,p)=>(p===t?(s.completed=!1,s.active=!1):p===t-1&&(s.active=!0),s)):this.setpsService.isFirstStep.emit(!0)}nextStep(){this.setpsService.isFirstStep.emit(!1);const t=this.steps.findIndex(p=>p.active);if(t===this.steps.length-1)return this.stopSteps.emit(!0),void this.setpsService.stopEmmiter.emit(!0);this.steps=this.steps.map((p,y)=>(y===t?(p.completed=!0,p.active=!1):y===t+1&&(p.active=!0),p))}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.Q))},i.\u0275cmp=e.Xpm({type:i,selectors:[["o-status-bar"]],inputs:{steps:"steps",isExpanded:"isExpanded"},outputs:{stopSteps:"stopSteps"},standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:3,consts:[[1,"progression-container"],[1,"progression"],["class","progression-item","aria-expanded","true",3,"completed","active",4,"ngFor","ngForOf"],["type","button",1,"progression-link",3,"click"],["aria-expanded","true",1,"progression-item"],[1,"progression-title"],[1,"progression-subtitle"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"ul",1),e.YNc(2,m,5,6,"li",2),e.qZA(),e.TgZ(3,"button",3),e.NdJ("click",function(){return s.isExpanded=!s.isExpanded}),e._uU(4,"Menos detalles"),e.qZA()()),2&t&&(e.xp6(1),e.ekj("expanded",s.isExpanded),e.xp6(1),e.Q6J("ngForOf",s.steps))},dependencies:[d.ez,d.sg]}),i})();var Z=o(5185),b=o(906),g=o(7638),a=o(5570),r=o(927),n=o(6434);let _=(()=>{class i{constructor(){this.columns=a.L0,this.dataSourceProperties=r.LQ,this.dataSourceMethods=r.Pe,this.interface=r.J9}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-status-bar-api"]],decls:67,vars:9,consts:[[1,"section-api"],[1,"section-title"],[1,"code","import"],["appPrism","","code","import { OStatusBarComponent } from 'ngx-obelisco';"],[1,"section-selector"],[1,"section-properties"],["appPrism","","code","import { StepNextDirective } from 'ngx-obelisco';"],["appPrism","","code","import { StepPreviousDirective } from 'ngx-obelisco';"],["appPrism","","code","import { StepService } from 'ngx-obelisco';"],[3,"displayedColumns","dataSource","isStriped","isBordered"],[1,"section-type"],["appPrism",""]],template:function(t,s){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2"),e._uU(3,"Referencia de API para el componente Barra de estado de Obelisco"),e.qZA(),e.TgZ(4,"pre",2),e._uU(5,"      "),e._UZ(6,"code",3),e._uU(7,"\n    "),e.qZA()(),e.TgZ(8,"h3"),e._uU(9,"Etiqueta"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"OStatusBar"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Selector: "),e.TgZ(16,"strong"),e._uU(17,"o-status-bar"),e.qZA()(),e.TgZ(18,"div",5)(19,"h5"),e._uU(20,"Como se usa"),e.qZA(),e.TgZ(21,"p"),e._uU(22," Se puede usar las directivas "),e.TgZ(23,"strong"),e._uU(24,"StepNextDirective"),e.qZA(),e._uU(25," y "),e.TgZ(26,"strong"),e._uU(27,"StepPreviousDirective"),e.qZA(),e._uU(28," importado en el modulo donde se va a usar y agregarlo en botones "),e.qZA(),e.TgZ(29,"pre",2),e._uU(30,"        "),e._UZ(31,"code",6),e._uU(32,"\n      "),e.qZA(),e.TgZ(33,"pre",2),e._uU(34,"        "),e._UZ(35,"code",7),e._uU(36,"\n      "),e.qZA(),e.TgZ(37,"p"),e._uU(38," O de otra manera, se puede usar inyectando su servicio para inicializar los "),e.TgZ(39,"strong"),e._uU(40,"steps"),e.qZA(),e._uU(41," y luego darle funcionalidad. "),e.qZA(),e.TgZ(42,"pre",2),e._uU(43,"        "),e._UZ(44,"code",8),e._uU(45,"\n      "),e.qZA(),e.TgZ(46,"h5"),e._uU(47,"Propiedades"),e.qZA(),e._UZ(48,"o-table",9)(49,"br"),e.TgZ(50,"h5"),e._uU(51,"Metodos"),e.qZA(),e._UZ(52,"o-table",9),e.qZA(),e._UZ(53,"br"),e.TgZ(54,"div",10)(55,"h4"),e._uU(56,"Steps"),e.qZA(),e.TgZ(57,"p"),e._uU(58,"Permite establecer los valores en la propiedad "),e.TgZ(59,"strong"),e._uU(60,"steps"),e.qZA(),e._uU(61,"."),e.qZA(),e.TgZ(62,"pre",2),e._uU(63,"        "),e.TgZ(64,"code",11),e._uU(65),e.qZA(),e._uU(66,"\n      "),e.qZA()()()()),2&t&&(e.xp6(48),e.Q6J("displayedColumns",s.columns)("dataSource",s.dataSourceProperties)("isStriped",!0)("isBordered",!0),e.xp6(4),e.Q6J("displayedColumns",s.columns)("dataSource",s.dataSourceMethods)("isStriped",!0)("isBordered",!0),e.xp6(13),e.Oqu(s.interface))},dependencies:[b.L,n.y]}),i})();var T=o(4948),S=o(2171);let A=(()=>{class i{constructor(t,s,p){this.stepService=t,this.element=s,this.renderer=p,this.onDestroy$=new h.x,this.stepService.initialize()}ngOnInit(){this.stepService.stopEmmiter.pipe((0,v.R)(this.onDestroy$)).subscribe(()=>{this.stepService.stop(),this.renderer.setProperty(this.element.nativeElement,"disabled",!0)})}onClick(){this.stepService.next()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.Q),e.Y36(e.SBq),e.Y36(e.Qsj))},i.\u0275dir=e.lG2({type:i,selectors:[["","oStepNext",""]],hostBindings:function(t,s){1&t&&e.NdJ("click",function(){return s.onClick()})},standalone:!0}),i})(),O=(()=>{class i{constructor(t,s,p){this.stepService=t,this.element=s,this.renderer=p,this.onDestroy$=new h.x,this.stepService.initialize()}ngOnInit(){this.renderer.setProperty(this.element.nativeElement,"disabled",!0),this.stepService.isFirstStep.pipe((0,v.R)(this.onDestroy$)).subscribe(t=>{this.renderer.setProperty(this.element.nativeElement,"disabled",t)}),this.stepService.stopEmmiter.pipe((0,v.R)(this.onDestroy$)).subscribe(()=>{this.stepService.stop()})}onClick(){this.stepService.previous()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.Q),e.Y36(e.SBq),e.Y36(e.Qsj))},i.\u0275dir=e.lG2({type:i,selectors:[["","oStepPrevious",""]],hostBindings:function(t,s){1&t&&e.NdJ("click",function(){return s.onClick()})},standalone:!0}),i})();function U(i,u){if(1&i&&(e.TgZ(0,"li",6)(1,"p",7),e._uU(2),e.qZA(),e.TgZ(3,"p",8),e._uU(4),e.qZA()()),2&i){const t=u.$implicit;e.ekj("completed",t.completed)("active",t.active),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.hij(" ",t.description," ")}}let D=(()=>{class i{constructor(){this.steps=r.KI,this.isExpanded=!0,this.isDisabledPrevious=!1}ngOnInit(){this.isDisabledPrevious=!0,this.steps=this.steps.map((t,s)=>(t.active=!1,t.completed=!1,0===s&&(t.active=!0,t.completed=!0),t))}previousStep(){const t=this.steps.findIndex(s=>s.active);this.steps=this.steps.map((s,p)=>(p===t?(s.completed=!1,s.active=!1):p===t-1&&(s.active=!0),s)),1!==t||(this.isDisabledPrevious=!0)}nextStep(){this.isDisabledPrevious=!1;const t=this.steps.findIndex(p=>p.active);t!==this.steps.length-1&&(this.steps=this.steps.map((p,y)=>(y===t?(p.completed=!0,p.active=!1):y===t+1&&(p.active=!0),p)))}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-status-bar-demo"]],decls:10,vars:4,consts:[[1,"progression-container"],[1,"progression"],["class","progression-item","aria-expanded","true",3,"completed","active",4,"ngFor","ngForOf"],["type","button",1,"progression-link",3,"click"],[1,"btn","btn-sm","btn-link","mr-2",3,"disabled","click"],[1,"btn","btn-sm","btn-link",3,"click"],["aria-expanded","true",1,"progression-item"],[1,"progression-title"],[1,"progression-subtitle"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"ul",1),e.YNc(2,U,5,6,"li",2),e.qZA(),e.TgZ(3,"button",3),e.NdJ("click",function(){return s.isExpanded=!s.isExpanded}),e._uU(4,"Menos detalles"),e.qZA()(),e._UZ(5,"br"),e.TgZ(6,"button",4),e.NdJ("click",function(){return s.previousStep()}),e._uU(7,"Anterior"),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return s.nextStep()}),e._uU(9,"Siguiente"),e.qZA()),2&t&&(e.xp6(1),e.ekj("expanded",s.isExpanded),e.xp6(1),e.Q6J("ngForOf",s.steps),e.xp6(4),e.Q6J("disabled",s.isDisabledPrevious))},dependencies:[d.sg]}),i})();const B=[{path:"api",component:_},{path:"examples",component:(()=>{class i{constructor(){this.steps=r.KI,this.exampleDirectiveHTML=r.GD,this.exampleDirectiveTS=r.FV,this.exampleFuncionalityHTML=r.Ly,this.exampleFuncionalityTS=r.uN}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-status-bar-example"]],decls:43,vars:7,consts:[[1,"section-example"],["title","Con botones y directiva",3,"isNavCode"],["component",""],[3,"steps"],["oStepPrevious","",1,"btn","btn-link","btn-sm"],["oStepNext","",1,"btn","btn-link","btn-sm"],["appClipboard","","component-html","",1,"code"],[1,"btn","btn-clipboard"],["appPrism","","language","html"],["appClipboard","","component-ts","",1,"code"],["appPrism",""],["title","Con botones y funcionalidad",3,"isNavCode"]],template:function(t,s){1&t&&(e.TgZ(0,"section",0)(1,"app-viewer",1)(2,"div",2),e._UZ(3,"o-status-bar",3)(4,"br"),e.TgZ(5,"button",4),e._uU(6,"Anterior"),e.qZA(),e.TgZ(7,"button",5),e._uU(8,"Siguiente"),e.qZA()(),e.TgZ(9,"pre",6),e._uU(10,"      "),e.TgZ(11,"button",7),e._uU(12,"Copiar"),e.qZA(),e._uU(13,"\n      "),e.TgZ(14,"code",8),e._uU(15),e.qZA(),e._uU(16,"\n    "),e.qZA(),e.TgZ(17,"pre",9),e._uU(18,"      "),e.TgZ(19,"button",7),e._uU(20,"Copiar"),e.qZA(),e._uU(21,"\n      "),e.TgZ(22,"code",10),e._uU(23),e.qZA(),e._uU(24,"\n    "),e.qZA()(),e.TgZ(25,"app-viewer",11),e._UZ(26,"app-status-bar-demo",2),e.TgZ(27,"pre",6),e._uU(28,"      "),e.TgZ(29,"button",7),e._uU(30,"Copiar"),e.qZA(),e._uU(31,"\n      "),e.TgZ(32,"code",8),e._uU(33),e.qZA(),e._uU(34,"\n    "),e.qZA(),e.TgZ(35,"pre",9),e._uU(36,"      "),e.TgZ(37,"button",7),e._uU(38,"Copiar"),e.qZA(),e._uU(39,"\n      "),e.TgZ(40,"code",10),e._uU(41),e.qZA(),e._uU(42,"\n    "),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("isNavCode",!0),e.xp6(2),e.Q6J("steps",s.steps),e.xp6(12),e.hij("\n        ",s.exampleDirectiveHTML,"\n      "),e.xp6(8),e.hij("\n        ",s.exampleDirectiveTS,"\n      "),e.xp6(2),e.Q6J("isNavCode",!0),e.xp6(8),e.hij("\n        ",s.exampleFuncionalityHTML,"\n      "),e.xp6(8),e.hij("\n        ",s.exampleFuncionalityTS,"\n      "))},dependencies:[f,T.B,S.y,n.y,A,O,D]}),i})()},{path:"**",pathMatch:"full",redirectTo:"api"}];let P=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(B),g.Bz]}),i})();var M=o(553),E=o(1225);let w=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,P,Z.Z,f,b.L,M.s,E.c,T.B]}),i})()},2171:(x,C,o)=>{o.d(C,{y:()=>e});var d=o(9349);let e=(()=>{class h{constructor(c,l){this.host=c,this.renderer=l}ngAfterViewInit(){if(navigator.clipboard){const c=this.host.nativeElement.closest("pre").querySelector("button");this.renderer.listen(c,"click",this.clipboard)}}clipboard(c){const l=c.target,m=null==l?void 0:l.parentElement,f=null==m?void 0:m.querySelector("code");navigator.clipboard.writeText(null==f?void 0:f.innerText),l.innerText="Codigo copiado!",setTimeout(()=>{l.innerText="Copiar"},1e3)}}return h.\u0275fac=function(c){return new(c||h)(d.Y36(d.SBq),d.Y36(d.Qsj))},h.\u0275dir=d.lG2({type:h,selectors:[["","appClipboard",""]],standalone:!0}),h})()}}]);
//# sourceMappingURL=924.a6664b5911629232.js.map