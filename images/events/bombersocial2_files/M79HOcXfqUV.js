/*!CK:2960148260!*//*1414413105,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["6kIzd"]); }

__d("BoostedActionType",[],function(a,b,c,d,e,f){e.exports={PAGELIKE:"pagelike",WEBSITE:"website"};},null);
__d("PagesEventType",[],function(a,b,c,d,e,f){e.exports={NAV_VIEW_BUILD_AUDIENCE:"nav_view_build_audience",NAV_VIEW_HELP:"nav_view_help",NAV_VIEW_CREATE_AD:"nav_view_create_ad",VIEW_NOTIFICATIONS_PAGE:"view_notifications_page",VIEW_MESSAGES:"view_messages",VIEW_SCHEDULED_POSTS:"view_scheduled_posts",VIEW_DRAFT_POSTS:"view_draft_posts",VIEW_PAGES_FEED:"view_pages_feed",MESSAGES_TAB_INBOX:"messages_tab_inbox",MESSAGES_TAB_ARCHIVED:"messages_tab_archived",MESSAGES_TAB_SPAM:"messages_tab_spam",MESSAGES_TAB_OTHER:"messages_tab_other",MESSAGES_DIALOG_SEND:"messages_dialog_send",MESSAGES_DIALOG_GOTMESSAGES:"messages_dialog_gotmessages",VIEW_STORIES_TO_SHARE:"view_stories_to_share",CUSTOM_CTA_CLICK_CTA_DROPDOWN:"custom_cta_click_cta_dropdown",CUSTOM_CTA_CLICK_VIEWER_UNIT:"custom_cta_click_viewer_unit",CUSTOM_CTA_CLICK_NEXT_BUTTON:"custom_cta_click_next_button",CUSTOM_CTA_CHANGE_WEB_LINK:"custom_cta_change_web_link",CUSTOM_CTA_CLICK_BACK_BUTTON_ON_DIALOG:"custom_cta_click_back_button_on_dialog",CUSTOM_CTA_SAVE_SECTION:"custom_cta_save_section",CUSTOM_CTA_CLICK_CREATE_BUTTON:"custom_cta_click_create_button",CUSTOM_CTA_CLICK_DELETE:"custom_cta_click_delete",CUSTOM_CTA_CLICK_TEST_LINK:"custom_cta_click_test_link",CUSTOM_CTA_CLICK_EDIT_MENU:"custom_cta_click_edit_menu",CUSTOM_CTA_CLICK_SAVE_EDIT:"custom_cta_click_save_edit",POST_DETAIL_VIEW:"post_detail_view"};},null);
__d("AdsCFCreativeProperties",["AdCreativeType","adsGKCheck","AdsUtils","getObjectValues"],function(a,b,c,d,e,f,g,h,i,j){var k={STORY_APP_SHARE:{id:g.keyToType.STORY_APP_SHARE.id,validFields:['objectId','urlTags']},STORY_APP_USED:{id:g.keyToType.STORY_APP_USED.id,validFields:['objectId','urlTags']},STORY_PAGE_LIKE:{id:g.keyToType.STORY_PAGE_LIKE.id},STORY_PAGE_POST:{id:g.keyToType.STORY_PAGE_POST.id},STORY_CHECKIN:{id:g.keyToType.STORY_CHECKIN.id},STORY_DOMAIN_SHARE:{id:g.keyToType.STORY_DOMAIN_SHARE.id,validFields:['objectId','urlTags']},STORY_QUERY_BASED:{id:g.keyToType.STORY_QUERY_BASED.id,validFields:['objectId','urlTags']},AD_EXTERNAL_URL:{id:g.keyToType.AD_EXTERNAL_URL.id,validFields:['title','body','linkUrl','imageList','relatedFanPage','videoId','videoThumbnail','isVideoCreative'],requiredFields:['title','body','linkUrl','MULTI_IMAGE']},FEED_URL:{id:g.keyToType.FEED_URL.id,validFields:['actor','title','body','linkUrl','linkCaption','linkDescription','callToActionType','getDirectionsUrl','imageList','storyId','videoId','videoThumbnail','isVideoCreative'],requiredFields:['actor','title','body','linkUrl','MULTI_IMAGE']},AD_FAN_LIKE:{id:g.keyToType.AD_FAN_LIKE.id,validFields:['objectId','title','body','linkUrl','imageList'],requiredFields:['objectId','body','MULTI_IMAGE']},AD_EVENT_RSVP:{id:g.keyToType.AD_EVENT_RSVP.id,validFields:['objectId','body','imageList'],requiredFields:['objectId','body']},AD_APPLICATION:{id:g.keyToType.AD_APPLICATION.id,validFields:['objectId','title','body','imageList','linkUrl','urlTags'],requiredFields:['objectId','body','MULTI_IMAGE']},AD_PAGE_POST:{id:g.keyToType.AD_PAGE_POST.id,validFields:['objectId','storyId','urlTags']},MOBILE_APP_INSTALL:{id:g.keyToType.MOBILE_APP_INSTALL.id,validFields:['objectId','title','body','iconImage','imageList','mobileStore','videoId','applinkUrl','mobileProductName','callToActionType','urlTags','linkUrl'],requiredFields:['objectId','MULTI_IMAGE']},NEKO_LPP:{id:g.keyToType.NEKO_LPP.id,validFields:['actor','applinkUrl','body','callToActionType','imageList','linkUrl','platform','storyId','title','urlTags','videoId','videoThumbnail','isVideoCreative','productLinkUrl'],requiredFields:['actor','linkUrl','MULTI_IMAGE_OR_VIDEO']}};if(h('ads_cf_video_objective'))k.AD_VIDEO={id:g.keyToType.AD_VIDEO.id,validFields:['actor','body','callToActionLink','callToActionLinkCaption','callToActionType','isVideoCreative','videoId','videoThumbnail'],requiredFields:['actor','body','videoId','videoThumbnail']};if(h('ads_events_redesign')){k.AD_EVENT_RSVP.validFields.push('actor','linkUrl');k.AD_EVENT_RSVP.requiredFields.push('actor','linkUrl');}else{k.AD_EVENT_RSVP.validFields.push('title');k.AD_EVENT_RSVP.requiredFields.push('MULTI_IMAGE');}var l=i.indexedMap(j(k),'id'),m={idToType:l,keyToType:k,requiredFieldsForType:function(n){var o=l[n],p=o?o.requiredFields:undefined;if(p)return p;o=g.idToType[n];return o?o.requiredFields||[]:[];}};e.exports=m;},null);
__d("BoostedPagelikeConstants",[],function(a,b,c,d,e,f){var g={APPLICATION_ID:'317954918290638',ADMINPANEL:'admin_panel',CONTEXTUALDIALOG:'contextual_dialog',PAGESMANAGER:'pages_manager',SPRINGBOARDFLYOUT:'springboard_flyout',PAGETABLHS:'page_tab_lhs',DELETE:'inactive',PAUSE:'paused',ACTIVE:'active',EXPAND:'boosted_pagelike/expand',MUTATE:'boosted_pagelike/mutate',ACCOUNT_CHANGE:'boosted_pagelike/account_change',BUDGET_CHANGE:'boosted_pagelike/budget_change',STATUS_CHANGE:'boosted_pagelike/status_change',DURATION_CHANGE:'boosted_pagelike/duration_change',DATE_PICKER_VISIBILITY:'boosted_pagelike/date_picker_visibility',CURRENCY_CHANGE:'boosted_pagelike/currency_change',TARGETING_INIT:'boosted_pagelike/targeting_init',TARGETING_CHANGE:'boosted_pagelike/targeting_change',PANEL_STATUS_CHANGE:'boosted_pagelike/panel_status_change',PANEL_STATUS_CHANGE_FINISH:'boosted_pagelike/panel_status_change_finish',MENU_CF_REDIRECT:'boosted_pagelike/menu_cf_redirect',SHOW_TEXT_POLICY_WARNING:'boosted_pagelike/show_text_policy_warning',HIDE_TEXT_POLICY_WARNING:'boosted_pagelike/hide_text_policy_warning',GEO_TARGET_LEVELS:{CITY:'city',REGION:'region',COUNTRY:'country'},MAX_COUNTRY_COUNT:25,COUNTRY_COUNT_WARNING:10,KEYWORD_SUGGESTIONS_DISPLAY_LIMIT:5,KEYWORD_CATEGORY_RAW:0,KEYWORD_CATEGORY_WIKI:1,DIALOG_PADDING_TO_BOTTOM:180,BW_DIALOG_MAX_HEIGHT:531,DIALOG_MAX_HEIGHT:519,PAYLOAD_SOURCE_CLIENT:'client',PAYLOAD_SOURCE_SERVER:'server'},h={GK_EDIT_CREATIVE:'boosted_pagelike_edit_creative',GK_BOOSTED_WEBSITE_INTEGRITY_CHECK:'boosted_website_integrity_check'};Object.assign(g,h);e.exports=g;},null);
__d("InputLabel.react",["React","cx","invariant","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){var k=0;function l(){return 'js_input_label_'+(k++);}var m=g.createClass({displayName:'InputLabel',propTypes:{display:g.PropTypes.oneOf(['block','inline'])},getDefaultProps:function(){return {display:'block'};},render:function(){i(this.props.children.length===2);var n=this.props.children[0],o=this.props.children[1];n.props.className=j(n.props.className,'uiInputLabelInput');var p=n.type==='input';if(p)if(n.props.type==='radio'){n.props.className=j(n.props.className,'uiInputLabelRadio');}else if(n.props.type==='checkbox')n.props.className=j(n.props.className,'uiInputLabelCheckbox');if(!n.props.id)n.props.id=l();o.props.htmlFor=n.props.id;o.props.className=j(o.props.className,'uiInputLabelLabel');var q=(("uiInputLabel")+(' '+"clearfix")+(this.props.display==='inline'?' '+"inlineBlock":'')+(p?' '+"uiInputLabelLegacy":''));return (g.createElement("div",Object.assign({},this.props,{className:j(this.props.className,q)}),n,o));}});e.exports=m;},null);
__d("List.react",["ReactPropTypes","React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){var k=h.createClass({displayName:'List',propTypes:{border:g.oneOf(['none','light','medium','dark']),spacing:g.oneOf(['none','small','medium','large']),direction:g.oneOf(['vertical','horizontal']),valign:g.oneOf(['baseline','top','middle','bottom']),edgepadding:g.bool},getDefaultProps:function(){return {border:'medium',spacing:'medium',direction:'vertical',valign:'top'};},render:function(){var l=this.props.border,m=this.props.direction,n=this.props.spacing,o=m==='horizontal'&&this.props.valign,p,q,r;p=((m==='vertical'?"_4kg":'')+(m==='horizontal'?' '+"_4ki":'')+(o==='top'?' '+"_509-":'')+(o==='middle'?' '+"_509_":'')+(o==='bottom'?' '+"_50a0":''));if(n!=='none'||l!=='none')q=((l==='none'?"_6-i":'')+(l==='light'?' '+"_4ks":'')+(l==='medium'?' '+"_4kt":'')+(l==='dark'?' '+"_4ku":''));if(n!=='none')r=((!this.props.edgepadding?"_6-h":'')+(n==='small'?' '+"_704":'')+(n==='medium'?' '+"_6-j":'')+(n==='large'?' '+"_703":''));var s=j("uiList",p,q,r);return (h.createElement("ul",Object.assign({},this.props,{className:j(this.props.className,s)}),this.props.children));}});e.exports=k;},null);
__d("XUIBlock",["ReactPropTypes","cx"],function(a,b,c,d,e,f,g,h){var i={propTypes:{background:g.oneOf(['base-wash','light-wash','white','highlight','transparent'])},getDefaultProps:function(){return {background:'transparent'};},getBackgroundClass:function(j){var k=((j.background==='base-wash'?"_4-u5":'')+(j.background==='light-wash'?' '+"_57d8":'')+(j.background==='white'?' '+"_4-u8":'')+(j.background==='highlight'?' '+"_4-u7":''));return k;}};e.exports=i;},null);
__d("XUICard.react",["React","XUIBlock","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){var k=g.createClass({displayName:'XUICard',propTypes:h.propTypes,getDefaultProps:h.getDefaultProps,render:function(){var l=j("_4-u2",h.getBackgroundClass(this.props));return (g.createElement("div",Object.assign({},this.props,{className:j(this.props.className,l)}),this.props.children));}});e.exports=k;},null);
__d("XUICardSection.react",["React","XUIBlock","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){var k=g.createClass({displayName:'XUICardSection',propTypes:h.propTypes,getDefaultProps:h.getDefaultProps,render:function(){var l=j("_4-u3",h.getBackgroundClass(this.props));return (g.createElement("div",Object.assign({},this.props,{className:j(this.props.className,l)}),this.props.children));}});e.exports=k;},null);
__d("sliceChildren",["flattenChildren"],function(a,b,c,d,e,f,g){"use strict";function h(i,j,k){if(i==null)return i;var l={},m=g(i),n=0;for(var o in m){if(!m.hasOwnProperty(o))continue;var p=m[o];if(n>=j)l[o]=p;n++;if(k!=null&&n>=k)break;}return l;}e.exports=h;},null);
__d("XUIDialogTitle.react",["LeftRight.react","React","ReactPropTypes","XUICloseButton.react","cx","tx","sliceChildren","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=h.createClass({displayName:'XUIDialogTitle',propTypes:{closeButtonText:i.string,showCloseButton:i.bool},getDefaultProps:function(){return {closeButtonText:"Close",showCloseButton:true};},render:function(){var p=null;if(this.props.showCloseButton)p=h.createElement(j,{label:this.props.closeButtonText,className:"layerCancel _51-t"});return (h.createElement("div",Object.assign({},this.props,{className:n(this.props.className,"_4-i0")}),h.createElement(g,null,h.createElement("h3",{className:"_52c9"},m(this.props.children,0,1)),h.createElement("div",{className:"_51-u"},m(this.props.children,1),p))));}});e.exports=o;},null);
__d("SimpleXUIDialog",["DialogX","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerHideOnBlur","LayerHideOnEscape","React","XUIDialogCancelButton.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';var s=445,t={show:function(u,v,w,x){var y=m.createElement(q,{action:"cancel",use:"confirm"});this.showEx(u,v,y,w,x);},showConfirm:function(u,v,w,x){var y=false,z=m.createElement("div",null,m.createElement(n,{onClick:function(){y=false;}}),m.createElement(q,{action:"cancel",use:"confirm",onClick:function(){y=true;}}),";");function aa(){w(y);}this.showEx(u,v,z,aa,x);},showEx:function(u,v,w,x,y){y=y||{};var z=[h,j,i,l];if(y.hideOnBlur!==false)z.push(k);var aa={width:s,xui:true,addedBehaviors:z};if(v)v=m.createElement(r,{showCloseButton:true},v);if(w)w=m.createElement(p,null,w);var ba=m.createElement("div",null,v,m.createElement(o,null,u),w),ca=new g(aa,ba);if(x)ca.subscribe('hide',x);ca.show();}};e.exports=t;},null);
__d("XUIRadioInput.react",["React","cx","joinClasses","invariant"],function(a,b,c,d,e,f,g,h,i,j){var k=g.createClass({displayName:'XUIRadioInput',render:function(){j(!this.props.children||this.props.children.length===0);var l=i(this.props.className,"_55sh"),m=g.createElement("input",Object.assign({},this.props,{type:"radio"}),undefined);m.props.className=null;return (g.createElement("label",{className:l},m,g.createElement("span",null)));}});e.exports=k;},null);
__d("TypeaheadViewPropTypes",["React"],function(a,b,c,d,e,f,g){var h=g.PropTypes,i={ariaOwneeID:h.string,highlightedEntry:h.object,entries:h.array.isRequired,onSelect:h.func.isRequired,onHighlight:h.func,onRenderHighlight:h.func,role:h.string};e.exports=i;},null);
__d("XUITypeaheadViewItem.react",["React","TypeaheadViewItem","BackgroundImage.react","Badge.react","ImageBlock.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=g.createClass({displayName:'XUITypeaheadViewItem',mixins:[h.Mixin],propTypes:h.propTypes,render:function(){var o=this.props.entry,p=o.getSubtitle().split(' \u00b7 ')[0],q=p?g.createElement("div",{className:"_599q"},p):null,r=o.getPhoto()?g.createElement(i,{width:32,height:32,backgroundSize:"cover",src:o.getPhoto()}):g.createElement("span",null),s=o.getAuxiliaryData(),t=null;if(s&&s.verified)t=g.createElement(j,null);var u=(("_599m")+(!q?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":''));u=m(u,this.props.className);return (g.createElement("li",{'aria-label':o.getTitle(),'aria-selected':this.props.highlighted,className:u,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role,title:o.getTitle()},g.createElement(k,{spacing:"medium"},r,g.createElement("div",null,g.createElement("div",{className:"_599p"},o.getTitle(),t),q))));}});e.exports=n;},null);
__d("XUITypeaheadView.react",["React","TypeaheadViewPropTypes","XUITypeaheadViewItem.react","cx"],function(a,b,c,d,e,f,g,h,i,j){var k=g.createClass({displayName:'XUITypeaheadView',propTypes:h,getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(l){var m=l===this.props.highlightedEntry;return (g.createElement(i,{key:l.getUniqueID(),entry:l,highlighted:m,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function(){var l=(("_599r")+(!this.props.entries.length?' '+"_599s":''));return (g.createElement("ul",{className:l,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this._renderItem)));}});e.exports=k;},null);
__d("Layout.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){var j=g.createClass({displayName:'Layout',render:function(){var k,l,m=this.props.children;for(k=0;k<m.length;k++){l=m[k];if(l&&l.type===j.FillColumn.type){var n=m.slice(k+1).map(function(o){if(o)o.props.className=i(o.props.className,"_4bl8");return o;});n.reverse();m.splice(k,m.length);Array.prototype.push.apply(m,n);m.push(l);break;}}return (g.createElement("div",Object.assign({},this.props,{className:i(this.props.className,"clearfix")}),m));}});j.Column=g.createClass({displayName:'Column',render:function(){return (g.createElement("div",Object.assign({},this.props,{className:i(this.props.className,"_4bl7")})));}});j.FillColumn=g.createClass({displayName:'FillColumn',render:function(){return (g.createElement("div",Object.assign({},this.props,{className:i(this.props.className,"_4bl9")})));}});e.exports=j;},null);
__d("CIWebmailValidator",["AsyncRequest","URI"],function(a,b,c,d,e,f,g,h){var i,j=false,k=false,l=[];function m(o){var p=o.tokens;delete o.tokens;for(var q in o){var r=o[q];for(var s in p){if(!p.hasOwnProperty(s))continue;var t=s.replace(/([.?*+\^$\[\]\\(){}\-])/g,"\\$1"),u=new RegExp(t,"g");r=r.replace(u,p[s]);}o[q]=r;}i=o;j=true;while(l.length>0)(l.shift())();}var n={flow:null,useCase:null,hasFullMapping:function(){return j;},init:function(o,p,q){if(!j&&!k)i=o;this.flow=p;this.useCase=q;},isValidEmail:function(o){var p=new RegExp("[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+(?:\\.[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?");return p.test(o);},getDomain:function(o){var p=o.split('@');return p[1];},getDomainImporterName:function(o){var p=['msft','yahoo','gmail','yahoo_jp','ezweb_jp','other'],q=o.split(/\./);for(var r=0;r<q.length-1;r++){var s=q.slice(r).join('.');s='|'+s.toLowerCase();for(var t=0;t<p.length;t++){var u=p[t];if(i[u].indexOf(s)!=-1)return u;}}return null;},getImporterName:function(o){return this.getDomainImporterName(this.getDomain(o));},isLiveDomain:function(o){return this.getImporterName(o)=='msft';},isGmailDomain:function(o){return this.getImporterName(o)=='gmail';},isYahooDomain:function(o){return this.getImporterName(o)=='yahoo';},isYahooJpDomain:function(o){return this.getImporterName(o)=='yahoo_jp';},isSupportedDomain:function(o){var p=this.getDomainImporterName(this.getDomain(o));return p!=null;},downloadDomainMapping:function(o){if(j)return;if(o)l.push(o);var p=h('/contact_importer/ajax/get_domains.php').addQueryData({flow:this.flow,use_case:this.useCase});if(!k){k=true;new g().setURI(p).setMethod('GET').setReadOnly(true).setHandler(function(q){var r=q.getPayload();m(r);}).send();}},setDomainMapping:function(o){m(o);}};e.exports=n;a.CIWebmailValidator=n;},null);
__d("MercuryThrottler",["Map","MercurySingletonMixin","emptyFunction","invariant"],function(a,b,c,d,e,f,g,h,i,j){'use strict';var k={NORMAL:0,QUEUEING:1,FLUSHING:2};function l(m){this.$MercuryThrottler0=m;this.$MercuryThrottler1=new g();this.$MercuryThrottler2=Date.now();this.$MercuryThrottler3=0;this.$MercuryThrottler4=k.NORMAL;this.$MercuryThrottler5=0;}l.prototype.setMinThresholdDuration=function(m){this.$MercuryThrottler3=m;};l.prototype.setQueueResetDuration=function(m){this.$MercuryThrottler5=m;};l.prototype.registerHandlerType=function(m,n,o,p){if(!o)o=i.thatReturns;this.$MercuryThrottler1.set(m,{handler:n,instance:p,perBatchPostProcessHandler:o,queuedPayloads:[]});};l.prototype.$MercuryThrottler6=function(){this.$MercuryThrottler4=k.FLUSHING;this.$MercuryThrottler1.forEach(function(m,n,o){m.queuedPayloads.map(this.notifyHandler,this);m.perBatchPostProcessHandler();m.queuedPayloads=[];},this);this.$MercuryThrottler4=k.NORMAL;};l.prototype.$MercuryThrottler7=function(){if(this.$MercuryThrottler4===k.NORMAL){var m=(Date.now()-this.$MercuryThrottler2);if(m<this.$MercuryThrottler3){this.$MercuryThrottler4=k.QUEUEING;setTimeout(this.$MercuryThrottler6.bind(this),this.$MercuryThrottler5);}}this.$MercuryThrottler2=Date.now();};l.prototype.notifyHandler=function(m){var n=m.type,o=m.payload;j(this.$MercuryThrottler1.has(n));var p=this.$MercuryThrottler1.get(n);this.$MercuryThrottler7();switch(this.$MercuryThrottler4){case k.NORMAL:case k.FLUSHING:p.handler.call(p.instance,n,o);break;case k.QUEUEING:p.queuedPayloads.push({type:n,payload:o});break;default:j(false);}if(this.$MercuryThrottler4===k.NORMAL)p.perBatchPostProcessHandler();};Object.assign(l,h);e.exports=l;},null);
__d("PagesManagerMessagesInterface",["ge","Animation","Arbiter","AsyncRequest","CSS","DOM","Event","fbt","PagesMessagingConst"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p={init:function(q,r,s,t,u,v){m.listen(q,'click',function(){new j().setURI(o.ASYNC_ENDPOINT).setData({action:'markAllRead',pageid:u,folder:v,is_page:true}).setHandler(function(){this.notifyUpdateCompleted();}.bind(this)).send();}.bind(this));m.listen(r,'click',function(){k.toggleClass(q,'hidden_elem');k.toggleClass(s,'hidden_elem');});m.listen(s,'submit',function(){t.blur();});},applyIfVisibleOnPage:function(q,r){var s=g(q);if(s)r(s);},changeThreadSpamStatus:function(q,r,s){new j().setURI(o.ASYNC_ENDPOINT).setData({action:(s?'reportSpam':'unmarkSpam'),pageid:q,tids:r,is_page:true}).send();this.applyIfVisibleOnPage(r,this.hideElement);},changeThreadArchivedStatus:function(q,r,s,t){new j().setURI(o.ASYNC_ENDPOINT).setData({action:'tag',tag:'action:archived',state:(s?1:0),broadcast:true,pageid:q,tids:[r],is_page:true,placement:t}).send();this.applyIfVisibleOnPage(r,function(u){k.addClass(u,'archived');this.hideElement(u);}.bind(this));},changeThreadReadStatus:function(q,r,s,t){new j().setURI(o.ASYNC_ENDPOINT).setData({action:(s?'markRead':'markUnread'),pageid:q,tids:[r],is_page:true,placement:t}).send();var u=(s?k.removeClass:k.addClass);this.applyIfVisibleOnPage(r,function(v){u(v,'unread');});},hideElement:function(q){new h(q).to('opacity',0).duration(150).hide().go();},deleteMessages:function(q,r,s,t,u){var v=new j(),w={action:(q?'delete':'deleteMessages'),pageid:t,is_page:true};w['delete']=(q?'Delete Conversation':'Delete Messages');if(q){w.tids=u;}else{w.folder='inbox';w.mids=Object.keys(r);}v.setURI(o.ASYNC_ENDPOINT);v.setHandler(function(x){s();});v.setData(w);v.send();},notifyUpdateCompleted:function(){i.inform('PagesManagerLayout/refreshSection',{section:'messages'});},showMessageThread:function(q,r,s,t,u){var v=l.create('div');l.appendContent(document.body,v);new j().setURI(o.LOAD_MESSAGE_THREAD_URI).setData({folder:t,pageid:q,source:u,threadElementID:s,threadid:r}).setRelativeTo(v).send();},updateUnreadCount:function(q){i.inform('pagesManagerMessaging/messageUnreadCountUpdated',{metricCount:q});var r=g('pageUnreadMessageCount');if(r){var s='';if(q>0)s=(q===1)?n._("{number unread messages} Unread",[n.param("number unread messages",q)]):n._("{number unread messages} Unread",[n.param("number unread messages",q)]);l.setContent(r,s);}},updatePreferences:function(q){new j().setURI(o.ASYNC_ENDPOINT).setData({action:'setPreferences',send_on_enter:q.sendOnEnter}).send();}};e.exports=p;},null);
__d("PagesManagerNavbar",["Arbiter","ChannelConstants","CSS","Event","MercuryThreadInformer","MercuryThrottler","MercuryUnreadState","MessagingTag","PagesBanzaiLogger","PagesManagerMessagesInterface","PagesEventType","Vector","ViewportBounds","copyProperties","cx","getStyleProperty","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x={init:function(y,z,aa,ba,ca,da,ea,fa){this._setupStickyAreaAndDropshadow(z);var ga=g.subscribe('page_transition',function(){ga.unsubscribe();this._setupStickyAreaAndDropshadow(z);}.bind(this));if(aa){this._messageCount=ba;this._notificationCount=ca;this._activityCountBadge=aa;w(g.subscribe('pagesManagerMessaging/messageUnreadCountUpdated',function(ha,ia){this._messageCount=ia.metricCount;this._updateActivityCount();}.bind(this)));this._registerUnreadUpdates(y,ea,fa,da);}},initLogging:function(y,z,aa,ba){if(z)j.listen(z,'click',function(){var ca=t({},y);ca.event_name=q.NAV_VIEW_BUILD_AUDIENCE;o.logData(ca);});j.listen(aa,'click',function(){var ca=t({},y);ca.event_name=q.NAV_VIEW_HELP;o.logData(ca);});if(ba)j.listen(ba,'click',function(){var ca=t({},y);ca.event_name=q.NAV_VIEW_CREATE_AD;o.logData(ca);});},initCaret:function(y){g.subscribe('Hubble/loaded',function(){i.addClass(y,"_4iro");});},notifyNotificationsSeen:function(){this._notificationCount=0;this._updateActivityCount();},_registerUnreadUpdates:function(y,z,aa,ba){var ca=h.getArbiterType('pages_inbox_count_update'),da='unread-updated',ea=l.getForFBID(y);ea.setMinThresholdDuration(z);ea.setQueueResetDuration(aa);if(ba){ea.registerHandlerType(da,function(ha,ia){var ja=ga.getUnreadCount(n.INBOX);p.updateUnreadCount(ja);});var fa=k.getForFBID(y),ga=m.getForFBID(y);fa.subscribe(da,function(ha,ia){return ea.notifyHandler({type:ha,payload:ia});});}else{ea.registerHandlerType(ca,function(ha,ia){p.updateUnreadCount(ia.inbox_unread);},function(){g.inform('PagesManagerLayout/refreshSection',{section:'messages'});});w(g.subscribe(ca,function(ha,ia){return l.getForFBID(ia.page_id).notifyHandler({type:ha,payload:ia});}));}},_setupStickyAreaAndDropshadow:function(y){if(this._instance==y)return;this._instance=y;y.setOffset(s.getTop());var z=y._node.firstChild,aa=parseInt(v(z,'marginBottom'),10)+1;this._event=w(j.listen(window,'scroll',function(){y.setOffset(s.getTop());i.conditionClass(z,"_c7_",r.getScrollPosition().y>aa);}));},_updateActivityCount:function(){var y=this._messageCount+this._notificationCount;this._activityCountBadge&&this._activityCountBadge.setCount(y);}};e.exports=x;},null);
__d("StickyArea",["CSS","DOM","DOMDimensions","DOMQuery","Event","Run","Style","UserAgent_DEPRECATED","ViewportBounds","copyProperties","cx","getOverlayZIndex","removeFromArray","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u=[],v=null,w=null,x=null,y=t.acrossTransitions(z,1000);function z(){u.sort(function(fa,ga){var ha=fa.getNode(),ia=ga.getNode();if(ha.compareDocumentPosition){return 3-(ha.compareDocumentPosition(ia)&6);}else return ha.sourceIndex-ia.sourceIndex;});}function aa(fa,ga){if(!fa){return 0;}else if(ga.right<=fa.rect.left){return aa(fa.prev,ga);}else if(ga.left>=fa.rect.right){return aa(fa.prev,ga);}else return fa.top;}function ba(){var fa=document.documentElement.getBoundingClientRect(),ga=i.getDocumentDimensions(),ha=fa.width-fa.left,ia=0;if(fa.left>0){ia=-fa.left;}else if(ha>ga.width)ia=ha-ga.width;return ia;}function ca(){var fa=document.documentElement.getBoundingClientRect(),ga=0;if(fa.top>0)ga=-fa.top;return ga;}function da(){var fa=0,ga=u.length,ha=100,ia=ba(),ja=ca();function ka(la,ma){var na=ha;while(fa<ga){var oa=u[fa],pa=oa.getNode();if(ma&&!j.contains(ma,pa))break;ha=Math.max(na,oa.getZIndex());var qa=oa.getData(),ra=oa.getOffset(),sa=pa.parentNode,ta=qa.styles,ua,va,wa=oa.getPlaceholder();va=qa.fixed?wa.getBoundingClientRect():pa.getBoundingClientRect();ua=aa(la,va);if(va.top+ja<=ua+ra){var xa=va.bottom-va.top,ya=va.right-va.left;if(xa!==qa.placeholderHeight){m.set(wa,'height',xa+'px');qa.placeholderHeight=xa;}if(ya!==qa.placeholderWidth){m.set(wa,'width',ya+'px');qa.placeholderWidth=ya;}ta.width=(va.right-va.left)+'px';var za=parseInt(m.get(sa,'padding-bottom'),10),ab=sa.getBoundingClientRect();if(ab.bottom-za>ua+ra+xa){if(qa.needParentReset){m.set(sa,'position','');qa.needParentReset=false;}ta.position='fixed';ta.bottom='auto';ta.top=(ua+ra)+'px';ta.left=(va.left+ia)+'px';}else{if(!qa.parent||sa!==qa.parent){if(m.get(sa,'position')==='static'){m.set(sa,'position','relative');qa.needParentReset=n.ie()===7;}qa.parent=sa;}ta.position='absolute';ta.top='auto';ta.bottom=za+'px';var bb=parseInt(m.get(sa,'border-left-width'),10);ta.left=(va.left-ab.left-bb)+'px';}if(!qa.fixed){h.insertAfter(pa,wa);g.show(wa);m.set(wa,'float',m.get(pa,'float'));qa.fixed=true;}}else if(qa.fixed){for(var cb in ta)ta[cb]='';g.hide(wa);qa.fixed=false;}fa++;ka({top:ua+ra+(va.bottom-va.top),prev:la,rect:va},sa);ta.zIndex=ha++;m.apply(pa,ta);}}ka();}function ea(fa,ga,ha){"use strict";this._node=fa;this._data={styles:{}};this._offset=ha;g.addClass(fa,"_k");if(!ga)l.onLeave(this.destroy.bind(this));if(!u.length){v=k.listen(window,'scroll',function(){y();da();});w=k.listen(window,'resize',function(){y();da();});x=o.subscribe('change',function(){y();da();});}u.push(this);ea.reflow();}ea.prototype.destroy=function(){"use strict";s(u,this);if(!u.length){v.remove();v=null;w.remove();w=null;}if(this._placeholder)h.remove(this._placeholder);var fa=0;for(var ga in this._data.styles){this._data.styles[ga]='';fa++;}if(fa)m.apply(this._node,this._data.styles);};ea.prototype.getData=function(){"use strict";return this._data;};ea.prototype.getNode=function(){"use strict";return this._node;};ea.prototype.getOffset=function(){"use strict";return this._offset||0;};ea.prototype.getPlaceholder=function(){"use strict";if(!this._placeholder)this._placeholder=h.create('div');return this._placeholder;};ea.prototype.getZIndex=function(){"use strict";if(!this._zIndex)this._zIndex=r(this._node);return this._zIndex;};ea.prototype.setOffset=function(fa){"use strict";this._offset=fa;};p(ea,{reflow:t.acrossTransitions(function(){z();da();},100)});e.exports=ea;},null);