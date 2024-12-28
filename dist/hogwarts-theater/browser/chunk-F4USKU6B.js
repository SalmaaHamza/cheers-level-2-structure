import{c as Ne,f as xe}from"./chunk-D3X2TZWU.js";import{a as N}from"./chunk-IZZ7IW3P.js";import{$ as y,$a as ve,Aa as L,Ea as ce,Eb as Ie,Fa as V,Fb as Se,Gb as Oe,Hb as ke,Ka as I,Ma as h,N as B,Na as S,Oa as de,P as U,Pa as l,Qa as c,R as m,Ra as D,Sa as he,Ta as fe,U as C,Ua as pe,Va as O,Wa as ge,Xa as me,Y as E,Ya as f,Z as F,Za as ye,_ as R,_a as W,a as d,aa as re,ab as _e,b as g,bb as Ce,cb as $,db as k,eb as Ve,fa as oe,fb as q,ga as se,gb as De,ha as ae,hb as be,ia as le,ib as Me,kb as Ae,l as te,ma as H,na as w,pb as Ee,q as ie,rb as Fe,sb as we,ta as ue,ub as z,w as ne,wa as a,xa as s}from"./chunk-SZ33ZPKP.js";var nt=t=>["/cocktail",t],Pe=(()=>{let e=class e{constructor(){this.cocktailService=C(N),this.favorites=ce([]),this.isFavorite=we(()=>this.favorites().includes(this.id)),this.favorites=this.cocktailService.favorites}toggleFavorite(){this.cocktailService.toggleFavorite(this.id)}get imageSrc(){return this.cocktail.imageUrl}get ingredients(){return this.cocktail.ingredients}get instructions(){return this.cocktail.instructions}get cocktailName(){return this.cocktail.name}get id(){return this.cocktail.id}get Alcoholic(){return this.cocktail.isAlcoholic?"Alcoholic":"Non alcoholic"}get isAlcoholic(){return this.cocktail.isAlcoholic}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=F({type:e,selectors:[["app-cocktail-card"]],inputs:{cocktail:"cocktail"},standalone:!0,features:[k],decls:12,vars:13,consts:[[1,"cocktail-card","card"],["alt","",1,"image-container",3,"src"],[1,"content-container"],[1,"row"],[1,"header",3,"routerLink"],[1,"bookmark-checkbox",3,"click"],[1,"icon-star",3,"id"]],template:function(r,o){r&1&&(l(0,"div",0),D(1,"img",1),l(2,"div",2)(3,"div",3)(4,"a",4),f(5),c(),l(6,"button",5),O("click",function(){return o.toggleFavorite()}),D(7,"span",6),c()(),l(8,"div"),f(9),c(),l(10,"span"),f(11),c()()()),r&2&&(a(),h("src",o.imageSrc,ue),a(3),h("routerLink",Ve(11,nt,o.id)),a(),ye(o.cocktailName),a(2),S("active",o.isFavorite()),h("id","star-"+o.id),a(),de("alcoholic-container ",o.isAlcoholic?"alcoholic":"non-alcoholic",""),a(),W(" ",o.Alcoholic," "),a(2),W(" ",o.ingredients.join(" | ")," "))},dependencies:[xe,Ne],styles:[`.image-container[_ngcontent-%COMP%]{border-radius:8px;object-fit:cover;width:100px;height:100px;flex-shrink:0}.cocktail-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;border-radius:.5rem;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;background-color:#fff;padding:1rem;justify-content:flex-start;min-width:50%;margin-bottom:1rem;gap:1rem}.cocktail-card[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:left;flex-grow:1}.cocktail-card[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem}.cocktail-card[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-weight:500;font-size:large;margin-bottom:.5rem}.cocktail-card[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .alcoholic-container[_ngcontent-%COMP%]{border-radius:8px;max-width:fit-content;padding:.25rem .5rem;margin-bottom:.5rem;font-size:.875rem;color:#fff}.cocktail-card[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .alcoholic-container.alcoholic[_ngcontent-%COMP%]{background:#516cd99d}.cocktail-card[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .alcoholic-container.non-alcoholic[_ngcontent-%COMP%]{background:#21ad3d69}.bookmark-checkbox[_ngcontent-%COMP%]{margin-left:auto;color:gray;flex-shrink:0;cursor:pointer}
/*# sourceMappingURL=cocktail-card.component-OWX6TWDM.css.map */`]});let t=e;return t})();var Le=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(s(L),s(H))},e.\u0275dir=y({type:e});let t=e;return t})(),rt=(()=>{let e=class e extends Le{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=le(e)))(o||e)}})(),e.\u0275dir=y({type:e,features:[V]});let t=e;return t})(),We=new m("");var ot={provide:We,useExisting:B(()=>j),multi:!0};function st(){let t=z()?z().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var at=new m(""),j=(()=>{let e=class e extends Le{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!st())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(s(L),s(H),s(at,8))},e.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&O("input",function(p){return o._handleInput(p.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(p){return o._compositionEnd(p.target.value)})},features:[$([ot]),V]});let t=e;return t})();var lt=new m(""),ut=new m("");function $e(t){return t!=null}function qe(t){return Ae(t)?te(t):t}function ze(t){let e={};return t.forEach(i=>{e=i!=null?d(d({},e),i):e}),Object.keys(e).length===0?null:e}function Ze(t,e){return e.map(i=>i(t))}function ct(t){return!t.validate}function Xe(t){return t.map(e=>ct(e)?e:i=>e.validate(i))}function dt(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(i){return ze(Ze(i,e))}}function Ye(t){return t!=null?dt(Xe(t)):null}function ht(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(i){let n=Ze(i,e).map(qe);return ne(n).pipe(ie(ze))}}function Ke(t){return t!=null?ht(Xe(t)):null}function Te(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ft(t){return t._rawValidators}function pt(t){return t._rawAsyncValidators}function X(t){return t?Array.isArray(t)?t:[t]:[]}function P(t,e){return Array.isArray(t)?t.includes(e):t===e}function je(t,e){let i=X(e);return X(t).forEach(r=>{P(i,r)||i.push(r)}),i}function Ge(t,e){return X(e).filter(i=>!P(t,i))}var T=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ye(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},Y=class extends T{get formDirective(){return null}get path(){return null}},A=class extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},K=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},gt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ci=g(d({},gt),{"[class.ng-submitted]":"isSubmitted"}),Je=(()=>{let e=class e extends K{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(s(A,2))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&S("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[V]});let t=e;return t})();var b="VALID",x="INVALID",v="PENDING",M="DISABLED";function mt(t){return(G(t)?t.validators:t)||null}function yt(t){return Array.isArray(t)?Ye(t):t||null}function vt(t,e){return(G(e)?e.asyncValidators:t)||null}function _t(t){return Array.isArray(t)?Ke(t):t||null}function G(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var J=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===x}get pending(){return this.status==v}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(je(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=v,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(n=>{n.disable(g(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(n=>{n.enable(g(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===v)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;let i=qe(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(x)?x:b}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){G(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=yt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=_t(this._rawAsyncValidators)}};var Qe=new m("CallSetDisabledState",{providedIn:"root",factory:()=>Q}),Q="always";function Ct(t,e){return[...e.path,t]}function Vt(t,e,i=Q){bt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Mt(t,e),Et(t,e),At(t,e),Dt(t,e)}function Be(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Dt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function bt(t,e){let i=ft(t);e.validator!==null?t.setValidators(Te(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=pt(t);e.asyncValidator!==null?t.setAsyncValidators(Te(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Be(e._rawValidators,r),Be(e._rawAsyncValidators,r)}function Mt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&et(t,e)})}function At(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&et(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function et(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Et(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Ft(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function wt(t){return Object.getPrototypeOf(t.constructor)===rt}function It(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===j?i=o:wt(o)?n=o:r=o}),r||n||i||null}function Ue(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Re(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var St=class extends J{constructor(e=null,i,n){super(mt(i),vt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Re(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ue(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ue(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Re(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ot={provide:A,useExisting:B(()=>ee)},He=Promise.resolve(),ee=(()=>{let e=class e extends A{constructor(n,r,o,u,p,_){super(),this._changeDetectorRef=p,this.callSetDisabledState=_,this.control=new St,this._registered=!1,this.name="",this.update=new w,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=It(this,u)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Ft(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Vt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){He.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&Fe(r);He.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Ct(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(s(Y,9),s(lt,10),s(ut,10),s(We,10),s(Ee,8),s(Qe,8))},e.\u0275dir=y({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[E.None,"disabled","isDisabled"],model:[E.None,"ngModel","model"],options:[E.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[$([Ot]),V,oe]});let t=e;return t})();var kt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=U({});let t=e;return t})();var tt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Qe,useValue:n.callSetDisabledState??Q}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=U({imports:[kt]});let t=e;return t})();var it=(()=>{let e=class e{transform(n,r){return n?!r||r==""?n:n.filter(o=>o.name.toLowerCase()==r.toLowerCase()):[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=re({name:"filter",type:e,pure:!0,standalone:!0});let t=e;return t})();function xt(t,e){if(t&1&&D(0,"app-cocktail-card",7),t&2){let i=e.$implicit;h("cocktail",i)}}function Pt(t,e){if(t&1&&(he(0),l(1,"div",2),I(2,xt,1,1,"app-cocktail-card",6),q(3,"filter"),c(),fe()),t&2){let i=e.ngIf,n=ge();a(2),h("ngForOf",be(3,1,i,n.searchText))}}function Tt(t,e){t&1&&f(0,"Loading...")}var Di=(()=>{let e=class e{constructor(){this.cocktailService=C(N)}ngOnInit(){this.cocktails$=this.cocktailService.getCocktails()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=F({type:e,selectors:[["app-cocktail-list"]],standalone:!0,features:[k],decls:11,vars:5,consts:[["loading",""],[1,"bg-gray"],[1,"row"],["for","search"],["type","search","name","search","placeholder","Search for a cocktail...","id","search",3,"ngModelChange","ngModel"],[4,"ngIf","ngIfElse"],["class","col-6",3,"cocktail",4,"ngFor","ngForOf"],[1,"col-6",3,"cocktail"]],template:function(r,o){if(r&1){let u=pe();l(0,"div",1)(1,"h3"),f(2,"Filters"),c(),l(3,"div",2)(4,"label",3),f(5,"Cocktail Name"),c(),l(6,"input",4),Ce("ngModelChange",function(_){return se(u),_e(o.searchText,_)||(o.searchText=_),ae(_)}),c()()(),I(7,Pt,4,4,"ng-container",5),q(8,"async"),I(9,Tt,1,0,"ng-template",null,0,Me)}if(r&2){let u=me(10);a(6),ve("ngModel",o.searchText),a(),h("ngIf",De(8,3,o.cocktails$))("ngIfElse",u)}},dependencies:[ke,Ie,Se,Oe,Pe,tt,j,Je,ee,it]});let t=e;return t})();export{Di as CocktailListComponent};
//# sourceMappingURL=chunk-F4USKU6B.js.map