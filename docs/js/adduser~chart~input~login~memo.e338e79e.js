(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adduser~chart~input~login~memo"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ji})),n.d(e,"b",(function(){return Qo})),n.d(e,"c",(function(){return qi})),n.d(e,"d",(function(){return $o})),n.d(e,"e",(function(){return to})),n.d(e,"f",(function(){return xo})),n.d(e,"g",(function(){return ko})),n.d(e,"h",(function(){return zo})),n.d(e,"i",(function(){return Ro}));var s=n("589b"),r=n("22e5"),i=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new i["b"]("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=i["a"].DEBUG){const n=e.map(m);l.debug(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=i["a"].ERROR){const n=e.map(m);l.error(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=i["a"].WARN){const n=e.map(m);l.warn(`Firestore (${h}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function v(t,e){t||y()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class C{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new T;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new T,t.enqueueRetryable(()=>s(this.currentUser))};const i=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await s(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new T)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class _{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=u.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(v(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class D{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new _(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.A;return this.A=t.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const s=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit(t=>s(t)),setTimeout(()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),this.A=t.token,new N(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=L(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function O(t,e){return t<e?-1:t>e?1:0}function x(t,e,n){return t.length===e.length&&t.every((t,s)=>n(t,e[s]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.timestamp=t}static fromTimestamp(t){return new V(t)}static min(){return new V(new M(0,0))}static max(){return new V(new M(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class P extends U{construct(t,e,n){return new P(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new P(e)}static emptyPath(){return new P([])}}const F=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends U{construct(t,e,n){return new B(t,e,n)}static isValidIdentifier(t){return F.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new B(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new E(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new E(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new E(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new B(e)}static emptyPath(){return new B([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(P.fromString(t))}static fromName(t){return new j(P.fromString(t).popFirst(5))}static empty(){return new j(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===P.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return P.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new P(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}q.UNKNOWN_ID=-1;function K(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=V.fromTimestamp(1e9===s?new M(n+1,0):new M(n,s));return new H(r,j.empty(),e)}function G(t){return new H(t.readTime,t.key,-1)}class H{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new H(V.min(),j.empty(),-1)}static max(){return new H(V.max(),j.empty(),-1)}}function $(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=j.comparator(t.documentKey,e.documentKey),0!==n?n:O(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==z)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new X((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof X?e:X.resolve(e)}catch(t){return X.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):X.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):X.reject(e)}static resolve(t){return new X((e,n)=>{e(t)})}static reject(t){return new X((e,n)=>{n(t)})}static waitFor(t){return new X((e,n)=>{let s=0,r=0,i=!1;t.forEach(t=>{++s,t.next(()=>{++r,i&&r===s&&e()},t=>n(t))}),i=!0,r===s&&e()})}static or(t){let e=X.resolve(!1);for(const n of t)e=e.next(t=>t?X.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,s)=>{n.push(e.call(this,t,s))}),this.waitFor(n)}static mapArray(t,e){return new X((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next(t=>{i[c]=t,++o,o===r&&n(i)},t=>s(t))}})}static doWhile(t,e){return new X((n,s)=>{const r=()=>{!0===t()?e().next(()=>{r()},s):n()};r()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J.at=-1;class nt{constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new st(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new st(this.root,t,this.comparator,!1)}getReverseIterator(){return new st(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new st(this.root,t,this.comparator,!0)}}class st{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:rt.RED,this.left=null!=s?s:rt.EMPTY,this.right=null!=r?r:rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new rt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return rt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1,rt.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ot(this.data.getIterator())}getIteratorFrom(t){return new ot(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof it))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class ot{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{constructor(t){this.fields=t,t.sort(B.comparator)}static empty(){return new at([])}unionWith(t){let e=new it(B.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new at(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return x(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ct(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const ut=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(t){if(v(!!t),"string"==typeof t){let e=0;const n=ut.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function dt(t){return"string"==typeof t?ct.fromBase64String(t):ct.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function gt(t){const e=t.mapValue.fields.__previous_value__;return ft(e)?gt(e):e}function pt(t){const e=ht(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class yt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof yt&&t.projectId===this.projectId&&t.database===this.database}}function vt(t){return null==t}function wt(t){return 0===t&&1/t==-1/0}function bt(t){return"number"==typeof t&&Number.isInteger(t)&&!wt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Tt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ft(t)?4:Vt(t)?9007199254740991:10:y()}function It(t,e){if(t===e)return!0;const n=Tt(t);if(n!==Tt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pt(t).isEqual(pt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ht(t.timestampValue),s=ht(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return dt(t.bytesValue).isEqual(dt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return lt(t.geoPointValue.latitude)===lt(e.geoPointValue.latitude)&&lt(t.geoPointValue.longitude)===lt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return lt(t.integerValue)===lt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=lt(t.doubleValue),s=lt(e.doubleValue);return n===s?wt(n)===wt(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return x(t.arrayValue.values||[],e.arrayValue.values||[],It);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Z(n)!==Z(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!It(n[r],s[r])))return!1;return!0}(t,e);default:return y()}}function St(t,e){return void 0!==(t.values||[]).find(t=>It(t,e))}function Ct(t,e){if(t===e)return 0;const n=Tt(t),s=Tt(e);if(n!==s)return O(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=lt(t.integerValue||t.doubleValue),s=lt(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return At(t.timestampValue,e.timestampValue);case 4:return At(pt(t),pt(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(t,e){const n=dt(t),s=dt(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=O(n[r],s[r]);if(0!==t)return t}return O(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=O(lt(t.latitude),lt(e.latitude));return 0!==n?n:O(lt(t.longitude),lt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=Ct(n[r],s[r]);if(t)return t}return O(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Et.mapValue&&e===Et.mapValue)return 0;if(t===Et.mapValue)return 1;if(e===Et.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=O(s[o],i[o]);if(0!==t)return t;const e=Ct(n[s[o]],r[i[o]]);if(0!==e)return e}return O(s.length,i.length)}(t.mapValue,e.mapValue);default:throw y()}}function At(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return O(t,e);const n=ht(t),s=ht(e),r=O(n.seconds,s.seconds);return 0!==r?r:O(n.nanos,s.nanos)}function _t(t){return Dt(t)}function Dt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ht(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?dt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Dt(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${Dt(t.fields[r])}`;return n+"}"}(t.mapValue):y();var e,n}function Nt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kt(t){return!!t&&"integerValue"in t}function Lt(t){return!!t&&"arrayValue"in t}function Rt(t){return!!t&&"nullValue"in t}function Ot(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xt(t){return!!t&&"mapValue"in t}function Mt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tt(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Mt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Vt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(t){this.value=t}static empty(){return new Ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!xt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mt(e)}setAll(t){let e=B.emptyPath(),n={},s=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Mt(t):s.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());xt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return It(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];xt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){tt(e,(e,n)=>t[e]=n);for(const s of n)delete t[s]}clone(){return new Ut(Mt(this.value))}}function Pt(t){const e=[];return tt(t.fields,(t,n)=>{const s=new B([t]);if(xt(n)){const t=Pt(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)}),new at(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ft{constructor(t,e,n,s,r,i){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Ft(t,0,V.min(),V.min(),Ut.empty(),0)}static newFoundDocument(t,e,n){return new Ft(t,1,e,V.min(),n,0)}static newNoDocument(t,e){return new Ft(t,2,e,V.min(),Ut.empty(),0)}static newUnknownDocument(t,e){return new Ft(t,3,e,V.min(),Ut.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ft&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ht=null}}function jt(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Bt(t,e,n,s,r,i,o)}function qt(t){const e=w(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+_t(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),vt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>_t(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>_t(t)).join(",")),e.ht=t}return e.ht}function Kt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${_t(e.value)}`;var e}).join(", ")}]`),vt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>_t(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>_t(t)).join(",")),`Target(${e})`}function Gt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!se(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!It(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ie(t.startAt,e.startAt)&&ie(t.endAt,e.endAt)}function Ht(t){return j.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class $t extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new zt(t,e,n):"array-contains"===e?new Yt(t,n):"in"===e?new Jt(t,n):"not-in"===e?new Zt(t,n):"array-contains-any"===e?new te(t,n):new $t(t,e,n)}static lt(t,e,n){return"in"===e?new Qt(t,n):new Wt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Ct(e,this.value)):null!==e&&Tt(this.value)===Tt(e)&&this.ft(Ct(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class zt extends $t{constructor(t,e,n){super(t,e,n),this.key=j.fromName(n.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.ft(e)}}class Qt extends $t{constructor(t,e){super(t,"in",e),this.keys=Xt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Wt extends $t{constructor(t,e){super(t,"not-in",e),this.keys=Xt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>j.fromName(t.referenceValue))}class Yt extends $t{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Lt(e)&&St(e.arrayValue,this.value)}}class Jt extends $t{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&St(this.value.arrayValue,e)}}class Zt extends $t{constructor(t,e){super(t,"not-in",e)}matches(t){if(St(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!St(this.value.arrayValue,e)}}class te extends $t{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>St(this.value.arrayValue,t))}}class ee{constructor(t,e){this.position=t,this.inclusive=e}}class ne{constructor(t,e="asc"){this.field=t,this.dir=e}}function se(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function re(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?j.comparator(j.fromName(o.referenceValue),n.key):Ct(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function ie(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!It(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function ae(t,e,n,s,r,i,o,a){return new oe(t,e,n,s,r,i,o,a)}function ce(t){return new oe(t)}function ue(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function he(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function le(t){for(const e of t.filters)if(e.dt())return e.field;return null}function de(t){return null!==t.collectionGroup}function fe(t){const e=w(t);if(null===e._t){e._t=[];const t=le(e),n=he(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new ne(t)),e._t.push(new ne(B.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ne(B.keyField(),t))}}}return e._t}function ge(t){const e=w(t);if(!e.wt)if("F"===e.limitType)e.wt=jt(e.path,e.collectionGroup,fe(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of fe(e)){const e="desc"===r.dir?"asc":"desc";t.push(new ne(r.field,e))}const n=e.endAt?new ee(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ee(e.startAt.position,e.startAt.inclusive):null;e.wt=jt(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function pe(t,e,n){return new oe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function me(t,e){return Gt(ge(t),ge(e))&&t.limitType===e.limitType}function ye(t){return`${qt(ge(t))}|lt:${t.limitType}`}function ve(t){return`Query(target=${Kt(ge(t))}; limitType=${t.limitType})`}function we(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):j.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=re(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,fe(t),e))&&!(t.endAt&&!function(t,e,n){const s=re(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,fe(t),e))}(t,e)}function be(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ee(t){return(e,n)=>{let s=!1;for(const r of fe(t)){const t=Te(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Te(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?Ct(s,r):y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wt(e)?"-0":e}}function Se(t){return{integerValue:""+t}}function Ce(t,e){return bt(e)?Se(e):Ie(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this._=void 0}}function _e(t,e,n){return t instanceof ke?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Le?Re(t,e):t instanceof Oe?xe(t,e):function(t,e){const n=Ne(t,e),s=Ve(n)+Ve(t.yt);return kt(n)&&kt(t.yt)?Se(s):Ie(t.It,s)}(t,e)}function De(t,e,n){return t instanceof Le?Re(t,e):t instanceof Oe?xe(t,e):n}function Ne(t,e){return t instanceof Me?kt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ke extends Ae{}class Le extends Ae{constructor(t){super(),this.elements=t}}function Re(t,e){const n=Ue(e);for(const s of t.elements)n.some(t=>It(t,s))||n.push(s);return{arrayValue:{values:n}}}class Oe extends Ae{constructor(t){super(),this.elements=t}}function xe(t,e){let n=Ue(e);for(const s of t.elements)n=n.filter(t=>!It(t,s));return{arrayValue:{values:n}}}class Me extends Ae{constructor(t,e){super(),this.It=t,this.yt=e}}function Ve(t){return lt(t.integerValue||t.doubleValue)}function Ue(t){return Lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Le&&e instanceof Le||t instanceof Oe&&e instanceof Oe?x(t.elements,e.elements,It):t instanceof Me&&e instanceof Me?It(t.yt,e.yt):t instanceof ke&&e instanceof ke}(t.transform,e.transform)}class Fe{constructor(t,e){this.version=t,this.transformResults=e}}class Be{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Be}static exists(t){return new Be(void 0,t)}static updateTime(t){return new Be(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function je(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class qe{}function Ke(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ze(t.key,Be.none()):new Qe(t.key,t.data,Be.none());{const n=t.data,s=Ut.empty();let r=new it(B.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new We(t.key,s,new at(r.toArray()),Be.none())}}function Ge(t,e,n){t instanceof Qe?function(t,e,n){const s=t.value.clone(),r=Ye(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof We?function(t,e,n){if(!je(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Ye(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Xe(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function He(t,e,n,s){return t instanceof Qe?function(t,e,n,s){if(!je(t.precondition,e))return n;const r=t.value.clone(),i=Je(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof We?function(t,e,n,s){if(!je(t.precondition,e))return n;const r=Je(t.fieldTransforms,s,e),i=e.data;return i.setAll(Xe(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,s):function(t,e,n){return je(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function $e(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=Ne(s.transform,t||null);null!=r&&(null===n&&(n=Ut.empty()),n.set(s.field,r))}return n||null}function ze(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&x(t,e,(t,e)=>Pe(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qe extends qe{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class We extends qe{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Xe(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ye(t,e,n){const s=new Map;v(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,De(o,a,n[r]))}return s}function Je(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,_e(t,i,e))}return s}class Ze extends qe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tn extends qe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn,sn;function rn(t){switch(t){default:return y();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function on(t){if(void 0===t)return g("GRPC error has no .code"),b.UNKNOWN;switch(t){case nn.OK:return b.OK;case nn.CANCELLED:return b.CANCELLED;case nn.UNKNOWN:return b.UNKNOWN;case nn.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case nn.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case nn.INTERNAL:return b.INTERNAL;case nn.UNAVAILABLE:return b.UNAVAILABLE;case nn.UNAUTHENTICATED:return b.UNAUTHENTICATED;case nn.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case nn.NOT_FOUND:return b.NOT_FOUND;case nn.ALREADY_EXISTS:return b.ALREADY_EXISTS;case nn.PERMISSION_DENIED:return b.PERMISSION_DENIED;case nn.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case nn.ABORTED:return b.ABORTED;case nn.OUT_OF_RANGE:return b.OUT_OF_RANGE;case nn.UNIMPLEMENTED:return b.UNIMPLEMENTED;case nn.DATA_LOSS:return b.DATA_LOSS;default:return y()}}(sn=nn||(nn={}))[sn.OK=0]="OK",sn[sn.CANCELLED=1]="CANCELLED",sn[sn.UNKNOWN=2]="UNKNOWN",sn[sn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",sn[sn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",sn[sn.NOT_FOUND=5]="NOT_FOUND",sn[sn.ALREADY_EXISTS=6]="ALREADY_EXISTS",sn[sn.PERMISSION_DENIED=7]="PERMISSION_DENIED",sn[sn.UNAUTHENTICATED=16]="UNAUTHENTICATED",sn[sn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",sn[sn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",sn[sn.ABORTED=10]="ABORTED",sn[sn.OUT_OF_RANGE=11]="OUT_OF_RANGE",sn[sn.UNIMPLEMENTED=12]="UNIMPLEMENTED",sn[sn.INTERNAL=13]="INTERNAL",sn[sn.UNAVAILABLE=14]="UNAVAILABLE",sn[sn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){tt(this.inner,(e,n)=>{for(const[s,r]of n)t(s,r)})}isEmpty(){return et(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new nt(j.comparator);function un(){return cn}const hn=new nt(j.comparator);function ln(...t){let e=hn;for(const n of t)e=e.insert(n.key,n);return e}function dn(t){let e=hn;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function fn(){return pn()}function gn(){return pn()}function pn(){return new an(t=>t.toString(),(t,e)=>t.isEqual(e))}const mn=new nt(j.comparator),yn=new it(j.comparator);function vn(...t){let e=yn;for(const n of t)e=e.add(n);return e}const wn=new it(O);function bn(){return wn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Tn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new En(V.min(),s,bn(),un(),vn())}}class Tn{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Tn(n,e,vn(),vn(),vn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class Sn{constructor(t,e){this.targetId=t,this.At=e}}class Cn{constructor(t,e,n=ct.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class An{constructor(){this.Rt=0,this.bt=Nn(),this.Pt=ct.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=vn(),e=vn(),n=vn();return this.bt.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:y()}}),new Tn(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Nn()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class _n{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=un(),this.qt=Dn(),this.Kt=new it(O)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach((t,n)=>{this.Ht(n)&&e(n)})}Yt(t){const e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){const t=s.target;if(Ht(t))if(0===n){const n=new j(t.path);this.jt(e,n,Ft.newNoDocument(n,V.min()))}else v(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach((n,s)=>{const r=this.Xt(s);if(r){if(n.current&&Ht(r.target)){const e=new j(r.target.path);null!==this.Ut.get(e)||this.ee(s,e)||this.jt(s,e,Ft.newNoDocument(e,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}});let n=vn();this.qt.forEach((t,e)=>{let s=!0;e.forEachWhile(t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)}),s&&(n=n.add(t))}),this.Ut.forEach((e,n)=>n.setReadTime(t));const s=new En(t,e,this.Kt,this.Ut,n);return this.Ut=un(),this.qt=Dn(),this.Kt=new it(O),s}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new An,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new it(O),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new An),this.Bt.getRemoteKeysForTarget(t).forEach(e=>{this.jt(t,e,null)})}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Dn(){return new nt(j.comparator)}function Nn(){return new nt(j.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ln=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Rn{constructor(t,e){this.databaseId=t,this.gt=e}}function On(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xn(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Mn(t,e){return On(t,e.toTimestamp())}function Vn(t){return v(!!t),V.fromTimestamp(function(t){const e=ht(t);return new M(e.seconds,e.nanos)}(t))}function Un(t,e){return function(t){return new P(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Pn(t){const e=P.fromString(t);return v(as(e)),e}function Fn(t,e){return Un(t.databaseId,e.path)}function Bn(t,e){const n=Pn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Gn(n))}function jn(t,e){return Un(t.databaseId,e)}function qn(t){const e=Pn(t);return 4===e.length?P.emptyPath():Gn(e)}function Kn(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Hn(t,e,n){return{name:Fn(t,e),fields:n.value.mapValue.fields}}function $n(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.gt?(v(void 0===e||"string"==typeof e),ct.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),ct.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:on(t.code);return new E(e,t.message||"")}(o);n=new Cn(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Bn(t,s.document.name),i=Vn(s.document.updateTime),o=new Ut({mapValue:{fields:s.document.fields}}),a=Ft.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new In(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Bn(t,s.document),i=s.readTime?Vn(s.readTime):V.min(),o=Ft.newNoDocument(r,i),a=s.removedTargetIds||[];n=new In([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Bn(t,s.document),i=s.removedTargetIds||[];n=new In([],i,r,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new en(s),i=t.targetId;n=new Sn(i,r)}}return n}function zn(t,e){let n;if(e instanceof Qe)n={update:Hn(t,e.key,e.value)};else if(e instanceof Ze)n={delete:Fn(t,e.key)};else if(e instanceof We)n={update:Hn(t,e.key,e.data),updateMask:os(e.fieldMask)};else{if(!(e instanceof tn))return y();n={verify:Fn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ke)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Le)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Oe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Me)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Mn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Qn(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Vn(t.updateTime):Vn(e);return n.isEqual(V.min())&&(n=Vn(e)),new Fe(n,t.transformResults||[])}(t,e))):[]}function Wn(t,e){return{documents:[jn(t,e.path)]}}function Xn(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=jn(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jn(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(Ot(t.value))return{unaryFilter:{field:ns(t.field),op:"IS_NAN"}};if(Rt(t.value))return{unaryFilter:{field:ns(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ot(t.value))return{unaryFilter:{field:ns(t.field),op:"IS_NOT_NAN"}};if(Rt(t.value))return{unaryFilter:{field:ns(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(t.field),op:es(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:ns(t.field),direction:ts(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.gt||vt(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Yn(t){let e=qn(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){v(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Zn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new ne(ss(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,vt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ee(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ee(n,e)}(n.endAt)),ae(e,r,o,i,a,"F",c,u)}function Jn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Zn(t){return t?void 0!==t.unaryFilter?[is(t)]:void 0!==t.fieldFilter?[rs(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Zn(t)).reduce((t,e)=>t.concat(e)):y():[]}function ts(t){return kn[t]}function es(t){return Ln[t]}function ns(t){return{fieldPath:t.canonicalString()}}function ss(t){return B.fromServerFormat(t.fieldPath)}function rs(t){return $t.create(ss(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function is(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ss(t.unaryFilter.field);return $t.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ss(t.unaryFilter.field);return $t.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ss(t.unaryFilter.field);return $t.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ss(t.unaryFilter.field);return $t.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function os(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function as(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],us=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],hs=us;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ls{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Ge(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=He(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=He(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=gn();return this.mutations.forEach(s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=Ke(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(V.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),vn())}isEqual(t){return this.batchId===t.batchId&&x(this.mutations,t.mutations,(t,e)=>ze(t,e))&&x(this.baseMutations,t.baseMutations,(t,e)=>ze(t,e))}}class ds{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){v(t.mutations.length===n.length);let s=mn;const r=t.mutations;for(let i=0;i<r.length;i++)s=s.insert(r[i].key,n[i].version);return new ds(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,e,n,s,r=V.min(),i=V.min(),o=ct.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new gs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t){this.re=t}}function ms(t){const e=Yn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?pe(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(lt(t.integerValue));else if("doubleValue"in t){const n=lt(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),wt(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(""+(n.seconds||"")),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(dt(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?Vt(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):y()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const s of Object.keys(n))this._e(s,e),this.ae(n[s],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const s of n)this.ae(s,e)}ge(t,e){this.le(e,37),j.fromName(t).path.forEach(t=>{this.le(e,60),this.Ie(t,e)})}le(t,e){t.fe(e)}we(t){t.fe(2)}}ys.Te=new ys;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{constructor(){this.Ye=new ws}addToCollectionParentIndex(t,e){return this.Ye.add(e),X.resolve()}getCollectionParents(t,e){return X.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return X.resolve()}deleteFieldIndex(t,e){return X.resolve()}getDocumentsMatchingTarget(t,e){return X.resolve(null)}getIndexType(t,e){return X.resolve(0)}getFieldIndexes(t,e){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,e){return X.resolve(H.min())}getMinOffsetFromCollectionGroup(t,e){return X.resolve(H.min())}updateCollectionGroup(t,e,n){return X.resolve()}updateIndexEntries(t,e){return X.resolve()}}class ws{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new it(P.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new it(P.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class bs{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new bs(t,bs.DEFAULT_COLLECTION_PERCENTILE,bs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bs.DEFAULT_COLLECTION_PERCENTILE=10,bs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bs.DEFAULT=new bs(41943040,bs.DEFAULT_COLLECTION_PERCENTILE,bs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bs.DISABLED=new bs(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Es(0)}static vn(){return new Es(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(){this.changes=new an(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ft.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?X.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.getBaseDocument(t,e,n))).next(t=>(null!==n&&He(n.mutation,t,at.empty(),M.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,vn()).next(()=>e))}getLocalViewOfDocuments(t,e,n=vn()){const s=fn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(t=>{let e=ln();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=fn();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,vn()))}populateOverlays(t,e,n){const s=[];return n.forEach(t=>{e.has(t)||s.push(t)}),this.documentOverlayCache.getOverlays(t,s).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,s){let r=un();const i=pn(),o=pn();return e.forEach((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof We)?r=r.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),He(o.mutation,e,o.mutation.getFieldMask(),M.now()))}),this.recalculateAndSaveOverlays(t,r).next(t=>(t.forEach((t,e)=>i.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new Is(e,null!==(n=i.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=pn();let s=new nt((t,e)=>t-e),r=vn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const r of t)r.keys().forEach(t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||at.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||vn()).add(t);s=s.insert(r.batchId,a)})}).next(()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=gn();c.forEach(t=>{if(!r.has(t)){const s=Ke(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}}),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return X.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return j.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):de(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):X.resolve(fn());let o=-1,a=r;return i.next(e=>X.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?X.resolve():this.getBaseDocument(t,e,n).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,r)).next(()=>this.computeViews(t,a,e,vn())).next(t=>({batchId:o,changes:dn(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(t=>{let e=ln();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=ln();return this.indexManager.getCollectionParents(t,s).next(i=>X.forEach(i,i=>{const o=function(t,e){return new oe(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next(r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId))).next(t=>{t.forEach((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,Ft.newInvalidDocument(n)))});let n=ln();return s.forEach((s,r)=>{const i=t.get(s);void 0!==i&&He(i.mutation,r,at.empty(),M.now()),we(e,r)&&(n=n.insert(s,r))}),n})}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):X.resolve(Ft.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return X.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Vn(n.createTime)}),X.resolve()}getNamedQuery(t,e){return X.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:ms(t.bundledQuery),readTime:Vn(t.readTime)}}(e)),X.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.overlays=new nt(j.comparator),this.es=new Map}getOverlay(t,e){return X.resolve(this.overlays.get(e))}getOverlays(t,e){const n=fn();return X.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,s)=>{this.ue(t,e,s)}),X.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach(t=>this.overlays=this.overlays.remove(t)),this.es.delete(n)),X.resolve()}getOverlaysForCollection(t,e,n){const s=fn(),r=e.length+1,i=new j(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return X.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new nt((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=fn(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=fn(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=s)break;return X.resolve(o)}ue(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new fs(e,n));let r=this.es.get(e);void 0===r&&(r=vn(),this.es.set(e,r)),this.es.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.ns=new it(Ds.ss),this.rs=new it(Ds.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ds(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.cs(new Ds(t,e))}hs(t,e){t.forEach(t=>this.removeReference(t,e))}ls(t){const e=new j(new P([])),n=new Ds(e,t),s=new Ds(e,t+1),r=[];return this.rs.forEachInRange([n,s],t=>{this.cs(t),r.push(t.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new j(new P([])),n=new Ds(e,t),s=new Ds(e,t+1);let r=vn();return this.rs.forEachInRange([n,s],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new Ds(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ds{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return j.comparator(t.key,e.key)||O(t._s,e._s)}static os(t,e){return O(t._s,e._s)||j.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new it(Ds.ss)}checkEmpty(t){return X.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new ls(r,e,n,s);this.mutationQueue.push(i);for(const o of s)this.gs=this.gs.add(new Ds(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return X.resolve(i)}lookupMutationBatch(t,e){return X.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),r=s<0?0:s;return X.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ds(e,0),s=new Ds(e,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,s],t=>{const e=this.ys(t._s);r.push(e)}),X.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new it(O);return e.forEach(t=>{const e=new Ds(t,0),s=new Ds(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],t=>{n=n.add(t._s)})}),X.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;j.isDocumentKey(r)||(r=r.child(""));const i=new Ds(new j(r),0);let o=new it(O);return this.gs.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)},i),X.resolve(this.Is(o))}Is(t){const e=[];return t.forEach(t=>{const n=this.ys(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return X.forEach(e.mutations,s=>{const r=new Ds(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.gs=n})}An(t){}containsKey(t,e){const n=new Ds(e,0),s=this.gs.firstAfterOrEqual(n);return X.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t){this.Es=t,this.docs=new nt(j.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return X.resolve(n?n.document.mutableCopy():Ft.newInvalidDocument(e))}getEntries(t,e){let n=un();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ft.newInvalidDocument(t))}),X.resolve(n)}getAllFromCollection(t,e,n){let s=un();const r=new j(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||$(G(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return X.resolve(s)}getAllFromCollectionGroup(t,e,n,s){y()}As(t,e){return X.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Ls(this)}getSize(t){return X.resolve(this.size)}}class Ls extends Ts{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)}),X.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t){this.persistence=t,this.Rs=new an(t=>qt(t),Gt),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.bs=0,this.Ps=new _s,this.targetCount=0,this.vs=Es.Pn()}forEachTarget(t,e){return this.Rs.forEach((t,n)=>e(n)),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),X.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Es(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,X.resolve()}updateTargetData(t,e){return this.Dn(e),X.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Rs.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)}),X.waitFor(r).next(()=>s)}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return X.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),X.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach(e=>{r.push(s.markPotentiallyOrphaned(t,e))}),X.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),X.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return X.resolve(n)}containsKey(t,e){return X.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new J(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Rs(this),this.indexManager=new vs,this.remoteDocumentCache=function(t){return new ks(t)}(t=>this.referenceDelegate.xs(t)),this.It=new ps(e),this.Ns=new Cs(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new As,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Ns(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const s=new xs(this.Ss.next());return this.referenceDelegate.ks(),n(s).next(t=>this.referenceDelegate.Os(s).next(()=>t)).toPromise().then(t=>(s.raiseOnCommittedEvent(),t))}Ms(t,e){return X.or(Object.values(this.Vs).map(n=>()=>n.containsKey(t,e)))}}class xs extends Q{constructor(t){super(),this.currentSequenceNumber=t}}class Ms{constructor(t){this.persistence=t,this.Fs=new _s,this.$s=null}static Bs(t){return new Ms(t)}get Ls(){if(this.$s)return this.$s;throw y()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),X.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),X.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),X.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach(t=>this.Ls.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ls.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.Ls,n=>{const s=j.fromPath(n);return this.Us(t,s).next(t=>{t||e.removeEntry(s,V.min())})}).next(()=>(this.$s=null,e.apply(t)))}updateLimboDocument(t,e){return this.Us(t,e).next(t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())})}xs(t){return 0}Us(t,e){return X.or([()=>X.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=vn(),s=vn();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Vs(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next(r=>r||this.Oi(t,e,s,n)).next(n=>n||this.Mi(t,e))}ki(t,e){if(ue(e))return X.resolve(null);let n=ge(e);return this.indexManager.getIndexType(t,n).next(s=>0===s?null:(null!==e.limit&&1===s&&(e=pe(e,null,"F"),n=ge(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const r=vn(...s);return this.Ni.getDocuments(t,r).next(s=>this.indexManager.getMinOffset(t,n).next(n=>{const i=this.Fi(e,s);return this.$i(e,i,r,n.readTime)?this.ki(t,pe(e,null,"F")):this.Bi(t,i,e,n)}))})))}Oi(t,e,n,s){return ue(e)||s.isEqual(V.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next(r=>{const o=this.Fi(e,r);return this.$i(e,o,n,s)?this.Mi(t,e):(d()<=i["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ve(e)),this.Bi(t,o,e,K(s,-1)))})}Fi(t,e){let n=new it(Ee(t));return e.forEach((e,s)=>{we(t,s)&&(n=n.add(s))}),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mi(t,e){return d()<=i["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",ve(e)),this.Ni.getDocumentsMatchingQuery(t,e,H.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new nt(O),this.qi=new an(t=>qt(t),Gt),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ss(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ui))}}function Fs(t,e,n,s){return new Ps(t,e,n,s)}async function Bs(t,e){const n=w(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next(r=>(s=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const r=[],i=[];let o=vn();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({ji:t,removedBatchIds:r,addedBatchIds:i}))})})}function js(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const s=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=X.resolve();return i.forEach(t=>{o=o.next(()=>s.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);v(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,r))}(n,t,e,r).next(()=>r.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=vn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,s))})}function qs(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function Ks(t,e){const n=w(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const o=[];e.targetChanges.forEach((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ct.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Cs.updateTargetData(t,u))});let a=un(),c=vn();if(e.documentUpdates.forEach(s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))}),o.push(Gs(t,i,e.documentUpdates).next(t=>{a=t.Wi,c=t.zi})),!s.isEqual(V.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next(e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s));o.push(e)}return X.waitFor(o).next(()=>i.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.Ui=r,t))}function Gs(t,e,n){let s=vn(),r=vn();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=un();return n.forEach((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(V.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Wi:s,zi:r}})}function Hs(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function $s(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let s;return n.Cs.getTargetData(t,e).next(r=>r?(s=r,X.resolve(s)):n.Cs.allocateTargetId(t).next(r=>(s=new gs(e,r,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next(()=>s))))}).then(t=>{const s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t})}async function zs(t,e,n){const s=w(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,t=>s.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!Y(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Qs(t,e,n){const s=w(t);let r=V.min(),i=vn();return s.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const s=w(t),r=s.qi.get(n);return void 0!==r?X.resolve(s.Ui.get(r)):s.Cs.getTargetData(e,n)}(s,t,ge(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>s.Li.getDocumentsMatchingQuery(t,e,n?r:V.min(),n?i:vn())).next(t=>(Ws(s,be(e),t),{documents:t,Hi:i})))}function Ws(t,e,n){let s=t.Ki.get(e)||V.min();n.forEach((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)}),t.Ki.set(e,s)}class Xs{constructor(){this.activeTargetIds=bn()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ys{constructor(){this.Lr=new Xs,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Xs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,s,r){const i=this.ho(t,e);f("RestConnection","Sending: ",i,n);const o={};return this.lo(o,s,r),this.fo(t,i,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}_o(t,e,n,s,r,i){return this.ao(t,e,n,s,r)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}ho(t,e){const n=tr[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,s){return new Promise((r,i)=>{const o=new a["g"];o.setWithCredentials(!0),o.listenOnce(a["c"].COMPLETE,()=>{var e;try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const n=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(n)),r(n);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),i(new E(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const s=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',s,"response text:",o.getResponseText()),s>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const n=null===(e=t)||void 0===e?void 0:e.error;if(n&&n.status&&n.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(n.status);i(new E(t,n.message))}else i(new E(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new E(b.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(s);o.send(e,"POST",c,n,15)})}wo(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a["d"]({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=s.join("");f("Connection","Creating WebChannel: "+c,o);const u=r.createWebChannel(c,o);let h=!1,l=!1;const d=new er({Hr:t=>{l?f("Connection","Not sending because WebChannel is closed:",t):(h||(f("Connection","Opening WebChannel transport."),u.open(),h=!0),f("Connection","WebChannel sending:",t),u.send(t))},Jr:()=>u.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(u,a["f"].EventType.OPEN,()=>{l||f("Connection","WebChannel transport opened.")}),g(u,a["f"].EventType.CLOSE,()=>{l||(l=!0,f("Connection","WebChannel transport closed"),d.io())}),g(u,a["f"].EventType.ERROR,t=>{l||(l=!0,p("Connection","WebChannel transport errored:",t),d.io(new E(b.UNAVAILABLE,"The operation could not be completed")))}),g(u,a["f"].EventType.MESSAGE,t=>{var e;if(!l){const n=t.data[0];v(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){f("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=nn[t];if(void 0!==e)return on(e)}(t),n=r.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),l=!0,d.io(new E(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.ro(n)}}),g(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){return new Rn(t,!0)}class ir{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&f("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,n,s,r,i,o,a){this.Hs=t,this.vo=n,this.Vo=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ir(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.So===e&&this.Go(t,n)},e=>{t(()=>{const t=new E(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)})})}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{n(()=>this.Qo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget(()=>this.So===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ar extends or{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.It=r}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=$n(this.It,t),n=function(t){if(!("targetChange"in t))return V.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?V.min():e.readTime?Vn(e.readTime):V.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Kn(this.It),e.addTarget=function(t,e){let n;const s=e.target;return n=Ht(s)?{documents:Wn(t,s)}:{query:Xn(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=xn(t,e.resumeToken):e.snapshotVersion.compareTo(V.min())>0&&(n.readTime=On(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=Jn(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Kn(this.It),e.removeTarget=t,this.Bo(e)}}class cr extends or{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=Qn(t.writeResults,t.commitTime),n=Vn(t.commitTime);return this.listener.Zo(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Kn(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>zn(this.It,t))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.It=s,this.nu=!1}su(){if(this.nu)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.ao(t,e,n,s,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(b.UNKNOWN,t.toString())})}_o(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection._o(t,e,n,r,i,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(b.UNKNOWN,t.toString())})}terminate(){this.nu=!0}}class hr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: "+t.toString()),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(g(e),this.ou=!1):f("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(t=>{n.enqueueAndForget(async()=>{br(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e._u.add(4),await fr(e),e.gu.set("Unknown"),e._u.delete(4),await dr(e)}(this))})}),this.gu=new hr(n,s)}}async function dr(t){if(br(t))for(const e of t.wu)await e(!0)}async function fr(t){for(const e of t.wu)await e(!1)}function gr(t,e){const n=w(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),wr(n)?vr(n):Pr(n).ko()&&mr(n,e))}function pr(t,e){const n=w(t),s=Pr(n);n.du.delete(e),s.ko()&&yr(n,e),0===n.du.size&&(s.ko()?s.Fo():br(n)&&n.gu.set("Unknown"))}function mr(t,e){t.yu.Mt(e.targetId),Pr(t).zo(e)}function yr(t,e){t.yu.Mt(e),Pr(t).Ho(e)}function vr(t){t.yu=new _n({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Pr(t).start(),t.gu.uu()}function wr(t){return br(t)&&!Pr(t).No()&&t.du.size>0}function br(t){return 0===w(t)._u.size}function Er(t){t.yu=void 0}async function Tr(t){t.du.forEach((e,n)=>{mr(t,e)})}async function Ir(t,e){Er(t),wr(t)?(t.gu.hu(e),vr(t)):t.gu.set("Unknown")}async function Sr(t,e,n){if(t.gu.set("Online"),e instanceof Cn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Cr(t,n)}else if(e instanceof In?t.yu.Gt(e):e instanceof Sn?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(V.min()))try{const e=await qs(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.du.get(s);r&&t.du.set(s,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ct.EMPTY_BYTE_STRING,n.snapshotVersion)),yr(t,e);const s=new gs(n.target,e,1,n.sequenceNumber);mr(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await Cr(t,e)}}async function Cr(t,e,n){if(!Y(e))throw e;t._u.add(1),await fr(t),t.gu.set("Offline"),n||(n=()=>qs(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await dr(t)})}function Ar(t,e){return e().catch(n=>Cr(t,n,e))}async function _r(t){const e=w(t),n=Fr(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Dr(e);)try{const t=await Hs(e.localStore,s);if(null===t){0===e.fu.length&&n.Fo();break}s=t.batchId,Nr(e,t)}catch(t){await Cr(e,t)}kr(e)&&Lr(e)}function Dr(t){return br(t)&&t.fu.length<10}function Nr(t,e){t.fu.push(e);const n=Fr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function kr(t){return br(t)&&!Fr(t).No()&&t.fu.length>0}function Lr(t){Fr(t).start()}async function Rr(t){Fr(t).eu()}async function Or(t){const e=Fr(t);for(const n of t.fu)e.Xo(n.mutations)}async function xr(t,e,n){const s=t.fu.shift(),r=ds.from(s,e,n);await Ar(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await _r(t)}async function Mr(t,e){e&&Fr(t).Yo&&await async function(t,e){if(n=e.code,rn(n)&&n!==b.ABORTED){const n=t.fu.shift();Fr(t).Mo(),await Ar(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await _r(t)}var n}(t,e),kr(t)&&Lr(t)}async function Vr(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const s=br(n);n._u.add(3),await fr(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await dr(n)}async function Ur(t,e){const n=w(t);e?(n._u.delete(2),await dr(n)):e||(n._u.add(2),await fr(n),n.gu.set("Unknown"))}function Pr(t){return t.pu||(t.pu=function(t,e,n){const s=w(t);return s.su(),new ar(e,s.connection,s.authCredentials,s.appCheckCredentials,s.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Tr.bind(null,t),Zr:Ir.bind(null,t),Wo:Sr.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),wr(t)?vr(t):t.gu.set("Unknown")):(await t.pu.stop(),Er(t))})),t.pu}function Fr(t){return t.Iu||(t.Iu=function(t,e,n){const s=w(t);return s.su(),new cr(e,s.connection,s.authCredentials,s.appCheckCredentials,s.It,n)}(t.datastore,t.asyncQueue,{Yr:Rr.bind(null,t),Zr:Mr.bind(null,t),tu:Or.bind(null,t),Zo:xr.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await _r(t)):(await t.Iu.stop(),t.fu.length>0&&(f("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Br{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new Br(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jr(t,e){if(g("AsyncQueue",`${e}: ${t}`),Y(t))return new E(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.comparator=t?(e,n)=>t(e,n)||j.comparator(e.key,n.key):(t,e)=>j.comparator(t.key,e.key),this.keyedMap=ln(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new qr(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qr))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new qr;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.Tu=new nt(j.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):y():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Gr{constructor(t,e,n,s,r,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Gr(t,e,qr.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&me(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.Au=void 0,this.listeners=[]}}class $r{constructor(){this.queries=new an(t=>ye(t),me),this.onlineState="Unknown",this.Ru=new Set}}async function zr(t,e){const n=w(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Hr),r)try{i.Au=await n.onListen(s)}catch(t){const n=jr(t,`Initialization of query '${ve(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Yr(n)}async function Qr(t,e){const n=w(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Wr(t,e){const n=w(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(r)&&(s=!0);e.Au=r}}s&&Yr(n)}function Xr(t,e,n){const s=w(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Yr(t){t.Ru.forEach(t=>{t.next()})}class Jr{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Gr(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Gr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zr{constructor(t){this.key=t}}class ti{constructor(t){this.key=t}}class ei{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=vn(),this.mutatedKeys=vn(),this.Gu=Ee(t),this.Qu=new qr(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Kr,s=e?e.Qu:this.Qu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((t,e)=>{const u=s.get(t),h=we(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Qu:i,zu:n,$i:o,mutatedKeys:r}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc)),this.Ju(n);const i=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new Gr(this.query,t.Qu,s,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Kr,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=vn(),this.Qu.forEach(t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))});const e=[];return t.forEach(t=>{this.Ku.has(t)||e.push(new ti(t))}),this.Ku.forEach(n=>{t.has(n)||e.push(new Zr(n))}),e}tc(t){this.Uu=t.Hi,this.Ku=vn();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Gr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class ni{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class si{constructor(t){this.key=t,this.nc=!1}}class ri{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new an(t=>ye(t),me),this.rc=new Map,this.oc=new Set,this.uc=new nt(j.comparator),this.cc=new Map,this.ac=new _s,this.hc={},this.lc=new Map,this.fc=Es.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function ii(t,e){const n=Si(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const t=await $s(n.localStore,ge(e));n.isPrimaryClient&&gr(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await oi(n,e,s,"current"===i,t.resumeToken)}return r}async function oi(t,e,n,s,r){t._c=(e,n,s)=>async function(t,e,n,s){let r=e.view.Wu(n);r.$i&&(r=await Qs(t.localStore,e.query,!1).then(({documents:t})=>e.view.Wu(t,r)));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return vi(t,e.targetId,o.Xu),o.snapshot}(t,e,n,s);const i=await Qs(t.localStore,e,!0),o=new ei(e,i.Hi),a=o.Wu(i.documents),c=Tn.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,c);vi(t,n,u.Xu);const h=new ni(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function ai(t,e){const n=w(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(t=>!me(t,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await zs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),pr(n.remoteStore,s.targetId),mi(n,s.targetId)}).catch(W)):(mi(n,s.targetId),await zs(n.localStore,s.targetId,!0))}async function ci(t,e,n){const s=Ci(t);try{const t=await function(t,e){const n=w(t),s=M.now(),r=e.reduce((t,e)=>t.add(e.key),vn());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=un(),c=vn();return n.Gi.getEntries(t,r).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(r=>{i=r;const o=[];for(const t of e){const e=$e(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new We(t.key,e,Pt(e.value.mapValue),Be.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)}).next(e=>{o=e;const s=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)})}).then(()=>({batchId:o.batchId,changes:dn(i)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.hc[t.currentUser.toKey()];s||(s=new nt(O)),s=s.insert(e,n),t.hc[t.currentUser.toKey()]=s}(s,t.batchId,n),await Ei(s,t.changes),await _r(s.remoteStore)}catch(t){const e=jr(t,"Failed to persist write");n.reject(e)}}async function ui(t,e){const n=w(t);try{const t=await Ks(n.localStore,e);e.targetChanges.forEach((t,e)=>{const s=n.cc.get(e);s&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.nc=!0:t.modifiedDocuments.size>0?v(s.nc):t.removedDocuments.size>0&&(v(s.nc),s.nc=!1))}),await Ei(n,t,e)}catch(t){await W(t)}}function hi(t,e,n){const s=w(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ic.forEach((n,s)=>{const r=s.view.bu(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let s=!1;n.queries.forEach((t,n)=>{for(const r of n.listeners)r.bu(e)&&(s=!0)}),s&&Yr(n)}(s.eventManager,e),t.length&&s.sc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function li(t,e,n){const s=w(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let t=new nt(j.comparator);t=t.insert(i,Ft.newNoDocument(i,V.min()));const n=vn().add(i),r=new En(V.min(),new Map,new it(O),t,n);await ui(s,r),s.uc=s.uc.remove(i),s.cc.delete(e),bi(s)}else await zs(s.localStore,e,!1).then(()=>mi(s,e,n)).catch(W)}async function di(t,e){const n=w(t),s=e.batch.batchId;try{const t=await js(n.localStore,e);pi(n,s,null),gi(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ei(n,t)}catch(t){await W(t)}}async function fi(t,e,n){const s=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(v(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s)).next(()=>n.localDocuments.getDocuments(t,s))})}(s.localStore,e);pi(s,e,n),gi(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ei(s,t)}catch(n){await W(n)}}function gi(t,e){(t.lc.get(e)||[]).forEach(t=>{t.resolve()}),t.lc.delete(e)}function pi(t,e,n){const s=w(t);let r=s.hc[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function mi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(e=>{t.ac.containsKey(e)||yi(t,e)})}function yi(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(pr(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),bi(t))}function vi(t,e,n){for(const s of n)s instanceof Zr?(t.ac.addReference(s.key,e),wi(t,s)):s instanceof ti?(f("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||yi(t,s.key)):y()}function wi(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(f("SyncEngine","New document in limbo: "+n),t.oc.add(s),bi(t))}function bi(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new j(P.fromString(e)),s=t.fc.next();t.cc.set(s,new si(n)),t.uc=t.uc.insert(n,s),gr(t.remoteStore,new gs(ge(ce(n.path)),s,2,J.at))}}async function Ei(t,e,n){const s=w(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((t,a)=>{o.push(s._c(a,e,n).then(t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Vs.Ci(a.targetId,t);i.push(e)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>X.forEach(e,e=>X.forEach(e.Si,s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s)).next(()=>X.forEach(e.Di,s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))}catch(t){if(!Y(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Ui.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(t,r)}}}(s.localStore,i))}async function Ti(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await Bs(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach(t=>{t.forEach(t=>{t.reject(new E(b.CANCELLED,e))})}),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ei(n,t.ji)}}function Ii(t,e){const n=w(t),s=n.cc.get(e);if(s&&s.nc)return vn().add(s.key);{let t=vn();const s=n.rc.get(e);if(!s)return t;for(const e of s){const s=n.ic.get(e);t=t.unionWith(s.view.ju)}return t}}function Si(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ui.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ii.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=li.bind(null,e),e.sc.Wo=Wr.bind(null,e.eventManager),e.sc.wc=Xr.bind(null,e.eventManager),e}function Ci(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=di.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fi.bind(null,e),e}class Ai{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=rr(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Fs(this.persistence,new Us,t.initialUser,this.It)}yc(t){return new Os(Ms.Bs,this.It)}gc(t){return new Ys}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _i{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hi(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ti.bind(null,this.syncEngine),await Ur(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new $r}createDatastore(t){const e=rr(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new nr(s));var s;return function(t,e,n,s){return new ur(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>hi(this.syncEngine,t,0),i=Zs.C()?new Zs:new Js,new lr(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new ri(t,e,n,s,r,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);f("RemoteStore","RemoteStore shutting down."),e._u.add(5),await fr(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t,e,n){if(!n)throw new E(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ni(t,e,n,s){if(!0===e&&!0===s)throw new E(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ki(t){if(!j.isDocumentKey(t))throw new E(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Li(t){if(j.isDocumentKey(t))throw new E(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ri(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Oi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ri(t);throw new E(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xi=new Map;class Mi{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ni("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mi(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new S;switch(t.type){case"gapi":const e=t.client;return new D(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new E(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=xi.get(t);e&&(f("ComponentProvider","Removing Datastore"),xi.delete(t),e.terminate())}(this),Promise.resolve()}}function Ui(t,e,n,s={}){var r;const i=(t=Oi(t,Vi))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&p("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=u.MOCK_USER;else{e=Object(o["e"])(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new E(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(i)}t._authCredentials=new C(new I(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pi(this.firestore,t,this._key)}}class Fi{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Fi(this.firestore,t,this._query)}}class Bi extends Fi{constructor(t,e,n){super(t,e,ce(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pi(this.firestore,null,new j(t))}withConverter(t){return new Bi(this.firestore,t,this._path)}}function ji(t,e,...n){if(t=Object(o["i"])(t),Di("collection","path",e),t instanceof Vi){const s=P.fromString(e,...n);return Li(s),new Bi(t,null,s)}{if(!(t instanceof Pi||t instanceof Bi))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return Li(s),new Bi(t.firestore,null,s)}}function qi(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=R.R()),Di("doc","path",e),t instanceof Vi){const s=P.fromString(e,...n);return ki(s),new Pi(t,null,new j(s))}{if(!(t instanceof Pi||t instanceof Bi))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return ki(s),new Pi(t.firestore,t instanceof Bi?t.converter:null,new j(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):g("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=u.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(f("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=jr(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Hi(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async t=>{s.isEqual(t)||(await Bs(e.localStore,t),s=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function $i(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zi(t);f("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(t=>Vr(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Vr(e.remoteStore,n)),t.onlineComponents=e}async function zi(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Hi(t,new Ai)),t.offlineComponents}async function Qi(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await $i(t,new _i)),t.onlineComponents}function Wi(t){return Qi(t).then(t=>t.syncEngine)}async function Xi(t){const e=await Qi(t),n=e.eventManager;return n.onListen=ii.bind(null,e.syncEngine),n.onUnlisten=ai.bind(null,e.syncEngine),n}function Yi(t,e,n={}){const s=new T;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,s,r){const i=new Ki({next:n=>{e.enqueueAndForget(()=>Qr(t,o)),n.fromCache&&"server"===s.source?r.reject(new E(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Jr(n,i,{includeMetadataChanges:!0,Nu:!0});return zr(t,o)}(await Xi(t),t.asyncQueue,e,n,s)),s.promise}class Ji{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ir(this,"async_queue_retry"),this.Wc=()=>{const t=sr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=sr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=sr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const e=new T;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Y(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const e=this.Bc.then(()=>(this.Gc=!0,t().catch(t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw g("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Gc=!1,t))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const s=Br.createAndSchedule(this,t,e,n,t=>this.Yc(t));return this.qc.push(s),s}zc(){this.Kc&&y()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class Zi extends Vi{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ji,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||no(this),this._firestoreClient.terminate()}}function to(t,e){const n="object"==typeof t?t:Object(s["e"])(),r="string"==typeof t?t:e||"(default)",i=Object(s["b"])(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=Object(o["h"])("firestore");t&&Ui(i,...t)}return i}function eo(t){return t._firestoreClient||no(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function no(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new mt(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Gi(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{constructor(t){this._byteString=t}static fromBase64String(t){try{return new so(ct.fromBase64String(t))}catch(t){throw new E(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new so(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=/^__.*__$/;class co{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new We(t,this.data,this.fieldMask,e,this.fieldTransforms):new Qe(t,this.data,e,this.fieldTransforms)}}function uo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class ho{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=s,void 0===r&&this.na(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new ho(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.ua(t),s}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.na(),s}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Io(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(uo(this.sa)&&ao.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class lo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||rr(t)}da(t,e,n,s=!1){return new ho({sa:t,methodName:e,fa:n,path:B.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function fo(t){const e=t._freezeSettings(),n=rr(t._databaseId);return new lo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function go(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);wo("Data must be an object, but it was:",o,s);const a=yo(s,o);let c,u;if(i.merge)c=new at(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=bo(e,s,n);if(!o.contains(r))throw new E(b.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);So(t,r)||t.push(r)}c=new at(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new co(new Ut(a),c,u)}function po(t,e,n,s=!1){return mo(n,t.da(s?4:3,e))}function mo(t,e){if(vo(t=Object(o["i"])(t)))return wo("Unsupported field value:",e,t),yo(t,e);if(t instanceof io)return function(t,e){if(!uo(e.sa))throw e.ha(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.ha(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=mo(r,e.aa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ce(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:On(e.It,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:On(e.It,n)}}if(t instanceof oo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof so)return{bytesValue:xn(e.It,t._byteString)};if(t instanceof Pi){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Un(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha("Unsupported field value: "+Ri(t))}(t,e)}function yo(t,e){const n={};return et(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tt(t,(t,s)=>{const r=mo(s,e.ra(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function vo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof oo||t instanceof so||t instanceof Pi||t instanceof io)}function wo(t,e,n){if(!vo(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Ri(n);throw"an object"===s?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function bo(t,e,n){if((e=Object(o["i"])(e))instanceof ro)return e._internalPath;if("string"==typeof e)return To(t,e);throw Io("Field path arguments must be of type string or ",t,!1,void 0,n)}const Eo=new RegExp("[~\\*/\\[\\]]");function To(t,e,n){if(e.search(Eo)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ro(...e.split("."))._internalPath}catch(s){throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Io(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+s),o&&(c+=" in document "+r),c+=")"),new E(b.INVALID_ARGUMENT,a+t+c)}function So(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Pi(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ao(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(_o("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ao extends Co{data(){return super.data()}}function _o(t,e){return"string"==typeof e?To(t,e):e instanceof ro?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new E(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class No{}function ko(t,...e){for(const n of e)t=n._apply(t);return t}class Lo extends No{constructor(t,e,n){super(),this.ma=t,this.ga=e,this.ya=n,this.type="where"}_apply(t){const e=fo(t.firestore),n=function(t,e,n,s,r,i,o){let a;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new E(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Vo(o,i);const e=[];for(const n of o)e.push(Mo(s,t,n));a={arrayValue:{values:e}}}else a=Mo(s,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Vo(o,i),a=po(n,e,o,"in"===i||"not-in"===i);const c=$t.create(r,i,a);return function(t,e){if(e.dt()){const n=le(t);if(null!==n&&!n.isEqual(e.field))throw new E(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const s=he(t);null!==s&&Uo(t,e.field,s)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.ma,this.ga,this.ya);return new Fi(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new oe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Ro(t,e,n){const s=e,r=_o("where",t);return new Lo(r,s,n)}class Oo extends No{constructor(t,e){super(),this.ma=t,this.pa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new E(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new E(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new ne(e,n);return function(t,e){if(null===he(t)){const n=le(t);null!==n&&Uo(t,n,e.field)}}(t,s),s}(t._query,this.ma,this.pa);return new Fi(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new oe(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function xo(t,e="asc"){const n=e,s=_o("orderBy",t);return new Oo(s,n)}function Mo(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new E(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!de(e)&&-1!==n.indexOf("/"))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(P.fromString(n));if(!j.isDocumentKey(s))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Nt(t,new j(s))}if(n instanceof Pi)return Nt(t,n._key);throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ri(n)}.`)}function Vo(t,e){if(!Array.isArray(t)||0===t.length)throw new E(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Uo(t,e,n){if(!n.isEqual(e))throw new E(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{convertValue(t,e="none"){switch(Tt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(dt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return tt(t.fields,(t,s)=>{n[t]=this.convertValue(s,e)}),n}convertGeoPoint(t){return new oo(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(pt(t));default:return null}}convertTimestamp(t){const e=ht(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=P.fromString(t);v(as(n));const s=new yt(n.get(1),n.get(3)),r=new j(n.popFirst(5));return s.isEqual(e)||g(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class jo extends Co{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(_o("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class qo extends jo{data(t={}){return super.data(t)}}class Ko{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Bo(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new qo(this._firestore,this._userDataWriter,n.key,n,new Bo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const s=new qo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Bo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const s=new qo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Bo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Go(e.type),doc:s,oldIndex:r,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Go(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}class Ho extends Po{constructor(t){super(),this.firestore=t}convertBytes(t){return new so(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Pi(this.firestore,null,e)}}function $o(t){t=Oi(t,Fi);const e=Oi(t.firestore,Zi),n=eo(e),s=new Ho(e);return Do(t._query),Yi(n,t._query).then(n=>new Ko(e,s,t,n))}function zo(t,e,n){t=Oi(t,Pi);const s=Oi(t.firestore,Zi),r=Fo(t.converter,e,n);return Wo(s,[go(fo(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Be.none())])}function Qo(t){return Wo(Oi(t.firestore,Zi),[new Ze(t._key,Be.none())])}function Wo(t,e){return function(t,e){const n=new T;return t.asyncQueue.enqueueAndForget(async()=>ci(await Wi(t),e,n)),n.promise}(eo(t),e)}!function(t,e=!0){!function(t){h=t}(s["a"]),Object(s["c"])(new r["a"]("firestore",(t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new Zi(new A(t.getProvider("auth-internal")),new k(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yt(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,n),r);return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC").setMultipleInstances(!0)),Object(s["g"])(c,"3.7.3",t),Object(s["g"])(c,"3.7.3","esm2017")}()}).call(this,n("4362"))},"1fd5":function(t,e,n){"use strict";(function(t,s){n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return A})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return S})),n.d(e,"f",(function(){return k})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return E})),n.d(e,"i",(function(){return R})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return g}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&s+1<t.length&&56320===(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},i=function(t){const e=[];let n=0,s=0;while(n<t.length){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],i=r<t.length,o=i?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const u=r<t.length,h=u?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==h)throw Error();const l=e<<2|o>>4;if(s.push(l),64!==c){const t=o<<4&240|c>>2;if(s.push(t),64!==h){const t=c<<6&192|h;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function d(){return!l()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function f(){return"object"===typeof indexedDB}function g(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}function p(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t)return t;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=()=>p().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof s)return;const t=Object({NODE_ENV:"production",BASE_URL:""}).__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},v=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},w=()=>{try{return m()||y()||v()}catch(t){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+t)}},b=t=>{var e,n;return null===(n=null===(e=w())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},E=t=>{const e=b(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},T=()=>{var t;return null===(t=w())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+s,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="FirebaseError";class A extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=C,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?D(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`,a=new A(s,o,n);return a}}function D(t,e){return t.replace(N,(t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`})}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(L(n)&&L(i)){if(!k(n,i))return!1}else if(n!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function L(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"),n("4362"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return u}));var s=n("1fd5");class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new s["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),s=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&i.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(s){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"260b":function(t,e,n){"use strict";var s=n("589b");n.d(e,"a",(function(){return s["f"]}));var r="firebase",i="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(s["g"])(r,i,"app")},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,s="/";e.cwd=function(){return s},e.chdir=function(e){t||(t=n("df7c")),s=t.resolve(e,s)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return mt})),n.d(e,"b",(function(){return lt})),n.d(e,"c",(function(){return ht})),n.d(e,"d",(function(){return dt})),n.d(e,"e",(function(){return vt})),n.d(e,"f",(function(){return yt})),n.d(e,"g",(function(){return wt}));var s=n("22e5"),r=n("e691"),i=n("1fd5");const o=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,d=new WeakMap,f=new WeakMap,g=new WeakMap,p=new WeakMap;function m(t){const e=new Promise((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(T(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)});return e.then(e=>{e instanceof IDBCursor&&l.set(e,t)}).catch(()=>{}),p.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)});d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(I(this),e),T(l.get(this))}:function(...e){return T(t.apply(I(this),e))}:function(e,...n){const s=t.call(I(this),e,...n);return f.set(s,e.sort?e.sort():[e]),T(s)}}function E(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function T(t){if(t instanceof IDBRequest)return m(t);if(g.has(t))return g.get(t);const e=E(t);return e!==t&&(g.set(t,e),p.set(e,t)),e}const I=t=>p.get(t);function S(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=T(o);return s&&o.addEventListener("upgradeneeded",t=>{s(T(o.result),t.oldVersion,t.newVersion,T(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(t=>{i&&t.addEventListener("close",()=>i()),r&&t.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const C=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],_=new Map;function D(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(_.get(e))return _.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=A.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!C.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return _.set(e,i),i}w(t=>({...t,get:(e,n,s)=>D(e,n)||t.get(e,n,s),has:(e,n)=>!!D(e,n)||t.has(e,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const L="@firebase/app",R="0.8.4",O=new r["b"]("@firebase/app"),x="@firebase/app-compat",M="@firebase/analytics-compat",V="@firebase/analytics",U="@firebase/app-check-compat",P="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",K="@firebase/functions",G="@firebase/functions-compat",H="@firebase/installations",$="@firebase/installations-compat",z="@firebase/messaging",Q="@firebase/messaging-compat",W="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",st="firebase",rt="9.14.0",it="[DEFAULT]",ot={[L]:"fire-core",[x]:"fire-core-compat",[V]:"fire-analytics",[M]:"fire-analytics-compat",[P]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[K]:"fire-fn",[G]:"fire-fn-compat",[H]:"fire-iid",[$]:"fire-iid-compat",[z]:"fire-fcm",[Q]:"fire-fcm-compat",[W]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[st]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ht(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function lt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dt(t,e,n=it){lt(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new i["b"]("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new s["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=rt;function yt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw gt.create("bad-app-name",{appName:String(o)});if(n||(n=Object(i["g"])()),!n)throw gt.create("no-options");const a=at.get(o);if(a){if(Object(i["f"])(n,a.options)&&Object(i["f"])(r,a.config))return a;throw gt.create("duplicate-app",{appName:o})}const c=new s["b"](o);for(const s of ct.values())c.addComponent(s);const u=new pt(n,r,c);return at.set(o,u),u}function vt(t=it){const e=at.get(t);if(!e&&t===it)return yt();if(!e)throw gt.create("no-app",{appName:t});return e}function wt(t,e,n){var r;let i=null!==(r=ot[t])&&void 0!==r?r:t;n&&(i+="-"+n);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ht(new s["a"](i+"-version",()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt="firebase-heartbeat-database",Et=1,Tt="firebase-heartbeat-store";let It=null;function St(){return It||(It=S(bt,Et,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tt)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),It}async function Ct(t){var e;try{const e=await St();return e.transaction(Tt).objectStore(Tt).get(_t(t))}catch(n){if(n instanceof i["c"])O.warn(n.message);else{const t=gt.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});O.warn(t.message)}}}async function At(t,e){var n;try{const n=await St(),s=n.transaction(Tt,"readwrite"),r=s.objectStore(Tt);return await r.put(e,_t(t)),s.done}catch(s){if(s instanceof i["c"])O.warn(s.message);else{const t=gt.create("idb-set",{originalErrorMessage:null===(n=s)||void 0===n?void 0:n.message});O.warn(t.message)}}}function _t(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=1024,Nt=2592e6;class kt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ot(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Lt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Nt}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Lt(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),s=Object(i["d"])(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Lt(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=Dt){const n=[];let s=t.slice();for(const r of t){const t=n.find(t=>t.agent===r.agent);if(t){if(t.dates.push(r.date),xt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),xt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ot{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(i["k"])()&&Object(i["m"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function xt(t){return Object(i["d"])(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){ht(new s["a"]("platform-logger",t=>new N(t),"PRIVATE")),ht(new s["a"]("heartbeat",t=>new kt(t),"PRIVATE")),wt(L,R,t),wt(L,R,"esm2017"),wt("fire-js","")}Mt("")},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ms})),n.d(e,"b",(function(){return vs})),n.d(e,"c",(function(){return ys})),n.d(e,"d",(function(){return bs})),n.d(e,"e",(function(){return ws})),n.d(e,"f",(function(){return Es})),n.d(e,"g",(function(){return Ts})),n.d(e,"h",(function(){return gs})),n.d(e,"i",(function(){return ps}));var s,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},o=o||{},a=r||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:p,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function w(){this.s=this.s,this.o=this.o}var b=0;w.prototype.s=!1,w.prototype.na=function(){this.s||(this.s=!0,this.M(),0==b)||l(this)},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function T(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(u(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let r=0;r<s;r++)t[n+r]=e[r]}else t.push(e)}}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function A(t){return/^[\s\xa0]*$/.test(t)}var _=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return t<e?-1:t>e?1:0}function N(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function k(t){return-1!=N().indexOf(t)}function L(t){return L[" "](t),t}function R(t){var e=H;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}L[" "]=c;var O,x=k("Opera"),M=k("Trident")||k("MSIE"),V=k("Edge"),U=V||M,P=k("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!k("Edge"))&&!(k("Trident")||k("MSIE"))&&!k("Edge"),F=-1!=N().toLowerCase().indexOf("webkit")&&!k("Edge");function B(){var t=a.document;return t?t.documentMode:void 0}t:{var j="",q=function(){var t=N();return P?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):F?/WebKit\/(\S+)/.exec(t):x?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(q&&(j=q?q[1]:""),M){var K=B();if(null!=K&&K>parseFloat(j)){O=String(K);break t}}O=j}var G,H={};function $(){return R((function(){let t=0;const e=_(String(O)).split("."),n=_("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=D(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||D(0==r[2].length,0==i[2].length)||D(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(a.document&&M){var z=B();G=z||(parseInt(O,10)||void 0)}else G=void 0;var Q=G;function W(t,e){if(S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(P){t:{try{L(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:X[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.X.h.call(this)}}v(W,S);var X={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),J=0;function Z(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++J,this.ba=this.ea=!1}function tt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function et(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const st="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<st.length;e++)n=st[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function it(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=E(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(tt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}it.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=at(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Z(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function ht(t,e,n,s,r){if(s&&s.once)return ft(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ht(t,e[i],n,s,r);return null}return n=bt(n),t&&t[Y]?t.N(e,n,h(s)?!!s.capture:!!s,r):lt(t,e,n,!1,s,r)}function lt(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=h(r)?!!r.capture:!!r,a=vt(t);if(a||(t[ct]=a=new it(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=dt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)C||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(mt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function dt(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function ft(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ft(t,e[i],n,s,r);return null}return n=bt(n),t&&t[Y]?t.O(e,n,h(s)?!!s.capture:!!s,r):lt(t,e,n,!0,s,r)}function gt(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)gt(t,e[i],n,s,r);else s=h(s)?!!s.capture:!!s,n=bt(n),t&&t[Y]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=at(i,n,s,r),-1<n&&(tt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,s,r)),(n=-1<t?e[t]:null)&&pt(n))}function pt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Y])ot(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(mt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):tt(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function yt(t,e){if(t.ba)t=!0;else{e=new W(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&pt(t),t=n.call(s,e)}return t}function vt(t){return t=t[ct],t instanceof it?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function Et(){w.call(this),this.i=new it(this),this.P=this,this.I=null}function Tt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var r=e;e=new S(s,t),rt(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=It(o,s,!0,e)&&r}if(o=e.g=t,r=It(o,s,!0,e)&&r,r=It(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=It(o,s,!1,e)&&r}function It(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ot(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}v(Et,w),Et.prototype[Y]=!0,Et.prototype.removeEventListener=function(t,e,n,s){gt(this,t,e,n,s)},Et.prototype.M=function(){if(Et.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)tt(n[s]);delete e.g[t],e.h--}}this.I=null},Et.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Et.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var St=a.JSON.stringify;function Ct(){var t=xt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class At{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var _t,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Nt,t=>t.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function kt(t){a.setTimeout(()=>{throw t},0)}function Lt(t,e){_t||Rt(),Ot||(_t(),Ot=!0),xt.add(t,e)}function Rt(){var t=a.Promise.resolve(void 0);_t=function(){t.then(Mt)}}var Ot=!1,xt=new At;function Mt(){for(var t;t=Ct();){try{t.h.call(t.g)}catch(n){kt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ot=!1}function Vt(t,e){Et.call(this),this.h=t||1,this.g=e||a,this.j=m(this.lb,this),this.l=Date.now()}function Ut(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Pt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Ft(t){t.g=Pt(()=>{t.g=null,t.i&&(t.i=!1,Ft(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Vt,Et),s=Vt.prototype,s.ca=!1,s.R=null,s.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Tt(this,"tick"),this.ca&&(Ut(this),this.start()))}},s.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Vt.X.M.call(this),Ut(this),delete this.g};class Bt extends w{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ft(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(t){w.call(this),this.h=t,this.g={}}v(jt,w);var qt=[];function Kt(t,e,n,s){Array.isArray(n)||(n&&(qt[0]=n.toString()),n=qt);for(var r=0;r<n.length;r++){var i=ht(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Gt(t){et(t.g,(function(t,e){this.g.hasOwnProperty(e)&&pt(t)}),t),t.g={}}function Ht(){this.g=!0}function $t(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function zt(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Qt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Xt(t,n)+(s?" "+s:"")}))}function Wt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Xt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return St(n)}catch(a){return e}}jt.prototype.M=function(){jt.X.M.call(this),Gt(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ht.prototype.Aa=function(){this.g=!1},Ht.prototype.info=function(){};var Yt={},Jt=null;function Zt(){return Jt=Jt||new Et}function te(t){S.call(this,Yt.Pa,t)}function ee(t){const e=Zt();Tt(e,new te(e))}function ne(t,e){S.call(this,Yt.STAT_EVENT,t),this.stat=e}function se(t){const e=Zt();Tt(e,new ne(e,t))}function re(t,e){S.call(this,Yt.Qa,t),this.size=e}function ie(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}Yt.Pa="serverreachability",v(te,S),Yt.STAT_EVENT="statevent",v(ne,S),Yt.Qa="timingevent",v(re,S);var oe={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ae={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ce(){}function ue(t){return t.h||(t.h=t.i())}function he(){}ce.prototype.h=null;var le,de={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function fe(){S.call(this,"d")}function ge(){S.call(this,"c")}function pe(){}function me(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new jt(this),this.O=ve,t=U?125:void 0,this.T=new Vt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ye}function ye(){this.i=null,this.g="",this.h=!1}v(fe,S),v(ge,S),v(pe,ce),pe.prototype.g=function(){return new XMLHttpRequest},pe.prototype.i=function(){return{}},le=new pe;var ve=45e3,we={},be={};function Ee(t,e,n){t.K=1,t.v=Ke(Pe(e)),t.s=n,t.P=!0,Te(t,null)}function Te(t,e){t.F=Date.now(),Ae(t),t.A=Pe(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),nn(n.i,"t",s),t.C=0,n=t.l.H,t.h=new ye,t.g=as(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Bt(m(t.La,t,t.g),t.N)),Kt(t.S,t.g,"readystatechange",t.ib),e=t.H?nt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ee(),$t(t.j,t.u,t.A,t.m,t.U,t.s)}function Ie(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Se(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=Ce(t,n),s==be){4==e&&(t.o=4,se(14),r=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(s==we){t.o=4,se(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Qt(t.j,t.m,s,null),Le(t,s)}Ie(t)&&s!=be&&s!=we&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,se(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zn(e),e.K=!0,se(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),ke(t),Ne(t))}function Ce(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?be:(n=Number(e.substring(n,s)),isNaN(n)?we:(s+=1,s+n>e.length?be:(e=e.substr(s,n),t.C=s+n,e)))}function Ae(t){t.V=Date.now()+t.O,_e(t,t.O)}function _e(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ie(m(t.gb,t),e)}function De(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Ne(t){0==t.l.G||t.I||ns(t.l,t)}function ke(t){De(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ut(t.T),Gt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Le(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ln(n.h,t)))if(!t.J&&ln(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(u){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;es(n),Gn(n)}Jn(n),se(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=ie(m(n.cb,n),6e3));if(1>=hn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else rs(n,11)}else if((t.J||n.g==t)&&es(n),!A(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=u[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(dn(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,qe(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=os(s,s.H?s.ka:null,s.V),o.J){fn(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(De(a),Ae(a)),s.g=o}else Yn(s);0<n.i.length&&$n(n)}else"stop"!=u[0]&&"close"!=u[0]||rs(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?rs(n,7):Kn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}ee(4)}catch(u){}}function Re(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Oe(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(u(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function xe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Oe(t),s=Re(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}s=me.prototype,s.setTimeout=function(t){this.O=t},s.ib=function(t){t=t.target;const e=this.L;e&&3==Un(t)?e.l():this.La(t)},s.La=function(t){try{if(t==this.g)t:{const l=Un(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||U||this.g&&(this.h.h||this.g.fa()||Pn(this.g)))){this.I||4!=l||7==e||ee(8==e||0>=d?3:2),De(this);var n=this.g.aa();this.Y=n;e:if(Ie(this)){var s=Pn(this.g);t="";var r=s.length,i=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ke(this),Ne(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,zt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,se(12),ke(this),Ne(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Le(this,n)}this.P?(Se(this,l,o),U&&this.i&&3==l&&(Kt(this.S,this.T,"tick",this.hb),this.T.start())):(Qt(this.j,this.m,o,null),Le(this,o)),4==l&&ke(this),this.i&&!this.I&&(4==l?ns(this.l,this):(this.i=!1,Ae(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,se(12)):(this.o=0,se(13)),ke(this),Ne(this)}}}catch(l){}},s.hb=function(){if(this.g){var t=Un(this.g),e=this.g.fa();this.C<e.length&&(De(this),Se(this,t,e),this.i&&4!=t&&Ae(this))}},s.cancel=function(){this.I=!0,ke(this)},s.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Wt(this.j,this.A),2!=this.K&&(ee(),se(17)),ke(this),this.o=2,Ne(this)):_e(this,this.V-t)};var Me=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ve(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ue(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ue){this.h=void 0!==e?e:t.h,Fe(this,t.j),this.s=t.s,this.g=t.g,Be(this,t.m),this.l=t.l,e=t.i;var n=new Je;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),je(this,n),this.o=t.o}else t&&(n=String(t).match(Me))?(this.h=!!e,Fe(this,n[1]||"",!0),this.s=Ge(n[2]||""),this.g=Ge(n[3]||"",!0),Be(this,n[4]),this.l=Ge(n[5]||"",!0),je(this,n[6]||"",!0),this.o=Ge(n[7]||"")):(this.h=!!e,this.i=new Je(null,this.h))}function Pe(t){return new Ue(t)}function Fe(t,e,n){t.j=n?Ge(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function je(t,e,n){e instanceof Je?(t.i=e,rn(t.i,t.h)):(n||(e=He(e,Xe)),t.i=new Je(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function Ke(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ge(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function He(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,$e),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $e(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ue.prototype.toString=function(){var t=[],e=this.j;e&&t.push(He(e,ze,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(He(e,ze,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(He(n,"/"==n.charAt(0)?We:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",He(n,Ye)),t.join("")};var ze=/[#\/\?@]/g,Qe=/[#\?:]/g,We=/[#\?]/g,Xe=/[#\?@]/g,Ye=/#/g;function Je(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ze(t){t.g||(t.g=new Map,t.h=0,t.i&&Ve(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function tn(t,e){Ze(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function en(t,e){return Ze(t),e=sn(t,e),t.g.has(e)}function nn(t,e,n){tn(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),T(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rn(t,e){e&&!t.j&&(Ze(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(tn(this,e),nn(this,n,t))}),t)),t.j=e}s=Je.prototype,s.add=function(t,e){Ze(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){Ze(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},s.oa=function(){Ze(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},s.W=function(t){Ze(this);let e=[];if("string"===typeof t)en(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},s.set=function(t,e){return Ze(this),this.i=null,t=sn(this,t),en(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};var on=class{constructor(t,e){this.h=t,this.g=e}};function an(t){this.l=t||cn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cn=10;function un(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function ln(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function fn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return T(t.i)}function pn(){}function mn(){this.g=new pn}function yn(t,e,n){const s=n||"";try{xe(t,(function(t,n){let r=t;h(t)&&(r=St(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function vn(t,e){const n=new Ht;if(a.Image){const s=new Image;s.onload=y(wn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=y(wn,n,s,"TestLoadImage: error",!1,e),s.onabort=y(wn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=y(wn,n,s,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function wn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(i){}}function bn(t){this.l=t.ac||null,this.j=t.jb||!1}function En(t,e){Et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}an.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},pn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},pn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(bn,ce),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(t){return function(){return t}}({}),v(En,Et);var Tn=0;function In(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cn(t)}function Cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=En.prototype,s.open=function(t,e){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=Tn},s.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},s.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):Cn(this),3==this.readyState&&In(this)}},s.Va=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},s.Ua=function(t){this.g&&(this.response=t,Sn(this))},s.ga=function(){this.g&&Sn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var An=a.JSON.parse;function _n(t){Et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dn,this.K=this.L=!1}v(_n,Et);var Dn="",Nn=/^https?$/i,kn=["POST","PUT"];function Ln(t){return M&&$()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Rn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,On(t),Mn(t)}function On(t){t.D||(t.D=!0,Tt(t,"complete"),Tt(t,"error"))}function xn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Un(t)||2!=t.aa()))if(t.v&&4==Un(t))Pt(t.Ha,0,t);else if(Tt(t,"readystatechange"),4==Un(t)){t.h=!1;try{const o=t.aa();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var r=String(t.H).match(Me)[1]||null;if(!r&&a.self&&a.self.location){var i=a.self.location.protocol;r=i.substr(0,i.length-1)}s=!Nn.test(r?r.toLowerCase():"")}n=s}if(n)Tt(t,"complete"),Tt(t,"success");else{t.m=6;try{var c=2<Un(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.aa()+"]",On(t)}}finally{Mn(t)}}}function Mn(t,e){if(t.g){Vn(t);const s=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||Tt(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function Vn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}function Pn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Dn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Fn(t){let e="";return et(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Bn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Fn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):qe(t,e,n))}function jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qn(t){this.Ca=0,this.i=[],this.j=new Ht,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=jn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=jn("baseRetryDelayMs",5e3,t),this.bb=jn("retryDelaySeedMs",1e4,t),this.$a=jn("forwardChannelMaxRetries",2,t),this.ta=jn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new an(t&&t.concurrentRequestLimit),this.Fa=new mn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Kn(t){if(Hn(t),3==t.G){var e=t.U++,n=Pe(t.F);qe(n,"SID",t.I),qe(n,"RID",e),qe(n,"TYPE","terminate"),Wn(t,n),e=new me(t,t.j,e,void 0),e.K=2,e.v=Ke(Pe(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=as(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ae(e)}is(t)}function Gn(t){t.g&&(Zn(t),t.g.cancel(),t.g=null)}function Hn(t){Gn(t),t.u&&(a.clearTimeout(t.u),t.u=null),es(t),t.h.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function $n(t){un(t.h)||t.m||(t.m=!0,Lt(t.Ja,t),t.C=0)}function zn(t,e){return!(hn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ie(m(t.Ja,t,e),ss(t,t.C)),t.C++,!0))}function Qn(t,e){var n;n=e?e.m:t.U++;const s=Pe(t.F);qe(s,"SID",t.I),qe(s,"RID",n),qe(s,"AID",t.T),Wn(t,s),t.o&&t.s&&Bn(s,t.o,t.s),n=new me(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Xn(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),dn(t.h,n),Ee(n,s,e)}function Wn(t,e){t.ia&&et(t.ia,(function(t,n){qe(e,n,t)})),t.l&&xe({},(function(t,n){qe(e,n,t)}))}function Xn(t,e,n){n=Math.min(t.i.length,n);var s=t.l?m(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const c=r[a].g;if(n-=e,0>n)e=Math.max(0,r[a].h-100),o=!1;else try{yn(c,t,"req"+n+"_")}catch(i){s&&s(c)}}if(o){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Yn(t){t.g||t.u||(t.Z=1,Lt(t.Ia,t),t.A=0)}function Jn(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ie(m(t.Ia,t),ss(t,t.A)),t.A++,!0)}function Zn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function ts(t){t.g=new me(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Pe(t.sa);qe(e,"RID","rpc"),qe(e,"SID",t.I),qe(e,"CI",t.L?"0":"1"),qe(e,"AID",t.T),qe(e,"TYPE","xmlhttp"),Wn(t,e),t.o&&t.s&&Bn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ke(Pe(e)),n.s=null,n.P=!0,Te(n,t)}function es(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function ns(t,e){var n=null;if(t.g==e){es(t),Zn(t),t.g=null;var s=2}else{if(!ln(t.h,e))return;n=e.D,fn(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Zt(),Tt(s,new re(s,n)),$n(t)}else Yn(t);else if(r=e.o,3==r||0==r&&0<t.pa||!(1==s&&zn(t,e)||2==s&&Jn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:rs(t,5);break;case 4:rs(t,10);break;case 3:rs(t,6);break;default:rs(t,2)}}function ss(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function rs(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=m(t.kb,t);n||(n=new Ue("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Fe(n,"https"),Ke(n)),vn(n.toString(),s)}else se(2);t.G=0,t.l&&t.l.va(e),is(t),Hn(t)}function is(t){if(t.G=0,t.la=[],t.l){const e=gn(t.h);0==e.length&&0==t.i.length||(I(t.la,e),I(t.la,t.i),t.h.i.length=0,T(t.i),t.i.length=0),t.l.ua()}}function os(t,e,n){var s=n instanceof Ue?Pe(n):new Ue(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),Be(s,s.m);else{var r=a.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ue(null,void 0);s&&Fe(i,s),e&&(i.g=e),r&&Be(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&qe(s,n,e),qe(s,"VER",t.ma),Wn(t,s),s}function as(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new _n(new bn({jb:!0})):new _n(t.ra),e.Ka(t.H),e}function cs(){}function us(){if(M&&!(10<=Number(Q)))throw Error("Environmental error: no available transport.")}function hs(t,e){Et.call(this),this.g=new qn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fs(this)}function ls(t){fe.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ds(){ge.call(this),this.status=1}function fs(t){this.g=t}s=_n.prototype,s.Ka=function(t){this.L=t},s.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():le.g(),this.C=this.u?ue(this.u):ue(le),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Rn(this,i)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),r=a.FormData&&t instanceof a.FormData,!(0<=E(kn,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Pt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Rn(this,i)}},s.qa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Tt(this,"complete"),Tt(this,"abort"),Mn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),_n.X.M.call(this)},s.Ha=function(){this.s||(this.F||this.v||this.l?xn(this):this.fb())},s.fb=function(){xn(this)},s.aa=function(){try{return 2<Un(this)?this.g.status:-1}catch(t){return-1}},s.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),An(e)}},s.Ea=function(){return this.m},s.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},s=qn.prototype,s.ma=8,s.G=1,s.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new me(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=nt(i),rt(i,this.S)):i=this.S),null!==this.o||this.N||(r.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xn(this,r,e),n=Pe(this.F),qe(n,"RID",t),qe(n,"CVER",22),this.D&&qe(n,"X-HTTP-Session-Id",this.D),Wn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Fn(i)))+"&"+e:this.o&&Bn(n,this.o,i)),dn(this.h,r),this.Ya&&qe(n,"TYPE","init"),this.O?(qe(n,"$req",e),qe(n,"SID","null"),r.Z=!0,Ee(r,n,null)):Ee(r,n,e),this.G=2}}else 3==this.G&&(t?Qn(this,t):0==this.i.length||un(this.h)||Qn(this))},s.Ia=function(){if(this.u=null,ts(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ie(m(this.eb,this),t)}},s.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,se(10),Gn(this),ts(this))},s.cb=function(){null!=this.v&&(this.v=null,Gn(this),Jn(this),se(19))},s.kb=function(t){t?(this.j.info("Successfully pinged google.com"),se(2)):(this.j.info("Failed to ping google.com"),se(1))},s=cs.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Ra=function(){},us.prototype.g=function(t,e){return new hs(t,e)},v(hs,Et),hs.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;se(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=os(t,null,t.V),$n(t)},hs.prototype.close=function(){Kn(this.g)},hs.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=St(t),t=n);e.i.push(new on(e.ab++,t)),3==e.G&&$n(e)},hs.prototype.M=function(){this.g.l=null,delete this.j,Kn(this.g),delete this.g,hs.X.M.call(this)},v(ls,fe),v(ds,ge),v(fs,cs),fs.prototype.xa=function(){Tt(this.g,"a")},fs.prototype.wa=function(t){Tt(this.g,new ls(t))},fs.prototype.va=function(t){Tt(this.g,new ds)},fs.prototype.ua=function(){Tt(this.g,"b")},us.prototype.createWebChannel=us.prototype.g,hs.prototype.send=hs.prototype.u,hs.prototype.open=hs.prototype.m,hs.prototype.close=hs.prototype.close,oe.NO_ERROR=0,oe.TIMEOUT=8,oe.HTTP_ERROR=6,ae.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",Et.prototype.listen=Et.prototype.N,_n.prototype.listenOnce=_n.prototype.O,_n.prototype.getLastError=_n.prototype.Oa,_n.prototype.getLastErrorCode=_n.prototype.Ea,_n.prototype.getStatus=_n.prototype.aa,_n.prototype.getResponseJson=_n.prototype.Sa,_n.prototype.getResponseText=_n.prototype.fa,_n.prototype.send=_n.prototype.da,_n.prototype.setWithCredentials=_n.prototype.Ka;var gs=i.createWebChannelTransport=function(){return new us},ps=i.getStatEventTarget=function(){return Zt()},ms=i.ErrorCode=oe,ys=i.EventType=ae,vs=i.Event=Yt,ws=i.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},bs=i.FetchXmlHttpFactory=bn,Es=i.WebChannel=he,Ts=i.XhrIo=_n}).call(this,n("c8ba"))},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,s=t.length-1;s>=0;s--){var r=t[s];"."===r?t.splice(s,1):".."===r?(t.splice(s,1),n++):n&&(t.splice(s,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function s(t){"string"!==typeof t&&(t+="");var e,n=0,s=-1,r=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!r){n=e+1;break}}else-1===s&&(r=!1,s=e+1);return-1===s?"":t.slice(n,s)}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],s=0;s<t.length;s++)e(t[s],s,t)&&n.push(t[s]);return n}e.resolve=function(){for(var e="",s=!1,i=arguments.length-1;i>=-1&&!s;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,s="/"===o.charAt(0))}return e=n(r(e.split("/"),(function(t){return!!t})),!s).join("/"),(s?"/":"")+e||"."},e.normalize=function(t){var s=e.isAbsolute(t),o="/"===i(t,-1);return t=n(r(t.split("/"),(function(t){return!!t})),!s).join("/"),t||s||(t="."),t&&o&&(t+="/"),(s?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function s(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=s(t.split("/")),i=s(n.split("/")),o=Math.min(r.length,i.length),a=o,c=0;c<o;c++)if(r[c]!==i[c]){a=c;break}var u=[];for(c=a;c<r.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,s=-1,r=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!r){s=i;break}}else r=!1;return-1===s?n?"/":".":n&&1===s?"/":t.slice(0,s)},e.basename=function(t,e){var n=s(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,s=-1,r=!0,i=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===s&&(r=!1,s=o+1),46===a?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1);else if(!r){n=o+1;break}}return-1===e||-1===s||0===i||1===i&&e===s-1&&e===n+1?"":t.slice(e,s)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return l}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function h(t){s.forEach(e=>{e.setLogLevel(t)})}function l(t,e){for(const n of s){let s=null;e&&e.level&&(s=i[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==s&&void 0!==s?s:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:i,type:e.name})}}}},e71f:function(t,e,n){"use strict";var s=n("0829");n.d(e,"a",(function(){return s["a"]})),n.d(e,"b",(function(){return s["b"]})),n.d(e,"c",(function(){return s["c"]})),n.d(e,"d",(function(){return s["d"]})),n.d(e,"e",(function(){return s["e"]})),n.d(e,"f",(function(){return s["f"]})),n.d(e,"g",(function(){return s["g"]})),n.d(e,"h",(function(){return s["h"]})),n.d(e,"i",(function(){return s["i"]}))}}]);
//# sourceMappingURL=adduser~chart~input~login~memo.e338e79e.js.map