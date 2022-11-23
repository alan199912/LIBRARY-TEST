"use strict";(self.webpackChunkngx_obelisco_demo=self.webpackChunkngx_obelisco_demo||[]).push([[24],{8505:(f,A,t)=>{t.d(A,{AA:()=>h,Ai:()=>J,Bh:()=>L,C6:()=>_,CX:()=>b,Cp:()=>X,HQ:()=>P,JS:()=>W,KP:()=>B,Ku:()=>k,N0:()=>K,O8:()=>e,PH:()=>q,PU:()=>V,TB:()=>x,TZ:()=>c,UA:()=>O,XN:()=>y,Yw:()=>N,Z0:()=>n,ZB:()=>U,ZM:()=>j,a9:()=>Z,hk:()=>$,jo:()=>w,kN:()=>v,m0:()=>Q,oT:()=>H,pX:()=>Y,r:()=>R,rJ:()=>M,rW:()=>G,sr:()=>F,vr:()=>p,wz:()=>D,ye:()=>z,zk:()=>i});var r=t(2261);const l=o=>`\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public accessList = ${(0,r.H)(o)}\n    ];\n  }\n`,a=o=>`\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public accessItem = ${(0,r._)(o)}\n  }\n`,m=(o,ee)=>`\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public accessList = ${(0,r.H)(o)}\n    ];\n\n    public accessItem = ${(0,r._)(ee)}\n  }\n`;function C(o){return[...o].splice(o.length-2,2)}function d(o){return[{title:"Acceso "+o,route:"/alerta"},{title:"Acceso "+o,route:"/galeria"},{title:"Acceso "+o,route:"/panel"},{title:"Acceso "+o,route:"/tabla"}]}const E="access",S=[{title:"Api",route:"/components/access/api"},{title:"Ejemplos",route:"/components/access/examples"}],e=S.map(o=>Object.assign(Object.assign({},o),{route:o.route.replace(E,"access/access-simple")})),n=S.map(o=>Object.assign(Object.assign({},o),{route:o.route.replace(E,"access/access-group")})),c=S.map(o=>Object.assign(Object.assign({},o),{route:o.route.replace(E,"access/access-list")})),P=[{name:"@Input() <br /> accessList: Access[]",description:"Se utiliza para definir la lista de accesos que se mostrar\xe1n en el componente."},{name:"@Input() <br /> isLogOut: boolean",description:"Se utiliza para definir si se mostrar\xe1 el bot\xf3n de cerrar sesi\xf3n. Por defecto es <strong>false</strong>."},{name:"@Input() <br /> isBig: boolean",description:"Se utiliza para definir si se mostrar\xe1 el componente en su versi\xf3n grande. Por defecto es <strong>false</strong>."},{name:"@Input() <br />  isCard: boolean",description:"Se utiliza para definir si se mostrar\xe1 el componente en su versi\xf3n de tarjeta. Por defecto es <strong>false</strong>."},{name:"@Input() <br />  isDescriptive: boolean",description:"Se utiliza para definir si se mostrar\xe1 el componente en su versi\xf3n descriptiva. Por defecto es <strong>false</strong>."},{name:"@Input() <br />  isHorizontal: boolean",description:"Se utiliza para definir si se mostrar\xe1 el componente en su versi\xf3n horizontal. Por defecto es <strong>false</strong>."}],M=[{name:"@Input() <br /> title: string",description:"Se utiliza para definir el t\xedtulo del componente."},{name:"@Input() <br /> description: string",description:"Se utiliza para definir la descripci\xf3n del componente."},{name:"@Input() <br /> access: Access",description:"Se utiliza para definir el acceso que se mostrar\xe1 en el componente."},{name:"@Input() <br /> accessElements: AccessList[]",description:"Se utiliza para definir la lista de accesos que se mostrar\xe1n en el componente."},{name:"@Input() <br /> accessCategoryElements: AccessCategory[]",description:"Se utiliza para definir la lista de categor\xedas de accesos que se mostrar\xe1n en el componente."}],O=[{name:"@Input() <br /> title: string",description:"Se utiliza para definir el t\xedtulo del componente."},{name:"@Input() <br /> description: string",description:"Se utiliza para definir la descripci\xf3n del componente."},{name:"@Input() <br /> access: AccessGroup",description:"Se utiliza para definir el acceso que se mostrar\xe1 en el componente."},{name:"@Input() <br /> isReverse: boolean",description:"Se utiliza para definir si se mostrar\xe1 el componente en su versi\xf3n invertida. Por defecto es <strong>false</strong>."}],v="\n  interface Access {\n    title: string;\n    description: string;\n    route: string;\n    link: string;\n  }\n",h="\n  type AccessGroup = Omit<Access, 'description'>\n",R="\n  interface AccessList {\n    title: string;\n    description: string;\n    link: string;\n    route: string;\n    isDescriptive: boolean;\n  }\n",U="\n  interface AccessCategory {\n    name: string;\n    access: Access[];\n  }\n",i=d("chico"),L=d("grande"),_=[{title:"Cerrar sesi\xf3n",route:"/home"}],G=[{name:"Categor\xeda 1",access:C(i)},{name:"Categor\xeda 2",access:C(i)}],p={title:"Acceso grande",route:"/home"},x='\n  <o-access [accessList]="accessList"></o-access>\n',H='\n  <o-access [accessList]="accessList" [isHorizontal]="true"></o-access>\n',z='\n  <o-access [accessList]="accessList" [isHorizontal]="true" [isBig]="true"></o-access>\n',B='\n  <o-access [accessList]="accessList" [isLogOut]="true"></o-access>\n',X='\n  <o-access-group title="T\xedtulo" description="Bajada" [access]="accessItem"></o-access-group>\n',b='\n  <o-access-group title="T\xedtulo" description="Bajada" [access]="accessItem">\n    <i icon class="bx bxs-shield-x card-access-icon"></i>\n  </o-access-group>\n',Z='\n  <o-access-group title="T\xedtulo" description="Bajada" [access]="accessItem" [isReverse]="true">\n    <i icon class="bx bxs-shield-x card-access-icon"></i>\n  </o-access-group>\n',N='\n  <o-access-list\n    title="T\xedtulo"\n    description="Bajada"\n    [accessElements]="accessList"\n  ></o-access-list>\n',j='\n  <o-access-list\n    title="T\xedtulo"\n    description="Bajada"\n    [accessElements]="accessList"\n    [access]="accessItem"\n  >\n  </o-access-list>\n',y='\n  <o-access-list\n    title="T\xedtulo"\n    description="Bajada"\n    [accessElements]="accessList"\n    [access]="accessItem"\n  >\n    <span icon class="card-access-icon descriptive">N\xba</span>\n  </o-access-list>\n',D='\n  <o-access-list\n    title="T\xedtulo"\n    description="Bajada"\n    [accessCategoryElements]="accessCategoryItems"\n    [access]="accessItem"\n  >\n    <span icon class="card-access-icon descriptive">N\xba</span>\n  </o-access-list>\n',W=l(i),F=l(i),J=l(L),V=l(_),$=a(p),Q=a(p),Y=a(p),K=l(i),k=m(i,p),w=m(i,p),q=`\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public accessCategoryItems = [\n      {\n        name: 'Categor\xeda 1',\n        access: [\n          {\n            title: 'Acceso chico',\n            route: '/alerta'\n          },\n          {\n            title: 'Acceso chico',\n            route: '/galeria'\n          }\n        ]\n      },\n      {\n        name: 'Categor\xeda 2  ',\n        access: [\n          {\n            title: 'Acceso chico',\n            route: '/alerta'\n          },\n          {\n            title: 'Acceso chico',\n            route: '/galeria'\n          }\n        ]\n      }\n    ];\n\n    public accessItem = ${(0,r._)(p)}\n  }\n`},5024:(f,A,t)=>{t.r(A),t.d(A,{AccessModule:()=>S});var r=t(9808),l=t(5185),a=t(1573),m=t(8505),s=t(1223),C=t(7705);const T=[{path:"access-simple",component:(()=>{class e{constructor(){this.accessSimpleNavigation=m.O8}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-access-simple"]],decls:4,vars:1,consts:[[1,"section"],[3,"navItems"],[1,"content"]],template:function(c,u){1&c&&(s.TgZ(0,"section",0),s._UZ(1,"o-nav-horizontal",1),s.TgZ(2,"div",2),s._UZ(3,"router-outlet"),s.qZA()()),2&c&&(s.xp6(1),s.Q6J("navItems",u.accessSimpleNavigation))},dependencies:[a.lC,C.H]}),e})(),loadChildren:()=>Promise.all([t.e(517),t.e(519)]).then(t.bind(t,1519)).then(e=>e.AccessSimpleModule)},{path:"access-group",component:(()=>{class e{constructor(){this.accessGroupNavigation=m.Z0}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-access-group"]],decls:4,vars:1,consts:[[1,"section"],[3,"navItems"],[1,"content"]],template:function(c,u){1&c&&(s.TgZ(0,"section",0),s._UZ(1,"o-nav-horizontal",1),s.TgZ(2,"div",2),s._UZ(3,"router-outlet"),s.qZA()()),2&c&&(s.xp6(1),s.Q6J("navItems",u.accessGroupNavigation))},dependencies:[a.lC,C.H]}),e})(),loadChildren:()=>Promise.all([t.e(517),t.e(919)]).then(t.bind(t,5919)).then(e=>e.AccessGroupModule)},{path:"access-list",component:(()=>{class e{constructor(){this.accessListNavigation=m.TZ}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-access-list"]],decls:4,vars:1,consts:[[1,"section"],[3,"navItems"],[1,"content"]],template:function(c,u){1&c&&(s.TgZ(0,"section",0),s._UZ(1,"o-nav-horizontal",1),s.TgZ(2,"div",2),s._UZ(3,"router-outlet"),s.qZA()()),2&c&&(s.xp6(1),s.Q6J("navItems",u.accessListNavigation))},dependencies:[a.lC,C.H]}),e})(),loadChildren:()=>Promise.all([t.e(517),t.e(592),t.e(336)]).then(t.bind(t,9336)).then(e=>e.AccessListModule)},{path:"**",pathMatch:"full",redirectTo:"access-simple"}];let g=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[a.Bz.forChild(T),a.Bz]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[r.ez,g,l.Z]}),e})()}}]);