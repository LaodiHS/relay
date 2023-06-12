"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7647],{7647:(x,c,l)=>{l.r(c),l.d(c,{LoginPageModule:()=>v});var m=l(4755),i=l(5030),t=l(712),d=l(4294),u=l(5861),h=l(1389),o=(l(2090),l(6881),l(1877),l(4859),l(2223)),f=l(1162);const p=[{path:"",component:(()=>{class a{constructor(e,n,r,s){this.afAuth=e,this.navCtrl=n,this.router=r,this.formBuilder=s,this.loginForm=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.minLength(8),i.kI.maxLength(10)]]})}login(){var e=this;return(0,u.Z)(function*(){try{const n=yield e.afAuth.signInWithEmailAndPassword(e.email,e.password);console.log("credentials",n),e.router.navigate(["/tabs"],{replaceUrl:!0})}catch(n){console.log("Login error:",n.code)}})()}onTextareaChangePassword(e){console.log("Textarea value:",e.detail.value)}onTextareaChangeEmail(e){console.log("Textarea value:",e.detail.value)}isValidLoginForm(){const e=this.loginForm.get("email"),n=this.loginForm.get("password"),r=e.valid,s=n.valid;return console.log("email",r,"pasword",s),r&&s}loginWithGoogle(){var e=this;return(0,u.Z)(function*(){try{const{user:n}=yield e.afAuth.signInWithPopup(new h.V);console.log("User logged in with Google:",n),e.router.navigate(["/tabs"],{replaceUrl:!0})}catch(n){console.error("Error logging in with Google:",n)}})()}}return a.\u0275fac=function(e){return new(e||a)(o.Y36(f.zQ),o.Y36(t.SH),o.Y36(d.F0),o.Y36(i.qu))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-login"]],decls:24,vars:3,consts:[[3,"translucent"],[1,"ion-align-items-center"],["size-md","6","offset-md","3"],[3,"formGroup"],["fill","solid","aria-label","Email","label","Email","formControlName","email","labelPlacement","floating","helperText","Enter a valid Email","errorText","Invalid email","ngModel","","email","",1,"custom",3,"ionChange"],["fill","solid","aria-label","Password","label","Password","formControlName","password","labelPlacement","floating","helperText","Enter a valid password","errorText","Invalid password","maxlength","9","minlength","8","ngModel","","password","",1,"custom"],["expand","full",3,"disabled","click"],["expand","full","color","danger",1,"google-login-button",3,"click"],["slot","start","name","logo-google",1,"logo-google"]],template:function(e,n){1&e&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"Login"),o.qZA()()(),o.TgZ(4,"ion-content")(5,"ion-grid",1)(6,"ion-row")(7,"ion-col",2)(8,"ion-card")(9,"ion-card-header")(10,"ion-card-title"),o._uU(11,"Login"),o.qZA()(),o.TgZ(12,"ion-card-content")(13,"form",3)(14,"ion-item")(15,"ion-textarea",4),o.NdJ("ionChange",function(s){return n.onTextareaChangeEmail(s)}),o.qZA()(),o.TgZ(16,"ion-item"),o._UZ(17,"ion-textarea",5),o.qZA(),o.TgZ(18,"ion-button",6),o.NdJ("click",function(){return n.login()}),o._uU(19,"Login"),o.qZA()(),o.TgZ(20,"ion-button",7),o.NdJ("click",function(){return n.loginWithGoogle()}),o._UZ(21,"ion-icon",8),o.TgZ(22,"ion-label"),o._uU(23,"Login with Google"),o.qZA()()()()()()()()),2&e&&(o.Q6J("translucent",!0),o.xp6(13),o.Q6J("formGroup",n.loginForm),o.xp6(5),o.Q6J("disabled",!n.isValidLoginForm()))},dependencies:[i._Y,i.JJ,i.JL,i.wO,i.nD,i.on,t.YG,t.PM,t.FN,t.Zi,t.Dq,t.wI,t.W2,t.jY,t.Gu,t.gu,t.Ie,t.Q$,t.Nd,t.g2,t.wd,t.sr,t.j9,i.sg,i.u],styles:["ion-textarea.custom[_ngcontent-%COMP%]{--background: #373737;--color: #fff;--padding-end: 10px;--padding-start: 10px;--placeholder-color: #ddd;--placeholder-opacity: .8}ion-textarea.custom[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%], ion-textarea.custom[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{color:#373737}"]}),a})()}];let P=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[d.Bz.forChild(p),d.Bz]}),a})(),v=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[m.ez,i.u5,t.Pc,P,i.UX]}),a})()}}]);