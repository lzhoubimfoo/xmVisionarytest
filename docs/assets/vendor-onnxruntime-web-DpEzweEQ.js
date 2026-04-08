/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var ds=Object.defineProperty,Jd=Object.getOwnPropertyDescriptor,go=Object.getOwnPropertyNames,ec=Object.prototype.hasOwnProperty,Hn=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),E=(e,t)=>function(){return e&&(t=(0,e[go(e)[0]])(e=0)),t},$t=(e,t)=>{for(var n in t)ds(e,n,{get:t[n],enumerable:!0})},tc=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of go(t))!ec.call(e,i)&&i!==n&&ds(e,i,{get:()=>t[i],enumerable:!(s=Jd(t,i))||s.enumerable});return e},jt=e=>tc(ds({},"__esModule",{value:!0}),e),st,Re,Ye,Ns,_o,wo=E({"common/dist/esm/backend-impl.js"(){st=new Map,Re=[],Ye=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){const s=st.get(e);if(s===void 0)st.set(e,{backend:t,priority:n});else{if(s.priority>n)return;if(s.priority===n&&s.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){const i=Re.indexOf(e);i!==-1&&Re.splice(i,1);for(let r=0;r<Re.length;r++)if(st.get(Re[r]).priority<=n){Re.splice(r,0,e);return}Re.push(e)}return}throw new TypeError("not a valid backend")},Ns=async e=>{const t=st.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{const n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(s){return n||(t.error=`${s}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},_o=async e=>{const t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),s=n.length===0?Re:n;let i;const r=[],a=new Set;for(const u of s){const l=await Ns(u);typeof l=="string"?r.push({name:u,err:l}):(i||(i=l),i===l&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${r.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(const{name:u,err:l}of r)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);const o=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}}),nc=E({"common/dist/esm/backend.js"(){wo()}}),yo,sc=E({"common/dist/esm/version.js"(){yo="1.22.0"}}),Ht,_e,$o=E({"common/dist/esm/env-impl.js"(){sc(),Ht="warning",_e={wasm:{},webgl:{},webgpu:{},versions:{common:yo},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ht=e}},get logLevel(){return Ht}},Object.defineProperty(_e,"logLevel",{enumerable:!0})}}),te,ic=E({"common/dist/esm/env.js"(){$o(),te=_e}}),vo,bo,rc=E({"common/dist/esm/tensor-conversion-impl.js"(){vo=(e,t)=>{const n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];const s=n.getContext("2d");if(s!=null){let i,r;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],r=e.dims[3]):(i=e.dims[3],r=e.dims[2]);const a=t?.format!==void 0?t.format:"RGB",o=t?.norm;let u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));const d=r*i;let c=0,p=d,f=d*2,h=-1;a==="RGBA"?(c=0,p=d,f=d*2,h=d*3):a==="RGB"?(c=0,p=d,f=d*2):a==="RBG"&&(c=0,f=d,p=d*2);for(let m=0;m<r;m++)for(let w=0;w<i;w++){const _=(e.data[c++]-l[0])*u[0],g=(e.data[p++]-l[1])*u[1],$=(e.data[f++]-l[2])*u[2],y=h===-1?255:(e.data[h++]-l[3])*u[3];s.fillStyle="rgba("+_+","+g+","+$+","+y+")",s.fillRect(w,m,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},bo=(e,t)=>{const n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d");let s;if(n!=null){let i,r,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],r=e.dims[1],a=e.dims[3]):(i=e.dims[3],r=e.dims[2],a=e.dims[1]);const o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm;let l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));const c=r*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");const p=4;let f=0,h=1,m=2,w=3,_=0,g=c,$=c*2,y=-1;o==="RGBA"?(_=0,g=c,$=c*2,y=c*3):o==="RGB"?(_=0,g=c,$=c*2):o==="RBG"&&(_=0,$=c,g=c*2),s=n.createImageData(i,r);for(let v=0;v<r*i;f+=p,h+=p,m+=p,w+=p,v++)s.data[f]=(e.data[_++]-d[0])*l[0],s.data[h]=(e.data[g++]-d[1])*l[1],s.data[m]=(e.data[$++]-d[2])*l[2],s.data[w]=y===-1?255:(e.data[y++]-d[3])*l[3]}else throw new Error("Can not access image data");return s}}}),vt,xo,So,Io,ko,To,ac=E({"common/dist/esm/tensor-factory-impl.js"(){cs(),vt=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");const{height:n,width:s}=t,i=t.norm??{mean:255,bias:0};let r,a;typeof i.mean=="number"?r=[i.mean,i.mean,i.mean,i.mean]:r=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];const o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*s,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3);let c=4,p=0,f=1,h=2,m=3,w=0,_=l,g=l*2,$=-1;o==="RGB"&&(c=3,p=0,f=1,h=2,m=-1),u==="RGBA"?$=l*3:u==="RBG"?(w=0,g=l,_=l*2):u==="BGR"&&(g=0,_=l,w=l*2);for(let v=0;v<l;v++,p+=c,h+=c,f+=c,m+=c)d[w++]=(e[p]+a[0])/r[0],d[_++]=(e[f]+a[1])/r[1],d[g++]=(e[h]+a[2])/r[2],$!==-1&&m!==-1&&(d[$++]=(e[m]+a[3])/r[3]);return u==="RGBA"?new pe("float32",d,[1,4,n,s]):new pe("float32",d,[1,3,n,s])},xo=async(e,t)=>{const n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,s=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,r=typeof e=="string";let a,o=t??{};const u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(n){const d=u();d.width=e.width,d.height=e.height;const c=l(d);if(c!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=p,o.width=f}else o.tensorFormat="RGBA",o.height=p,o.width=f;c.drawImage(e,0,0),a=c.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(s){let d,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,c=t.resizedWidth):(d=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=d,o.width=c,t!==void 0){const p=u();p.width=c,p.height=d;const f=l(p);if(f!=null)f.putImageData(e,0,0),a=f.getImageData(0,0,c,d).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");const d=u();d.width=e.width,d.height=e.height;const c=l(d);if(c!=null){const p=e.height,f=e.width;return c.drawImage(e,0,0,f,p),a=c.getImageData(0,0,f,p).data,o.height=p,o.width=f,vt(a,o)}else throw new Error("Can not access image data")}else{if(r)return new Promise((d,c)=>{const p=u(),f=l(p);if(!e||!f)return c();const h=new Image;h.crossOrigin="Anonymous",h.src=e,h.onload=()=>{p.width=h.width,p.height=h.height,f.drawImage(h,0,0,p.width,p.height);const m=f.getImageData(0,0,p.width,p.height);o.height=p.height,o.width=p.width,d(vt(m.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return vt(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},So=(e,t)=>{const{width:n,height:s,download:i,dispose:r}=t,a=[1,s,n,4];return new pe({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:r})},Io=(e,t)=>{const{dataType:n,dims:s,download:i,dispose:r}=t;return new pe({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:s,download:i,dispose:r})},ko=(e,t)=>{const{dataType:n,dims:s,download:i,dispose:r}=t;return new pe({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:s,download:i,dispose:r})},To=(e,t,n)=>new pe({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}}),Ge,ht,Zt,zo,oc=E({"common/dist/esm/tensor-impl-type-mapping.js"(){Ge=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ht=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Zt=!1,zo=()=>{if(!Zt){Zt=!0;const e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,s=typeof n<"u"&&n.from;e&&(Ge.set("int64",BigInt64Array),ht.set(BigInt64Array,"int64")),t&&(Ge.set("uint64",BigUint64Array),ht.set(BigUint64Array,"uint64")),s?(Ge.set("float16",n),ht.set(n,"float16")):Ge.set("float16",Uint16Array)}}}}),Eo,Co,uc=E({"common/dist/esm/tensor-utils-impl.js"(){cs(),Eo=e=>{let t=1;for(let n=0;n<e.length;n++){const s=e[n];if(typeof s!="number"||!Number.isSafeInteger(s))throw new TypeError(`dims[${n}] must be an integer, got: ${s}`);if(s<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${s}`);t*=s}return t},Co=(e,t)=>{switch(e.location){case"cpu":return new pe(e.type,e.data,t);case"cpu-pinned":return new pe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new pe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new pe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new pe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}}),pe,cs=E({"common/dist/esm/tensor-impl.js"(){rc(),ac(),oc(),uc(),pe=class{constructor(e,t,n){zo();let s,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,s=e.type,i=e.dims,e.location){case"cpu-pinned":{const a=Ge.get(s);if(!a)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(s=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{const u=Ge.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${s} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");const u=typeof e[0];if(u==="string")s="string",a=e;else if(u==="boolean")s="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)s="uint8",a=Uint8Array.from(e);else{const u=ht.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);s=u,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}const r=Eo(i);if(this.cpuData&&r!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(r/2)===this.cpuData.length))throw new Error(`Tensor's size(${r}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=i,this.size=r}static async fromImage(e,t){return xo(e,t)}static fromTexture(e,t){return So(e,t)}static fromGpuBuffer(e,t){return Io(e,t)}static fromMLTensor(e,t){return ko(e,t)}static fromPinnedBuffer(e,t,n){return To(e,t,n)}toDataURL(e){return vo(this,e)}toImageData(e){return bo(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;const t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Co(this,e)}}}}),ze,Ao=E({"common/dist/esm/tensor.js"(){cs(),ze=pe}}),Dt,Qt,Ee,Ie,Oo=E({"common/dist/esm/trace.js"(){$o(),Dt=(e,t)=>{(typeof _e.trace>"u"?!_e.wasm.trace:!_e.trace)||console.timeStamp(`${e}::ORT::${t}`)},Qt=(e,t)=>{const n=new Error().stack?.split(/\r\n|\r|\n/g)||[];let s=!1;for(let i=0;i<n.length;i++){if(s&&!n[i].includes("TRACE_FUNC")){let r=`FUNC_${e}::${n[i].trim().split(" ")[1]}`;t&&(r+=`::${t}`),Dt("CPU",r);return}n[i].includes("TRACE_FUNC")&&(s=!0)}},Ee=e=>{(typeof _e.trace>"u"?!_e.wasm.trace:!_e.trace)||Qt("BEGIN",e)},Ie=e=>{(typeof _e.trace>"u"?!_e.wasm.trace:!_e.trace)||Qt("END",e)}}}),Bo,lc=E({"common/dist/esm/inference-session-impl.js"(){wo(),Ao(),Oo(),Bo=class Ro{constructor(t){this.handler=t}async run(t,n,s){Ee();const i={};let r={};if(typeof t!="object"||t===null||t instanceof ze||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof ze)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(const l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof s=="object"&&s!==null)r=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let l=!1;const d=Object.getOwnPropertyNames(n);for(const c of this.outputNames)if(d.indexOf(c)!==-1){const p=n[c];(p===null||p instanceof ze)&&(l=!0,a=!1,i[c]=p)}if(l){if(typeof s=="object"&&s!==null)r=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else r=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(const l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(a)for(const l of this.outputNames)i[l]=null;const o=await this.handler.run(t,i,r),u={};for(const l in o)if(Object.hasOwnProperty.call(o,l)){const d=o[l];d instanceof ze?u[l]=d:u[l]=new ze(d.type,d.data,d.dims)}return Ie(),u}async release(){return this.handler.dispose()}static async create(t,n,s,i){Ee();let r,a={};if(typeof t=="string"){if(r=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(r=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){const d=t;let c=0,p=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(p=t.byteLength-c,typeof s=="number"){if(p=s,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-c}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof s<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");r=new Uint8Array(d,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");const[o,u]=await _o(a),l=await o.createInferenceSessionHandler(r,u);return Ie(),new Ro(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}}),Po,dc=E({"common/dist/esm/inference-session.js"(){lc(),Po=Bo}}),cc=E({"common/dist/esm/tensor-conversion.js"(){}}),pc=E({"common/dist/esm/tensor-factory.js"(){}}),fc=E({"common/dist/esm/onnx-model.js"(){}}),hc=E({"common/dist/esm/onnx-value.js"(){}}),Do={};$t(Do,{InferenceSession:()=>Po,TRACE:()=>Dt,TRACE_FUNC_BEGIN:()=>Ee,TRACE_FUNC_END:()=>Ie,Tensor:()=>ze,env:()=>te,registerBackend:()=>Ye});var ke=E({"common/dist/esm/index.js"(){nc(),ic(),dc(),Ao(),cc(),pc(),Oo(),fc(),hc()}}),et,ps=E({"web/lib/wasm/wasm-utils-env.ts"(){et=!1}}),Mo={};$t(Mo,{default:()=>No});var Xt,Yt,No,mc=E({"web/lib/wasm/proxy-worker/main.ts"(){Vd(),Ze(),hs(),Xt="ort-wasm-proxy-worker",Yt=globalThis.self?.name===Xt,Yt&&(self.onmessage=e=>{const{type:t,in:n}=e.data;try{switch(t){case"init-wasm":ms(n.wasm).then(()=>{As(n).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})})},s=>{postMessage({type:t,err:s})});break;case"init-ep":{const{epName:s,env:i}=n;Os(i,s).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})});break}case"copy-from":{const{buffer:s}=n,i=Wt(s);postMessage({type:t,out:i});break}case"create":{const{model:s,options:i}=n;Bs(s,i).then(r=>{postMessage({type:t,out:r})},r=>{postMessage({type:t,err:r})});break}case"release":Rs(n),postMessage({type:t});break;case"run":{const{sessionId:s,inputIndices:i,inputs:r,outputIndices:a,options:o}=n;Ps(s,i,r,a,new Array(a.length).fill(null),o).then(u=>{u.some(l=>l[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},Ms([...r,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":Ds(n),postMessage({type:t});break;default:}}catch(s){postMessage({type:t,err:s})}}),No=Yt?null:e=>new Worker(e??ce,{type:"module",name:Xt})}}),Jt,Us,Vs,ce,fs,bt,qs,Ls,en,Gs,tn,Uo,nn,Vo,hs=E({"web/lib/wasm/wasm-utils-import.ts"(){ps(),Jt=et||typeof location>"u"?void 0:location.origin,Us=import.meta.url>"file:"&&import.meta.url<"file;",Vs=()=>{if(!et){if(Us){const e=URL;return new URL(new e("ort.webgpu.mjs",import.meta.url).href,Jt).href}return import.meta.url}},ce=Vs(),fs=()=>{if(ce&&!ce.startsWith("blob:"))return ce.substring(0,ce.lastIndexOf("/")+1)},bt=(e,t)=>{try{const n=t??ce;return(n?new URL(e,n):new URL(e)).origin===Jt}catch{return!1}},qs=(e,t)=>{const n=t??ce;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Ls=(e,t)=>`${t??"./"}${e}`,en=async e=>{const n=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(n)},Gs=async e=>(await import(e)).default,tn=(mc(),jt(Mo)).default,Uo=async()=>{if(!ce)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(bt(ce))return[void 0,tn()];const e=await en(ce);return[e,tn(e)]},nn=void 0,Vo=async(e,t,n)=>{if(!e&&!t&&nn&&ce&&bt(ce))return[void 0,nn];{const s="ort-wasm-simd-threaded.jsep.mjs",i=e??qs(s,t),r=!et&&n&&i&&!bt(i,t),a=r?await en(i):i??Ls(s,t);return[r?a:void 0,await Gs(a)]}}}}),sn,xt,it,rn,Ws,js,Fs,ms,ee,Ze=E({"web/lib/wasm/wasm-factory.ts"(){hs(),xt=!1,it=!1,rn=!1,Ws=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},js=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Fs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ms=async e=>{if(xt)return Promise.resolve();if(it)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(rn)throw new Error("previous call to 'initializeWebAssembly()' failed.");it=!0;const t=e.initTimeout;let n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Fs())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!js())throw new Error("WebAssembly SIMD is not supported in the current environment.")}const s=Ws();n>1&&!s&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);const i=e.wasmPaths,r=typeof i=="string"?i:void 0,a=i?.mjs,o=a?.href??a,u=i?.wasm,l=u?.href??u,d=e.wasmBinary,[c,p]=await Vo(o,r,n>1);let f=!1;const h=[];if(t>0&&h.push(new Promise(m=>{setTimeout(()=>{f=!0,m()},t)})),h.push(new Promise((m,w)=>{const _={numThreads:n};if(d)_.wasmBinary=d;else if(l||r)_.locateFile=g=>l??r+g;else if(o&&o.indexOf("blob:")!==0)_.locateFile=g=>new URL(g,o).href;else if(c){const g=fs();g&&(_.locateFile=$=>g+$)}p(_).then(g=>{it=!1,xt=!0,sn=g,m(),c&&URL.revokeObjectURL(c)},g=>{it=!1,rn=!0,w(g)})})),await Promise.race(h),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ee=()=>{if(xt&&sn)return sn;throw new Error("WebAssembly is not initialized yet.")}}}),Se,Mt,Y,gs=E({"web/lib/wasm/wasm-utils.ts"(){Ze(),Se=(e,t)=>{const n=ee(),s=n.lengthBytesUTF8(e)+1,i=n._malloc(s);return n.stringToUTF8(e,i,s),t.push(i),i},Mt=(e,t,n,s)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,r])=>{const a=t?t+i:i;if(typeof r=="object")Mt(r,a+".",n,s);else if(typeof r=="string"||typeof r=="number")s(a,r.toString());else if(typeof r=="boolean")s(a,r?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof r}`)})},Y=e=>{const t=ee(),n=t.stackSave();try{const s=t.PTR_SIZE,i=t.stackAlloc(2*s);t._OrtGetLastError(i,i+s);const r=Number(t.getValue(i,s===4?"i32":"i64")),a=t.getValue(i+s,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${r}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}}),qo,gc=E({"web/lib/wasm/run-options.ts"(){Ze(),gs(),qo=e=>{const t=ee();let n=0;const s=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let r=0;return e?.tag!==void 0&&(r=Se(e.tag,s)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,r),n===0&&Y("Can't create run options."),e?.extra!==void 0&&Mt(e.extra,"",new WeakSet,(a,o)=>{const u=Se(a,s),l=Se(o,s);t._OrtAddRunConfigEntry(n,u,l)!==0&&Y(`Can't set a run config entry: ${a} - ${o}.`)}),[n,s]}catch(r){throw n!==0&&t._OrtReleaseRunOptions(n),s.forEach(a=>t._free(a)),r}}}}),Ks,Hs,Zs,rt,Qs,Lo,_c=E({"web/lib/wasm/session-options.ts"(){Ze(),gs(),Ks=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Hs=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Zs=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});const t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},rt=(e,t,n,s)=>{const i=Se(t,s),r=Se(n,s);ee()._OrtAddSessionConfigEntry(e,i,r)!==0&&Y(`Can't set a session config entry: ${t} - ${n}.`)},Qs=async(e,t,n)=>{for(const s of t){let i=typeof s=="string"?s:s.name;const r=[];switch(i){case"webnn":if(i="WEBNN",typeof s!="string"){const c=s?.deviceType;c&&rt(e,"deviceType",c,n)}break;case"webgpu":if(i="JS",typeof s!="string"){const d=s;if(d?.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);rt(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}const a=Se(i,n),o=r.length;let u=0,l=0;if(o>0){u=ee()._malloc(o*ee().PTR_SIZE),n.push(u),l=ee()._malloc(o*ee().PTR_SIZE),n.push(l);for(let d=0;d<o;d++)ee().setValue(u+d*ee().PTR_SIZE,r[d][0],"*"),ee().setValue(l+d*ee().PTR_SIZE,r[d][1],"*")}await ee()._OrtAppendExecutionProvider(e,a,u,l,o)!==0&&Y(`Can't append execution provider: ${i}.`)}},Lo=async e=>{const t=ee();let n=0;const s=[],i=e||{};Zs(i);try{const r=Ks(i.graphOptimizationLevel??"all"),a=Hs(i.executionMode??"sequential"),o=typeof i.logId=="string"?Se(i.logId,s):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log serverity level is not valid: ${u}`);const l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);const d=typeof i.optimizedModelFilePath=="string"?Se(i.optimizedModelFilePath,s):0;if(n=t._OrtCreateSessionOptions(r,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,u,l,d),n===0&&Y("Can't create session options."),i.executionProviders&&await Qs(n,i.executionProviders,s),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);rt(n,"enableGraphCapture",i.enableGraphCapture.toString(),s)}if(i.freeDimensionOverrides)for(const[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);const f=Se(c,s);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&Y(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&Mt(i.extra,"",new WeakSet,(c,p)=>{rt(n,c,p,s)}),[n,s]}catch(r){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Y("Can't release session options."),s.forEach(a=>t._free(a)),r}}}}),We,Ae,je,Ft,Nt,_s,ws,Zn,V=E({"web/lib/wasm/wasm-common.ts"(){We=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ae=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},je=(e,t)=>{const n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],s=typeof t=="number"?t:t.reduce((i,r)=>i*r,1);return n>0?Math.ceil(s*n):void 0},Ft=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Nt=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},_s=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ws=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Zn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}}),Ut,Go=E({"web/lib/wasm/wasm-utils-load-file.ts"(){ps(),Ut=async e=>{if(typeof e=="string")if(et)try{const{readFile:t}=Hn("node:fs/promises");return new Uint8Array(await t(e))}catch(t){if(t.code==="ERR_FS_FILE_TOO_LARGE"){const{createReadStream:n}=Hn("node:fs"),s=n(e),i=[];for await(const r of s)i.push(r);return new Uint8Array(Buffer.concat(i))}throw t}else{const t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);const n=t.headers.get("Content-Length"),s=n?parseInt(n,10):0;if(s<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);const i=t.body.getReader();let r;try{r=new ArrayBuffer(s)}catch(o){if(o instanceof RangeError){const u=Math.ceil(s/65536);r=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let a=0;for(;;){const{done:o,value:u}=await i.read();if(o)break;const l=u.byteLength;new Uint8Array(r,a,l).set(u),a+=l}return new Uint8Array(r,0,s)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}}),Xs,Ys,Js,ei,ys,ti,H,Oe=E({"web/lib/wasm/jsep/log.ts"(){V(),Xs=["V","I","W","E","F"],Ys=(e,t)=>{console.log(`[${Xs[e]},${new Date().toISOString()}]${t}`)},ys=(e,t)=>{Js=e,ei=t},ti=(e,t)=>{const n=Nt(e),s=Nt(Js);n>=s&&Ys(n,typeof t=="function"?t():t)},H=(...e)=>{ei&&ti(...e)}}}),ni,tt,S,Vt,Wo,jo,Fo,G=E({"web/lib/wasm/jsep/util.ts"(){ni=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},tt=class{static calcShape(e,t,n=!1){const s=e.length,i=t.length;if(s===0)return t;if(i===0)return e;const r=Math.max(e.length,t.length),a=new Array(r);if(n){if(s<2||i<2)return;const o=ni.calcMatMulShape([e[s-2],e[s-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[r-2],a[r-1]]=o}for(let o=n?3:1;o<=r;o++){const u=s-o<0?1:e[s-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;const d=Math.max(u,l);if(u&&l)a[r-o]=Math.max(u,l);else{if(d>1)return;a[r-o]=0}}return a}static isValidBroadcast(e,t){const n=e.length,s=t.length;if(n>s)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[s-i])return!1;return!0}},S=class Rt{static size(t){return Rt.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){const s=t.length;if(s===0)return[];const i=new Array(s);let r=s-1;for(;r>=0;){if(t[r]%n===0){i[r]=t[r]/n;break}if(n%t[r]!==0)throw new Error("cannot convert shape");i[r]=1,n/=t[r],r--}for(r--;r>=0;r--)i[r]=t[r];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Rt.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Rt.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,s){let i=1;for(let r=n;r<s;r++){if(t[r]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[r])}return i}static computeStrides(t){const n=t.length;if(n===0)return[];if(n===1)return[1];const s=new Array(n);s[n-1]=1,s[n-2]=t[n-1];for(let i=n-3;i>=0;--i)s[i]=s[i+1]*t[i+1];return s}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(s=>this.normalizeAxis(s,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(s=>t[s]):t.slice().reverse()}static padShape(t,n){const s=t.length;return t.map((i,r)=>i+n[r]+n[r+s])}static areEqual(t,n){return t.length!==n.length?!1:t.every((s,i)=>s===n[i])}},Vt=class mt{static adjustPoolAttributes(t,n,s,i,r,a){if(!t&&s.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=s.length?s.push(n[o+2]):s[o]=n[o+2];for(let o=0;o<s.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<s.length;o++)if(o<r.length){if(r[o]<0)throw new Error("dilations should be greater than or equal to 1")}else r.push(1);for(let o=0;o<s.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<s.length;o++){if(s[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=s[o]||a[o+s.length]>=s[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,s,i,r,a,o){if(o){if(r.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)mt.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],s[u],i[u],r,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,s,i,r,a,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");const u=[n[0],n[1]];return mt.computeShapeHelper(t,n,u,s,i,r,a,o),u}static computeConvOutputShape(t,n,s,i,r,a,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");const u=[t[0],n[0]];return mt.computeShapeHelper(!1,t,u,s,i,r,a,o),u}static computeShapeHelper(t,n,s,i,r,a,o,u){if(t)for(let l=0;l<n.length-2;l++)s.push(1);else for(let l=0;l<n.length-2;l++)s.push(mt.adjustPadAndReturnShape(n[l+2],i[l],r[l],a[l],o,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,s,i,r,a,o,u){const l=s*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return r[a]=0,r[o]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(s!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{const c=((t+n-1)/n-1)*n+i-t;return r[a]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),r[o]=c-r[a],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+r[a]+r[o]-l)/n+1)}},Wo=class{static getShapeOfGemmResult(e,t,n,s,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let r,a,o;t?(r=e[1],a=e[0]):(r=e[0],a=e[1]);let u=-1;if(s?(o=n[0],u=1):(o=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(r<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!tt.isValidBroadcast(i,[r,o]))throw new Error("gemm: invalid bias shape for broadcast");return[r,o,a]}},jo=-34028234663852886e22,Fo=34028234663852886e22}}),$s,Ko=E({"web/lib/wasm/jsep/tensor-view.ts"(){V(),$s=(e,t)=>new(Ft(t))(e)}}),an,Qn,on,si,un,ii,ln,dn,cn,ri,Ho,wc=E({"web/lib/wasm/jsep/webnn/tensor-manager.ts"(){V(),Oe(),an=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Qn=(e,t)=>{if(t==="int32")return e;const n=an.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);const s=n/8;if(e.byteLength%s!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${s}.`);const i=e.byteLength/s,r=new(Ft(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{const a=new Int32Array(i);for(let o=0;o<i;o++){const u=r[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&r.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");const a=Int32Array.from(r,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},on=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");const n=e.byteLength/4,s=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{const i=BigInt64Array.from(s,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(s.some(r=>r<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");const i=BigUint64Array.from(s,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(s.some(r=>r<-128||r>127))throw new Error("Can not convert int32 data to int8 - value out of range.");const i=Int8Array.from(s,Number);return new Uint8Array(i.buffer)}case"uint8":{if(s.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(s,Number)}case"uint32":{if(s.some(r=>r<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");const i=Uint32Array.from(s,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},si=1,un=()=>si++,ii=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ln=(e,t)=>{const n=an.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((s,i)=>s*i)*n/8):0},dn=class{constructor(e){this.isDataConverted=!1;const{sessionId:t,context:n,tensor:s,dataType:i,shape:r,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=s,this.dataType=i,this.tensorShape=r,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ln(this.dataType,this.tensorShape)}destroy(){H("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){const t=await this.mlContext.readTensor(this.mlTensor),n=on(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return n.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((s,i)=>s===n[i])}setIsDataConverted(e){this.isDataConverted=e}},cn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,s){const i=this.tensorManager.getMLContext(e);let r;if(!i.opSupportLimits().input.dataTypes.includes(t)){if(r=ii.get(t),!r||!i.opSupportLimits().input.dataTypes.includes(r))throw new Error(`WebNN backend does not support data type: ${t}`);H("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${r}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(s){if(this.wrapper.byteLength!==ln(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}const a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,a,!0,!0,r),s&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Qn(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else H("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){const t=this.wrapper?.isDataConverted?on(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},ri=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){const t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){const e=un();return this.tensorTrackersById.set(e,new cn(this)),e}releaseTensorId(e){const t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,s,i){H("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${s}, copyOld: ${i}}`);const r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");return r.ensureTensor(e,n,s,i)}upload(e,t){const n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){H("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);const n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(const t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,s){const i=this.getMLContext(e),r=un(),a=new dn({sessionId:e,context:i,tensor:t,dataType:n,shape:s});return this.tensorTrackersById.set(r,new cn(this,a)),this.externalTensors.add(a),r}async getCachedTensor(e,t,n,s,i,r,a){const o=this.getMLContext(e);for(const[l,d]of this.freeTensors.entries())if(d.canReuseTensor(o,t,n)){H("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);const c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}H("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);const u=await o.createTensor({dataType:a??t,shape:n,dimensions:n,usage:s,writable:i,readable:r});return new dn({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ho=(...e)=>new ri(...e)}}),at,ai,Zo,yc=E({"web/lib/wasm/jsep/backend-webnn.ts"(){V(),Ze(),Ko(),wc(),Oe(),at=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ai=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;const n=Object.keys(e).sort(),s=Object.keys(t).sort();return n.length===s.length&&n.every((i,r)=>i===s[r]&&e[i]===t[i])},Zo=class{constructor(e){this.tensorManager=Ho(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,ys(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){H("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){H("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);const t=this.temporarySessionTensorIds.get(e);if(t){for(const n of t)H("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){const n=this.mlContextCache.findIndex(s=>s.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{const s=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:s}),s}}else if(e===void 0){const n=this.mlContextCache.findIndex(s=>s.options===void 0&&s.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{const s=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:s}),s}}const t=this.mlContextCache.findIndex(n=>ai(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{const n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);const t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);const n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);const s=this.mlContextCache.findIndex(i=>i.mlContext===t);s!==-1&&this.mlContextCache.splice(s,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){H("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,s,i){const r=at.get(n);if(!r)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,r,s,i)}async createTemporaryTensor(e,t,n){H("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);const s=at.get(t);if(!s)throw new Error(`Unsupported ONNX data type: ${t}`);const i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,s,n,!1);const r=this.temporarySessionTensorIds.get(e);return r?r.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!ee().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");H("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{const n=await this.tensorManager.download(e);return $s(n,t)}}registerMLTensor(e,t,n,s){const i=at.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);const r=this.tensorManager.registerTensor(e,t,i,s);return H("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${s}} -> {tensorId: ${r}}`),r}registerMLConstant(e,t,n,s,i,r,a=!1){if(!r)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));const u=r.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");const l=u.slice(t,t+n).buffer;let d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(a){const c=Qn(new Uint8Array(l),"int64");d=new Int32Array(c.buffer),i.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return H("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),s.constant(i,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){const n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){const n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){const s=this.mlContextBySessionId.get(e),i=at.get(We(t));return typeof i>"u"?!1:n?!!s?.opSupportLimits().input.dataTypes.includes(i):!!s?.opSupportLimits().output.dataTypes.includes(i)}flush(){}}}}),vs=E({"web/lib/wasm/jsep/webgpu/types.ts"(){}}),pn,St,It,oi,ui,fn,Xn,li,Qo,$c=E({"web/lib/wasm/jsep/webgpu/gpu-data-manager.ts"(){Oe(),vs(),pn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),St=[],It=e=>Math.ceil(Number(e)/16)*16,oi=e=>{for(let t=0;t<St.length;t++){const n=St[t];if(e<=n)return n}return Math.ceil(e/16)*16},ui=1,fn=()=>ui++,Xn=async(e,t,n,s)=>{const i=It(n),r=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{const a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,r,0,i),e.flush(),await r.mapAsync(GPUMapMode.READ);const o=r.getMappedRange();if(s){const u=s();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{r.destroy()}},li=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(const[t]of pn)St.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){const n=t.buffer,s=t.byteOffset,i=t.byteLength,r=It(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);const o=this.backend.device.createBuffer({mappedAtCreation:!0,size:r,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,s,i)),o.unmap();const l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,a.gpuData.buffer,0,r),this.backend.device.queue.submit([l.finish()]),o.destroy(),H("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){const n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");const s=this.storageCache.get(t);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");const i=It(n.originalSize),r=this.backend.getCommandEncoder();this.backend.endComputePass(),r.copyBufferToBuffer(n.gpuData.buffer,0,s.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let s;if(n){if(s=n[0],e===n[1])return H("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=fn();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:e},originalSize:t}),H("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${s}, registered.`),s}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),H("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){const n=oi(e);let s;const i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,r=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||r){const u=(i?this.freeBuffers:this.freeUniformBuffers).get(n);u?u.length>0?s=u.pop():s=this.backend.device.createBuffer({size:n,usage:t}):s=this.backend.device.createBuffer({size:n,usage:t})}else s=this.backend.device.createBuffer({size:n,usage:t});const a={id:fn(),type:0,buffer:s};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),H("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){const t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return H("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){const n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Xn(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(const e of this.buffersPending){const t=pn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){const n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){const n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(const t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){const t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(H("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Qo=(...e)=>new li(...e)}}),di,Q,se=E({"web/lib/wasm/jsep/webgpu/attribute-with-cache-key.ts"(){di=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Q=e=>new di(e)}}),nt,kt,oe,le,P,ne,Yn,Je,Me,R,ot,k,B,Xo,bs,ci,Yo,j=E({"web/lib/wasm/jsep/webgpu/ops/common.ts"(){V(),G(),nt=64,kt=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},oe=(e,t=1)=>{const n=kt(e,t);return typeof n=="string"?n:n[0]},le=(e,t=1)=>{const n=kt(e,t);return typeof n=="string"?n:n[1]},P=(...e)=>{const t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:S.computeStrides(n)})}),t},ne=e=>e%4===0?4:e%2===0?2:1,Yn=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Je=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Me=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,R=(e,t,n,s)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?s==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:s==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,ot=(e,t,n,s,i)=>{const r=typeof n=="number",a=r?n:n.length,o=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,l=kt(t,i),d=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:d,storage:c,tensor:t},f=z=>typeof z=="string"?z:`${z}u`,h={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=r?"uniforms.":"",w=`${m}${e}_shape`,_=`${m}${e}_strides`;let g="";for(let z=0;z<a-1;z++)g+=`
    let dim${z} = current / ${R(_,z,a)};
    let rest${z} = current % ${R(_,z,a)};
    indices[${z}] = dim${z};
    current = rest${z};
    `;g+=`indices[${a-1}] = current;`;const $=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${g}
    return indices;
  }`,y=z=>(h.offsetToIndices=!0,a<2?z:`o2i_${e}(${z})`),v=[];if(a>=2)for(let z=a-1;z>=0;z--)v.push(`${R(_,z,a)} * (indices[${z}])`);const b=a<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${v.join("+")};
  }`,x=z=>(h.indicesToOffset=!0,a<2?z:`i2o_${e}(${z})`),I=(...z)=>a===0?"0u":`${p.indices}(${z.map(f).join(",")})`,T=(z,U)=>a<2?`${z}`:`${R(z,U,a)}`,C=(z,U,J)=>a<2?`${z}=${J};`:`${R(z,U,a)}=${J};`,M={},N=(z,U)=>{h.broadcastedIndicesToOffset=!0;const J=`${U.name}broadcastedIndicesTo${e}Offset`;if(J in M)return`${J}(${z})`;const me=[];for(let we=a-1;we>=0;we--){const ae=U.indicesGet("outputIndices",we+U.rank-a);me.push(`${T(_,we)} * (${ae} % ${T(w,we)})`)}return M[J]=`fn ${J}(outputIndices: ${U.type.indices}) -> u32 {
             return ${me.length>0?me.join("+"):"0u"};
           }`,`${J}(${z})`},W=(z,U)=>(()=>{if(p.storage===p.value)return`${e}[${z}]=${U};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${z}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${z}]=vec2<u32>(u32(${U}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${z}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),A=z=>(()=>{if(p.storage===p.value)return`${e}[${z}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${z}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${z}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${z}] & 0xFFu), bool(${e}[${z}] & 0xFF00u), bool(${e}[${z}] & 0xFF0000u), bool(${e}[${z}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),X=a<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${d} {
    return ${A(`i2o_${e}(indices)`)};
  }`,q=a<2?"":(()=>{const z=o.map(J=>`d${J}: u32`).join(", "),U=o.map(J=>`d${J}`).join(", ");return`
  fn get_${e}(${z}) -> ${d} {
    return get_${e}ByIndices(${I(U)});
  }`})(),O=(...z)=>{if(z.length!==a)throw new Error(`indices length must be ${a}`);const U=z.map(f).join(",");return a===0?A("0u"):a===1?A(U[0]):(h.get=!0,h.getByIndices=!0,h.indicesToOffset=!0,`get_${e}(${U})`)},F=z=>a<2?A(z):(h.getByIndices=!0,h.indicesToOffset=!0,`get_${e}ByIndices(${z})`),D=a<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${d}) {
    ${W(`i2o_${e}(indices)`,"value")}
  }`,K=a<2?"":(()=>{const z=o.map(J=>`d${J}: u32`).join(", "),U=o.map(J=>`d${J}`).join(", ");return`
  fn set_${e}(${z}, value: ${d}) {
    set_${e}ByIndices(${I(U)}, value);
  }`})();return{impl:()=>{const z=[];let U=!1;return h.offsetToIndices&&(z.push($),U=!0),h.indicesToOffset&&(z.push(b),U=!0),h.broadcastedIndicesToOffset&&(Object.values(M).forEach(J=>z.push(J)),U=!0),h.set&&(z.push(K),U=!0),h.setByIndices&&(z.push(D),U=!0),h.get&&(z.push(q),U=!0),h.getByIndices&&(z.push(X),U=!0),!r&&U&&z.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${_} = ${p.indices}(${S.computeStrides(n).join(",")});`),z.join(`
`)},type:p,offsetToIndices:y,indicesToOffset:x,broadcastedIndicesToOffset:N,indices:I,indicesGet:T,indicesSet:C,set:(...z)=>{if(z.length!==a+1)throw new Error(`indices length must be ${a}`);const U=z[a];if(typeof U!="string")throw new Error("value must be string");const J=z.slice(0,a).map(f).join(",");return a===0?W("0u",U):a===1?W(J[0],U):(h.set=!0,h.setByIndices=!0,h.indicesToOffset=!0,`set_${e}(${J}, ${U})`)},setByOffset:W,setByIndices:(z,U)=>a<2?W(z,U):(h.setByIndices=!0,h.indicesToOffset=!0,`set_${e}ByIndices(${z}, ${U});`),get:O,getByOffset:A,getByIndices:F,usage:s,name:e,strides:_,shape:w,rank:a}},k=(e,t,n,s=1)=>ot(e,t,n,"input",s),B=(e,t,n,s=1)=>ot(e,t,n,"output",s),Xo=(e,t,n)=>ot(e,t,n,"atomicOutput",1),bs=(e,t,n,s=1)=>ot(e,t,n,"internal",s),ci=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=nt){const t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],s=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);const i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,r=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*s}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${s})
  fn main(${r}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);const n=e.usage==="input"?"read":"read_write",s=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${s}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";const e=[];for(const{name:t,type:n,length:s}of this.uniforms)if(s&&s>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(s/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(s/4)}>`);else{const i=s==null||s===1?n:`vec${s}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;const e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Yo=(e,t)=>new ci(e,t)}}),pi,hn,fi,hi,mi,gi,fe,Jo,eu,Ne=E({"web/lib/wasm/jsep/webgpu/ops/transpose.ts"(){V(),G(),se(),j(),pi=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},hn=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),fi=(e,t)=>S.sortBasedOnPerm(e,hn(e.length,t)),hi=(e,t,n,s)=>{let i=`fn perm(i: ${s.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let r=0;r<t;++r)i+=`a[${e[r]}]=i[${r}];`;return i+="return a;}"},mi=(e,t)=>{const n=[],s=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&s.push(t[i]);return{newShape:n,newPerm:s}},gi=(e,t)=>{let n=0;for(let s=0;s<e.length;++s)if(t[e[s]]!==1){if(e[s]<n)return!1;n=e[s]}return!0},fe=(e,t)=>{const n=e.dataType,s=e.dims.length,i=hn(s,t),r=fi(e.dims,i);let a=e.dims,o=r;const u=s<2||gi(i,e.dims);let l;if(u)return l=m=>{const w=k("input",n,a,4),_=B("output",n,o,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(w,_)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{const m=S.size(r);return{outputs:[{dims:r,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};const{newShape:d,newPerm:c}=mi(e.dims,i),p=S.areEqual(c,[2,3,1]),f=S.areEqual(c,[3,1,2]);if(d.length===2||p||f){a=p?[d[0],d[1]*d[2]]:f?[d[0]*d[1],d[2]]:d,o=[a[1],a[0]];const m=16;return l=w=>{const _=k("a",n,a.length),g=B("output",n,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(_,g)}
  var<workgroup> tile : array<array<${g.type.value}, ${m+1}>, ${m}>;
  ${w.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${_.getByIndices(`${_.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${g.setByIndices(`${g.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{const w=S.size(r);return{outputs:[{dims:r,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/m),y:Math.ceil(o[0]/m)},programUniforms:[{type:12,data:w},...P(a,o)]}},getShaderSource:l}}return l=m=>{const w=k("a",n,a.length),_=B("output",n,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(w,_)}

  ${hi(i,s,w,_)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{const m=S.size(r);return{outputs:[{dims:r,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...P(a,o)]}},getShaderSource:l}},Jo=(e,t)=>{pi(e.inputs,t.perm),e.compute(fe(e.inputs[0],t.perm))},eu=e=>Q({perm:e.perm})}}),_i,wi,yi,$i,vi,bi,xi,Si,Ii,ki,ye,tu,nu,su,iu,ru,au,ou,uu,lu,du,vc=E({"web/lib/wasm/jsep/webgpu/ops/reduce-shared.ts"(){V(),G(),j(),xs(),Ne(),_i={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},wi={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},yi={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},$i={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},vi=(e,t)=>{const n=[];for(let s=t-e;s<t;++s)n.push(s);return n},bi=(e,t)=>{const n=[],s=e.length;for(let r=0;r<s;r++)t.indexOf(r)===-1&&n.push(e[r]);const i=t.map(r=>e[r]);return[n,i]},xi=(e,t)=>{const n=e.length+t.length,s=[];let i=0;for(let r=0;r<n;r++)t.indexOf(r)===-1?s.push(e[i++]):s.push(1);return s},Si=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Ii=(e,t)=>{const n=[];if(!Si(e,t)){for(let s=0;s<t;++s)e.indexOf(s)===-1&&n.push(s);e.forEach(s=>n.push(s))}return n},ki=(e,t,n,s,i,r,a)=>{const o=n[0].dims,u=S.size(r),l=S.size(a),d=k("_A",n[0].dataType,o),c=B("output",i,r);let p=64;u===1&&(p=256);const f=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,h=m=>`
        ${m.registerUniform("reduceSize","u32").declareVariables(d,c)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${m.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${yi[s]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${_i[s]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${wi[s]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${s==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${$i[s]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},ye=(e,t,n,s)=>{const i=e.inputs.length===1?n:Jn(e.inputs,n);let r=i.axes;r.length===0&&!i.noopWithEmptyAxes&&(r=e.inputs[0].dims.map((f,h)=>h));const a=S.normalizeAxes(r,e.inputs[0].dims.length);let o=a,u=e.inputs[0];const l=Ii(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(fe(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=vi(o.length,u.dims.length));const[d,c]=bi(u.dims,o);let p=d;i.keepDims&&(p=xi(d,a)),e.compute(ki(t,i.cacheKey,[u],s,e.inputs[0].dataType,p,c),{inputs:[u]})},tu=(e,t)=>{ye(e,"ReduceMeanShared",t,"mean")},nu=(e,t)=>{ye(e,"ReduceL1Shared",t,"l1")},su=(e,t)=>{ye(e,"ReduceL2Shared",t,"l2")},iu=(e,t)=>{ye(e,"ReduceLogSumExpShared",t,"logSumExp")},ru=(e,t)=>{ye(e,"ReduceMaxShared",t,"max")},au=(e,t)=>{ye(e,"ReduceMinShared",t,"min")},ou=(e,t)=>{ye(e,"ReduceProdShared",t,"prod")},uu=(e,t)=>{ye(e,"ReduceSumShared",t,"sum")},lu=(e,t)=>{ye(e,"ReduceSumSquareShared",t,"sumSquare")},du=(e,t)=>{ye(e,"ReduceLogSumShared",t,"logSum")}}}),$e,Ti,qt,Jn,ve,zi,Ei,Ci,Ai,Oi,Bi,Ri,Pi,Di,Mi,be,cu,pu,fu,hu,mu,gu,_u,wu,yu,$u,xs=E({"web/lib/wasm/jsep/webgpu/ops/reduce.ts"(){V(),G(),se(),j(),vc(),$e=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ti=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],qt=(e,t,n,s,i,r,a=!1,o=!1)=>{const u=[],l=n[0].dims,d=l.length,c=S.normalizeAxes(i,d),p=!o&&c.length===0;l.forEach((w,_)=>{p||c.indexOf(_)>=0?a&&u.push(1):u.push(w)});const f=u.length,h=S.size(u);return{name:e,shaderCache:t,getShaderSource:w=>{const _=[],g=k("_A",n[0].dataType,d),$=B("output",r,f),y=s(g,$,c);let v=y[2];for(let b=0,x=0;b<d;b++)p||c.indexOf(b)>=0?(a&&x++,v=`for(var j${b}: u32 = 0; j${b} < ${l[b]}; j${b}++) {
                  ${y[2].includes("last_index")?`let last_index = j${b};`:""}
                  ${g.indicesSet("input_indices",b,`j${b}`)}
                  ${v}
                }`):(_.push(`${g.indicesSet("input_indices",b,$.indicesGet("output_indices",x))};`),x++);return`

        ${w.registerUniform("output_size","u32").declareVariables(g,$)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${g.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${_.join(`
`)}
          ${y[0]}       // init ops for reduce max/min
          ${y[1]}
          ${v}
          ${y[3]}
          ${y.length===4?$.setByOffset("global_idx","value"):y.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:r}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...P(l,u)]})}},Jn=(e,t)=>{const n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(s=>n.push(Number(s))),Q({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},ve=(e,t,n,s)=>{const i=e.inputs,r=i.length===1?n:Jn(i,n);e.compute(qt(t,{hint:r.cacheKey,inputDependencies:["rank"]},[i[0]],r.noopWithEmptyAxes&&r.axes.length===0?Ti:s,r.axes,i[0].dataType,r.keepDims,r.noopWithEmptyAxes),{inputs:[0]})},zi=(e,t)=>{$e(e.inputs),ve(e,"ReduceLogSum",t,(s,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${s.getByIndices("input_indices")};`,"value = log(value);"])},Ei=(e,t)=>{$e(e.inputs),ve(e,"ReduceL1",t,(s,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${s.getByIndices("input_indices")});`,""])},Ci=(e,t)=>{$e(e.inputs),ve(e,"ReduceL2",t,(s,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${s.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ai=(e,t)=>{$e(e.inputs),ve(e,"ReduceLogSumExp",t,(s,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${s.getByIndices("input_indices")});`,"value = log(value);"])},Oi=(e,t)=>{$e(e.inputs),ve(e,"ReduceMax",t,(s,i,r)=>{const a=[];for(let o=0;o<s.rank;o++)(r.indexOf(o)>=0||r.length===0)&&a.push(s.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};`,`value = max(value, ${s.getByIndices("input_indices")});`,""]})},Bi=(e,t)=>{$e(e.inputs),ve(e,"ReduceMean",t,(s,i,r)=>{let a=1;for(let o=0;o<s.rank;o++)(r.indexOf(o)>=0||r.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${s.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},Ri=(e,t)=>{$e(e.inputs),ve(e,"ReduceMin",t,(s,i,r)=>{const a=[];for(let o=0;o<s.rank;o++)(r.indexOf(o)>=0||r.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};`,`value = min(value, ${s.getByIndices("input_indices")});`,""]})},Pi=(e,t)=>{$e(e.inputs),ve(e,"ReduceProd",t,(s,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${s.getByIndices("input_indices")};`,""])},Di=(e,t)=>{$e(e.inputs),ve(e,"ReduceSum",t,(s,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${s.getByIndices("input_indices")};`,""])},Mi=(e,t)=>{$e(e.inputs),ve(e,"ReduceSumSquare",t,(s,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${s.getByIndices("input_indices")}; value += t * t;`,""])},be=(e,t,n)=>{if(t.length===0)return n;let s=1,i=1;for(let r=0;r<t.length;r++)t.indexOf(r)===-1?s*=e[r]:i*=e[r];return i<32&&s>1024},cu=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bi(e,t):tu(e,t)},pu=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ei(e,t):nu(e,t)},fu=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ci(e,t):su(e,t)},hu=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ai(e,t):iu(e,t)},mu=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oi(e,t):ru(e,t)},gu=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ri(e,t):au(e,t)},_u=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pi(e,t):ou(e,t)},wu=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Di(e,t):uu(e,t)},yu=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mi(e,t):lu(e,t)},$u=(e,t)=>{be(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zi(e,t):du(e,t)}}}),mn,vu,bu,es,bc=E({"web/lib/wasm/jsep/webgpu/ops/argminmax.ts"(){V(),se(),xs(),mn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},vu=(e,t)=>{mn(e.inputs);const n=(s,i,r)=>{const a=[];for(let o=0;o<s.rank;o++)(r.indexOf(o)>=0||r.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(qt("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},bu=(e,t)=>{mn(e.inputs);const n=(s,i,r)=>{const a=[];for(let o=0;o<s.rank;o++)(r.indexOf(o)>=0||r.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(qt("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},es=e=>Q(e)}}),Ni,Tt,Ui,Vi,qi,yt,Li,xu,Ss=E({"web/lib/wasm/jsep/webgpu/ops/attention.ts"(){V(),G(),vs(),j(),Ni=(e,t)=>{const n=e[0],s=e[1],i=e[2],r=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');const u=n.dims[0],l=n.dims[1],d=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(s.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(s.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==s.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(const $ of t.qkvHiddenSizes)if($%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}const h=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let m=0;if(a){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(m=a.dims[3])}const w=h+m,_=-1,g=0;if(r)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:m,kvSequenceLength:h,totalSequenceLength:w,maxSequenceLength:_,inputHiddenSize:d,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Tt=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Ui=(e,t,n,s,i,r,a,o)=>{const u=ne(a?1:r);let l=64;const d=r/u;d<l&&(l=32);const c=Math.ceil(r/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:s},{type:12,data:i},{type:12,data:d},{type:12,data:c}],f=oe(e.dataType,u),h=le(1,u),m=["type"];a&&m.push("type"),o&&m.push("type");const w=_=>{const g=B("x",e.dataType,e.dims,u),$=[g],y=a?k("seq_lens",a.dataType,a.dims):void 0;y&&$.push(y);const v=o?k("total_sequence_length_input",o.dataType,o.dims):void 0;v&&$.push(v);const b=le(e.dataType),x=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${_.registerUniforms(x).declareVariables(...$)}
  ${_.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Tt(y,v,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${h}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${h}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${h}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${h}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${g.type.value}(${b}(1.0) / ${b}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${h}(x[offset + i]);
        x[offset + i] = ${g.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${g.type.value}(${b}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:m},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},Vi=(e,t,n,s,i,r,a,o,u)=>{const l=a+r.kvSequenceLength,d=[r.batchSize,r.numHeads,r.sequenceLength,l],c=e>1&&s,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=c?[r.batchSize,p,l,r.headSize]:void 0,h=r.nReps?r.nReps:1,m=r.scale===0?1/Math.sqrt(r.headSize):r.scale,w=ne(r.headSize),_=r.headSize/w,g=12,$={x:Math.ceil(l/g),y:Math.ceil(r.sequenceLength/g),z:r.batchSize*r.numHeads},y=[{type:12,data:r.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:1,data:m},{type:12,data:a},{type:12,data:r.kvSequenceLength},{type:12,data:h}],v=c&&s&&S.size(s.dims)>0,b=["type","type"];v&&b.push("type"),i&&b.push("type"),o&&b.push("type"),u&&b.push("type");const x=[{dims:d,dataType:t.dataType,gpuDataType:0}];c&&x.push({dims:f,dataType:t.dataType,gpuDataType:0});const I=T=>{const C=k("q",t.dataType,t.dims,w),M=k("key",n.dataType,n.dims,w),N=[C,M];if(v){const D=k("past_key",s.dataType,s.dims,w);N.push(D)}i&&N.push(k("attention_bias",i.dataType,i.dims));const W=o?k("seq_lens",o.dataType,o.dims):void 0;W&&N.push(W);const A=u?k("total_sequence_length_input",u.dataType,u.dims):void 0;A&&N.push(A);const X=B("output",t.dataType,d),q=[X];c&&q.push(B("present_key",t.dataType,f,w));const O=le(1,w),F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;

  var<workgroup> tileQ: array<${C.type.storage}, ${g*g}>;
  var<workgroup> tileK: array<${C.type.storage}, ${g*g}>;
  ${T.registerUniforms(F).declareVariables(...N,...q)}
  ${T.mainStart([g,g,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${h===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${h===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Tt(W,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${v&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${O}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${v&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${O}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${X.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${s!==void 0};${e}`,inputDependencies:b},getRunData:()=>({outputs:x,dispatchGroup:$,programUniforms:y}),getShaderSource:I}},qi=(e,t,n,s,i,r,a=void 0,o=void 0)=>{const u=r+i.kvSequenceLength,l=i.nReps?i.nReps:1,d=i.vHiddenSize*l,c=e>1&&s,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=c?[i.batchSize,p,u,i.headSize]:void 0,h=[i.batchSize,i.sequenceLength,d],m=12,w={x:Math.ceil(i.vHeadSize/m),y:Math.ceil(i.sequenceLength/m),z:i.batchSize*i.numHeads},_=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:d},{type:12,data:r},{type:12,data:i.kvSequenceLength},{type:12,data:l}],g=c&&s&&S.size(s.dims)>0,$=["type","type"];g&&$.push("type"),a&&$.push("type"),o&&$.push("type");const y=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&y.push({dims:f,dataType:t.dataType,gpuDataType:0});const v=b=>{const x=k("probs",t.dataType,t.dims),I=k("v",n.dataType,n.dims),T=[x,I];g&&T.push(k("past_value",s.dataType,s.dims));const C=a?k("seq_lens",a.dataType,a.dims):void 0;a&&T.push(C);const M=o?k("total_sequence_length_input",o.dataType,o.dims):void 0;o&&T.push(M);const W=[B("output",t.dataType,h)];c&&W.push(B("present_value",t.dataType,f));const A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${m}u;
  var<workgroup> tileQ: array<${x.type.value}, ${m*m}>;
  var<workgroup> tileV: array<${x.type.value}, ${m*m}>;
  ${b.registerUniforms(A).declareVariables(...T,...W)}
  ${b.mainStart([m,m,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Tt(C,M,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${g&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${x.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${g&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${s!==void 0};${e}`,inputDependencies:$},getRunData:()=>({outputs:y,dispatchGroup:w,programUniforms:_}),getShaderSource:v}},yt=(e,t,n,s,i,r,a,o,u,l,d=void 0,c=void 0)=>{const p=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),f=p>1?l.pastSequenceLength:0,h=f+l.kvSequenceLength,m=u&&S.size(u.dims)>0?u:void 0,w=[t,n];p>1&&a&&S.size(a.dims)>0&&w.push(a),m&&w.push(m),d&&w.push(d),c&&w.push(c);const _=e.compute(Vi(p,t,n,a,m,l,f,d,c),{inputs:w,outputs:p>1?[-1,1]:[-1]})[0];e.compute(Ui(_,l.batchSize,l.numHeads,f,l.sequenceLength,h,d,c),{inputs:d&&c?[_,d,c]:[_],outputs:[]});const g=[_,s];p>1&&o&&S.size(o.dims)>0&&g.push(o),d&&g.push(d),c&&g.push(c),e.compute(qi(p,_,s,o,l,f,d,c),{inputs:g,outputs:p>1?[0,2]:[0]})},Li=(e,t)=>{const n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],s=t.sequenceLength,i=t.inputHiddenSize,r=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:s},{type:12,data:i},{type:12,data:r},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=c=>{const p=B("output_q",u[0].dataType,n),f=B("output_k",u[0].dataType,n),h=B("output_v",u[0].dataType,n),m=k("input",u[0].dataType,u[0].dims),w=k("weight",u[1].dataType,u[1].dims),_=k("bias",u[2].dataType,u[2].dims),g=m.type.storage,$=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${g}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${g}, ${a*a}>;
  var<workgroup> tileWeightK: array<${g}, ${a*a}>;
  var<workgroup> tileWeightV: array<${g}, ${a*a}>;
  ${c.registerUniforms($).declareVariables(m,w,_,p,f,h)}
  ${c.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${g}(0);
    var valueK = ${g}(0);
    var valueV = ${g}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},xu=(e,t)=>{const n=Ni(e.inputs,t),[s,i,r]=Li(e,n);return yt(e,s,i,r,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}}),Gi,Wi,ji,Su,xc=E({"web/lib/wasm/jsep/webgpu/ops/batch-norm.ts"(){ke(),V(),G(),se(),j(),Gi=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");const n=(s,i,r)=>{const a=i.length;if(a!==s.length)throw new Error(`${r}: num dimensions != ${a}`);i.forEach((o,u)=>{if(o!==s[u])throw new Error(`${r}: dim[${u}] do not match`)})};if(e[0].dims.length>1){const s=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,s,"Invalid input scale"),n(e[2].dims,s,"Invalid input B"),n(e[3].dims,s,"Invalid input mean"),n(e[4].dims,s,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Wi=(e,t)=>{const{epsilon:n,spatial:s,format:i}=t,r=e[0].dims,a=s?ne(r[r.length-1]):1,o=i==="NHWC"&&r.length>1?a:1,u=S.size(r)/a,l=s,d=l?r.length:r,c=k("x",e[0].dataType,e[0].dims,a),p=k("scale",e[1].dataType,e[1].dims,o),f=k("bias",e[2].dataType,e[2].dims,o),h=k("inputMean",e[3].dataType,e[3].dims,o),m=k("inputVar",e[4].dataType,e[4].dims,o),w=B("y",e[0].dataType,d,a),_=()=>{let $="";if(s)$=`let cOffset = ${r.length===1?"0u":i==="NHWC"?`outputIndices[${r.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")$=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{$=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${r.length-1}];`;for(let y=1;y<p.rank;y++)$+=`cIndices[${y}] = outputIndices[${y}];`;$+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return $},g=$=>`
  const epsilon = ${n};
  ${$.registerUniform("outputSize","u32").declareVariables(c,p,f,h,m,w)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${a}`)};
    ${_()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${h.getByOffset("cOffset")};
    let inputVar = ${m.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${s}_${a}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...P(r)]:[{type:12,data:u}]})}},ji=e=>Q(e),Su=(e,t)=>{const{inputs:n,outputCount:s}=e,i=ji({...t,outputCount:s});if(te.webgpu.validateInputContent&&Gi(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Wi(n,i))}}}),Fi,Ki,Iu,Sc=E({"web/lib/wasm/jsep/webgpu/ops/bias-add.ts"(){G(),j(),Fi=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ki=e=>{const t=e[0].dims,n=e[0].dims[2],s=S.size(t)/4,i=e[0].dataType,r=k("input",i,t,4),a=k("bias",i,[n],4),o=k("residual",i,t,4),u=B("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:d=>`
  const channels = ${n}u / 4;
  ${d.declareVariables(r,a,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let value = ${r.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Iu=e=>{Fi(e.inputs),e.compute(Ki(e.inputs))}}}),Hi,Z,ku,Tu,zu,Eu,Cu,Au,Ou,Bu,Ru,Zi,Pu,Du,Mu,Nu,gt,Uu,Pt,Vu,qu,Lu,Gu,Wu,ju,Fu,Ku,Hu,Zu,Qu,Xu,Yu,Ju,el,tl,gn,nl,ts,ns,sl,il,rl,Qi,Xi,al,Is=E({"web/lib/wasm/jsep/webgpu/ops/unary-op.ts"(){V(),G(),se(),j(),Hi=(e,t,n,s,i,r,a)=>{const o=Math.ceil(t/4);let u="";typeof i=="string"?u=`${i}(a)`:u=i("a");const l=k("inputData",n,[o],4),d=B("outputData",s,[o],4),c=[{name:"vec_size",type:"u32"}];return a&&c.push(...a),`
      ${e.registerUniforms(c).declareVariables(l,d)}

  ${r??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},Z=(e,t,n,s,i,r=e.dataType,a,o)=>{const u=[{type:12,data:Math.ceil(S.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Hi(l,S.size(e.dims),e.dataType,r,n,s,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:r}],dispatchGroup:{x:Math.ceil(S.size(l[0].dims)/64/4)},programUniforms:u})}},ku=e=>{e.compute(Z(e.inputs[0],"Abs","abs"))},Tu=e=>{e.compute(Z(e.inputs[0],"Acos","acos"))},zu=e=>{e.compute(Z(e.inputs[0],"Acosh","acosh"))},Eu=e=>{e.compute(Z(e.inputs[0],"Asin","asin"))},Cu=e=>{e.compute(Z(e.inputs[0],"Asinh","asinh"))},Au=e=>{e.compute(Z(e.inputs[0],"Atan","atan"))},Ou=e=>{e.compute(Z(e.inputs[0],"Atanh","atanh"))},Bu=e=>Q(e),Ru=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Z(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Zi=e=>{let t,n;const s=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=s?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=s?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Q({min:t,max:n})},Pu=(e,t)=>{const n=t||Zi(e.inputs),s=le(e.inputs[0].dataType);e.compute(Z(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${s}>(uniforms.min), vec4<${s}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:s},{name:"max",type:s}]),{inputs:[0]})},Du=e=>{e.compute(Z(e.inputs[0],"Ceil","ceil"))},Mu=e=>{e.compute(Z(e.inputs[0],"Cos","cos"))},Nu=e=>{e.compute(Z(e.inputs[0],"Cosh","cosh"))},gt=e=>Q(e),Uu=(e,t)=>{const n=le(e.inputs[0].dataType);e.compute(Z(e.inputs[0],"Elu",s=>`elu_vf32(${s})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Pt=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Vu=e=>{const t=le(e.inputs[0].dataType);e.compute(Z(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Pt(t)))},qu=e=>{e.compute(Z(e.inputs[0],"Exp","exp"))},Lu=e=>{e.compute(Z(e.inputs[0],"Floor","floor"))},Gu=e=>{const t=le(e.inputs[0].dataType);e.compute(Z(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Pt(t)))},Wu=(e,t)=>{const n=le(e.inputs[0].dataType);e.compute(Z(e.inputs[0],"LeakyRelu",s=>`select(leaky_relu_alpha_ * ${s}, ${s}, ${s} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},ju=e=>{e.compute(Z(e.inputs[0],"Not",t=>`!${t}`))},Fu=e=>{e.compute(Z(e.inputs[0],"Neg",t=>`-${t}`))},Ku=e=>{e.compute(Z(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Hu=e=>{const t=le(e.inputs[0].dataType);e.compute(Z(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Zu=e=>{e.compute(Z(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Qu=e=>Q(e),Xu=(e,t)=>{const n=le(e.inputs[0].dataType);e.compute(Z(e.inputs[0],"HardSigmoid",s=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${s} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Yu=e=>{e.compute(Z(e.inputs[0],"Sin","sin"))},Ju=e=>{e.compute(Z(e.inputs[0],"Sinh","sinh"))},el=e=>{e.compute(Z(e.inputs[0],"Sqrt","sqrt"))},tl=e=>{e.compute(Z(e.inputs[0],"Tan","tan"))},gn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,nl=e=>{e.compute(Z(e.inputs[0],"Tanh",gn))},ts=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${gn("v")};
}
`,ns=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,sl=e=>{const t=le(e.inputs[0].dataType);e.compute(Z(e.inputs[0],"FastGelu",ns,ts(t),void 0,e.inputs[0].dataType))},il=(e,t)=>{const n=le(e.inputs[0].dataType);return e.compute(Z(e.inputs[0],"ThresholdedRelu",s=>`select(vec4<${n}>(0.0), ${s}, ${s} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},rl=e=>{e.compute(Z(e.inputs[0],"Log","log"))},Qi=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Xi=e=>`quick_gelu_impl(${e})`,al=(e,t)=>{const n=le(e.inputs[0].dataType);e.compute(Z(e.inputs[0],"QuickGelu",Xi,Qi(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}}),Yi,Ji,ol,Ic=E({"web/lib/wasm/jsep/webgpu/ops/bias-split-gelu.ts"(){G(),j(),Is(),Yi=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ji=e=>{const t=e[0].dims.slice();t[2]=t[2]/2;const n=k("input",e[0].dataType,e[0].dims,4),s=k("bias",e[0].dataType,[e[0].dims[2]],4),i=B("output",e[0].dataType,t,4),r=S.size(t)/4,a=oe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(n,s,i)}

  ${Pt(a)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},ol=e=>{Yi(e.inputs),e.compute(Ji(e.inputs))}}}),er,tr,xe,ul,ll,dl,cl,pl,fl,hl,ml,gl,_l,kc=E({"web/lib/wasm/jsep/webgpu/ops/binary-op.ts"(){V(),G(),j(),er=(e,t,n,s,i,r,a,o,u,l,d,c)=>{let p,f;typeof o=="string"?p=f=(g,$)=>`${o}((${g}),(${$}))`:typeof o=="function"?p=f=o:(p=o.scalar,f=o.vector);const h=B("outputData",d,s.length,4),m=k("aData",u,t.length,4),w=k("bData",l,n.length,4);let _;if(i)if(r){const g=S.size(t)===1,$=S.size(n)===1,y=t.length>0&&t[t.length-1]%4===0,v=n.length>0&&n[n.length-1]%4===0;g||$?_=h.setByOffset("global_idx",f(g?`${m.type.value}(${m.getByOffset("0")}.x)`:m.getByOffset("global_idx"),$?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):_=`
            let outputIndices = ${h.offsetToIndices("global_idx * 4u")};
            let offsetA = ${m.broadcastedIndicesToOffset("outputIndices",h)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",h)};
            ${h.setByOffset("global_idx",f(a||y?m.getByOffset("offsetA / 4u"):`${m.type.value}(${m.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||v?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=h.setByOffset("global_idx",f(m.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!r)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");const g=($,y,v="")=>{const b=`aData[indexA${y}][componentA${y}]`,x=`bData[indexB${y}][componentB${y}]`;return`
            let outputIndices${y} = ${h.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offsetA${y} = ${m.broadcastedIndicesToOffset(`outputIndices${y}`,h)};
            let offsetB${y} = ${w.broadcastedIndicesToOffset(`outputIndices${y}`,h)};
            let indexA${y} = offsetA${y} / 4u;
            let indexB${y} = offsetB${y} / 4u;
            let componentA${y} = offsetA${y} % 4u;
            let componentB${y} = offsetB${y} % 4u;
            ${$}[${y}] = ${v}(${p(b,x)});
          `};d===9?_=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:_=`
            ${g("outputData[global_idx]",0)}
            ${g("outputData[global_idx]",1)}
            ${g("outputData[global_idx]",2)}
            ${g("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(m,w,h)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},tr=(e,t,n,s,i,r,a=n.dataType)=>{const o=n.dims.map(m=>Number(m)??1),u=s.dims.map(m=>Number(m)??1),l=!S.areEqual(o,u);let d=o,c=S.size(o),p=!1,f=!1;const h=[l];if(l){const m=tt.calcShape(o,u,!1);if(!m)throw new Error("Can't perform binary op on the given tensors");d=m.slice(),c=S.size(d);const w=S.size(o)===1,_=S.size(u)===1,g=o.length>0&&o[o.length-1]%4===0,$=u.length>0&&u[u.length-1]%4===0;h.push(w),h.push(_),h.push(g),h.push($);let y=1;for(let v=1;v<d.length;v++){const b=o[o.length-v],x=u[u.length-v];if(b===x)y*=b;else break}y%4===0?(f=!0,p=!0):(w||_||g||$)&&(p=!0)}else p=!0;return h.push(p),{name:e,shaderCache:{hint:t+h.map(m=>m.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:m=>er(m,o,u,d,p,l,f,i,n.dataType,s.dataType,a,r),getRunData:()=>({outputs:[{dims:d,dataType:a}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(S.size(d)/4)},...P(o,u,d)]})}},xe=(e,t,n,s,i,r)=>{e.compute(tr(t,i??"",e.inputs[0],e.inputs[1],n,s,r))},ul=e=>{xe(e,"Add",(t,n)=>`${t}+${n}`)},ll=e=>{xe(e,"Div",(t,n)=>`${t}/${n}`)},dl=e=>{xe(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},cl=e=>{xe(e,"Mul",(t,n)=>`${t}*${n}`)},pl=e=>{const t=k("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;xe(e,"Pow",{scalar:(s,i)=>`pow_custom(${s},${i})`,vector:(s,i)=>`pow_vector_custom(${s},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},fl=e=>{xe(e,"Sub",(t,n)=>`${t}-${n}`)},hl=e=>{xe(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},ml=e=>{xe(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},gl=e=>{xe(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},_l=e=>{xe(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}}),nr,sr,ir,rr,wl,yl,Tc=E({"web/lib/wasm/jsep/webgpu/ops/concat.ts"(){V(),G(),se(),j(),nr=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");const n=0,s=e[n],i=s.dataType,r=s.dims.length;e.forEach((a,o)=>{if(o!==n){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==r)throw new Error("input tensors should have the same shape");a.dims.forEach((u,l)=>{if(l!==t&&u!==s.dims[l])throw new Error("non concat dimensions must match")})}})},sr=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ir=(e,t)=>{const n=e.length,s=[];for(let i=0;i<n;++i){const r=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?s.push(r):i===0?s.push(`if (inputIndex == ${i}u) { ${r} }`):i===n-1?s.push(`else { ${r} }`):s.push(`else if (inputIndex == ${i}) { ${r} }`)}return s.join(`
`)},rr=(e,t,n,s)=>{const i=S.size(n),r=new Array(e.length),a=new Array(e.length);let o=0;const u=[],l=[],d=[{type:12,data:i}];for(let m=0;m<e.length;++m)o+=e[m].dims[t],r[m]=o,l.push(e[m].dims.length),a[m]=k(`input${m}`,s,l[m]),u.push("rank"),d.push({type:12,data:r[m]});for(let m=0;m<e.length;++m)d.push(...P(e[m].dims));d.push(...P(n));const c=B("output",s,n.length),p=c.indicesGet("indices",t),f=Array.from(Array(r.length).keys()).map(m=>`uniforms.sizeInConcatAxis${m}`).join(","),h=m=>`

  ${(()=>{m.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)m.registerUniform(`sizeInConcatAxis${w}`,"u32");return m.declareVariables(...a,c)})()}

  ${sr(r.length,f)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${r.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ir(a,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:h}},wl=(e,t)=>{const n=e.inputs,s=n[0].dims,i=S.normalizeAxis(t.axis,s.length);nr(n,i);const r=s.slice();r[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);const a=n.filter(o=>S.size(o.dims)>0);e.compute(rr(a,i,r,n[0].dataType),{inputs:a})},yl=e=>Q({axis:e.axis})}}),Fe,Ke,He,ks,Qe=E({"web/lib/wasm/jsep/webgpu/ops/fuse-utils.ts"(){V(),G(),Fe=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ke=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},He=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ks=e=>{const t=e?.activation||"";if(t==="HardSigmoid"){const[n,s]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:s}}else if(t==="Clip"){const[n,s]=e?.activation_params||[jo,Fo];return{activation:t,clipMax:s,clipMin:n}}else if(t==="LeakyRelu"){const[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}}),ue,$l,Ts=E({"web/lib/wasm/jsep/webgpu/ops/3rd-party/activation_util.ts"(){ue=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},$l=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}}),vl,zc=E({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv_util.ts"(){vl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}}),wt,zs,Es=E({"web/lib/wasm/jsep/webgpu/ops/matmul-shaders.ts"(){V(),G(),j(),Qe(),wt=(e,t,n,s,i)=>{const r=s-n;return`
      ${Array.from({length:n}).map((a,o)=>`
      if (${R(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,R(i,o+r,s))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},zs=(e,t,n,s,i=!1,r)=>{const a=e[0].dims,o=e[1].dims,u=a[a.length-2],l=o[o.length-1],d=a[a.length-1],c=ne(l),p=ne(d),f=ne(u),h=S.size(n)/c/f,m=e.length>2,w=s?s.slice(0,-2):n.slice(0,-2),g=[S.size(w),u,l],$=[{type:12,data:h},{type:12,data:u},{type:12,data:l},{type:12,data:d}];Ke(t,$),$.push(...P(w,a,o)),m&&$.push(...P(e[2].dims)),$.push(...P(g));const y=v=>{const b=bs("batch_dims",e[0].dataType,w.length),x=k("a",e[0].dataType,a.length,p),I=k("b",e[1].dataType,o.length,c),T=B("output",e[0].dataType,g.length,c),C=oe(T.type.tensor),M=Fe(t,T.type.value,C),N=[x,I];let W="";if(m){const q=i?c:1;N.push(k("bias",e[2].dataType,e[2].dims.length,q)),W=`${i?`value += bias[col / ${q}];`:`value += ${T.type.value}(bias[row + i]);`}`}const A=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];He(t,A);const X=()=>{let q=`var a_data: ${x.type.value};`;for(let O=0;O<p;O++)q+=`
              let b_data${O} = b[(b_offset + (k + ${O}) * uniforms.N + col) / ${c}];`;for(let O=0;O<f;O++){q+=`a_data = a[(a_offset + (row + ${O}) * uniforms.K + k) / ${p}];`;for(let F=0;F<p;F++)q+=`
            values[${O}] = fma(${I.type.value}(a_data${p===1?"":`[${F}]`}), b_data${F}, values[${O}]);
`}return q};return`
  ${v.registerUniforms(A).registerInternalVariables(b).declareVariables(...N,T)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${b.offsetToIndices("batch")};`}

    var a_indices: ${x.type.indices};
    ${wt("a_indices",x,x.rank-2,b.rank,"batch_indices")}
    ${x.indicesSet("a_indices",x.rank-2,0)}
    ${x.indicesSet("a_indices",x.rank-1,0)}
    let a_offset = ${x.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${wt("b_indices",I,I.rank-2,b.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${T.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${X()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${W}
      ${M}
      let cur_indices = ${T.type.indices}(batch, row + i, col);
      let offset = ${T.indicesToOffset("cur_indices")};
      ${T.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${f};${i}`,inputDependencies:m?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:$}),getShaderSource:y}}}}),ar,or,ss,_n,ur,is,lr,Lt,Cs=E({"web/lib/wasm/jsep/webgpu/ops/3rd-party/matmul_packed_webgpu.ts"(){V(),G(),j(),Qe(),Es(),Ts(),ar=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,or=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ss=(e,t,n="f32",s,i=!1,r=32,a=!1,o=32)=>{const u=t[1]*e[1],l=t[0]*e[0],d=i?u:r,c=i?r:u,p=d/t[0],f=r/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&d%t[0]===0&&r%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${r} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${n}>, ${d/p}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${r}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${p};
const tileInner = ${r};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${a?`${Math.ceil(o/r)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ar(i,s)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${s?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${p===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${or(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},_n=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ur=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",is=(e,t,n="f32",s,i=!1,r=32,a=!1,o=32,u=!1)=>{const l=e[1]*t[1],d=e[0]*t[0],c=i?l:r,p=i?r:l;if(!(p%t[1]===0&&c%t[0]===0&&r%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${r} must be divisible by workgroupSize[1]${t[1]}`);const f=p/t[1],h=c/t[0],m=r/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${_n(i,s)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${r}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${s?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${h};
let tileRowB = i32(localId.y) * ${m};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${h}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${_n(i,s)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${s?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${ur(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${c}>, ${p}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${d}>, ${r}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${r};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/r)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${w}
  }
`},lr=(e,t,n,s,i=!1)=>{const[r,a,o,u]=s,l=oe(s[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${r.type.indices}) -> ${ue(e,l)} {
      var value = ${ue(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${wt("aIndices",a,a.rank-2,r.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${r.type.indices}) -> ${ue(e,l)} {
      var value = ${ue(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${wt("bIndices",o,o.rank-2,r.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ue(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${ue(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Lt=(e,t,n,s,i=!1,r)=>{const a=e[0].dims,o=e[1].dims,u=a.slice(0,-2),l=o.slice(0,-2),d=s?s.slice(0,-2):n.slice(0,-2),c=S.size(d),p=a[a.length-2],f=a[a.length-1],h=o[o.length-1],m=f%4===0&&h%4===0,w=p<=8?[4,1,1]:[4,4,1],_=[8,8,1],g=[Math.ceil(h/_[0]/w[0]),Math.ceil(p/_[1]/w[1]),Math.ceil(c/_[2]/w[2])],$=m?4:1,y=[...u,p,f/$],v=y.length,b=[...l,f,h/$],x=b.length,I=[c,p,h/$],T=[{type:6,data:p},{type:6,data:h},{type:6,data:f}];Ke(t,T),T.push(...P(d,y,b));const C=["rank","rank"],M=e.length>2;M&&(T.push(...P(e[2].dims)),C.push("rank")),T.push(...P(I));const N=W=>{const A=d.length,X=bs("batchDims",e[0].dataType,A,1),q=oe(e[0].dataType),O=k("a",e[0].dataType,v,$),F=k("b",e[1].dataType,x,$),D=B("result",e[0].dataType,I.length,$),K=[O,F];if(M){const U=i?$:1;K.push(k("bias",e[2].dataType,e[2].dims.length,U))}const he=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];He(t,he);const ie=oe(D.type.tensor),L=Fe(t,D.type.value,ie),z=lr($,M,L,[X,O,F,D],i);return`
  ${W.registerUniforms(he).registerInternalVariables(X).declareVariables(...K,D)}
  ${z}
  ${m?ss(w,_,q,X):is(w,_,q,X)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${m};${i}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:T}),getShaderSource:N}}}}),dr,bl,Ec=E({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv2d_mm_webgpu.ts"(){V(),Oe(),j(),Qe(),Ts(),zc(),Cs(),dr=(e,t,n,s,i=!1,r,a=4,o=4,u=4,l="f32")=>{const d=C=>{switch(C){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},c=C=>{switch(C){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},p=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,f=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,h=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",m=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",_=e?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${ue(a,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${h} && xCol >= 0 && xCol < ${m}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(a)}
    }
    return resData;`,$=e?t&&s?`
    let col = colIn * ${a};
    ${g}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${g}
    }
    return ${ue(a,l)}(0.0);`:s&&n?`
    let col = colIn * ${a};
    ${g}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${ue(a,l)}(0.0);`,y=e?s&&n?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${ue(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${ue(o,l)}(0.0);`,v=ue(u,l),b=ue(e?a:o,l),x=ue(e?o:a,l),I=Fe(r,v,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${b} {
      ${e?$:y}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${x} {
      ${e?y:$}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${v}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${$l(i)}
      ${I}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},bl=(e,t,n,s,i,r,a,o,u)=>{const l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],c=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],h=l?n[3]:n[1],m=l&&(d%4===0||d%3===0)&&h%4===0,w=l?h:p*f,_=l?p*f:h,g=[8,8,1],$=s<=8?[4,1,1]:[4,4,1],y=[Math.ceil(w/g[0]/$[0]),Math.ceil(_/g[1]/$[1]),Math.ceil(c/g[2]/$[2])];H("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${y}`);const v=m?l&&d%4!==0?3:4:1,b=g[1]*$[1],x=g[0]*$[0],I=Math.max(g[0]*v,g[1]),T=s%b===0,C=i%x===0,M=r%I===0,N=m?[v,4,4]:[1,1,1],W=[{type:6,data:s},{type:6,data:i},{type:6,data:r},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ke(t,W),W.push(...P(e[0].dims,e[1].dims));const A=["rank","rank"];a&&(W.push(...P(e[2].dims)),A.push("rank")),W.push(...P(n));const X=q=>{const O=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];He(t,O);const F=m?4:1,D=oe(e[0].dataType);let K=`
      fn setOutputAtIndex(flatIndex : i32, value : ${m?`vec4<${D}>`:D}) {
        result[flatIndex] = ${m?`vec4<${D}>`:D}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${m?`vec4<${D}>`:D}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${m?"/ 4":""}, value);
      }`;const he=k("x",e[0].dataType,e[0].dims.length,v===3?1:v),ie=k("w",e[1].dataType,e[1].dims.length,F),L=[he,ie],z=B("result",e[0].dataType,n.length,F);if(a){const U=k("bias",e[2].dataType,e[2].dims.length,F);L.push(U),K+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${m?`vec4<${D}>`:D} {
          return bias[coords.${l?"w":"y"}${m?"/ 4":""}];
        }`}return`
        ${vl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${q.registerUniforms(O).declareVariables(...L,z)}
        ${K}
        ${dr(l,T,C,M,a,t,N[0],N[1],N[2],D)}
        ${m?ss($,g,D,void 0,!l,I):is($,g,D,void 0,!l,I,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${v};${m};${T};${C};${M};${b};${x};${I}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:y[0],y:y[1],z:y[2]},programUniforms:W}),getShaderSource:X}}}}),cr,wn,ut,pr,yn,fr,xl,Sl,Cc=E({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv3d_naive_webgpu.ts"(){V(),Oe(),G(),j(),Qe(),Ts(),cr=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},wn=e=>typeof e=="number"?[e,e,e]:e,ut=(e,t)=>t<=1?e:e+(e-1)*(t-1),pr=(e,t,n,s=1)=>{const i=ut(t,s);return Math.floor((e[0]*(n-1)-n+i)/2)},yn=(e,t,n,s,i)=>{i==null&&(i=pr(e,t[0],s[0]));const r=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(r[a]=Math.trunc((e[a]-t[a]+2*i)/s[a]+1));return r},fr=(e,t,n,s,i,r,a,o,u,l)=>{let d,c,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};const h=yn([t,n,s,1],[o,u,l],1,[i,r,a],e);c=h[0],p=h[1],f=h[2]}else if(Array.isArray(e)){if(!e.every((m,w,_)=>m===_[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};const h=yn([t,n,s,1],[o,u,l],1,[i,r,a],e[0]);c=h[0],p=h[1],f=h[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(n/r),f=Math.ceil(s/a);const h=(c-1)*i+o-t,m=(p-1)*r+u-n,w=(f-1)*a+l-s,_=Math.floor(h/2),g=h-_,$=Math.floor(m/2),y=m-$,v=Math.floor(w/2),b=w-v;d={top:$,bottom:y,left:v,right:b,front:_,back:g}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:c,outHeight:p,outWidth:f}},xl=(e,t,n,s,i,r=!1,a="channelsLast")=>{let o,u,l,d,c;if(a==="channelsLast")[o,u,l,d,c]=e;else if(a==="channelsFirst")[o,c,u,l,d]=e;else throw new Error(`Unknown dataFormat ${a}`);const[p,,f,h,m]=t,[w,_,g]=wn(n),[$,y,v]=wn(s),b=ut(f,$),x=ut(h,y),I=ut(m,v),{padInfo:T,outDepth:C,outHeight:M,outWidth:N}=fr(i,u,l,d,w,_,g,b,x,I),W=r?p*c:p;let A=[0,0,0,0,0];return a==="channelsFirst"?A=[o,W,C,M,N]:a==="channelsLast"&&(A=[o,C,M,N,W]),{batchSize:o,dataFormat:a,inDepth:u,inHeight:l,inWidth:d,inChannels:c,outDepth:C,outHeight:M,outWidth:N,outChannels:W,padInfo:T,strideDepth:w,strideHeight:_,strideWidth:g,filterDepth:f,filterHeight:h,filterWidth:m,effectiveFilterDepth:b,effectiveFilterHeight:x,effectiveFilterWidth:I,dilationDepth:$,dilationHeight:y,dilationWidth:v,inShape:e,outShape:A,filterShape:t}},Sl=(e,t,n,s,i,r)=>{const a=r==="channelsLast";a?e[0].dims[3]:e[0].dims[1];const o=[64,1,1],u={x:n.map((w,_)=>_)},l=[Math.ceil(cr(u.x.map(w=>n[w]))/o[0]),1,1];H("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);const d=1,p=[{type:12,data:S.size(n)},{type:12,data:s},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ke(t,p),p.push(...P(e[0].dims,e[1].dims));const f=["rank","rank"],h=e.length===3;h&&(p.push(...P(e[2].dims)),f.push("rank")),p.push(...P(n));const m=w=>{const _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:s.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];He(t,_);const g=1,$=oe(e[0].dataType),y=k("x",e[0].dataType,e[0].dims.length,d),v=k("W",e[1].dataType,e[1].dims.length,g),b=[y,v],x=B("result",e[0].dataType,n.length,g);let I="";if(h){const M=k("bias",e[2].dataType,e[2].dims.length,g);b.push(M),I+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${$} {
          return bias[${a?R("coords",4,5):R("coords",1,5)}];
        }`}const T=ue(d,$),C=Fe(t,T,$);return`
            ${I}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${y.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${v.getByIndices("aIndices")};
            }
          ${w.registerUniforms(_).declareVariables(...b,x)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${x.offsetToIndices("global_idx")};
              let batch = ${R("coords",0,y.rank)};
              let d2 = ${a?R("coords",y.rank-1,y.rank):R("coords",1,y.rank)};
              let xFRCCorner = vec3<u32>(${a?R("coords",1,y.rank):R("coords",2,y.rank)},
              ${a?R("coords",2,y.rank):R("coords",3,y.rank)},
              ${a?R("coords",3,y.rank):R("coords",4,y.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?R("uniforms.x_shape",1,y.rank):R("uniforms.x_shape",2,y.rank)};
              let xShapeZ = ${a?R("uniforms.x_shape",2,y.rank):R("uniforms.x_shape",3,y.rank)};
              let xShapeW = ${a?R("uniforms.x_shape",3,y.rank):R("uniforms.x_shape",4,y.rank)};
              let xShapeU = ${a?R("uniforms.x_shape",4,y.rank):R("uniforms.x_shape",1,y.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${h?"value = value + getBiasByOutputCoords(coords)":""};
              ${C}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${d};${h}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:m}}}}),Il,kl,Ac=E({"web/lib/wasm/jsep/webgpu/ops/conv-grouped.ts"(){V(),G(),j(),Qe(),Il=(e,t,n,s)=>{const i=e.length>2,r=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],d=l/t.group,c=u&&d>=4?ne(l):1,p=S.size(n)/c,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];Ke(t,f),f.push(...P(a,[o[0],o[1],o[2],o[3]/c]));const h=i?["rank","rank","rank"]:["rank","rank"];f.push(...P([n[0],n[1],n[2],n[3]/c]));const m=w=>{const _=B("output",e[0].dataType,n.length,c),g=oe(_.type.tensor),$=Fe(t,_.type.value,g),y=k("x",e[0].dataType,a.length),v=k("w",e[1].dataType,o.length,c),b=[y,v];i&&b.push(k("b",e[2].dataType,e[2].dims,c));const x=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];He(t,x);const I=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${y.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${v.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${y.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${v.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(x).declareVariables(...b,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${I}
    ${r}
    ${$}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:m}},kl=(e,t,n,s)=>{const i=e.length>2,r=ne(n[3]),a=ne(n[2]),o=S.size(n)/r/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/r],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/r],d=[n[0],n[1],n[2],n[3]/r],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ke(t,c),c.push(...P(u,l,d));const p=(a-1)*t.strides[1]+l[1],f=h=>{const m=B("output",e[0].dataType,d.length,r),w=oe(m.type.tensor),_=Fe(t,m.type.value,w),g=k("x",e[0].dataType,u.length,r),$=k("w",e[1].dataType,l.length,r),y=[g,$];i&&y.push(k("b",e[2].dataType,e[2].dims,r));const v=i?"value += b[output_channel];":"",b=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return He(t,b),`
  ${h.registerUniforms(b).declareVariables(...y,m)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${g.type.value}, ${p}>;
    var values: array<${m.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${p}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${g.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${g.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${$.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${v}
      ${_}
      ${m.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${r};${a};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:f}}}}),hr,zt,mr,Et,rs,$n,gr,_r,as,Oc=E({"web/lib/wasm/jsep/webgpu/ops/conv.ts"(){G(),Ec(),Cc(),Cs(),Ac(),Qe(),Es(),Ne(),hr=(e,t,n,s,i,r)=>{const a=e[0],o=e.slice(r?1:2,r?3:4),u=o.length,l=t[0],c=t.slice(2).map((h,m)=>h+(h-1)*(n[m]-1)),f=o.map((h,m)=>h+s[m]+s[m+u]).map((h,m)=>Math.floor((h-c[m]+i[m])/i[m]));return f.splice(0,0,a),f.splice(r?3:1,0,l),f},zt=[2,3,1,0],mr=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");const n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[1]*t.group;if(n!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");const i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Et=(e,t)=>{const n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let r=2;r<t[1].dims.length;++r)n[r-2]===0&&(n[r-2]=t[1].dims[r]);const s=e.pads.slice();Vt.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,s,e.format==="NHWC",e.autoPad);const i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:s}),i},rs=e=>{const t=ks(e),n=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,r=e.group,a=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:s,format:n,dilations:i,group:r,kernelShape:a,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},$n=(e,t,n,s)=>{const i=n.format==="NHWC",r=hr(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){const b=[t[0]];if(i){const I=e.kernelCustomData.wT??e.compute(fe(t[1],zt),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I),b.push(I)}else b.push(t[1]);t.length===3&&b.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(kl(b,n,r,s),{inputs:b}):e.compute(Il(b,n,r,s),{inputs:b});return}const a=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],d=t[1].dims[2],c=t[1].dims[3],p=r[i?1:2],f=r[i?2:3],h=r[i?3:1],m=i&&d===o&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(m||d===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){const b=r[0];let x,I,T;const C=[];if(i){const W=e.kernelCustomData.wT??e.compute(fe(t[1],zt),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=W),m){const A=o*u*l;x=t[0].reshape([1,b,A]),I=W.reshape([1,A,h]),T=[1,b,h]}else x=t[0].reshape([b,o*u,l]),I=W.reshape([1,l,h]),T=[b,p*f,h];C.push(x),C.push(I)}else x=t[0].reshape([b,l,o*u]),I=t[1].reshape([1,h,l]),T=[b,h,p*f],C.push(I),C.push(x);a&&C.push(t[2]);const M=T[2],N=C[0].dims[C[0].dims.length-1];M<8&&N<8?e.compute(zs(C,n,r,T,i,s),{inputs:C}):e.compute(Lt(C,n,r,T,i,s),{inputs:C});return}const w=!0,_=e.kernelCustomData.wT??e.compute(fe(t[1],zt),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);const g=[t[0],_];a&&g.push(t[2]);const $=i?p*f:h,y=i?h:p*f,v=d*c*l;e.compute(bl(g,n,r,$,y,v,a,w,s),{inputs:g})},gr=(e,t)=>{const n=t.format==="NHWC",s=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);const i=[0,t.pads[0],0,t.pads[1]],r=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Et({...t,pads:i,strides:r,dilations:a,kernelShape:o},s);$n(e,s,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},_r=(e,t,n)=>{const s=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Et(n,t),r=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=xl(t[0].dims,t[1].dims,n.strides,n.dilations,r,!1,s);e.compute(Sl(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],s))},as=(e,t)=>{if(mr(e.inputs,t),e.inputs[0].dims.length===3)gr(e,t);else if(e.inputs[0].dims.length===5)_r(e,e.inputs,t);else{const n=Et(t,e.inputs);$n(e,e.inputs,n)}}}}),Tl,Bc=E({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv_backprop_webgpu.ts"(){V(),Oe(),G(),j(),Tl=(e,t,n)=>{const s=e.length>2,i=t.outputShape,r=t.format==="NHWC",a=t.group,o=e[1].dims,u=o[2]/a,l=o[3],d=r?ne(u):1,c=r&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/d)*d,f=u-p,h=r?ne(l):1,m=r?l===1?d:h:1,w=S.size(i)/h,_=[Math.ceil(w/64),1,1];H("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);const g=["rank","rank"],$=[t.strides[0],t.strides[1]],y=[t.kernelShape[r?1:2],t.kernelShape[r?2:3]],v=[t.dilations[0],t.dilations[1]],b=[y[0]+(t.dilations[0]<=1?0:(t.kernelShape[r?1:2]-1)*(t.dilations[0]-1)),y[1]+(t.dilations[1]<=1?0:(t.kernelShape[r?2:3]-1)*(t.dilations[1]-1))],x=[b[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),b[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:w},{type:12,data:$},{type:12,data:y},{type:12,data:v},{type:12,data:b},{type:6,data:x},{type:12,data:p},{type:12,data:u},{type:12,data:l},...P(e[0].dims,e[1].dims)];s&&(I.push(...P(e[2].dims)),g.push("rank")),I.push(...P(i));const T=C=>{const M=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:$.length},{name:"filter_dims",type:"u32",length:y.length},{name:"dilations",type:"u32",length:y.length},{name:"effective_filter_dims",type:"u32",length:b.length},{name:"pads",type:"i32",length:x.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],N=oe(e[0].dataType),W=r?1:2,A=r?2:3,X=r?3:1,q=k("W",e[1].dataType,e[1].dims.length,m),O=k("Dy",e[0].dataType,e[0].dims.length,d),F=[O,q];s&&F.push(k("bias",e[2].dataType,[i[X]].length,h));const D=B("result",e[0].dataType,i.length,h),K=()=>{let L="";if(c)d===4?L+=`
        let xValue = ${O.getByOffset("x_offset")};
        let wValue = ${q.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?L+=`
          dotProd = dotProd + dot(vec4<${N}>(${O.getByOffset("x_offset")}, ${O.getByOffset("x_offset + 1u")}), vec4<${N}>(${q.getByOffset("w_offset")}, ${q.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(L+=`
          dotProd = dotProd + dot(vec4<${N}>(${O.getByOffset("x_offset")}, ${O.getByOffset("x_offset + 1u")}, ${O.getByOffset("x_offset + 2u")}, ${O.getByOffset("x_offset + 3u")}), vec4<${N}>(${q.getByOffset("w_offset")}, ${q.getByOffset("w_offset + 1u")}, ${q.getByOffset("w_offset + 2u")}, ${q.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(L+=`
                  let xValue = ${r?O.getByOffset(`${O.indicesToOffset(`${O.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):O.get("batch","inputChannel","idyR","idyC")};
        `,d===1)L+=`
          let w_offset = ${q.indicesToOffset(`${q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${q.getByOffset(`w_offset / ${m}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let z=0;z<d;z++)L+=`
            let wValue${z} = ${q.getByOffset(`${q.indicesToOffset(`${q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${z}, wOutChannel)`)} / ${m}`)};
            dotProd = dotProd + xValue[${z}] * wValue${z};`;return L},he=()=>{if(f===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let L="";if(d===1){L+="dotProd = dotProd";for(let z=0;z<f;z++)L+=`
            + ${O.getByOffset(`x_offset + ${z}`)} * ${q.getByOffset(`w_offset + ${z}`)}`;L+=";"}else if(d===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);L+=`
          let xValue = ${O.getByOffset("x_offset")};
          let wValue = ${q.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return L},ie=`
            let outputIndices = ${D.offsetToIndices(`global_idx * ${h}`)};
            let batch = ${D.indicesGet("outputIndices",0)};
            let d1 = ${D.indicesGet("outputIndices",X)};
            let r = ${D.indicesGet("outputIndices",W)};
            let c = ${D.indicesGet("outputIndices",A)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${D.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${N}(dyRCorner) + ${N}(wR)) / ${N}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${N}(uniforms.Dy_shape[${W}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${N}(dyCCorner) + ${N}(wC)) / ${N}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${N}(uniforms.Dy_shape[${A}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${O.indicesToOffset(`${O.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${q.indicesToOffset(`${q.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${m};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:d}) {
                  ${K()}
                  inputChannel = inputChannel + ${c?4:d};
                }
                ${he()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${s?` + bias[d1 / ${h}]`:""};
            ${D.setByOffset("global_idx","value")};
          `;return`
    ${C.registerUniforms(M).declareVariables(...F,D)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ie}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${m}${h}${c}${f}`,inputDependencies:g},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:T}}}}),wr,yr,$r,vn,zl,vr,bn,br,El,Rc=E({"web/lib/wasm/jsep/webgpu/ops/conv-transpose.ts"(){Bc(),Qe(),Ne(),wr=(e,t,n,s,i,r)=>(e-1)*t+n+(s-1)*i+1-r,yr=(e,t,n,s,i)=>{const r=Math.floor(e/2);t==="SAME_UPPER"?(n[s]=r,n[i]=e-r):t==="SAME_LOWER"&&(n[s]=e-r,n[i]=r)},$r=(e,t,n,s,i,r,a,o,u,l)=>{const d=e.length-2,c=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));const p=e[0],f=t[o?3:1]*i;for(let h=0,m=e.length-d-(o?1:0);h<d;++h,++m){const w=e[m],_=c?w*a[h]:l[h],g=wr(w,a[h],r[h],t[m],n[h],_);yr(g,s,r,h,h+d),c&&l.push(a[h]*(w-1)+u[h]+(t[m]-1)*n[h]+1-r[h]-r[h+d])}l.splice(0,0,p),l.splice(o?3:1,0,f)},vn=(e,t)=>{const n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}const s=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(s?3:1,0,t[1].dims[1]);const i=e.pads.slice(),r=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims;let u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){const c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){const c=t[0].dims.length-2;l=new Array(c).fill(1)}$r(o,n,u,e.autoPad,e.group,i,l,s,a,r);const d=Object.assign({},e);return Object.assign(d,{kernelShape:n,pads:i,outputPadding:a,outputShape:r,dilations:u,strides:l}),d},zl=e=>{const t=ks(e),n=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,r=e.group,a=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,c=e.outputShape;return{autoPad:s,format:n,dilations:i,group:r,kernelShape:a,outputPadding:d,outputShape:c,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},vr=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");const n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[0];if(n!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");const i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");const r=e[0].dims.length-2;if(t.dilations.reduce((d,c)=>d+c,0)>0&&t.dilations.length!==r)throw new Error(`dilations should be ${r}D`);if(t.strides.reduce((d,c)=>d+c,0)>0&&t.strides.length!==r)throw new Error(`strides should be ${r}D`);if(t.pads.reduce((d,c)=>d+c,0)>0&&t.pads.length!==r*2)throw new Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((d,c)=>d+c,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},bn=(e,t,n,s)=>{const i=e.kernelCustomData.wT??e.compute(fe(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);const r=[t[0],i];t.length===3&&r.push(t[2]),e.compute(Tl(r,n,s),{inputs:r})},br=(e,t)=>{const n=t.format==="NHWC",s=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let r=t.dilations;(r.length===0||r[0]===0)&&(r=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),r=[1].concat(r),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);const l=vn({...t,pads:o,strides:a,dilations:r,kernelShape:i,outputPadding:u},s);bn(e,s,l,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},El=(e,t)=>{if(vr(e.inputs,t),e.inputs[0].dims.length===3)br(e,t);else{const n=vn(t,e.inputs);bn(e,e.inputs,n)}}}}),xr,Cl,Al,Pc=E({"web/lib/wasm/jsep/webgpu/ops/cumsum.ts"(){V(),G(),se(),j(),xr=(e,t,n,s)=>{const i=S.size(t),r=t.length,a=k("input",e,r),o=B("output",e,r),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=S.normalizeAxis(u,r),d=c=>{const p=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,f=R("uniforms.input_shape","uniforms.axis",r),h=s.reverse?p+(s.exclusive?" + 1":""):"0",m=s.reverse?f:p+(s.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${h};
                  let last : i32 = ${m};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...P(t,t)]}),getShaderSource:d}},Cl=(e,t)=>{const n=e.inputs[0].dims,s=e.inputs[0].dataType,i=e.inputs[1];e.compute(xr(s,n,i,t),{inputs:[0]})},Al=e=>{const t=e.exclusive===1,n=e.reverse===1;return Q({exclusive:t,reverse:n})}}}),Sr,Ir,kr,Ol,Bl,Dc=E({"web/lib/wasm/jsep/webgpu/ops/depth-to-space.ts"(){V(),G(),se(),j(),Sr=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ir=(e,t,n,s)=>{const i=[];i.push(`fn perm(i: ${s.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet("a",e[r],`i[${r}]`));return i.push("return a;}"),i.join(`
`)},kr=(e,t)=>{let n,s,i,r,a,o;const u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([n,s,i,r]=e.dims,a=d?[n,s,i,l,l,r/l**2]:[n,s,i,r/l**2,l,l],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,s,i,r]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=d?[n,l,l,r/l**2,s,i]:[n,r/l**2,l,l,s,i],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);const c=e.reshape(a),p=c.dims.length,f=e.dataType,h=k("a",f,p),m=B("output",f,p),w=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(h,m)}

  ${Ir(o,p,h,m)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${m.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${m.setByOffset("global_idx",h.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{const g=u?[n,s*l,i*l,r/l**2]:[n,r/l**2,s*l,i*l],$=S.size(g),y=c.dims,v=S.sortBasedOnPerm(y,o);return{outputs:[{dims:g,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...P(y,v)]}},getShaderSource:w}},Ol=(e,t)=>{Sr(e.inputs),e.compute(kr(e.inputs[0],t))},Bl=e=>Q({blocksize:e.blocksize,mode:e.mode,format:e.format})}}),Ct,lt,xn,Tr,zr,Er,Cr,Sn,Ar,Rl,Pl,Mc=E({"web/lib/wasm/jsep/webgpu/ops/einsum.ts"(){V(),G(),se(),j(),Ct="[a-zA-Z]|\\.\\.\\.",lt="("+Ct+")+",xn="^"+lt+"$",Tr="("+lt+",)*"+lt,zr="^"+Tr+"$",Er=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Cr=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,s]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(zr)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{const u=e[o].dims.slice();if(!a.match(RegExp(xn)))throw new Error("Invalid LHS term");const l=this.processTerm(a,!0,u,o);this.lhs.push(l)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!s.match(RegExp(lt)))throw new Error("Invalid RHS");s.match(RegExp(Ct,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{const o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,t,n){let s=this.symbolToInfo.get(e);if(s!==void 0){if(s.dimValue!==t&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(n)}else s={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,s)}processTerm(e,t,n,s=-1){const i=n.length;let r=!1,a=[],o=0;if(!e.match(RegExp(xn))&&!t&&e!=="")throw new Error("Invalid LHS term");const u=e.match(RegExp(Ct,"g")),l=new Er(s);return u?.forEach((d,c)=>{if(d==="..."){if(r)throw new Error("Only one ellipsis is allowed per input term");r=!0;const p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(o,o+p),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<a.length;f++){const h=String.fromCharCode(48+f);l.addSymbol(h,c+f),this.addSymbol(h,n[o++],s)}}else l.addSymbol(d,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,n[o++],s)}),l}},Sn=e=>e+"_max",Ar=(e,t,n,s)=>{const r=e.map(d=>d.length).map((d,c)=>k(`input${c}`,t,d)),a=S.size(s),o=B("output",t,s.length),u=[...n.symbolToInfo.keys()].filter(d=>!n.rhs.symbolToIndices.has(d)),l=d=>{const c=[],p="var prod = 1.0;",f="var sum = 0.0;",h="sum += prod;",m=[],w=[],_=[],g=[],$=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,b)=>{if(n.rhs.symbolToIndices.has(b)){const x=n.rhs.symbolToIndices.get(b)?.[0];x!==void 0&&n.lhs.forEach((I,T)=>{if(v.inputIndices.includes(T)){const C=I.symbolToIndices.get(b);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(M=>{c.push(`${r[T].indicesSet(`input${T}Indices`,M,o.indicesGet("outputIndices",x))}`)})}})}else n.lhs.forEach((x,I)=>{if(v.inputIndices.includes(I)){const T=x.symbolToIndices.get(b);if(T===void 0)throw new Error("Invalid symbol error");T.forEach(C=>{m.push(`${r[I].indicesSet(`input${I}Indices`,C,`${b}`)}`)}),g.push(`prod *= ${r[I].getByIndices(`input${I}Indices`)};`)}}),w.push(`for(var ${b}: u32 = 0; ${b} < uniforms.${Sn(b)}; ${b}++) {`),_.push("}")});const y=$?[...c,`let sum = ${r.map((v,b)=>v.getByIndices(`input${b}Indices`)).join(" * ")};`]:[...c,f,...w,...m,p,...g,h,..._];return`
            ${d.registerUniforms(u.map(v=>({name:`${Sn(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...r,o)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${r.map((v,b)=>`var input${b}Indices: ${r[b].type.indices};`).join(`
`)}
            ${y.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{const d=u.filter(p=>n.symbolToInfo.has(p)).map(p=>({type:12,data:n.symbolToInfo.get(p)?.dimValue||0}));d.push({type:12,data:a});const c=e.map((p,f)=>[...P(p)]).reduce((p,f)=>p.concat(f),d);return c.push(...P(s)),{outputs:[{dims:s,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:l}},Rl=(e,t)=>{const n=new Cr(e.inputs,t.equation),s=n.outputDims,i=e.inputs.map((r,a)=>r.dims);e.compute(Ar(i,e.inputs[0].dataType,n,s))},Pl=e=>{const t=e.equation.replace(/\s+/g,"");return Q({equation:t})}}}),Or,In,Br,Rr,Dl,Nc=E({"web/lib/wasm/jsep/webgpu/ops/expand.ts"(){V(),G(),j(),Or=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");const t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number);let s=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;s<n.length&&i<t.length;++s,++i)if(n[s]!==t[i]&&n[s]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},In=(e,t)=>{const n=e.length-t.length,s=[];for(let i=0;i<n;++i)s.push(e[i]);for(let i=0;i<t.length;++i)s.push(t[i]===1?e[i+n]:t[i]);return s},Br=(e,t)=>e.length>t.length?In(e,t):In(t,e),Rr=e=>{const t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),s=Br(t,n),i=e[0].dataType,r=i===9||S.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=r||s.length>0&&s[s.length-1]%4===0?4:1,u=Math.ceil(S.size(s)/o),l=c=>{const p=k("input",i,t.length,a),f=B("output",i,s.length,o);let h;if(i===9){const m=(w,_,g="")=>`
          let outputIndices${_} = ${f.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${p.broadcastedIndicesToOffset(`outputIndices${_}`,f)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${w}[${_}] = ${g}(${p.getByOffset(`index${_}`)}[component${_}]);
        `;h=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${m("data",0,"u32")}
        ${m("data",1,"u32")}
        ${m("data",2,"u32")}
        ${m("data",3,"u32")}
        ${f.setByOffset("global_idx","data")}
      }`}else h=`
        let outputIndices = ${f.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",f)};
        let data = ${f.type.value}(${p.getByOffset(`inputOffset / ${a}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(p,f)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${h}`},d=[{type:12,data:u},...P(t,s)];return{name:"Expand",shaderCache:{hint:`${s.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},Dl=e=>{Or(e.inputs),e.compute(Rr(e.inputs),{inputs:[0]})}}}),Pr,Ml,Uc=E({"web/lib/wasm/jsep/webgpu/ops/fast-gelu.ts"(){V(),G(),j(),Is(),Pr=e=>{const t=e[0].dataType,n=S.size(e[0].dims),s=S.size(e[1].dims),i=s%4===0,r=a=>{const o=k("x",t,[1],4),u=k("bias",t,[1],4),l=B("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(d).declareVariables(o,u,l)}

    ${ts(le(t))}

    ${a.mainStart(nt)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",ns("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:r,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:s}],dispatchGroup:{x:Math.ceil(n/nt/4)}})}},Ml=e=>{e.inputs.length<2||S.size(e.inputs[1].dims)===0?sl(e):e.compute(Pr(e.inputs))}}}),Dr,Mr,Nl,Ul,Vc=E({"web/lib/wasm/jsep/webgpu/ops/gather.ts"(){V(),G(),se(),j(),Dr=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Mr=(e,t)=>{const n=e[0].dims,s=e[1].dims,i=n.length,r=S.normalizeAxis(t.axis,i),a=n.slice(0);a.splice(r,1,...s);const o=n[r],u=e[0].dataType===9?4:1,l=Math.ceil(S.size(a)/u),d=[{type:12,data:l},{type:6,data:o},{type:12,data:r},...P(e[0].dims,e[1].dims,a)],c=p=>{const f=k("data",e[0].dataType,e[0].dims.length,u),h=k("inputIndices",e[1].dataType,e[1].dims.length),m=B("output",e[0].dataType,a.length,u),w=g=>{const $=s.length;let y=`var indicesIndices${g}  = ${h.type.indices}(0);`;for(let v=0;v<$;v++)y+=`${$>1?`indicesIndices${g}[${v}]`:`indicesIndices${g}`} = ${a.length>1?`outputIndices${g}[uniforms.axis + ${v}]`:`outputIndices${g}`};`;y+=`
          var idx${g} = ${h.getByIndices(`indicesIndices${g}`)};
          if (idx${g} < 0) {
            idx${g} = idx${g} + uniforms.axisDimLimit;
          }
          var dataIndices${g} : ${f.type.indices};
        `;for(let v=0,b=0;v<i;v++)v===r?(y+=`${i>1?`dataIndices${g}[${v}]`:`dataIndices${g}`} = u32(idx${g});`,b+=$):(y+=`${i>1?`dataIndices${g}[${v}]`:`dataIndices${g}`} = ${a.length>1?`outputIndices${g}[${b}]`:`outputIndices${g}`};`,b++);return y};let _;if(e[0].dataType===9){const g=($,y,v="")=>`
          let outputIndices${y} = ${m.offsetToIndices(`outputOffset + ${y}u`)};
          ${w(y)};
          let offset${y} = ${f.indicesToOffset(`dataIndices${y}`)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${$}[${y}] = ${v}(${f.getByOffset(`index${y}`)}[component${y}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${g("value",0,"u32")}
        ${g("value",1,"u32")}
        ${g("value",2,"u32")}
        ${g("value",3,"u32")}
        ${m.setByOffset("global_idx","value")}
      `}else _=`
      let outputIndices = ${m.offsetToIndices("global_idx")};
      ${w("")};
      let value = ${f.getByIndices("dataIndices")};
      ${m.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,m)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c}},Nl=e=>Q({axis:e.axis}),Ul=(e,t)=>{const n=e.inputs;Dr(n),e.compute(Mr(e.inputs,t))}}}),Nr,Vl,ql,qc=E({"web/lib/wasm/jsep/webgpu/ops/gather-nd.ts"(){V(),G(),j(),Nr=(e,t,n,s,i,r,a,o,u)=>{const l=[{type:12,data:r},{type:12,data:s},{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:o},{type:12,data:u}],d=[r];l.push(...P(t.dims,d));const c=p=>{const f=k("indices_data",t.dataType,t.dims.length),h=B("input_slice_offsets_data",12,1,1),m=[f,h],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${p.registerUniforms(w).declareVariables(...m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${n.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Vl=(e,t)=>{const n=e.inputs,s=n[0].dims,i=n[0].dataType,r=n[1].dims,a=r[r.length-1],o=S.sizeToDimension(r,r.length-1),u=S.sizeFromDimension(s,t.batchDims+a),l=S.sizeToDimension(s,t.batchDims),d=S.sizeFromDimension(s,t.batchDims),c=o/l,p=new Array(a);let f=u;for(let y=0;y<a;++y)p[a-1-y]=f,f*=s[t.batchDims+a-1-y];const h=Nr(e,n[1],p,t.batchDims,s,o,c,d,a),m=t.batchDims+a;if(m>s.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");const w=r.slice(0,-1).concat(s.slice(m)),_=S.size(w),g=[{type:12,data:_},{type:12,data:u},...P(n[0].dims,h.dims,w)],$=y=>{const v=k("data",n[0].dataType,n[0].dims.length),b=k("slice_offsets",12,h.dims.length),x=B("output",n[0].dataType,w.length);return`
          ${y.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(v,b,x)}
            ${y.mainStart()}
            ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:g}),getShaderSource:$},{inputs:[n[0],h]})},ql=e=>({batchDims:e.batch_dims,cacheKey:""})}}),Ur,Vr,Ll,Gl,Lc=E({"web/lib/wasm/jsep/webgpu/ops/gather-block-quantized.ts"(){V(),G(),se(),j(),Ur=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");const n=S.normalizeAxis(t.quantizeAxis,e[0].dims.length),s=t.blockSize,i=e[0],r=e[2],a=e.length===4?e[3]:void 0;if(r.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/s)===r.dims[u]:o===r.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==r.dims.length||!a.dims.map((o,u)=>o===r.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Vr=(e,t)=>{const n=e[0].dims,s=e[1].dims,i=n.length,r=S.normalizeAxis(t.gatherAxis,i),a=S.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(r,1,...s);const u=S.size(o),l=e[2].dataType,c=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:a},{type:12,data:r},{type:12,data:t.blockSize},...P(...e.map((h,m)=>h.dims),o)],f=h=>{const m=k("data",e[0].dataType,e[0].dims.length),w=k("inputIndices",e[1].dataType,e[1].dims.length),_=k("scales",e[2].dataType,e[2].dims.length),g=e.length>3?k("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=B("output",l,o.length),y=[m,w,_];g&&y.push(g);const v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${h.registerUniforms(v).declareVariables(...y,$)}
        ${h.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${s.length>1?`
          for (var i: u32 = 0; i < ${s.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[r]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${s.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${_.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${_.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${_.getByIndices("scale_indices")};
        ${g?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${g.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${g.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${le(l)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((h,m)=>m!==1).map(h=>h.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(h,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:f}},Ll=(e,t)=>{const n=e.inputs;Ur(n,t),e.compute(Vr(e.inputs,t))},Gl=e=>Q({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}}),qr,Lr,Wl,jl,Gc=E({"web/lib/wasm/jsep/webgpu/ops/gather-elements.ts"(){V(),G(),se(),j(),qr=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Lr=(e,t)=>{const n=e[0].dims,s=e[0].dataType,i=n.length,r=e[1].dims,a=e[1].dataType,o=S.normalizeAxis(t.axis,i),u=n[o],l=r.slice(0),d=S.size(l),c=k("input",s,i),p=k("indicesInput",a,r.length),f=B("output",s,l.length),h=[{type:12,data:d},{type:6,data:u},{type:12,data:o}];return h.push(...P(n,r,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:_=>`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,p,f)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},Wl=e=>Q({axis:e.axis}),jl=(e,t)=>{const n=e.inputs;qr(n),e.compute(Lr(e.inputs,t))}}}),Gr,Wr,Fl,Kl,Wc=E({"web/lib/wasm/jsep/webgpu/ops/gemm.ts"(){V(),G(),j(),Gr=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Wr=(e,t)=>{const n=e[0].dims.slice(),s=e[1].dims.slice(),[i,r,a]=Wo.getShapeOfGemmResult(n,t.transA,s,t.transB,e.length===3?e[2].dims:void 0),o=[i,r];if(!o)throw new Error("Can't use gemm on the given tensors");const u=16,l=Math.ceil(r/u),d=Math.ceil(i/u),c=!0,p=S.size(o),f=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],h=["type","type"];e.length===3&&(f.push(...P(e[2].dims)),h.push("rank")),f.push(...P(o));const m=w=>{const _=k("a",e[0].dataType,e[0].dims),g=k("b",e[1].dataType,e[1].dims);let $=null;const y=[_,g];e.length===3&&($=k("c",e[2].dataType,e[2].dims.length),y.push($));const v=B("output",e[0].dataType,o.length);y.push(v);const b=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];let x="",I="";t.transA&&t.transB?(I=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${g.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(I=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${g.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(I=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${g.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(I=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${g.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");const T=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${w.registerUniforms(b).declareVariables(...y)}
  var<workgroup> tile_a: array<array<${_.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${g.type.storage}, ${u}>, ${u}>;
  ${w.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${v.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${I}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${x}
      }
      workgroupBarrier();
    }

    ${T}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${$!=null?`let cOffset = ${$.broadcastedIndicesToOffset("vec2(m, n)",v)}; value += ${v.type.value}(uniforms.beta) * ${$.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:f}),getShaderSource:m}},Fl=e=>{const t=e.transA,n=e.transB,s=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:s,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Kl=(e,t)=>{Gr(e.inputs),e.compute(Wr(e.inputs,t))}}}),Te,Ce,Ue,Ve,jr,Fr,Kr,Hr,Zr,Qr,Xr,Yr,Hl,Zl,jc=E({"web/lib/wasm/jsep/webgpu/ops/grid-sample.ts"(){V(),G(),se(),j(),[Te,Ce,Ue,Ve]=[0,1,2,3],jr=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Fr=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Kr=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Hr=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Zr=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Qr=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Te}] = batch;
     indices[${Ce}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ue}] = u32(r);
            indices[${Ve}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Ue}] = u32(clamp(r, 0, H - 1));
          indices[${Ve}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ue}] = gs_reflect(r, border[1], border[3]);
          indices[${Ve}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Xr=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Te}], indices[${Ce}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Te}], indices[${Ce}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Te}], indices[${Ce}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Te}], indices[${Ce}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Te}], indices[${Ce}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Te}], indices[${Ce}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Yr=(e,t)=>{const n=k("x",e[0].dataType,e[0].dims.length),s=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=k("grid",e[1].dataType,s.length,2);let r=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(r=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Te,Ce,Ue,Ve]=[0,3,1,2]);const a=B("output",e[0].dataType,r.length),o=n.type.value,l=[{type:12,data:S.size(r)},...P(e[0].dims,s,r)],d=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,a)}
  ${Fr}
  ${Kr(o)}
  ${Hr(t)}
  ${Zr(t)}
  ${Qr(n,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ue}]);
      let W_in = i32(uniforms.x_shape[${Ve}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Te}], indices[${Ue}], indices[${Ve}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Xr(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{const p=S.size(r);return{outputs:[{dims:r,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:d}},Hl=(e,t)=>{jr(e.inputs),e.compute(Yr(e.inputs,t))},Zl=e=>Q({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}}),de,Jr,Ql,kn,ea,_t,Xl,Yl=E({"web/lib/wasm/jsep/webgpu/ops/multihead-attention.ts"(){V(),G(),se(),vs(),Ss(),j(),Ne(),de=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Jr=(e,t)=>{const n=e[0],s=de(e,1),i=de(e,2),r=de(e,3),a=de(e,4),o=de(e,5),u=de(e,6),l=de(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");const d=n.dims[0],c=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4];let f=c,h=0,m=0;const w=Math.floor(p/t.numHeads);if(u&&l&&S.size(u.dims)&&S.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=u.dims[2],m=u.dims[2]}else if(u&&S.size(u.dims)||l&&S.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(s&&S.size(s.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(s.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,f=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==t.numHeads||s.dims[3]!==2||s.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,f=s.dims[1]}else{if(s.dims[1]!==t.numHeads||s.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,f=s.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(r&&S.size(r.dims)>0){if(r.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(s&&s.dims.length===5&&s.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}const g=h+f;let $=0;if(a&&S.size(a.dims)>0){$=8;const x=a.dims;throw x.length===1?x[0]===d?$=1:x[0]===3*d+2&&($=3):x.length===2&&x[0]===d&&x[1]===g&&($=5),$===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let y=!1,v=p;if(i&&S.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],y=!0}}const b=!1;if(a&&S.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&S.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==g)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:c,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:g,maxSequenceLength:m,inputHiddenSize:0,hiddenSize:p,vHiddenSize:v,headSize:w,vHeadSize:Math.floor(v/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:b,passPastInKv:y,qkvFormat:_}},Ql=e=>Q({...e}),kn=Q({perm:[0,2,1,3]}),ea=(e,t,n,s,i,r,a)=>{const o=[s,i,r],u=S.size(o),l=[{type:12,data:u},{type:12,data:a},{type:12,data:r}],d=c=>{const p=B("qkv_with_bias",t.dataType,o),f=k("qkv",t.dataType,o),h=k("bias",n.dataType,o),m=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(m).declareVariables(f,h,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,n],outputs:[-1]})[0]},_t=(e,t,n,s,i,r,a,o)=>{let u=r;if(a&&S.size(a.dims)>0){if(s===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=ea(e,r,a,t,s,n*i,o),u=u.reshape([t,s,n,i]),n===1||s===1?u:e.compute(fe(u,kn.perm),{inputs:[u],outputs:[-1]})[0]}else return r.dims.length===3&&(u=r.reshape([t,s,n,i])),n===1||s===1?u:e.compute(fe(u,kn.perm),{inputs:[u],outputs:[-1]})[0]},Xl=(e,t)=>{const n=Jr(e.inputs,t),s=e.inputs[0],i=de(e.inputs,1),r=de(e.inputs,2),a=de(e.inputs,3),o=de(e.inputs,4),u=de(e.inputs,5),l=de(e.inputs,6),d=de(e.inputs,7);if(s.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");const c=i&&r&&i.dims.length===4&&r.dims.length===4,p=_t(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,s,a,0);if(c)return yt(e,p,i,r,o,void 0,l,d,u,n);if(!i||!r)throw new Error("key and value must be provided");const f=_t(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,a,n.hiddenSize),h=_t(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,r,a,2*n.hiddenSize);yt(e,p,f,h,o,void 0,l,d,u,n)}}}),ta,na,sa,ia,os,Jl,ed,td=E({"web/lib/wasm/jsep/webgpu/ops/split.ts"(){V(),G(),se(),j(),ta=e=>{if(!e||e.length<1)throw new Error("too few inputs")},na=(e,t)=>{const n=[];let s=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),s=n.length),Q({numOutputs:s,axis:t.axis,splitSizes:n})},sa=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${R("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,ia=e=>{const t=e.length,n=[];for(let s=0;s<t;++s){const i=e[s].setByIndices("indices","input[global_idx]");t===1?n.push(i):s===0?n.push(`if (output_number == ${s}u) { ${i} }`):s===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${s}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},os=(e,t)=>{const n=e[0].dims,s=S.size(n),i=e[0].dataType,r=S.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),o=k("input",i,n.length),u=new Array(t.numOutputs),l=[],d=[];let c=0;const p=[{type:12,data:s}];for(let h=0;h<t.numOutputs;h++){c+=t.splitSizes[h],u[h]=c;const m=n.slice();m[r]=t.splitSizes[h],d.push(m),a[h]=B(`output${h}`,i,m.length),l.push({dims:d[h],dataType:e[0].dataType})}p.push({type:12,data:u},...P(n,...d));const f=h=>`
  ${h.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...a)}
  ${sa(u.length)}
  ${ia(a)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",r)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${R("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",r,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p})}},Jl=(e,t)=>{ta(e.inputs);const n=e.inputs.length===1?t:na(e.inputs,t);e.compute(os(e.inputs,n),{inputs:[0]})},ed=e=>{const t=e.axis,n=e.splitSizes,s=e.numOutputs<0?n.length:e.numOutputs;if(s!==n.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Q({axis:t,numOutputs:s,splitSizes:n})}}}),ra,Gt,nd,sd=E({"web/lib/wasm/jsep/webgpu/ops/rotary-embedding.ts"(){V(),G(),se(),j(),ra=(e,t)=>{const[n,s,i,r]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!S.areEqual(s.dims,[])&&!S.areEqual(s.dims,[1])&&s.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${s.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(r.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${r.dims.length}`);if(!S.areEqual(i.dims,r.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");const u=n.dims[0],l=n.dims[n.dims.length-2],d=i.dims[0],c=S.sizeFromDimension(n.dims,1)/l,p=o===0?i.dims[1]*2:c/a;if(o>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(s.dims.length===2){if(u!==s.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${s.dims[0]}`);if(l!==s.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${s.dims[1]}`)}if(p/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Gt=(e,t)=>{const{interleaved:n,numHeads:s,rotaryEmbeddingDim:i,scale:r}=t,a=e[0].dims[0],o=S.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,d=e[2].dims[1],c=i===0?d*2:l/s,p=new Array(a,u,l/c,c-d),f=S.computeStrides(p),h=[{type:1,data:r},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[o,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...P(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],m=w=>{const _=k("input",e[0].dataType,e[0].dims.length),g=k("position_ids",e[1].dataType,e[1].dims.length),$=k("cos_cache",e[2].dataType,e[2].dims.length),y=k("sin_cache",e[3].dataType,e[3].dims.length),v=B("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(_,g,$,y,v)}

        ${w.mainStart(nt)}
          let half_rotary_emb_dim = uniforms.${$.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${g.broadcastedIndicesToOffset("bsnh.xy",B("",g.type.tensor,2))};
            let position_id =
                u32(${g.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${_.getByOffset("i")} * ${$.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${y.get("position_id","bsnh[3]")};
            ${v.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${y.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${$.get("position_id","bsnh[3]")};
            ${v.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${v.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Q({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(S.size(p)/nt)},programUniforms:h})}},nd=(e,t)=>{ra(e.inputs,t),e.compute(Gt(e.inputs,t))}}}),aa,oa,Tn,ua,id,Fc=E({"web/lib/wasm/jsep/webgpu/ops/group-query-attention.ts"(){se(),V(),Ss(),Yl(),td(),Ne(),sd(),j(),aa=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");const n=e[0],s=e[1],i=e[2],r=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");const o=!1,u=n.dims[0],l=n.dims[1];let d=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,p=0;const f=!s||s.dims.length===0,h=Math.floor(f?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);f&&(d=h*t.numHeads);const m=r&&r.dims.length!==0,w=a&&a.dims.length!==0;if(m&&r.dims.length===4&&r.dims[0]===u&&r.dims[1]!==t.kvNumHeads&&r.dims[2]===t.kvNumHeads&&r.dims[3]===h)throw new Error("BSNH pastKey/pastValue is not supported");if(m&&w){if(r.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=r.dims[2]}else if(m||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let g=1;if(s&&s.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(n.dims[2]%s.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==t.numHeads||s.dims[3]!==2||s.dims[4]!==h)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=s.dims[1]}else{if(s.dims[1]!==t.numHeads||s.dims[3]!==h)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=s.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');g=3}const $=0;let y=!1,v=t.kvNumHeads?h*t.kvNumHeads:d;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],y=!0}}const b=e.length>4?e[5]:void 0;if(b&&b.dims.length!==1&&b.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:v,headSize:h,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:y,qkvFormat:g}},oa=Q({perm:[0,2,1,3]}),Tn=(e,t,n)=>{let s=t;const i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(s=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),s=e.compute(fe(s,oa.perm),{inputs:[s],outputs:[-1]})[0]),s},ua=(e,t,n,s)=>{const r=["type","type"],a=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=d=>{const c=k("seq_lens",n.dataType,n.dims),p=k("total_seq_lens",s.dataType,s.dims),f=B("pos_ids",7,a),h=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(h).declareVariables(c,p,f)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${p.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${c.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${f.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:r},getRunData:()=>({outputs:[{dims:a,dataType:7}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},id=(e,t)=>{const n=aa(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");const s=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,r=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=Q({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,d*n.headSize,d*n.headSize]}),[p,f,h]=!i&&!r?e.compute(os([s],c),{inputs:[s],outputs:[-1,-1,-1]}):[s,i,r];let m,w;if(t.doRotary){const y=e.compute(ua(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],v=e.inputs[7],b=e.inputs[8],x=Q({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),I=[p,y,v,b],T=[-1];m=e.compute(Gt(I,x),{inputs:I,outputs:T})[0],I.splice(0,1,f);const C=Q({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Gt(I,C),{inputs:I,outputs:T})[0]}const _=_t(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?m:p,void 0,0),g=Tn(e,t.doRotary?w:f,n),$=Tn(e,h,n);yt(e,_,g,$,void 0,void 0,a,o,void 0,n,u,l)}}}),zn,la,da,rd,Kc=E({"web/lib/wasm/jsep/webgpu/ops/instance-norm.ts"(){V(),G(),Ne(),j(),zn=(e,t,n,s,i,r,a,o)=>{const u=ne(r),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,c=i*a;let p=64;c===1&&(p=256);const f=[i,a,r/u],h=[i,a,2],m=["rank","type","type"],w=[];w.push(...P(f,h));const _=g=>{const $=k("x",t.dataType,3,u),y=k("scale",n.dataType,n.dims),v=k("bias",s.dataType,s.dims),b=B("output",1,3,2),x=[$,y,v,b];return`
  var<workgroup> workgroup_shared : array<${d}, ${p}>;
  const workgroup_size = ${p}u;
  ${g.declareVariables(...x)}
  ${g.mainStart(p)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${$.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Me("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Me("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${p}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:h,dataType:1}],dispatchGroup:{x:c},programUniforms:w}),getShaderSource:_},{inputs:[t,n,s],outputs:[-1]})[0]},la=(e,t,n)=>{const s=t[0].dims,i=s,r=2,a=s[0],o=s[1],u=S.sizeFromDimension(s,r),l=ne(u),d=S.size(i)/l,c=zn(e,t[0],t[1],t[2],a,u,o,n.epsilon),p=[a,o,u/l],f=[a,o],h=["type","none"],m=w=>{const _=k("x",t[0].dataType,p.length,l),g=k("scale_shift",1,f.length,2),$=B("output",t[0].dataType,p.length,l),y=[_,g,$];return`
  ${w.registerUniform("output_size","u32").declareVariables(...y)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${$.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${g.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${$.type.value}(scale_shift.x) + ${$.type.value}(scale_shift.y);
      ${$.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...P(p,f,p)]}),getShaderSource:m},{inputs:[t[0],c]})},da=(e,t,n)=>{const s=t[0].dims,i=s,r=s[0],a=s[s.length-1],o=S.sizeFromDimension(s,1)/a,u=ne(a),l=S.size(i)/u,d=[{type:12,data:o},{type:12,data:Math.floor(a/u)}],c=["type","type"];let p=!1;const f=[0,s.length-1];for(let _=0;_<s.length-2;_++)p=p||s[_+1]!==1,f.push(_+1);p=p&&s[s.length-1]!==1;const h=p?e.compute(fe(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:s.length},(_,g)=>s[f[g]])),m=zn(e,h,t[1],t[2],r,o,a,n.epsilon),w=_=>{const g=oe(t[0].dataType),$=u===1?"vec2f":`mat${u}x2f`,y=x=>{const I=x===0?"x":"y",T=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${g}(${T}(scale.${I}))`;case 2:return`vec2<${g}>(${T}(scale[0].${I}, scale[1].${I}))`;case 4:return`vec4<${g}>(${T}(scale[0].${I}, scale[1].${I}, scale[2].${I}, scale[3].${I}))`;default:throw new Error(`Not supported compoents ${u}`)}},v=k("input",t[0].dataType,t[0].dims,u),b=B("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${v.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${$}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${b.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${y(0)}, ${y(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:w},{inputs:[t[0],m]})},rd=(e,t)=>{t.format==="NHWC"?da(e,e.inputs,t):la(e,e.inputs,t)}}}),ca,pa,ad,Hc=E({"web/lib/wasm/jsep/webgpu/ops/layer-norm.ts"(){V(),G(),j(),ca=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},pa=(e,t,n)=>{const s=t.simplified,i=e[0].dims,r=e[1],a=!s&&e[2],o=i,u=S.normalizeAxis(t.axis,i.length),l=S.sizeToDimension(i,u),d=S.sizeFromDimension(i,u),c=S.size(r.dims),p=a?S.size(a.dims):0;if(c!==d||a&&p!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);const f=[];for(let v=0;v<i.length;++v)v<u?f.push(i[v]):f.push(1);const h=ne(d),m=["type","type"],w=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/h)},{type:1,data:t.epsilon}];a&&m.push("type");const _=n>1,g=n>2,$=v=>{const b=oe(e[0].dataType),x=[k("x",e[0].dataType,e[0].dims,h),k("scale",r.dataType,r.dims,h)];a&&x.push(k("bias",a.dataType,a.dims,h)),x.push(B("output",e[0].dataType,o,h)),_&&x.push(B("mean_data_output",1,f)),g&&x.push(B("inv_std_output",1,f));const I=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${v.registerUniforms(I).declareVariables(...x)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Yn("f32",h)};
    var mean_square_vector = ${Yn("f32",h)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Je(b,h,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Me("mean_vector",h)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Me("mean_square_vector",h)} / uniforms.norm_size ${s?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Je(b,h,"x[j + offset]")};
      let f32scale = ${Je(b,h,"scale[j]")};
      output[j + offset] = ${x[0].type.value}((f32input ${s?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Je(b,h,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${g?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},y=[{dims:o,dataType:e[0].dataType}];return _&&y.push({dims:f,dataType:1}),g&&y.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${h};${n};${s}`,inputDependencies:m},getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:$}},ad=(e,t)=>{ca(e.inputs),e.compute(pa(e.inputs,t,e.outputCount))}}}),fa,od,Zc=E({"web/lib/wasm/jsep/webgpu/ops/matmul.ts"(){G(),Es(),Cs(),fa=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},od=e=>{fa(e.inputs);const t=tt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");const n=t[t.length-1],s=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&s<8)e.compute(zs(e.inputs,{activation:""},t));else{const i=t[t.length-2],r=S.size(e.inputs[0].dims.slice(0,-2)),a=S.size(e.inputs[1].dims.slice(0,-2));if(r!==1&&i===1&&a===1){const o=e.inputs[0].reshape([1,r,s]),u=e.inputs[1].reshape([1,s,n]),l=[1,r,n],d=[o,u];e.compute(Lt(d,{activation:""},t,l),{inputs:d})}else e.compute(Lt(e.inputs,{activation:""},t))}}}}),ha,ma,ga,ud,ld,Qc=E({"web/lib/wasm/jsep/webgpu/ops/matmulnbits.ts"(){V(),G(),se(),j(),ha=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");const n=e[0],s=n.dims.length;if(n.dims[s-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");const i=Math.floor((t.k+t.blockSize-1)/t.blockSize),r=t.blockSize/8*t.bits,a=e[1];if(!S.areEqual(a.dims,[t.n,i,r]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");const u=e[2].dims;if(S.size(u)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){const d=e[3].dims,c=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(S.size(d)!==c)throw new Error("zeroPoints input size error.")}},ma=(e,t)=>{const n=e[0].dims,s=n.length,i=n[s-2],r=t.k,a=t.n,o=n.slice(0,s-2),u=S.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=ne(t.k),f=ne(d),h=ne(a),m=o.concat([i,a]),w=i>1&&a/h%2===0?2:1,_=S.size(m)/h/w,g=64,$=[],y=[u,i,r/p],v=S.convertShape(e[1].dims).slice();v.splice(-1,1,d/f),$.push(...P(y)),$.push(...P(v)),$.push(...P(e[2].dims)),e.length===4&&$.push(...P(S.convertShape(e[3].dims)));const b=[u,i,a/h];$.push(...P(b));const x=I=>{const T=y.length,C=k("a",e[0].dataType,T,p),M=k("b",12,v.length,f),N=k("scales",e[2].dataType,e[2].dims.length),W=[C,M,N],A=e.length===4?k("zero_points",12,e[3].dims.length):void 0;A&&W.push(A);const X=b.length,q=B("output",e[0].dataType,X,h),O=oe(e[0].dataType),F=(()=>{switch(p){case 1:return`array<${O}, 8>`;case 2:return`mat4x2<${O}>`;case 4:return`mat2x4<${O}>`;default:throw new Error(`${p}-component is not supported.`)}})(),D=()=>{let ie=`
          // reuse a data
            var input_offset = ${C.indicesToOffset(`${C.type.indices}(batch, row, word_offset)`)};
            var a_data: ${F};
            for (var j: u32 = 0; j < ${8/p}; j++) {
              a_data[j] = ${C.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let L=0;L<h*w;L++)ie+=`
            b_value = ${f===1?`b${L}_data`:`b${L}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${F}(${Array.from({length:4},(z,U)=>`${O}(b_value_lower[${U}]), ${O}(b_value_upper[${U}])`).join(", ")});
            b_dequantized_values = ${p===1?`${F}(${Array.from({length:8},(z,U)=>`(b_quantized_values[${U}] - ${A?`zero_point${L}`:"zero_point"}) * scale${L}`).join(", ")});`:`(b_quantized_values - ${F}(${Array(8).fill(`${A?`zero_point${L}`:"zero_point"}`).join(",")})) * scale${L};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(L/h)}]${h>1?`[${L%h}]`:""} += ${Array.from({length:8/p},(z,U)=>`${p===1?`a_data[${U}] * b_dequantized_values[${U}]`:`dot(a_data[${U}], b_dequantized_values[${U}])`}`).join(" + ")};
          `;return ie},K=()=>{let ie=`
            var col_index = col * ${h};
            ${A?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${O}(8);`}
            `;for(let L=0;L<h*w;L++)ie+=`
            let scale${L} = ${N.getByOffset("col_index * nBlocksPerCol + block")};
            ${A?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${A.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${O}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return ie},he=()=>{let ie=`col_index = col * ${h};`;for(let L=0;L<h*w;L++)ie+=`
            let b${L}_data = ${M.getByIndices(`${M.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return ie+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${F};
            var b_dequantized_values: ${F};`,ie};return`
        var<workgroup> workgroup_shared: array<${q.type.value}, ${w*g}>;
        ${I.declareVariables(...W,q)}
        ${I.mainStart([g,1,1])}
          let output_indices = ${q.offsetToIndices(`(global_idx / ${g}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${g}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${K()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${he()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${D()}
                word_offset += ${8/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${q.type.value} = ${q.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${g}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${q.setByIndices(`${q.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${f};${h};${w};${g}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:_},programUniforms:$}),getShaderSource:x}},ga=(e,t)=>{const n=e[0].dims,s=n.length,i=n[s-2],r=t.k,a=t.n,o=n.slice(0,s-2),u=S.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=ne(t.k),f=ne(d),h=o.concat([i,a]),m=128,w=a%8===0?8:a%4===0?4:1,_=m/w,g=_*f*8,$=g/p,y=g/t.blockSize,v=S.size(h)/w,b=[],x=[u,i,r/p],I=S.convertShape(e[1].dims).slice();I.splice(-1,1,d/f),b.push(...P(x)),b.push(...P(I)),b.push(...P(e[2].dims)),e.length===4&&b.push(...P(S.convertShape(e[3].dims)));const T=[u,i,a];b.push(...P(T));const C=M=>{const N=x.length,W=k("a",e[0].dataType,N,p),A=k("b",12,I.length,f),X=k("scales",e[2].dataType,e[2].dims.length),q=[W,A,X],O=e.length===4?k("zero_points",12,e[3].dims.length):void 0;O&&q.push(O);const F=T.length,D=B("output",e[0].dataType,F),K=oe(e[0].dataType),he=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${W.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${D.type.value}, ${_}>, ${w}>;
        ${M.declareVariables(...q,D)}
        ${M.mainStart([_,w,1])}
          let output_indices = ${D.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${y} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${W.getByIndices(`${W.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${W.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${y} + local_id.x;
            ${O?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${O.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${K}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${K}(8);`}
            let scale = ${X.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${he()}
              let b_value = ${f===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${K}>(${Array.from({length:4},(ie,L)=>`${K}(b_value_lower[${L}]), ${K}(b_value_upper[${L}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${K}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ie,L)=>`${`dot(a_data${L}, b_dequantized_values[${L}])`}`).join(" + ")};
              word_offset += ${8/p};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${D.type.value} = ${D.type.value}(0);
            for (var b = 0u; b < ${_}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${D.setByIndices(`${D.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${f};${_};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:h,dataType:c}],dispatchGroup:{x:v},programUniforms:b}),getShaderSource:C}},ud=(e,t)=>{ha(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(ga(e.inputs,t)):e.compute(ma(e.inputs,t))},ld=e=>Q(e)}}),_a,wa,ya,$a,va,ba,xa,Sa,dd,Xc=E({"web/lib/wasm/jsep/webgpu/ops/pad.ts"(){V(),G(),j(),_a=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},wa=(e,t,n)=>{let s="";for(let i=t-1;i>=0;--i)s+=`
            k = i32(${e.indicesGet("indices",i)}) - ${R("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${R("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${R("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${s}
            value = x[offset];
          }
      `},ya=(e,t,n)=>{let s="";for(let i=t-1;i>=0;--i)s+=`
                k = i32(${e.indicesGet("indices",i)}) - ${R("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${R("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${R("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${R("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},$a=(e,t,n)=>{let s="";for(let i=t-1;i>=0;--i)s+=`
                k = i32(${e.indicesGet("indices",i)}) - ${R("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${R("uniforms.x_shape",i,t)})) {
                  k = i32(${R("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${R("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},va=(e,t,n)=>{let s="";for(let i=t-1;i>=0;--i)s+=`
                k = i32(${e.indicesGet("indices",i)}) - ${R("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${R("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${R("uniforms.x_shape",i,t)})) {
                  k -= i32(${R("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${R("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},ba=(e,t,n)=>{switch(n.mode){case 0:return wa(e,t,n.pads.length);case 1:return ya(e,t,n.pads.length);case 2:return $a(e,t,n.pads.length);case 3:return va(e,t,n.pads.length);default:throw new Error("Invalid mode")}},xa=(e,t)=>{const n=S.padShape(e[0].dims.slice(),t.pads),s=e[0].dims,r=[{type:12,data:S.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&r.push({type:a?e[2].dataType:1,data:t.value}),r.push(...P(e[0].dims,n));const o=["rank"],u=l=>{const d=B("output",e[0].dataType,n.length),c=k("x",e[0].dataType,s.length),p=c.type.value,f=ba(d,s.length,t),h=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&h.push({name:"constant_value",type:a?p:"f32"}),`
            ${l.registerUniforms(h).declareVariables(c,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(S.size(n)/64)},programUniforms:r}),getShaderSource:u}},Sa=(e,t)=>{if(e.length>1){const n=e[1].getBigInt64Array(),s=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,r=new Int32Array(2*i).fill(0);if(e.length>=4){const o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)r[Number(o[u])]=Number(n[u]),r[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>r[Number(u)]=Number(o));const a=[];return r.forEach(o=>a.push(o)),{mode:t.mode,value:s,pads:a}}else return t},dd=(e,t)=>{_a(e.inputs);const n=Sa(e.inputs,t);e.compute(xa(e.inputs,n),{inputs:[0]})}}}),dt,En,Cn,An,On,Ia,ka,Bn,Rn,cd,pd,Pn,fd,hd,Dn,md,gd,_d,wd,Yc=E({"web/lib/wasm/jsep/webgpu/ops/pool.ts"(){ke(),V(),G(),j(),dt=e=>{if(te.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},En=(e,t,n)=>{const s=t.format==="NHWC",i=e.dims.slice();s&&i.splice(1,0,i.pop());const r=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),u=r?t.dilations.slice():[],l=t.pads.slice();Vt.adjustPoolAttributes(n,i,a,o,u,l);const d=Vt.computePoolOutputShape(n,i,o,u,a,l,t.autoPad),c=Object.assign({},t);r?Object.assign(c,{kernelShape:a,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:a,strides:o,pads:l,cacheKey:t.cacheKey});const p=d.slice();return p.push(p.splice(1,1)[0]),[c,s?p:d]},Cn=(e,t)=>{const n=t.format==="NHWC",s=S.size(e),i=S.size(t.kernelShape),r=[{type:12,data:s},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){const o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],c=!!(l+d);r.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:d}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){const f=t.kernelShape[t.kernelShape.length-2],h=t.strides[t.strides.length-2],m=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(m+w),r.push({type:12,data:f},{type:12,data:h},{type:12,data:m},{type:12,data:w}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[r,a,!0,c,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");const o=S.computeStrides(t.kernelShape);r.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});const u=t.pads.reduce((l,d)=>l+d);return[r,a,!!u,!1,!1]}},An=(e,t,n,s,i,r,a,o,u,l,d,c)=>{const p=i.format==="NHWC",f=t.type.value,h=B("output",t.type.tensor,s);if(i.kernelShape.length<=2){let m="",w="",_="";const g=n-(p?2:1);if(d?m=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${r}
                }`:m=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${r}
                }`,i.kernelShape.length===2){const y=n-(p?3:2);c?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${y}] < 0 || xIndices[${y}] >= uniforms.x_shape[${y}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,h)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${h.offsetToIndices("global_idx")};
              var xIndices = ${h.offsetToIndices("global_idx")};

              var value = ${f}(${o});
              var pad = 0;
              ${w}
              ${m}
              ${_}
              ${a}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");const m=i.kernelShape.length,w=i.pads.length;let _="";return l?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${r}
              }`:_=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${r}
            `,`
            ${e.registerUniforms(u).declareVariables(t,h)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${h.offsetToIndices("global_idx")};
              var xIndices = ${h.offsetToIndices("global_idx")};

              var offsets: array<u32, ${m}>;

              var value = ${f}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${m-1}u; j++) {
                  offsets[j] = offset / ${R("uniforms.kernelStrides","j",m)};
                  offset -= offsets[j] * ${R("uniforms.kernelStrides","j",m)};
                }
                offsets[${m-1}] = offset;

                isPad = false;
                for (var j = ${n-m}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${R("uniforms.strides",`j - ${n-m}u`,m)}
                    + offsets[j - ${n-m}u] - ${R("uniforms.pads","j - 2u",w)};
                  ${_}
              }
              ${a}

              output[global_idx] = value;
            }`}},On=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Ia=e=>`${On(e)};${e.countIncludePad}`,ka=e=>`${On(e)};${e.storageOrder};${e.dilations}`,Bn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Rn=(e,t,n,s)=>{const[i,r]=En(t,s,n),a=k("x",t.dataType,t.dims.length),o=a.type.value,u="value += x_val;";let l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;const[d,c,p,f,h]=Cn(r,i);d.push(...P(t.dims,r));const m=["rank"];return{name:e,shaderCache:{hint:`${s.cacheKey};${p};${f};${h}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(S.size(r)/64)},programUniforms:d}),getShaderSource:w=>An(w,a,t.dims.length,r.length,i,u,l,0,c,p,f,h)}},cd=e=>{const t=e.count_include_pad!==0,n=Bn(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");const s={countIncludePad:t,...n,cacheKey:""};return{...s,cacheKey:Ia(s)}},pd=(e,t)=>{dt(e.inputs),e.compute(Rn("AveragePool",e.inputs[0],!1,t))},Pn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},fd=e=>{const t=e.format;return{format:t,...Pn,cacheKey:t}},hd=(e,t)=>{dt(e.inputs),e.compute(Rn("GlobalAveragePool",e.inputs[0],!0,t))},Dn=(e,t,n,s)=>{const[i,r]=En(t,s,n),a=`
      value = max(x_val, value);
    `,o="",u=k("x",t.dataType,t.dims.length),l=["rank"],[d,c,p,f,h]=Cn(r,i);return d.push(...P(t.dims,r)),{name:e,shaderCache:{hint:`${s.cacheKey};${p};${f};${h}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(S.size(r)/64)},programUniforms:d}),getShaderSource:m=>An(m,u,t.dims.length,r.length,i,a,o,t.dataType===10?-65504:-1e5,c,p,f,h)}},md=(e,t)=>{dt(e.inputs),e.compute(Dn("MaxPool",e.inputs[0],!1,t))},gd=e=>{const t=e.storage_order,n=e.dilations,s=Bn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(s.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");const i={storageOrder:t,dilations:n,...s,cacheKey:""};return{...i,cacheKey:ka(i)}},_d=e=>{const t=e.format;return{format:t,...Pn,cacheKey:t}},wd=(e,t)=>{dt(e.inputs),e.compute(Dn("GlobalMaxPool",e.inputs[0],!0,t))}}}),Ta,za,yd,$d,Jc=E({"web/lib/wasm/jsep/webgpu/ops/quantize-linear.ts"(){V(),G(),se(),j(),Ta=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,s)=>n===e[2].dims[s]).reduce((n,s)=>n&&s,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,r)=>r===t.axis||i===e[0].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");const n=e[0].dims[t.axis],s=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/s)||t.blockSize>Math.ceil(n/(s-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},za=(e,t)=>{const n=S.normalizeAxis(t.axis,e[0].dims.length),s=e[0].dataType,i=s===3,r=e[0].dims,a=e[1].dataType,o=S.size(r),u=s===3||s===2,l=u?[Math.ceil(S.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(S.size(c.dims)/4)]:c.dims:void 0,f=d.length===0||d.length===1&&d[0]===1,h=f===!1&&d.length===1,m=ne(o),w=f&&(!u||m===4),_=w?m:1,g=w&&!u?m:1,$=k("input",u?12:s,l.length,g),y=k("scale",a,d.length),v=c?k("zero_point",u?12:s,p.length):void 0,b=B("output",a,r.length,_),x=[$,y];v&&x.push(v);const I=[l,d];c&&I.push(p);const T=[{type:12,data:o/_},{type:12,data:n},{type:12,data:t.blockSize},...P(...I,r)],C=M=>{const N=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${M.registerUniforms(N).declareVariables(...x,b)}
      ${M.mainStart()}
          ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${b.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${$.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${$.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${y.getByOffset("0")}`:h?`
            let scale_index = ${b.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${y.getByOffset("scale_index")};`:`
            var scale_indices: ${y.type.indices} = output_indices;
            let index = ${y.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${y.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${y.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${v?f?u?`
                let zero_point_input = ${v.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${v.getByOffset("0")}`:h?u?`
                let zero_point_index = ${b.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${v.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${b.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${v.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${y.indicesToOffset("scale_indices")};
                let zero_point_input = ${v.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${v.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":$.type.value}(0);`};
      // Compute and write output
      ${b.setByOffset("global_idx",`${b.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:v?["rank","rank","rank"]:["rank","rank"]},getShaderSource:C,getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:T})}},yd=(e,t)=>{Ta(e.inputs,t),e.compute(za(e.inputs,t))},$d=e=>Q({axis:e.axis,blockSize:e.blockSize})}}),Ea,Ca,vd,ep=E({"web/lib/wasm/jsep/webgpu/ops/range.ts"(){ke(),V(),j(),Ea=(e,t,n)=>{const s=e===t,i=e<t&&n<0,r=e>t&&n>0;if(s||i||r)throw new Error("Range these inputs' contents are invalid.")},Ca=(e,t,n,s)=>{const i=Math.abs(Math.ceil((t-e)/n)),r=[i],a=i,o=[{type:12,data:a},{type:s,data:e},{type:s,data:n},...P(r)],u=l=>{const d=B("output",s,r.length),c=d.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${s}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:r,dataType:s}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},vd=e=>{let t=0,n=0,s=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],s=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],s=e.inputs[2].getFloat32Array()[0]),te.webgpu.validateInputContent&&Ea(t,n,s),e.compute(Ca(t,n,s,e.inputs[0].dataType),{inputs:[]})}}}),Aa,Mn,Nn,Oa,bd,xd,tp=E({"web/lib/wasm/jsep/webgpu/ops/scatter-nd.ts"(){V(),G(),se(),j(),Aa=(e,t,n,s)=>{if(e!=="none"&&s!=="i32"&&s!=="u32"&&s!=="f32")throw new Error(`Input ${s} is not supported with reduction ${e}.`);const i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,r=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${n};`;case"add":return s==="i32"||s==="u32"?`atomicAdd(&${t}, bitcast<${s}>(${n}));`:`
              ${i}bitcast<${s}>(oldValue) + (${n})${r}`;case"max":return s==="i32"||s==="u32"?`atomicMax(&${t}, bitcast<${s}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${r}`;case"min":return s==="i32"||s==="u32"?`atomicMin(&${t}, bitcast<${s}>(${n}));`:`${i}min(bitcast<${s}>(oldValue), (${n}))${r}`;case"mul":return`${i}(bitcast<${s}>(oldValue) * (${n}))${r}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Mn=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,Nn=(e,t,n)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${n?"global_idx":"idx"} + i];
        ${Aa(e.reduction,"output[data_offset + i]","value",t)}
      }`,Oa=(e,t)=>{const n=e[0].dims,s=e[1].dims,i=n,r=1,a=Math.ceil(S.size(s)/r),o=s[s.length-1],u=S.sizeFromDimension(n,o),l=S.sizeFromDimension(s,0)/o,d=[{type:12,data:a},{type:12,data:o},{type:12,data:u},...P(e[1].dims,e[2].dims,i)],c=p=>{const f=k("indices",e[1].dataType,e[1].dims.length),h=k("updates",e[2].dataType,e[2].dims.length,r),m=t.reduction!=="none"&&t.reduction!==""?Xo("output",e[0].dataType,i.length):B("output",e[0].dataType,i.length,r);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,h,m)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${l}; i = i + 1) {
      for (var j = i + 1; j < ${l}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${l}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${Mn(n.length,!1)}
      }
      ${Nn(t,m.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${Mn(n.length,!0)}
  }
  ${Nn(t,m.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c}},bd=e=>Q({reduction:e.reduction}),xd=(e,t)=>{e.compute(Oa(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}}),Ba,Ra,Pa,Un,Da,Ma,Na,Ua,Va,qa,La,Ga,Vn,Wa,ja,Fa,Ka,Ha,Sd,Id,np=E({"web/lib/wasm/jsep/webgpu/ops/resize.ts"(){V(),G(),se(),j(),Ba=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ra=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));const s=new Array(n).fill(1);return t.forEach((i,r)=>s[i]=e[r]),s},Pa=(e,t,n,s,i,r)=>{const[a,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(d=>r.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(d=>s.push(d)),s.length!==0&&s.length!==l&&n>=18&&s.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ba(s,t),t.axes.length>0&&Ra(s,t.axes,l).forEach((d,c)=>s[c]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>i.push(Number(d))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof s<"u"&&typeof i<"u"&&s.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Un=(e,t,n,s)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${s}(big / (${n}));
  let fract = ${s}(big % (${n})) / ${s}(${n});
  return whole + fract;
`,Da=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Un("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Un("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ma=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Na=(e,t,n)=>{const s=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?s:e.slice();return t.length>0?(t.forEach((r,a)=>{s[r]=i[a],s[a+n]=i[t.length+a]}),s):i},Ua=(e,t,n,s)=>{let i=[];if(n.length>0)if(s.length>0){if(e.forEach(r=>i.push(r)),Math.max(...s)>e.length)throw new Error("axes is out of bound");s.forEach((r,a)=>i[r]=n[a])}else n.forEach(r=>i.push(r));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((r,a)=>Math.round(r*t[a]))}return i},Va=(e,t,n)=>{const s=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(r=>t[r]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(r=>t[r]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);const i=e.slice();return n.axes.length>0?(n.axes.forEach(r=>t[r]=s),n.axes.forEach(r=>i[r]=Math.round(e[r]*t[r]))):(t.fill(s,0,t.length),i.forEach((r,a)=>i[a]=Math.round(r*t[a]))),i},qa=(e,t,n,s,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${R("uniforms.scales","i",s)};
        var roi_low = ${R("uniforms.roi","i",i)};
        var roi_hi = ${R("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${R("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${R("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,La=(e,t,n,s,i,r,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${s.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${R("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${R("uniforms.roi","i",r)};
          var roi_hi = ${R("uniforms.roi",`i + ${n.length}`,r)};
          var input_shape_i = ${R("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${R("uniforms.output_shape","i",s.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Ga=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${R("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Vn=(e,t,n,s)=>e.rank>s?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Wa=(e,t,n,s,i)=>{const[r,a,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Vn(e,u,r,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${a}];
      var col:${l} = originalIndices[${o}];
      ${s?`if (row < 0 || row > (${n[a]} - 1) || col < 0 || col > (${n[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[a]} - 1));
      col = max(0, min(col, ${n[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${r}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ja=(e,t,n,s,i,r,a,o,u,l)=>{const d=n.length===2,[c,p]=d?[0,1]:[2,3],f=e.type.value,h=m=>{const w=m===c?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",m)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[m]},
        ${s[m]}, ${n[m]}, ${r[m]}, ${r[m]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[m]} - 1))) {
          return ${u};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${f} = originalIdx + ${f}(i);
          if (${w} < 0 || ${w} >= ${n[m]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${w} = max(0, min(${w}, ${n[m]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",m,`u32(${w})`)};
          data[i + 1] = ${m===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${h(c)};
    ${h(p)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Fa=(e,t,n,s,i)=>{const[r,a,o,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Vn(e,l,r,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${a}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${u}];
      ${s?`if (depth < 0 || depth > (${n[a]} - 1) || height < 0 || height > (${n[o]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[a]} - 1));
      height = max(0, min(height, ${n[o]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${r}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Ka=(e,t,n,s,i,r)=>{const a=e.dims,o=Na(r,t.axes,a.length);let u=Ua(a,s,i,t.axes),l=s.slice();s.length===0&&(l=a.map((g,$)=>g===0?1:u[$]/g),t.keepAspectRatioPolicy!=="stretch"&&(u=Va(a,l,t)));const d=B("output",e.dataType,u.length),c=k("input",e.dataType,a.length),p=S.size(u),f=a.length===u.length&&a.every((g,$)=>g===u[$]),h=t.coordinateTransformMode==="tf_crop_and_resize",m=t.extrapolationValue,w=c.type.value,_=g=>`
      ${f?"":`
      ${Da(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Ga(c,a)};
              ${Ma(t.nearestMode,n,w)};
              ${La(c,d,a,u,l.length,o.length,h)};
              `;case"linear":return`
              ${qa(d,a,u,l.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Wa(c,d,a,h,m)}`;if(a.length===3||a.length===5)return`${Fa(c,d,a,h,m)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${ja(c,d,a,u,l,o,t.cubicCoeffA,h,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${g.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(c,d)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${f}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:o},...P(a,u)]})}},Ha=e=>{const t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Sd=(e,t)=>{const n=[],s=[],i=[],r=Ha(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Pa(e.inputs,t,r,n,s,i),e.compute(Ka(e.inputs[0],t,r,n,s,i),{inputs:[0]})},Id=e=>{const t=e.antialias,n=e.axes,s=e.coordinateTransformMode,i=e.cubicCoeffA,r=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Q({antialias:t,axes:n,coordinateTransformMode:s,cubicCoeffA:i,excludeOutside:r,extrapolationValue:a,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}}),Za,Qa,kd,sp=E({"web/lib/wasm/jsep/webgpu/ops/skip-layer-norm.ts"(){V(),G(),j(),Za=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");const t=e[0],n=e[1],s=e[2];if(t.dataType!==n.dataType||t.dataType!==s.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");const i=t.dims[t.dims.length-1],r=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==r)throw new Error("Skip must have the same sequence length as input");if(s.dims.length!==1)throw new Error("Gamma must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){const a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){const a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Qa=(e,t,n,s)=>{const i=t.simplified,r=e[0].dims,a=S.size(r),o=r,u=a,l=r.slice(-1)[0],d=s?r.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,f=s&&n>1,h=s&&n>2,m=n>3,w=64,_=ne(l),g=[{type:12,data:u},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],$=v=>{const b=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],x=[k("x",e[0].dataType,e[0].dims,_),k("skip",e[1].dataType,e[1].dims,_),k("gamma",e[2].dataType,e[2].dims,_)];c&&x.push(k("beta",e[3].dataType,e[3].dims,_)),p&&x.push(k("bias",e[4].dataType,e[4].dims,_)),x.push(B("output",e[0].dataType,o,_)),f&&x.push(B("mean_output",1,d)),h&&x.push(B("inv_std_output",1,d)),m&&x.push(B("input_skip_bias_sum",e[0].dataType,o,_));const I=oe(e[0].dataType),T=oe(1,_);return`

      ${v.registerUniforms(b).declareVariables(...x)}
      var<workgroup> sum_shared : array<${T}, ${w}>;
      var<workgroup> sum_squared_shared : array<${T}, ${w}>;

      ${v.mainStart([w,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${w};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${w};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${w-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":I+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${m?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Je(I,_,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${w};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Me("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Me("square_sum",_)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${h?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${I}(mean)`}) *
            ${I}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},y=[{dims:o,dataType:e[0].dataType}];return n>1&&y.push({dims:d,dataType:1}),n>2&&y.push({dims:d,dataType:1}),n>3&&y.push({dims:r,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${f};${h};${m}`,inputDependencies:e.map((v,b)=>"type")},getShaderSource:$,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:g})}},kd=(e,t)=>{Za(e.inputs);const s=[0];e.outputCount>1&&s.push(-3),e.outputCount>2&&s.push(-3),e.outputCount>3&&s.push(3),e.compute(Qa(e.inputs,t,e.outputCount,!1),{outputs:s})}}}),Xa,ct,Ya,qn,Ja,eo,Td,zd,ip=E({"web/lib/wasm/jsep/webgpu/ops/slice.ts"(){V(),G(),se(),j(),Xa=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,s)=>{if(e[s+1].dataType!==6&&e[s+1].dataType!==7)throw new Error(`Input ${s} must be an array of int32 or int64`)})},ct=(e,t)=>{const n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(s=>n.push(Number(s)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(s=>n.push(Number(s)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Ya=(e,t)=>{if(e.length>1){const n=ct(e,1),s=ct(e,2);let i=ct(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Q({starts:n,ends:s,axes:i})}else return t},qn=(e,t,n,s,i)=>{let r=e;return e<0&&(r+=n[s[t]]),i[t]<0?Math.max(0,Math.min(r,n[s[t]]-1)):Math.max(0,Math.min(r,n[s[t]]))},Ja=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length}; i >= 0; i--) {
            let input_shape_i = ${R("uniforms.input_shape","i",n.length)};
            let steps_i = ${R("uniforms.steps","i",n.length)};
            let signs_i = ${R("uniforms.signs","i",n.length)};
            let starts_i = ${R("uniforms.starts","i",n.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,eo=(e,t)=>{const n=e[0].dims,s=S.size(n),i=t.axes.length>0?S.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()];let r=ct(e,4);r.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),r.length===0&&(r=Array(i.length).fill(1));const a=t.starts.map((_,g)=>qn(_,g,n,i,r)),o=t.ends.map((_,g)=>qn(_,g,n,i,r));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let _=0;_<n.length;++_)i.includes(_)||(a.splice(_,0,0),o.splice(_,0,n[_]),r.splice(_,0,1));const u=r.map(_=>Math.sign(_));r.forEach((_,g,$)=>{if(_<0){const y=(o[g]-a[g])/_,v=a[g],b=v+y*r[g];a[g]=b,o[g]=v,$[g]=-_}});const l=n.slice(0);i.forEach((_,g)=>{l[_]=Math.ceil((o[_]-a[_])/r[_])});const d={dims:l,dataType:e[0].dataType},c=B("output",e[0].dataType,l.length),p=k("input",e[0].dataType,e[0].dims.length),f=S.size(l),h=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:r.length}],m=[{type:12,data:f},{type:12,data:a},{type:6,data:u},{type:12,data:r},...P(e[0].dims,l)],w=_=>`
      ${_.registerUniforms(h).declareVariables(p,c)}
        ${Ja(p,c,n)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${r.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:m})}},Td=(e,t)=>{Xa(e.inputs,t);const n=Ya(e.inputs,t);e.compute(eo(e.inputs,n),{inputs:[0]})},zd=e=>{const t=e.starts,n=e.ends,s=e.axes;return Q({starts:t,ends:n,axes:s})}}}),to,no,Ed,Cd,rp=E({"web/lib/wasm/jsep/webgpu/ops/softmax.ts"(){V(),G(),se(),Ne(),j(),to=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},no=(e,t)=>{const n=e.inputs[0],s=n.dims,i=S.size(s),r=s.length,a=S.normalizeAxis(t.axis,r),o=a<s.length-1;let u,l=[];o?(l=Array.from({length:r},(x,I)=>I),l[a]=r-1,l[r-1]=a,u=e.compute(fe(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;const d=u.dims,c=d[r-1],p=i/c,f=ne(c),h=c/f;let m=64;p===1&&(m=256);const w=(x,I)=>I===4?`max(max(${x}.x, ${x}.y), max(${x}.z, ${x}.w))`:I===2?`max(${x}.x, ${x}.y)`:I===3?`max(max(${x}.x, ${x}.y), ${x}.z)`:x,_=k("x",u.dataType,u.dims,f),g=B("result",u.dataType,u.dims,f),$=_.type.value,y=oe(u.dataType)==="f32"?`var threadMax = ${$}(-3.402823e+38f);`:`var threadMax = ${$}(-65504.0h);`,v=x=>`
      var<workgroup> rowMaxShared : ${$};
      var<workgroup> rowSumShared : ${$};
      var<workgroup> threadShared : array<${$}, ${m}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${$} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${$}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${x.registerUniform("packedCols","i32").declareVariables(_,g)}
      ${x.mainStart(m)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${m};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${y}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${$}(${w("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${$}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${$}(${Me("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,b=e.compute({name:"Softmax",shaderCache:{hint:`${f};${m}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:h}]}),getShaderSource:v},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(fe(b,l),{inputs:[b]})},Ed=(e,t)=>{to(e.inputs),no(e,t)},Cd=e=>Q({axis:e.axis})}}),Ln,so,io,ro,Ad,ap=E({"web/lib/wasm/jsep/webgpu/ops/tile.ts"(){V(),G(),j(),Ln=e=>Array.from(e.getBigInt64Array(),Number),so=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ln(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},io=(e,t)=>{const n=[];for(let s=0;s<e.length;++s)n.push(e[s]*t[s]);return n},ro=(e,t)=>{const n=e[0].dims,s=t??Ln(e[1]),i=io(n,s),r=S.size(i),a=e[0].dataType,o=k("input",a,n.length),u=B("output",a,i.length),l=d=>`
      const inputShape = ${o.indices(...n)};
      ${d.registerUniform("output_size","u32").declareVariables(o,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:[{type:12,data:r},...P(e[0].dims,i)]}),getShaderSource:l}},Ad=e=>{so(e.inputs),e.compute(ro(e.inputs),{inputs:[0]})}}}),ao,oo,Od,op=E({"web/lib/wasm/jsep/webgpu/ops/where.ts"(){V(),G(),j(),ao=(e,t,n,s,i)=>{const r=B("output_data",i,n.length,4),a=k("a_data",t[1].dataType,t[1].dims.length,4),o=k("b_data",t[2].dataType,t[2].dims.length,4),u=k("c_data",t[0].dataType,t[0].dims.length,4);let l;const d=(c,p,f)=>`select(${p}, ${c}, ${f})`;if(!s)l=r.setByOffset("global_idx",d(a.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{const c=(p,f,h="")=>{const m=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,_=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${r.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${a.broadcastedIndicesToOffset(`output_indices${f}`,r)};
            let offset_b${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,r)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,r)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${p}[${f}] = ${h}(${d(m,w,_)});
          `};i===9?l=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,a,o,r)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},oo=e=>{const t=e[1].dims,n=e[2].dims,s=e[0].dims,i=e[1].dataType,r=!(S.areEqual(t,n)&&S.areEqual(n,s));let a=t,o=S.size(t);if(r){const l=tt.calcShape(tt.calcShape(t,n,!1),s,!1);if(!l)throw new Error("Can't perform where op on the given tensors");a=l,o=S.size(a)}const u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>ao(l,e,a,r,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...P(s,t,n,a)]})}},Od=e=>{e.compute(oo(e.inputs))}}}),Bd,up=E({"web/lib/wasm/jsep/webgpu/op-resolve-rules.ts"(){bc(),Ss(),xc(),Sc(),Ic(),kc(),Tc(),Oc(),Rc(),Pc(),Dc(),Mc(),Nc(),Uc(),Vc(),qc(),Lc(),Gc(),Wc(),jc(),Fc(),Kc(),Hc(),Zc(),Qc(),Yl(),Xc(),Yc(),Jc(),ep(),tp(),xs(),np(),sd(),sp(),ip(),rp(),td(),ap(),Ne(),Is(),op(),Bd=new Map([["Abs",[ku]],["Acos",[Tu]],["Acosh",[zu]],["Add",[ul]],["ArgMax",[bu,es]],["ArgMin",[vu,es]],["Asin",[Eu]],["Asinh",[Cu]],["Atan",[Au]],["Atanh",[Ou]],["Attention",[xu]],["AveragePool",[pd,cd]],["BatchNormalization",[Su]],["BiasAdd",[Iu]],["BiasSplitGelu",[ol]],["Cast",[Ru,Bu]],["Ceil",[Du]],["Clip",[Pu]],["Concat",[wl,yl]],["Conv",[as,rs]],["ConvTranspose",[El,zl]],["Cos",[Mu]],["Cosh",[Nu]],["CumSum",[Cl,Al]],["DepthToSpace",[Ol,Bl]],["DequantizeLinear",[yd,$d]],["Div",[ll]],["Einsum",[Rl,Pl]],["Elu",[Uu,gt]],["Equal",[dl]],["Erf",[Vu]],["Exp",[qu]],["Expand",[Dl]],["FastGelu",[Ml]],["Floor",[Lu]],["FusedConv",[as,rs]],["Gather",[Ul,Nl]],["GatherElements",[jl,Wl]],["GatherBlockQuantized",[Ll,Gl]],["GatherND",[Vl,ql]],["Gelu",[Gu]],["Gemm",[Kl,Fl]],["GlobalAveragePool",[hd,fd]],["GlobalMaxPool",[wd,_d]],["Greater",[hl]],["GreaterOrEqual",[gl]],["GridSample",[Hl,Zl]],["GroupQueryAttention",[id]],["HardSigmoid",[Xu,Qu]],["InstanceNormalization",[rd]],["LayerNormalization",[ad]],["LeakyRelu",[Wu,gt]],["Less",[ml]],["LessOrEqual",[_l]],["Log",[rl]],["MatMul",[od]],["MatMulNBits",[ud,ld]],["MaxPool",[md,gd]],["Mul",[cl]],["MultiHeadAttention",[Xl,Ql]],["Neg",[Fu]],["Not",[ju]],["Pad",[dd]],["Pow",[pl]],["QuickGelu",[al,gt]],["Range",[vd]],["Reciprocal",[Ku]],["ReduceMin",[gu]],["ReduceMean",[cu]],["ReduceMax",[mu]],["ReduceSum",[wu]],["ReduceProd",[_u]],["ReduceL1",[pu]],["ReduceL2",[fu]],["ReduceLogSum",[$u]],["ReduceLogSumExp",[hu]],["ReduceSumSquare",[yu]],["Relu",[Hu]],["Resize",[Sd,Id]],["RotaryEmbedding",[nd]],["ScatterND",[xd,bd]],["Sigmoid",[Zu]],["Sin",[Yu]],["Sinh",[Ju]],["Slice",[Td,zd]],["SkipLayerNormalization",[kd]],["Split",[Jl,ed]],["Sqrt",[el]],["Softmax",[Ed,Cd]],["Sub",[fl]],["Tan",[tl]],["Tanh",[nl]],["ThresholdedRelu",[il,gt]],["Tile",[Ad]],["Transpose",[Jo,eu]],["Where",[Od]]])}}),Rd,lp=E({"web/lib/wasm/jsep/webgpu/program-manager.ts"(){ke(),Oe(),j(),Rd=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,s,i){Ee(e.programInfo.name);const r=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);const o=[];for(const l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(const l of n)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});const u=r.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){const l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ie(e.programInfo.name)}dispose(){}build(e,t){Ee(e.name);const n=this.backend.device,s=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{n.features.has(d.feature)&&s.push(`enable ${d.extension};`)});const r=Yo(t,this.backend.device.limits),a=e.getShaderSource(r),o=`${s.join(`
`)}
${r.additionalImplementations}
${a}`,u=n.createShaderModule({code:o,label:e.name});H("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);const l=n.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ie(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:r.variablesInfo}}normalizeDispatchGroupSize(e){const t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,s=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&s<=i)return[t,n,s];const r=t*n*s;let a=Math.ceil(Math.sqrt(r));if(a>i){if(a=Math.ceil(Math.cbrt(r)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}}),Pd={};$t(Pd,{WebGpuBackend:()=>Dd});var uo,lo,Gn,Dd,dp=E({"web/lib/wasm/jsep/backend-webgpu.ts"(){ke(),V(),Oe(),Ko(),$c(),up(),lp(),uo=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);const n=[];for(let s=0;s<e.length;++s){const i=e[s].dataType;switch(t[s]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{const r=e[s].dims.length;n.push(`${i};${r}`);break}case"dims":{const r=e[s].dims.join(",");n.push(`${i};${r}`);break}default:throw new Error(`unsupported input dependency: ${t[s]}`)}}return n.join("|")},lo=(e,t,n)=>{let s=e.name;return e.shaderCache?.hint&&(s+="["+e.shaderCache.hint+"]"),s+=":"+n+`:${uo(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,s},Gn=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Dd=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;const s=e.webgpu?.device;if(s&&typeof s.createBuffer=="function"&&s.queue)this.device=s,this.adapterInfo=new Gn(t.info||await t.requestAdapterInfo());else{const i=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},a=o=>t.features.has(o)&&i.push(o)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(r),this.adapterInfo=new Gn(t.info||await t.requestAdapterInfo())}this.gpuDataManager=Qo(this),this.programManager=new Rd(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ys(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){const e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ee(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{const t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let s=0;s<t.length/2;s++){const i=n[s],r=i.kernelId,a=this.kernels.get(r),o=a.kernelType,u=a.kernelName,l=i.programName,d=i.inputTensorViews,c=i.outputTensorViews,p=t[s*2],f=t[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=p);const h=Number(p-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(h)||!Number.isSafeInteger(m))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(w=>({dims:w.dims,dataType:Ae(w.dataType)})),outputsMetadata:c.map(w=>({dims:w.dims,dataType:Ae(w.dataType)})),kernelId:r,kernelType:o,kernelName:u,programName:l,startTime:h,endTime:m});else{let w="";d.forEach((g,$)=>{w+=`input[${$}]: [${g.dims}] | ${Ae(g.dataType)}, `});let _="";c.forEach((g,$)=>{_+=`output[${$}]: [${g.dims}] | ${Ae(g.dataType)}, `}),console.log(`[profiling] kernel "${r}|${o}|${u}|${l}" ${w}${_}execution time: ${m-h} ns`)}Dt("GPU",`${l}::${p}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),Ie()}run(e,t,n,s,i,r){Ee(e.name);const a=[];for(let g=0;g<t.length;++g){const $=t[g].data;if($===0)continue;const y=this.gpuDataManager.get($);if(!y)throw new Error(`no GPU data for input: ${$}`);a.push(y)}const{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=n.length===0?o.map((g,$)=>$):n;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);const c=[],p=[];for(let g=0;g<o.length;++g){if(!Number.isInteger(d[g])||d[g]<-3||d[g]>=r)throw new Error(`Invalid output index: ${d[g]}`);if(d[g]===-3)continue;const $=d[g]===-1,y=d[g]===-2,v=$||y?i(o[g].dataType,o[g].dims):s(d[g],o[g].dataType,o[g].dims);if(c.push(v),v.data===0)continue;const b=this.gpuDataManager.get(v.data);if(!b)throw new Error(`no GPU data for output: ${v.data}`);if($&&this.temporaryData.push(b),y){let x=this.kernelPersistentData.get(this.currentKernelId);x||(x=[],this.kernelPersistentData.set(this.currentKernelId,x)),x.push(b)}p.push(b)}if(a.length!==t.length||p.length!==c.length){if(p.length===0)return Ie(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let g=0;const $=[];l.forEach(x=>{const I=typeof x.data=="number"?[x.data]:x.data;if(I.length===0)return;const T=x.type===10?2:4;let C,M;x.type===10?(M=I.length>4?16:I.length>2?8:I.length*T,C=I.length>4?16:T*I.length):(M=I.length<=2?I.length*T:16,C=16),g=Math.ceil(g/M)*M,$.push(g);const N=x.type===10?8:4;g+=I.length>4?Math.ceil(I.length/N)*C:I.length*T});const y=16;g=Math.ceil(g/y)*y;const v=new ArrayBuffer(g);l.forEach((x,I)=>{const T=$[I],C=typeof x.data=="number"?[x.data]:x.data;if(x.type===6)new Int32Array(v,T,C.length).set(C);else if(x.type===12)new Uint32Array(v,T,C.length).set(C);else if(x.type===10)new Uint16Array(v,T,C.length).set(C);else if(x.type===1)new Float32Array(v,T,C.length).set(C);else throw new Error(`Unsupported uniform type: ${Ae(x.type)}`)});const b=this.gpuDataManager.create(g,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(b.buffer,0,v,0,g),this.gpuDataManager.release(b.id),f={offset:0,size:g,buffer:b.buffer}}const h=this.programManager.normalizeDispatchGroupSize(u),m=h[1]===1&&h[2]===1,w=lo(e,t,m);let _=this.programManager.getArtifact(w);if(_||(_=this.programManager.build(e,h),this.programManager.setArtifact(w,_),H("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let g=0;g<l.length;g++){const $=l[g],y=$.type,v=typeof $.data=="number"?1:$.data.length,[b,x]=_.uniformVariablesInfo[g];if(y!==b||v!==x)throw new Error(`Uniform variable ${g} mismatch: expect type ${b} with size ${x}, got type ${y} with size ${v} in program "${_.programInfo.name}".`)}}if(H("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${h[0]}x${h[1]}x${h[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){const g={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(g),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(g)}return this.programManager.run(_,a,p,h,f),Ie(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,s){const i=Bd.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);const r={kernelType:e,kernelName:s,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,r)}releaseKernel(e){const t=this.kernelPersistentData.get(e);if(t){for(const n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){const s=this.kernels.get(e);if(!s)throw new Error(`kernel not created: ${e}`);const i=s.kernelType,r=s.kernelName,a=s.kernelEntry,o=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${r}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),H("info",()=>`[WebGPU] Start to run kernel "[${i}] ${r}"...`);const u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${r}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${r}": ${l.message}`:null));for(const l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,s){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));const r=i.get(t),a=this.gpuDataManager.registerExternalBuffer(n,s,r);return i.set(t,[a,n]),a}unregisterBuffers(e){const t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){const t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{const s=await Xn(this,e,t);return $s(s.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){H("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){H("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){H("info","replay"),this.sessionStatus="replaying";const e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let s=0;s<n;s++){const i=this.getComputePassEncoder(),r=e[s];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(r.computePipeline),i.setBindGroup(0,r.bindGroup),i.dispatchWorkgroups(...r.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}}),Md={};$t(Md,{init:()=>Nd});var At,co,Nd,cp=E({"web/lib/wasm/jsep/init.ts"(){V(),Oe(),G(),yc(),At=class Ud{constructor(t,n,s,i){this.module=t,this.dataType=n,this.data=s,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");const t=S.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");const t=S.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");const t=S.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");const t=S.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(S.size(t)!==S.size(this.dims))throw new Error("Invalid new shape");return new Ud(this.module,this.dataType,this.data,t)}},co=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;const s=e.PTR_SIZE;let i=n/e.PTR_SIZE;const r=s===4?"i32":"i64";this.opKernelContext=Number(e.getValue(s*i++,r));const a=Number(e.getValue(s*i++,r));this.outputCount=Number(e.getValue(s*i++,r)),this.customDataOffset=Number(e.getValue(s*i++,"*")),this.customDataSize=Number(e.getValue(s*i++,r));const o=[];for(let u=0;u<a;u++){const l=Number(e.getValue(s*i++,r)),d=Number(e.getValue(s*i++,"*")),c=Number(e.getValue(s*i++,r)),p=[];for(let f=0;f<c;f++)p.push(Number(e.getValue(s*i++,r)));o.push(new At(e,l,d,p))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){const n=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,s=t?.outputs??[],i=(a,o,u)=>new At(this.module,o,this.output(a,u),u),r=(a,o)=>{const u=je(a,o);if(!u)throw new Error(`Unsupported data type: ${a}`);const l=u>0?this.backend.gpuDataManager.create(u).id:0;return new At(this.module,a,l,o)};return this.backend.run(e,n,s,i,r,this.outputCount)}output(e,t){const n=this.module.stackSave();try{const s=this.module.PTR_SIZE,i=s===4?"i32":"i64",r=this.module.stackAlloc((1+t.length)*s);this.module.setValue(r,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(r+s*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,r)}catch(s){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(n)}}},Nd=async(e,t,n,s)=>{const i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){const r=(dp(),jt(Pd)).WebGpuBackend,a=new r;await a.initialize(n,s),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,u,l,d=!1)=>{if(d)H("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),a.memcpy(Number(o),Number(u));else{H("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);const c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));a.upload(Number(u),c)}},async(o,u,l)=>{H("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>a.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>a.releaseKernel(o),(o,u,l,d)=>{H("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);const c=new co(t,a,Number(u));return a.computeKernel(Number(o),c,d)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{const r=new Zo(n);i("webnn",[r,()=>r.reserveTensorId(),a=>r.releaseTensorId(a),async(a,o,u,l,d)=>r.ensureTensor(a,o,u,l,d),(a,o)=>{r.uploadTensor(a,o)},async(a,o)=>r.downloadTensor(a,o)])}}}}),po,As,Os,Pe,fo,Wn,Wt,Bs,Rs,jn,Ps,Ds,Ms,Vd=E({"web/lib/wasm/wasm-core-impl.ts"(){gc(),_c(),V(),Ze(),gs(),Go(),po=(e,t)=>{ee()._OrtInit(e,t)!==0&&Y("Can't initialize onnxruntime.")},As=async e=>{po(e.wasm.numThreads,Nt(e.logLevel))},Os=async(e,t)=>{ee().asyncInit?.();{const n=(cp(),jt(Md)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let s=e.webgpu.adapter;if(s){if(typeof s.limits!="object"||typeof s.features!="object"||typeof s.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{const i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);const r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(s=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:r}),!s)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await n("webgpu",ee(),e,s)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await n("webnn",ee(),e)}}},Pe=new Map,fo=e=>{const t=ee(),n=t.stackSave();try{const s=t.PTR_SIZE,i=t.stackAlloc(2*s);t._OrtGetInputOutputCount(e,i,i+s)!==0&&Y("Can't get session input/output count.");const a=s===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+s,a))]}finally{t.stackRestore(n)}},Wn=(e,t)=>{const n=ee(),s=n.stackSave();let i=0;try{const r=n.PTR_SIZE,a=n.stackAlloc(2*r);n._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&Y("Can't get session input/output metadata.");const u=Number(n.getValue(a,"*"));i=Number(n.getValue(a+r,"*"));const l=n.HEAP32[i/4];if(l===0)return[u,0];const d=n.HEAPU32[i/4+1],c=[];for(let p=0;p<d;p++){const f=Number(n.getValue(i+8+p*r,"*"));c.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(p+d)*r,"*")))}return[u,l,c]}finally{n.stackRestore(s),i!==0&&n._OrtFree(i)}},Wt=e=>{const t=ee(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Bs=async(e,t)=>{let n,s;const i=ee();Array.isArray(e)?[n,s]=e:e.buffer===i.HEAPU8.buffer?[n,s]=[e.byteOffset,e.byteLength]:[n,s]=Wt(e);let r=0,a=0,o=0,u=[];const l=[],d=[];try{if([a,u]=await Lo(t),t?.externalData&&i.mountExternalData){const y=[];for(const v of t.externalData){const b=typeof v=="string"?v:v.path;y.push(Ut(typeof v=="string"?v:v.data).then(x=>{i.mountExternalData(b,x)}))}await Promise.all(y)}for(const y of t?.executionProviders??[])if((typeof y=="string"?y:y.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof y!="string"){const b=y,x=b?.context,I=b?.gpuDevice,T=b?.deviceType,C=b?.powerPreference;x?i.currentContext=x:I?i.currentContext=await i.webnnCreateMLContext(I):i.currentContext=await i.webnnCreateMLContext({deviceType:T,powerPreference:C})}else i.currentContext=await i.webnnCreateMLContext();break}r=await i._OrtCreateSession(n,s,a),i.webgpuOnCreateSession?.(r),r===0&&Y("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(r,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);const[c,p]=fo(r),f=!!t?.enableGraphCapture,h=[],m=[],w=[],_=[],g=[];for(let y=0;y<c;y++){const[v,b,x]=Wn(r,y);v===0&&Y("Can't get an input name."),l.push(v);const I=i.UTF8ToString(v);h.push(I),w.push(b===0?{name:I,isTensor:!1}:{name:I,isTensor:!0,type:Ae(b),shape:x})}for(let y=0;y<p;y++){const[v,b,x]=Wn(r,y+c);v===0&&Y("Can't get an output name."),d.push(v);const I=i.UTF8ToString(v);m.push(I),_.push(b===0?{name:I,isTensor:!1}:{name:I,isTensor:!0,type:Ae(b),shape:x});{if(f&&t?.preferredOutputLocation===void 0){g.push("gpu-buffer");continue}const T=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[I]??"cpu",C=i.webnnIsGraphOutput;if(T==="cpu"&&C&&C(r,I)){g.push("ml-tensor-cpu-output");continue}if(T!=="cpu"&&T!=="cpu-pinned"&&T!=="gpu-buffer"&&T!=="ml-tensor")throw new Error(`Not supported preferred output location: ${T}.`);if(f&&T!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${T}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);g.push(T)}}let $=null;return g.some(y=>y==="gpu-buffer"||y==="ml-tensor"||y==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(r),o===0&&Y("Can't create IO binding."),$={handle:o,outputPreferredLocations:g,outputPreferredLocationsEncoded:g.map(y=>y==="ml-tensor-cpu-output"?"ml-tensor":y).map(y=>Zn(y))}),Pe.set(r,[r,l,d,$,f,!1]),[r,h,m,w,_]}catch(c){throw l.forEach(p=>i._OrtFree(p)),d.forEach(p=>i._OrtFree(p)),o!==0&&i._OrtReleaseBinding(o)!==0&&Y("Can't release IO binding."),r!==0&&i._OrtReleaseSession(r)!==0&&Y("Can't release session."),c}finally{i._free(n),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&Y("Can't release session options."),u.forEach(c=>i._free(c)),i.unmountExternalData?.()}},Rs=e=>{const t=ee(),n=Pe.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);const[s,i,r,a,o]=n;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&Y("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Y("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(u=>t._OrtFree(u)),r.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(s)!==0&&Y("Can't release session."),Pe.delete(e)},jn=async(e,t,n,s,i,r,a=!1)=>{if(!e){t.push(0);return}const o=ee(),u=o.PTR_SIZE,l=e[0],d=e[1],c=e[3];let p=c,f,h;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${r} when enableGraphCapture is true.`);if(c==="gpu-buffer"){const _=e[2].gpuBuffer;h=je(We(l),d);{const g=o.jsepRegisterBuffer;if(!g)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=g(s,r,_,h)}}else if(c==="ml-tensor"){const _=e[2].mlTensor;h=je(We(l),d);const g=o.webnnRegisterMLTensor;if(!g)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=g(s,_,We(l),d)}else{const _=e[2];if(Array.isArray(_)){h=u*_.length,f=o._malloc(h),n.push(f);for(let g=0;g<_.length;g++){if(typeof _[g]!="string")throw new TypeError(`tensor data at index ${g} is not a string`);o.setValue(f+g*u,Se(_[g],n),"*")}}else{const g=o.webnnIsGraphInput,$=o.webnnIsGraphOutput;if(l!=="string"&&g&&$){const y=o.UTF8ToString(i);if(g(s,y)||$(s,y)){const v=We(l);h=je(v,d),p="ml-tensor";const b=o.webnnCreateTemporaryTensor,x=o.webnnUploadTensor;if(!b||!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');const I=await b(s,v,d);x(I,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),f=I}else h=_.byteLength,f=o._malloc(h),n.push(f),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,h),f)}else h=_.byteLength,f=o._malloc(h),n.push(f),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,h),f)}}const m=o.stackSave(),w=o.stackAlloc(4*d.length);try{d.forEach((g,$)=>o.setValue(w+$*u,g,u===4?"i32":"i64"));const _=o._OrtCreateTensor(We(l),f,h,w,d.length,Zn(p));_===0&&Y(`Can't create tensor for input/output. session=${s}, index=${r}.`),t.push(_)}finally{o.stackRestore(m)}},Ps=async(e,t,n,s,i,r)=>{const a=ee(),o=a.PTR_SIZE,u=Pe.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);const l=u[0],d=u[1],c=u[2],p=u[3],f=u[4],h=u[5],m=t.length,w=s.length;let _=0,g=[];const $=[],y=[],v=[],b=a.stackSave(),x=a.stackAlloc(m*o),I=a.stackAlloc(m*o),T=a.stackAlloc(w*o),C=a.stackAlloc(w*o);try{[_,g]=qo(r);for(let A=0;A<m;A++)await jn(n[A],$,v,e,d[t[A]],t[A],f);for(let A=0;A<w;A++)await jn(i[A],y,v,e,c[s[A]],m+s[A],f);for(let A=0;A<m;A++)a.setValue(x+A*o,$[A],"*"),a.setValue(I+A*o,d[t[A]],"*");for(let A=0;A<w;A++)a.setValue(T+A*o,y[A],"*"),a.setValue(C+A*o,c[s[A]],"*");if(p&&!h){const{handle:A,outputPreferredLocations:X,outputPreferredLocationsEncoded:q}=p;if(d.length!==m)throw new Error(`input count from feeds (${m}) is expected to be always equal to model's input count (${d.length}).`);for(let O=0;O<m;O++){const F=t[O];await a._OrtBindInput(A,d[F],$[O])!==0&&Y(`Can't bind input[${O}] for session=${e}.`)}for(let O=0;O<w;O++){const F=s[O];i[O]?.[3]?a._OrtBindOutput(A,c[F],y[O],0)!==0&&Y(`Can't bind pre-allocated output[${O}] for session=${e}.`):a._OrtBindOutput(A,c[F],0,q[F])!==0&&Y(`Can't bind output[${O}] to ${X[O]} for session=${e}.`)}Pe.set(e,[l,d,c,p,f,!0])}a.jsepOnRunStart?.(l),a.webnnOnRunStart?.(l);let M;p?M=await a._OrtRunWithBinding(l,p.handle,w,T,_):M=await a._OrtRun(l,I,x,m,C,w,T,_),M!==0&&Y("failed to call OrtRun().");const N=[],W=[];for(let A=0;A<w;A++){const X=Number(a.getValue(T+A*o,"*"));if(X===y[A]){N.push(i[A]);continue}const q=a.stackSave(),O=a.stackAlloc(4*o);let F=!1,D,K=0;try{a._OrtGetTensorData(X,O,O+o,O+2*o,O+3*o)!==0&&Y(`Can't access output tensor data on index ${A}.`);const ie=o===4?"i32":"i64",L=Number(a.getValue(O,ie));K=a.getValue(O+o,"*");const z=a.getValue(O+o*2,"*"),U=Number(a.getValue(O+o*3,ie)),J=[];for(let ae=0;ae<U;ae++)J.push(Number(a.getValue(z+ae*o,ie)));a._OrtFree(z)!==0&&Y("Can't free memory for tensor dims.");const me=J.reduce((ae,re)=>ae*re,1);D=Ae(L);const we=p?.outputPreferredLocations[s[A]];if(D==="string"){if(we==="gpu-buffer"||we==="ml-tensor")throw new Error("String tensor is not supported on GPU.");const ae=[];for(let re=0;re<me;re++){const Be=a.getValue(K+re*o,"*"),Kt=a.getValue(K+(re+1)*o,"*"),Yd=re===me-1?void 0:Kt-Be;ae.push(a.UTF8ToString(Be,Yd))}N.push([D,J,ae,"cpu"])}else if(we==="gpu-buffer"&&me>0){const ae=a.jsepGetBuffer;if(!ae)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');const re=ae(K),Be=je(L,me);if(Be===void 0||!_s(D))throw new Error(`Unsupported data type: ${D}`);F=!0,N.push([D,J,{gpuBuffer:re,download:a.jsepCreateDownloader(re,Be,D),dispose:()=>{a._OrtReleaseTensor(X)!==0&&Y("Can't release tensor.")}},"gpu-buffer"])}else if(we==="ml-tensor"&&me>0){const ae=a.webnnEnsureTensor,re=a.webnnIsGraphInputOutputTypeSupported;if(!ae||!re)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(je(L,me)===void 0||!ws(D))throw new Error(`Unsupported data type: ${D}`);if(!re(e,D,!1))throw new Error(`preferredLocation "ml-tensor" for ${D} output is not supported by current WebNN Context.`);const Kt=await ae(e,K,L,J,!1);F=!0,N.push([D,J,{mlTensor:Kt,download:a.webnnCreateMLTensorDownloader(K,D),dispose:()=>{a.webnnReleaseTensorId(K),a._OrtReleaseTensor(X)}},"ml-tensor"])}else if(we==="ml-tensor-cpu-output"&&me>0){const ae=a.webnnCreateMLTensorDownloader(K,D)(),re=N.length;F=!0,W.push((async()=>{const Be=[re,await ae];return a.webnnReleaseTensorId(K),a._OrtReleaseTensor(X),Be})()),N.push([D,J,[],"cpu"])}else{const ae=Ft(D),re=new ae(me);new Uint8Array(re.buffer,re.byteOffset,re.byteLength).set(a.HEAPU8.subarray(K,K+re.byteLength)),N.push([D,J,re,"cpu"])}}finally{a.stackRestore(q),D==="string"&&K&&a._free(K),F||a._OrtReleaseTensor(X)}}p&&!f&&(a._OrtClearBoundOutputs(p.handle)!==0&&Y("Can't clear bound outputs."),Pe.set(e,[l,d,c,p,f,!1]));for(const[A,X]of await Promise.all(W))N[A][2]=X;return N}finally{a.webnnOnRunEnd?.(l),a.stackRestore(b),$.forEach(M=>a._OrtReleaseTensor(M)),y.forEach(M=>a._OrtReleaseTensor(M)),v.forEach(M=>a._free(M)),_!==0&&a._OrtReleaseRunOptions(_),g.forEach(M=>a._free(M))}},Ds=e=>{const t=ee(),n=Pe.get(e);if(!n)throw new Error("invalid session id");const s=n[0],i=t._OrtEndProfiling(s);i===0&&Y("Can't get an profile file name."),t._OrtFree(i)},Ms=e=>{const t=[];for(const n of e){const s=n[2];!Array.isArray(s)&&"buffer"in s&&t.push(s.buffer)}return t}}}),De,ge,Xe,pt,ft,Ot,Fn,Bt,qe,Le,ho,qd,Ld,Gd,Wd,jd,Fd,Kd,Hd=E({"web/lib/wasm/proxy-wrapper.ts"(){ke(),Vd(),Ze(),hs(),De=()=>!!te.wasm.proxy&&typeof document<"u",Xe=!1,pt=!1,ft=!1,Bt=new Map,qe=(e,t)=>{const n=Bt.get(e);n?n.push(t):Bt.set(e,[t])},Le=()=>{if(Xe||!pt||ft||!ge)throw new Error("worker not ready")},ho=e=>{switch(e.data.type){case"init-wasm":Xe=!1,e.data.err?(ft=!0,Fn[1](e.data.err)):(pt=!0,Fn[0]()),Ot&&(URL.revokeObjectURL(Ot),Ot=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{const t=Bt.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},qd=async()=>{if(!pt){if(Xe)throw new Error("multiple calls to 'initWasm()' detected.");if(ft)throw new Error("previous call to 'initWasm()' failed.");if(Xe=!0,De())return new Promise((e,t)=>{ge?.terminate(),Uo().then(([n,s])=>{try{ge=s,ge.onerror=r=>t(r),ge.onmessage=ho,Fn=[e,t];const i={type:"init-wasm",in:te};if(!i.in.wasm.wasmPaths&&n){const r=fs();r&&(i.in.wasm.wasmPaths=r)}ge.postMessage(i),Ot=n}catch(i){t(i)}},t)});try{await ms(te.wasm),await As(te),pt=!0}catch(e){throw ft=!0,e}finally{Xe=!1}}},Ld=async e=>{if(De())return Le(),new Promise((t,n)=>{qe("init-ep",[t,n]);const s={type:"init-ep",in:{epName:e,env:te}};ge.postMessage(s)});await Os(te,e)},Gd=async e=>De()?(Le(),new Promise((t,n)=>{qe("copy-from",[t,n]);const s={type:"copy-from",in:{buffer:e}};ge.postMessage(s,[e.buffer])})):Wt(e),Wd=async(e,t)=>{if(De()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Le(),new Promise((n,s)=>{qe("create",[n,s]);const i={type:"create",in:{model:e,options:{...t}}},r=[];e instanceof Uint8Array&&r.push(e.buffer),ge.postMessage(i,r)})}else return Bs(e,t)},jd=async e=>{if(De())return Le(),new Promise((t,n)=>{qe("release",[t,n]);const s={type:"release",in:e};ge.postMessage(s)});Rs(e)},Fd=async(e,t,n,s,i,r)=>{if(De()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Le(),new Promise((a,o)=>{qe("run",[a,o]);const u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:s,options:r}};ge.postMessage(l,Ms(u))})}else return Ps(e,t,n,s,i,r)},Kd=async e=>{if(De())return Le(),new Promise((t,n)=>{qe("end-profiling",[t,n]);const s={type:"end-profiling",in:e};ge.postMessage(s)});Ds(e)}}}),Kn,mo,Zd,pp=E({"web/lib/wasm/session-handler-inference.ts"(){ke(),Hd(),V(),ps(),Go(),Kn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},mo=e=>{switch(e[3]){case"cpu":return new ze(e[0],e[2],e[1]);case"gpu-buffer":{const t=e[0];if(!_s(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);const{gpuBuffer:n,download:s,dispose:i}=e[2];return ze.fromGpuBuffer(n,{dataType:t,dims:e[1],download:s,dispose:i})}case"ml-tensor":{const t=e[0];if(!ws(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);const{mlTensor:n,download:s,dispose:i}=e[2];return ze.fromMLTensor(n,{dataType:t,dims:e[1],download:s,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Zd=class{async fetchModelAndCopyToWasmMemory(e){return Gd(await Ut(e))}async loadModel(e,t){Ee();let n;typeof e=="string"?et?n=await Ut(e):n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Wd(n,t),Ie()}async dispose(){return jd(this.sessionId)}async run(e,t,n){Ee();const s=[],i=[];Object.entries(e).forEach(c=>{const p=c[0],f=c[1],h=this.inputNames.indexOf(p);if(h===-1)throw new Error(`invalid input '${p}'`);s.push(f),i.push(h)});const r=[],a=[];Object.entries(t).forEach(c=>{const p=c[0],f=c[1],h=this.outputNames.indexOf(p);if(h===-1)throw new Error(`invalid output '${p}'`);r.push(f),a.push(h)});const o=s.map((c,p)=>Kn(c,()=>`input "${this.inputNames[i[p]]}"`)),u=r.map((c,p)=>c?Kn(c,()=>`output "${this.outputNames[a[p]]}"`):null),l=await Fd(this.sessionId,i,o,a,u,n),d={};for(let c=0;c<l.length;c++)d[this.outputNames[a[c]]]=r[c]??mo(l[c]);return Ie(),d}startProfiling(){}endProfiling(){Kd(this.sessionId)}}}}),Qd={};$t(Qd,{OnnxruntimeWebAssemblyBackend:()=>ls,initializeFlags:()=>us,wasmBackend:()=>Xd});var us,ls,Xd,fp=E({"web/lib/backend-wasm.ts"(){ke(),Hd(),pp(),us=()=>{(typeof te.wasm.initTimeout!="number"||te.wasm.initTimeout<0)&&(te.wasm.initTimeout=0);const e=te.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),te.wasm.simd=!1),typeof te.wasm.proxy!="boolean"&&(te.wasm.proxy=!1),typeof te.wasm.trace!="boolean"&&(te.wasm.trace=!1),typeof te.wasm.numThreads!="number"||!Number.isInteger(te.wasm.numThreads)||te.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)te.wasm.numThreads=1;else{const t=typeof navigator>"u"?Hn("node:os").cpus().length:navigator.hardwareConcurrency;te.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ls=class{async init(e){us(),await qd(),await Ld(e)}async createInferenceSessionHandler(e,t){const n=new Zd;return await n.loadModel(e,t),n}},Xd=new ls}});ke();ke();ke();var hp="1.22.0",mp=Do;{const e=(fp(),jt(Qd)).wasmBackend;Ye("webgpu",e,5),Ye("webnn",e,5),Ye("cpu",e,10),Ye("wasm",e,10)}Object.defineProperty(te.versions,"web",{value:hp,enumerable:!0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */export{Po as InferenceSession,Dt as TRACE,Ee as TRACE_FUNC_BEGIN,Ie as TRACE_FUNC_END,ze as Tensor,mp as default,te as env,Ye as registerBackend};
//# sourceMappingURL=vendor-onnxruntime-web-DpEzweEQ.js.map
