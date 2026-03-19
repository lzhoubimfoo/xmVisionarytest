/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var $d=Object.defineProperty,Jv=Object.getOwnPropertyDescriptor,ex=Object.getOwnPropertyNames,tx=Object.prototype.hasOwnProperty,rx=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),J=(e,t)=>()=>(e&&(t=e(e=0)),t),Ii=(e,t)=>{for(var r in t)$d(e,r,{get:t[r],enumerable:!0})},ix=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ex(t))!tx.call(e,a)&&a!==r&&$d(e,a,{get:()=>t[a],enumerable:!(i=Jv(t,a))||i.enumerable});return e},wn=e=>ix($d({},"__esModule",{value:!0}),e),Va,gr,oi,vp,B$,R$=J(()=>{Va=new Map,gr=[],oi=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Va.get(e);if(i===void 0)Va.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=gr.indexOf(e);a!==-1&&gr.splice(a,1);for(let n=0;n<gr.length;n++)if(Va.get(gr[n]).priority<=r){gr.splice(n,0,e);return}gr.push(e)}return}throw new TypeError("not a valid backend")},vp=async e=>{let t=Va.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},B$=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?gr:r,a,n=[],s=new Set;for(let l of i){let d=await vp(l);typeof d=="string"?n.push({name:l,err:d}):(a||(a=d),a===d&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),ax=J(()=>{R$()}),N$,nx=J(()=>{N$="1.22.0"}),qo,vt,M$=J(()=>{nx(),qo="warning",vt={wasm:{},webgl:{},webgpu:{},versions:{common:N$},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);qo=e}},get logLevel(){return qo}},Object.defineProperty(vt,"logLevel",{enumerable:!0})}),Pe,sx=J(()=>{M$(),Pe=vt}),D$,P$,ox=J(()=>{D$=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=n*a,f=0,m=c,g=c*2,_=-1;s==="RGBA"?(f=0,m=c,g=c*2,_=c*3):s==="RGB"?(f=0,m=c,g=c*2):s==="RBG"&&(f=0,g=c,m=c*2);for(let y=0;y<n;y++)for(let k=0;k<a;k++){let v=(e.data[f++]-d[0])*l[0],b=(e.data[m++]-d[1])*l[1],S=(e.data[g++]-d[2])*l[2],x=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+v+","+b+","+S+","+x+")",i.fillRect(k,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},P$=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,g=0,_=1,y=2,k=3,v=0,b=f,S=f*2,x=-1;u==="RGBA"?(v=0,b=f,S=f*2,x=f*3):u==="RGB"?(v=0,b=f,S=f*2):u==="RBG"&&(v=0,S=f,b=f*2),i=r.createImageData(a,n);for(let T=0;T<n*a;g+=m,_+=m,y+=m,k+=m,T++)i.data[g]=(e.data[v++]-c[0])*d[0],i.data[_]=(e.data[b++]-c[1])*d[1],i.data[y]=(e.data[S++]-c[2])*d[2],i.data[k]=x===-1?255:(e.data[x++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),In,U$,q$,W$,V$,L$,ux=J(()=>{yd(),In=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,m=0,g=1,_=2,y=3,k=0,v=d,b=d*2,S=-1;u==="RGB"&&(f=3,m=0,g=1,_=2,y=-1),l==="RGBA"?S=d*3:l==="RBG"?(k=0,b=d,v=d*2):l==="BGR"&&(b=0,v=d,k=d*2);for(let x=0;x<d;x++,m+=f,_+=f,g+=f,y+=f)c[k++]=(e[m]+s[0])/n[0],c[v++]=(e[g]+s[1])/n[1],c[b++]=(e[_]+s[2])/n[2],S!==-1&&y!==-1&&(c[S++]=(e[y]+s[3])/n[3]);return l==="RGBA"?new gt("float32",c,[1,4,r,i]):new gt("float32",c,[1,3,r,i])},U$=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let m=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=m,u.width=g}else u.tensorFormat="RGBA",u.height=m,u.width=g;f.drawImage(e,0,0),s=f.getImageData(0,0,g,m).data}else throw new Error("Can not access image data")}else if(i){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=f,t!==void 0){let m=l();m.width=f,m.height=c;let g=d(m);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let m=e.height,g=e.width;return f.drawImage(e,0,0,g,m),s=f.getImageData(0,0,g,m).data,u.height=m,u.width=g,In(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,f)=>{let m=l(),g=d(m);if(!e||!g)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{m.width=_.width,m.height=_.height,g.drawImage(_,0,0,m.width,m.height);let y=g.getImageData(0,0,m.width,m.height);u.height=m.height,u.width=m.width,c(In(y.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return In(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},q$=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new gt({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},W$=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new gt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},V$=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new gt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},L$=(e,t,r)=>new gt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),ti,pn,Wo,G$,lx=J(()=>{ti=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),pn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Wo=!1,G$=()=>{if(!Wo){Wo=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(ti.set("int64",BigInt64Array),pn.set(BigInt64Array,"int64")),t&&(ti.set("uint64",BigUint64Array),pn.set(BigUint64Array,"uint64")),i?(ti.set("float16",r),pn.set(r,"float16")):ti.set("float16",Uint16Array)}}}),H$,F$,dx=J(()=>{yd(),H$=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},F$=(e,t)=>{switch(e.location){case"cpu":return new gt(e.type,e.data,t);case"cpu-pinned":return new gt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new gt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new gt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new gt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),gt,yd=J(()=>{ox(),ux(),lx(),dx(),gt=class{constructor(e,t,r){G$();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=ti.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=ti.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=pn.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=H$(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return U$(e,t)}static fromTexture(e,t){return q$(e,t)}static fromGpuBuffer(e,t){return W$(e,t)}static fromMLTensor(e,t){return V$(e,t)}static fromPinnedBuffer(e,t,r){return L$(e,t,r)}toDataURL(e){return D$(this,e)}toImageData(e){return P$(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return F$(this,e)}}}),Gt,j$=J(()=>{yd(),Gt=gt}),vn,Vo,Ft,kt,K$=J(()=>{M$(),vn=(e,t)=>{(typeof vt.trace>"u"?!vt.wasm.trace:!vt.trace)||console.timeStamp(`${e}::ORT::${t}`)},Vo=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),vn("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},Ft=e=>{(typeof vt.trace>"u"?!vt.wasm.trace:!vt.trace)||Vo("BEGIN",e)},kt=e=>{(typeof vt.trace>"u"?!vt.wasm.trace:!vt.trace)||Vo("END",e)}}),Z$,px=J(()=>{R$(),j$(),K$(),Z$=class Q${constructor(t){this.handler=t}async run(t,r,i){Ft();let a={},n={};if(typeof t!="object"||t===null||t instanceof Gt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Gt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let m=r[f];(m===null||m instanceof Gt)&&(d=!0,s=!1,a[f]=m)}if(d){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let u=await this.handler.run(t,a,n),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof Gt?l[d]=c:l[d]=new Gt(c.type,c.data,c.dims)}return kt(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){Ft();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(m=t.byteLength-f,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||f+m>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,f,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await B$(s),d=await u.createInferenceSessionHandler(n,l);return kt(),new Q$(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),bd,cx=J(()=>{px(),bd=Z$}),fx=J(()=>{}),hx=J(()=>{}),mx=J(()=>{}),gx=J(()=>{}),X$={};Ii(X$,{InferenceSession:()=>bd,TRACE:()=>vn,TRACE_FUNC_BEGIN:()=>Ft,TRACE_FUNC_END:()=>kt,Tensor:()=>Gt,env:()=>Pe,registerBackend:()=>oi});var Kt=J(()=>{ax(),sx(),cx(),j$(),fx(),hx(),K$(),mx(),gx()}),wd=J(()=>{}),Y$={};Ii(Y$,{default:()=>J$});var Lo,Go,J$,_x=J(()=>{aw(),mi(),vd(),Lo="ort-wasm-proxy-worker",Go=globalThis.self?.name===Lo,Go&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":xd(r.wasm).then(()=>{qd(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Wd(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=ls(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Vd(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Ld(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:u}=r;Gd(i,a,n,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},Fd([...n,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":Hd(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),J$=Go?null:e=>new Worker(e??ht,{type:"module",name:Lo})}),e0={};Ii(e0,{default:()=>t0});var Ho,Fo,t0,xp,$x=J(()=>{Fo=(Ho=import.meta.url,async function(e={}){var t,r,i=e,a=new Promise((o,p)=>{t=o,r=p}),n=typeof window=="object",s=typeof WorkerGlobalScope<"u",u=s&&self.name?.startsWith("em-pthread");i.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(i.Fb||(i.Fb=new Map)).set(o,p)},i.unmountExternalData=()=>{delete i.Fb};var l=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let d=o=>async(...p)=>{try{if(i.Gb)throw Error("Session already started");let h=i.Gb={ec:p[0],errors:[]},$=await o(...p);if(i.Gb!==h)throw Error("Session mismatch");i.Kb?.flush();let w=h.errors;if(0<w.length){let I=await Promise.all(w);if(I=I.filter(A=>A),0<I.length)throw Error(I.join(`
`))}return $}finally{i.Gb=null}};i.jsepInit=(o,p)=>{if(o==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.kb,i.$b,i.bc,i.Wb,i.Xb,i.ac]=p;let h=i.Kb;i.jsepRegisterBuffer=($,w,I,A)=>h.registerBuffer($,w,I,A),i.jsepGetBuffer=$=>h.getBuffer($),i.jsepCreateDownloader=($,w,I)=>h.createDownloader($,w,I),i.jsepOnCreateSession=$=>{h.onCreateSession($)},i.jsepOnReleaseSession=$=>{h.onReleaseSession($)},i.jsepOnRunStart=$=>h.onRunStart($),i.cc=($,w)=>{h.upload($,w)}}else if(o==="webnn"){let h=p[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor]=p.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnOnRunStart=$=>h.onRunStart($),i.webnnOnRunEnd=h.onRunEnd.bind(h),i.webnnRegisterMLContext=($,w)=>{h.registerMLContext($,w)},i.webnnOnReleaseSession=$=>{h.onReleaseSession($)},i.webnnCreateMLTensorDownloader=($,w)=>h.createMLTensorDownloader($,w),i.webnnRegisterMLTensor=($,w,I,A)=>h.registerMLTensor($,w,I,A),i.webnnCreateMLContext=$=>h.createMLContext($),i.webnnRegisterMLConstant=($,w,I,A,N,P)=>h.registerMLConstant($,w,I,A,N,i.Fb,P),i.webnnRegisterGraphInput=h.registerGraphInput.bind(h),i.webnnIsGraphInput=h.isGraphInput.bind(h),i.webnnRegisterGraphOutput=h.registerGraphOutput.bind(h),i.webnnIsGraphOutput=h.isGraphOutput.bind(h),i.webnnCreateTemporaryTensor=h.createTemporaryTensor.bind(h),i.webnnIsGraphInputOutputTypeSupported=h.isGraphInputOutputTypeSupported.bind(h)}};let c=()=>{let o=(p,h,$)=>(...w)=>{let I=je,A=h?.();w=p(...w);let N=h?.();return A!==N&&(p=N,$(A),h=$=null),je!=I?new Promise((P,H)=>{Ur={resolve:P,reject:H}}):w};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[p]=o(i[p],()=>i[p],h=>i[p]=h)})(),d!==void 0&&(i._OrtRun=d(i._OrtRun),i._OrtRunWithBinding=d(i._OrtRunWithBinding)),c=void 0};i.asyncInit=()=>{c?.()};var f,m,g=Object.assign({},i),_=(o,p)=>{throw p},y="";(n||s)&&(s?y=self.location.href:typeof document<"u"&&document.currentScript&&(y=document.currentScript.src),Ho&&(y=Ho),y=y.startsWith("blob:")?"":y.slice(0,y.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(m=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),f=async o=>{if(G(o))return new Promise((h,$)=>{var w=new XMLHttpRequest;w.open("GET",o,!0),w.responseType="arraybuffer",w.onload=()=>{w.status==200||w.status==0&&w.response?h(w.response):$(w.status)},w.onerror=$,w.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var k=console.log.bind(console),v=console.error.bind(console),b=k,S=v;Object.assign(i,g),g=null;var x,T,z,E,O,R,U,Q,L,X,M,te,K,V=i.wasmBinary,ae=!1,G=o=>o.startsWith("file://");function ne(){return x.buffer!=E.buffer&&ve(),E}function B(){return x.buffer!=E.buffer&&ve(),O}function D(){return x.buffer!=E.buffer&&ve(),R}function Y(){return x.buffer!=E.buffer&&ve(),U}function C(){return x.buffer!=E.buffer&&ve(),Q}function re(){return x.buffer!=E.buffer&&ve(),L}function Ae(){return x.buffer!=E.buffer&&ve(),X}function qe(){return x.buffer!=E.buffer&&ve(),K}if(u){let o=function(p){try{var h=p.data,$=h.Cb;if($==="load"){let w=[];self.onmessage=I=>w.push(I),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let I of w)o(I);self.onmessage=o};for(let I of h.Sb)i[I]&&!i[I].proxy||(i[I]=(...A)=>{postMessage({Cb:"callHandler",Rb:I,args:A})},I=="print"&&(b=i[I]),I=="printErr"&&(S=i[I]));x=h.lc,ve(),xe(h.mc)}else if($==="run"){ws(h.Bb),Lr(h.Bb,0,0,1,0,0),Mi(),Dr(h.Bb),ge||(Ca(),ge=!0);try{vs(h.hc,h.Ib)}catch(w){if(w!="unwind")throw w}}else h.target!=="setimmediate"&&($==="checkMailbox"?ge&&Jt():$&&(S(`worker: received unknown command ${$}`),S(h)))}catch(w){throw Oa(),w}};var xe,ge=!1;S=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Cb:"alert",text:p.join(" "),jc:or()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}function ve(){var o=x.buffer;i.HEAP8=E=new Int8Array(o),i.HEAP16=R=new Int16Array(o),i.HEAPU8=O=new Uint8Array(o),i.HEAPU16=U=new Uint16Array(o),i.HEAP32=Q=new Int32Array(o),i.HEAPU32=L=new Uint32Array(o),i.HEAPF32=X=new Float32Array(o),i.HEAPF64=K=new Float64Array(o),i.HEAP64=M=new BigInt64Array(o),i.HEAPU64=te=new BigUint64Array(o)}function Yt(){u?startWorker(i):Z.Da()}u||(x=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ve());var Tt,It=0,Et=null;function zi(){if(--It==0&&Et){var o=Et;Et=null,o()}}function tt(o){throw S(o="Aborted("+o+")"),ae=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),r(o),o}function Ci(){return{a:{L:bs,Aa:ys,b:ks,$:qi,A:Li,pa:Gi,X:Fi,Z:ji,qa:Ki,na:Zi,ga:Qi,ma:Xi,J:Yi,Y:Ji,V:ea,oa:ta,W:ra,va:Ss,E:Ts,Q:Is,O:zs,D:Os,v:As,r:Bs,P:Rs,z:Ws,R:Vs,ja:Ls,T:Gs,aa:Hs,M:Fs,F:js,ia:Dr,sa:Ks,t:Zs,Ca:Qs,w:Js,o:eo,m:ro,c:Rr,Ba:io,n:ao,j:oo,u:uo,p:lo,f:po,s:co,l:fo,e:ho,k:mo,h:go,g:_o,d:$o,da:yo,ea:bo,fa:wo,ba:ga,ca:_a,N:$a,xa:xo,ua:So,i:To,C:Io,G:Eo,ta:ko,x:zo,ra:Co,U:Oo,q:vo,y:Ao,K:Bo,S:Ro,za:No,ya:Mo,ka:va,la:xa,_:Cr,B:ka,I:Sa,ha:Ta,H:Ia,a:x,wa:zr}}}var Tr={840156:(o,p,h,$,w)=>{if(i===void 0||!i.Fb)return 1;if((o=ke(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=i.Fb.get(o)))return 2;if(p=Number(p>>>0),h=Number(h>>>0),$=Number($>>>0),p+h>o.byteLength)return 3;try{let I=o.subarray(p,p+h);switch(w){case 0:B().set(I,$>>>0);break;case 1:i.nc?i.nc($,I):i.cc($,I);break;default:return 4}return 0}catch{return 4}},840980:(o,p,h)=>{i.Pb(o,B().subarray(p>>>0,p+h>>>0))},841044:()=>i.oc(),841086:o=>{i.Ob(o)},841123:()=>{i.Wb()},841154:()=>{i.Xb()},841183:()=>{i.ac()},841208:o=>i.Vb(o),841241:o=>i.Zb(o),841273:(o,p,h)=>{i.Lb(Number(o),Number(p),Number(h),!0)},841336:(o,p,h)=>{i.Lb(Number(o),Number(p),Number(h))},841393:()=>typeof wasmOffsetConverter<"u",841450:o=>{i.kb("Abs",o,void 0)},841501:o=>{i.kb("Neg",o,void 0)},841552:o=>{i.kb("Floor",o,void 0)},841605:o=>{i.kb("Ceil",o,void 0)},841657:o=>{i.kb("Reciprocal",o,void 0)},841715:o=>{i.kb("Sqrt",o,void 0)},841767:o=>{i.kb("Exp",o,void 0)},841818:o=>{i.kb("Erf",o,void 0)},841869:o=>{i.kb("Sigmoid",o,void 0)},841924:(o,p,h)=>{i.kb("HardSigmoid",o,{alpha:p,beta:h})},842003:o=>{i.kb("Log",o,void 0)},842054:o=>{i.kb("Sin",o,void 0)},842105:o=>{i.kb("Cos",o,void 0)},842156:o=>{i.kb("Tan",o,void 0)},842207:o=>{i.kb("Asin",o,void 0)},842259:o=>{i.kb("Acos",o,void 0)},842311:o=>{i.kb("Atan",o,void 0)},842363:o=>{i.kb("Sinh",o,void 0)},842415:o=>{i.kb("Cosh",o,void 0)},842467:o=>{i.kb("Asinh",o,void 0)},842520:o=>{i.kb("Acosh",o,void 0)},842573:o=>{i.kb("Atanh",o,void 0)},842626:o=>{i.kb("Tanh",o,void 0)},842678:o=>{i.kb("Not",o,void 0)},842729:(o,p,h)=>{i.kb("Clip",o,{min:p,max:h})},842798:o=>{i.kb("Clip",o,void 0)},842850:(o,p)=>{i.kb("Elu",o,{alpha:p})},842908:o=>{i.kb("Gelu",o,void 0)},842960:o=>{i.kb("Relu",o,void 0)},843012:(o,p)=>{i.kb("LeakyRelu",o,{alpha:p})},843076:(o,p)=>{i.kb("ThresholdedRelu",o,{alpha:p})},843146:(o,p)=>{i.kb("Cast",o,{to:p})},843204:o=>{i.kb("Add",o,void 0)},843255:o=>{i.kb("Sub",o,void 0)},843306:o=>{i.kb("Mul",o,void 0)},843357:o=>{i.kb("Div",o,void 0)},843408:o=>{i.kb("Pow",o,void 0)},843459:o=>{i.kb("Equal",o,void 0)},843512:o=>{i.kb("Greater",o,void 0)},843567:o=>{i.kb("GreaterOrEqual",o,void 0)},843629:o=>{i.kb("Less",o,void 0)},843681:o=>{i.kb("LessOrEqual",o,void 0)},843740:(o,p,h,$,w)=>{i.kb("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},843915:(o,p,h,$,w)=>{i.kb("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844089:(o,p,h,$,w)=>{i.kb("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844263:(o,p,h,$,w)=>{i.kb("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844438:(o,p,h,$,w)=>{i.kb("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844612:(o,p,h,$,w)=>{i.kb("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844785:(o,p,h,$,w)=>{i.kb("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844958:(o,p,h,$,w)=>{i.kb("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},845135:(o,p,h,$,w)=>{i.kb("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},845315:(o,p,h,$,w)=>{i.kb("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},845495:o=>{i.kb("Where",o,void 0)},845548:(o,p,h)=>{i.kb("Transpose",o,{perm:p?Array.from(C().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},845672:(o,p,h,$)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:ke(h),format:$?"NHWC":"NCHW"})},845805:(o,p,h,$)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:ke(h),format:$?"NHWC":"NCHW"})},845938:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie,ft)=>{i.kb("ConvTranspose",o,{format:P?"NHWC":"NCHW",autoPad:p,dilations:[h],group:$,kernelShape:[w],pads:[I,A],strides:[N],wIsConst:()=>!!ne()[H>>>0],outputPadding:ie?Array.from(C().subarray(Number(ie)>>>0,Number(se)>>>0)):[],outputShape:fe?Array.from(C().subarray(Number(fe)>>>0,Number(Ie)>>>0)):[],activation:ke(ft)})},846371:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:p,dilations:Array.from(C().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:$,kernelShape:Array.from(C().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(C().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(C().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!ne()[P>>>0],outputPadding:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],outputShape:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[],activation:ke(Ie)})},847032:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie,ft)=>{i.kb("ConvTranspose",o,{format:P?"NHWC":"NCHW",autoPad:p,dilations:[h],group:$,kernelShape:[w],pads:[I,A],strides:[N],wIsConst:()=>!!ne()[H>>>0],outputPadding:ie?Array.from(C().subarray(Number(ie)>>>0,Number(se)>>>0)):[],outputShape:fe?Array.from(C().subarray(Number(fe)>>>0,Number(Ie)>>>0)):[],activation:ke(ft)})},847465:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:p,dilations:Array.from(C().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:$,kernelShape:Array.from(C().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(C().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(C().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!ne()[P>>>0],outputPadding:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],outputShape:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[],activation:ke(Ie)})},848126:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848217:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("AveragePool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:$,storage_order:w,dilations:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],pads:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],strides:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[]})},848696:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848787:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("AveragePool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:$,storage_order:w,dilations:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],pads:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],strides:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[]})},849266:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849353:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("MaxPool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:$,storage_order:w,dilations:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],pads:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],strides:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[]})},849828:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849915:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("MaxPool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:$,storage_order:w,dilations:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],pads:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],strides:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[]})},850390:(o,p,h,$,w)=>{i.kb("Gemm",o,{alpha:p,beta:h,transA:$,transB:w})},850494:o=>{i.kb("MatMul",o,void 0)},850548:(o,p,h,$)=>{i.kb("ArgMax",o,{keepDims:!!p,selectLastIndex:!!h,axis:$})},850656:(o,p,h,$)=>{i.kb("ArgMin",o,{keepDims:!!p,selectLastIndex:!!h,axis:$})},850764:(o,p)=>{i.kb("Softmax",o,{axis:p})},850827:(o,p)=>{i.kb("Concat",o,{axis:p})},850887:(o,p,h,$,w)=>{i.kb("Split",o,{axis:p,numOutputs:h,splitSizes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},851043:o=>{i.kb("Expand",o,void 0)},851097:(o,p)=>{i.kb("Gather",o,{axis:Number(p)})},851168:(o,p)=>{i.kb("GatherElements",o,{axis:Number(p)})},851247:(o,p)=>{i.kb("GatherND",o,{batch_dims:Number(p)})},851326:(o,p,h,$,w,I,A,N,P,H,ie)=>{i.kb("Resize",o,{antialias:p,axes:h?Array.from(C().subarray(Number(h)>>>0,Number($)>>>0)):[],coordinateTransformMode:ke(w),cubicCoeffA:I,excludeOutside:A,extrapolationValue:N,keepAspectRatioPolicy:ke(P),mode:ke(H),nearestMode:ke(ie)})},851688:(o,p,h,$,w,I,A)=>{i.kb("Slice",o,{starts:p?Array.from(C().subarray(Number(p)>>>0,Number(h)>>>0)):[],ends:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[],axes:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[]})},851952:o=>{i.kb("Tile",o,void 0)},852004:(o,p,h)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:h?"NHWC":"NCHW"})},852118:(o,p,h)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:h?"NHWC":"NCHW"})},852232:o=>{i.kb("Range",o,void 0)},852285:(o,p)=>{i.kb("Einsum",o,{equation:ke(p)})},852366:(o,p,h,$,w)=>{i.kb("Pad",o,{mode:p,value:h,pads:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},852509:(o,p,h,$,w,I)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:h,spatial:!!w,trainingMode:!!$,format:I?"NHWC":"NCHW"})},852678:(o,p,h,$,w,I)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:h,spatial:!!w,trainingMode:!!$,format:I?"NHWC":"NCHW"})},852847:(o,p,h)=>{i.kb("CumSum",o,{exclusive:Number(p),reverse:Number(h)})},852944:(o,p,h)=>{i.kb("DequantizeLinear",o,{axis:p,blockSize:h})},853034:(o,p,h,$,w)=>{i.kb("GridSample",o,{align_corners:p,mode:ke(h),padding_mode:ke($),format:w?"NHWC":"NCHW"})},853204:(o,p,h,$,w)=>{i.kb("GridSample",o,{align_corners:p,mode:ke(h),padding_mode:ke($),format:w?"NHWC":"NCHW"})},853374:(o,p)=>{i.kb("ScatterND",o,{reduction:ke(p)})},853459:(o,p,h,$,w,I,A,N,P)=>{i.kb("Attention",o,{numHeads:p,isUnidirectional:h,maskFilterValue:$,scale:w,doRotary:I,qkvHiddenSizes:A?Array.from(C().subarray(Number(N)>>>0,Number(N)+A>>>0)):[],pastPresentShareBuffer:!!P})},853731:o=>{i.kb("BiasAdd",o,void 0)},853786:o=>{i.kb("BiasSplitGelu",o,void 0)},853847:o=>{i.kb("FastGelu",o,void 0)},853903:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie,ft,Uo)=>{i.kb("Conv",o,{format:se?"NHWC":"NCHW",auto_pad:p,dilations:h?Array.from(C().subarray(Number(h)>>>0,Number($)>>>0)):[],group:w,kernel_shape:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],pads:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],strides:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],w_is_const:()=>!!ne()[Number(fe)>>>0],activation:ke(Ie),activation_params:ft?Array.from(Ae().subarray(Number(ft)>>>0,Number(Uo)>>>0)):[]})},854487:o=>{i.kb("Gelu",o,void 0)},854539:(o,p,h,$,w,I,A,N,P)=>{i.kb("GroupQueryAttention",o,{numHeads:p,kvNumHeads:h,scale:$,softcap:w,doRotary:I,rotaryInterleaved:A,smoothSoftmax:N,localWindowSize:P})},854756:(o,p,h,$)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:h,simplified:!!$})},854867:(o,p,h,$)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:h,simplified:!!$})},854978:(o,p,h,$,w,I)=>{i.kb("MatMulNBits",o,{k:p,n:h,accuracyLevel:$,bits:w,blockSize:I})},855105:(o,p,h,$,w,I)=>{i.kb("MultiHeadAttention",o,{numHeads:p,isUnidirectional:h,maskFilterValue:$,scale:w,doRotary:I})},855264:(o,p)=>{i.kb("QuickGelu",o,{alpha:p})},855328:(o,p,h,$,w)=>{i.kb("RotaryEmbedding",o,{interleaved:!!p,numHeads:h,rotaryEmbeddingDim:$,scale:w})},855467:(o,p,h)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!h})},855569:(o,p,h)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!h})},855671:(o,p,h,$)=>{i.kb("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:h,blockSize:$})},855792:o=>{i.$b(o)},855826:(o,p)=>i.bc(Number(o),Number(p),i.Gb.ec,i.Gb.errors)};function ys(o,p,h){return da(async()=>{await i.Yb(Number(o),Number(p),Number(h))})}function bs(){return typeof wasmOffsetConverter<"u"}class Ir{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var Oi=o=>{o.terminate(),o.onmessage=()=>{}},Er=[],Ai=o=>{it.length==0&&(Pi(),Di(it[0]));var p=it.pop();if(!p)return 6;zt.push(p),lt[o.Bb]=p,p.Bb=o.Bb;var h={Cb:"run",hc:o.fc,Ib:o.Ib,Bb:o.Bb};return p.postMessage(h,o.Nb),0},rt=0,_e=(o,p,...h)=>{for(var $=2*h.length,w=Fr(),I=Hr(8*$),A=I>>>3,N=0;N<h.length;N++){var P=h[N];typeof P=="bigint"?(M[A+2*N]=1n,M[A+2*N+1]=P):(M[A+2*N]=0n,qe()[A+2*N+1>>>0]=P)}return o=Aa(o,0,$,I,p),lr(w),o};function zr(o){if(u)return _e(0,1,o);if(z=o,!(0<rt)){for(var p of zt)Oi(p);for(p of it)Oi(p);it=[],zt=[],lt={},ae=!0}_(0,new Ir(o))}function Bi(o){if(u)return _e(1,0,o);Cr(o)}var Cr=o=>{if(z=o,u)throw Bi(o),"unwind";zr(o)},it=[],zt=[],Ri=[],lt={},Ni=o=>{var p=o.Bb;delete lt[p],it.push(o),zt.splice(zt.indexOf(o),1),o.Bb=0,Ba(p)};function Mi(){Ri.forEach(o=>o())}var Di=o=>new Promise(p=>{o.onmessage=w=>{var I=(w=w.data).Cb;if(w.Hb&&w.Hb!=or()){var A=lt[w.Hb];A?A.postMessage(w,w.Nb):S(`Internal error! Worker sent a message "${I}" to target pthread ${w.Hb}, but that thread no longer exists!`)}else I==="checkMailbox"?Jt():I==="spawnThread"?Ai(w):I==="cleanupThread"?Ni(lt[w.ic]):I==="loaded"?(o.loaded=!0,p(o)):I==="alert"?alert(`Thread ${w.jc}: ${w.text}`):w.target==="setimmediate"?o.postMessage(w):I==="callHandler"?i[w.Rb](...w.args):I&&S(`worker sent an unknown command ${I}`)},o.onerror=w=>{throw S(`worker sent an error! ${w.filename}:${w.lineno}: ${w.message}`),w};var h,$=[];for(h of[])i.propertyIsEnumerable(h)&&$.push(h);o.postMessage({Cb:"load",Sb:$,lc:x,mc:T})});function Pi(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.webgpu.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});it.push(o)}var ws=o=>{ve();var p=re()[o+52>>>2>>>0];o=re()[o+56>>>2>>>0],Ma(p,p-o),lr(p)},vs=(o,p)=>{rt=0,o=Da(o,p),0<rt?z=o:Gr(o)};class xs{constructor(p){this.Jb=p-24}}function ks(o,p,h){var $=new xs(o>>>=0);throw p>>>=0,h>>>=0,re()[$.Jb+16>>>2>>>0]=0,re()[$.Jb+4>>>2>>>0]=p,re()[$.Jb+8>>>2>>>0]=h,o}function Ui(o,p,h,$){return u?_e(2,1,o,p,h,$):qi(o,p,h,$)}function qi(o,p,h,$){if(o>>>=0,h>>>=0,$>>>=0,l===void 0)return 6;var w=[];return u&&w.length===0?Ui(o,p>>>=0,h,$):(o={fc:h,Bb:o,Ib:$,Nb:w},u?(o.Cb="spawnThread",postMessage(o,w),0):Ai(o))}var Wi=typeof TextDecoder<"u"?new TextDecoder:void 0,Vi=(o,p=0,h=NaN)=>{var $=(p>>>=0)+h;for(h=p;o[h]&&!(h>=$);)++h;if(16<h-p&&o.buffer&&Wi)return Wi.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,h):o.slice(p,h));for($="";p<h;){var w=o[p++];if(128&w){var I=63&o[p++];if((224&w)==192)$+=String.fromCharCode((31&w)<<6|I);else{var A=63&o[p++];65536>(w=(240&w)==224?(15&w)<<12|I<<6|A:(7&w)<<18|I<<12|A<<6|63&o[p++])?$+=String.fromCharCode(w):(w-=65536,$+=String.fromCharCode(55296|w>>10,56320|1023&w))}}else $+=String.fromCharCode(w)}return $},ke=(o,p)=>(o>>>=0)?Vi(B(),o,p):"";function Li(o,p,h){return u?_e(3,1,o,p,h):0}function Gi(o,p){if(u)return _e(4,1,o,p)}var Hi=o=>{for(var p=0,h=0;h<o.length;++h){var $=o.charCodeAt(h);127>=$?p++:2047>=$?p+=2:55296<=$&&57343>=$?(p+=4,++h):p+=3}return p},ct=(o,p,h)=>{var $=B();if(p>>>=0,0<h){var w=p;h=p+h-1;for(var I=0;I<o.length;++I){var A=o.charCodeAt(I);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&o.charCodeAt(++I)),127>=A){if(p>=h)break;$[p++>>>0]=A}else{if(2047>=A){if(p+1>=h)break;$[p++>>>0]=192|A>>6}else{if(65535>=A){if(p+2>=h)break;$[p++>>>0]=224|A>>12}else{if(p+3>=h)break;$[p++>>>0]=240|A>>18,$[p++>>>0]=128|A>>12&63}$[p++>>>0]=128|A>>6&63}$[p++>>>0]=128|63&A}}$[p>>>0]=0,o=p-w}else o=0;return o};function Fi(o,p){if(u)return _e(5,1,o,p)}function ji(o,p,h){if(u)return _e(6,1,o,p,h)}function Ki(o,p,h){return u?_e(7,1,o,p,h):0}function Zi(o,p){if(u)return _e(8,1,o,p)}function Qi(o,p,h){if(u)return _e(9,1,o,p,h)}function Xi(o,p,h,$){if(u)return _e(10,1,o,p,h,$)}function Yi(o,p,h,$){if(u)return _e(11,1,o,p,h,$)}function Ji(o,p,h,$){if(u)return _e(12,1,o,p,h,$)}function ea(o){if(u)return _e(13,1,o)}function ta(o,p){if(u)return _e(14,1,o,p)}function ra(o,p,h){if(u)return _e(15,1,o,p,h)}var ia,at,Ss=()=>tt(""),Fe=o=>{for(var p="";B()[o>>>0];)p+=ia[B()[o++>>>0]];return p},Or={},Ar={};function Ze(o,p,h={}){return function($,w,I={}){var A=w.name;if(!$)throw new at(`type "${A}" must have a positive integer typeid pointer`);if(Ar.hasOwnProperty($)){if(I.Tb)return;throw new at(`Cannot register type '${A}' twice`)}Ar[$]=w,Or.hasOwnProperty($)&&(w=Or[$],delete Or[$],w.forEach(N=>N()))}(o,p,h)}var aa=(o,p,h)=>{switch(p){case 1:return h?$=>ne()[$>>>0]:$=>B()[$>>>0];case 2:return h?$=>D()[$>>>1>>>0]:$=>Y()[$>>>1>>>0];case 4:return h?$=>C()[$>>>2>>>0]:$=>re()[$>>>2>>>0];case 8:return h?$=>M[$>>>3]:$=>te[$>>>3];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function Ts(o,p,h){h>>>=0,Ze(o>>>=0,{name:p=Fe(p>>>0),fromWireType:$=>$,toWireType:function($,w){if(typeof w!="bigint"&&typeof w!="number")throw w=w===null?"null":($=typeof w)=="object"||$==="array"||$==="function"?w.toString():""+w,new TypeError(`Cannot convert "${w}" to ${this.name}`);return typeof w=="number"&&(w=BigInt(w)),w},Db:nt,readValueFromPointer:aa(p,h,p.indexOf("u")==-1),Eb:null})}var nt=8;function Is(o,p,h,$){Ze(o>>>=0,{name:p=Fe(p>>>0),fromWireType:function(w){return!!w},toWireType:function(w,I){return I?h:$},Db:nt,readValueFromPointer:function(w){return this.fromWireType(B()[w>>>0])},Eb:null})}var Br=[],Qe=[];function Rr(o){9<(o>>>=0)&&--Qe[o+1]==0&&(Qe[o]=void 0,Br.push(o))}var Be=o=>{if(!o)throw new at("Cannot use deleted val. handle = "+o);return Qe[o]},We=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Br.pop()||Qe.length;return Qe[p]=o,Qe[p+1]=1,p}};function Nr(o){return this.fromWireType(re()[o>>>2>>>0])}var Es={name:"emscripten::val",fromWireType:o=>{var p=Be(o);return Rr(o),p},toWireType:(o,p)=>We(p),Db:nt,readValueFromPointer:Nr,Eb:null};function zs(o){return Ze(o>>>0,Es)}var Cs=(o,p)=>{switch(p){case 4:return function(h){return this.fromWireType(Ae()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(qe()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Os(o,p,h){h>>>=0,Ze(o>>>=0,{name:p=Fe(p>>>0),fromWireType:$=>$,toWireType:($,w)=>w,Db:nt,readValueFromPointer:Cs(p,h),Eb:null})}function As(o,p,h,$,w){if(o>>>=0,h>>>=0,p=Fe(p>>>0),w===-1&&(w=4294967295),w=N=>N,$===0){var I=32-8*h;w=N=>N<<I>>>I}var A=p.includes("unsigned")?function(N,P){return P>>>0}:function(N,P){return P};Ze(o,{name:p,fromWireType:w,toWireType:A,Db:nt,readValueFromPointer:aa(p,h,$!==0),Eb:null})}function Bs(o,p,h){function $(I){var A=re()[I>>>2>>>0];return I=re()[I+4>>>2>>>0],new w(ne().buffer,I,A)}var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];Ze(o>>>=0,{name:h=Fe(h>>>0),fromWireType:$,Db:nt,readValueFromPointer:$},{Tb:!0})}function Rs(o,p){Ze(o>>>=0,{name:p=Fe(p>>>0),fromWireType:function(h){for(var $,w=re()[h>>>2>>>0],I=h+4,A=I,N=0;N<=w;++N){var P=I+N;N!=w&&B()[P>>>0]!=0||(A=ke(A,P-A),$===void 0?$=A:($+="\0",$+=A),A=P+1)}return Ke(h),$},toWireType:function(h,$){$ instanceof ArrayBuffer&&($=new Uint8Array($));var w=typeof $=="string";if(!(w||$ instanceof Uint8Array||$ instanceof Uint8ClampedArray||$ instanceof Int8Array))throw new at("Cannot pass non-string to std::string");var I=w?Hi($):$.length,A=ur(4+I+1),N=A+4;if(re()[A>>>2>>>0]=I,w)ct($,N,I+1);else if(w)for(w=0;w<I;++w){var P=$.charCodeAt(w);if(255<P)throw Ke(A),new at("String has UTF-16 code units that do not fit in 8 bits");B()[N+w>>>0]=P}else for(w=0;w<I;++w)B()[N+w>>>0]=$[w];return h!==null&&h.push(Ke,A),A},Db:nt,readValueFromPointer:Nr,Eb(h){Ke(h)}})}var na=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ns=(o,p)=>{for(var h=o>>1,$=h+p/2;!(h>=$)&&Y()[h>>>0];)++h;if(32<(h<<=1)-o&&na)return na.decode(B().slice(o,h));for(h="",$=0;!($>=p/2);++$){var w=D()[o+2*$>>>1>>>0];if(w==0)break;h+=String.fromCharCode(w)}return h},Ms=(o,p,h)=>{if(h??=2147483647,2>h)return 0;var $=p;h=(h-=2)<2*o.length?h/2:o.length;for(var w=0;w<h;++w){var I=o.charCodeAt(w);D()[p>>>1>>>0]=I,p+=2}return D()[p>>>1>>>0]=0,p-$},Ds=o=>2*o.length,Ps=(o,p)=>{for(var h=0,$="";!(h>=p/4);){var w=C()[o+4*h>>>2>>>0];if(w==0)break;++h,65536<=w?(w-=65536,$+=String.fromCharCode(55296|w>>10,56320|1023&w)):$+=String.fromCharCode(w)}return $},Us=(o,p,h)=>{if(p>>>=0,h??=2147483647,4>h)return 0;var $=p;h=$+h-4;for(var w=0;w<o.length;++w){var I=o.charCodeAt(w);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&o.charCodeAt(++w)),C()[p>>>2>>>0]=I,(p+=4)+4>h)break}return C()[p>>>2>>>0]=0,p-$},qs=o=>{for(var p=0,h=0;h<o.length;++h){var $=o.charCodeAt(h);55296<=$&&57343>=$&&++h,p+=4}return p};function Ws(o,p,h){if(o>>>=0,p>>>=0,h=Fe(h>>>=0),p===2)var $=Ns,w=Ms,I=Ds,A=N=>Y()[N>>>1>>>0];else p===4&&($=Ps,w=Us,I=qs,A=N=>re()[N>>>2>>>0]);Ze(o,{name:h,fromWireType:N=>{for(var P,H=re()[N>>>2>>>0],ie=N+4,se=0;se<=H;++se){var fe=N+4+se*p;se!=H&&A(fe)!=0||(ie=$(ie,fe-ie),P===void 0?P=ie:(P+="\0",P+=ie),ie=fe+p)}return Ke(N),P},toWireType:(N,P)=>{if(typeof P!="string")throw new at(`Cannot pass non-string to C++ string type ${h}`);var H=I(P),ie=ur(4+H+p);return re()[ie>>>2>>>0]=H/p,w(P,ie+4,H+p),N!==null&&N.push(Ke,ie),ie},Db:nt,readValueFromPointer:Nr,Eb(N){Ke(N)}})}function Vs(o,p){Ze(o>>>=0,{Ub:!0,name:p=Fe(p>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function Ls(o){Lr(o>>>0,!s,1,!n,131072,!1),Mi()}var Mr=o=>{if(!ae)try{if(o(),!(0<rt))try{u?Gr(z):Cr(z)}catch(p){p instanceof Ir||p=="unwind"||_(0,p)}}catch(p){p instanceof Ir||p=="unwind"||_(0,p)}};function Dr(o){o>>>=0,typeof Atomics.kc=="function"&&(Atomics.kc(C(),o>>>2,o).value.then(Jt),o+=128,Atomics.store(C(),o>>>2,1))}var Jt=()=>{var o=or();o&&(Dr(o),Mr(Na))};function Gs(o,p){(o>>>=0)==p>>>0?setTimeout(Jt):u?postMessage({Hb:o,Cb:"checkMailbox"}):(o=lt[o])&&o.postMessage({Cb:"checkMailbox"})}var Pr=[];function Hs(o,p,h,$,w){for(p>>>=0,$/=2,Pr.length=$,h=w>>>0>>>3,w=0;w<$;w++)Pr[w]=M[h+2*w]?M[h+2*w+1]:qe()[h+2*w+1>>>0];return(p?Tr[p]:Po[o])(...Pr)}var Fs=()=>{rt=0};function js(o){o>>>=0,u?postMessage({Cb:"cleanupThread",ic:o}):Ni(lt[o])}function Ks(o){}var er=(o,p)=>{var h=Ar[o];if(h===void 0)throw o=za(o),h=Fe(o),Ke(o),new at(`${p} has unknown type ${h}`);return h},sa=(o,p,h)=>{var $=[];return o=o.toWireType($,h),$.length&&(re()[p>>>2>>>0]=We($)),o};function Zs(o,p,h){return p>>>=0,h>>>=0,o=Be(o>>>0),p=er(p,"emval::as"),sa(p,h,o)}function Qs(o,p){return p>>>=0,o=Be(o>>>0),(p=er(p,"emval::as")).toWireType(null,o)}var tr=o=>{try{o()}catch(p){tt(p)}},st=0,je=null,oa=0,rr=[],ua={},la={},Xs=0,Ur=null,Ys=[];function da(o){return function(p){if(!ae){if(st===0){var h=!1,$=!1;p((w=0)=>{if(!ae&&(oa=w,h=!0,$)){st=2,tr(()=>qa(je)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),w=!1;try{var I=function(){var P=C()[je+8>>>2>>>0];return P=Z[la[P]],--rt,P()}()}catch(P){I=P,w=!0}var A=!1;if(!je){var N=Ur;N&&(Ur=null,(w?N.reject:N.resolve)(I),A=!0)}if(w&&!A)throw I}}),$=!0,h||(st=1,je=function(){var w=ur(65548),I=w+12;re()[w>>>2>>>0]=I,re()[w+4>>>2>>>0]=I+65536,I=rr[0];var A=ua[I];return A===void 0&&(A=Xs++,ua[I]=A,la[A]=I),I=A,C()[w+8>>>2>>>0]=I,w}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),tr(()=>Pa(je)))}else st===2?(st=0,tr(Wa),Ke(je),je=null,Ys.forEach(Mr)):tt(`invalid state: ${st}`);return oa}}(p=>{o().then(p)})}function Js(o){return o>>>=0,da(async()=>{var p=await Be(o);return We(p)})}var ir=[];function eo(o,p,h,$){return h>>>=0,$>>>=0,(o=ir[o>>>0])(null,p=Be(p>>>0),h,$)}var to={},ar=o=>{var p=to[o];return p===void 0?Fe(o):p};function ro(o,p,h,$,w){return h>>>=0,$>>>=0,w>>>=0,(o=ir[o>>>0])(p=Be(p>>>0),p[h=ar(h)],$,w)}function io(o,p){return p>>>=0,(o=Be(o>>>0))==Be(p)}var pa=()=>typeof globalThis=="object"?globalThis:Function("return this")();function ao(o){return(o>>>=0)==0?We(pa()):(o=ar(o),We(pa()[o]))}var no=o=>{var p=ir.length;return ir.push(o),p},so=(o,p)=>{for(var h=Array(o),$=0;$<o;++$)h[$]=er(re()[p+4*$>>>2>>>0],"parameter "+$);return h},ca=(o,p)=>Object.defineProperty(p,"name",{value:o});function oo(o,p,h){var $=(p=so(o,p>>>0)).shift();o--;var w=`return function (obj, func, destructorsRef, args) {
`,I=0,A=[];h===0&&A.push("obj");for(var N=["retType"],P=[$],H=0;H<o;++H)A.push("arg"+H),N.push("argType"+H),P.push(p[H]),w+=`  var arg${H} = argType${H}.readValueFromPointer(args${I?"+"+I:""});
`,I+=p[H].Db;return w+=`  var rv = ${h===1?"new func":"func.call"}(${A.join(", ")});
`,$.Ub||(N.push("emval_returnValue"),P.push(sa),w+=`  return emval_returnValue(retType, destructorsRef, rv);
`),N.push(w+`};
`),o=function(ie){var se=Function;if(!(se instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof se} which is not a function`);var fe=ca(se.name||"unknownFunctionName",function(){});return fe.prototype=se.prototype,fe=new fe,(ie=se.apply(fe,ie))instanceof Object?ie:fe}(N)(...P),h=`methodCaller<(${p.map(ie=>ie.name).join(", ")}) => ${$.name}>`,no(ca(h,o))}function uo(o){return o=ar(o>>>0),We(i[o])}function lo(o,p){return p>>>=0,o=Be(o>>>0),p=Be(p),We(o[p])}function po(o){9<(o>>>=0)&&(Qe[o+1]+=1)}function co(){return We([])}function fo(o){o=Be(o>>>0);for(var p=Array(o.length),h=0;h<o.length;h++)p[h]=o[h];return We(p)}function ho(o){return We(ar(o>>>0))}function mo(){return We({})}function go(o){for(var p=Be(o>>>=0);p.length;){var h=p.pop();p.pop()(h)}Rr(o)}function _o(o,p,h){p>>>=0,h>>>=0,o=Be(o>>>0),p=Be(p),h=Be(h),o[p]=h}function $o(o,p){return p>>>=0,o=(o=er(o>>>0,"_emval_take_value")).readValueFromPointer(p),We(o)}function yo(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),C()[p>>>2>>>0]=o.getUTCSeconds(),C()[p+4>>>2>>>0]=o.getUTCMinutes(),C()[p+8>>>2>>>0]=o.getUTCHours(),C()[p+12>>>2>>>0]=o.getUTCDate(),C()[p+16>>>2>>>0]=o.getUTCMonth(),C()[p+20>>>2>>>0]=o.getUTCFullYear()-1900,C()[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,C()[p+28>>>2>>>0]=o}var fa=o=>o%4==0&&(o%100!=0||o%400==0),ha=[0,31,60,91,121,152,182,213,244,274,305,335],ma=[0,31,59,90,120,151,181,212,243,273,304,334];function bo(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),C()[p>>>2>>>0]=o.getSeconds(),C()[p+4>>>2>>>0]=o.getMinutes(),C()[p+8>>>2>>>0]=o.getHours(),C()[p+12>>>2>>>0]=o.getDate(),C()[p+16>>>2>>>0]=o.getMonth(),C()[p+20>>>2>>>0]=o.getFullYear()-1900,C()[p+24>>>2>>>0]=o.getDay();var h=(fa(o.getFullYear())?ha:ma)[o.getMonth()]+o.getDate()-1|0;C()[p+28>>>2>>>0]=h,C()[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),h=new Date(o.getFullYear(),6,1).getTimezoneOffset();var $=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(h!=$&&o.getTimezoneOffset()==Math.min($,h)),C()[p+32>>>2>>>0]=o}function wo(o){o>>>=0;var p=new Date(C()[o+20>>>2>>>0]+1900,C()[o+16>>>2>>>0],C()[o+12>>>2>>>0],C()[o+8>>>2>>>0],C()[o+4>>>2>>>0],C()[o>>>2>>>0],0),h=C()[o+32>>>2>>>0],$=p.getTimezoneOffset(),w=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(I,w);return 0>h?C()[o+32>>>2>>>0]=+(w!=I&&A==$):0<h!=(A==$)&&(w=Math.max(I,w),p.setTime(p.getTime()+6e4*((0<h?A:w)-$))),C()[o+24>>>2>>>0]=p.getDay(),h=(fa(p.getFullYear())?ha:ma)[p.getMonth()]+p.getDate()-1|0,C()[o+28>>>2>>>0]=h,C()[o>>>2>>>0]=p.getSeconds(),C()[o+4>>>2>>>0]=p.getMinutes(),C()[o+8>>>2>>>0]=p.getHours(),C()[o+12>>>2>>>0]=p.getDate(),C()[o+16>>>2>>>0]=p.getMonth(),C()[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function ga(o,p,h,$,w,I,A){return u?_e(16,1,o,p,h,$,w,I,A):-52}function _a(o,p,h,$,w,I){if(u)return _e(17,1,o,p,h,$,w,I)}var Ct={},vo=()=>performance.timeOrigin+performance.now();function $a(o,p){if(u)return _e(18,1,o,p);if(Ct[o]&&(clearTimeout(Ct[o].id),delete Ct[o]),!p)return 0;var h=setTimeout(()=>{delete Ct[o],Mr(()=>Ra(o,performance.timeOrigin+performance.now()))},p);return Ct[o]={id:h,rc:p},0}function xo(o,p,h,$){o>>>=0,p>>>=0,h>>>=0,$>>>=0;var w=new Date().getFullYear(),I=new Date(w,0,1).getTimezoneOffset();w=new Date(w,6,1).getTimezoneOffset();var A=Math.max(I,w);re()[o>>>2>>>0]=60*A,C()[p>>>2>>>0]=+(I!=w),o=(p=N=>{var P=Math.abs(N);return`UTC${0<=N?"-":"+"}${String(Math.floor(P/60)).padStart(2,"0")}${String(P%60).padStart(2,"0")}`})(I),p=p(w),w<I?(ct(o,h,17),ct(p,$,17)):(ct(o,$,17),ct(p,h,17))}var ko=()=>Date.now();function So(o,p,h){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),M[h>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var qr=[],ya=(o,p)=>{qr.length=0;for(var h;h=B()[o++>>>0];){var $=h!=105;p+=($&=h!=112)&&p%8?4:0,qr.push(h==112?re()[p>>>2>>>0]:h==106?M[p>>>3]:h==105?C()[p>>>2>>>0]:qe()[p>>>3>>>0]),p+=$?8:4}return qr};function To(o,p,h){return o>>>=0,p=ya(p>>>0,h>>>0),Tr[o](...p)}function Io(o,p,h){return o>>>=0,p=ya(p>>>0,h>>>0),Tr[o](...p)}var Eo=()=>{};function zo(o,p){return S(ke(o>>>0,p>>>0))}var Co=()=>{throw rt+=1,"unwind"};function Oo(){return 4294901760}var Ao=()=>navigator.hardwareConcurrency;function Bo(){return tt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Ro(o){o>>>=0;var p=B().length;if(o<=p||4294901760<o)return!1;for(var h=1;4>=h;h*=2){var $=p*(1+.2/h);$=Math.min($,o+100663296);e:{$=(Math.min(4294901760,65536*Math.ceil(Math.max(o,$)/65536))-x.buffer.byteLength+65535)/65536|0;try{x.grow($),ve();var w=1;break e}catch{}w=void 0}if(w)return!0}return!1}var nr=()=>(tt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ot={},ba=o=>{o.forEach(p=>{nr()})};function No(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),ba(o),Ot.Mb=nr(),Ot.dc=o,Ot.Mb}function Mo(o,p,h){if(o>>>=0,p>>>=0,Ot.Mb==o)var $=Ot.dc;else($=Error().stack.toString().split(`
`))[0]=="Error"&&$.shift(),ba($);for(var w=3;$[w]&&nr()!=o;)++w;for(o=0;o<h&&$[o+w];++o)C()[p+4*o>>>2>>>0]=nr();return o}var Wr,Vr={},wa=()=>{if(!Wr){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Vr)Vr[o]===void 0?delete p[o]:p[o]=Vr[o];var h=[];for(o in p)h.push(`${o}=${p[o]}`);Wr=h}return Wr};function va(o,p){if(u)return _e(19,1,o,p);o>>>=0,p>>>=0;var h=0;return wa().forEach(($,w)=>{var I=p+h;for(w=re()[o+4*w>>>2>>>0]=I,I=0;I<$.length;++I)ne()[w++>>>0]=$.charCodeAt(I);ne()[w>>>0]=0,h+=$.length+1}),0}function xa(o,p){if(u)return _e(20,1,o,p);o>>>=0,p>>>=0;var h=wa();re()[o>>>2>>>0]=h.length;var $=0;return h.forEach(w=>$+=w.length+1),re()[p>>>2>>>0]=$,0}function ka(o){return u?_e(21,1,o):52}function Sa(o,p,h,$){return u?_e(22,1,o,p,h,$):52}function Ta(o,p,h,$){return u?_e(23,1,o,p,h,$):70}var Do=[null,[],[]];function Ia(o,p,h,$){if(u)return _e(24,1,o,p,h,$);p>>>=0,h>>>=0,$>>>=0;for(var w=0,I=0;I<h;I++){var A=re()[p>>>2>>>0],N=re()[p+4>>>2>>>0];p+=8;for(var P=0;P<N;P++){var H=B()[A+P>>>0],ie=Do[o];H===0||H===10?((o===1?b:S)(Vi(ie)),ie.length=0):ie.push(H)}w+=N}return re()[$>>>2>>>0]=w,0}u||function(){for(var o=i.numThreads-1;o--;)Pi();Er.unshift(()=>{It++,function(p){u?p():Promise.all(it.map(Di)).then(p)}(()=>zi())})}();for(var Ea=Array(256),sr=0;256>sr;++sr)Ea[sr]=String.fromCharCode(sr);ia=Ea,at=i.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},i.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},Qe.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>Qe.length/2-5-Br.length;var Z,Po=[zr,Bi,Ui,Li,Gi,Fi,ji,Ki,Zi,Qi,Xi,Yi,Ji,ea,ta,ra,ga,_a,$a,va,xa,ka,Sa,Ta,Ia];(async function(){function o($,w){return Z=$.exports,Z=function(){var I=Z,A={};for(let[N,P]of Object.entries(I))A[N]=typeof P=="function"?(...H)=>{rr.push(N);try{return P(...H)}finally{ae||(rr.pop(),je&&st===1&&rr.length===0&&(st=0,rt+=1,tr(Ua),typeof Fibers<"u"&&Fibers.sc()))}}:P;return A}(),Z=function(){var I=Z,A=P=>H=>P(H)>>>0,N=P=>()=>P()>>>0;return(I=Object.assign({},I)).Ea=A(I.Ea),I.gb=N(I.gb),I.ib=A(I.ib),I.ub=A(I.ub),I.vb=N(I.vb),I.__cxa_get_exception_ptr=A(I.__cxa_get_exception_ptr),I}(),Ri.push(Z.jb),T=w,zi(),Z}It++;var p=Ci();if(i.instantiateWasm)return new Promise($=>{i.instantiateWasm(p,(w,I)=>{o(w,I),$(w.exports)})});if(u)return new Promise($=>{xe=w=>{var I=new WebAssembly.Instance(w,Ci());$(o(I,w))}});Tt??=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",y):y+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href,import.meta.url).href;try{var h=await async function($){var w=Tt;if(!V&&typeof WebAssembly.instantiateStreaming=="function"&&!G(w))try{var I=fetch(w,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,$)}catch(A){S(`wasm streaming compile failed: ${A}`),S("falling back to ArrayBuffer instantiation")}return async function(A,N){try{var P=await async function(H){if(!V)try{var ie=await f(H);return new Uint8Array(ie)}catch{}if(H==Tt&&V)H=new Uint8Array(V);else{if(!m)throw"both async and sync fetching of the wasm failed";H=m(H)}return H}(A);return await WebAssembly.instantiate(P,N)}catch(H){S(`failed to asynchronously prepare wasm: ${H}`),tt(H)}}(w,$)}(p);return o(h.instance,h.module)}catch($){return r($),Promise.reject($)}})();var za=o=>(za=Z.Ea)(o),Ca=()=>(Ca=Z.Fa)();i._OrtInit=(o,p)=>(i._OrtInit=Z.Ga)(o,p),i._OrtGetLastError=(o,p)=>(i._OrtGetLastError=Z.Ha)(o,p),i._OrtCreateSessionOptions=(o,p,h,$,w,I,A,N,P,H)=>(i._OrtCreateSessionOptions=Z.Ia)(o,p,h,$,w,I,A,N,P,H),i._OrtAppendExecutionProvider=(o,p,h,$,w)=>(i._OrtAppendExecutionProvider=Z.Ja)(o,p,h,$,w),i._OrtAddFreeDimensionOverride=(o,p,h)=>(i._OrtAddFreeDimensionOverride=Z.Ka)(o,p,h),i._OrtAddSessionConfigEntry=(o,p,h)=>(i._OrtAddSessionConfigEntry=Z.La)(o,p,h),i._OrtReleaseSessionOptions=o=>(i._OrtReleaseSessionOptions=Z.Ma)(o),i._OrtCreateSession=(o,p,h)=>(i._OrtCreateSession=Z.Na)(o,p,h),i._OrtReleaseSession=o=>(i._OrtReleaseSession=Z.Oa)(o),i._OrtGetInputOutputCount=(o,p,h)=>(i._OrtGetInputOutputCount=Z.Pa)(o,p,h),i._OrtGetInputOutputMetadata=(o,p,h,$)=>(i._OrtGetInputOutputMetadata=Z.Qa)(o,p,h,$),i._OrtFree=o=>(i._OrtFree=Z.Ra)(o),i._OrtCreateTensor=(o,p,h,$,w,I)=>(i._OrtCreateTensor=Z.Sa)(o,p,h,$,w,I),i._OrtGetTensorData=(o,p,h,$,w)=>(i._OrtGetTensorData=Z.Ta)(o,p,h,$,w),i._OrtReleaseTensor=o=>(i._OrtReleaseTensor=Z.Ua)(o),i._OrtCreateRunOptions=(o,p,h,$)=>(i._OrtCreateRunOptions=Z.Va)(o,p,h,$),i._OrtAddRunConfigEntry=(o,p,h)=>(i._OrtAddRunConfigEntry=Z.Wa)(o,p,h),i._OrtReleaseRunOptions=o=>(i._OrtReleaseRunOptions=Z.Xa)(o),i._OrtCreateBinding=o=>(i._OrtCreateBinding=Z.Ya)(o),i._OrtBindInput=(o,p,h)=>(i._OrtBindInput=Z.Za)(o,p,h),i._OrtBindOutput=(o,p,h,$)=>(i._OrtBindOutput=Z._a)(o,p,h,$),i._OrtClearBoundOutputs=o=>(i._OrtClearBoundOutputs=Z.$a)(o),i._OrtReleaseBinding=o=>(i._OrtReleaseBinding=Z.ab)(o),i._OrtRunWithBinding=(o,p,h,$,w)=>(i._OrtRunWithBinding=Z.bb)(o,p,h,$,w),i._OrtRun=(o,p,h,$,w,I,A,N)=>(i._OrtRun=Z.cb)(o,p,h,$,w,I,A,N),i._OrtEndProfiling=o=>(i._OrtEndProfiling=Z.db)(o),i._JsepOutput=(o,p,h)=>(i._JsepOutput=Z.eb)(o,p,h),i._JsepGetNodeName=o=>(i._JsepGetNodeName=Z.fb)(o);var or=()=>(or=Z.gb)(),Ke=i._free=o=>(Ke=i._free=Z.hb)(o),ur=i._malloc=o=>(ur=i._malloc=Z.ib)(o),Lr=(o,p,h,$,w,I)=>(Lr=Z.lb)(o,p,h,$,w,I),Oa=()=>(Oa=Z.mb)(),Aa=(o,p,h,$,w)=>(Aa=Z.nb)(o,p,h,$,w),Ba=o=>(Ba=Z.ob)(o),Gr=o=>(Gr=Z.pb)(o),Ra=(o,p)=>(Ra=Z.qb)(o,p),Na=()=>(Na=Z.rb)(),Ma=(o,p)=>(Ma=Z.sb)(o,p),lr=o=>(lr=Z.tb)(o),Hr=o=>(Hr=Z.ub)(o),Fr=()=>(Fr=Z.vb)(),Da=i.dynCall_ii=(o,p)=>(Da=i.dynCall_ii=Z.wb)(o,p),Pa=o=>(Pa=Z.xb)(o),Ua=()=>(Ua=Z.yb)(),qa=o=>(qa=Z.zb)(o),Wa=()=>(Wa=Z.Ab)();return i.stackSave=()=>Fr(),i.stackRestore=o=>lr(o),i.stackAlloc=o=>Hr(o),i.setValue=function(o,p,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":ne()[o>>>0]=p;break;case"i16":D()[o>>>1>>>0]=p;break;case"i32":C()[o>>>2>>>0]=p;break;case"i64":M[o>>>3]=BigInt(p);break;case"float":Ae()[o>>>2>>>0]=p;break;case"double":qe()[o>>>3>>>0]=p;break;case"*":re()[o>>>2>>>0]=p;break;default:tt(`invalid type for setValue: ${h}`)}},i.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return ne()[o>>>0];case"i16":return D()[o>>>1>>>0];case"i32":return C()[o>>>2>>>0];case"i64":return M[o>>>3];case"float":return Ae()[o>>>2>>>0];case"double":return qe()[o>>>3>>>0];case"*":return re()[o>>>2>>>0];default:tt(`invalid type for getValue: ${p}`)}},i.UTF8ToString=ke,i.stringToUTF8=ct,i.lengthBytesUTF8=Hi,function o(){if(0<It)Et=o;else if(u)t(i),Yt();else{for(;0<Er.length;)Er.shift()(i);0<It?Et=o:(i.calledRun=!0,ae||(Yt(),t(i)))}}(),i.PTR_SIZE=4,a}),t0=Fo,xp=globalThis.self?.name?.startsWith("em-pthread"),xp&&Fo()}),jo,ql,kp,ht,r0,En,Sp,Tp,Ko,Ip,Zo,i0,Qo,a0,vd=J(()=>{wd(),jo=typeof location>"u"?void 0:location.origin,ql=import.meta.url>"file:"&&import.meta.url<"file;",kp=()=>{{if(ql){let e=URL;return new URL(new e("ort.webgpu.bundle.min.mjs",import.meta.url).href,jo).href}return import.meta.url}},ht=kp(),r0=()=>{if(ht&&!ht.startsWith("blob:"))return ht.substring(0,ht.lastIndexOf("/")+1)},En=(e,t)=>{try{let r=t??ht;return(r?new URL(e,r):new URL(e)).origin===jo}catch{return!1}},Sp=(e,t)=>{let r=t??ht;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Tp=(e,t)=>`${t??"./"}${e}`,Ko=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ip=async e=>(await import(e)).default,Zo=(_x(),wn(Y$)).default,i0=async()=>{if(!ht)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(En(ht))return[void 0,Zo()];let e=await Ko(ht);return[e,Zo(e)]},Qo=($x(),wn(e0)).default,a0=async(e,t,r)=>{if(!e&&!t&&Qo&&ht&&En(ht))return[void 0,Qo];{let i="ort-wasm-simd-threaded.jsep.mjs",a=e??Sp(i,t),n=r&&a&&!En(a,t),s=n?await Ko(a):a??Tp(i,t);return[n?s:void 0,await Ip(s)]}}}),Xo,zn,La,Yo,Ep,zp,Cp,xd,Me,mi=J(()=>{vd(),zn=!1,La=!1,Yo=!1,Ep=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},zp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Cp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},xd=async e=>{if(zn)return Promise.resolve();if(La)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Yo)throw new Error("previous call to 'initializeWebAssembly()' failed.");La=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Cp())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!zp())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Ep();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,u=s?.href??s,l=a?.wasm,d=l?.href??l,c=e.wasmBinary,[f,m]=await a0(u,n,r>1),g=!1,_=[];if(t>0&&_.push(new Promise(y=>{setTimeout(()=>{g=!0,y()},t)})),_.push(new Promise((y,k)=>{let v={numThreads:r};if(c)v.wasmBinary=c;else if(d||n)v.locateFile=b=>d??n+b;else if(u&&u.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,u).href;else if(f){let b=r0();b&&(v.locateFile=S=>b+S)}m(v).then(b=>{La=!1,zn=!0,Xo=b,y(),f&&URL.revokeObjectURL(f)},b=>{La=!1,Yo=!0,k(b)})})),await Promise.race(_),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Me=()=>{if(zn&&Xo)return Xo;throw new Error("WebAssembly is not initialized yet.")}}),Vt,is,Re,kd=J(()=>{mi(),Vt=(e,t)=>{let r=Me(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},is=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")is(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},Re=e=>{let t=Me(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),n0,yx=J(()=>{mi(),kd(),n0=e=>{let t=Me(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Vt(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&Re("Can't create run options."),e?.extra!==void 0&&is(e.extra,"",new WeakSet,(s,u)=>{let l=Vt(s,i),d=Vt(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&Re(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),Op,Ap,Bp,Ga,Rp,s0,bx=J(()=>{mi(),kd(),Op=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ap=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Bp=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ga=(e,t,r,i)=>{let a=Vt(t,i),n=Vt(r,i);Me()._OrtAddSessionConfigEntry(e,a,n)!==0&&Re(`Can't set a session config entry: ${t} - ${r}.`)},Rp=async(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name,n=[];switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let c=i?.deviceType;c&&Ga(e,"deviceType",c,r)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Ga(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=Vt(a,r),u=n.length,l=0,d=0;if(u>0){l=Me()._malloc(u*Me().PTR_SIZE),r.push(l),d=Me()._malloc(u*Me().PTR_SIZE),r.push(d);for(let c=0;c<u;c++)Me().setValue(l+c*Me().PTR_SIZE,n[c][0],"*"),Me().setValue(d+c*Me().PTR_SIZE,n[c][1],"*")}await Me()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&Re(`Can't append execution provider: ${a}.`)}},s0=async e=>{let t=Me(),r=0,i=[],a=e||{};Bp(a);try{let n=Op(a.graphOptimizationLevel??"all"),s=Ap(a.executionMode??"sequential"),u=typeof a.logId=="string"?Vt(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof a.optimizedModelFilePath=="string"?Vt(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,d,c),r===0&&Re("Can't create session options."),a.executionProviders&&await Rp(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Ga(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[f,m]of Object.entries(a.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let g=Vt(f,i);t._OrtAddFreeDimensionOverride(r,g,m)!==0&&Re(`Can't set a free dimension override: ${f} - ${m}.`)}return a.extra!==void 0&&is(a.extra,"",new WeakSet,(f,m)=>{Ga(r,f,m,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Re("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),ri,cr,ii,_s,as,Sd,Td,Wl,he=J(()=>{ri=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},cr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},ii=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},_s=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},as=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Sd=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Td=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Wl=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Id,o0=J(()=>{wd(),Id=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Np,Mp,Dp,Pp,Ed,Up,Se,hr=J(()=>{he(),Np=["V","I","W","E","F"],Mp=(e,t)=>{console.log(`[${Np[e]},${new Date().toISOString()}]${t}`)},Ed=(e,t)=>{Dp=e,Pp=t},Up=(e,t)=>{let r=as(e),i=as(Dp);r>=i&&Mp(r,typeof t=="function"?t():t)},Se=(...e)=>{Pp&&Up(...e)}}),qp,xi,q,ns,u0,l0,d0,$e=J(()=>{qp=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},xi=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=qp.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],d=a-u<0?1:t[a-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-u]=Math.max(l,d);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},q=class Jn{static size(t){return Jn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Jn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Jn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},ns=class cn{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)cn.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return cn.computeShapeHelper(t,r,l,i,a,n,s,u),l}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return cn.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(cn.adjustPadAndReturnShape(r[d+2],a[d],n[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l){let d=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),n[u]=c-n[s],Math.floor((t+c-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-d)/r+1)}},u0=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!xi.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},l0=-34028234663852886e22,d0=34028234663852886e22}),zd,p0=J(()=>{he(),zd=(e,t)=>new(_s(t))(e)}),Jo,Vl,eu,Wp,tu,Vp,ru,iu,au,Lp,c0,wx=J(()=>{he(),hr(),Jo=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Vl=(e,t)=>{if(t==="int32")return e;let r=Jo.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(_s(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},eu=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Wp=1,tu=()=>Wp++,Vp=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ru=(e,t)=>{let r=Jo.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},iu=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ru(this.dataType,this.tensorShape)}destroy(){Se("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=eu(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},au=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(n=Vp.get(t),!n||!a.opSupportLimits().input.dataTypes.includes(n))throw new Error(`WebNN backend does not support data type: ${t}`);Se("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==ru(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Vl(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Se("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?eu(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Lp=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=tu();return this.tensorTrackersById.set(e,new au(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){Se("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Se("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=tu(),s=new iu({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new au(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){Se("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}Se("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new iu({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},c0=(...e)=>new Lp(...e)}),Ha,Gp,f0,vx=J(()=>{he(),mi(),p0(),wx(),hr(),Ha=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Gp=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},f0=class{constructor(e){this.tensorManager=c0(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Ed(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Se("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Se("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Se("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Gp(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Se("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=Ha.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){Se("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Ha.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!Me().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Se("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return zd(r,t)}}registerMLTensor(e,t,r,i){let a=Ha.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return Se("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=n.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let f=Vl(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),a.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return Se("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=this.mlContextBySessionId.get(e),a=Ha.get(ri(t));return typeof a>"u"?!1:r?!!i?.opSupportLimits().input.dataTypes.includes(a):!!i?.opSupportLimits().output.dataTypes.includes(a)}flush(){}}}),Cd=J(()=>{}),nu,Cn,On,Hp,Fp,su,Ll,jp,h0,xx=J(()=>{hr(),Cd(),nu=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Cn=[],On=e=>Math.ceil(Number(e)/16)*16,Hp=e=>{for(let t=0;t<Cn.length;t++){let r=Cn[t];if(e<=r)return r}return Math.ceil(e/16)*16},Fp=1,su=()=>Fp++,Ll=async(e,t,r,i)=>{let a=On(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},jp=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of nu)Cn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=On(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),u.destroy(),Se("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=On(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return Se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=su();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Se("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Hp(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:su(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Se("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Se("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ll(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=nu.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Se("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},h0=(...e)=>new jp(...e)}),Kp,Ce,Ge=J(()=>{Kp=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ce=e=>new Kp(e)}),ki,An,Xe,ot,pe,Ve,Gl,wi,vr,le,Fa,F,oe,m0,Od,Zp,g0,be=J(()=>{he(),$e(),ki=64,An=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Xe=(e,t=1)=>{let r=An(e,t);return typeof r=="string"?r:r[0]},ot=(e,t=1)=>{let r=An(e,t);return typeof r=="string"?r:r[1]},pe=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:q.computeStrides(r)})}),t},Ve=e=>e%4===0?4:e%2===0?2:1,Gl=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,wi=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,vr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,le=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Fa=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=An(t,a),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],m={indices:l,value:c,storage:f,tensor:t},g=B=>typeof B=="string"?B:`${B}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",k=`${y}${e}_shape`,v=`${y}${e}_strides`,b="";for(let B=0;B<s-1;B++)b+=`
    let dim${B} = current / ${le(v,B,s)};
    let rest${B} = current % ${le(v,B,s)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;b+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${b}
    return indices;
  }`,x=B=>(_.offsetToIndices=!0,s<2?B:`o2i_${e}(${B})`),T=[];if(s>=2)for(let B=s-1;B>=0;B--)T.push(`${le(v,B,s)} * (indices[${B}])`);let z=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${T.join("+")};
  }`,E=B=>(_.indicesToOffset=!0,s<2?B:`i2o_${e}(${B})`),O=(...B)=>s===0?"0u":`${m.indices}(${B.map(g).join(",")})`,R=(B,D)=>s<2?`${B}`:`${le(B,D,s)}`,U=(B,D,Y)=>s<2?`${B}=${Y};`:`${le(B,D,s)}=${Y};`,Q={},L=(B,D)=>{_.broadcastedIndicesToOffset=!0;let Y=`${D.name}broadcastedIndicesTo${e}Offset`;if(Y in Q)return`${Y}(${B})`;let C=[];for(let re=s-1;re>=0;re--){let Ae=D.indicesGet("outputIndices",re+D.rank-s);C.push(`${R(v,re)} * (${Ae} % ${R(k,re)})`)}return Q[Y]=`fn ${Y}(outputIndices: ${D.type.indices}) -> u32 {
             return ${C.length>0?C.join("+"):"0u"};
           }`,`${Y}(${B})`},X=(B,D)=>(()=>{if(m.storage===m.value)return`${e}[${B}]=${D};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${B}]=vec2<u32>(u32(${D}), select(0u, 0xFFFFFFFFu, ${D} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${B}]=vec2<u32>(u32(${D}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${D}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),M=B=>(()=>{if(m.storage===m.value)return`${e}[${B}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${B}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${B}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${B}] & 0xFFu), bool(${e}[${B}] & 0xFF00u), bool(${e}[${B}] & 0xFF0000u), bool(${e}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),te=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${c} {
    return ${M(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let B=u.map(Y=>`d${Y}: u32`).join(", "),D=u.map(Y=>`d${Y}`).join(", ");return`
  fn get_${e}(${B}) -> ${c} {
    return get_${e}ByIndices(${O(D)});
  }`})(),V=(...B)=>{if(B.length!==s)throw new Error(`indices length must be ${s}`);let D=B.map(g).join(",");return s===0?M("0u"):s===1?M(D[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${D})`)},ae=B=>s<2?M(B):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${B})`),G=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${c}) {
    ${X(`i2o_${e}(indices)`,"value")}
  }`,ne=s<2?"":(()=>{let B=u.map(Y=>`d${Y}: u32`).join(", "),D=u.map(Y=>`d${Y}`).join(", ");return`
  fn set_${e}(${B}, value: ${c}) {
    set_${e}ByIndices(${O(D)}, value);
  }`})();return{impl:()=>{let B=[],D=!1;return _.offsetToIndices&&(B.push(S),D=!0),_.indicesToOffset&&(B.push(z),D=!0),_.broadcastedIndicesToOffset&&(Object.values(Q).forEach(Y=>B.push(Y)),D=!0),_.set&&(B.push(ne),D=!0),_.setByIndices&&(B.push(G),D=!0),_.get&&(B.push(K),D=!0),_.getByIndices&&(B.push(te),D=!0),!n&&D&&B.unshift(`const ${k} = ${m.indices}(${r.join(",")});`,`const ${v} = ${m.indices}(${q.computeStrides(r).join(",")});`),B.join(`
`)},type:m,offsetToIndices:x,indicesToOffset:E,broadcastedIndicesToOffset:L,indices:O,indicesGet:R,indicesSet:U,set:(...B)=>{if(B.length!==s+1)throw new Error(`indices length must be ${s}`);let D=B[s];if(typeof D!="string")throw new Error("value must be string");let Y=B.slice(0,s).map(g).join(",");return s===0?X("0u",D):s===1?X(Y[0],D):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Y}, ${D})`)},setByOffset:X,setByIndices:(B,D)=>s<2?X(B,D):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${B}, ${D});`),get:V,getByOffset:M,getByIndices:ae,usage:i,name:e,strides:v,shape:k,rank:s}},F=(e,t,r,i=1)=>Fa(e,t,r,"input",i),oe=(e,t,r,i=1)=>Fa(e,t,r,"output",i),m0=(e,t,r)=>Fa(e,t,r,"atomicOutput",1),Od=(e,t,r,i=1)=>Fa(e,t,r,"internal",i),Zp=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ki){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},g0=(e,t)=>new Zp(e,t)}),Qp,ou,Xp,Yp,Jp,ec,$t,_0,$0,kr=J(()=>{he(),$e(),Ge(),be(),Qp=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ou=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Xp=(e,t)=>q.sortBasedOnPerm(e,ou(e.length,t)),Yp=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},Jp=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},ec=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},$t=(e,t)=>{let r=e.dataType,i=e.dims.length,a=ou(i,t),n=Xp(e.dims,a),s=e.dims,u=n,l=i<2||ec(a,e.dims),d;if(l)return d=_=>{let y=F("input",r,s,4),k=oe("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,k)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=q.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=Jp(e.dims,a),m=q.areEqual(f,[2,3,1]),g=q.areEqual(f,[3,1,2]);if(c.length===2||m||g){s=m?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let _=16;return d=y=>{let k=F("a",r,s.length),v=oe("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(k,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${y.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=q.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:y},...pe(s,u)]}},getShaderSource:d}}return d=_=>{let y=F("a",r,s.length),k=oe("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,k)}

  ${Yp(a,i,y,k)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=q.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...pe(s,u)]}},getShaderSource:d}},_0=(e,t)=>{Qp(e.inputs,t.perm),e.compute($t(e.inputs[0],t.perm))},$0=e=>Ce({perm:e.perm})}),tc,rc,ic,ac,nc,sc,oc,uc,lc,dc,At,y0,b0,w0,v0,x0,k0,S0,T0,I0,E0,kx=J(()=>{he(),$e(),be(),Ad(),kr(),tc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},rc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},ic={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ac={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},nc=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},sc=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},oc=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},uc=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},lc=(e,t)=>{let r=[];if(!uc(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},dc=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=q.size(n),d=q.size(s),c=F("_A",r[0].dataType,u),f=oe("output",a,n),m=64;l===1&&(m=256);let g=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,_=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${ic[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${tc[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${rc[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${ac[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},At=(e,t,r,i)=>{let a=e.inputs.length===1?r:Hl(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((g,_)=>_));let s=q.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=lc(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute($t(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=nc(u.length,l.dims.length));let[c,f]=sc(l.dims,u),m=c;a.keepDims&&(m=oc(c,s)),e.compute(dc(t,a.cacheKey,[l],i,e.inputs[0].dataType,m,f),{inputs:[l]})},y0=(e,t)=>{At(e,"ReduceMeanShared",t,"mean")},b0=(e,t)=>{At(e,"ReduceL1Shared",t,"l1")},w0=(e,t)=>{At(e,"ReduceL2Shared",t,"l2")},v0=(e,t)=>{At(e,"ReduceLogSumExpShared",t,"logSumExp")},x0=(e,t)=>{At(e,"ReduceMaxShared",t,"max")},k0=(e,t)=>{At(e,"ReduceMinShared",t,"min")},S0=(e,t)=>{At(e,"ReduceProdShared",t,"prod")},T0=(e,t)=>{At(e,"ReduceSumShared",t,"sum")},I0=(e,t)=>{At(e,"ReduceSumSquareShared",t,"sumSquare")},E0=(e,t)=>{At(e,"ReduceLogSumShared",t,"logSum")}}),Bt,pc,ss,Hl,Rt,cc,fc,hc,mc,gc,_c,$c,yc,bc,wc,Nt,z0,C0,O0,A0,B0,R0,N0,M0,D0,P0,Ad=J(()=>{he(),$e(),Ge(),be(),kx(),Bt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},pc=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ss=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,f=q.normalizeAxes(a,c),m=!u&&f.length===0;d.forEach((y,k)=>{m||f.indexOf(k)>=0?s&&l.push(1):l.push(y)});let g=l.length,_=q.size(l);return{name:e,shaderCache:t,getShaderSource:y=>{let k=[],v=F("_A",r[0].dataType,c),b=oe("output",n,g),S=i(v,b,f),x=S[2];for(let T=0,z=0;T<c;T++)m||f.indexOf(T)>=0?(s&&z++,x=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${S[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${v.indicesSet("input_indices",T,`j${T}`)}
                  ${x}
                }`):(k.push(`${v.indicesSet("input_indices",T,b.indicesGet("output_indices",z))};`),z++);return`

        ${y.registerUniform("output_size","u32").declareVariables(v,b)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${x}
          ${S[3]}
          ${S.length===4?b.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...pe(d,l)]})}},Hl=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),Ce({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Rt=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Hl(a,r);e.compute(ss(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?pc:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},cc=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},fc=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},hc=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},mc=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},gc=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},_c=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},$c=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},yc=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},bc=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},wc=(e,t)=>{Bt(e.inputs),Rt(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Nt=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},z0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_c(e,t):y0(e,t)},C0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fc(e,t):b0(e,t)},O0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hc(e,t):w0(e,t)},A0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mc(e,t):v0(e,t)},B0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gc(e,t):x0(e,t)},R0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$c(e,t):k0(e,t)},N0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yc(e,t):S0(e,t)},M0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bc(e,t):T0(e,t)},D0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wc(e,t):I0(e,t)},P0=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cc(e,t):E0(e,t)}}),uu,U0,q0,Fl,Sx=J(()=>{he(),Ge(),Ad(),uu=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},U0=(e,t)=>{uu(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ss("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},q0=(e,t)=>{uu(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ss("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Fl=e=>Ce(e)}),vc,Bn,xc,kc,Sc,xn,Tc,W0,Bd=J(()=>{he(),$e(),Cd(),be(),vc=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=a.dims[0]/3,m=f,g=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let _=d;if(f!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==f+m+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(m!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let k=_+y,v=-1,b=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:k,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:g,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Bn=(e,t,r)=>t&&e?`
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
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,xc=(e,t,r,i,a,n,s,u)=>{let l=Ve(s?1:n),d=64,c=n/l;c<d&&(d=32);let f=Math.ceil(n/l/d),m=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:f}],g=Xe(e.dataType,l),_=ot(1,l),y=["type"];s&&y.push("type"),u&&y.push("type");let k=v=>{let b=oe("x",e.dataType,e.dims,l),S=[b],x=s?F("seq_lens",s.dataType,s.dims):void 0;x&&S.push(x);let T=u?F("total_sequence_length_input",u.dataType,u.dims):void 0;T&&S.push(T);let z=ot(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(E).declareVariables(...S)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Bn(x,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${g};${l}`,inputDependencies:y},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:m})}},kc=(e,t,r,i,a,n,s,u,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],f=e>1&&i,m=n.kvNumHeads?n.kvNumHeads:n.numHeads,g=f?[n.batchSize,m,d,n.headSize]:void 0,_=n.nReps?n.nReps:1,y=n.scale===0?1/Math.sqrt(n.headSize):n.scale,k=Ve(n.headSize),v=n.headSize/k,b=12,S={x:Math.ceil(d/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},x=[{type:12,data:n.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:_}],T=f&&i&&q.size(i.dims)>0,z=["type","type"];T&&z.push("type"),a&&z.push("type"),u&&z.push("type"),l&&z.push("type");let E=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&E.push({dims:g,dataType:t.dataType,gpuDataType:0});let O=R=>{let U=F("q",t.dataType,t.dims,k),Q=F("key",r.dataType,r.dims,k),L=[U,Q];if(T){let G=F("past_key",i.dataType,i.dims,k);L.push(G)}a&&L.push(F("attention_bias",a.dataType,a.dims));let X=u?F("seq_lens",u.dataType,u.dims):void 0;X&&L.push(X);let M=l?F("total_sequence_length_input",l.dataType,l.dims):void 0;M&&L.push(M);let te=oe("output",t.dataType,c),K=[te];f&&K.push(oe("present_key",t.dataType,g,k));let V=ot(1,k),ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${U.type.storage}, ${b*b}>;
  ${R.registerUniforms(ae).declareVariables(...L,...K)}
  ${R.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Bn(X,M,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${V}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${V}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${te.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${a!==void 0};${i!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:E,dispatchGroup:S,programUniforms:x}),getShaderSource:O}},Sc=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,d=a.nReps?a.nReps:1,c=a.vHiddenSize*d,f=e>1&&i,m=a.kvNumHeads?a.kvNumHeads:a.numHeads,g=f?[a.batchSize,m,l,a.headSize]:void 0,_=[a.batchSize,a.sequenceLength,c],y=12,k={x:Math.ceil(a.vHeadSize/y),y:Math.ceil(a.sequenceLength/y),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:d}],b=f&&i&&q.size(i.dims)>0,S=["type","type"];b&&S.push("type"),s&&S.push("type"),u&&S.push("type");let x=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&x.push({dims:g,dataType:t.dataType,gpuDataType:0});let T=z=>{let E=F("probs",t.dataType,t.dims),O=F("v",r.dataType,r.dims),R=[E,O];b&&R.push(F("past_value",i.dataType,i.dims));let U=s?F("seq_lens",s.dataType,s.dims):void 0;s&&R.push(U);let Q=u?F("total_sequence_length_input",u.dataType,u.dims):void 0;u&&R.push(Q);let L=[oe("output",t.dataType,_)];f&&L.push(oe("present_value",t.dataType,g));let X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${E.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${E.type.value}, ${y*y}>;
  ${z.registerUniforms(X).declareVariables(...R,...L)}
  ${z.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Bn(U,Q,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:x,dispatchGroup:k,programUniforms:v}),getShaderSource:T}},xn=(e,t,r,i,a,n,s,u,l,d,c=void 0,f=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),g=m>1?d.pastSequenceLength:0,_=g+d.kvSequenceLength,y=l&&q.size(l.dims)>0?l:void 0,k=[t,r];m>1&&s&&q.size(s.dims)>0&&k.push(s),y&&k.push(y),c&&k.push(c),f&&k.push(f);let v=e.compute(kc(m,t,r,s,y,d,g,c,f),{inputs:k,outputs:m>1?[-1,1]:[-1]})[0];e.compute(xc(v,d.batchSize,d.numHeads,g,d.sequenceLength,_,c,f),{inputs:c&&f?[v,c,f]:[v],outputs:[]});let b=[v,i];m>1&&u&&q.size(u.dims)>0&&b.push(u),c&&b.push(c),f&&b.push(f),e.compute(Sc(m,v,i,u,d,g,c,f),{inputs:b,outputs:m>1?[0,2]:[0]})},Tc=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let m=oe("output_q",l[0].dataType,r),g=oe("output_k",l[0].dataType,r),_=oe("output_v",l[0].dataType,r),y=F("input",l[0].dataType,l[0].dims),k=F("weight",l[1].dataType,l[1].dims),v=F("bias",l[2].dataType,l[2].dims),b=y.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${f.registerUniforms(S).declareVariables(y,k,v,m,g,_)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},W0=(e,t)=>{let r=vc(e.inputs,t),[i,a,n]=Tc(e,r);return xn(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Ic,Ec,zc,V0,Tx=J(()=>{Kt(),he(),$e(),Ge(),be(),Ic=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Ec=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?Ve(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=q.size(n)/s,d=i,c=d?n.length:n,f=F("x",e[0].dataType,e[0].dims,s),m=F("scale",e[1].dataType,e[1].dims,u),g=F("bias",e[2].dataType,e[2].dims,u),_=F("inputMean",e[3].dataType,e[3].dims,u),y=F("inputVar",e[4].dataType,e[4].dims,u),k=oe("y",e[0].dataType,c,s),v=()=>{let S="";if(i)S=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")S=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let x=1;x<m.rank;x++)S+=`cIndices[${x}] = outputIndices[${x}];`;S+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return S},b=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(f,m,g,_,y,k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...pe(n)]:[{type:12,data:l}]})}},zc=e=>Ce(e),V0=(e,t)=>{let{inputs:r,outputCount:i}=e,a=zc({...t,outputCount:i});if(Pe.webgpu.validateInputContent&&Ic(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ec(r,a))}}),Cc,Oc,L0,Ix=J(()=>{$e(),be(),Cc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Oc=e=>{let t=e[0].dims,r=e[0].dims[2],i=q.size(t)/4,a=e[0].dataType,n=F("input",a,t,4),s=F("bias",a,[r],4),u=F("residual",a,t,4),l=oe("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},L0=e=>{Cc(e.inputs),e.compute(Oc(e.inputs))}}),Ac,Ee,G0,H0,F0,j0,K0,Z0,Q0,X0,Y0,Bc,J0,ey,ty,ry,fn,iy,es,ay,ny,sy,oy,uy,ly,dy,py,cy,fy,hy,my,gy,_y,$y,yy,lu,by,jl,Kl,wy,vy,xy,Rc,Nc,ky,Rd=J(()=>{he(),$e(),Ge(),be(),Ac=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=F("inputData",r,[u],4),c=oe("outputData",i,[u],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},Ee=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>Ac(d,q.size(e.dims),e.dataType,n,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(q.size(d[0].dims)/64/4)},programUniforms:l})}},G0=e=>{e.compute(Ee(e.inputs[0],"Abs","abs"))},H0=e=>{e.compute(Ee(e.inputs[0],"Acos","acos"))},F0=e=>{e.compute(Ee(e.inputs[0],"Acosh","acosh"))},j0=e=>{e.compute(Ee(e.inputs[0],"Asin","asin"))},K0=e=>{e.compute(Ee(e.inputs[0],"Asinh","asinh"))},Z0=e=>{e.compute(Ee(e.inputs[0],"Atan","atan"))},Q0=e=>{e.compute(Ee(e.inputs[0],"Atanh","atanh"))},X0=e=>Ce(e),Y0=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ee(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Bc=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ce({min:t,max:r})},J0=(e,t)=>{let r=t||Bc(e.inputs),i=ot(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},ey=e=>{e.compute(Ee(e.inputs[0],"Ceil","ceil"))},ty=e=>{e.compute(Ee(e.inputs[0],"Cos","cos"))},ry=e=>{e.compute(Ee(e.inputs[0],"Cosh","cosh"))},fn=e=>Ce(e),iy=(e,t)=>{let r=ot(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},es=(e="f32")=>`
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
}`,ay=e=>{let t=ot(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,es(t)))},ny=e=>{e.compute(Ee(e.inputs[0],"Exp","exp"))},sy=e=>{e.compute(Ee(e.inputs[0],"Floor","floor"))},oy=e=>{let t=ot(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,es(t)))},uy=(e,t)=>{let r=ot(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},ly=e=>{e.compute(Ee(e.inputs[0],"Not",t=>`!${t}`))},dy=e=>{e.compute(Ee(e.inputs[0],"Neg",t=>`-${t}`))},py=e=>{e.compute(Ee(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},cy=e=>{let t=ot(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},fy=e=>{e.compute(Ee(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},hy=e=>Ce(e),my=(e,t)=>{let r=ot(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},gy=e=>{e.compute(Ee(e.inputs[0],"Sin","sin"))},_y=e=>{e.compute(Ee(e.inputs[0],"Sinh","sinh"))},$y=e=>{e.compute(Ee(e.inputs[0],"Sqrt","sqrt"))},yy=e=>{e.compute(Ee(e.inputs[0],"Tan","tan"))},lu=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,by=e=>{e.compute(Ee(e.inputs[0],"Tanh",lu))},jl=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${lu("v")};
}
`,Kl=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,wy=e=>{let t=ot(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"FastGelu",Kl,jl(t),void 0,e.inputs[0].dataType))},vy=(e,t)=>{let r=ot(e.inputs[0].dataType);return e.compute(Ee(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},xy=e=>{e.compute(Ee(e.inputs[0],"Log","log"))},Rc=(e,t)=>`
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
`,Nc=e=>`quick_gelu_impl(${e})`,ky=(e,t)=>{let r=ot(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"QuickGelu",Nc,Rc(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Mc,Dc,Sy,Ex=J(()=>{$e(),be(),Rd(),Mc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Dc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=F("input",e[0].dataType,e[0].dims,4),i=F("bias",e[0].dataType,[e[0].dims[2]],4),a=oe("output",e[0].dataType,t,4),n=q.size(t)/4,s=Xe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${es(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Sy=e=>{Mc(e.inputs),e.compute(Dc(e.inputs))}}),Pc,Uc,Mt,Ty,Iy,Ey,zy,Cy,Oy,Ay,By,Ry,Ny,zx=J(()=>{he(),$e(),be(),Pc=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let m,g;typeof u=="string"?m=g=(b,S)=>`${u}((${b}),(${S}))`:typeof u=="function"?m=g=u:(m=u.scalar,g=u.vector);let _=oe("outputData",c,i.length,4),y=F("aData",l,t.length,4),k=F("bData",d,r.length,4),v;if(a)if(n){let b=q.size(t)===1,S=q.size(r)===1,x=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;b||S?v=_.setByOffset("global_idx",g(b?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),S?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",g(s||x?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",g(y.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(S,x,T="")=>{let z=`aData[indexA${x}][componentA${x}]`,E=`bData[indexB${x}][componentB${x}]`;return`
            let outputIndices${x} = ${_.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offsetA${x} = ${y.broadcastedIndicesToOffset(`outputIndices${x}`,_)};
            let offsetB${x} = ${k.broadcastedIndicesToOffset(`outputIndices${x}`,_)};
            let indexA${x} = offsetA${x} / 4u;
            let indexB${x} = offsetB${x} / 4u;
            let componentA${x} = offsetA${x} % 4u;
            let componentB${x} = offsetB${x} % 4u;
            ${S}[${x}] = ${T}(${m(z,E)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,k,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Uc=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(y=>Number(y)??1),l=i.dims.map(y=>Number(y)??1),d=!q.areEqual(u,l),c=u,f=q.size(u),m=!1,g=!1,_=[d];if(d){let y=xi.calcShape(u,l,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),f=q.size(c);let k=q.size(u)===1,v=q.size(l)===1,b=u.length>0&&u[u.length-1]%4===0,S=l.length>0&&l[l.length-1]%4===0;_.push(k),_.push(v),_.push(b),_.push(S);let x=1;for(let T=1;T<c.length;T++){let z=u[u.length-T],E=l[l.length-T];if(z===E)x*=z;else break}x%4===0?(g=!0,m=!0):(k||v||b||S)&&(m=!0)}else m=!0;return _.push(m),{name:e,shaderCache:{hint:t+_.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Pc(y,u,l,c,m,d,g,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(c)/4)},...pe(u,l,c)]})}},Mt=(e,t,r,i,a,n)=>{e.compute(Uc(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},Ty=e=>{Mt(e,"Add",(t,r)=>`${t}+${r}`)},Iy=e=>{Mt(e,"Div",(t,r)=>`${t}/${r}`)},Ey=e=>{Mt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},zy=e=>{Mt(e,"Mul",(t,r)=>`${t}*${r}`)},Cy=e=>{let t=F("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Mt(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},Oy=e=>{Mt(e,"Sub",(t,r)=>`${t}-${r}`)},Ay=e=>{Mt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},By=e=>{Mt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Ry=e=>{Mt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Ny=e=>{Mt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),qc,Wc,Vc,Lc,My,Dy,Cx=J(()=>{he(),$e(),Ge(),be(),qc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Wc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Vc=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},Lc=(e,t,r,i)=>{let a=q.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:a}];for(let y=0;y<e.length;++y)u+=e[y].dims[t],n[y]=u,d.push(e[y].dims.length),s[y]=F(`input${y}`,i,d[y]),l.push("rank"),c.push({type:12,data:n[y]});for(let y=0;y<e.length;++y)c.push(...pe(e[y].dims));c.push(...pe(r));let f=oe("output",i,r.length),m=f.indicesGet("indices",t),g=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),_=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)y.registerUniform(`sizeInConcatAxis${k}`,"u32");return y.declareVariables(...s,f)})()}

  ${Wc(n.length,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${g});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Vc(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:_}},My=(e,t)=>{let r=e.inputs,i=r[0].dims,a=q.normalizeAxis(t.axis,i.length);qc(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>q.size(u.dims)>0);e.compute(Lc(s,a,n,r[0].dataType),{inputs:s})},Dy=e=>Ce({axis:e.axis})}),li,di,pi,Nd,gi=J(()=>{he(),$e(),li=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},di=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},pi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Nd=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[l0,d0];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Je,Py,Md=J(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Py=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Uy,Ox=J(()=>{Uy=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),yn,Dd,Pd=J(()=>{he(),$e(),be(),gi(),yn=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${le(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,le(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},Dd=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],f=Ve(d),m=Ve(c),g=Ve(l),_=q.size(r)/f/g,y=e.length>2,k=i?i.slice(0,-2):r.slice(0,-2),v=[q.size(k),l,d],b=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];di(t,b),b.push(...pe(k,s,u)),y&&b.push(...pe(e[2].dims)),b.push(...pe(v));let S=x=>{let T=Od("batch_dims",e[0].dataType,k.length),z=F("a",e[0].dataType,s.length,m),E=F("b",e[1].dataType,u.length,f),O=oe("output",e[0].dataType,v.length,f),R=Xe(O.type.tensor),U=li(t,O.type.value,R),Q=[z,E],L="";if(y){let te=a?f:1;Q.push(F("bias",e[2].dataType,e[2].dims.length,te)),L=`${a?`value += bias[col / ${te}];`:`value += ${O.type.value}(bias[row + i]);`}`}let X=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];pi(t,X);let M=()=>{let te=`var a_data: ${z.type.value};`;for(let K=0;K<m;K++)te+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${f}];`;for(let K=0;K<g;K++){te+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${m}];`;for(let V=0;V<m;V++)te+=`
            values[${K}] = fma(${E.type.value}(a_data${m===1?"":`[${V}]`}), b_data${V}, values[${K}]);
`}return te};return`
  ${x.registerUniforms(X).registerInternalVariables(T).declareVariables(...Q,O)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${yn("a_indices",z,z.rank-2,T.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${yn("b_indices",E,E.rank-2,T.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${O.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${M()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${L}
      ${U}
      let cur_indices = ${O.type.indices}(batch, row + i, col);
      let offset = ${O.indicesToOffset("cur_indices")};
      ${O.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${m};${g};${a}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:S}}}),Gc,Hc,Zl,du,Fc,Ql,jc,os,Ud=J(()=>{he(),$e(),be(),gi(),Pd(),Md(),Gc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Hc=(e,t)=>e?`
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
        }`,Zl=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=a?l:n,f=a?n:l,m=c/t[0],g=n/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${c/m}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Gc(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Hc(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},du=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Fc=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ql=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=a?d:n,m=a?n:d;if(!(m%t[1]===0&&f%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let g=m/t[1],_=f/t[0],y=n/t[1],k=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${du(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
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
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${du(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Fc(a)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},jc=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,d=Xe(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Je(e,d)} {
      var value = ${Je(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${yn("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Je(e,d)} {
      var value = ${Je(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${yn("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Je(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Je(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},os=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),f=q.size(c),m=s[s.length-2],g=s[s.length-1],_=u[u.length-1],y=g%4===0&&_%4===0,k=m<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil(_/v[0]/k[0]),Math.ceil(m/v[1]/k[1]),Math.ceil(f/v[2]/k[2])],S=y?4:1,x=[...l,m,g/S],T=x.length,z=[...d,g,_/S],E=z.length,O=[f,m,_/S],R=[{type:6,data:m},{type:6,data:_},{type:6,data:g}];di(t,R),R.push(...pe(c,x,z));let U=["rank","rank"],Q=e.length>2;Q&&(R.push(...pe(e[2].dims)),U.push("rank")),R.push(...pe(O));let L=X=>{let M=c.length,te=Od("batchDims",e[0].dataType,M,1),K=Xe(e[0].dataType),V=F("a",e[0].dataType,T,S),ae=F("b",e[1].dataType,E,S),G=oe("result",e[0].dataType,O.length,S),ne=[V,ae];if(Q){let re=a?S:1;ne.push(F("bias",e[2].dataType,e[2].dims.length,re))}let B=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];pi(t,B);let D=Xe(G.type.tensor),Y=li(t,G.type.value,D),C=jc(S,Q,Y,[te,V,ae,G],a);return`
  ${X.registerUniforms(B).registerInternalVariables(te).declareVariables(...ne,G)}
  ${C}
  ${y?Zl(k,v,K,te):Ql(k,v,K,te)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${y};${a}`,inputDependencies:U},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:R}),getShaderSource:L}}}),Kc,qy,Ax=J(()=>{he(),hr(),be(),gi(),Md(),Ox(),Ud(),Kc=(e,t,r,i,a=!1,n,s=4,u=4,l=4,d="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
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
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Je(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${y}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,S=e?t&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Je(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Je(s,d)}(0.0);`,x=e?i&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${Je(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${Je(u,d)}(0.0);`,T=Je(l,d),z=Je(e?s:u,d),E=Je(e?u:s,d),O=li(n,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?S:x}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?x:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Py(a)}
      ${O}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},qy=(e,t,r,i,a,n,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],m=d?r[2]:r[3],g=d?r[1]:r[2],_=d?r[3]:r[1],y=d&&(c%4===0||c%3===0)&&_%4===0,k=d?_:m*g,v=d?m*g:_,b=[8,8,1],S=i<=8?[4,1,1]:[4,4,1],x=[Math.ceil(k/b[0]/S[0]),Math.ceil(v/b[1]/S[1]),Math.ceil(f/b[2]/S[2])];Se("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${x}`);let T=y?d&&c%4!==0?3:4:1,z=b[1]*S[1],E=b[0]*S[0],O=Math.max(b[0]*T,b[1]),R=i%z===0,U=a%E===0,Q=n%O===0,L=y?[T,4,4]:[1,1,1],X=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];di(t,X),X.push(...pe(e[0].dims,e[1].dims));let M=["rank","rank"];s&&(X.push(...pe(e[2].dims)),M.push("rank")),X.push(...pe(r));let te=K=>{let V=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];pi(t,V);let ae=y?4:1,G=Xe(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${G}>`:G}) {
        result[flatIndex] = ${y?`vec4<${G}>`:G}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${G}>`:G}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,B=F("x",e[0].dataType,e[0].dims.length,T===3?1:T),D=F("w",e[1].dataType,e[1].dims.length,ae),Y=[B,D],C=oe("result",e[0].dataType,r.length,ae);if(s){let re=F("bias",e[2].dataType,e[2].dims.length,ae);Y.push(re),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${G}>`:G} {
          return bias[coords.${d?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Uy("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(V).declareVariables(...Y,C)}
        ${ne}
        ${Kc(d,R,U,Q,s,t,L[0],L[1],L[2],G)}
        ${y?Zl(S,b,G,void 0,!d,O):Ql(S,b,G,void 0,!d,O,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${y};${R};${U};${Q};${z};${E};${O}`,inputDependencies:M},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:X}),getShaderSource:te}}}),Zc,pu,ja,Qc,cu,Xc,Wy,Vy,Bx=J(()=>{he(),hr(),$e(),be(),gi(),Md(),Zc=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},pu=e=>typeof e=="number"?[e,e,e]:e,ja=(e,t)=>t<=1?e:e+(e-1)*(t-1),Qc=(e,t,r,i=1)=>{let a=ja(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},cu=(e,t,r,i,a)=>{a==null&&(a=Qc(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Xc=(e,t,r,i,a,n,s,u,l,d)=>{let c,f,m,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=cu([t,r,i,1],[u,l,d],1,[a,n,s],e);f=_[0],m=_[1],g=_[2]}else if(Array.isArray(e)){if(!e.every((y,k,v)=>y===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=cu([t,r,i,1],[u,l,d],1,[a,n,s],e[0]);f=_[0],m=_[1],g=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/a),m=Math.ceil(r/n),g=Math.ceil(i/s);let _=(f-1)*a+u-t,y=(m-1)*n+l-r,k=(g-1)*s+d-i,v=Math.floor(_/2),b=_-v,S=Math.floor(y/2),x=y-S,T=Math.floor(k/2),z=k-T;c={top:S,bottom:x,left:T,right:z,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:m,outWidth:g}},Wy=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,d,c,f;if(s==="channelsLast")[u,l,d,c,f]=e;else if(s==="channelsFirst")[u,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,g,_,y]=t,[k,v,b]=pu(r),[S,x,T]=pu(i),z=ja(g,S),E=ja(_,x),O=ja(y,T),{padInfo:R,outDepth:U,outHeight:Q,outWidth:L}=Xc(a,l,d,c,k,v,b,z,E,O),X=n?m*f:m,M=[0,0,0,0,0];return s==="channelsFirst"?M=[u,X,U,Q,L]:s==="channelsLast"&&(M=[u,U,Q,L,X]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:U,outHeight:Q,outWidth:L,outChannels:X,padInfo:R,strideDepth:k,strideHeight:v,strideWidth:b,filterDepth:g,filterHeight:_,filterWidth:y,effectiveFilterDepth:z,effectiveFilterHeight:E,effectiveFilterWidth:O,dilationDepth:S,dilationHeight:x,dilationWidth:T,inShape:e,outShape:M,filterShape:t}},Vy=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((k,v)=>v)},d=[Math.ceil(Zc(l.x.map(k=>r[k]))/u[0]),1,1];Se("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=q.size(r),m=[{type:12,data:f},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];di(t,m),m.push(...pe(e[0].dims,e[1].dims));let g=["rank","rank"],_=e.length===3;_&&(m.push(...pe(e[2].dims)),g.push("rank")),m.push(...pe(r));let y=k=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];pi(t,v);let b=1,S=Xe(e[0].dataType),x=F("x",e[0].dataType,e[0].dims.length,c),T=F("W",e[1].dataType,e[1].dims.length,b),z=[x,T],E=oe("result",e[0].dataType,r.length,b),O="";if(_){let Q=F("bias",e[2].dataType,e[2].dims.length,b);z.push(Q),O+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?le("coords",4,5):le("coords",1,5)}];
        }`}let R=Je(c,S),U=li(t,R,S);return`
            ${O}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${x.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${k.registerUniforms(v).declareVariables(...z,E)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${E.offsetToIndices("global_idx")};
              let batch = ${le("coords",0,x.rank)};
              let d2 = ${s?le("coords",x.rank-1,x.rank):le("coords",1,x.rank)};
              let xFRCCorner = vec3<u32>(${s?le("coords",1,x.rank):le("coords",2,x.rank)},
              ${s?le("coords",2,x.rank):le("coords",3,x.rank)},
              ${s?le("coords",3,x.rank):le("coords",4,x.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?le("uniforms.x_shape",1,x.rank):le("uniforms.x_shape",2,x.rank)};
              let xShapeZ = ${s?le("uniforms.x_shape",2,x.rank):le("uniforms.x_shape",3,x.rank)};
              let xShapeW = ${s?le("uniforms.x_shape",3,x.rank):le("uniforms.x_shape",4,x.rank)};
              let xShapeU = ${s?le("uniforms.x_shape",4,x.rank):le("uniforms.x_shape",1,x.rank)};
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
                      ${s?`let xValues = vec4<f32>(
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
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
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
                      ${s?`let xValues = vec3<f32>(
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
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${U}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${_}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:m}),getShaderSource:y}}}),Ly,Gy,Rx=J(()=>{he(),$e(),be(),gi(),Ly=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?Ve(d):1,m=q.size(r)/f,g=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];di(t,g),g.push(...pe(s,[u[0],u[1],u[2],u[3]/f]));let _=a?["rank","rank","rank"]:["rank","rank"];g.push(...pe([r[0],r[1],r[2],r[3]/f]));let y=k=>{let v=oe("output",e[0].dataType,r.length,f),b=Xe(v.type.tensor),S=li(t,v.type.value,b),x=F("x",e[0].dataType,s.length),T=F("w",e[1].dataType,u.length,f),z=[x,T];a&&z.push(F("b",e[2].dataType,e[2].dims,f));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];pi(t,E);let O=l?`
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
            let xVal = ${x.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${x.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(E).declareVariables(...z,v)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${O}
    ${n}
    ${S}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:y}},Gy=(e,t,r,i)=>{let a=e.length>2,n=Ve(r[3]),s=Ve(r[2]),u=q.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];di(t,f),f.push(...pe(l,d,c));let m=(s-1)*t.strides[1]+d[1],g=_=>{let y=oe("output",e[0].dataType,c.length,n),k=Xe(y.type.tensor),v=li(t,y.type.value,k),b=F("x",e[0].dataType,l.length,n),S=F("w",e[1].dataType,d.length,n),x=[b,S];a&&x.push(F("b",e[2].dataType,e[2].dims,n));let T=a?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return pi(t,z),`
  ${_.registerUniforms(z).declareVariables(...x,y)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${m}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${v}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${m};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:g}}}),Yc,Rn,Jc,Nn,Xl,fu,ef,tf,Yl,Nx=J(()=>{$e(),Ax(),Bx(),Ud(),Rx(),gi(),Pd(),kr(),Yc=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,d=t[0],c=t.slice(2).map((m,g)=>m+(m-1)*(r[g]-1)),f=u.map((m,g)=>m+i[g]+i[g+l]).map((m,g)=>Math.floor((m-c[g]+a[g])/a[g]));return f.splice(0,0,s),f.splice(n?3:1,0,d),f},Rn=[2,3,1,0],Jc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Nn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();ns.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},Xl=e=>{let t=Nd(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},fu=(e,t,r,i)=>{let a=r.format==="NHWC",n=Yc(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let z=[t[0]];if(a){let E=e.kernelCustomData.wT??e.compute($t(t[1],Rn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),z.push(E)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Gy(z,r,n,i),{inputs:z}):e.compute(Ly(z,r,n,i),{inputs:z});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],c=t[1].dims[2],f=t[1].dims[3],m=n[a?1:2],g=n[a?2:3],_=n[a?3:1],y=a&&c===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(y||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=n[0],E,O,R,U=[];if(a){let X=e.kernelCustomData.wT??e.compute($t(t[1],Rn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=X),y){let M=u*l*d;E=t[0].reshape([1,z,M]),O=X.reshape([1,M,_]),R=[1,z,_]}else E=t[0].reshape([z,u*l,d]),O=X.reshape([1,d,_]),R=[z,m*g,_];U.push(E),U.push(O)}else E=t[0].reshape([z,d,u*l]),O=t[1].reshape([1,_,d]),R=[z,_,m*g],U.push(O),U.push(E);s&&U.push(t[2]);let Q=R[2],L=U[0].dims[U[0].dims.length-1];Q<8&&L<8?e.compute(Dd(U,r,n,R,a,i),{inputs:U}):e.compute(os(U,r,n,R,a,i),{inputs:U});return}let k=!0,v=e.kernelCustomData.wT??e.compute($t(t[1],Rn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];s&&b.push(t[2]);let S=a?m*g:_,x=a?_:m*g,T=c*f*d;e.compute(qy(b,r,n,S,x,T,s,k,i),{inputs:b})},ef=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Nn({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);fu(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},tf=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Nn(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Wy(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(Vy(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Yl=(e,t)=>{if(Jc(e.inputs,t),e.inputs[0].dims.length===3)ef(e,t);else if(e.inputs[0].dims.length===5)tf(e,e.inputs,t);else{let r=Nn(t,e.inputs);fu(e,e.inputs,r)}}}),Hy,Mx=J(()=>{he(),hr(),$e(),be(),Hy=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=n?Ve(l):1,f=n&&d===1&&l>=4,m=f?Math.floor(l/4)*4:Math.floor(l/c)*c,g=l-m,_=n?Ve(d):1,y=n?d===1?c:_:1,k=q.size(a)/_,v=[Math.ceil(k/64),1,1];Se("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let b=["rank","rank"],S=[t.strides[0],t.strides[1]],x=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],T=[t.dilations[0],t.dilations[1]],z=[x[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),x[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],E=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],O=[{type:12,data:k},{type:12,data:S},{type:12,data:x},{type:12,data:T},{type:12,data:z},{type:6,data:E},{type:12,data:m},{type:12,data:l},{type:12,data:d},...pe(e[0].dims,e[1].dims)];i&&(O.push(...pe(e[2].dims)),b.push("rank")),O.push(...pe(a));let R=U=>{let Q=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:x.length},{name:"dilations",type:"u32",length:x.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:E.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],L=Xe(e[0].dataType),X=n?1:2,M=n?2:3,te=n?3:1,K=F("W",e[1].dataType,e[1].dims.length,y),V=F("Dy",e[0].dataType,e[0].dims.length,c),ae=[V,K];i&&ae.push(F("bias",e[2].dataType,[a[te]].length,_));let G=oe("result",e[0].dataType,a.length,_),ne=()=>{let Y="";if(f)c===4?Y+=`
        let xValue = ${V.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?Y+=`
          dotProd = dotProd + dot(vec4<${L}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}), vec4<${L}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(Y+=`
          dotProd = dotProd + dot(vec4<${L}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}, ${V.getByOffset("x_offset + 2u")}, ${V.getByOffset("x_offset + 3u")}), vec4<${L}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Y+=`
                  let xValue = ${n?V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):V.get("batch","inputChannel","idyR","idyC")};
        `,c===1)Y+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let C=0;C<c;C++)Y+=`
            let wValue${C} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${C}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${C}] * wValue${C};`;return Y},B=()=>{if(g===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let Y="";if(c===1){Y+="dotProd = dotProd";for(let C=0;C<g;C++)Y+=`
            + ${V.getByOffset(`x_offset + ${C}`)} * ${K.getByOffset(`w_offset + ${C}`)}`;Y+=";"}else if(c===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);Y+=`
          let xValue = ${V.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Y},D=`
            let outputIndices = ${G.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${G.indicesGet("outputIndices",0)};
            let d1 = ${G.indicesGet("outputIndices",te)};
            let r = ${G.indicesGet("outputIndices",X)};
            let c = ${G.indicesGet("outputIndices",M)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${G.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${L}(dyRCorner) + ${L}(wR)) / ${L}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${L}(uniforms.Dy_shape[${X}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${L}(dyCCorner) + ${L}(wC)) / ${L}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${L}(uniforms.Dy_shape[${M}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${ne()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${B()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${G.setByOffset("global_idx","value")};
          `;return`
    ${U.registerUniforms(Q).declareVariables(...ae,G)}
      ${U.mainStart()}
      ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${D}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${_}${f}${g}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:O}),getShaderSource:R}}}),rf,af,nf,hu,Fy,sf,mu,of,jy,Dx=J(()=>{Mx(),gi(),kr(),rf=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,af=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},nf=(e,t,r,i,a,n,s,u,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let m=e[0],g=t[u?3:1]*a;for(let _=0,y=e.length-c-(u?1:0);_<c;++_,++y){let k=e[y],v=f?k*s[_]:d[_],b=rf(k,s[_],n[_],t[y],r[_],v);af(b,i,n,_,_+c),f&&d.push(s[_]*(k-1)+l[_]+(t[y]-1)*r[_]+1-n[_]-n[_+c])}d.splice(0,0,m),d.splice(u?3:1,0,g)},hu=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,m)=>f*m,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}nf(u,r,l,e.autoPad,e.group,a,d,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},Fy=e=>{let t=Nd(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:f,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},sf=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},mu=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute($t(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(Hy(n,r,i),{inputs:n})},of=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=hu({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);mu(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},jy=(e,t)=>{if(sf(e.inputs,t),e.inputs[0].dims.length===3)of(e,t);else{let r=hu(t,e.inputs);mu(e,e.inputs,r)}}}),uf,Ky,Zy,Px=J(()=>{he(),$e(),Ge(),be(),uf=(e,t,r,i)=>{let a=q.size(t),n=t.length,s=F("input",e,n),u=oe("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=q.normalizeAxis(l,n),c=f=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=le("uniforms.input_shape","uniforms.axis",n),_=i.reverse?m+(i.exclusive?" + 1":""):"0",y=i.reverse?g:m+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...pe(t,t)]}),getShaderSource:c}},Ky=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(uf(i,r,a,t),{inputs:[0]})},Zy=e=>{let t=e.exclusive===1,r=e.reverse===1;return Ce({exclusive:t,reverse:r})}}),lf,df,pf,Qy,Xy,Ux=J(()=>{he(),$e(),Ge(),be(),lf=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},df=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},pf=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=c?[r,i,a,d,d,n/d**2]:[r,i,a,n/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,i,a]:[r,n/d**2,d,d,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),m=f.dims.length,g=e.dataType,_=F("a",g,m),y=oe("output",g,m),k=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,y)}

  ${df(u,m,_,y)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=l?[r,i*d,a*d,n/d**2]:[r,n/d**2,i*d,a*d],S=q.size(b),x=f.dims,T=q.sortBasedOnPerm(x,u);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...pe(x,T)]}},getShaderSource:k}},Qy=(e,t)=>{lf(e.inputs),e.compute(pf(e.inputs[0],t))},Xy=e=>Ce({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Mn,Ka,gu,cf,ff,hf,mf,_u,gf,Yy,Jy,qx=J(()=>{he(),$e(),Ge(),be(),Mn="[a-zA-Z]|\\.\\.\\.",Ka="("+Mn+")+",gu="^"+Ka+"$",cf="("+Ka+",)*"+Ka,ff="^"+cf+"$",hf=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},mf=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(ff)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(gu)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,n);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Ka)))throw new Error("Invalid RHS");i.match(RegExp(Mn,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(gu))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Mn,"g")),d=new hf(i);return l?.forEach((c,f)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let m=a-l.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let _=String.fromCharCode(48+g);d.addSymbol(_,f+g),this.addSymbol(_,r[u++],i)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},_u=e=>e+"_max",gf=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,c)=>F(`input${c}`,t,d)),n=q.size(i),s=oe("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",m="var sum = 0.0;",g="sum += prod;",_=[],y=[],k=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((x,T)=>{if(r.rhs.symbolToIndices.has(T)){let z=r.rhs.symbolToIndices.get(T)?.[0];z!==void 0&&r.lhs.forEach((E,O)=>{if(x.inputIndices.includes(O)){let R=E.symbolToIndices.get(T);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(U=>{c.push(`${a[O].indicesSet(`input${O}Indices`,U,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,E)=>{if(x.inputIndices.includes(E)){let O=z.symbolToIndices.get(T);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(R=>{_.push(`${a[E].indicesSet(`input${E}Indices`,R,`${T}`)}`)}),v.push(`prod *= ${a[E].getByIndices(`input${E}Indices`)};`)}}),y.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${_u(T)}; ${T}++) {`),k.push("}")});let S=b?[...c,`let sum = ${a.map((x,T)=>x.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...c,m,...y,..._,f,...v,g,...k];return`
            ${d.registerUniforms(u.map(x=>({name:`${_u(x)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((x,T)=>`var input${T}Indices: ${a[T].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:n});let c=e.map((f,m)=>[...pe(f)]).reduce((f,m)=>f.concat(m),d);return c.push(...pe(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},Yy=(e,t)=>{let r=new mf(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(gf(a,e.inputs[0].dataType,r,i))},Jy=e=>{let t=e.equation.replace(/\s+/g,"");return Ce({equation:t})}}),_f,$u,$f,yf,eb,Wx=J(()=>{he(),$e(),be(),_f=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},$u=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},$f=(e,t)=>e.length>t.length?$u(e,t):$u(t,e),yf=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=$f(t,r),a=e[0].dataType,n=a===9||q.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(q.size(i)/u),d=f=>{let m=F("input",a,t.length,s),g=oe("output",a,i.length,u),_;if(a===9){let y=(k,v,b="")=>`
          let outputIndices${v} = ${g.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${m.broadcastedIndicesToOffset(`outputIndices${v}`,g)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${k}[${v}] = ${b}(${m.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(m,g)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...pe(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},eb=e=>{_f(e.inputs),e.compute(yf(e.inputs),{inputs:[0]})}}),bf,tb,Vx=J(()=>{he(),$e(),be(),Rd(),bf=e=>{let t=e[0].dataType,r=q.size(e[0].dims),i=q.size(e[1].dims),a=i%4===0,n=s=>{let u=F("x",t,[1],4),l=F("bias",t,[1],4),d=oe("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,m=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${jl(ot(t))}

    ${s.mainStart(ki)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Kl("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/ki/4)}})}},tb=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?wy(e):e.compute(bf(e.inputs))}}),wf,vf,rb,ib,Lx=J(()=>{he(),$e(),Ge(),be(),wf=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},vf=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=q.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(q.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:n},...pe(e[0].dims,e[1].dims,s)],f=m=>{let g=F("data",e[0].dataType,e[0].dims.length,l),_=F("inputIndices",e[1].dataType,e[1].dims.length),y=oe("output",e[0].dataType,s.length,l),k=b=>{let S=i.length,x=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let T=0;T<S;T++)x+=`${S>1?`indicesIndices${b}[${T}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${T}]`:`outputIndices${b}`};`;x+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${g.type.indices};
        `;for(let T=0,z=0;T<a;T++)T===n?(x+=`${a>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = u32(idx${b});`,z+=S):(x+=`${a>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${z}]`:`outputIndices${b}`};`,z++);return x},v;if(e[0].dataType===9){let b=(S,x,T="")=>`
          let outputIndices${x} = ${y.offsetToIndices(`outputOffset + ${x}u`)};
          ${k(x)};
          let offset${x} = ${g.indicesToOffset(`dataIndices${x}`)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${S}[${x}] = ${T}(${g.getByOffset(`index${x}`)}[component${x}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${g.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,_,y)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},rb=e=>Ce({axis:e.axis}),ib=(e,t)=>{let r=e.inputs;wf(r),e.compute(vf(e.inputs,t))}}),xf,ab,nb,Gx=J(()=>{he(),$e(),be(),xf=(e,t,r,i,a,n,s,u,l)=>{let d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];d.push(...pe(t.dims,c));let f=m=>{let g=F("indices_data",t.dataType,t.dims.length),_=oe("input_slice_offsets_data",12,1,1),y=[g,_],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(k).declareVariables(...y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},ab=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=q.sizeToDimension(n,n.length-1),l=q.sizeFromDimension(i,t.batchDims+s),d=q.sizeToDimension(i,t.batchDims),c=q.sizeFromDimension(i,t.batchDims),f=u/d,m=new Array(s),g=l;for(let x=0;x<s;++x)m[s-1-x]=g,g*=i[t.batchDims+s-1-x];let _=xf(e,r[1],m,t.batchDims,i,u,f,c,s),y=t.batchDims+s;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=n.slice(0,-1).concat(i.slice(y)),v=q.size(k),b=[{type:12,data:v},{type:12,data:l},...pe(r[0].dims,_.dims,k)],S=x=>{let T=F("data",r[0].dataType,r[0].dims.length),z=F("slice_offsets",12,_.dims.length),E=oe("output",r[0].dataType,k.length);return`
          ${x.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,z,E)}
            ${x.mainStart()}
            ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:S},{inputs:[r[0],_]})},nb=e=>({batchDims:e.batch_dims,cacheKey:""})}),kf,Sf,sb,ob,Hx=J(()=>{he(),$e(),Ge(),be(),kf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Sf=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=q.normalizeAxis(t.gatherAxis,a),s=q.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=q.size(u),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...pe(...e.map((g,_)=>g.dims),u)],m=g=>{let _=F("data",e[0].dataType,e[0].dims.length),y=F("inputIndices",e[1].dataType,e[1].dims.length),k=F("scales",e[2].dataType,e[2].dims.length),v=e.length>3?F("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=oe("output",d,u.length),S=[_,y,k];v&&S.push(v);let x=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(x).declareVariables(...S,b)}
        ${g.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ot(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,_)=>_!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:m}},sb=(e,t)=>{let r=e.inputs;kf(r,t),e.compute(Sf(e.inputs,t))},ob=e=>Ce({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Tf,If,ub,lb,Fx=J(()=>{he(),$e(),Ge(),be(),Tf=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},If=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=q.normalizeAxis(t.axis,a),l=r[u],d=n.slice(0),c=q.size(d),f=F("input",i,a),m=F("indicesInput",s,n.length),g=oe("output",i,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return _.push(...pe(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,g)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},ub=e=>Ce({axis:e.axis}),lb=(e,t)=>{let r=e.inputs;Tf(r),e.compute(If(e.inputs,t))}}),Ef,zf,db,pb,jx=J(()=>{he(),$e(),be(),Ef=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},zf=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=u0.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(a/l),f=!0,m=q.size(u),g=[{type:12,data:f?d:m},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(g.push(...pe(e[2].dims)),_.push("rank")),g.push(...pe(u));let y=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",x=F("a",e[0].dataType,e[0].dims),T=F("b",e[1].dataType,e[1].dims),z=x.type.value,E=null,O=[x,T];e.length===3&&(E=F("c",e[2].dataType,e[2].dims.length),O.push(E));let R=oe("output",e[0].dataType,u.length);O.push(R);let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(U).declareVariables(...O)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${S}
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${z}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=v=>{let b=F("a",e[0].dataType,e[0].dims),S=F("b",e[1].dataType,e[1].dims),x=null,T=[b,S];e.length===3&&(x=F("c",e[2].dataType,e[2].dims.length),T.push(x));let z=oe("output",e[0].dataType,u.length);T.push(z);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],O="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let U=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(E).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${O}
      }
      workgroupBarrier();
    }

    ${U}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${x!=null?`let cOffset = ${x.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${x.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:g}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:y}},db=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},pb=(e,t)=>{Ef(e.inputs),e.compute(zf(e.inputs,t))}}),Qt,dr,jr,Kr,Cf,Of,Af,Bf,Rf,Nf,Mf,Df,cb,fb,Kx=J(()=>{he(),$e(),Ge(),be(),[Qt,dr,jr,Kr]=[0,1,2,3],Cf=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Of=`
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
`,Af=e=>`
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
`,Bf=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Rf=e=>`
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
`,Nf=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Qt}] = batch;
     indices[${dr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${jr}] = u32(r);
            indices[${Kr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${jr}] = u32(clamp(r, 0, H - 1));
          indices[${Kr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${jr}] = gs_reflect(r, border[1], border[3]);
          indices[${Kr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Mf=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Qt}], indices[${dr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Qt}], indices[${dr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Qt}], indices[${dr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Qt}], indices[${dr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Qt}], indices[${dr}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Qt}], indices[${dr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Df=(e,t)=>{let r=F("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=F("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Qt,dr,jr,Kr]=[0,3,1,2]);let s=oe("output",e[0].dataType,n.length),u=r.type.value,l=q.size(n),d=[{type:12,data:l},...pe(e[0].dims,i,n)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Of}
  ${Af(u)}
  ${Bf(t)}
  ${Rf(t)}
  ${Nf(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${jr}]);
      let W_in = i32(uniforms.x_shape[${Kr}]);

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

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Qt}], indices[${jr}], indices[${Kr}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Mf(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let m=q.size(n);return{outputs:[{dims:n,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:d}},getShaderSource:c}},cb=(e,t)=>{Cf(e.inputs),e.compute(Df(e.inputs,t))},fb=e=>Ce({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),dt,Pf,hb,yu,Uf,hn,mb,gb=J(()=>{he(),$e(),Ge(),Cd(),Bd(),be(),kr(),dt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Pf=(e,t)=>{let r=e[0],i=dt(e,1),a=dt(e,2),n=dt(e,3),s=dt(e,4),u=dt(e,5),l=dt(e,6),d=dt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=f,_=0,y=0,k=Math.floor(m/t.numHeads);if(l&&d&&q.size(l.dims)&&q.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],y=l.dims[2]}else if(l&&q.size(l.dims)||d&&q.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&q.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,g=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,g=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,g=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&q.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+g,S=0;if(s&&q.size(s.dims)>0){S=8;let E=s.dims;throw E.length===1?E[0]===c?S=1:E[0]===3*c+2&&(S=3):E.length===2&&E[0]===c&&E[1]===b&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let x=!1,T=m;if(a&&q.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(g!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=a.dims[2]}else{if(g!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=a.dims[1]*a.dims[3],x=!0}}let z=!1;if(s&&q.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&q.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:m,vHiddenSize:T,headSize:k,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:z,passPastInKv:x,qkvFormat:v}},hb=e=>Ce({...e}),yu=Ce({perm:[0,2,1,3]}),Uf=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=q.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=f=>{let m=oe("qkv_with_bias",t.dataType,u),g=F("qkv",t.dataType,u),_=F("bias",r.dataType,u),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(y).declareVariables(g,_,m)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},hn=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&q.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Uf(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute($t(l,yu.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute($t(l,yu.perm),{inputs:[l],outputs:[-1]})[0]},mb=(e,t)=>{let r=Pf(e.inputs,t),i=e.inputs[0],a=dt(e.inputs,1),n=dt(e.inputs,2),s=dt(e.inputs,3),u=dt(e.inputs,4),l=dt(e.inputs,5),d=dt(e.inputs,6),c=dt(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let f=a&&n&&a.dims.length===4&&n.dims.length===4,m=hn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return xn(e,m,a,n,u,void 0,d,c,l,r);if(!a||!n)throw new Error("key and value must be provided");let g=hn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),_=hn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);xn(e,m,g,_,u,void 0,d,c,l,r)}}),qf,Wf,Vf,Lf,Jl,_b,$b,yb=J(()=>{he(),$e(),Ge(),be(),qf=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Wf=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),Ce({numOutputs:i,axis:t.axis,splitSizes:r})},Vf=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${le("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Lf=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Jl=(e,t)=>{let r=e[0].dims,i=q.size(r),a=e[0].dataType,n=q.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=F("input",a,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,m=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let y=r.slice();y[n]=t.splitSizes[_],c.push(y),s[_]=oe(`output${_}`,a,y.length),d.push({dims:c[_],dataType:e[0].dataType})}m.push({type:12,data:l},...pe(r,...c));let g=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${Vf(l.length)}
  ${Lf(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${le("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},_b=(e,t)=>{qf(e.inputs);let r=e.inputs.length===1?t:Wf(e.inputs,t);e.compute(Jl(e.inputs,r),{inputs:[0]})},$b=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ce({axis:t,numOutputs:i,splitSizes:r})}}),Gf,us,bb,wb=J(()=>{he(),$e(),Ge(),be(),Gf=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!q.areEqual(i.dims,[])&&!q.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!q.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=a.dims[0],f=q.sizeFromDimension(r.dims,1)/d,m=u===0?a.dims[1]*2:f/s;if(u>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},us=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=q.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],f=a===0?c*2:d/i,m=new Array(s,l,d/f,f-c),g=q.computeStrides(m),_=[{type:1,data:n},{type:12,data:m},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[u,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...pe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=k=>{let v=F("input",e[0].dataType,e[0].dims.length),b=F("position_ids",e[1].dataType,e[1].dims.length),S=F("cos_cache",e[2].dataType,e[2].dims.length),x=F("sin_cache",e[3].dataType,e[3].dims.length),T=oe("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${k.declareVariables(v,b,S,x,T)}

        ${k.mainStart(ki)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",oe("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ce({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(m)/ki)},programUniforms:_})}},bb=(e,t)=>{Gf(e.inputs,t),e.compute(us(e.inputs,t))}}),Hf,Ff,bu,jf,vb,Zx=J(()=>{Ge(),he(),Bd(),gb(),yb(),kr(),wb(),be(),Hf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,m=0,g=!i||i.dims.length===0,_=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=_*t.numHeads);let y=n&&n.dims.length!==0,k=s&&s.dims.length!==0;if(y&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&k){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=n.dims[2]}else if(y||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,S=!1,x=t.kvNumHeads?_*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');x=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');x=a.dims[1]*a.dims[3],S=!0}}let T=e.length>4?e[5]:void 0;if(T&&T.dims.length!==1&&T.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:x,headSize:_,vHeadSize:Math.floor(x/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:v}},Ff=Ce({perm:[0,2,1,3]}),bu=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute($t(i,Ff.perm),{inputs:[i],outputs:[-1]})[0]),i},jf=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let f=F("seq_lens",r.dataType,r.dims),m=F("total_seq_lens",i.dataType,i.dims),g=oe("pos_ids",a,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(f,m,g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},vb=(e,t)=>{let r=Hf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Ce({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[m,g,_]=!a&&!n?e.compute(Jl([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],y,k;if(t.doRotary){let x=e.compute(jf(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],T=e.inputs[7],z=e.inputs[8],E=Ce({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[m,x,T,z],R=[-1];y=e.compute(us(O,E),{inputs:O,outputs:R})[0],O.splice(0,1,g);let U=Ce({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(us(O,U),{inputs:O,outputs:R})[0]}let v=hn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?y:m,void 0,0),b=bu(e,t.doRotary?k:g,r),S=bu(e,_,r);xn(e,v,b,S,void 0,void 0,s,u,void 0,r,l,d)}}),wu,Kf,Zf,xb,Qx=J(()=>{he(),$e(),kr(),be(),wu=(e,t,r,i,a,n,s,u)=>{let l=Ve(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=a*s,m=64;f===1&&(m=256);let g=[a,s,n/l],_=[a,s,2],y=["rank","type","type"],k=[];k.push(...pe(g,_));let v=b=>{let S=F("x",t.dataType,3,l),x=F("scale",r.dataType,r.dims),T=F("bias",i.dataType,i.dims),z=oe("output",1,3,2),E=[S,x,T,z];return`
  var<workgroup> workgroup_shared : array<${c}, ${m}>;
  const workgroup_size = ${m}u;
  ${b.declareVariables(...E)}
  ${b.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${vr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${vr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:k}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Kf=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=q.sizeFromDimension(i,n),d=Ve(l),c=q.size(a)/d,f=wu(e,t[0],t[1],t[2],s,l,u,r.epsilon),m=[s,u,l/d],g=[s,u],_=["type","none"],y=k=>{let v=F("x",t[0].dataType,m.length,d),b=F("scale_shift",1,g.length,2),S=oe("output",t[0].dataType,m.length,d),x=[v,b,S];return`
  ${k.registerUniform("output_size","u32").declareVariables(...x)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...pe(m,g,m)]}),getShaderSource:y},{inputs:[t[0],f]})},Zf=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=q.sizeFromDimension(i,1)/s,l=Ve(s),d=q.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],f=["type","type"],m=!1,g=[0,i.length-1];for(let v=0;v<i.length-2;v++)m=m||i[v+1]!==1,g.push(v+1);m=m&&i[i.length-1]!==1;let _=m?e.compute($t(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,b)=>i[g[b]])),y=wu(e,_,t[1],t[2],n,u,s,r.epsilon),k=v=>{let b=Xe(t[0].dataType),S=l===1?"vec2f":`mat${l}x2f`,x=E=>{let O=E===0?"x":"y",R=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${R}(scale.${O}))`;case 2:return`vec2<${b}>(${R}(scale[0].${O}, scale[1].${O}))`;case 4:return`vec4<${b}>(${R}(scale[0].${O}, scale[1].${O}, scale[2].${O}, scale[3].${O}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=F("input",t[0].dataType,t[0].dims,l),z=oe("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${x(0)}, ${x(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:k},{inputs:[t[0],y]})},xb=(e,t)=>{t.format==="NHWC"?Zf(e,e.inputs,t):Kf(e,e.inputs,t)}}),Qf,Xf,kb,Xx=J(()=>{he(),$e(),be(),Qf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Xf=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=q.normalizeAxis(t.axis,a.length),d=q.sizeToDimension(a,l),c=q.sizeFromDimension(a,l),f=q.size(n.dims),m=s?q.size(s.dims):0;if(f!==c||s&&m!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${m}`);let g=[];for(let T=0;T<a.length;++T)T<l?g.push(a[T]):g.push(1);let _=Ve(c),y=["type","type"],k=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];s&&y.push("type");let v=r>1,b=r>2,S=T=>{let z=Xe(e[0].dataType),E=[F("x",e[0].dataType,e[0].dims,_),F("scale",n.dataType,n.dims,_)];s&&E.push(F("bias",s.dataType,s.dims,_)),E.push(oe("output",e[0].dataType,u,_)),v&&E.push(oe("mean_data_output",1,g)),b&&E.push(oe("inv_std_output",1,g));let O=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(O).declareVariables(...E)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Gl("f32",_)};
    var mean_square_vector = ${Gl("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${wi(z,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${vr("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${vr("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${wi(z,_,"x[j + offset]")};
      let f32scale = ${wi(z,_,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${wi(z,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},x=[{dims:u,dataType:e[0].dataType}];return v&&x.push({dims:g,dataType:1}),b&&x.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:k}),getShaderSource:S}},kb=(e,t)=>{Qf(e.inputs),e.compute(Xf(e.inputs,t,e.outputCount))}}),Yf,Sb,Yx=J(()=>{$e(),Pd(),Ud(),Yf=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Sb=e=>{Yf(e.inputs);let t=xi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Dd(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=q.size(e.inputs[0].dims.slice(0,-2)),s=q.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,n,r],c=[u,l];e.compute(os(c,{activation:""},t,d),{inputs:c})}else e.compute(os(e.inputs,{activation:""},t))}}}),Jf,eh,th,Tb,Ib,Jx=J(()=>{he(),$e(),Ge(),be(),Jf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!q.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(q.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(q.size(l)!==d)throw new Error("zeroPoints input size error.")}},eh=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=q.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=Ve(t.k),m=Ve(d),g=Ve(s),_=u.concat([a,s]),y=a>1&&s/g%2===0?2:1,k=q.size(_)/g/y,v=64,b=[],S=[l,a,n/f],x=q.convertShape(e[1].dims).slice();x.splice(-1,1,d/m),b.push(...pe(S)),b.push(...pe(x)),b.push(...pe(e[2].dims)),e.length===4&&b.push(...pe(q.convertShape(e[3].dims)));let T=[l,a,s/g];b.push(...pe(T));let z=E=>{let O=S.length,R=F("a",e[0].dataType,O,f),U=F("b",12,x.length,m),Q=F("scales",e[2].dataType,e[2].dims.length),L=[R,U,Q],X=e.length===4?F("zero_points",12,e[3].dims.length):void 0;X&&L.push(X);let M=T.length,te=oe("output",e[0].dataType,M,g),K=Xe(e[0].dataType),V=(()=>{switch(f){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${f}-component is not supported.`)}})(),ae=()=>{let B=`
          // reuse a data
            var input_offset = ${R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`)};
            var a_data: ${V};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${R.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let D=0;D<g*y;D++)B+=`
            b_value = ${m===1?`b${D}_data`:`b${D}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${V}(${Array.from({length:4},(Y,C)=>`${K}(b_value_lower[${C}]), ${K}(b_value_upper[${C}])`).join(", ")});
            b_dequantized_values = ${f===1?`${V}(${Array.from({length:8},(Y,C)=>`(b_quantized_values[${C}] - ${X?`zero_point${D}`:"zero_point"}) * scale${D}`).join(", ")});`:`(b_quantized_values - ${V}(${Array(8).fill(`${X?`zero_point${D}`:"zero_point"}`).join(",")})) * scale${D};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(D/g)}]${g>1?`[${D%g}]`:""} += ${Array.from({length:8/f},(Y,C)=>`${f===1?`a_data[${C}] * b_dequantized_values[${C}]`:`dot(a_data[${C}], b_dequantized_values[${C}])`}`).join(" + ")};
          `;return B},G=()=>{let B=`
            var col_index = col * ${g};
            ${X?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${K}(8);`}
            `;for(let D=0;D<g*y;D++)B+=`
            let scale${D} = ${Q.getByOffset("col_index * nBlocksPerCol + block")};
            ${X?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${D} = ${K}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return B},ne=()=>{let B=`col_index = col * ${g};`;for(let D=0;D<g*y;D++)B+=`
            let b${D}_data = ${U.getByIndices(`${U.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return B+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${V};
            var b_dequantized_values: ${V};`,B};return`
        var<workgroup> workgroup_shared: array<${te.type.value}, ${y*v}>;
        ${E.declareVariables(...L,te)}
        ${E.mainStart([v,1,1])}
          let output_indices = ${te.offsetToIndices(`(global_idx / ${v}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${G()}
            for (var word: u32 = 0; word < ${d}; word += ${m}) {
              ${ne()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${ae()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${te.type.value} = ${te.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${te.setByIndices(`${te.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${m};${g};${y};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:k},programUniforms:b}),getShaderSource:z}},th=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=q.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=Ve(t.k),m=Ve(d),g=u.concat([a,s]),_=128,y=s%8===0?8:s%4===0?4:1,k=_/y,v=k*m*8,b=v/f,S=v/t.blockSize,x=q.size(g)/y,T=[],z=[l,a,n/f],E=q.convertShape(e[1].dims).slice();E.splice(-1,1,d/m),T.push(...pe(z)),T.push(...pe(E)),T.push(...pe(e[2].dims)),e.length===4&&T.push(...pe(q.convertShape(e[3].dims)));let O=[l,a,s];T.push(...pe(O));let R=U=>{let Q=z.length,L=F("a",e[0].dataType,Q,f),X=F("b",12,E.length,m),M=F("scales",e[2].dataType,e[2].dims.length),te=[L,X,M],K=e.length===4?F("zero_points",12,e[3].dims.length):void 0;K&&te.push(K);let V=O.length,ae=oe("output",e[0].dataType,V),G=Xe(e[0].dataType),ne=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${L.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${ae.type.value}, ${k}>, ${y}>;
        ${U.declareVariables(...te,ae)}
        ${U.mainStart([k,y,1])}
          let output_indices = ${ae.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${L.getByIndices(`${L.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${L.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${K?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${G}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${G}(8);`}
            let scale = ${M.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${X.getByIndices(`${X.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${ne()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${G}>(${Array.from({length:4},(B,D)=>`${G}(b_value_lower[${D}]), ${G}(b_value_upper[${D}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${G}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(B,D)=>`${`dot(a_data${D}, b_dequantized_values[${D}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${ae.type.value} = ${ae.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ae.setByIndices(`${ae.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${m};${k};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x},programUniforms:T}),getShaderSource:R}},Tb=(e,t)=>{Jf(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(th(e.inputs,t)):e.compute(eh(e.inputs,t))},Ib=e=>Ce(e)}),rh,ih,ah,nh,sh,oh,uh,lh,Eb,e3=J(()=>{he(),$e(),be(),rh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ih=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${le("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${le("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${le("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},ah=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${le("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${le("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${le("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${le("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},nh=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${le("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${le("uniforms.x_shape",a,t)})) {
                  k = i32(${le("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${le("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},sh=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${le("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${le("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${le("uniforms.x_shape",a,t)})) {
                  k -= i32(${le("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${le("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},oh=(e,t,r)=>{switch(r.mode){case 0:return ih(e,t,r.pads.length);case 1:return ah(e,t,r.pads.length);case 2:return nh(e,t,r.pads.length);case 3:return sh(e,t,r.pads.length);default:throw new Error("Invalid mode")}},uh=(e,t)=>{let r=q.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=q.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...pe(e[0].dims,r));let u=["rank"],l=d=>{let c=oe("output",e[0].dataType,r.length),f=F("x",e[0].dataType,i.length),m=f.type.value,g=oh(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?m:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(r)/64)},programUniforms:n}),getShaderSource:l}},lh=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},Eb=(e,t)=>{rh(e.inputs);let r=lh(e.inputs,t);e.compute(uh(e.inputs,r),{inputs:[0]})}}),Za,vu,xu,ku,Su,dh,ph,Tu,Iu,zb,Cb,Eu,Ob,Ab,zu,Bb,Rb,Nb,Mb,t3=J(()=>{Kt(),he(),$e(),be(),Za=e=>{if(Pe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},vu=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();ns.adjustPoolAttributes(r,a,s,u,l,d);let c=ns.computePoolOutputShape(r,a,u,l,s,d,t.autoPad),f=Object.assign({},t);n?Object.assign(f,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let m=c.slice();return m.push(m.splice(1,1)[0]),[f,i?m:c]},xu=(e,t)=>{let r=t.format==="NHWC",i=q.size(e),a=q.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];m=!!(y+k),n.push({type:12,data:g},{type:12,data:_},{type:12,data:y},{type:12,data:k}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,f,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=q.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},ku=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let m=a.format==="NHWC",g=t.type.value,_=oe("output",t.type.tensor,i);if(a.kernelShape.length<=2){let y="",k="",v="",b=r-(m?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let S=r-(m?3:2);f?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${g}(${u});
              var pad = 0;
              ${k}
              ${y}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=a.kernelShape.length,k=a.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${g}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${le("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${le("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${le("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${le("uniforms.pads","j - 2u",k)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},Su=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,dh=e=>`${Su(e)};${e.countIncludePad}`,ph=e=>`${Su(e)};${e.storageOrder};${e.dilations}`,Tu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Iu=(e,t,r,i)=>{let[a,n]=vu(t,i,r),s=F("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,f,m,g,_]=xu(n,a);c.push(...pe(t.dims,n));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:c}),getShaderSource:k=>ku(k,s,t.dims.length,n.length,a,l,d,0,f,m,g,_)}},zb=e=>{let t=e.count_include_pad!==0,r=Tu(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:dh(i)}},Cb=(e,t)=>{Za(e.inputs),e.compute(Iu("AveragePool",e.inputs[0],!1,t))},Eu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Ob=e=>{let t=e.format;return{format:t,...Eu,cacheKey:t}},Ab=(e,t)=>{Za(e.inputs),e.compute(Iu("GlobalAveragePool",e.inputs[0],!0,t))},zu=(e,t,r,i)=>{let[a,n]=vu(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=F("x",t.dataType,t.dims.length),d=["rank"],[c,f,m,g,_]=xu(n,a);return c.push(...pe(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:c}),getShaderSource:y=>ku(y,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,f,m,g,_)}},Bb=(e,t)=>{Za(e.inputs),e.compute(zu("MaxPool",e.inputs[0],!1,t))},Rb=e=>{let t=e.storage_order,r=e.dilations,i=Tu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:ph(a)}},Nb=e=>{let t=e.format;return{format:t,...Eu,cacheKey:t}},Mb=(e,t)=>{Za(e.inputs),e.compute(zu("GlobalMaxPool",e.inputs[0],!0,t))}}),ch,fh,Db,Pb,r3=J(()=>{he(),$e(),Ge(),be(),ch=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},fh=(e,t)=>{let r=q.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=q.size(n),l=i===3||i===2,d=l?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,m=f?l?[Math.ceil(q.size(f.dims)/4)]:f.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,_=g===!1&&c.length===1,y=Ve(u),k=g&&(!l||y===4),v=k?y:1,b=k&&!l?y:1,S=F("input",l?12:i,d.length,b),x=F("scale",s,c.length),T=f?F("zero_point",l?12:i,m.length):void 0,z=oe("output",s,n.length,v),E=[S,x];T&&E.push(T);let O=[d,c];f&&O.push(m);let R=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...pe(...O,n)],U=Q=>{let L=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Q.registerUniforms(L).declareVariables(...E,z)}
      ${Q.mainStart()}
          ${Q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${x.getByOffset("0")}`:_?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${x.getByOffset("scale_index")};`:`
            var scale_indices: ${x.type.indices} = output_indices;
            let index = ${x.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${x.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${x.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?g?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:_?l?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${x.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:U,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:R})}},Db=(e,t)=>{ch(e.inputs,t),e.compute(fh(e.inputs,t))},Pb=e=>Ce({axis:e.axis,blockSize:e.blockSize})}),hh,mh,Ub,i3=J(()=>{Kt(),he(),be(),hh=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},mh=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...pe(n)],l=d=>{let c=oe("output",i,n.length),f=c.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(m).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},Ub=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),Pe.webgpu.validateInputContent&&hh(t,r,i),e.compute(mh(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),gh,Cu,Ou,_h,qb,Wb,a3=J(()=>{he(),$e(),Ge(),be(),gh=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Cu=(e,t)=>`${e===1?`
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
    data_offset += u32((u32(index) * element_count_dim));`,Ou=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${gh(e.reduction,"output[data_offset + i]","value",t)}
      }`,_h=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(q.size(i)/n),u=i[i.length-1],l=q.sizeFromDimension(r,u),d=q.sizeFromDimension(i,0)/u,c=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...pe(e[1].dims,e[2].dims,a)],f=m=>{let g=F("indices",e[1].dataType,e[1].dims.length),_=F("updates",e[2].dataType,e[2].dims.length,n),y=t.reduction!=="none"&&t.reduction!==""?m0("output",e[0].dataType,a.length):oe("output",e[0].dataType,a.length,n);return`
      ${m.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,y)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${d}; i = i + 1) {
      for (var j = i + 1; j < ${d}; j = j + 1) {
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
    for (var idx = 0u; idx < ${d}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${Cu(r.length,!1)}
      }
      ${Ou(t,y.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${Cu(r.length,!0)}
  }
  ${Ou(t,y.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}},qb=e=>Ce({reduction:e.reduction}),Wb=(e,t)=>{e.compute(_h(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),$h,yh,bh,Au,wh,vh,xh,kh,Sh,Th,Ih,Eh,Bu,zh,Ch,Oh,Ah,Bh,Vb,Lb,n3=J(()=>{he(),$e(),Ge(),be(),$h=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},yh=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},bh=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");$h(i,t),t.axes.length>0&&yh(i,t.axes,d).forEach((c,f)=>i[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Au=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,wh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Au("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Au("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",vh=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",xh=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},kh=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},Sh=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},Th=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${le("uniforms.scales","i",i)};
        var roi_low = ${le("uniforms.roi","i",a)};
        var roi_hi = ${le("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${le("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Ih=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${le("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${le("uniforms.roi","i",n)};
          var roi_hi = ${le("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${le("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
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
    }`,Eh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${le("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Bu=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",zh=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Bu(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Ch=(e,t,r,i,a,n,s,u,l,d)=>{let c=r.length===2,[f,m]=c?[0,1]:[2,3],g=e.type.value,_=y=>{let k=y===f?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[y]},
        ${i[y]}, ${r[y]}, ${n[y]}, ${n[y]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${g} = originalIdx + ${g}(i);
          if (${k} < 0 || ${k} >= ${r[y]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${k} = max(0, min(${k}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${k})`)};
          data[i + 1] = ${y===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(m)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Oh=(e,t,r,i,a)=>{let[n,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Bu(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
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
    }`},Ah=(e,t,r,i,a,n)=>{let s=e.dims,u=xh(n,t.axes,s.length),l=kh(s,i,a,t.axes),d=i.slice();i.length===0&&(d=s.map((b,S)=>b===0?1:l[S]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=Sh(s,d,t)));let c=oe("output",e.dataType,l.length),f=F("input",e.dataType,s.length),m=q.size(l),g=s.length===l.length&&s.every((b,S)=>b===l[S]),_=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,k=f.type.value,v=b=>`
      ${g?"":`
      ${wh(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Eh(f,s)};
              ${vh(t.nearestMode,r,k)};
              ${Ih(f,c,s,l,d.length,u.length,_)};
              `;case"linear":return`
              ${Th(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${zh(f,c,s,_,y)}`;if(s.length===3||s.length===5)return`${Oh(f,c,s,_,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Ch(f,c,s,l,d,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(f,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:d},{type:1,data:u},...pe(s,l)]})}},Bh=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Vb=(e,t)=>{let r=[],i=[],a=[],n=Bh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");bh(e.inputs,t,n,r,i,a),e.compute(Ah(e.inputs[0],t,n,r,i,a),{inputs:[0]})},Lb=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Ce({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),Rh,Nh,Gb,s3=J(()=>{he(),$e(),be(),Rh=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Nh=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=q.size(n),u=n,l=s,d=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],f=!a&&e.length>3,m=e.length>4,g=i&&r>1,_=i&&r>2,y=r>3,k=64,v=Ve(d),b=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],S=T=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[F("x",e[0].dataType,e[0].dims,v),F("skip",e[1].dataType,e[1].dims,v),F("gamma",e[2].dataType,e[2].dims,v)];f&&E.push(F("beta",e[3].dataType,e[3].dims,v)),m&&E.push(F("bias",e[4].dataType,e[4].dims,v)),E.push(oe("output",e[0].dataType,u,v)),g&&E.push(oe("mean_output",1,c)),_&&E.push(oe("inv_std_output",1,c)),y&&E.push(oe("input_skip_bias_sum",e[0].dataType,u,v));let O=Xe(e[0].dataType),R=Xe(1,v);return`

      ${T.registerUniforms(z).declareVariables(...E)}
      var<workgroup> sum_shared : array<${R}, ${k}>;
      var<workgroup> sum_squared_shared : array<${R}, ${k}>;

      ${T.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":O+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${wi(O,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
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
        let mean = ${vr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${vr("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${O}(mean)`}) *
            ${O}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},x=[{dims:u,dataType:e[0].dataType}];return r>1&&x.push({dims:c,dataType:1}),r>2&&x.push({dims:c,dataType:1}),r>3&&x.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${g};${_};${y}`,inputDependencies:e.map((T,z)=>"type")},getShaderSource:S,getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},Gb=(e,t)=>{Rh(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Nh(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Mh,Qa,Dh,Ru,Ph,Uh,Hb,Fb,o3=J(()=>{he(),$e(),Ge(),be(),Mh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Qa=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Dh=(e,t)=>{if(e.length>1){let r=Qa(e,1),i=Qa(e,2),a=Qa(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),Ce({starts:r,ends:i,axes:a})}else return t},Ru=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Ph=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${le("uniforms.input_shape","i",r.length)};
            let steps_i = ${le("uniforms.steps","i",r.length)};
            let signs_i = ${le("uniforms.signs","i",r.length)};
            let starts_i = ${le("uniforms.starts","i",r.length)};
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
      }`,Uh=(e,t)=>{let r=e[0].dims,i=q.size(r),a=t.axes.length>0?q.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=Qa(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,b)=>Ru(v,b,r,a,n)),u=t.ends.map((v,b)=>Ru(v,b,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),u.splice(v,0,r[v]),n.splice(v,0,1));let l=n.map(v=>Math.sign(v));n.forEach((v,b,S)=>{if(v<0){let x=(u[b]-s[b])/v,T=s[b],z=T+x*n[b];s[b]=z,u[b]=T,S[b]=-v}});let d=r.slice(0);a.forEach((v,b)=>{d[v]=Math.ceil((u[v]-s[v])/n[v])});let c={dims:d,dataType:e[0].dataType},f=oe("output",e[0].dataType,d.length),m=F("input",e[0].dataType,e[0].dims.length),g=q.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:g},{type:12,data:s},{type:6,data:l},{type:12,data:n},...pe(e[0].dims,d)],k=v=>`
      ${v.registerUniforms(_).declareVariables(m,f)}
        ${Ph(m,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},Hb=(e,t)=>{Mh(e.inputs,t);let r=Dh(e.inputs,t);e.compute(Uh(e.inputs,r),{inputs:[0]})},Fb=e=>{let t=e.starts,r=e.ends,i=e.axes;return Ce({starts:t,ends:r,axes:i})}}),qh,Wh,jb,Kb,u3=J(()=>{he(),$e(),Ge(),kr(),be(),qh=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Wh=(e,t)=>{let r=e.inputs[0],i=r.dims,a=q.size(i),n=i.length,s=q.normalizeAxis(t.axis,n),u=s<i.length-1,l,d=[];u?(d=Array.from({length:n},(E,O)=>O),d[s]=n-1,d[n-1]=s,l=e.compute($t(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[n-1],m=a/f,g=Ve(f),_=f/g,y=64;m===1&&(y=256);let k=(E,O)=>O===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:O===2?`max(${E}.x, ${E}.y)`:O===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,v=F("x",l.dataType,l.dims,g),b=oe("result",l.dataType,l.dims,g),S=v.type.value,x=Xe(l.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,T=E=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${E.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${E.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${x}
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
          rowMaxShared = ${S}(${k("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
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
          rowSumShared = ${S}(${vr("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${g};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:_}]}),getShaderSource:T},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute($t(z,d),{inputs:[z]})},jb=(e,t)=>{qh(e.inputs),Wh(e,t)},Kb=e=>Ce({axis:e.axis})}),Nu,Vh,Lh,Gh,Zb,l3=J(()=>{he(),$e(),be(),Nu=e=>Array.from(e.getBigInt64Array(),Number),Vh=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Nu(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Lh=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Gh=(e,t)=>{let r=e[0].dims,i=t??Nu(e[1]),a=Lh(r,i),n=q.size(a),s=e[0].dataType,u=F("input",s,r.length),l=oe("output",s,a.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...pe(e[0].dims,a)]}),getShaderSource:d}},Zb=e=>{Vh(e.inputs),e.compute(Gh(e.inputs),{inputs:[0]})}}),Hh,Fh,Qb,d3=J(()=>{he(),$e(),be(),Hh=(e,t,r,i,a)=>{let n=oe("output_data",a,r.length,4),s=F("a_data",t[1].dataType,t[1].dims.length,4),u=F("b_data",t[2].dataType,t[2].dims.length,4),l=F("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,m,g)=>`select(${m}, ${f}, ${g})`;if(!i)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(m,g,_="")=>{let y=`a_data[index_a${g}][component_a${g}]`,k=`b_data[index_b${g}][component_b${g}]`,v=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${n.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_b${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${m}[${g}] = ${_}(${c(y,k,v)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Fh=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(q.areEqual(t,r)&&q.areEqual(r,i)),s=t,u=q.size(t);if(n){let d=xi.calcShape(xi.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=q.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Hh(d,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...pe(i,t,r,s)]})}},Qb=e=>{e.compute(Fh(e.inputs))}}),Xb,p3=J(()=>{Sx(),Bd(),Tx(),Ix(),Ex(),zx(),Cx(),Nx(),Dx(),Px(),Ux(),qx(),Wx(),Vx(),Lx(),Gx(),Hx(),Fx(),jx(),Kx(),Zx(),Qx(),Xx(),Yx(),Jx(),gb(),e3(),t3(),r3(),i3(),a3(),Ad(),n3(),wb(),s3(),o3(),u3(),yb(),l3(),kr(),Rd(),d3(),Xb=new Map([["Abs",[G0]],["Acos",[H0]],["Acosh",[F0]],["Add",[Ty]],["ArgMax",[q0,Fl]],["ArgMin",[U0,Fl]],["Asin",[j0]],["Asinh",[K0]],["Atan",[Z0]],["Atanh",[Q0]],["Attention",[W0]],["AveragePool",[Cb,zb]],["BatchNormalization",[V0]],["BiasAdd",[L0]],["BiasSplitGelu",[Sy]],["Cast",[Y0,X0]],["Ceil",[ey]],["Clip",[J0]],["Concat",[My,Dy]],["Conv",[Yl,Xl]],["ConvTranspose",[jy,Fy]],["Cos",[ty]],["Cosh",[ry]],["CumSum",[Ky,Zy]],["DepthToSpace",[Qy,Xy]],["DequantizeLinear",[Db,Pb]],["Div",[Iy]],["Einsum",[Yy,Jy]],["Elu",[iy,fn]],["Equal",[Ey]],["Erf",[ay]],["Exp",[ny]],["Expand",[eb]],["FastGelu",[tb]],["Floor",[sy]],["FusedConv",[Yl,Xl]],["Gather",[ib,rb]],["GatherElements",[lb,ub]],["GatherBlockQuantized",[sb,ob]],["GatherND",[ab,nb]],["Gelu",[oy]],["Gemm",[pb,db]],["GlobalAveragePool",[Ab,Ob]],["GlobalMaxPool",[Mb,Nb]],["Greater",[Ay]],["GreaterOrEqual",[Ry]],["GridSample",[cb,fb]],["GroupQueryAttention",[vb]],["HardSigmoid",[my,hy]],["InstanceNormalization",[xb]],["LayerNormalization",[kb]],["LeakyRelu",[uy,fn]],["Less",[By]],["LessOrEqual",[Ny]],["Log",[xy]],["MatMul",[Sb]],["MatMulNBits",[Tb,Ib]],["MaxPool",[Bb,Rb]],["Mul",[zy]],["MultiHeadAttention",[mb,hb]],["Neg",[dy]],["Not",[ly]],["Pad",[Eb]],["Pow",[Cy]],["QuickGelu",[ky,fn]],["Range",[Ub]],["Reciprocal",[py]],["ReduceMin",[R0]],["ReduceMean",[z0]],["ReduceMax",[B0]],["ReduceSum",[M0]],["ReduceProd",[N0]],["ReduceL1",[C0]],["ReduceL2",[O0]],["ReduceLogSum",[P0]],["ReduceLogSumExp",[A0]],["ReduceSumSquare",[D0]],["Relu",[cy]],["Resize",[Vb,Lb]],["RotaryEmbedding",[bb]],["ScatterND",[Wb,qb]],["Sigmoid",[fy]],["Sin",[gy]],["Sinh",[_y]],["Slice",[Hb,Fb]],["SkipLayerNormalization",[Gb]],["Split",[_b,$b]],["Sqrt",[$y]],["Softmax",[jb,Kb]],["Sub",[Oy]],["Tan",[yy]],["Tanh",[by]],["ThresholdedRelu",[vy,fn]],["Tile",[Zb]],["Transpose",[_0,$0]],["Where",[Qb]]])}),Yb,c3=J(()=>{Kt(),hr(),be(),Yb=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){Ft(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),kt(e.programInfo.name)}dispose(){}build(e,t){Ft(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=g0(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});Se("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return kt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Jb={};Ii(Jb,{WebGpuBackend:()=>ew});var jh,Kh,Zh,ew,f3=J(()=>{Kt(),he(),hr(),p0(),xx(),p3(),c3(),jh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Kh=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${jh(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},Zh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},ew=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=n=>t.features.has(n)&&r.push(n)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new Zh(t.info||await t.requestAdapterInfo()),this.gpuDataManager=h0(this),this.programManager=new Yb(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ed(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ft(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),u=s.kernelType,l=s.kernelName,d=a.programName,c=a.inputTensorViews,f=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let _=Number(m-this.queryTimeBase),y=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(k=>({dims:k.dims,dataType:cr(k.dataType)})),outputsMetadata:f.map(k=>({dims:k.dims,dataType:cr(k.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:d,startTime:_,endTime:y});else{let k="";c.forEach((b,S)=>{k+=`input[${S}]: [${b.dims}] | ${cr(b.dataType)}, `});let v="";f.forEach((b,S)=>{v+=`output[${S}]: [${b.dims}] | ${cr(b.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${d}" ${k}${v}execution time: ${y-_} ns`)}vn("GPU",`${d}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),kt()}run(e,t,r,i,a,n){Ft(e.name);let s=[];for(let b=0;b<t.length;++b){let S=t[b].data;if(S===0)continue;let x=this.gpuDataManager.get(S);if(!x)throw new Error(`no GPU data for input: ${S}`);s.push(x)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((b,S)=>S):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let f=[],m=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=n)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let S=c[b]===-1,x=c[b]===-2,T=S||x?a(u[b].dataType,u[b].dims):i(c[b],u[b].dataType,u[b].dims);if(f.push(T),T.data===0)continue;let z=this.gpuDataManager.get(T.data);if(!z)throw new Error(`no GPU data for output: ${T.data}`);if(S&&this.temporaryData.push(z),x){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(z)}m.push(z)}if(s.length!==t.length||m.length!==f.length){if(m.length===0)return kt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let b=0,S=[];d.forEach(E=>{let O=typeof E.data=="number"?[E.data]:E.data;if(O.length===0)return;let R=E.type===10?2:4,U,Q;E.type===10?(Q=O.length>4?16:O.length>2?8:O.length*R,U=O.length>4?16:R*O.length):(Q=O.length<=2?O.length*R:16,U=16),b=Math.ceil(b/Q)*Q,S.push(b);let L=E.type===10?8:4;b+=O.length>4?Math.ceil(O.length/L)*U:O.length*R});let x=16;b=Math.ceil(b/x)*x;let T=new ArrayBuffer(b);d.forEach((E,O)=>{let R=S[O],U=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(T,R,U.length).set(U);else if(E.type===12)new Uint32Array(T,R,U.length).set(U);else if(E.type===10)new Uint16Array(T,R,U.length).set(U);else if(E.type===1)new Float32Array(T,R,U.length).set(U);else throw new Error(`Unsupported uniform type: ${cr(E.type)}`)});let z=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,T,0,b),this.gpuDataManager.release(z.id),g={offset:0,size:b,buffer:z.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),y=_[1]===1&&_[2]===1,k=Kh(e,t,y),v=this.programManager.getArtifact(k);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(k,v),Se("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let b=0;b<d.length;b++){let S=d[b],x=S.type,T=typeof S.data=="number"?1:S.data.length,[z,E]=v.uniformVariablesInfo[b];if(x!==z||T!==E)throw new Error(`Uniform variable ${b} mismatch: expect type ${z} with size ${E}, got type ${x} with size ${T} in program "${v.programInfo.name}".`)}}if(Se("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,s,m,_,g),kt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Xb.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),Se("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Ll(this,e,t);return zd(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Se("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Se("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Se("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),tw={};Ii(tw,{init:()=>rw});var Dn,Qh,rw,h3=J(()=>{he(),hr(),$e(),vx(),Dn=class iw{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new iw(this.module,this.dataType,this.data,t)}},Qh=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*a++,n)),c=Number(e.getValue(i*a++,"*")),f=Number(e.getValue(i*a++,n)),m=[];for(let g=0;g<f;g++)m.push(Number(e.getValue(i*a++,n)));u.push(new Dn(e,d,c,m))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,u,l)=>new Dn(this.module,u,this.output(s,l),l),n=(s,u)=>{let l=ii(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Dn(this.module,s,d,u)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},rw=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(f3(),wn(Jb)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)Se("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{Se("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),f)}},async(u,l,d)=>{Se("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{Se("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let f=new Qh(t,s,Number(l));return s.computeKernel(Number(u),f,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new f0(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,d,c)=>n.ensureTensor(s,u,l,d,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u)])}}}),Xh,qd,Wd,_r,Yh,Mu,ls,Vd,Ld,Du,Gd,Hd,Fd,aw=J(()=>{yx(),bx(),he(),mi(),kd(),o0(),Xh=(e,t)=>{Me()._OrtInit(e,t)!==0&&Re("Can't initialize onnxruntime.")},qd=async e=>{Xh(e.wasm.numThreads,as(e.logLevel))},Wd=async(e,t)=>{Me().asyncInit?.();{let r=(h3(),wn(tw)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Me(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Me(),e)}}},_r=new Map,Yh=e=>{let t=Me(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&Re("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Mu=(e,t)=>{let r=Me(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&Re("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let d=r.HEAPU32[a/4+1],c=[];for(let f=0;f<d;f++){let m=Number(r.getValue(a+8+f*n,"*"));c.push(m!==0?r.UTF8ToString(m):Number(r.getValue(a+8+(f+d)*n,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},ls=e=>{let t=Me(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Vd=async(e,t)=>{let r,i,a=Me();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ls(e);let n=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await s0(t),t?.externalData&&a.mountExternalData){let x=[];for(let T of t.externalData){let z=typeof T=="string"?T:T.path;x.push(Id(typeof T=="string"?T:T.data).then(E=>{a.mountExternalData(z,E)}))}await Promise.all(x)}for(let x of t?.executionProviders??[])if((typeof x=="string"?x:x.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof x!="string"){let T=x,z=T?.context,E=T?.gpuDevice,O=T?.deviceType,R=T?.powerPreference;z?a.currentContext=z:E?a.currentContext=await a.webnnCreateMLContext(E):a.currentContext=await a.webnnCreateMLContext({deviceType:O,powerPreference:R})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),a.webgpuOnCreateSession?.(n),n===0&&Re("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[f,m]=Yh(n),g=!!t?.enableGraphCapture,_=[],y=[],k=[],v=[],b=[];for(let x=0;x<f;x++){let[T,z,E]=Mu(n,x);T===0&&Re("Can't get an input name."),d.push(T);let O=a.UTF8ToString(T);_.push(O),k.push(z===0?{name:O,isTensor:!1}:{name:O,isTensor:!0,type:cr(z),shape:E})}for(let x=0;x<m;x++){let[T,z,E]=Mu(n,x+f);T===0&&Re("Can't get an output name."),c.push(T);let O=a.UTF8ToString(T);y.push(O),v.push(z===0?{name:O,isTensor:!1}:{name:O,isTensor:!0,type:cr(z),shape:E});{if(g&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let R=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[O]??"cpu",U=a.webnnIsGraphOutput;if(R==="cpu"&&U&&U(n,O)){b.push("ml-tensor-cpu-output");continue}if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer"&&R!=="ml-tensor")throw new Error(`Not supported preferred output location: ${R}.`);if(g&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(R)}}let S=null;return b.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&Re("Can't create IO binding."),S={handle:u,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>Wl(x))}),_r.set(n,[n,d,c,S,g,!1]),[n,_,y,k,v]}catch(f){throw d.forEach(m=>a._OrtFree(m)),c.forEach(m=>a._OrtFree(m)),u!==0&&a._OrtReleaseBinding(u)!==0&&Re("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&Re("Can't release session."),f}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&Re("Can't release session options."),l.forEach(f=>a._free(f)),a.unmountExternalData?.()}},Ld=e=>{let t=Me(),r=_r.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&Re("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Re("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(l=>t._OrtFree(l)),n.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&Re("Can't release session."),_r.delete(e)},Du=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=Me(),l=u.PTR_SIZE,d=e[0],c=e[1],f=e[3],m=f,g,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=ii(ri(d),c);{let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=b(i,n,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=ii(ri(d),c);let b=u.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=b(i,v,ri(d),c)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,g=u._malloc(_),r.push(g);for(let b=0;b<v.length;b++){if(typeof v[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);u.setValue(g+b*l,Vt(v[b],r),"*")}}else{let b=u.webnnIsGraphInput,S=u.webnnIsGraphOutput;if(d!=="string"&&b&&S){let x=u.UTF8ToString(a);if(b(i,x)||S(i,x)){let T=ri(d);_=ii(T,c),m="ml-tensor";let z=u.webnnCreateTemporaryTensor,E=u.webnnUploadTensor;if(!z||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let O=await z(i,T,c);E(O,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),g=O}else _=v.byteLength,g=u._malloc(_),r.push(g),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),g)}else _=v.byteLength,g=u._malloc(_),r.push(g),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),g)}}let y=u.stackSave(),k=u.stackAlloc(4*c.length);try{c.forEach((b,S)=>u.setValue(k+S*l,b,l===4?"i32":"i64"));let v=u._OrtCreateTensor(ri(d),g,_,k,c.length,Wl(m));v===0&&Re(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(v)}finally{u.stackRestore(y)}},Gd=async(e,t,r,i,a,n)=>{let s=Me(),u=s.PTR_SIZE,l=_r.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],m=l[3],g=l[4],_=l[5],y=t.length,k=i.length,v=0,b=[],S=[],x=[],T=[],z=s.stackSave(),E=s.stackAlloc(y*u),O=s.stackAlloc(y*u),R=s.stackAlloc(k*u),U=s.stackAlloc(k*u);try{[v,b]=n0(n);for(let M=0;M<y;M++)await Du(r[M],S,T,e,c[t[M]],t[M],g);for(let M=0;M<k;M++)await Du(a[M],x,T,e,f[i[M]],y+i[M],g);for(let M=0;M<y;M++)s.setValue(E+M*u,S[M],"*"),s.setValue(O+M*u,c[t[M]],"*");for(let M=0;M<k;M++)s.setValue(R+M*u,x[M],"*"),s.setValue(U+M*u,f[i[M]],"*");if(m&&!_){let{handle:M,outputPreferredLocations:te,outputPreferredLocationsEncoded:K}=m;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);for(let V=0;V<y;V++){let ae=t[V];await s._OrtBindInput(M,c[ae],S[V])!==0&&Re(`Can't bind input[${V}] for session=${e}.`)}for(let V=0;V<k;V++){let ae=i[V];a[V]?.[3]?s._OrtBindOutput(M,f[ae],x[V],0)!==0&&Re(`Can't bind pre-allocated output[${V}] for session=${e}.`):s._OrtBindOutput(M,f[ae],0,K[ae])!==0&&Re(`Can't bind output[${V}] to ${te[V]} for session=${e}.`)}_r.set(e,[d,c,f,m,g,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let Q;m?Q=await s._OrtRunWithBinding(d,m.handle,k,R,v):Q=await s._OrtRun(d,O,E,y,U,k,R,v),Q!==0&&Re("failed to call OrtRun().");let L=[],X=[];for(let M=0;M<k;M++){let te=Number(s.getValue(R+M*u,"*"));if(te===x[M]){L.push(a[M]);continue}let K=s.stackSave(),V=s.stackAlloc(4*u),ae=!1,G,ne=0;try{s._OrtGetTensorData(te,V,V+u,V+2*u,V+3*u)!==0&&Re(`Can't access output tensor data on index ${M}.`);let B=u===4?"i32":"i64",D=Number(s.getValue(V,B));ne=s.getValue(V+u,"*");let Y=s.getValue(V+u*2,"*"),C=Number(s.getValue(V+u*3,B)),re=[];for(let xe=0;xe<C;xe++)re.push(Number(s.getValue(Y+xe*u,B)));s._OrtFree(Y)!==0&&Re("Can't free memory for tensor dims.");let Ae=re.reduce((xe,ge)=>xe*ge,1);G=cr(D);let qe=m?.outputPreferredLocations[i[M]];if(G==="string"){if(qe==="gpu-buffer"||qe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let xe=[];for(let ge=0;ge<Ae;ge++){let ve=s.getValue(ne+ge*u,"*"),Yt=s.getValue(ne+(ge+1)*u,"*"),Tt=ge===Ae-1?void 0:Yt-ve;xe.push(s.UTF8ToString(ve,Tt))}L.push([G,re,xe,"cpu"])}else if(qe==="gpu-buffer"&&Ae>0){let xe=s.jsepGetBuffer;if(!xe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ge=xe(ne),ve=ii(D,Ae);if(ve===void 0||!Sd(G))throw new Error(`Unsupported data type: ${G}`);ae=!0,L.push([G,re,{gpuBuffer:ge,download:s.jsepCreateDownloader(ge,ve,G),dispose:()=>{s._OrtReleaseTensor(te)!==0&&Re("Can't release tensor.")}},"gpu-buffer"])}else if(qe==="ml-tensor"&&Ae>0){let xe=s.webnnEnsureTensor,ge=s.webnnIsGraphInputOutputTypeSupported;if(!xe||!ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ii(D,Ae)===void 0||!Td(G))throw new Error(`Unsupported data type: ${G}`);if(!ge(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let ve=await xe(e,ne,D,re,!1);ae=!0,L.push([G,re,{mlTensor:ve,download:s.webnnCreateMLTensorDownloader(ne,G),dispose:()=>{s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(te)}},"ml-tensor"])}else if(qe==="ml-tensor-cpu-output"&&Ae>0){let xe=s.webnnCreateMLTensorDownloader(ne,G)(),ge=L.length;ae=!0,X.push((async()=>{let ve=[ge,await xe];return s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(te),ve})()),L.push([G,re,[],"cpu"])}else{let xe=_s(G),ge=new xe(Ae);new Uint8Array(ge.buffer,ge.byteOffset,ge.byteLength).set(s.HEAPU8.subarray(ne,ne+ge.byteLength)),L.push([G,re,ge,"cpu"])}}finally{s.stackRestore(K),G==="string"&&ne&&s._free(ne),ae||s._OrtReleaseTensor(te)}}m&&!g&&(s._OrtClearBoundOutputs(m.handle)!==0&&Re("Can't clear bound outputs."),_r.set(e,[d,c,f,m,g,!1]));for(let[M,te]of await Promise.all(X))L[M][2]=te;return L}finally{s.webnnOnRunEnd?.(d),s.stackRestore(z),S.forEach(Q=>s._OrtReleaseTensor(Q)),x.forEach(Q=>s._OrtReleaseTensor(Q)),T.forEach(Q=>s._free(Q)),v!==0&&s._OrtReleaseRunOptions(v),b.forEach(Q=>s._free(Q))}},Hd=e=>{let t=Me(),r=_r.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&Re("Can't get an profile file name."),t._OrtFree(a)},Fd=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),$r,bt,yi,Xa,Ya,Pn,Pu,Un,Zr,Qr,Jh,nw,sw,ow,uw,lw,dw,pw,cw=J(()=>{Kt(),aw(),mi(),vd(),$r=()=>!!Pe.wasm.proxy&&typeof document<"u",yi=!1,Xa=!1,Ya=!1,Un=new Map,Zr=(e,t)=>{let r=Un.get(e);r?r.push(t):Un.set(e,[t])},Qr=()=>{if(yi||!Xa||Ya||!bt)throw new Error("worker not ready")},Jh=e=>{switch(e.data.type){case"init-wasm":yi=!1,e.data.err?(Ya=!0,Pu[1](e.data.err)):(Xa=!0,Pu[0]()),Pn&&(URL.revokeObjectURL(Pn),Pn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Un.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},nw=async()=>{if(!Xa){if(yi)throw new Error("multiple calls to 'initWasm()' detected.");if(Ya)throw new Error("previous call to 'initWasm()' failed.");if(yi=!0,$r())return new Promise((e,t)=>{bt?.terminate(),i0().then(([r,i])=>{try{bt=i,bt.onerror=n=>t(n),bt.onmessage=Jh,Pu=[e,t];let a={type:"init-wasm",in:Pe};!a.in.wasm.wasmPaths&&(r||ql)&&(a.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href,import.meta.url).href}),bt.postMessage(a),Pn=r}catch(a){t(a)}},t)});try{await xd(Pe.wasm),await qd(Pe),Xa=!0}catch(e){throw Ya=!0,e}finally{yi=!1}}},sw=async e=>{if($r())return Qr(),new Promise((t,r)=>{Zr("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:Pe}};bt.postMessage(i)});await Wd(Pe,e)},ow=async e=>$r()?(Qr(),new Promise((t,r)=>{Zr("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};bt.postMessage(i,[e.buffer])})):ls(e),uw=async(e,t)=>{if($r()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Qr(),new Promise((r,i)=>{Zr("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),bt.postMessage(a,n)})}else return Vd(e,t)},lw=async e=>{if($r())return Qr(),new Promise((t,r)=>{Zr("release",[t,r]);let i={type:"release",in:e};bt.postMessage(i)});Ld(e)},dw=async(e,t,r,i,a,n)=>{if($r()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Qr(),new Promise((s,u)=>{Zr("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};bt.postMessage(d,Fd(l))})}else return Gd(e,t,r,i,a,n)},pw=async e=>{if($r())return Qr(),new Promise((t,r)=>{Zr("end-profiling",[t,r]);let i={type:"end-profiling",in:e};bt.postMessage(i)});Hd(e)}}),Uu,em,fw,m3=J(()=>{Kt(),cw(),he(),wd(),o0(),Uu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},em=e=>{switch(e[3]){case"cpu":return new Gt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Sd(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Gt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Td(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Gt.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},fw=class{async fetchModelAndCopyToWasmMemory(e){return ow(await Id(e))}async loadModel(e,t){Ft();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await uw(r,t),kt()}async dispose(){return lw(this.sessionId)}async run(e,t,r){Ft();let i=[],a=[];Object.entries(e).forEach(f=>{let m=f[0],g=f[1],_=this.inputNames.indexOf(m);if(_===-1)throw new Error(`invalid input '${m}'`);i.push(g),a.push(_)});let n=[],s=[];Object.entries(t).forEach(f=>{let m=f[0],g=f[1],_=this.outputNames.indexOf(m);if(_===-1)throw new Error(`invalid output '${m}'`);n.push(g),s.push(_)});let u=i.map((f,m)=>Uu(f,()=>`input "${this.inputNames[a[m]]}"`)),l=n.map((f,m)=>f?Uu(f,()=>`output "${this.outputNames[s[m]]}"`):null),d=await dw(this.sessionId,a,u,s,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[s[f]]]=n[f]??em(d[f]);return kt(),c}startProfiling(){}endProfiling(){pw(this.sessionId)}}}),hw={};Ii(hw,{OnnxruntimeWebAssemblyBackend:()=>td,initializeFlags:()=>ed,wasmBackend:()=>mw});var ed,td,mw,g3=J(()=>{Kt(),cw(),m3(),ed=()=>{(typeof Pe.wasm.initTimeout!="number"||Pe.wasm.initTimeout<0)&&(Pe.wasm.initTimeout=0);let e=Pe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Pe.wasm.simd=!1),typeof Pe.wasm.proxy!="boolean"&&(Pe.wasm.proxy=!1),typeof Pe.wasm.trace!="boolean"&&(Pe.wasm.trace=!1),typeof Pe.wasm.numThreads!="number"||!Number.isInteger(Pe.wasm.numThreads)||Pe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Pe.wasm.numThreads=1;else{let t=typeof navigator>"u"?rx("node:os").cpus().length:navigator.hardwareConcurrency;Pe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},td=class{async init(e){ed(),await nw(),await sw(e)}async createInferenceSessionHandler(e,t){let r=new fw;return await r.loadModel(e,t),r}},mw=new td});Kt();Kt();Kt();var _3="1.22.0",$3=X$;{let e=(g3(),wn(hw)).wasmBackend;oi("webgpu",e,5),oi("webnn",e,5),oi("cpu",e,10),oi("wasm",e,10)}Object.defineProperty(Pe.versions,"web",{value:_3,enumerable:!0});/**
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
 */const Uk=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return bd},get TRACE(){return vn},get TRACE_FUNC_BEGIN(){return Ft},get TRACE_FUNC_END(){return kt},get Tensor(){return Gt},default:$3,get env(){return Pe},get registerBackend(){return oi}},Symbol.toStringTag,{value:"Module"}));/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var jd=Object.defineProperty,y3=Object.getOwnPropertyDescriptor,b3=Object.getOwnPropertyNames,w3=Object.prototype.hasOwnProperty,v3=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ee=(e,t)=>()=>(e&&(t=e(e=0)),t),Ei=(e,t)=>{for(var r in t)jd(e,r,{get:t[r],enumerable:!0})},x3=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of b3(t))!w3.call(e,a)&&a!==r&&jd(e,a,{get:()=>t[a],enumerable:!(i=y3(t,a))||i.enumerable});return e},kn=e=>x3(jd({},"__esModule",{value:!0}),e),Ja,yr,ui,tm,gw,_w=ee(()=>{Ja=new Map,yr=[],ui=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Ja.get(e);if(i===void 0)Ja.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=yr.indexOf(e);a!==-1&&yr.splice(a,1);for(let n=0;n<yr.length;n++)if(Ja.get(yr[n]).priority<=r){yr.splice(n,0,e);return}yr.push(e)}return}throw new TypeError("not a valid backend")},tm=async e=>{let t=Ja.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},gw=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?yr:r,a,n=[],s=new Set;for(let l of i){let d=await tm(l);typeof d=="string"?n.push({name:l,err:d}):(a||(a=d),a===d&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),k3=ee(()=>{_w()}),$w,S3=ee(()=>{$w="1.22.0"}),qu,xt,yw=ee(()=>{S3(),qu="warning",xt={wasm:{},webgl:{},webgpu:{},versions:{common:$w},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);qu=e}},get logLevel(){return qu}},Object.defineProperty(xt,"logLevel",{enumerable:!0})}),Ue,T3=ee(()=>{yw(),Ue=xt}),bw,ww,I3=ee(()=>{bw=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=n*a,f=0,m=c,g=c*2,_=-1;s==="RGBA"?(f=0,m=c,g=c*2,_=c*3):s==="RGB"?(f=0,m=c,g=c*2):s==="RBG"&&(f=0,g=c,m=c*2);for(let y=0;y<n;y++)for(let k=0;k<a;k++){let v=(e.data[f++]-d[0])*l[0],b=(e.data[m++]-d[1])*l[1],S=(e.data[g++]-d[2])*l[2],x=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+v+","+b+","+S+","+x+")",i.fillRect(k,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ww=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,g=0,_=1,y=2,k=3,v=0,b=f,S=f*2,x=-1;u==="RGBA"?(v=0,b=f,S=f*2,x=f*3):u==="RGB"?(v=0,b=f,S=f*2):u==="RBG"&&(v=0,S=f,b=f*2),i=r.createImageData(a,n);for(let T=0;T<n*a;g+=m,_+=m,y+=m,k+=m,T++)i.data[g]=(e.data[v++]-c[0])*d[0],i.data[_]=(e.data[b++]-c[1])*d[1],i.data[y]=(e.data[S++]-c[2])*d[2],i.data[k]=x===-1?255:(e.data[x++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),qn,vw,xw,kw,Sw,Tw,E3=ee(()=>{Kd(),qn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,m=0,g=1,_=2,y=3,k=0,v=d,b=d*2,S=-1;u==="RGB"&&(f=3,m=0,g=1,_=2,y=-1),l==="RGBA"?S=d*3:l==="RBG"?(k=0,b=d,v=d*2):l==="BGR"&&(b=0,v=d,k=d*2);for(let x=0;x<d;x++,m+=f,_+=f,g+=f,y+=f)c[k++]=(e[m]+s[0])/n[0],c[v++]=(e[g]+s[1])/n[1],c[b++]=(e[_]+s[2])/n[2],S!==-1&&y!==-1&&(c[S++]=(e[y]+s[3])/n[3]);return l==="RGBA"?new _t("float32",c,[1,4,r,i]):new _t("float32",c,[1,3,r,i])},vw=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let m=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=m,u.width=g}else u.tensorFormat="RGBA",u.height=m,u.width=g;f.drawImage(e,0,0),s=f.getImageData(0,0,g,m).data}else throw new Error("Can not access image data")}else if(i){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=f,t!==void 0){let m=l();m.width=f,m.height=c;let g=d(m);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let m=e.height,g=e.width;return f.drawImage(e,0,0,g,m),s=f.getImageData(0,0,g,m).data,u.height=m,u.width=g,qn(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,f)=>{let m=l(),g=d(m);if(!e||!g)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{m.width=_.width,m.height=_.height,g.drawImage(_,0,0,m.width,m.height);let y=g.getImageData(0,0,m.width,m.height);u.height=m.height,u.width=m.width,c(qn(y.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return qn(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},xw=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new _t({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},kw=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new _t({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},Sw=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new _t({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},Tw=(e,t,r)=>new _t({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),ai,mn,Wu,Iw,z3=ee(()=>{ai=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),mn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Wu=!1,Iw=()=>{if(!Wu){Wu=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(ai.set("int64",BigInt64Array),mn.set(BigInt64Array,"int64")),t&&(ai.set("uint64",BigUint64Array),mn.set(BigUint64Array,"uint64")),i?(ai.set("float16",r),mn.set(r,"float16")):ai.set("float16",Uint16Array)}}}),Ew,zw,C3=ee(()=>{Kd(),Ew=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},zw=(e,t)=>{switch(e.location){case"cpu":return new _t(e.type,e.data,t);case"cpu-pinned":return new _t({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new _t({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new _t({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new _t({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),_t,Kd=ee(()=>{I3(),E3(),z3(),C3(),_t=class{constructor(e,t,r){Iw();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=ai.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=ai.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=mn.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=Ew(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return vw(e,t)}static fromTexture(e,t){return xw(e,t)}static fromGpuBuffer(e,t){return kw(e,t)}static fromMLTensor(e,t){return Sw(e,t)}static fromPinnedBuffer(e,t,r){return Tw(e,t,r)}toDataURL(e){return bw(this,e)}toImageData(e){return ww(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return zw(this,e)}}}),Ht,Cw=ee(()=>{Kd(),Ht=_t}),Sn,Vu,jt,St,Ow=ee(()=>{yw(),Sn=(e,t)=>{(typeof xt.trace>"u"?!xt.wasm.trace:!xt.trace)||console.timeStamp(`${e}::ORT::${t}`)},Vu=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Sn("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},jt=e=>{(typeof xt.trace>"u"?!xt.wasm.trace:!xt.trace)||Vu("BEGIN",e)},St=e=>{(typeof xt.trace>"u"?!xt.wasm.trace:!xt.trace)||Vu("END",e)}}),Aw,O3=ee(()=>{_w(),Cw(),Ow(),Aw=class Bw{constructor(t){this.handler=t}async run(t,r,i){jt();let a={},n={};if(typeof t!="object"||t===null||t instanceof Ht||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ht)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let m=r[f];(m===null||m instanceof Ht)&&(d=!0,s=!1,a[f]=m)}if(d){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let u=await this.handler.run(t,a,n),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof Ht?l[d]=c:l[d]=new Ht(c.type,c.data,c.dims)}return St(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){jt();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(m=t.byteLength-f,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||f+m>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,f,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await gw(s),d=await u.createInferenceSessionHandler(n,l);return St(),new Bw(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Zd,A3=ee(()=>{O3(),Zd=Aw}),B3=ee(()=>{}),R3=ee(()=>{}),N3=ee(()=>{}),M3=ee(()=>{}),Rw={};Ei(Rw,{InferenceSession:()=>Zd,TRACE:()=>Sn,TRACE_FUNC_BEGIN:()=>jt,TRACE_FUNC_END:()=>St,Tensor:()=>Ht,env:()=>Ue,registerBackend:()=>ui});var Zt=ee(()=>{k3(),T3(),A3(),Cw(),B3(),R3(),Ow(),N3(),M3()}),Qd=ee(()=>{}),Nw={};Ei(Nw,{default:()=>Mw});var Lu,Gu,Mw,D3=ee(()=>{Wv(),_i(),Xd(),Lu="ort-wasm-proxy-worker",Gu=globalThis.self?.name===Lu,Gu&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Yd(r.wasm).then(()=>{mp(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;gp(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=gs(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;_p(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":$p(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:u}=r;yp(i,a,n,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},wp([...n,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":bp(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Mw=Gu?null:e=>new Worker(e??mt,{type:"module",name:Lu})}),Dw={};Ei(Dw,{default:()=>Pw});var Hu,Fu,Pw,rm,P3=ee(()=>{Fu=(Hu=import.meta.url,async function(e={}){var t,r,i=e,a=new Promise((o,p)=>{t=o,r=p}),n=typeof window=="object",s=typeof WorkerGlobalScope<"u",u=s&&self.name?.startsWith("em-pthread");i.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(i.Fb||(i.Fb=new Map)).set(o,p)},i.unmountExternalData=()=>{delete i.Fb};var l=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let d=o=>async(...p)=>{try{if(i.Gb)throw Error("Session already started");let h=i.Gb={ec:p[0],errors:[]},$=await o(...p);if(i.Gb!==h)throw Error("Session mismatch");i.Kb?.flush();let w=h.errors;if(0<w.length){let I=await Promise.all(w);if(I=I.filter(A=>A),0<I.length)throw Error(I.join(`
`))}return $}finally{i.Gb=null}};i.jsepInit=(o,p)=>{if(o==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.kb,i.$b,i.bc,i.Wb,i.Xb,i.ac]=p;let h=i.Kb;i.jsepRegisterBuffer=($,w,I,A)=>h.registerBuffer($,w,I,A),i.jsepGetBuffer=$=>h.getBuffer($),i.jsepCreateDownloader=($,w,I)=>h.createDownloader($,w,I),i.jsepOnCreateSession=$=>{h.onCreateSession($)},i.jsepOnReleaseSession=$=>{h.onReleaseSession($)},i.jsepOnRunStart=$=>h.onRunStart($),i.cc=($,w)=>{h.upload($,w)}}else if(o==="webnn"){let h=p[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor]=p.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnOnRunStart=$=>h.onRunStart($),i.webnnOnRunEnd=h.onRunEnd.bind(h),i.webnnRegisterMLContext=($,w)=>{h.registerMLContext($,w)},i.webnnOnReleaseSession=$=>{h.onReleaseSession($)},i.webnnCreateMLTensorDownloader=($,w)=>h.createMLTensorDownloader($,w),i.webnnRegisterMLTensor=($,w,I,A)=>h.registerMLTensor($,w,I,A),i.webnnCreateMLContext=$=>h.createMLContext($),i.webnnRegisterMLConstant=($,w,I,A,N,P)=>h.registerMLConstant($,w,I,A,N,i.Fb,P),i.webnnRegisterGraphInput=h.registerGraphInput.bind(h),i.webnnIsGraphInput=h.isGraphInput.bind(h),i.webnnRegisterGraphOutput=h.registerGraphOutput.bind(h),i.webnnIsGraphOutput=h.isGraphOutput.bind(h),i.webnnCreateTemporaryTensor=h.createTemporaryTensor.bind(h),i.webnnIsGraphInputOutputTypeSupported=h.isGraphInputOutputTypeSupported.bind(h)}};let c=()=>{let o=(p,h,$)=>(...w)=>{let I=je,A=h?.();w=p(...w);let N=h?.();return A!==N&&(p=N,$(A),h=$=null),je!=I?new Promise((P,H)=>{Ur={resolve:P,reject:H}}):w};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[p]=o(i[p],()=>i[p],h=>i[p]=h)})(),d!==void 0&&(i._OrtRun=d(i._OrtRun),i._OrtRunWithBinding=d(i._OrtRunWithBinding)),c=void 0};i.asyncInit=()=>{c?.()};var f,m,g=Object.assign({},i),_=(o,p)=>{throw p},y="";(n||s)&&(s?y=self.location.href:typeof document<"u"&&document.currentScript&&(y=document.currentScript.src),Hu&&(y=Hu),y=y.startsWith("blob:")?"":y.slice(0,y.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(m=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),f=async o=>{if(G(o))return new Promise((h,$)=>{var w=new XMLHttpRequest;w.open("GET",o,!0),w.responseType="arraybuffer",w.onload=()=>{w.status==200||w.status==0&&w.response?h(w.response):$(w.status)},w.onerror=$,w.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var k=console.log.bind(console),v=console.error.bind(console),b=k,S=v;Object.assign(i,g),g=null;var x,T,z,E,O,R,U,Q,L,X,M,te,K,V=i.wasmBinary,ae=!1,G=o=>o.startsWith("file://");function ne(){return x.buffer!=E.buffer&&ve(),E}function B(){return x.buffer!=E.buffer&&ve(),O}function D(){return x.buffer!=E.buffer&&ve(),R}function Y(){return x.buffer!=E.buffer&&ve(),U}function C(){return x.buffer!=E.buffer&&ve(),Q}function re(){return x.buffer!=E.buffer&&ve(),L}function Ae(){return x.buffer!=E.buffer&&ve(),X}function qe(){return x.buffer!=E.buffer&&ve(),K}if(u){let o=function(p){try{var h=p.data,$=h.Cb;if($==="load"){let w=[];self.onmessage=I=>w.push(I),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let I of w)o(I);self.onmessage=o};for(let I of h.Sb)i[I]&&!i[I].proxy||(i[I]=(...A)=>{postMessage({Cb:"callHandler",Rb:I,args:A})},I=="print"&&(b=i[I]),I=="printErr"&&(S=i[I]));x=h.lc,ve(),xe(h.mc)}else if($==="run"){ws(h.Bb),Lr(h.Bb,0,0,1,0,0),Mi(),Dr(h.Bb),ge||(Ca(),ge=!0);try{vs(h.hc,h.Ib)}catch(w){if(w!="unwind")throw w}}else h.target!=="setimmediate"&&($==="checkMailbox"?ge&&Jt():$&&(S(`worker: received unknown command ${$}`),S(h)))}catch(w){throw Oa(),w}};var xe,ge=!1;S=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Cb:"alert",text:p.join(" "),jc:or()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}function ve(){var o=x.buffer;i.HEAP8=E=new Int8Array(o),i.HEAP16=R=new Int16Array(o),i.HEAPU8=O=new Uint8Array(o),i.HEAPU16=U=new Uint16Array(o),i.HEAP32=Q=new Int32Array(o),i.HEAPU32=L=new Uint32Array(o),i.HEAPF32=X=new Float32Array(o),i.HEAPF64=K=new Float64Array(o),i.HEAP64=M=new BigInt64Array(o),i.HEAPU64=te=new BigUint64Array(o)}function Yt(){u?startWorker(i):Z.Da()}u||(x=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ve());var Tt,It=0,Et=null;function zi(){if(--It==0&&Et){var o=Et;Et=null,o()}}function tt(o){throw S(o="Aborted("+o+")"),ae=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),r(o),o}function Ci(){return{a:{L:bs,Aa:ys,b:ks,$:qi,A:Li,pa:Gi,X:Fi,Z:ji,qa:Ki,na:Zi,ga:Qi,ma:Xi,J:Yi,Y:Ji,V:ea,oa:ta,W:ra,va:Ss,E:Ts,Q:Is,O:zs,D:Os,v:As,r:Bs,P:Rs,z:Ws,R:Vs,ja:Ls,T:Gs,aa:Hs,M:Fs,F:js,ia:Dr,sa:Ks,t:Zs,Ca:Qs,w:Js,o:eo,m:ro,c:Rr,Ba:io,n:ao,j:oo,u:uo,p:lo,f:po,s:co,l:fo,e:ho,k:mo,h:go,g:_o,d:$o,da:yo,ea:bo,fa:wo,ba:ga,ca:_a,N:$a,xa:xo,ua:So,i:To,C:Io,G:Eo,ta:ko,x:zo,ra:Co,U:Oo,q:vo,y:Ao,K:Bo,S:Ro,za:No,ya:Mo,ka:va,la:xa,_:Cr,B:ka,I:Sa,ha:Ta,H:Ia,a:x,wa:zr}}}var Tr={840156:(o,p,h,$,w)=>{if(i===void 0||!i.Fb)return 1;if((o=ke(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=i.Fb.get(o)))return 2;if(p=Number(p>>>0),h=Number(h>>>0),$=Number($>>>0),p+h>o.byteLength)return 3;try{let I=o.subarray(p,p+h);switch(w){case 0:B().set(I,$>>>0);break;case 1:i.nc?i.nc($,I):i.cc($,I);break;default:return 4}return 0}catch{return 4}},840980:(o,p,h)=>{i.Pb(o,B().subarray(p>>>0,p+h>>>0))},841044:()=>i.oc(),841086:o=>{i.Ob(o)},841123:()=>{i.Wb()},841154:()=>{i.Xb()},841183:()=>{i.ac()},841208:o=>i.Vb(o),841241:o=>i.Zb(o),841273:(o,p,h)=>{i.Lb(Number(o),Number(p),Number(h),!0)},841336:(o,p,h)=>{i.Lb(Number(o),Number(p),Number(h))},841393:()=>typeof wasmOffsetConverter<"u",841450:o=>{i.kb("Abs",o,void 0)},841501:o=>{i.kb("Neg",o,void 0)},841552:o=>{i.kb("Floor",o,void 0)},841605:o=>{i.kb("Ceil",o,void 0)},841657:o=>{i.kb("Reciprocal",o,void 0)},841715:o=>{i.kb("Sqrt",o,void 0)},841767:o=>{i.kb("Exp",o,void 0)},841818:o=>{i.kb("Erf",o,void 0)},841869:o=>{i.kb("Sigmoid",o,void 0)},841924:(o,p,h)=>{i.kb("HardSigmoid",o,{alpha:p,beta:h})},842003:o=>{i.kb("Log",o,void 0)},842054:o=>{i.kb("Sin",o,void 0)},842105:o=>{i.kb("Cos",o,void 0)},842156:o=>{i.kb("Tan",o,void 0)},842207:o=>{i.kb("Asin",o,void 0)},842259:o=>{i.kb("Acos",o,void 0)},842311:o=>{i.kb("Atan",o,void 0)},842363:o=>{i.kb("Sinh",o,void 0)},842415:o=>{i.kb("Cosh",o,void 0)},842467:o=>{i.kb("Asinh",o,void 0)},842520:o=>{i.kb("Acosh",o,void 0)},842573:o=>{i.kb("Atanh",o,void 0)},842626:o=>{i.kb("Tanh",o,void 0)},842678:o=>{i.kb("Not",o,void 0)},842729:(o,p,h)=>{i.kb("Clip",o,{min:p,max:h})},842798:o=>{i.kb("Clip",o,void 0)},842850:(o,p)=>{i.kb("Elu",o,{alpha:p})},842908:o=>{i.kb("Gelu",o,void 0)},842960:o=>{i.kb("Relu",o,void 0)},843012:(o,p)=>{i.kb("LeakyRelu",o,{alpha:p})},843076:(o,p)=>{i.kb("ThresholdedRelu",o,{alpha:p})},843146:(o,p)=>{i.kb("Cast",o,{to:p})},843204:o=>{i.kb("Add",o,void 0)},843255:o=>{i.kb("Sub",o,void 0)},843306:o=>{i.kb("Mul",o,void 0)},843357:o=>{i.kb("Div",o,void 0)},843408:o=>{i.kb("Pow",o,void 0)},843459:o=>{i.kb("Equal",o,void 0)},843512:o=>{i.kb("Greater",o,void 0)},843567:o=>{i.kb("GreaterOrEqual",o,void 0)},843629:o=>{i.kb("Less",o,void 0)},843681:o=>{i.kb("LessOrEqual",o,void 0)},843740:(o,p,h,$,w)=>{i.kb("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},843915:(o,p,h,$,w)=>{i.kb("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844089:(o,p,h,$,w)=>{i.kb("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844263:(o,p,h,$,w)=>{i.kb("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844438:(o,p,h,$,w)=>{i.kb("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844612:(o,p,h,$,w)=>{i.kb("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844785:(o,p,h,$,w)=>{i.kb("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},844958:(o,p,h,$,w)=>{i.kb("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},845135:(o,p,h,$,w)=>{i.kb("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},845315:(o,p,h,$,w)=>{i.kb("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},845495:o=>{i.kb("Where",o,void 0)},845548:(o,p,h)=>{i.kb("Transpose",o,{perm:p?Array.from(C().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},845672:(o,p,h,$)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:ke(h),format:$?"NHWC":"NCHW"})},845805:(o,p,h,$)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:ke(h),format:$?"NHWC":"NCHW"})},845938:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie,ft)=>{i.kb("ConvTranspose",o,{format:P?"NHWC":"NCHW",autoPad:p,dilations:[h],group:$,kernelShape:[w],pads:[I,A],strides:[N],wIsConst:()=>!!ne()[H>>>0],outputPadding:ie?Array.from(C().subarray(Number(ie)>>>0,Number(se)>>>0)):[],outputShape:fe?Array.from(C().subarray(Number(fe)>>>0,Number(Ie)>>>0)):[],activation:ke(ft)})},846371:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:p,dilations:Array.from(C().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:$,kernelShape:Array.from(C().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(C().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(C().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!ne()[P>>>0],outputPadding:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],outputShape:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[],activation:ke(Ie)})},847032:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie,ft)=>{i.kb("ConvTranspose",o,{format:P?"NHWC":"NCHW",autoPad:p,dilations:[h],group:$,kernelShape:[w],pads:[I,A],strides:[N],wIsConst:()=>!!ne()[H>>>0],outputPadding:ie?Array.from(C().subarray(Number(ie)>>>0,Number(se)>>>0)):[],outputShape:fe?Array.from(C().subarray(Number(fe)>>>0,Number(Ie)>>>0)):[],activation:ke(ft)})},847465:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:p,dilations:Array.from(C().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:$,kernelShape:Array.from(C().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(C().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(C().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!ne()[P>>>0],outputPadding:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],outputShape:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[],activation:ke(Ie)})},848126:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848217:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("AveragePool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:$,storage_order:w,dilations:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],pads:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],strides:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[]})},848696:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848787:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("AveragePool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:$,storage_order:w,dilations:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],pads:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],strides:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[]})},849266:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849353:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("MaxPool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:$,storage_order:w,dilations:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],pads:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],strides:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[]})},849828:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849915:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie)=>{i.kb("MaxPool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:$,storage_order:w,dilations:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],pads:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],strides:se?Array.from(C().subarray(Number(se)>>>0,Number(fe)>>>0)):[]})},850390:(o,p,h,$,w)=>{i.kb("Gemm",o,{alpha:p,beta:h,transA:$,transB:w})},850494:o=>{i.kb("MatMul",o,void 0)},850548:(o,p,h,$)=>{i.kb("ArgMax",o,{keepDims:!!p,selectLastIndex:!!h,axis:$})},850656:(o,p,h,$)=>{i.kb("ArgMin",o,{keepDims:!!p,selectLastIndex:!!h,axis:$})},850764:(o,p)=>{i.kb("Softmax",o,{axis:p})},850827:(o,p)=>{i.kb("Concat",o,{axis:p})},850887:(o,p,h,$,w)=>{i.kb("Split",o,{axis:p,numOutputs:h,splitSizes:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},851043:o=>{i.kb("Expand",o,void 0)},851097:(o,p)=>{i.kb("Gather",o,{axis:Number(p)})},851168:(o,p)=>{i.kb("GatherElements",o,{axis:Number(p)})},851247:(o,p)=>{i.kb("GatherND",o,{batch_dims:Number(p)})},851326:(o,p,h,$,w,I,A,N,P,H,ie)=>{i.kb("Resize",o,{antialias:p,axes:h?Array.from(C().subarray(Number(h)>>>0,Number($)>>>0)):[],coordinateTransformMode:ke(w),cubicCoeffA:I,excludeOutside:A,extrapolationValue:N,keepAspectRatioPolicy:ke(P),mode:ke(H),nearestMode:ke(ie)})},851688:(o,p,h,$,w,I,A)=>{i.kb("Slice",o,{starts:p?Array.from(C().subarray(Number(p)>>>0,Number(h)>>>0)):[],ends:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[],axes:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[]})},851952:o=>{i.kb("Tile",o,void 0)},852004:(o,p,h)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:h?"NHWC":"NCHW"})},852118:(o,p,h)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:h?"NHWC":"NCHW"})},852232:o=>{i.kb("Range",o,void 0)},852285:(o,p)=>{i.kb("Einsum",o,{equation:ke(p)})},852366:(o,p,h,$,w)=>{i.kb("Pad",o,{mode:p,value:h,pads:$?Array.from(C().subarray(Number($)>>>0,Number(w)>>>0)):[]})},852509:(o,p,h,$,w,I)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:h,spatial:!!w,trainingMode:!!$,format:I?"NHWC":"NCHW"})},852678:(o,p,h,$,w,I)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:h,spatial:!!w,trainingMode:!!$,format:I?"NHWC":"NCHW"})},852847:(o,p,h)=>{i.kb("CumSum",o,{exclusive:Number(p),reverse:Number(h)})},852944:(o,p,h)=>{i.kb("DequantizeLinear",o,{axis:p,blockSize:h})},853034:(o,p,h,$,w)=>{i.kb("GridSample",o,{align_corners:p,mode:ke(h),padding_mode:ke($),format:w?"NHWC":"NCHW"})},853204:(o,p,h,$,w)=>{i.kb("GridSample",o,{align_corners:p,mode:ke(h),padding_mode:ke($),format:w?"NHWC":"NCHW"})},853374:(o,p)=>{i.kb("ScatterND",o,{reduction:ke(p)})},853459:(o,p,h,$,w,I,A,N,P)=>{i.kb("Attention",o,{numHeads:p,isUnidirectional:h,maskFilterValue:$,scale:w,doRotary:I,qkvHiddenSizes:A?Array.from(C().subarray(Number(N)>>>0,Number(N)+A>>>0)):[],pastPresentShareBuffer:!!P})},853731:o=>{i.kb("BiasAdd",o,void 0)},853786:o=>{i.kb("BiasSplitGelu",o,void 0)},853847:o=>{i.kb("FastGelu",o,void 0)},853903:(o,p,h,$,w,I,A,N,P,H,ie,se,fe,Ie,ft,Uo)=>{i.kb("Conv",o,{format:se?"NHWC":"NCHW",auto_pad:p,dilations:h?Array.from(C().subarray(Number(h)>>>0,Number($)>>>0)):[],group:w,kernel_shape:I?Array.from(C().subarray(Number(I)>>>0,Number(A)>>>0)):[],pads:N?Array.from(C().subarray(Number(N)>>>0,Number(P)>>>0)):[],strides:H?Array.from(C().subarray(Number(H)>>>0,Number(ie)>>>0)):[],w_is_const:()=>!!ne()[Number(fe)>>>0],activation:ke(Ie),activation_params:ft?Array.from(Ae().subarray(Number(ft)>>>0,Number(Uo)>>>0)):[]})},854487:o=>{i.kb("Gelu",o,void 0)},854539:(o,p,h,$,w,I,A,N,P)=>{i.kb("GroupQueryAttention",o,{numHeads:p,kvNumHeads:h,scale:$,softcap:w,doRotary:I,rotaryInterleaved:A,smoothSoftmax:N,localWindowSize:P})},854756:(o,p,h,$)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:h,simplified:!!$})},854867:(o,p,h,$)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:h,simplified:!!$})},854978:(o,p,h,$,w,I)=>{i.kb("MatMulNBits",o,{k:p,n:h,accuracyLevel:$,bits:w,blockSize:I})},855105:(o,p,h,$,w,I)=>{i.kb("MultiHeadAttention",o,{numHeads:p,isUnidirectional:h,maskFilterValue:$,scale:w,doRotary:I})},855264:(o,p)=>{i.kb("QuickGelu",o,{alpha:p})},855328:(o,p,h,$,w)=>{i.kb("RotaryEmbedding",o,{interleaved:!!p,numHeads:h,rotaryEmbeddingDim:$,scale:w})},855467:(o,p,h)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!h})},855569:(o,p,h)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!h})},855671:(o,p,h,$)=>{i.kb("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:h,blockSize:$})},855792:o=>{i.$b(o)},855826:(o,p)=>i.bc(Number(o),Number(p),i.Gb.ec,i.Gb.errors)};function ys(o,p,h){return da(async()=>{await i.Yb(Number(o),Number(p),Number(h))})}function bs(){return typeof wasmOffsetConverter<"u"}class Ir{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var Oi=o=>{o.terminate(),o.onmessage=()=>{}},Er=[],Ai=o=>{it.length==0&&(Pi(),Di(it[0]));var p=it.pop();if(!p)return 6;zt.push(p),lt[o.Bb]=p,p.Bb=o.Bb;var h={Cb:"run",hc:o.fc,Ib:o.Ib,Bb:o.Bb};return p.postMessage(h,o.Nb),0},rt=0,_e=(o,p,...h)=>{for(var $=2*h.length,w=Fr(),I=Hr(8*$),A=I>>>3,N=0;N<h.length;N++){var P=h[N];typeof P=="bigint"?(M[A+2*N]=1n,M[A+2*N+1]=P):(M[A+2*N]=0n,qe()[A+2*N+1>>>0]=P)}return o=Aa(o,0,$,I,p),lr(w),o};function zr(o){if(u)return _e(0,1,o);if(z=o,!(0<rt)){for(var p of zt)Oi(p);for(p of it)Oi(p);it=[],zt=[],lt={},ae=!0}_(0,new Ir(o))}function Bi(o){if(u)return _e(1,0,o);Cr(o)}var Cr=o=>{if(z=o,u)throw Bi(o),"unwind";zr(o)},it=[],zt=[],Ri=[],lt={},Ni=o=>{var p=o.Bb;delete lt[p],it.push(o),zt.splice(zt.indexOf(o),1),o.Bb=0,Ba(p)};function Mi(){Ri.forEach(o=>o())}var Di=o=>new Promise(p=>{o.onmessage=w=>{var I=(w=w.data).Cb;if(w.Hb&&w.Hb!=or()){var A=lt[w.Hb];A?A.postMessage(w,w.Nb):S(`Internal error! Worker sent a message "${I}" to target pthread ${w.Hb}, but that thread no longer exists!`)}else I==="checkMailbox"?Jt():I==="spawnThread"?Ai(w):I==="cleanupThread"?Ni(lt[w.ic]):I==="loaded"?(o.loaded=!0,p(o)):I==="alert"?alert(`Thread ${w.jc}: ${w.text}`):w.target==="setimmediate"?o.postMessage(w):I==="callHandler"?i[w.Rb](...w.args):I&&S(`worker sent an unknown command ${I}`)},o.onerror=w=>{throw S(`worker sent an error! ${w.filename}:${w.lineno}: ${w.message}`),w};var h,$=[];for(h of[])i.propertyIsEnumerable(h)&&$.push(h);o.postMessage({Cb:"load",Sb:$,lc:x,mc:T})});function Pi(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.webgpu.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});it.push(o)}var ws=o=>{ve();var p=re()[o+52>>>2>>>0];o=re()[o+56>>>2>>>0],Ma(p,p-o),lr(p)},vs=(o,p)=>{rt=0,o=Da(o,p),0<rt?z=o:Gr(o)};class xs{constructor(p){this.Jb=p-24}}function ks(o,p,h){var $=new xs(o>>>=0);throw p>>>=0,h>>>=0,re()[$.Jb+16>>>2>>>0]=0,re()[$.Jb+4>>>2>>>0]=p,re()[$.Jb+8>>>2>>>0]=h,o}function Ui(o,p,h,$){return u?_e(2,1,o,p,h,$):qi(o,p,h,$)}function qi(o,p,h,$){if(o>>>=0,h>>>=0,$>>>=0,l===void 0)return 6;var w=[];return u&&w.length===0?Ui(o,p>>>=0,h,$):(o={fc:h,Bb:o,Ib:$,Nb:w},u?(o.Cb="spawnThread",postMessage(o,w),0):Ai(o))}var Wi=typeof TextDecoder<"u"?new TextDecoder:void 0,Vi=(o,p=0,h=NaN)=>{var $=(p>>>=0)+h;for(h=p;o[h]&&!(h>=$);)++h;if(16<h-p&&o.buffer&&Wi)return Wi.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,h):o.slice(p,h));for($="";p<h;){var w=o[p++];if(128&w){var I=63&o[p++];if((224&w)==192)$+=String.fromCharCode((31&w)<<6|I);else{var A=63&o[p++];65536>(w=(240&w)==224?(15&w)<<12|I<<6|A:(7&w)<<18|I<<12|A<<6|63&o[p++])?$+=String.fromCharCode(w):(w-=65536,$+=String.fromCharCode(55296|w>>10,56320|1023&w))}}else $+=String.fromCharCode(w)}return $},ke=(o,p)=>(o>>>=0)?Vi(B(),o,p):"";function Li(o,p,h){return u?_e(3,1,o,p,h):0}function Gi(o,p){if(u)return _e(4,1,o,p)}var Hi=o=>{for(var p=0,h=0;h<o.length;++h){var $=o.charCodeAt(h);127>=$?p++:2047>=$?p+=2:55296<=$&&57343>=$?(p+=4,++h):p+=3}return p},ct=(o,p,h)=>{var $=B();if(p>>>=0,0<h){var w=p;h=p+h-1;for(var I=0;I<o.length;++I){var A=o.charCodeAt(I);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&o.charCodeAt(++I)),127>=A){if(p>=h)break;$[p++>>>0]=A}else{if(2047>=A){if(p+1>=h)break;$[p++>>>0]=192|A>>6}else{if(65535>=A){if(p+2>=h)break;$[p++>>>0]=224|A>>12}else{if(p+3>=h)break;$[p++>>>0]=240|A>>18,$[p++>>>0]=128|A>>12&63}$[p++>>>0]=128|A>>6&63}$[p++>>>0]=128|63&A}}$[p>>>0]=0,o=p-w}else o=0;return o};function Fi(o,p){if(u)return _e(5,1,o,p)}function ji(o,p,h){if(u)return _e(6,1,o,p,h)}function Ki(o,p,h){return u?_e(7,1,o,p,h):0}function Zi(o,p){if(u)return _e(8,1,o,p)}function Qi(o,p,h){if(u)return _e(9,1,o,p,h)}function Xi(o,p,h,$){if(u)return _e(10,1,o,p,h,$)}function Yi(o,p,h,$){if(u)return _e(11,1,o,p,h,$)}function Ji(o,p,h,$){if(u)return _e(12,1,o,p,h,$)}function ea(o){if(u)return _e(13,1,o)}function ta(o,p){if(u)return _e(14,1,o,p)}function ra(o,p,h){if(u)return _e(15,1,o,p,h)}var ia,at,Ss=()=>tt(""),Fe=o=>{for(var p="";B()[o>>>0];)p+=ia[B()[o++>>>0]];return p},Or={},Ar={};function Ze(o,p,h={}){return function($,w,I={}){var A=w.name;if(!$)throw new at(`type "${A}" must have a positive integer typeid pointer`);if(Ar.hasOwnProperty($)){if(I.Tb)return;throw new at(`Cannot register type '${A}' twice`)}Ar[$]=w,Or.hasOwnProperty($)&&(w=Or[$],delete Or[$],w.forEach(N=>N()))}(o,p,h)}var aa=(o,p,h)=>{switch(p){case 1:return h?$=>ne()[$>>>0]:$=>B()[$>>>0];case 2:return h?$=>D()[$>>>1>>>0]:$=>Y()[$>>>1>>>0];case 4:return h?$=>C()[$>>>2>>>0]:$=>re()[$>>>2>>>0];case 8:return h?$=>M[$>>>3]:$=>te[$>>>3];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function Ts(o,p,h){h>>>=0,Ze(o>>>=0,{name:p=Fe(p>>>0),fromWireType:$=>$,toWireType:function($,w){if(typeof w!="bigint"&&typeof w!="number")throw w=w===null?"null":($=typeof w)=="object"||$==="array"||$==="function"?w.toString():""+w,new TypeError(`Cannot convert "${w}" to ${this.name}`);return typeof w=="number"&&(w=BigInt(w)),w},Db:nt,readValueFromPointer:aa(p,h,p.indexOf("u")==-1),Eb:null})}var nt=8;function Is(o,p,h,$){Ze(o>>>=0,{name:p=Fe(p>>>0),fromWireType:function(w){return!!w},toWireType:function(w,I){return I?h:$},Db:nt,readValueFromPointer:function(w){return this.fromWireType(B()[w>>>0])},Eb:null})}var Br=[],Qe=[];function Rr(o){9<(o>>>=0)&&--Qe[o+1]==0&&(Qe[o]=void 0,Br.push(o))}var Be=o=>{if(!o)throw new at("Cannot use deleted val. handle = "+o);return Qe[o]},We=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Br.pop()||Qe.length;return Qe[p]=o,Qe[p+1]=1,p}};function Nr(o){return this.fromWireType(re()[o>>>2>>>0])}var Es={name:"emscripten::val",fromWireType:o=>{var p=Be(o);return Rr(o),p},toWireType:(o,p)=>We(p),Db:nt,readValueFromPointer:Nr,Eb:null};function zs(o){return Ze(o>>>0,Es)}var Cs=(o,p)=>{switch(p){case 4:return function(h){return this.fromWireType(Ae()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(qe()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Os(o,p,h){h>>>=0,Ze(o>>>=0,{name:p=Fe(p>>>0),fromWireType:$=>$,toWireType:($,w)=>w,Db:nt,readValueFromPointer:Cs(p,h),Eb:null})}function As(o,p,h,$,w){if(o>>>=0,h>>>=0,p=Fe(p>>>0),w===-1&&(w=4294967295),w=N=>N,$===0){var I=32-8*h;w=N=>N<<I>>>I}var A=p.includes("unsigned")?function(N,P){return P>>>0}:function(N,P){return P};Ze(o,{name:p,fromWireType:w,toWireType:A,Db:nt,readValueFromPointer:aa(p,h,$!==0),Eb:null})}function Bs(o,p,h){function $(I){var A=re()[I>>>2>>>0];return I=re()[I+4>>>2>>>0],new w(ne().buffer,I,A)}var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];Ze(o>>>=0,{name:h=Fe(h>>>0),fromWireType:$,Db:nt,readValueFromPointer:$},{Tb:!0})}function Rs(o,p){Ze(o>>>=0,{name:p=Fe(p>>>0),fromWireType:function(h){for(var $,w=re()[h>>>2>>>0],I=h+4,A=I,N=0;N<=w;++N){var P=I+N;N!=w&&B()[P>>>0]!=0||(A=ke(A,P-A),$===void 0?$=A:($+="\0",$+=A),A=P+1)}return Ke(h),$},toWireType:function(h,$){$ instanceof ArrayBuffer&&($=new Uint8Array($));var w=typeof $=="string";if(!(w||$ instanceof Uint8Array||$ instanceof Uint8ClampedArray||$ instanceof Int8Array))throw new at("Cannot pass non-string to std::string");var I=w?Hi($):$.length,A=ur(4+I+1),N=A+4;if(re()[A>>>2>>>0]=I,w)ct($,N,I+1);else if(w)for(w=0;w<I;++w){var P=$.charCodeAt(w);if(255<P)throw Ke(A),new at("String has UTF-16 code units that do not fit in 8 bits");B()[N+w>>>0]=P}else for(w=0;w<I;++w)B()[N+w>>>0]=$[w];return h!==null&&h.push(Ke,A),A},Db:nt,readValueFromPointer:Nr,Eb(h){Ke(h)}})}var na=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ns=(o,p)=>{for(var h=o>>1,$=h+p/2;!(h>=$)&&Y()[h>>>0];)++h;if(32<(h<<=1)-o&&na)return na.decode(B().slice(o,h));for(h="",$=0;!($>=p/2);++$){var w=D()[o+2*$>>>1>>>0];if(w==0)break;h+=String.fromCharCode(w)}return h},Ms=(o,p,h)=>{if(h??=2147483647,2>h)return 0;var $=p;h=(h-=2)<2*o.length?h/2:o.length;for(var w=0;w<h;++w){var I=o.charCodeAt(w);D()[p>>>1>>>0]=I,p+=2}return D()[p>>>1>>>0]=0,p-$},Ds=o=>2*o.length,Ps=(o,p)=>{for(var h=0,$="";!(h>=p/4);){var w=C()[o+4*h>>>2>>>0];if(w==0)break;++h,65536<=w?(w-=65536,$+=String.fromCharCode(55296|w>>10,56320|1023&w)):$+=String.fromCharCode(w)}return $},Us=(o,p,h)=>{if(p>>>=0,h??=2147483647,4>h)return 0;var $=p;h=$+h-4;for(var w=0;w<o.length;++w){var I=o.charCodeAt(w);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&o.charCodeAt(++w)),C()[p>>>2>>>0]=I,(p+=4)+4>h)break}return C()[p>>>2>>>0]=0,p-$},qs=o=>{for(var p=0,h=0;h<o.length;++h){var $=o.charCodeAt(h);55296<=$&&57343>=$&&++h,p+=4}return p};function Ws(o,p,h){if(o>>>=0,p>>>=0,h=Fe(h>>>=0),p===2)var $=Ns,w=Ms,I=Ds,A=N=>Y()[N>>>1>>>0];else p===4&&($=Ps,w=Us,I=qs,A=N=>re()[N>>>2>>>0]);Ze(o,{name:h,fromWireType:N=>{for(var P,H=re()[N>>>2>>>0],ie=N+4,se=0;se<=H;++se){var fe=N+4+se*p;se!=H&&A(fe)!=0||(ie=$(ie,fe-ie),P===void 0?P=ie:(P+="\0",P+=ie),ie=fe+p)}return Ke(N),P},toWireType:(N,P)=>{if(typeof P!="string")throw new at(`Cannot pass non-string to C++ string type ${h}`);var H=I(P),ie=ur(4+H+p);return re()[ie>>>2>>>0]=H/p,w(P,ie+4,H+p),N!==null&&N.push(Ke,ie),ie},Db:nt,readValueFromPointer:Nr,Eb(N){Ke(N)}})}function Vs(o,p){Ze(o>>>=0,{Ub:!0,name:p=Fe(p>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function Ls(o){Lr(o>>>0,!s,1,!n,131072,!1),Mi()}var Mr=o=>{if(!ae)try{if(o(),!(0<rt))try{u?Gr(z):Cr(z)}catch(p){p instanceof Ir||p=="unwind"||_(0,p)}}catch(p){p instanceof Ir||p=="unwind"||_(0,p)}};function Dr(o){o>>>=0,typeof Atomics.kc=="function"&&(Atomics.kc(C(),o>>>2,o).value.then(Jt),o+=128,Atomics.store(C(),o>>>2,1))}var Jt=()=>{var o=or();o&&(Dr(o),Mr(Na))};function Gs(o,p){(o>>>=0)==p>>>0?setTimeout(Jt):u?postMessage({Hb:o,Cb:"checkMailbox"}):(o=lt[o])&&o.postMessage({Cb:"checkMailbox"})}var Pr=[];function Hs(o,p,h,$,w){for(p>>>=0,$/=2,Pr.length=$,h=w>>>0>>>3,w=0;w<$;w++)Pr[w]=M[h+2*w]?M[h+2*w+1]:qe()[h+2*w+1>>>0];return(p?Tr[p]:Po[o])(...Pr)}var Fs=()=>{rt=0};function js(o){o>>>=0,u?postMessage({Cb:"cleanupThread",ic:o}):Ni(lt[o])}function Ks(o){}var er=(o,p)=>{var h=Ar[o];if(h===void 0)throw o=za(o),h=Fe(o),Ke(o),new at(`${p} has unknown type ${h}`);return h},sa=(o,p,h)=>{var $=[];return o=o.toWireType($,h),$.length&&(re()[p>>>2>>>0]=We($)),o};function Zs(o,p,h){return p>>>=0,h>>>=0,o=Be(o>>>0),p=er(p,"emval::as"),sa(p,h,o)}function Qs(o,p){return p>>>=0,o=Be(o>>>0),(p=er(p,"emval::as")).toWireType(null,o)}var tr=o=>{try{o()}catch(p){tt(p)}},st=0,je=null,oa=0,rr=[],ua={},la={},Xs=0,Ur=null,Ys=[];function da(o){return function(p){if(!ae){if(st===0){var h=!1,$=!1;p((w=0)=>{if(!ae&&(oa=w,h=!0,$)){st=2,tr(()=>qa(je)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),w=!1;try{var I=function(){var P=C()[je+8>>>2>>>0];return P=Z[la[P]],--rt,P()}()}catch(P){I=P,w=!0}var A=!1;if(!je){var N=Ur;N&&(Ur=null,(w?N.reject:N.resolve)(I),A=!0)}if(w&&!A)throw I}}),$=!0,h||(st=1,je=function(){var w=ur(65548),I=w+12;re()[w>>>2>>>0]=I,re()[w+4>>>2>>>0]=I+65536,I=rr[0];var A=ua[I];return A===void 0&&(A=Xs++,ua[I]=A,la[A]=I),I=A,C()[w+8>>>2>>>0]=I,w}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),tr(()=>Pa(je)))}else st===2?(st=0,tr(Wa),Ke(je),je=null,Ys.forEach(Mr)):tt(`invalid state: ${st}`);return oa}}(p=>{o().then(p)})}function Js(o){return o>>>=0,da(async()=>{var p=await Be(o);return We(p)})}var ir=[];function eo(o,p,h,$){return h>>>=0,$>>>=0,(o=ir[o>>>0])(null,p=Be(p>>>0),h,$)}var to={},ar=o=>{var p=to[o];return p===void 0?Fe(o):p};function ro(o,p,h,$,w){return h>>>=0,$>>>=0,w>>>=0,(o=ir[o>>>0])(p=Be(p>>>0),p[h=ar(h)],$,w)}function io(o,p){return p>>>=0,(o=Be(o>>>0))==Be(p)}var pa=()=>typeof globalThis=="object"?globalThis:Function("return this")();function ao(o){return(o>>>=0)==0?We(pa()):(o=ar(o),We(pa()[o]))}var no=o=>{var p=ir.length;return ir.push(o),p},so=(o,p)=>{for(var h=Array(o),$=0;$<o;++$)h[$]=er(re()[p+4*$>>>2>>>0],"parameter "+$);return h},ca=(o,p)=>Object.defineProperty(p,"name",{value:o});function oo(o,p,h){var $=(p=so(o,p>>>0)).shift();o--;var w=`return function (obj, func, destructorsRef, args) {
`,I=0,A=[];h===0&&A.push("obj");for(var N=["retType"],P=[$],H=0;H<o;++H)A.push("arg"+H),N.push("argType"+H),P.push(p[H]),w+=`  var arg${H} = argType${H}.readValueFromPointer(args${I?"+"+I:""});
`,I+=p[H].Db;return w+=`  var rv = ${h===1?"new func":"func.call"}(${A.join(", ")});
`,$.Ub||(N.push("emval_returnValue"),P.push(sa),w+=`  return emval_returnValue(retType, destructorsRef, rv);
`),N.push(w+`};
`),o=function(ie){var se=Function;if(!(se instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof se} which is not a function`);var fe=ca(se.name||"unknownFunctionName",function(){});return fe.prototype=se.prototype,fe=new fe,(ie=se.apply(fe,ie))instanceof Object?ie:fe}(N)(...P),h=`methodCaller<(${p.map(ie=>ie.name).join(", ")}) => ${$.name}>`,no(ca(h,o))}function uo(o){return o=ar(o>>>0),We(i[o])}function lo(o,p){return p>>>=0,o=Be(o>>>0),p=Be(p),We(o[p])}function po(o){9<(o>>>=0)&&(Qe[o+1]+=1)}function co(){return We([])}function fo(o){o=Be(o>>>0);for(var p=Array(o.length),h=0;h<o.length;h++)p[h]=o[h];return We(p)}function ho(o){return We(ar(o>>>0))}function mo(){return We({})}function go(o){for(var p=Be(o>>>=0);p.length;){var h=p.pop();p.pop()(h)}Rr(o)}function _o(o,p,h){p>>>=0,h>>>=0,o=Be(o>>>0),p=Be(p),h=Be(h),o[p]=h}function $o(o,p){return p>>>=0,o=(o=er(o>>>0,"_emval_take_value")).readValueFromPointer(p),We(o)}function yo(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),C()[p>>>2>>>0]=o.getUTCSeconds(),C()[p+4>>>2>>>0]=o.getUTCMinutes(),C()[p+8>>>2>>>0]=o.getUTCHours(),C()[p+12>>>2>>>0]=o.getUTCDate(),C()[p+16>>>2>>>0]=o.getUTCMonth(),C()[p+20>>>2>>>0]=o.getUTCFullYear()-1900,C()[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,C()[p+28>>>2>>>0]=o}var fa=o=>o%4==0&&(o%100!=0||o%400==0),ha=[0,31,60,91,121,152,182,213,244,274,305,335],ma=[0,31,59,90,120,151,181,212,243,273,304,334];function bo(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),C()[p>>>2>>>0]=o.getSeconds(),C()[p+4>>>2>>>0]=o.getMinutes(),C()[p+8>>>2>>>0]=o.getHours(),C()[p+12>>>2>>>0]=o.getDate(),C()[p+16>>>2>>>0]=o.getMonth(),C()[p+20>>>2>>>0]=o.getFullYear()-1900,C()[p+24>>>2>>>0]=o.getDay();var h=(fa(o.getFullYear())?ha:ma)[o.getMonth()]+o.getDate()-1|0;C()[p+28>>>2>>>0]=h,C()[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),h=new Date(o.getFullYear(),6,1).getTimezoneOffset();var $=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(h!=$&&o.getTimezoneOffset()==Math.min($,h)),C()[p+32>>>2>>>0]=o}function wo(o){o>>>=0;var p=new Date(C()[o+20>>>2>>>0]+1900,C()[o+16>>>2>>>0],C()[o+12>>>2>>>0],C()[o+8>>>2>>>0],C()[o+4>>>2>>>0],C()[o>>>2>>>0],0),h=C()[o+32>>>2>>>0],$=p.getTimezoneOffset(),w=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(I,w);return 0>h?C()[o+32>>>2>>>0]=+(w!=I&&A==$):0<h!=(A==$)&&(w=Math.max(I,w),p.setTime(p.getTime()+6e4*((0<h?A:w)-$))),C()[o+24>>>2>>>0]=p.getDay(),h=(fa(p.getFullYear())?ha:ma)[p.getMonth()]+p.getDate()-1|0,C()[o+28>>>2>>>0]=h,C()[o>>>2>>>0]=p.getSeconds(),C()[o+4>>>2>>>0]=p.getMinutes(),C()[o+8>>>2>>>0]=p.getHours(),C()[o+12>>>2>>>0]=p.getDate(),C()[o+16>>>2>>>0]=p.getMonth(),C()[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function ga(o,p,h,$,w,I,A){return u?_e(16,1,o,p,h,$,w,I,A):-52}function _a(o,p,h,$,w,I){if(u)return _e(17,1,o,p,h,$,w,I)}var Ct={},vo=()=>performance.timeOrigin+performance.now();function $a(o,p){if(u)return _e(18,1,o,p);if(Ct[o]&&(clearTimeout(Ct[o].id),delete Ct[o]),!p)return 0;var h=setTimeout(()=>{delete Ct[o],Mr(()=>Ra(o,performance.timeOrigin+performance.now()))},p);return Ct[o]={id:h,rc:p},0}function xo(o,p,h,$){o>>>=0,p>>>=0,h>>>=0,$>>>=0;var w=new Date().getFullYear(),I=new Date(w,0,1).getTimezoneOffset();w=new Date(w,6,1).getTimezoneOffset();var A=Math.max(I,w);re()[o>>>2>>>0]=60*A,C()[p>>>2>>>0]=+(I!=w),o=(p=N=>{var P=Math.abs(N);return`UTC${0<=N?"-":"+"}${String(Math.floor(P/60)).padStart(2,"0")}${String(P%60).padStart(2,"0")}`})(I),p=p(w),w<I?(ct(o,h,17),ct(p,$,17)):(ct(o,$,17),ct(p,h,17))}var ko=()=>Date.now();function So(o,p,h){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),M[h>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var qr=[],ya=(o,p)=>{qr.length=0;for(var h;h=B()[o++>>>0];){var $=h!=105;p+=($&=h!=112)&&p%8?4:0,qr.push(h==112?re()[p>>>2>>>0]:h==106?M[p>>>3]:h==105?C()[p>>>2>>>0]:qe()[p>>>3>>>0]),p+=$?8:4}return qr};function To(o,p,h){return o>>>=0,p=ya(p>>>0,h>>>0),Tr[o](...p)}function Io(o,p,h){return o>>>=0,p=ya(p>>>0,h>>>0),Tr[o](...p)}var Eo=()=>{};function zo(o,p){return S(ke(o>>>0,p>>>0))}var Co=()=>{throw rt+=1,"unwind"};function Oo(){return 4294901760}var Ao=()=>navigator.hardwareConcurrency;function Bo(){return tt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Ro(o){o>>>=0;var p=B().length;if(o<=p||4294901760<o)return!1;for(var h=1;4>=h;h*=2){var $=p*(1+.2/h);$=Math.min($,o+100663296);e:{$=(Math.min(4294901760,65536*Math.ceil(Math.max(o,$)/65536))-x.buffer.byteLength+65535)/65536|0;try{x.grow($),ve();var w=1;break e}catch{}w=void 0}if(w)return!0}return!1}var nr=()=>(tt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ot={},ba=o=>{o.forEach(p=>{nr()})};function No(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),ba(o),Ot.Mb=nr(),Ot.dc=o,Ot.Mb}function Mo(o,p,h){if(o>>>=0,p>>>=0,Ot.Mb==o)var $=Ot.dc;else($=Error().stack.toString().split(`
`))[0]=="Error"&&$.shift(),ba($);for(var w=3;$[w]&&nr()!=o;)++w;for(o=0;o<h&&$[o+w];++o)C()[p+4*o>>>2>>>0]=nr();return o}var Wr,Vr={},wa=()=>{if(!Wr){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Vr)Vr[o]===void 0?delete p[o]:p[o]=Vr[o];var h=[];for(o in p)h.push(`${o}=${p[o]}`);Wr=h}return Wr};function va(o,p){if(u)return _e(19,1,o,p);o>>>=0,p>>>=0;var h=0;return wa().forEach(($,w)=>{var I=p+h;for(w=re()[o+4*w>>>2>>>0]=I,I=0;I<$.length;++I)ne()[w++>>>0]=$.charCodeAt(I);ne()[w>>>0]=0,h+=$.length+1}),0}function xa(o,p){if(u)return _e(20,1,o,p);o>>>=0,p>>>=0;var h=wa();re()[o>>>2>>>0]=h.length;var $=0;return h.forEach(w=>$+=w.length+1),re()[p>>>2>>>0]=$,0}function ka(o){return u?_e(21,1,o):52}function Sa(o,p,h,$){return u?_e(22,1,o,p,h,$):52}function Ta(o,p,h,$){return u?_e(23,1,o,p,h,$):70}var Do=[null,[],[]];function Ia(o,p,h,$){if(u)return _e(24,1,o,p,h,$);p>>>=0,h>>>=0,$>>>=0;for(var w=0,I=0;I<h;I++){var A=re()[p>>>2>>>0],N=re()[p+4>>>2>>>0];p+=8;for(var P=0;P<N;P++){var H=B()[A+P>>>0],ie=Do[o];H===0||H===10?((o===1?b:S)(Vi(ie)),ie.length=0):ie.push(H)}w+=N}return re()[$>>>2>>>0]=w,0}u||function(){for(var o=i.numThreads-1;o--;)Pi();Er.unshift(()=>{It++,function(p){u?p():Promise.all(it.map(Di)).then(p)}(()=>zi())})}();for(var Ea=Array(256),sr=0;256>sr;++sr)Ea[sr]=String.fromCharCode(sr);ia=Ea,at=i.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},i.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},Qe.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>Qe.length/2-5-Br.length;var Z,Po=[zr,Bi,Ui,Li,Gi,Fi,ji,Ki,Zi,Qi,Xi,Yi,Ji,ea,ta,ra,ga,_a,$a,va,xa,ka,Sa,Ta,Ia];(async function(){function o($,w){return Z=$.exports,Z=function(){var I=Z,A={};for(let[N,P]of Object.entries(I))A[N]=typeof P=="function"?(...H)=>{rr.push(N);try{return P(...H)}finally{ae||(rr.pop(),je&&st===1&&rr.length===0&&(st=0,rt+=1,tr(Ua),typeof Fibers<"u"&&Fibers.sc()))}}:P;return A}(),Z=function(){var I=Z,A=P=>H=>P(H)>>>0,N=P=>()=>P()>>>0;return(I=Object.assign({},I)).Ea=A(I.Ea),I.gb=N(I.gb),I.ib=A(I.ib),I.ub=A(I.ub),I.vb=N(I.vb),I.__cxa_get_exception_ptr=A(I.__cxa_get_exception_ptr),I}(),Ri.push(Z.jb),T=w,zi(),Z}It++;var p=Ci();if(i.instantiateWasm)return new Promise($=>{i.instantiateWasm(p,(w,I)=>{o(w,I),$(w.exports)})});if(u)return new Promise($=>{xe=w=>{var I=new WebAssembly.Instance(w,Ci());$(o(I,w))}});Tt??=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",y):y+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href,import.meta.url).href;try{var h=await async function($){var w=Tt;if(!V&&typeof WebAssembly.instantiateStreaming=="function"&&!G(w))try{var I=fetch(w,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,$)}catch(A){S(`wasm streaming compile failed: ${A}`),S("falling back to ArrayBuffer instantiation")}return async function(A,N){try{var P=await async function(H){if(!V)try{var ie=await f(H);return new Uint8Array(ie)}catch{}if(H==Tt&&V)H=new Uint8Array(V);else{if(!m)throw"both async and sync fetching of the wasm failed";H=m(H)}return H}(A);return await WebAssembly.instantiate(P,N)}catch(H){S(`failed to asynchronously prepare wasm: ${H}`),tt(H)}}(w,$)}(p);return o(h.instance,h.module)}catch($){return r($),Promise.reject($)}})();var za=o=>(za=Z.Ea)(o),Ca=()=>(Ca=Z.Fa)();i._OrtInit=(o,p)=>(i._OrtInit=Z.Ga)(o,p),i._OrtGetLastError=(o,p)=>(i._OrtGetLastError=Z.Ha)(o,p),i._OrtCreateSessionOptions=(o,p,h,$,w,I,A,N,P,H)=>(i._OrtCreateSessionOptions=Z.Ia)(o,p,h,$,w,I,A,N,P,H),i._OrtAppendExecutionProvider=(o,p,h,$,w)=>(i._OrtAppendExecutionProvider=Z.Ja)(o,p,h,$,w),i._OrtAddFreeDimensionOverride=(o,p,h)=>(i._OrtAddFreeDimensionOverride=Z.Ka)(o,p,h),i._OrtAddSessionConfigEntry=(o,p,h)=>(i._OrtAddSessionConfigEntry=Z.La)(o,p,h),i._OrtReleaseSessionOptions=o=>(i._OrtReleaseSessionOptions=Z.Ma)(o),i._OrtCreateSession=(o,p,h)=>(i._OrtCreateSession=Z.Na)(o,p,h),i._OrtReleaseSession=o=>(i._OrtReleaseSession=Z.Oa)(o),i._OrtGetInputOutputCount=(o,p,h)=>(i._OrtGetInputOutputCount=Z.Pa)(o,p,h),i._OrtGetInputOutputMetadata=(o,p,h,$)=>(i._OrtGetInputOutputMetadata=Z.Qa)(o,p,h,$),i._OrtFree=o=>(i._OrtFree=Z.Ra)(o),i._OrtCreateTensor=(o,p,h,$,w,I)=>(i._OrtCreateTensor=Z.Sa)(o,p,h,$,w,I),i._OrtGetTensorData=(o,p,h,$,w)=>(i._OrtGetTensorData=Z.Ta)(o,p,h,$,w),i._OrtReleaseTensor=o=>(i._OrtReleaseTensor=Z.Ua)(o),i._OrtCreateRunOptions=(o,p,h,$)=>(i._OrtCreateRunOptions=Z.Va)(o,p,h,$),i._OrtAddRunConfigEntry=(o,p,h)=>(i._OrtAddRunConfigEntry=Z.Wa)(o,p,h),i._OrtReleaseRunOptions=o=>(i._OrtReleaseRunOptions=Z.Xa)(o),i._OrtCreateBinding=o=>(i._OrtCreateBinding=Z.Ya)(o),i._OrtBindInput=(o,p,h)=>(i._OrtBindInput=Z.Za)(o,p,h),i._OrtBindOutput=(o,p,h,$)=>(i._OrtBindOutput=Z._a)(o,p,h,$),i._OrtClearBoundOutputs=o=>(i._OrtClearBoundOutputs=Z.$a)(o),i._OrtReleaseBinding=o=>(i._OrtReleaseBinding=Z.ab)(o),i._OrtRunWithBinding=(o,p,h,$,w)=>(i._OrtRunWithBinding=Z.bb)(o,p,h,$,w),i._OrtRun=(o,p,h,$,w,I,A,N)=>(i._OrtRun=Z.cb)(o,p,h,$,w,I,A,N),i._OrtEndProfiling=o=>(i._OrtEndProfiling=Z.db)(o),i._JsepOutput=(o,p,h)=>(i._JsepOutput=Z.eb)(o,p,h),i._JsepGetNodeName=o=>(i._JsepGetNodeName=Z.fb)(o);var or=()=>(or=Z.gb)(),Ke=i._free=o=>(Ke=i._free=Z.hb)(o),ur=i._malloc=o=>(ur=i._malloc=Z.ib)(o),Lr=(o,p,h,$,w,I)=>(Lr=Z.lb)(o,p,h,$,w,I),Oa=()=>(Oa=Z.mb)(),Aa=(o,p,h,$,w)=>(Aa=Z.nb)(o,p,h,$,w),Ba=o=>(Ba=Z.ob)(o),Gr=o=>(Gr=Z.pb)(o),Ra=(o,p)=>(Ra=Z.qb)(o,p),Na=()=>(Na=Z.rb)(),Ma=(o,p)=>(Ma=Z.sb)(o,p),lr=o=>(lr=Z.tb)(o),Hr=o=>(Hr=Z.ub)(o),Fr=()=>(Fr=Z.vb)(),Da=i.dynCall_ii=(o,p)=>(Da=i.dynCall_ii=Z.wb)(o,p),Pa=o=>(Pa=Z.xb)(o),Ua=()=>(Ua=Z.yb)(),qa=o=>(qa=Z.zb)(o),Wa=()=>(Wa=Z.Ab)();return i.stackSave=()=>Fr(),i.stackRestore=o=>lr(o),i.stackAlloc=o=>Hr(o),i.setValue=function(o,p,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":ne()[o>>>0]=p;break;case"i16":D()[o>>>1>>>0]=p;break;case"i32":C()[o>>>2>>>0]=p;break;case"i64":M[o>>>3]=BigInt(p);break;case"float":Ae()[o>>>2>>>0]=p;break;case"double":qe()[o>>>3>>>0]=p;break;case"*":re()[o>>>2>>>0]=p;break;default:tt(`invalid type for setValue: ${h}`)}},i.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return ne()[o>>>0];case"i16":return D()[o>>>1>>>0];case"i32":return C()[o>>>2>>>0];case"i64":return M[o>>>3];case"float":return Ae()[o>>>2>>>0];case"double":return qe()[o>>>3>>>0];case"*":return re()[o>>>2>>>0];default:tt(`invalid type for getValue: ${p}`)}},i.UTF8ToString=ke,i.stringToUTF8=ct,i.lengthBytesUTF8=Hi,function o(){if(0<It)Et=o;else if(u)t(i),Yt();else{for(;0<Er.length;)Er.shift()(i);0<It?Et=o:(i.calledRun=!0,ae||(Yt(),t(i)))}}(),i.PTR_SIZE=4,a}),Pw=Fu,rm=globalThis.self?.name?.startsWith("em-pthread"),rm&&Fu()}),ju,rd,im,mt,Uw,Wn,am,nm,Ku,sm,Zu,qw,Qu,Ww,Xd=ee(()=>{Qd(),ju=typeof location>"u"?void 0:location.origin,rd=import.meta.url>"file:"&&import.meta.url<"file;",im=()=>{{if(rd){let e=URL;return new URL(new e("ort.webgpu.bundle.min.mjs",import.meta.url).href,ju).href}return import.meta.url}},mt=im(),Uw=()=>{if(mt&&!mt.startsWith("blob:"))return mt.substring(0,mt.lastIndexOf("/")+1)},Wn=(e,t)=>{try{let r=t??mt;return(r?new URL(e,r):new URL(e)).origin===ju}catch{return!1}},am=(e,t)=>{let r=t??mt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},nm=(e,t)=>`${t??"./"}${e}`,Ku=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},sm=async e=>(await import(e)).default,Zu=(D3(),kn(Nw)).default,qw=async()=>{if(!mt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Wn(mt))return[void 0,Zu()];let e=await Ku(mt);return[e,Zu(e)]},Qu=(P3(),kn(Dw)).default,Ww=async(e,t,r)=>{if(!e&&!t&&Qu&&mt&&Wn(mt))return[void 0,Qu];{let i="ort-wasm-simd-threaded.jsep.mjs",a=e??am(i,t),n=r&&a&&!Wn(a,t),s=n?await Ku(a):a??nm(i,t);return[n?s:void 0,await sm(s)]}}}),Xu,Vn,en,Yu,om,um,lm,Yd,De,_i=ee(()=>{Xd(),Vn=!1,en=!1,Yu=!1,om=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},um=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},lm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Yd=async e=>{if(Vn)return Promise.resolve();if(en)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Yu)throw new Error("previous call to 'initializeWebAssembly()' failed.");en=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!lm())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!um())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=om();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,u=s?.href??s,l=a?.wasm,d=l?.href??l,c=e.wasmBinary,[f,m]=await Ww(u,n,r>1),g=!1,_=[];if(t>0&&_.push(new Promise(y=>{setTimeout(()=>{g=!0,y()},t)})),_.push(new Promise((y,k)=>{let v={numThreads:r};if(c)v.wasmBinary=c;else if(d||n)v.locateFile=b=>d??n+b;else if(u&&u.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,u).href;else if(f){let b=Uw();b&&(v.locateFile=S=>b+S)}m(v).then(b=>{en=!1,Vn=!0,Xu=b,y(),f&&URL.revokeObjectURL(f)},b=>{en=!1,Yu=!0,k(b)})})),await Promise.race(_),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},De=()=>{if(Vn&&Xu)return Xu;throw new Error("WebAssembly is not initialized yet.")}}),Lt,ds,Ne,Jd=ee(()=>{_i(),Lt=(e,t)=>{let r=De(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},ds=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")ds(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},Ne=e=>{let t=De(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Vw,U3=ee(()=>{_i(),Jd(),Vw=e=>{let t=De(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Lt(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&Ne("Can't create run options."),e?.extra!==void 0&&ds(e.extra,"",new WeakSet,(s,u)=>{let l=Lt(s,i),d=Lt(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&Ne(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),dm,pm,cm,tn,fm,Lw,q3=ee(()=>{_i(),Jd(),dm=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},pm=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},cm=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},tn=(e,t,r,i)=>{let a=Lt(t,i),n=Lt(r,i);De()._OrtAddSessionConfigEntry(e,a,n)!==0&&Ne(`Can't set a session config entry: ${t} - ${r}.`)},fm=async(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name,n=[];switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let c=i?.deviceType;c&&tn(e,"deviceType",c,r)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);tn(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=Lt(a,r),u=n.length,l=0,d=0;if(u>0){l=De()._malloc(u*De().PTR_SIZE),r.push(l),d=De()._malloc(u*De().PTR_SIZE),r.push(d);for(let c=0;c<u;c++)De().setValue(l+c*De().PTR_SIZE,n[c][0],"*"),De().setValue(d+c*De().PTR_SIZE,n[c][1],"*")}await De()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&Ne(`Can't append execution provider: ${a}.`)}},Lw=async e=>{let t=De(),r=0,i=[],a=e||{};cm(a);try{let n=dm(a.graphOptimizationLevel??"all"),s=pm(a.executionMode??"sequential"),u=typeof a.logId=="string"?Lt(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof a.optimizedModelFilePath=="string"?Lt(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,d,c),r===0&&Ne("Can't create session options."),a.executionProviders&&await fm(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);tn(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[f,m]of Object.entries(a.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let g=Lt(f,i);t._OrtAddFreeDimensionOverride(r,g,m)!==0&&Ne(`Can't set a free dimension override: ${f} - ${m}.`)}return a.extra!==void 0&&ds(a.extra,"",new WeakSet,(f,m)=>{tn(r,f,m,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Ne("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),ni,fr,si,$s,ps,ep,tp,id,me=ee(()=>{ni=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},fr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},si=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},$s=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ps=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ep=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",tp=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",id=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),rp,Gw=ee(()=>{Qd(),rp=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),hm,mm,gm,_m,ip,$m,Te,mr=ee(()=>{me(),hm=["V","I","W","E","F"],mm=(e,t)=>{console.log(`[${hm[e]},${new Date().toISOString()}]${t}`)},ip=(e,t)=>{gm=e,_m=t},$m=(e,t)=>{let r=ps(e),i=ps(gm);r>=i&&mm(r,typeof t=="function"?t():t)},Te=(...e)=>{_m&&$m(...e)}}),ym,Si,W,cs,Hw,Fw,jw,ye=ee(()=>{ym=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Si=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=ym.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],d=a-u<0?1:t[a-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-u]=Math.max(l,d);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},W=class ts{static size(t){return ts.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ts.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ts.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},cs=class gn{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)gn.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return gn.computeShapeHelper(t,r,l,i,a,n,s,u),l}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return gn.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(gn.adjustPadAndReturnShape(r[d+2],a[d],n[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l){let d=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),n[u]=c-n[s],Math.floor((t+c-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-d)/r+1)}},Hw=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Si.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},Fw=-34028234663852886e22,jw=34028234663852886e22}),ap,Kw=ee(()=>{me(),ap=(e,t)=>new($s(t))(e)}),Ju,ad,el,bm,tl,wm,rl,il,al,vm,Zw,W3=ee(()=>{me(),mr(),Ju=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ad=(e,t)=>{if(t==="int32")return e;let r=Ju.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new($s(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},el=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},bm=1,tl=()=>bm++,wm=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),rl=(e,t)=>{let r=Ju.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},il=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return rl(this.dataType,this.tensorShape)}destroy(){Te("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=el(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},al=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(n=wm.get(t),!n||!a.opSupportLimits().input.dataTypes.includes(n))throw new Error(`WebNN backend does not support data type: ${t}`);Te("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==rl(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=ad(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Te("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?el(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},vm=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=tl();return this.tensorTrackersById.set(e,new al(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){Te("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Te("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=tl(),s=new il({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new al(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){Te("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}Te("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new il({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Zw=(...e)=>new vm(...e)}),rn,xm,Qw,V3=ee(()=>{me(),_i(),Kw(),W3(),mr(),rn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),xm=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},Qw=class{constructor(e){this.tensorManager=Zw(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,ip(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Te("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Te("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Te("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>xm(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Te("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=rn.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){Te("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=rn.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!De().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Te("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return ap(r,t)}}registerMLTensor(e,t,r,i){let a=rn.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return Te("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=n.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let f=ad(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),a.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return Te("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=this.mlContextBySessionId.get(e),a=rn.get(ni(t));return typeof a>"u"?!1:r?!!i?.opSupportLimits().input.dataTypes.includes(a):!!i?.opSupportLimits().output.dataTypes.includes(a)}flush(){}}}),np=ee(()=>{}),nl,Ln,Gn,km,Sm,sl,nd,Tm,Xw,L3=ee(()=>{mr(),np(),nl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ln=[],Gn=e=>Math.ceil(Number(e)/16)*16,km=e=>{for(let t=0;t<Ln.length;t++){let r=Ln[t];if(e<=r)return r}return Math.ceil(e/16)*16},Sm=1,sl=()=>Sm++,nd=async(e,t,r,i)=>{let a=Gn(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},Tm=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of nl)Ln.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Gn(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),u.destroy(),Te("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Gn(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return Te("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=sl();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Te("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Te("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=km(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:sl(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Te("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Te("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await nd(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=nl.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Te("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Xw=(...e)=>new Tm(...e)}),Im,Oe,He=ee(()=>{Im=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Oe=e=>new Im(e)}),Ti,Hn,Ye,ut,ce,Le,sd,vi,xr,de,an,j,ue,Yw,sp,Em,Jw,we=ee(()=>{me(),ye(),Ti=64,Hn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ye=(e,t=1)=>{let r=Hn(e,t);return typeof r=="string"?r:r[0]},ut=(e,t=1)=>{let r=Hn(e,t);return typeof r=="string"?r:r[1]},ce=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:W.computeStrides(r)})}),t},Le=e=>e%4===0?4:e%2===0?2:1,sd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,vi=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,xr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,de=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,an=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Hn(t,a),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],m={indices:l,value:c,storage:f,tensor:t},g=B=>typeof B=="string"?B:`${B}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",k=`${y}${e}_shape`,v=`${y}${e}_strides`,b="";for(let B=0;B<s-1;B++)b+=`
    let dim${B} = current / ${de(v,B,s)};
    let rest${B} = current % ${de(v,B,s)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;b+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${b}
    return indices;
  }`,x=B=>(_.offsetToIndices=!0,s<2?B:`o2i_${e}(${B})`),T=[];if(s>=2)for(let B=s-1;B>=0;B--)T.push(`${de(v,B,s)} * (indices[${B}])`);let z=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${T.join("+")};
  }`,E=B=>(_.indicesToOffset=!0,s<2?B:`i2o_${e}(${B})`),O=(...B)=>s===0?"0u":`${m.indices}(${B.map(g).join(",")})`,R=(B,D)=>s<2?`${B}`:`${de(B,D,s)}`,U=(B,D,Y)=>s<2?`${B}=${Y};`:`${de(B,D,s)}=${Y};`,Q={},L=(B,D)=>{_.broadcastedIndicesToOffset=!0;let Y=`${D.name}broadcastedIndicesTo${e}Offset`;if(Y in Q)return`${Y}(${B})`;let C=[];for(let re=s-1;re>=0;re--){let Ae=D.indicesGet("outputIndices",re+D.rank-s);C.push(`${R(v,re)} * (${Ae} % ${R(k,re)})`)}return Q[Y]=`fn ${Y}(outputIndices: ${D.type.indices}) -> u32 {
             return ${C.length>0?C.join("+"):"0u"};
           }`,`${Y}(${B})`},X=(B,D)=>(()=>{if(m.storage===m.value)return`${e}[${B}]=${D};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${B}]=vec2<u32>(u32(${D}), select(0u, 0xFFFFFFFFu, ${D} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${B}]=vec2<u32>(u32(${D}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${D}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),M=B=>(()=>{if(m.storage===m.value)return`${e}[${B}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${B}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${B}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${B}] & 0xFFu), bool(${e}[${B}] & 0xFF00u), bool(${e}[${B}] & 0xFF0000u), bool(${e}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),te=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${c} {
    return ${M(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let B=u.map(Y=>`d${Y}: u32`).join(", "),D=u.map(Y=>`d${Y}`).join(", ");return`
  fn get_${e}(${B}) -> ${c} {
    return get_${e}ByIndices(${O(D)});
  }`})(),V=(...B)=>{if(B.length!==s)throw new Error(`indices length must be ${s}`);let D=B.map(g).join(",");return s===0?M("0u"):s===1?M(D[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${D})`)},ae=B=>s<2?M(B):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${B})`),G=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${c}) {
    ${X(`i2o_${e}(indices)`,"value")}
  }`,ne=s<2?"":(()=>{let B=u.map(Y=>`d${Y}: u32`).join(", "),D=u.map(Y=>`d${Y}`).join(", ");return`
  fn set_${e}(${B}, value: ${c}) {
    set_${e}ByIndices(${O(D)}, value);
  }`})();return{impl:()=>{let B=[],D=!1;return _.offsetToIndices&&(B.push(S),D=!0),_.indicesToOffset&&(B.push(z),D=!0),_.broadcastedIndicesToOffset&&(Object.values(Q).forEach(Y=>B.push(Y)),D=!0),_.set&&(B.push(ne),D=!0),_.setByIndices&&(B.push(G),D=!0),_.get&&(B.push(K),D=!0),_.getByIndices&&(B.push(te),D=!0),!n&&D&&B.unshift(`const ${k} = ${m.indices}(${r.join(",")});`,`const ${v} = ${m.indices}(${W.computeStrides(r).join(",")});`),B.join(`
`)},type:m,offsetToIndices:x,indicesToOffset:E,broadcastedIndicesToOffset:L,indices:O,indicesGet:R,indicesSet:U,set:(...B)=>{if(B.length!==s+1)throw new Error(`indices length must be ${s}`);let D=B[s];if(typeof D!="string")throw new Error("value must be string");let Y=B.slice(0,s).map(g).join(",");return s===0?X("0u",D):s===1?X(Y[0],D):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Y}, ${D})`)},setByOffset:X,setByIndices:(B,D)=>s<2?X(B,D):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${B}, ${D});`),get:V,getByOffset:M,getByIndices:ae,usage:i,name:e,strides:v,shape:k,rank:s}},j=(e,t,r,i=1)=>an(e,t,r,"input",i),ue=(e,t,r,i=1)=>an(e,t,r,"output",i),Yw=(e,t,r)=>an(e,t,r,"atomicOutput",1),sp=(e,t,r,i=1)=>an(e,t,r,"internal",i),Em=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ti){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Jw=(e,t)=>new Em(e,t)}),zm,ol,Cm,Om,Am,Bm,yt,e1,t1,Sr=ee(()=>{me(),ye(),He(),we(),zm=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ol=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Cm=(e,t)=>W.sortBasedOnPerm(e,ol(e.length,t)),Om=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},Am=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Bm=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},yt=(e,t)=>{let r=e.dataType,i=e.dims.length,a=ol(i,t),n=Cm(e.dims,a),s=e.dims,u=n,l=i<2||Bm(a,e.dims),d;if(l)return d=_=>{let y=j("input",r,s,4),k=ue("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,k)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=W.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=Am(e.dims,a),m=W.areEqual(f,[2,3,1]),g=W.areEqual(f,[3,1,2]);if(c.length===2||m||g){s=m?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let _=16;return d=y=>{let k=j("a",r,s.length),v=ue("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(k,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${y.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=W.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:y},...ce(s,u)]}},getShaderSource:d}}return d=_=>{let y=j("a",r,s.length),k=ue("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,k)}

  ${Om(a,i,y,k)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=W.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ce(s,u)]}},getShaderSource:d}},e1=(e,t)=>{zm(e.inputs,t.perm),e.compute(yt(e.inputs[0],t.perm))},t1=e=>Oe({perm:e.perm})}),Rm,Nm,Mm,Dm,Pm,Um,qm,Wm,Vm,Lm,Dt,r1,i1,a1,n1,s1,o1,u1,l1,d1,p1,G3=ee(()=>{me(),ye(),we(),op(),Sr(),Rm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Nm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Mm={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Dm={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Pm=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Um=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},qm=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Wm=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Vm=(e,t)=>{let r=[];if(!Wm(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Lm=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=W.size(n),d=W.size(s),c=j("_A",r[0].dataType,u),f=ue("output",a,n),m=64;l===1&&(m=256);let g=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,_=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Mm[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Rm[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Nm[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Dm[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Dt=(e,t,r,i)=>{let a=e.inputs.length===1?r:od(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((g,_)=>_));let s=W.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=Vm(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(yt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Pm(u.length,l.dims.length));let[c,f]=Um(l.dims,u),m=c;a.keepDims&&(m=qm(c,s)),e.compute(Lm(t,a.cacheKey,[l],i,e.inputs[0].dataType,m,f),{inputs:[l]})},r1=(e,t)=>{Dt(e,"ReduceMeanShared",t,"mean")},i1=(e,t)=>{Dt(e,"ReduceL1Shared",t,"l1")},a1=(e,t)=>{Dt(e,"ReduceL2Shared",t,"l2")},n1=(e,t)=>{Dt(e,"ReduceLogSumExpShared",t,"logSumExp")},s1=(e,t)=>{Dt(e,"ReduceMaxShared",t,"max")},o1=(e,t)=>{Dt(e,"ReduceMinShared",t,"min")},u1=(e,t)=>{Dt(e,"ReduceProdShared",t,"prod")},l1=(e,t)=>{Dt(e,"ReduceSumShared",t,"sum")},d1=(e,t)=>{Dt(e,"ReduceSumSquareShared",t,"sumSquare")},p1=(e,t)=>{Dt(e,"ReduceLogSumShared",t,"logSum")}}),Pt,Gm,fs,od,Ut,Hm,Fm,jm,Km,Zm,Qm,Xm,Ym,Jm,eg,qt,c1,f1,h1,m1,g1,_1,$1,y1,b1,w1,op=ee(()=>{me(),ye(),He(),we(),G3(),Pt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Gm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],fs=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,f=W.normalizeAxes(a,c),m=!u&&f.length===0;d.forEach((y,k)=>{m||f.indexOf(k)>=0?s&&l.push(1):l.push(y)});let g=l.length,_=W.size(l);return{name:e,shaderCache:t,getShaderSource:y=>{let k=[],v=j("_A",r[0].dataType,c),b=ue("output",n,g),S=i(v,b,f),x=S[2];for(let T=0,z=0;T<c;T++)m||f.indexOf(T)>=0?(s&&z++,x=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${S[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${v.indicesSet("input_indices",T,`j${T}`)}
                  ${x}
                }`):(k.push(`${v.indicesSet("input_indices",T,b.indicesGet("output_indices",z))};`),z++);return`

        ${y.registerUniform("output_size","u32").declareVariables(v,b)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${x}
          ${S[3]}
          ${S.length===4?b.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ce(d,l)]})}},od=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),Oe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ut=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:od(a,r);e.compute(fs(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Gm:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Hm=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Fm=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},jm=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Km=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Zm=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Qm=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},Xm=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Ym=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Jm=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},eg=(e,t)=>{Pt(e.inputs),Ut(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},qt=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},c1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qm(e,t):r1(e,t)},f1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fm(e,t):i1(e,t)},h1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jm(e,t):a1(e,t)},m1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Km(e,t):n1(e,t)},g1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zm(e,t):s1(e,t)},_1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xm(e,t):o1(e,t)},$1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ym(e,t):u1(e,t)},y1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jm(e,t):l1(e,t)},b1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eg(e,t):d1(e,t)},w1=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hm(e,t):p1(e,t)}}),ul,v1,x1,ud,H3=ee(()=>{me(),He(),op(),ul=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},v1=(e,t)=>{ul(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(fs("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},x1=(e,t)=>{ul(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(fs("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ud=e=>Oe(e)}),tg,Fn,rg,ig,ag,Tn,ng,k1,up=ee(()=>{me(),ye(),np(),we(),tg=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=a.dims[0]/3,m=f,g=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let _=d;if(f!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==f+m+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(m!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let k=_+y,v=-1,b=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:k,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:g,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Fn=(e,t,r)=>t&&e?`
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
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,rg=(e,t,r,i,a,n,s,u)=>{let l=Le(s?1:n),d=64,c=n/l;c<d&&(d=32);let f=Math.ceil(n/l/d),m=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:f}],g=Ye(e.dataType,l),_=ut(1,l),y=["type"];s&&y.push("type"),u&&y.push("type");let k=v=>{let b=ue("x",e.dataType,e.dims,l),S=[b],x=s?j("seq_lens",s.dataType,s.dims):void 0;x&&S.push(x);let T=u?j("total_sequence_length_input",u.dataType,u.dims):void 0;T&&S.push(T);let z=ut(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(E).declareVariables(...S)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Fn(x,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${g};${l}`,inputDependencies:y},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:m})}},ig=(e,t,r,i,a,n,s,u,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],f=e>1&&i,m=n.kvNumHeads?n.kvNumHeads:n.numHeads,g=f?[n.batchSize,m,d,n.headSize]:void 0,_=n.nReps?n.nReps:1,y=n.scale===0?1/Math.sqrt(n.headSize):n.scale,k=Le(n.headSize),v=n.headSize/k,b=12,S={x:Math.ceil(d/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},x=[{type:12,data:n.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:_}],T=f&&i&&W.size(i.dims)>0,z=["type","type"];T&&z.push("type"),a&&z.push("type"),u&&z.push("type"),l&&z.push("type");let E=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&E.push({dims:g,dataType:t.dataType,gpuDataType:0});let O=R=>{let U=j("q",t.dataType,t.dims,k),Q=j("key",r.dataType,r.dims,k),L=[U,Q];if(T){let G=j("past_key",i.dataType,i.dims,k);L.push(G)}a&&L.push(j("attention_bias",a.dataType,a.dims));let X=u?j("seq_lens",u.dataType,u.dims):void 0;X&&L.push(X);let M=l?j("total_sequence_length_input",l.dataType,l.dims):void 0;M&&L.push(M);let te=ue("output",t.dataType,c),K=[te];f&&K.push(ue("present_key",t.dataType,g,k));let V=ut(1,k),ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${U.type.storage}, ${b*b}>;
  ${R.registerUniforms(ae).declareVariables(...L,...K)}
  ${R.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Fn(X,M,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${V}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${V}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${te.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${a!==void 0};${i!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:E,dispatchGroup:S,programUniforms:x}),getShaderSource:O}},ag=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,d=a.nReps?a.nReps:1,c=a.vHiddenSize*d,f=e>1&&i,m=a.kvNumHeads?a.kvNumHeads:a.numHeads,g=f?[a.batchSize,m,l,a.headSize]:void 0,_=[a.batchSize,a.sequenceLength,c],y=12,k={x:Math.ceil(a.vHeadSize/y),y:Math.ceil(a.sequenceLength/y),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:d}],b=f&&i&&W.size(i.dims)>0,S=["type","type"];b&&S.push("type"),s&&S.push("type"),u&&S.push("type");let x=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&x.push({dims:g,dataType:t.dataType,gpuDataType:0});let T=z=>{let E=j("probs",t.dataType,t.dims),O=j("v",r.dataType,r.dims),R=[E,O];b&&R.push(j("past_value",i.dataType,i.dims));let U=s?j("seq_lens",s.dataType,s.dims):void 0;s&&R.push(U);let Q=u?j("total_sequence_length_input",u.dataType,u.dims):void 0;u&&R.push(Q);let L=[ue("output",t.dataType,_)];f&&L.push(ue("present_value",t.dataType,g));let X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${E.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${E.type.value}, ${y*y}>;
  ${z.registerUniforms(X).declareVariables(...R,...L)}
  ${z.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Fn(U,Q,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:x,dispatchGroup:k,programUniforms:v}),getShaderSource:T}},Tn=(e,t,r,i,a,n,s,u,l,d,c=void 0,f=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),g=m>1?d.pastSequenceLength:0,_=g+d.kvSequenceLength,y=l&&W.size(l.dims)>0?l:void 0,k=[t,r];m>1&&s&&W.size(s.dims)>0&&k.push(s),y&&k.push(y),c&&k.push(c),f&&k.push(f);let v=e.compute(ig(m,t,r,s,y,d,g,c,f),{inputs:k,outputs:m>1?[-1,1]:[-1]})[0];e.compute(rg(v,d.batchSize,d.numHeads,g,d.sequenceLength,_,c,f),{inputs:c&&f?[v,c,f]:[v],outputs:[]});let b=[v,i];m>1&&u&&W.size(u.dims)>0&&b.push(u),c&&b.push(c),f&&b.push(f),e.compute(ag(m,v,i,u,d,g,c,f),{inputs:b,outputs:m>1?[0,2]:[0]})},ng=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let m=ue("output_q",l[0].dataType,r),g=ue("output_k",l[0].dataType,r),_=ue("output_v",l[0].dataType,r),y=j("input",l[0].dataType,l[0].dims),k=j("weight",l[1].dataType,l[1].dims),v=j("bias",l[2].dataType,l[2].dims),b=y.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${f.registerUniforms(S).declareVariables(y,k,v,m,g,_)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},k1=(e,t)=>{let r=tg(e.inputs,t),[i,a,n]=ng(e,r);return Tn(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),sg,og,ug,S1,F3=ee(()=>{Zt(),me(),ye(),He(),we(),sg=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},og=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?Le(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=W.size(n)/s,d=i,c=d?n.length:n,f=j("x",e[0].dataType,e[0].dims,s),m=j("scale",e[1].dataType,e[1].dims,u),g=j("bias",e[2].dataType,e[2].dims,u),_=j("inputMean",e[3].dataType,e[3].dims,u),y=j("inputVar",e[4].dataType,e[4].dims,u),k=ue("y",e[0].dataType,c,s),v=()=>{let S="";if(i)S=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")S=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let x=1;x<m.rank;x++)S+=`cIndices[${x}] = outputIndices[${x}];`;S+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return S},b=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(f,m,g,_,y,k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ce(n)]:[{type:12,data:l}]})}},ug=e=>Oe(e),S1=(e,t)=>{let{inputs:r,outputCount:i}=e,a=ug({...t,outputCount:i});if(Ue.webgpu.validateInputContent&&sg(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(og(r,a))}}),lg,dg,T1,j3=ee(()=>{ye(),we(),lg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},dg=e=>{let t=e[0].dims,r=e[0].dims[2],i=W.size(t)/4,a=e[0].dataType,n=j("input",a,t,4),s=j("bias",a,[r],4),u=j("residual",a,t,4),l=ue("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},T1=e=>{lg(e.inputs),e.compute(dg(e.inputs))}}),pg,ze,I1,E1,z1,C1,O1,A1,B1,R1,N1,cg,M1,D1,P1,U1,_n,q1,rs,W1,V1,L1,G1,H1,F1,j1,K1,Z1,Q1,X1,Y1,J1,e2,t2,r2,ll,i2,ld,dd,a2,n2,s2,fg,hg,o2,lp=ee(()=>{me(),ye(),He(),we(),pg=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=j("inputData",r,[u],4),c=ue("outputData",i,[u],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ze=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(W.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>pg(d,W.size(e.dims),e.dataType,n,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(W.size(d[0].dims)/64/4)},programUniforms:l})}},I1=e=>{e.compute(ze(e.inputs[0],"Abs","abs"))},E1=e=>{e.compute(ze(e.inputs[0],"Acos","acos"))},z1=e=>{e.compute(ze(e.inputs[0],"Acosh","acosh"))},C1=e=>{e.compute(ze(e.inputs[0],"Asin","asin"))},O1=e=>{e.compute(ze(e.inputs[0],"Asinh","asinh"))},A1=e=>{e.compute(ze(e.inputs[0],"Atan","atan"))},B1=e=>{e.compute(ze(e.inputs[0],"Atanh","atanh"))},R1=e=>Oe(e),N1=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ze(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},cg=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Oe({min:t,max:r})},M1=(e,t)=>{let r=t||cg(e.inputs),i=ut(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},D1=e=>{e.compute(ze(e.inputs[0],"Ceil","ceil"))},P1=e=>{e.compute(ze(e.inputs[0],"Cos","cos"))},U1=e=>{e.compute(ze(e.inputs[0],"Cosh","cosh"))},_n=e=>Oe(e),q1=(e,t)=>{let r=ut(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},rs=(e="f32")=>`
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
}`,W1=e=>{let t=ut(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,rs(t)))},V1=e=>{e.compute(ze(e.inputs[0],"Exp","exp"))},L1=e=>{e.compute(ze(e.inputs[0],"Floor","floor"))},G1=e=>{let t=ut(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,rs(t)))},H1=(e,t)=>{let r=ut(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},F1=e=>{e.compute(ze(e.inputs[0],"Not",t=>`!${t}`))},j1=e=>{e.compute(ze(e.inputs[0],"Neg",t=>`-${t}`))},K1=e=>{e.compute(ze(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Z1=e=>{let t=ut(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Q1=e=>{e.compute(ze(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},X1=e=>Oe(e),Y1=(e,t)=>{let r=ut(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},J1=e=>{e.compute(ze(e.inputs[0],"Sin","sin"))},e2=e=>{e.compute(ze(e.inputs[0],"Sinh","sinh"))},t2=e=>{e.compute(ze(e.inputs[0],"Sqrt","sqrt"))},r2=e=>{e.compute(ze(e.inputs[0],"Tan","tan"))},ll=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,i2=e=>{e.compute(ze(e.inputs[0],"Tanh",ll))},ld=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ll("v")};
}
`,dd=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,a2=e=>{let t=ut(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"FastGelu",dd,ld(t),void 0,e.inputs[0].dataType))},n2=(e,t)=>{let r=ut(e.inputs[0].dataType);return e.compute(ze(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},s2=e=>{e.compute(ze(e.inputs[0],"Log","log"))},fg=(e,t)=>`
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
`,hg=e=>`quick_gelu_impl(${e})`,o2=(e,t)=>{let r=ut(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"QuickGelu",hg,fg(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),mg,gg,u2,K3=ee(()=>{ye(),we(),lp(),mg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},gg=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=j("input",e[0].dataType,e[0].dims,4),i=j("bias",e[0].dataType,[e[0].dims[2]],4),a=ue("output",e[0].dataType,t,4),n=W.size(t)/4,s=Ye(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${rs(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},u2=e=>{mg(e.inputs),e.compute(gg(e.inputs))}}),_g,$g,Wt,l2,d2,p2,c2,f2,h2,m2,g2,_2,$2,Z3=ee(()=>{me(),ye(),we(),_g=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let m,g;typeof u=="string"?m=g=(b,S)=>`${u}((${b}),(${S}))`:typeof u=="function"?m=g=u:(m=u.scalar,g=u.vector);let _=ue("outputData",c,i.length,4),y=j("aData",l,t.length,4),k=j("bData",d,r.length,4),v;if(a)if(n){let b=W.size(t)===1,S=W.size(r)===1,x=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;b||S?v=_.setByOffset("global_idx",g(b?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),S?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",g(s||x?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",g(y.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(S,x,T="")=>{let z=`aData[indexA${x}][componentA${x}]`,E=`bData[indexB${x}][componentB${x}]`;return`
            let outputIndices${x} = ${_.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offsetA${x} = ${y.broadcastedIndicesToOffset(`outputIndices${x}`,_)};
            let offsetB${x} = ${k.broadcastedIndicesToOffset(`outputIndices${x}`,_)};
            let indexA${x} = offsetA${x} / 4u;
            let indexB${x} = offsetB${x} / 4u;
            let componentA${x} = offsetA${x} % 4u;
            let componentB${x} = offsetB${x} % 4u;
            ${S}[${x}] = ${T}(${m(z,E)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,k,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},$g=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(y=>Number(y)??1),l=i.dims.map(y=>Number(y)??1),d=!W.areEqual(u,l),c=u,f=W.size(u),m=!1,g=!1,_=[d];if(d){let y=Si.calcShape(u,l,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),f=W.size(c);let k=W.size(u)===1,v=W.size(l)===1,b=u.length>0&&u[u.length-1]%4===0,S=l.length>0&&l[l.length-1]%4===0;_.push(k),_.push(v),_.push(b),_.push(S);let x=1;for(let T=1;T<c.length;T++){let z=u[u.length-T],E=l[l.length-T];if(z===E)x*=z;else break}x%4===0?(g=!0,m=!0):(k||v||b||S)&&(m=!0)}else m=!0;return _.push(m),{name:e,shaderCache:{hint:t+_.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>_g(y,u,l,c,m,d,g,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(W.size(c)/4)},...ce(u,l,c)]})}},Wt=(e,t,r,i,a,n)=>{e.compute($g(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},l2=e=>{Wt(e,"Add",(t,r)=>`${t}+${r}`)},d2=e=>{Wt(e,"Div",(t,r)=>`${t}/${r}`)},p2=e=>{Wt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},c2=e=>{Wt(e,"Mul",(t,r)=>`${t}*${r}`)},f2=e=>{let t=j("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Wt(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},h2=e=>{Wt(e,"Sub",(t,r)=>`${t}-${r}`)},m2=e=>{Wt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},g2=e=>{Wt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},_2=e=>{Wt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},$2=e=>{Wt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),yg,bg,wg,vg,y2,b2,Q3=ee(()=>{me(),ye(),He(),we(),yg=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},bg=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,wg=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},vg=(e,t,r,i)=>{let a=W.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:a}];for(let y=0;y<e.length;++y)u+=e[y].dims[t],n[y]=u,d.push(e[y].dims.length),s[y]=j(`input${y}`,i,d[y]),l.push("rank"),c.push({type:12,data:n[y]});for(let y=0;y<e.length;++y)c.push(...ce(e[y].dims));c.push(...ce(r));let f=ue("output",i,r.length),m=f.indicesGet("indices",t),g=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),_=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)y.registerUniform(`sizeInConcatAxis${k}`,"u32");return y.declareVariables(...s,f)})()}

  ${bg(n.length,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${g});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${wg(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:_}},y2=(e,t)=>{let r=e.inputs,i=r[0].dims,a=W.normalizeAxis(t.axis,i.length);yg(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>W.size(u.dims)>0);e.compute(vg(s,a,n,r[0].dataType),{inputs:s})},b2=e=>Oe({axis:e.axis})}),ci,fi,hi,dp,$i=ee(()=>{me(),ye(),ci=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},fi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},hi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},dp=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Fw,jw];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),et,w2,pp=ee(()=>{et=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},w2=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),v2,X3=ee(()=>{v2=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),bn,cp,fp=ee(()=>{me(),ye(),we(),$i(),bn=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${de(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,de(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},cp=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],f=Le(d),m=Le(c),g=Le(l),_=W.size(r)/f/g,y=e.length>2,k=i?i.slice(0,-2):r.slice(0,-2),v=[W.size(k),l,d],b=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];fi(t,b),b.push(...ce(k,s,u)),y&&b.push(...ce(e[2].dims)),b.push(...ce(v));let S=x=>{let T=sp("batch_dims",e[0].dataType,k.length),z=j("a",e[0].dataType,s.length,m),E=j("b",e[1].dataType,u.length,f),O=ue("output",e[0].dataType,v.length,f),R=Ye(O.type.tensor),U=ci(t,O.type.value,R),Q=[z,E],L="";if(y){let te=a?f:1;Q.push(j("bias",e[2].dataType,e[2].dims.length,te)),L=`${a?`value += bias[col / ${te}];`:`value += ${O.type.value}(bias[row + i]);`}`}let X=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];hi(t,X);let M=()=>{let te=`var a_data: ${z.type.value};`;for(let K=0;K<m;K++)te+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${f}];`;for(let K=0;K<g;K++){te+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${m}];`;for(let V=0;V<m;V++)te+=`
            values[${K}] = fma(${E.type.value}(a_data${m===1?"":`[${V}]`}), b_data${V}, values[${K}]);
`}return te};return`
  ${x.registerUniforms(X).registerInternalVariables(T).declareVariables(...Q,O)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${bn("a_indices",z,z.rank-2,T.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${bn("b_indices",E,E.rank-2,T.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${O.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${M()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${L}
      ${U}
      let cur_indices = ${O.type.indices}(batch, row + i, col);
      let offset = ${O.indicesToOffset("cur_indices")};
      ${O.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${m};${g};${a}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:S}}}),xg,kg,pd,dl,Sg,cd,Tg,hs,hp=ee(()=>{me(),ye(),we(),$i(),fp(),pp(),xg=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,kg=(e,t)=>e?`
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
        }`,pd=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=a?l:n,f=a?n:l,m=c/t[0],g=n/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${c/m}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${xg(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${kg(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},dl=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Sg=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",cd=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=a?d:n,m=a?n:d;if(!(m%t[1]===0&&f%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let g=m/t[1],_=f/t[0],y=n/t[1],k=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${dl(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
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
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${dl(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Sg(a)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},Tg=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,d=Ye(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${et(e,d)} {
      var value = ${et(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${bn("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${et(e,d)} {
      var value = ${et(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${bn("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${et(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${et(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},hs=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),f=W.size(c),m=s[s.length-2],g=s[s.length-1],_=u[u.length-1],y=g%4===0&&_%4===0,k=m<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil(_/v[0]/k[0]),Math.ceil(m/v[1]/k[1]),Math.ceil(f/v[2]/k[2])],S=y?4:1,x=[...l,m,g/S],T=x.length,z=[...d,g,_/S],E=z.length,O=[f,m,_/S],R=[{type:6,data:m},{type:6,data:_},{type:6,data:g}];fi(t,R),R.push(...ce(c,x,z));let U=["rank","rank"],Q=e.length>2;Q&&(R.push(...ce(e[2].dims)),U.push("rank")),R.push(...ce(O));let L=X=>{let M=c.length,te=sp("batchDims",e[0].dataType,M,1),K=Ye(e[0].dataType),V=j("a",e[0].dataType,T,S),ae=j("b",e[1].dataType,E,S),G=ue("result",e[0].dataType,O.length,S),ne=[V,ae];if(Q){let re=a?S:1;ne.push(j("bias",e[2].dataType,e[2].dims.length,re))}let B=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];hi(t,B);let D=Ye(G.type.tensor),Y=ci(t,G.type.value,D),C=Tg(S,Q,Y,[te,V,ae,G],a);return`
  ${X.registerUniforms(B).registerInternalVariables(te).declareVariables(...ne,G)}
  ${C}
  ${y?pd(k,v,K,te):cd(k,v,K,te)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${y};${a}`,inputDependencies:U},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:R}),getShaderSource:L}}}),Ig,x2,Y3=ee(()=>{me(),mr(),we(),$i(),pp(),X3(),hp(),Ig=(e,t,r,i,a=!1,n,s=4,u=4,l=4,d="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
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
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${et(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${y}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,S=e?t&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${et(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${et(s,d)}(0.0);`,x=e?i&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${et(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${et(u,d)}(0.0);`,T=et(l,d),z=et(e?s:u,d),E=et(e?u:s,d),O=ci(n,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?S:x}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?x:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${w2(a)}
      ${O}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},x2=(e,t,r,i,a,n,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],m=d?r[2]:r[3],g=d?r[1]:r[2],_=d?r[3]:r[1],y=d&&(c%4===0||c%3===0)&&_%4===0,k=d?_:m*g,v=d?m*g:_,b=[8,8,1],S=i<=8?[4,1,1]:[4,4,1],x=[Math.ceil(k/b[0]/S[0]),Math.ceil(v/b[1]/S[1]),Math.ceil(f/b[2]/S[2])];Te("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${x}`);let T=y?d&&c%4!==0?3:4:1,z=b[1]*S[1],E=b[0]*S[0],O=Math.max(b[0]*T,b[1]),R=i%z===0,U=a%E===0,Q=n%O===0,L=y?[T,4,4]:[1,1,1],X=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];fi(t,X),X.push(...ce(e[0].dims,e[1].dims));let M=["rank","rank"];s&&(X.push(...ce(e[2].dims)),M.push("rank")),X.push(...ce(r));let te=K=>{let V=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];hi(t,V);let ae=y?4:1,G=Ye(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${G}>`:G}) {
        result[flatIndex] = ${y?`vec4<${G}>`:G}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${G}>`:G}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,B=j("x",e[0].dataType,e[0].dims.length,T===3?1:T),D=j("w",e[1].dataType,e[1].dims.length,ae),Y=[B,D],C=ue("result",e[0].dataType,r.length,ae);if(s){let re=j("bias",e[2].dataType,e[2].dims.length,ae);Y.push(re),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${G}>`:G} {
          return bias[coords.${d?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${v2("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(V).declareVariables(...Y,C)}
        ${ne}
        ${Ig(d,R,U,Q,s,t,L[0],L[1],L[2],G)}
        ${y?pd(S,b,G,void 0,!d,O):cd(S,b,G,void 0,!d,O,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${y};${R};${U};${Q};${z};${E};${O}`,inputDependencies:M},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:X}),getShaderSource:te}}}),Eg,pl,nn,zg,cl,Cg,k2,S2,J3=ee(()=>{me(),mr(),ye(),we(),$i(),pp(),Eg=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},pl=e=>typeof e=="number"?[e,e,e]:e,nn=(e,t)=>t<=1?e:e+(e-1)*(t-1),zg=(e,t,r,i=1)=>{let a=nn(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},cl=(e,t,r,i,a)=>{a==null&&(a=zg(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Cg=(e,t,r,i,a,n,s,u,l,d)=>{let c,f,m,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=cl([t,r,i,1],[u,l,d],1,[a,n,s],e);f=_[0],m=_[1],g=_[2]}else if(Array.isArray(e)){if(!e.every((y,k,v)=>y===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=cl([t,r,i,1],[u,l,d],1,[a,n,s],e[0]);f=_[0],m=_[1],g=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/a),m=Math.ceil(r/n),g=Math.ceil(i/s);let _=(f-1)*a+u-t,y=(m-1)*n+l-r,k=(g-1)*s+d-i,v=Math.floor(_/2),b=_-v,S=Math.floor(y/2),x=y-S,T=Math.floor(k/2),z=k-T;c={top:S,bottom:x,left:T,right:z,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:m,outWidth:g}},k2=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,d,c,f;if(s==="channelsLast")[u,l,d,c,f]=e;else if(s==="channelsFirst")[u,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,g,_,y]=t,[k,v,b]=pl(r),[S,x,T]=pl(i),z=nn(g,S),E=nn(_,x),O=nn(y,T),{padInfo:R,outDepth:U,outHeight:Q,outWidth:L}=Cg(a,l,d,c,k,v,b,z,E,O),X=n?m*f:m,M=[0,0,0,0,0];return s==="channelsFirst"?M=[u,X,U,Q,L]:s==="channelsLast"&&(M=[u,U,Q,L,X]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:U,outHeight:Q,outWidth:L,outChannels:X,padInfo:R,strideDepth:k,strideHeight:v,strideWidth:b,filterDepth:g,filterHeight:_,filterWidth:y,effectiveFilterDepth:z,effectiveFilterHeight:E,effectiveFilterWidth:O,dilationDepth:S,dilationHeight:x,dilationWidth:T,inShape:e,outShape:M,filterShape:t}},S2=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((k,v)=>v)},d=[Math.ceil(Eg(l.x.map(k=>r[k]))/u[0]),1,1];Te("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=W.size(r),m=[{type:12,data:f},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];fi(t,m),m.push(...ce(e[0].dims,e[1].dims));let g=["rank","rank"],_=e.length===3;_&&(m.push(...ce(e[2].dims)),g.push("rank")),m.push(...ce(r));let y=k=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];hi(t,v);let b=1,S=Ye(e[0].dataType),x=j("x",e[0].dataType,e[0].dims.length,c),T=j("W",e[1].dataType,e[1].dims.length,b),z=[x,T],E=ue("result",e[0].dataType,r.length,b),O="";if(_){let Q=j("bias",e[2].dataType,e[2].dims.length,b);z.push(Q),O+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?de("coords",4,5):de("coords",1,5)}];
        }`}let R=et(c,S),U=ci(t,R,S);return`
            ${O}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${x.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${k.registerUniforms(v).declareVariables(...z,E)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${E.offsetToIndices("global_idx")};
              let batch = ${de("coords",0,x.rank)};
              let d2 = ${s?de("coords",x.rank-1,x.rank):de("coords",1,x.rank)};
              let xFRCCorner = vec3<u32>(${s?de("coords",1,x.rank):de("coords",2,x.rank)},
              ${s?de("coords",2,x.rank):de("coords",3,x.rank)},
              ${s?de("coords",3,x.rank):de("coords",4,x.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?de("uniforms.x_shape",1,x.rank):de("uniforms.x_shape",2,x.rank)};
              let xShapeZ = ${s?de("uniforms.x_shape",2,x.rank):de("uniforms.x_shape",3,x.rank)};
              let xShapeW = ${s?de("uniforms.x_shape",3,x.rank):de("uniforms.x_shape",4,x.rank)};
              let xShapeU = ${s?de("uniforms.x_shape",4,x.rank):de("uniforms.x_shape",1,x.rank)};
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
                      ${s?`let xValues = vec4<f32>(
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
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
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
                      ${s?`let xValues = vec3<f32>(
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
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${U}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${_}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:m}),getShaderSource:y}}}),T2,I2,ek=ee(()=>{me(),ye(),we(),$i(),T2=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?Le(d):1,m=W.size(r)/f,g=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];fi(t,g),g.push(...ce(s,[u[0],u[1],u[2],u[3]/f]));let _=a?["rank","rank","rank"]:["rank","rank"];g.push(...ce([r[0],r[1],r[2],r[3]/f]));let y=k=>{let v=ue("output",e[0].dataType,r.length,f),b=Ye(v.type.tensor),S=ci(t,v.type.value,b),x=j("x",e[0].dataType,s.length),T=j("w",e[1].dataType,u.length,f),z=[x,T];a&&z.push(j("b",e[2].dataType,e[2].dims,f));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];hi(t,E);let O=l?`
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
            let xVal = ${x.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${x.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(E).declareVariables(...z,v)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${O}
    ${n}
    ${S}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:y}},I2=(e,t,r,i)=>{let a=e.length>2,n=Le(r[3]),s=Le(r[2]),u=W.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];fi(t,f),f.push(...ce(l,d,c));let m=(s-1)*t.strides[1]+d[1],g=_=>{let y=ue("output",e[0].dataType,c.length,n),k=Ye(y.type.tensor),v=ci(t,y.type.value,k),b=j("x",e[0].dataType,l.length,n),S=j("w",e[1].dataType,d.length,n),x=[b,S];a&&x.push(j("b",e[2].dataType,e[2].dims,n));let T=a?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return hi(t,z),`
  ${_.registerUniforms(z).declareVariables(...x,y)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${m}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${v}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${m};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:g}}}),Og,jn,Ag,Kn,fd,fl,Bg,Rg,hd,tk=ee(()=>{ye(),Y3(),J3(),hp(),ek(),$i(),fp(),Sr(),Og=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,d=t[0],c=t.slice(2).map((m,g)=>m+(m-1)*(r[g]-1)),f=u.map((m,g)=>m+i[g]+i[g+l]).map((m,g)=>Math.floor((m-c[g]+a[g])/a[g]));return f.splice(0,0,s),f.splice(n?3:1,0,d),f},jn=[2,3,1,0],Ag=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Kn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();cs.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},fd=e=>{let t=dp(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},fl=(e,t,r,i)=>{let a=r.format==="NHWC",n=Og(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let z=[t[0]];if(a){let E=e.kernelCustomData.wT??e.compute(yt(t[1],jn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),z.push(E)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(I2(z,r,n,i),{inputs:z}):e.compute(T2(z,r,n,i),{inputs:z});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],c=t[1].dims[2],f=t[1].dims[3],m=n[a?1:2],g=n[a?2:3],_=n[a?3:1],y=a&&c===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(y||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=n[0],E,O,R,U=[];if(a){let X=e.kernelCustomData.wT??e.compute(yt(t[1],jn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=X),y){let M=u*l*d;E=t[0].reshape([1,z,M]),O=X.reshape([1,M,_]),R=[1,z,_]}else E=t[0].reshape([z,u*l,d]),O=X.reshape([1,d,_]),R=[z,m*g,_];U.push(E),U.push(O)}else E=t[0].reshape([z,d,u*l]),O=t[1].reshape([1,_,d]),R=[z,_,m*g],U.push(O),U.push(E);s&&U.push(t[2]);let Q=R[2],L=U[0].dims[U[0].dims.length-1];Q<8&&L<8?e.compute(cp(U,r,n,R,a,i),{inputs:U}):e.compute(hs(U,r,n,R,a,i),{inputs:U});return}let k=!0,v=e.kernelCustomData.wT??e.compute(yt(t[1],jn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];s&&b.push(t[2]);let S=a?m*g:_,x=a?_:m*g,T=c*f*d;e.compute(x2(b,r,n,S,x,T,s,k,i),{inputs:b})},Bg=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Kn({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);fl(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Rg=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Kn(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=k2(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(S2(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},hd=(e,t)=>{if(Ag(e.inputs,t),e.inputs[0].dims.length===3)Bg(e,t);else if(e.inputs[0].dims.length===5)Rg(e,e.inputs,t);else{let r=Kn(t,e.inputs);fl(e,e.inputs,r)}}}),E2,rk=ee(()=>{me(),mr(),ye(),we(),E2=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=n?Le(l):1,f=n&&d===1&&l>=4,m=f?Math.floor(l/4)*4:Math.floor(l/c)*c,g=l-m,_=n?Le(d):1,y=n?d===1?c:_:1,k=W.size(a)/_,v=[Math.ceil(k/64),1,1];Te("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let b=["rank","rank"],S=[t.strides[0],t.strides[1]],x=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],T=[t.dilations[0],t.dilations[1]],z=[x[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),x[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],E=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],O=[{type:12,data:k},{type:12,data:S},{type:12,data:x},{type:12,data:T},{type:12,data:z},{type:6,data:E},{type:12,data:m},{type:12,data:l},{type:12,data:d},...ce(e[0].dims,e[1].dims)];i&&(O.push(...ce(e[2].dims)),b.push("rank")),O.push(...ce(a));let R=U=>{let Q=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:x.length},{name:"dilations",type:"u32",length:x.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:E.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],L=Ye(e[0].dataType),X=n?1:2,M=n?2:3,te=n?3:1,K=j("W",e[1].dataType,e[1].dims.length,y),V=j("Dy",e[0].dataType,e[0].dims.length,c),ae=[V,K];i&&ae.push(j("bias",e[2].dataType,[a[te]].length,_));let G=ue("result",e[0].dataType,a.length,_),ne=()=>{let Y="";if(f)c===4?Y+=`
        let xValue = ${V.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?Y+=`
          dotProd = dotProd + dot(vec4<${L}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}), vec4<${L}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(Y+=`
          dotProd = dotProd + dot(vec4<${L}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}, ${V.getByOffset("x_offset + 2u")}, ${V.getByOffset("x_offset + 3u")}), vec4<${L}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Y+=`
                  let xValue = ${n?V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):V.get("batch","inputChannel","idyR","idyC")};
        `,c===1)Y+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let C=0;C<c;C++)Y+=`
            let wValue${C} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${C}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${C}] * wValue${C};`;return Y},B=()=>{if(g===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let Y="";if(c===1){Y+="dotProd = dotProd";for(let C=0;C<g;C++)Y+=`
            + ${V.getByOffset(`x_offset + ${C}`)} * ${K.getByOffset(`w_offset + ${C}`)}`;Y+=";"}else if(c===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);Y+=`
          let xValue = ${V.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Y},D=`
            let outputIndices = ${G.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${G.indicesGet("outputIndices",0)};
            let d1 = ${G.indicesGet("outputIndices",te)};
            let r = ${G.indicesGet("outputIndices",X)};
            let c = ${G.indicesGet("outputIndices",M)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${G.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${L}(dyRCorner) + ${L}(wR)) / ${L}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${L}(uniforms.Dy_shape[${X}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${L}(dyCCorner) + ${L}(wC)) / ${L}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${L}(uniforms.Dy_shape[${M}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${ne()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${B()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${G.setByOffset("global_idx","value")};
          `;return`
    ${U.registerUniforms(Q).declareVariables(...ae,G)}
      ${U.mainStart()}
      ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${D}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${_}${f}${g}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:O}),getShaderSource:R}}}),Ng,Mg,Dg,hl,z2,Pg,ml,Ug,C2,ik=ee(()=>{rk(),$i(),Sr(),Ng=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,Mg=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},Dg=(e,t,r,i,a,n,s,u,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let m=e[0],g=t[u?3:1]*a;for(let _=0,y=e.length-c-(u?1:0);_<c;++_,++y){let k=e[y],v=f?k*s[_]:d[_],b=Ng(k,s[_],n[_],t[y],r[_],v);Mg(b,i,n,_,_+c),f&&d.push(s[_]*(k-1)+l[_]+(t[y]-1)*r[_]+1-n[_]-n[_+c])}d.splice(0,0,m),d.splice(u?3:1,0,g)},hl=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,m)=>f*m,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}Dg(u,r,l,e.autoPad,e.group,a,d,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},z2=e=>{let t=dp(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:f,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Pg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ml=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(yt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(E2(n,r,i),{inputs:n})},Ug=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=hl({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);ml(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},C2=(e,t)=>{if(Pg(e.inputs,t),e.inputs[0].dims.length===3)Ug(e,t);else{let r=hl(t,e.inputs);ml(e,e.inputs,r)}}}),qg,O2,A2,ak=ee(()=>{me(),ye(),He(),we(),qg=(e,t,r,i)=>{let a=W.size(t),n=t.length,s=j("input",e,n),u=ue("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=W.normalizeAxis(l,n),c=f=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=de("uniforms.input_shape","uniforms.axis",n),_=i.reverse?m+(i.exclusive?" + 1":""):"0",y=i.reverse?g:m+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...ce(t,t)]}),getShaderSource:c}},O2=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(qg(i,r,a,t),{inputs:[0]})},A2=e=>{let t=e.exclusive===1,r=e.reverse===1;return Oe({exclusive:t,reverse:r})}}),Wg,Vg,Lg,B2,R2,nk=ee(()=>{me(),ye(),He(),we(),Wg=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Vg=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},Lg=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=c?[r,i,a,d,d,n/d**2]:[r,i,a,n/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,i,a]:[r,n/d**2,d,d,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),m=f.dims.length,g=e.dataType,_=j("a",g,m),y=ue("output",g,m),k=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,y)}

  ${Vg(u,m,_,y)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=l?[r,i*d,a*d,n/d**2]:[r,n/d**2,i*d,a*d],S=W.size(b),x=f.dims,T=W.sortBasedOnPerm(x,u);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...ce(x,T)]}},getShaderSource:k}},B2=(e,t)=>{Wg(e.inputs),e.compute(Lg(e.inputs[0],t))},R2=e=>Oe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Zn,sn,gl,Gg,Hg,Fg,jg,_l,Kg,N2,M2,sk=ee(()=>{me(),ye(),He(),we(),Zn="[a-zA-Z]|\\.\\.\\.",sn="("+Zn+")+",gl="^"+sn+"$",Gg="("+sn+",)*"+sn,Hg="^"+Gg+"$",Fg=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},jg=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Hg)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(gl)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,n);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(sn)))throw new Error("Invalid RHS");i.match(RegExp(Zn,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(gl))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Zn,"g")),d=new Fg(i);return l?.forEach((c,f)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let m=a-l.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let _=String.fromCharCode(48+g);d.addSymbol(_,f+g),this.addSymbol(_,r[u++],i)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},_l=e=>e+"_max",Kg=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,c)=>j(`input${c}`,t,d)),n=W.size(i),s=ue("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",m="var sum = 0.0;",g="sum += prod;",_=[],y=[],k=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((x,T)=>{if(r.rhs.symbolToIndices.has(T)){let z=r.rhs.symbolToIndices.get(T)?.[0];z!==void 0&&r.lhs.forEach((E,O)=>{if(x.inputIndices.includes(O)){let R=E.symbolToIndices.get(T);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(U=>{c.push(`${a[O].indicesSet(`input${O}Indices`,U,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,E)=>{if(x.inputIndices.includes(E)){let O=z.symbolToIndices.get(T);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(R=>{_.push(`${a[E].indicesSet(`input${E}Indices`,R,`${T}`)}`)}),v.push(`prod *= ${a[E].getByIndices(`input${E}Indices`)};`)}}),y.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${_l(T)}; ${T}++) {`),k.push("}")});let S=b?[...c,`let sum = ${a.map((x,T)=>x.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...c,m,...y,..._,f,...v,g,...k];return`
            ${d.registerUniforms(u.map(x=>({name:`${_l(x)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((x,T)=>`var input${T}Indices: ${a[T].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:n});let c=e.map((f,m)=>[...ce(f)]).reduce((f,m)=>f.concat(m),d);return c.push(...ce(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},N2=(e,t)=>{let r=new jg(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(Kg(a,e.inputs[0].dataType,r,i))},M2=e=>{let t=e.equation.replace(/\s+/g,"");return Oe({equation:t})}}),Zg,$l,Qg,Xg,D2,ok=ee(()=>{me(),ye(),we(),Zg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},$l=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},Qg=(e,t)=>e.length>t.length?$l(e,t):$l(t,e),Xg=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Qg(t,r),a=e[0].dataType,n=a===9||W.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(W.size(i)/u),d=f=>{let m=j("input",a,t.length,s),g=ue("output",a,i.length,u),_;if(a===9){let y=(k,v,b="")=>`
          let outputIndices${v} = ${g.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${m.broadcastedIndicesToOffset(`outputIndices${v}`,g)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${k}[${v}] = ${b}(${m.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(m,g)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...ce(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},D2=e=>{Zg(e.inputs),e.compute(Xg(e.inputs),{inputs:[0]})}}),Yg,P2,uk=ee(()=>{me(),ye(),we(),lp(),Yg=e=>{let t=e[0].dataType,r=W.size(e[0].dims),i=W.size(e[1].dims),a=i%4===0,n=s=>{let u=j("x",t,[1],4),l=j("bias",t,[1],4),d=ue("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,m=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${ld(ut(t))}

    ${s.mainStart(Ti)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",dd("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Ti/4)}})}},P2=e=>{e.inputs.length<2||W.size(e.inputs[1].dims)===0?a2(e):e.compute(Yg(e.inputs))}}),Jg,e_,U2,q2,lk=ee(()=>{me(),ye(),He(),we(),Jg=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},e_=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=W.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(W.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:n},...ce(e[0].dims,e[1].dims,s)],f=m=>{let g=j("data",e[0].dataType,e[0].dims.length,l),_=j("inputIndices",e[1].dataType,e[1].dims.length),y=ue("output",e[0].dataType,s.length,l),k=b=>{let S=i.length,x=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let T=0;T<S;T++)x+=`${S>1?`indicesIndices${b}[${T}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${T}]`:`outputIndices${b}`};`;x+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${g.type.indices};
        `;for(let T=0,z=0;T<a;T++)T===n?(x+=`${a>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = u32(idx${b});`,z+=S):(x+=`${a>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${z}]`:`outputIndices${b}`};`,z++);return x},v;if(e[0].dataType===9){let b=(S,x,T="")=>`
          let outputIndices${x} = ${y.offsetToIndices(`outputOffset + ${x}u`)};
          ${k(x)};
          let offset${x} = ${g.indicesToOffset(`dataIndices${x}`)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${S}[${x}] = ${T}(${g.getByOffset(`index${x}`)}[component${x}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${g.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,_,y)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},U2=e=>Oe({axis:e.axis}),q2=(e,t)=>{let r=e.inputs;Jg(r),e.compute(e_(e.inputs,t))}}),t_,W2,V2,dk=ee(()=>{me(),ye(),we(),t_=(e,t,r,i,a,n,s,u,l)=>{let d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];d.push(...ce(t.dims,c));let f=m=>{let g=j("indices_data",t.dataType,t.dims.length),_=ue("input_slice_offsets_data",12,1,1),y=[g,_],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(k).declareVariables(...y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},W2=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=W.sizeToDimension(n,n.length-1),l=W.sizeFromDimension(i,t.batchDims+s),d=W.sizeToDimension(i,t.batchDims),c=W.sizeFromDimension(i,t.batchDims),f=u/d,m=new Array(s),g=l;for(let x=0;x<s;++x)m[s-1-x]=g,g*=i[t.batchDims+s-1-x];let _=t_(e,r[1],m,t.batchDims,i,u,f,c,s),y=t.batchDims+s;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=n.slice(0,-1).concat(i.slice(y)),v=W.size(k),b=[{type:12,data:v},{type:12,data:l},...ce(r[0].dims,_.dims,k)],S=x=>{let T=j("data",r[0].dataType,r[0].dims.length),z=j("slice_offsets",12,_.dims.length),E=ue("output",r[0].dataType,k.length);return`
          ${x.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,z,E)}
            ${x.mainStart()}
            ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:S},{inputs:[r[0],_]})},V2=e=>({batchDims:e.batch_dims,cacheKey:""})}),r_,i_,L2,G2,pk=ee(()=>{me(),ye(),He(),we(),r_=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=W.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},i_=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=W.normalizeAxis(t.gatherAxis,a),s=W.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=W.size(u),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...ce(...e.map((g,_)=>g.dims),u)],m=g=>{let _=j("data",e[0].dataType,e[0].dims.length),y=j("inputIndices",e[1].dataType,e[1].dims.length),k=j("scales",e[2].dataType,e[2].dims.length),v=e.length>3?j("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=ue("output",d,u.length),S=[_,y,k];v&&S.push(v);let x=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(x).declareVariables(...S,b)}
        ${g.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ut(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,_)=>_!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:m}},L2=(e,t)=>{let r=e.inputs;r_(r,t),e.compute(i_(e.inputs,t))},G2=e=>Oe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),a_,n_,H2,F2,ck=ee(()=>{me(),ye(),He(),we(),a_=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},n_=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=W.normalizeAxis(t.axis,a),l=r[u],d=n.slice(0),c=W.size(d),f=j("input",i,a),m=j("indicesInput",s,n.length),g=ue("output",i,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return _.push(...ce(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,g)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},H2=e=>Oe({axis:e.axis}),F2=(e,t)=>{let r=e.inputs;a_(r),e.compute(n_(e.inputs,t))}}),s_,o_,j2,K2,fk=ee(()=>{me(),ye(),we(),s_=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},o_=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Hw.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(a/l),f=!0,m=W.size(u),g=[{type:12,data:f?d:m},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(g.push(...ce(e[2].dims)),_.push("rank")),g.push(...ce(u));let y=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",x=j("a",e[0].dataType,e[0].dims),T=j("b",e[1].dataType,e[1].dims),z=x.type.value,E=null,O=[x,T];e.length===3&&(E=j("c",e[2].dataType,e[2].dims.length),O.push(E));let R=ue("output",e[0].dataType,u.length);O.push(R);let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(U).declareVariables(...O)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${S}
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${z}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=v=>{let b=j("a",e[0].dataType,e[0].dims),S=j("b",e[1].dataType,e[1].dims),x=null,T=[b,S];e.length===3&&(x=j("c",e[2].dataType,e[2].dims.length),T.push(x));let z=ue("output",e[0].dataType,u.length);T.push(z);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],O="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let U=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(E).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${O}
      }
      workgroupBarrier();
    }

    ${U}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${x!=null?`let cOffset = ${x.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${x.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:g}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:y}},j2=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},K2=(e,t)=>{s_(e.inputs),e.compute(o_(e.inputs,t))}}),Xt,pr,Xr,Yr,u_,l_,d_,p_,c_,f_,h_,m_,Z2,Q2,hk=ee(()=>{me(),ye(),He(),we(),[Xt,pr,Xr,Yr]=[0,1,2,3],u_=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},l_=`
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
`,d_=e=>`
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
`,p_=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,c_=e=>`
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
`,f_=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Xt}] = batch;
     indices[${pr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Xr}] = u32(r);
            indices[${Yr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Xr}] = u32(clamp(r, 0, H - 1));
          indices[${Yr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Xr}] = gs_reflect(r, border[1], border[3]);
          indices[${Yr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,h_=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Xt}], indices[${pr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Xt}], indices[${pr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Xt}], indices[${pr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Xt}], indices[${pr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Xt}], indices[${pr}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Xt}], indices[${pr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,m_=(e,t)=>{let r=j("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=j("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Xt,pr,Xr,Yr]=[0,3,1,2]);let s=ue("output",e[0].dataType,n.length),u=r.type.value,l=W.size(n),d=[{type:12,data:l},...ce(e[0].dims,i,n)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${l_}
  ${d_(u)}
  ${p_(t)}
  ${c_(t)}
  ${f_(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Xr}]);
      let W_in = i32(uniforms.x_shape[${Yr}]);

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

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Xt}], indices[${Xr}], indices[${Yr}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${h_(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let m=W.size(n);return{outputs:[{dims:n,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:d}},getShaderSource:c}},Z2=(e,t)=>{u_(e.inputs),e.compute(m_(e.inputs,t))},Q2=e=>Oe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),pt,g_,X2,yl,__,$n,Y2,J2=ee(()=>{me(),ye(),He(),np(),up(),we(),Sr(),pt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,g_=(e,t)=>{let r=e[0],i=pt(e,1),a=pt(e,2),n=pt(e,3),s=pt(e,4),u=pt(e,5),l=pt(e,6),d=pt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=f,_=0,y=0,k=Math.floor(m/t.numHeads);if(l&&d&&W.size(l.dims)&&W.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],y=l.dims[2]}else if(l&&W.size(l.dims)||d&&W.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&W.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,g=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,g=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,g=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&W.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+g,S=0;if(s&&W.size(s.dims)>0){S=8;let E=s.dims;throw E.length===1?E[0]===c?S=1:E[0]===3*c+2&&(S=3):E.length===2&&E[0]===c&&E[1]===b&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let x=!1,T=m;if(a&&W.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(g!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=a.dims[2]}else{if(g!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=a.dims[1]*a.dims[3],x=!0}}let z=!1;if(s&&W.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&W.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:m,vHiddenSize:T,headSize:k,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:z,passPastInKv:x,qkvFormat:v}},X2=e=>Oe({...e}),yl=Oe({perm:[0,2,1,3]}),__=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=W.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=f=>{let m=ue("qkv_with_bias",t.dataType,u),g=j("qkv",t.dataType,u),_=j("bias",r.dataType,u),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(y).declareVariables(g,_,m)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},$n=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&W.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=__(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(yt(l,yl.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(yt(l,yl.perm),{inputs:[l],outputs:[-1]})[0]},Y2=(e,t)=>{let r=g_(e.inputs,t),i=e.inputs[0],a=pt(e.inputs,1),n=pt(e.inputs,2),s=pt(e.inputs,3),u=pt(e.inputs,4),l=pt(e.inputs,5),d=pt(e.inputs,6),c=pt(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let f=a&&n&&a.dims.length===4&&n.dims.length===4,m=$n(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return Tn(e,m,a,n,u,void 0,d,c,l,r);if(!a||!n)throw new Error("key and value must be provided");let g=$n(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),_=$n(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);Tn(e,m,g,_,u,void 0,d,c,l,r)}}),$_,y_,b_,w_,md,ev,tv,rv=ee(()=>{me(),ye(),He(),we(),$_=e=>{if(!e||e.length<1)throw new Error("too few inputs")},y_=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),Oe({numOutputs:i,axis:t.axis,splitSizes:r})},b_=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${de("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,w_=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},md=(e,t)=>{let r=e[0].dims,i=W.size(r),a=e[0].dataType,n=W.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=j("input",a,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,m=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let y=r.slice();y[n]=t.splitSizes[_],c.push(y),s[_]=ue(`output${_}`,a,y.length),d.push({dims:c[_],dataType:e[0].dataType})}m.push({type:12,data:l},...ce(r,...c));let g=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${b_(l.length)}
  ${w_(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${de("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},ev=(e,t)=>{$_(e.inputs);let r=e.inputs.length===1?t:y_(e.inputs,t);e.compute(md(e.inputs,r),{inputs:[0]})},tv=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Oe({axis:t,numOutputs:i,splitSizes:r})}}),v_,ms,iv,av=ee(()=>{me(),ye(),He(),we(),v_=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!W.areEqual(i.dims,[])&&!W.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!W.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=a.dims[0],f=W.sizeFromDimension(r.dims,1)/d,m=u===0?a.dims[1]*2:f/s;if(u>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ms=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=W.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],f=a===0?c*2:d/i,m=new Array(s,l,d/f,f-c),g=W.computeStrides(m),_=[{type:1,data:n},{type:12,data:m},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[u,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...ce(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=k=>{let v=j("input",e[0].dataType,e[0].dims.length),b=j("position_ids",e[1].dataType,e[1].dims.length),S=j("cos_cache",e[2].dataType,e[2].dims.length),x=j("sin_cache",e[3].dataType,e[3].dims.length),T=ue("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${k.declareVariables(v,b,S,x,T)}

        ${k.mainStart(Ti)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",ue("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Oe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(m)/Ti)},programUniforms:_})}},iv=(e,t)=>{v_(e.inputs,t),e.compute(ms(e.inputs,t))}}),x_,k_,bl,S_,nv,mk=ee(()=>{He(),me(),up(),J2(),rv(),Sr(),av(),we(),x_=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,m=0,g=!i||i.dims.length===0,_=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=_*t.numHeads);let y=n&&n.dims.length!==0,k=s&&s.dims.length!==0;if(y&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&k){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=n.dims[2]}else if(y||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,S=!1,x=t.kvNumHeads?_*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');x=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');x=a.dims[1]*a.dims[3],S=!0}}let T=e.length>4?e[5]:void 0;if(T&&T.dims.length!==1&&T.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:x,headSize:_,vHeadSize:Math.floor(x/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:v}},k_=Oe({perm:[0,2,1,3]}),bl=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(yt(i,k_.perm),{inputs:[i],outputs:[-1]})[0]),i},S_=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let f=j("seq_lens",r.dataType,r.dims),m=j("total_seq_lens",i.dataType,i.dims),g=ue("pos_ids",a,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(f,m,g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},nv=(e,t)=>{let r=x_(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Oe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[m,g,_]=!a&&!n?e.compute(md([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],y,k;if(t.doRotary){let x=e.compute(S_(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],T=e.inputs[7],z=e.inputs[8],E=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[m,x,T,z],R=[-1];y=e.compute(ms(O,E),{inputs:O,outputs:R})[0],O.splice(0,1,g);let U=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(ms(O,U),{inputs:O,outputs:R})[0]}let v=$n(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?y:m,void 0,0),b=bl(e,t.doRotary?k:g,r),S=bl(e,_,r);Tn(e,v,b,S,void 0,void 0,s,u,void 0,r,l,d)}}),wl,T_,I_,sv,gk=ee(()=>{me(),ye(),Sr(),we(),wl=(e,t,r,i,a,n,s,u)=>{let l=Le(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=a*s,m=64;f===1&&(m=256);let g=[a,s,n/l],_=[a,s,2],y=["rank","type","type"],k=[];k.push(...ce(g,_));let v=b=>{let S=j("x",t.dataType,3,l),x=j("scale",r.dataType,r.dims),T=j("bias",i.dataType,i.dims),z=ue("output",1,3,2),E=[S,x,T,z];return`
  var<workgroup> workgroup_shared : array<${c}, ${m}>;
  const workgroup_size = ${m}u;
  ${b.declareVariables(...E)}
  ${b.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${xr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${xr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:k}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},T_=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=W.sizeFromDimension(i,n),d=Le(l),c=W.size(a)/d,f=wl(e,t[0],t[1],t[2],s,l,u,r.epsilon),m=[s,u,l/d],g=[s,u],_=["type","none"],y=k=>{let v=j("x",t[0].dataType,m.length,d),b=j("scale_shift",1,g.length,2),S=ue("output",t[0].dataType,m.length,d),x=[v,b,S];return`
  ${k.registerUniform("output_size","u32").declareVariables(...x)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ce(m,g,m)]}),getShaderSource:y},{inputs:[t[0],f]})},I_=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=W.sizeFromDimension(i,1)/s,l=Le(s),d=W.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],f=["type","type"],m=!1,g=[0,i.length-1];for(let v=0;v<i.length-2;v++)m=m||i[v+1]!==1,g.push(v+1);m=m&&i[i.length-1]!==1;let _=m?e.compute(yt(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,b)=>i[g[b]])),y=wl(e,_,t[1],t[2],n,u,s,r.epsilon),k=v=>{let b=Ye(t[0].dataType),S=l===1?"vec2f":`mat${l}x2f`,x=E=>{let O=E===0?"x":"y",R=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${R}(scale.${O}))`;case 2:return`vec2<${b}>(${R}(scale[0].${O}, scale[1].${O}))`;case 4:return`vec4<${b}>(${R}(scale[0].${O}, scale[1].${O}, scale[2].${O}, scale[3].${O}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=j("input",t[0].dataType,t[0].dims,l),z=ue("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${x(0)}, ${x(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:k},{inputs:[t[0],y]})},sv=(e,t)=>{t.format==="NHWC"?I_(e,e.inputs,t):T_(e,e.inputs,t)}}),E_,z_,ov,_k=ee(()=>{me(),ye(),we(),E_=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},z_=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=W.normalizeAxis(t.axis,a.length),d=W.sizeToDimension(a,l),c=W.sizeFromDimension(a,l),f=W.size(n.dims),m=s?W.size(s.dims):0;if(f!==c||s&&m!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${m}`);let g=[];for(let T=0;T<a.length;++T)T<l?g.push(a[T]):g.push(1);let _=Le(c),y=["type","type"],k=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];s&&y.push("type");let v=r>1,b=r>2,S=T=>{let z=Ye(e[0].dataType),E=[j("x",e[0].dataType,e[0].dims,_),j("scale",n.dataType,n.dims,_)];s&&E.push(j("bias",s.dataType,s.dims,_)),E.push(ue("output",e[0].dataType,u,_)),v&&E.push(ue("mean_data_output",1,g)),b&&E.push(ue("inv_std_output",1,g));let O=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(O).declareVariables(...E)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${sd("f32",_)};
    var mean_square_vector = ${sd("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${vi(z,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${xr("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${xr("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${vi(z,_,"x[j + offset]")};
      let f32scale = ${vi(z,_,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${vi(z,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},x=[{dims:u,dataType:e[0].dataType}];return v&&x.push({dims:g,dataType:1}),b&&x.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:k}),getShaderSource:S}},ov=(e,t)=>{E_(e.inputs),e.compute(z_(e.inputs,t,e.outputCount))}}),C_,uv,$k=ee(()=>{ye(),fp(),hp(),C_=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},uv=e=>{C_(e.inputs);let t=Si.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(cp(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=W.size(e.inputs[0].dims.slice(0,-2)),s=W.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,n,r],c=[u,l];e.compute(hs(c,{activation:""},t,d),{inputs:c})}else e.compute(hs(e.inputs,{activation:""},t))}}}),O_,A_,B_,lv,dv,yk=ee(()=>{me(),ye(),He(),we(),O_=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!W.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(W.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(W.size(l)!==d)throw new Error("zeroPoints input size error.")}},A_=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=W.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=Le(t.k),m=Le(d),g=Le(s),_=u.concat([a,s]),y=a>1&&s/g%2===0?2:1,k=W.size(_)/g/y,v=64,b=[],S=[l,a,n/f],x=W.convertShape(e[1].dims).slice();x.splice(-1,1,d/m),b.push(...ce(S)),b.push(...ce(x)),b.push(...ce(e[2].dims)),e.length===4&&b.push(...ce(W.convertShape(e[3].dims)));let T=[l,a,s/g];b.push(...ce(T));let z=E=>{let O=S.length,R=j("a",e[0].dataType,O,f),U=j("b",12,x.length,m),Q=j("scales",e[2].dataType,e[2].dims.length),L=[R,U,Q],X=e.length===4?j("zero_points",12,e[3].dims.length):void 0;X&&L.push(X);let M=T.length,te=ue("output",e[0].dataType,M,g),K=Ye(e[0].dataType),V=(()=>{switch(f){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${f}-component is not supported.`)}})(),ae=()=>{let B=`
          // reuse a data
            var input_offset = ${R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`)};
            var a_data: ${V};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${R.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let D=0;D<g*y;D++)B+=`
            b_value = ${m===1?`b${D}_data`:`b${D}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${V}(${Array.from({length:4},(Y,C)=>`${K}(b_value_lower[${C}]), ${K}(b_value_upper[${C}])`).join(", ")});
            b_dequantized_values = ${f===1?`${V}(${Array.from({length:8},(Y,C)=>`(b_quantized_values[${C}] - ${X?`zero_point${D}`:"zero_point"}) * scale${D}`).join(", ")});`:`(b_quantized_values - ${V}(${Array(8).fill(`${X?`zero_point${D}`:"zero_point"}`).join(",")})) * scale${D};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(D/g)}]${g>1?`[${D%g}]`:""} += ${Array.from({length:8/f},(Y,C)=>`${f===1?`a_data[${C}] * b_dequantized_values[${C}]`:`dot(a_data[${C}], b_dequantized_values[${C}])`}`).join(" + ")};
          `;return B},G=()=>{let B=`
            var col_index = col * ${g};
            ${X?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${K}(8);`}
            `;for(let D=0;D<g*y;D++)B+=`
            let scale${D} = ${Q.getByOffset("col_index * nBlocksPerCol + block")};
            ${X?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${D} = ${K}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return B},ne=()=>{let B=`col_index = col * ${g};`;for(let D=0;D<g*y;D++)B+=`
            let b${D}_data = ${U.getByIndices(`${U.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return B+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${V};
            var b_dequantized_values: ${V};`,B};return`
        var<workgroup> workgroup_shared: array<${te.type.value}, ${y*v}>;
        ${E.declareVariables(...L,te)}
        ${E.mainStart([v,1,1])}
          let output_indices = ${te.offsetToIndices(`(global_idx / ${v}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${G()}
            for (var word: u32 = 0; word < ${d}; word += ${m}) {
              ${ne()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${ae()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${te.type.value} = ${te.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${te.setByIndices(`${te.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${m};${g};${y};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:k},programUniforms:b}),getShaderSource:z}},B_=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=W.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=Le(t.k),m=Le(d),g=u.concat([a,s]),_=128,y=s%8===0?8:s%4===0?4:1,k=_/y,v=k*m*8,b=v/f,S=v/t.blockSize,x=W.size(g)/y,T=[],z=[l,a,n/f],E=W.convertShape(e[1].dims).slice();E.splice(-1,1,d/m),T.push(...ce(z)),T.push(...ce(E)),T.push(...ce(e[2].dims)),e.length===4&&T.push(...ce(W.convertShape(e[3].dims)));let O=[l,a,s];T.push(...ce(O));let R=U=>{let Q=z.length,L=j("a",e[0].dataType,Q,f),X=j("b",12,E.length,m),M=j("scales",e[2].dataType,e[2].dims.length),te=[L,X,M],K=e.length===4?j("zero_points",12,e[3].dims.length):void 0;K&&te.push(K);let V=O.length,ae=ue("output",e[0].dataType,V),G=Ye(e[0].dataType),ne=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${L.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${ae.type.value}, ${k}>, ${y}>;
        ${U.declareVariables(...te,ae)}
        ${U.mainStart([k,y,1])}
          let output_indices = ${ae.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${L.getByIndices(`${L.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${L.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${K?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${G}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${G}(8);`}
            let scale = ${M.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${X.getByIndices(`${X.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${ne()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${G}>(${Array.from({length:4},(B,D)=>`${G}(b_value_lower[${D}]), ${G}(b_value_upper[${D}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${G}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(B,D)=>`${`dot(a_data${D}, b_dequantized_values[${D}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${ae.type.value} = ${ae.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ae.setByIndices(`${ae.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${m};${k};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x},programUniforms:T}),getShaderSource:R}},lv=(e,t)=>{O_(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(B_(e.inputs,t)):e.compute(A_(e.inputs,t))},dv=e=>Oe(e)}),R_,N_,M_,D_,P_,U_,q_,W_,pv,bk=ee(()=>{me(),ye(),we(),R_=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},N_=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${de("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${de("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${de("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},M_=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${de("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${de("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${de("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${de("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},D_=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${de("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${de("uniforms.x_shape",a,t)})) {
                  k = i32(${de("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${de("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},P_=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${de("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${de("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${de("uniforms.x_shape",a,t)})) {
                  k -= i32(${de("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${de("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},U_=(e,t,r)=>{switch(r.mode){case 0:return N_(e,t,r.pads.length);case 1:return M_(e,t,r.pads.length);case 2:return D_(e,t,r.pads.length);case 3:return P_(e,t,r.pads.length);default:throw new Error("Invalid mode")}},q_=(e,t)=>{let r=W.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=W.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...ce(e[0].dims,r));let u=["rank"],l=d=>{let c=ue("output",e[0].dataType,r.length),f=j("x",e[0].dataType,i.length),m=f.type.value,g=U_(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?m:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(r)/64)},programUniforms:n}),getShaderSource:l}},W_=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},pv=(e,t)=>{R_(e.inputs);let r=W_(e.inputs,t);e.compute(q_(e.inputs,r),{inputs:[0]})}}),on,vl,xl,kl,Sl,V_,L_,Tl,Il,cv,fv,El,hv,mv,zl,gv,_v,$v,yv,wk=ee(()=>{Zt(),me(),ye(),we(),on=e=>{if(Ue.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},vl=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();cs.adjustPoolAttributes(r,a,s,u,l,d);let c=cs.computePoolOutputShape(r,a,u,l,s,d,t.autoPad),f=Object.assign({},t);n?Object.assign(f,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let m=c.slice();return m.push(m.splice(1,1)[0]),[f,i?m:c]},xl=(e,t)=>{let r=t.format==="NHWC",i=W.size(e),a=W.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];m=!!(y+k),n.push({type:12,data:g},{type:12,data:_},{type:12,data:y},{type:12,data:k}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,f,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=W.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},kl=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let m=a.format==="NHWC",g=t.type.value,_=ue("output",t.type.tensor,i);if(a.kernelShape.length<=2){let y="",k="",v="",b=r-(m?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let S=r-(m?3:2);f?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${g}(${u});
              var pad = 0;
              ${k}
              ${y}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=a.kernelShape.length,k=a.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${g}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${de("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${de("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${de("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${de("uniforms.pads","j - 2u",k)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},Sl=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,V_=e=>`${Sl(e)};${e.countIncludePad}`,L_=e=>`${Sl(e)};${e.storageOrder};${e.dilations}`,Tl=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Il=(e,t,r,i)=>{let[a,n]=vl(t,i,r),s=j("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,f,m,g,_]=xl(n,a);c.push(...ce(t.dims,n));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(n)/64)},programUniforms:c}),getShaderSource:k=>kl(k,s,t.dims.length,n.length,a,l,d,0,f,m,g,_)}},cv=e=>{let t=e.count_include_pad!==0,r=Tl(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:V_(i)}},fv=(e,t)=>{on(e.inputs),e.compute(Il("AveragePool",e.inputs[0],!1,t))},El={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},hv=e=>{let t=e.format;return{format:t,...El,cacheKey:t}},mv=(e,t)=>{on(e.inputs),e.compute(Il("GlobalAveragePool",e.inputs[0],!0,t))},zl=(e,t,r,i)=>{let[a,n]=vl(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=j("x",t.dataType,t.dims.length),d=["rank"],[c,f,m,g,_]=xl(n,a);return c.push(...ce(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(n)/64)},programUniforms:c}),getShaderSource:y=>kl(y,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,f,m,g,_)}},gv=(e,t)=>{on(e.inputs),e.compute(zl("MaxPool",e.inputs[0],!1,t))},_v=e=>{let t=e.storage_order,r=e.dilations,i=Tl(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:L_(a)}},$v=e=>{let t=e.format;return{format:t,...El,cacheKey:t}},yv=(e,t)=>{on(e.inputs),e.compute(zl("GlobalMaxPool",e.inputs[0],!0,t))}}),G_,H_,bv,wv,vk=ee(()=>{me(),ye(),He(),we(),G_=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},H_=(e,t)=>{let r=W.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=W.size(n),l=i===3||i===2,d=l?[Math.ceil(W.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,m=f?l?[Math.ceil(W.size(f.dims)/4)]:f.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,_=g===!1&&c.length===1,y=Le(u),k=g&&(!l||y===4),v=k?y:1,b=k&&!l?y:1,S=j("input",l?12:i,d.length,b),x=j("scale",s,c.length),T=f?j("zero_point",l?12:i,m.length):void 0,z=ue("output",s,n.length,v),E=[S,x];T&&E.push(T);let O=[d,c];f&&O.push(m);let R=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...ce(...O,n)],U=Q=>{let L=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Q.registerUniforms(L).declareVariables(...E,z)}
      ${Q.mainStart()}
          ${Q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${x.getByOffset("0")}`:_?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${x.getByOffset("scale_index")};`:`
            var scale_indices: ${x.type.indices} = output_indices;
            let index = ${x.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${x.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${x.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?g?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:_?l?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${x.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:U,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:R})}},bv=(e,t)=>{G_(e.inputs,t),e.compute(H_(e.inputs,t))},wv=e=>Oe({axis:e.axis,blockSize:e.blockSize})}),F_,j_,vv,xk=ee(()=>{Zt(),me(),we(),F_=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},j_=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...ce(n)],l=d=>{let c=ue("output",i,n.length),f=c.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(m).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},vv=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),Ue.webgpu.validateInputContent&&F_(t,r,i),e.compute(j_(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),K_,Cl,Ol,Z_,xv,kv,kk=ee(()=>{me(),ye(),He(),we(),K_=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Cl=(e,t)=>`${e===1?`
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
    data_offset += u32((u32(index) * element_count_dim));`,Ol=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${K_(e.reduction,"output[data_offset + i]","value",t)}
      }`,Z_=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(W.size(i)/n),u=i[i.length-1],l=W.sizeFromDimension(r,u),d=W.sizeFromDimension(i,0)/u,c=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...ce(e[1].dims,e[2].dims,a)],f=m=>{let g=j("indices",e[1].dataType,e[1].dims.length),_=j("updates",e[2].dataType,e[2].dims.length,n),y=t.reduction!=="none"&&t.reduction!==""?Yw("output",e[0].dataType,a.length):ue("output",e[0].dataType,a.length,n);return`
      ${m.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,y)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${d}; i = i + 1) {
      for (var j = i + 1; j < ${d}; j = j + 1) {
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
    for (var idx = 0u; idx < ${d}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${Cl(r.length,!1)}
      }
      ${Ol(t,y.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${Cl(r.length,!0)}
  }
  ${Ol(t,y.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}},xv=e=>Oe({reduction:e.reduction}),kv=(e,t)=>{e.compute(Z_(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Q_,X_,Y_,Al,J_,e$,t$,r$,i$,a$,n$,s$,Bl,o$,u$,l$,d$,p$,Sv,Tv,Sk=ee(()=>{me(),ye(),He(),we(),Q_=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},X_=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},Y_=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Q_(i,t),t.axes.length>0&&X_(i,t.axes,d).forEach((c,f)=>i[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Al=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,J_=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Al("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Al("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",e$=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",t$=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},r$=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},i$=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},a$=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${de("uniforms.scales","i",i)};
        var roi_low = ${de("uniforms.roi","i",a)};
        var roi_hi = ${de("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${de("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${de("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,n$=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${de("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${de("uniforms.roi","i",n)};
          var roi_hi = ${de("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${de("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${de("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
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
    }`,s$=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${de("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Bl=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",o$=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Bl(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},u$=(e,t,r,i,a,n,s,u,l,d)=>{let c=r.length===2,[f,m]=c?[0,1]:[2,3],g=e.type.value,_=y=>{let k=y===f?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[y]},
        ${i[y]}, ${r[y]}, ${n[y]}, ${n[y]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${g} = originalIdx + ${g}(i);
          if (${k} < 0 || ${k} >= ${r[y]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${k} = max(0, min(${k}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${k})`)};
          data[i + 1] = ${y===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(m)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},l$=(e,t,r,i,a)=>{let[n,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Bl(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
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
    }`},d$=(e,t,r,i,a,n)=>{let s=e.dims,u=t$(n,t.axes,s.length),l=r$(s,i,a,t.axes),d=i.slice();i.length===0&&(d=s.map((b,S)=>b===0?1:l[S]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=i$(s,d,t)));let c=ue("output",e.dataType,l.length),f=j("input",e.dataType,s.length),m=W.size(l),g=s.length===l.length&&s.every((b,S)=>b===l[S]),_=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,k=f.type.value,v=b=>`
      ${g?"":`
      ${J_(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${s$(f,s)};
              ${e$(t.nearestMode,r,k)};
              ${n$(f,c,s,l,d.length,u.length,_)};
              `;case"linear":return`
              ${a$(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${o$(f,c,s,_,y)}`;if(s.length===3||s.length===5)return`${l$(f,c,s,_,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${u$(f,c,s,l,d,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(f,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:d},{type:1,data:u},...ce(s,l)]})}},p$=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Sv=(e,t)=>{let r=[],i=[],a=[],n=p$(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Y_(e.inputs,t,n,r,i,a),e.compute(d$(e.inputs[0],t,n,r,i,a),{inputs:[0]})},Tv=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Oe({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),c$,f$,Iv,Tk=ee(()=>{me(),ye(),we(),c$=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},f$=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=W.size(n),u=n,l=s,d=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],f=!a&&e.length>3,m=e.length>4,g=i&&r>1,_=i&&r>2,y=r>3,k=64,v=Le(d),b=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],S=T=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[j("x",e[0].dataType,e[0].dims,v),j("skip",e[1].dataType,e[1].dims,v),j("gamma",e[2].dataType,e[2].dims,v)];f&&E.push(j("beta",e[3].dataType,e[3].dims,v)),m&&E.push(j("bias",e[4].dataType,e[4].dims,v)),E.push(ue("output",e[0].dataType,u,v)),g&&E.push(ue("mean_output",1,c)),_&&E.push(ue("inv_std_output",1,c)),y&&E.push(ue("input_skip_bias_sum",e[0].dataType,u,v));let O=Ye(e[0].dataType),R=Ye(1,v);return`

      ${T.registerUniforms(z).declareVariables(...E)}
      var<workgroup> sum_shared : array<${R}, ${k}>;
      var<workgroup> sum_squared_shared : array<${R}, ${k}>;

      ${T.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":O+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${vi(O,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
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
        let mean = ${xr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${xr("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${O}(mean)`}) *
            ${O}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},x=[{dims:u,dataType:e[0].dataType}];return r>1&&x.push({dims:c,dataType:1}),r>2&&x.push({dims:c,dataType:1}),r>3&&x.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${g};${_};${y}`,inputDependencies:e.map((T,z)=>"type")},getShaderSource:S,getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},Iv=(e,t)=>{c$(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(f$(e.inputs,t,e.outputCount,!1),{outputs:r})}}),h$,un,m$,Rl,g$,_$,Ev,zv,Ik=ee(()=>{me(),ye(),He(),we(),h$=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},un=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},m$=(e,t)=>{if(e.length>1){let r=un(e,1),i=un(e,2),a=un(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),Oe({starts:r,ends:i,axes:a})}else return t},Rl=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},g$=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${de("uniforms.input_shape","i",r.length)};
            let steps_i = ${de("uniforms.steps","i",r.length)};
            let signs_i = ${de("uniforms.signs","i",r.length)};
            let starts_i = ${de("uniforms.starts","i",r.length)};
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
      }`,_$=(e,t)=>{let r=e[0].dims,i=W.size(r),a=t.axes.length>0?W.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=un(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,b)=>Rl(v,b,r,a,n)),u=t.ends.map((v,b)=>Rl(v,b,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),u.splice(v,0,r[v]),n.splice(v,0,1));let l=n.map(v=>Math.sign(v));n.forEach((v,b,S)=>{if(v<0){let x=(u[b]-s[b])/v,T=s[b],z=T+x*n[b];s[b]=z,u[b]=T,S[b]=-v}});let d=r.slice(0);a.forEach((v,b)=>{d[v]=Math.ceil((u[v]-s[v])/n[v])});let c={dims:d,dataType:e[0].dataType},f=ue("output",e[0].dataType,d.length),m=j("input",e[0].dataType,e[0].dims.length),g=W.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:g},{type:12,data:s},{type:6,data:l},{type:12,data:n},...ce(e[0].dims,d)],k=v=>`
      ${v.registerUniforms(_).declareVariables(m,f)}
        ${g$(m,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},Ev=(e,t)=>{h$(e.inputs,t);let r=m$(e.inputs,t);e.compute(_$(e.inputs,r),{inputs:[0]})},zv=e=>{let t=e.starts,r=e.ends,i=e.axes;return Oe({starts:t,ends:r,axes:i})}}),$$,y$,Cv,Ov,Ek=ee(()=>{me(),ye(),He(),Sr(),we(),$$=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},y$=(e,t)=>{let r=e.inputs[0],i=r.dims,a=W.size(i),n=i.length,s=W.normalizeAxis(t.axis,n),u=s<i.length-1,l,d=[];u?(d=Array.from({length:n},(E,O)=>O),d[s]=n-1,d[n-1]=s,l=e.compute(yt(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[n-1],m=a/f,g=Le(f),_=f/g,y=64;m===1&&(y=256);let k=(E,O)=>O===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:O===2?`max(${E}.x, ${E}.y)`:O===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,v=j("x",l.dataType,l.dims,g),b=ue("result",l.dataType,l.dims,g),S=v.type.value,x=Ye(l.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,T=E=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${E.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${E.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${x}
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
          rowMaxShared = ${S}(${k("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
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
          rowSumShared = ${S}(${xr("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${g};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:_}]}),getShaderSource:T},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(yt(z,d),{inputs:[z]})},Cv=(e,t)=>{$$(e.inputs),y$(e,t)},Ov=e=>Oe({axis:e.axis})}),Nl,b$,w$,v$,Av,zk=ee(()=>{me(),ye(),we(),Nl=e=>Array.from(e.getBigInt64Array(),Number),b$=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Nl(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},w$=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},v$=(e,t)=>{let r=e[0].dims,i=t??Nl(e[1]),a=w$(r,i),n=W.size(a),s=e[0].dataType,u=j("input",s,r.length),l=ue("output",s,a.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...ce(e[0].dims,a)]}),getShaderSource:d}},Av=e=>{b$(e.inputs),e.compute(v$(e.inputs),{inputs:[0]})}}),x$,k$,Bv,Ck=ee(()=>{me(),ye(),we(),x$=(e,t,r,i,a)=>{let n=ue("output_data",a,r.length,4),s=j("a_data",t[1].dataType,t[1].dims.length,4),u=j("b_data",t[2].dataType,t[2].dims.length,4),l=j("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,m,g)=>`select(${m}, ${f}, ${g})`;if(!i)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(m,g,_="")=>{let y=`a_data[index_a${g}][component_a${g}]`,k=`b_data[index_b${g}][component_b${g}]`,v=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${n.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_b${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${m}[${g}] = ${_}(${c(y,k,v)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},k$=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(W.areEqual(t,r)&&W.areEqual(r,i)),s=t,u=W.size(t);if(n){let d=Si.calcShape(Si.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=W.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>x$(d,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...ce(i,t,r,s)]})}},Bv=e=>{e.compute(k$(e.inputs))}}),Rv,Ok=ee(()=>{H3(),up(),F3(),j3(),K3(),Z3(),Q3(),tk(),ik(),ak(),nk(),sk(),ok(),uk(),lk(),dk(),pk(),ck(),fk(),hk(),mk(),gk(),_k(),$k(),yk(),J2(),bk(),wk(),vk(),xk(),kk(),op(),Sk(),av(),Tk(),Ik(),Ek(),rv(),zk(),Sr(),lp(),Ck(),Rv=new Map([["Abs",[I1]],["Acos",[E1]],["Acosh",[z1]],["Add",[l2]],["ArgMax",[x1,ud]],["ArgMin",[v1,ud]],["Asin",[C1]],["Asinh",[O1]],["Atan",[A1]],["Atanh",[B1]],["Attention",[k1]],["AveragePool",[fv,cv]],["BatchNormalization",[S1]],["BiasAdd",[T1]],["BiasSplitGelu",[u2]],["Cast",[N1,R1]],["Ceil",[D1]],["Clip",[M1]],["Concat",[y2,b2]],["Conv",[hd,fd]],["ConvTranspose",[C2,z2]],["Cos",[P1]],["Cosh",[U1]],["CumSum",[O2,A2]],["DepthToSpace",[B2,R2]],["DequantizeLinear",[bv,wv]],["Div",[d2]],["Einsum",[N2,M2]],["Elu",[q1,_n]],["Equal",[p2]],["Erf",[W1]],["Exp",[V1]],["Expand",[D2]],["FastGelu",[P2]],["Floor",[L1]],["FusedConv",[hd,fd]],["Gather",[q2,U2]],["GatherElements",[F2,H2]],["GatherBlockQuantized",[L2,G2]],["GatherND",[W2,V2]],["Gelu",[G1]],["Gemm",[K2,j2]],["GlobalAveragePool",[mv,hv]],["GlobalMaxPool",[yv,$v]],["Greater",[m2]],["GreaterOrEqual",[_2]],["GridSample",[Z2,Q2]],["GroupQueryAttention",[nv]],["HardSigmoid",[Y1,X1]],["InstanceNormalization",[sv]],["LayerNormalization",[ov]],["LeakyRelu",[H1,_n]],["Less",[g2]],["LessOrEqual",[$2]],["Log",[s2]],["MatMul",[uv]],["MatMulNBits",[lv,dv]],["MaxPool",[gv,_v]],["Mul",[c2]],["MultiHeadAttention",[Y2,X2]],["Neg",[j1]],["Not",[F1]],["Pad",[pv]],["Pow",[f2]],["QuickGelu",[o2,_n]],["Range",[vv]],["Reciprocal",[K1]],["ReduceMin",[_1]],["ReduceMean",[c1]],["ReduceMax",[g1]],["ReduceSum",[y1]],["ReduceProd",[$1]],["ReduceL1",[f1]],["ReduceL2",[h1]],["ReduceLogSum",[w1]],["ReduceLogSumExp",[m1]],["ReduceSumSquare",[b1]],["Relu",[Z1]],["Resize",[Sv,Tv]],["RotaryEmbedding",[iv]],["ScatterND",[kv,xv]],["Sigmoid",[Q1]],["Sin",[J1]],["Sinh",[e2]],["Slice",[Ev,zv]],["SkipLayerNormalization",[Iv]],["Split",[ev,tv]],["Sqrt",[t2]],["Softmax",[Cv,Ov]],["Sub",[h2]],["Tan",[r2]],["Tanh",[i2]],["ThresholdedRelu",[n2,_n]],["Tile",[Av]],["Transpose",[e1,t1]],["Where",[Bv]]])}),Nv,Ak=ee(()=>{Zt(),mr(),we(),Nv=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){jt(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),St(e.programInfo.name)}dispose(){}build(e,t){jt(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=Jw(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});Te("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return St(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Mv={};Ei(Mv,{WebGpuBackend:()=>Dv});var S$,T$,I$,Dv,Bk=ee(()=>{Zt(),me(),mr(),Kw(),L3(),Ok(),Ak(),S$=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},T$=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${S$(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},I$=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Dv=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=n=>t.features.has(n)&&r.push(n)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new I$(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Xw(this),this.programManager=new Nv(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ip(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;jt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),u=s.kernelType,l=s.kernelName,d=a.programName,c=a.inputTensorViews,f=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let _=Number(m-this.queryTimeBase),y=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(k=>({dims:k.dims,dataType:fr(k.dataType)})),outputsMetadata:f.map(k=>({dims:k.dims,dataType:fr(k.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:d,startTime:_,endTime:y});else{let k="";c.forEach((b,S)=>{k+=`input[${S}]: [${b.dims}] | ${fr(b.dataType)}, `});let v="";f.forEach((b,S)=>{v+=`output[${S}]: [${b.dims}] | ${fr(b.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${d}" ${k}${v}execution time: ${y-_} ns`)}Sn("GPU",`${d}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),St()}run(e,t,r,i,a,n){jt(e.name);let s=[];for(let b=0;b<t.length;++b){let S=t[b].data;if(S===0)continue;let x=this.gpuDataManager.get(S);if(!x)throw new Error(`no GPU data for input: ${S}`);s.push(x)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((b,S)=>S):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let f=[],m=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=n)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let S=c[b]===-1,x=c[b]===-2,T=S||x?a(u[b].dataType,u[b].dims):i(c[b],u[b].dataType,u[b].dims);if(f.push(T),T.data===0)continue;let z=this.gpuDataManager.get(T.data);if(!z)throw new Error(`no GPU data for output: ${T.data}`);if(S&&this.temporaryData.push(z),x){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(z)}m.push(z)}if(s.length!==t.length||m.length!==f.length){if(m.length===0)return St(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let b=0,S=[];d.forEach(E=>{let O=typeof E.data=="number"?[E.data]:E.data;if(O.length===0)return;let R=E.type===10?2:4,U,Q;E.type===10?(Q=O.length>4?16:O.length>2?8:O.length*R,U=O.length>4?16:R*O.length):(Q=O.length<=2?O.length*R:16,U=16),b=Math.ceil(b/Q)*Q,S.push(b);let L=E.type===10?8:4;b+=O.length>4?Math.ceil(O.length/L)*U:O.length*R});let x=16;b=Math.ceil(b/x)*x;let T=new ArrayBuffer(b);d.forEach((E,O)=>{let R=S[O],U=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(T,R,U.length).set(U);else if(E.type===12)new Uint32Array(T,R,U.length).set(U);else if(E.type===10)new Uint16Array(T,R,U.length).set(U);else if(E.type===1)new Float32Array(T,R,U.length).set(U);else throw new Error(`Unsupported uniform type: ${fr(E.type)}`)});let z=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,T,0,b),this.gpuDataManager.release(z.id),g={offset:0,size:b,buffer:z.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),y=_[1]===1&&_[2]===1,k=T$(e,t,y),v=this.programManager.getArtifact(k);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(k,v),Te("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let b=0;b<d.length;b++){let S=d[b],x=S.type,T=typeof S.data=="number"?1:S.data.length,[z,E]=v.uniformVariablesInfo[b];if(x!==z||T!==E)throw new Error(`Uniform variable ${b} mismatch: expect type ${z} with size ${E}, got type ${x} with size ${T} in program "${v.programInfo.name}".`)}}if(Te("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,s,m,_,g),St(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Rv.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),Te("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await nd(this,e,t);return ap(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Te("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Te("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Te("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Pv={};Ei(Pv,{init:()=>Uv});var Qn,E$,Uv,Rk=ee(()=>{me(),mr(),ye(),V3(),Qn=class qv{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(W.size(t)!==W.size(this.dims))throw new Error("Invalid new shape");return new qv(this.module,this.dataType,this.data,t)}},E$=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*a++,n)),c=Number(e.getValue(i*a++,"*")),f=Number(e.getValue(i*a++,n)),m=[];for(let g=0;g<f;g++)m.push(Number(e.getValue(i*a++,n)));u.push(new Qn(e,d,c,m))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,u,l)=>new Qn(this.module,u,this.output(s,l),l),n=(s,u)=>{let l=si(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Qn(this.module,s,d,u)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Uv=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(Bk(),kn(Mv)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)Te("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{Te("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),f)}},async(u,l,d)=>{Te("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{Te("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let f=new E$(t,s,Number(l));return s.computeKernel(Number(u),f,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new Qw(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,d,c)=>n.ensureTensor(s,u,l,d,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u)])}}}),z$,mp,gp,br,C$,Ml,gs,_p,$p,Dl,yp,bp,wp,Wv=ee(()=>{U3(),q3(),me(),_i(),Jd(),Gw(),z$=(e,t)=>{De()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},mp=async e=>{z$(e.wasm.numThreads,ps(e.logLevel))},gp=async(e,t)=>{De().asyncInit?.();{let r=(Rk(),kn(Pv)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",De(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",De(),e)}}},br=new Map,C$=e=>{let t=De(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&Ne("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Ml=(e,t)=>{let r=De(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&Ne("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let d=r.HEAPU32[a/4+1],c=[];for(let f=0;f<d;f++){let m=Number(r.getValue(a+8+f*n,"*"));c.push(m!==0?r.UTF8ToString(m):Number(r.getValue(a+8+(f+d)*n,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},gs=e=>{let t=De(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},_p=async(e,t)=>{let r,i,a=De();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=gs(e);let n=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await Lw(t),t?.externalData&&a.mountExternalData){let x=[];for(let T of t.externalData){let z=typeof T=="string"?T:T.path;x.push(rp(typeof T=="string"?T:T.data).then(E=>{a.mountExternalData(z,E)}))}await Promise.all(x)}for(let x of t?.executionProviders??[])if((typeof x=="string"?x:x.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof x!="string"){let T=x,z=T?.context,E=T?.gpuDevice,O=T?.deviceType,R=T?.powerPreference;z?a.currentContext=z:E?a.currentContext=await a.webnnCreateMLContext(E):a.currentContext=await a.webnnCreateMLContext({deviceType:O,powerPreference:R})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),a.webgpuOnCreateSession?.(n),n===0&&Ne("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[f,m]=C$(n),g=!!t?.enableGraphCapture,_=[],y=[],k=[],v=[],b=[];for(let x=0;x<f;x++){let[T,z,E]=Ml(n,x);T===0&&Ne("Can't get an input name."),d.push(T);let O=a.UTF8ToString(T);_.push(O),k.push(z===0?{name:O,isTensor:!1}:{name:O,isTensor:!0,type:fr(z),shape:E})}for(let x=0;x<m;x++){let[T,z,E]=Ml(n,x+f);T===0&&Ne("Can't get an output name."),c.push(T);let O=a.UTF8ToString(T);y.push(O),v.push(z===0?{name:O,isTensor:!1}:{name:O,isTensor:!0,type:fr(z),shape:E});{if(g&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let R=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[O]??"cpu",U=a.webnnIsGraphOutput;if(R==="cpu"&&U&&U(n,O)){b.push("ml-tensor-cpu-output");continue}if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer"&&R!=="ml-tensor")throw new Error(`Not supported preferred output location: ${R}.`);if(g&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(R)}}let S=null;return b.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&Ne("Can't create IO binding."),S={handle:u,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>id(x))}),br.set(n,[n,d,c,S,g,!1]),[n,_,y,k,v]}catch(f){throw d.forEach(m=>a._OrtFree(m)),c.forEach(m=>a._OrtFree(m)),u!==0&&a._OrtReleaseBinding(u)!==0&&Ne("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&Ne("Can't release session."),f}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&Ne("Can't release session options."),l.forEach(f=>a._free(f)),a.unmountExternalData?.()}},$p=e=>{let t=De(),r=br.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ne("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(l=>t._OrtFree(l)),n.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&Ne("Can't release session."),br.delete(e)},Dl=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=De(),l=u.PTR_SIZE,d=e[0],c=e[1],f=e[3],m=f,g,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=si(ni(d),c);{let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=b(i,n,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=si(ni(d),c);let b=u.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=b(i,v,ni(d),c)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,g=u._malloc(_),r.push(g);for(let b=0;b<v.length;b++){if(typeof v[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);u.setValue(g+b*l,Lt(v[b],r),"*")}}else{let b=u.webnnIsGraphInput,S=u.webnnIsGraphOutput;if(d!=="string"&&b&&S){let x=u.UTF8ToString(a);if(b(i,x)||S(i,x)){let T=ni(d);_=si(T,c),m="ml-tensor";let z=u.webnnCreateTemporaryTensor,E=u.webnnUploadTensor;if(!z||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let O=await z(i,T,c);E(O,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),g=O}else _=v.byteLength,g=u._malloc(_),r.push(g),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),g)}else _=v.byteLength,g=u._malloc(_),r.push(g),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),g)}}let y=u.stackSave(),k=u.stackAlloc(4*c.length);try{c.forEach((b,S)=>u.setValue(k+S*l,b,l===4?"i32":"i64"));let v=u._OrtCreateTensor(ni(d),g,_,k,c.length,id(m));v===0&&Ne(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(v)}finally{u.stackRestore(y)}},yp=async(e,t,r,i,a,n)=>{let s=De(),u=s.PTR_SIZE,l=br.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],m=l[3],g=l[4],_=l[5],y=t.length,k=i.length,v=0,b=[],S=[],x=[],T=[],z=s.stackSave(),E=s.stackAlloc(y*u),O=s.stackAlloc(y*u),R=s.stackAlloc(k*u),U=s.stackAlloc(k*u);try{[v,b]=Vw(n);for(let M=0;M<y;M++)await Dl(r[M],S,T,e,c[t[M]],t[M],g);for(let M=0;M<k;M++)await Dl(a[M],x,T,e,f[i[M]],y+i[M],g);for(let M=0;M<y;M++)s.setValue(E+M*u,S[M],"*"),s.setValue(O+M*u,c[t[M]],"*");for(let M=0;M<k;M++)s.setValue(R+M*u,x[M],"*"),s.setValue(U+M*u,f[i[M]],"*");if(m&&!_){let{handle:M,outputPreferredLocations:te,outputPreferredLocationsEncoded:K}=m;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);for(let V=0;V<y;V++){let ae=t[V];await s._OrtBindInput(M,c[ae],S[V])!==0&&Ne(`Can't bind input[${V}] for session=${e}.`)}for(let V=0;V<k;V++){let ae=i[V];a[V]?.[3]?s._OrtBindOutput(M,f[ae],x[V],0)!==0&&Ne(`Can't bind pre-allocated output[${V}] for session=${e}.`):s._OrtBindOutput(M,f[ae],0,K[ae])!==0&&Ne(`Can't bind output[${V}] to ${te[V]} for session=${e}.`)}br.set(e,[d,c,f,m,g,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let Q;m?Q=await s._OrtRunWithBinding(d,m.handle,k,R,v):Q=await s._OrtRun(d,O,E,y,U,k,R,v),Q!==0&&Ne("failed to call OrtRun().");let L=[],X=[];for(let M=0;M<k;M++){let te=Number(s.getValue(R+M*u,"*"));if(te===x[M]){L.push(a[M]);continue}let K=s.stackSave(),V=s.stackAlloc(4*u),ae=!1,G,ne=0;try{s._OrtGetTensorData(te,V,V+u,V+2*u,V+3*u)!==0&&Ne(`Can't access output tensor data on index ${M}.`);let B=u===4?"i32":"i64",D=Number(s.getValue(V,B));ne=s.getValue(V+u,"*");let Y=s.getValue(V+u*2,"*"),C=Number(s.getValue(V+u*3,B)),re=[];for(let xe=0;xe<C;xe++)re.push(Number(s.getValue(Y+xe*u,B)));s._OrtFree(Y)!==0&&Ne("Can't free memory for tensor dims.");let Ae=re.reduce((xe,ge)=>xe*ge,1);G=fr(D);let qe=m?.outputPreferredLocations[i[M]];if(G==="string"){if(qe==="gpu-buffer"||qe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let xe=[];for(let ge=0;ge<Ae;ge++){let ve=s.getValue(ne+ge*u,"*"),Yt=s.getValue(ne+(ge+1)*u,"*"),Tt=ge===Ae-1?void 0:Yt-ve;xe.push(s.UTF8ToString(ve,Tt))}L.push([G,re,xe,"cpu"])}else if(qe==="gpu-buffer"&&Ae>0){let xe=s.jsepGetBuffer;if(!xe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ge=xe(ne),ve=si(D,Ae);if(ve===void 0||!ep(G))throw new Error(`Unsupported data type: ${G}`);ae=!0,L.push([G,re,{gpuBuffer:ge,download:s.jsepCreateDownloader(ge,ve,G),dispose:()=>{s._OrtReleaseTensor(te)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(qe==="ml-tensor"&&Ae>0){let xe=s.webnnEnsureTensor,ge=s.webnnIsGraphInputOutputTypeSupported;if(!xe||!ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(si(D,Ae)===void 0||!tp(G))throw new Error(`Unsupported data type: ${G}`);if(!ge(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let ve=await xe(e,ne,D,re,!1);ae=!0,L.push([G,re,{mlTensor:ve,download:s.webnnCreateMLTensorDownloader(ne,G),dispose:()=>{s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(te)}},"ml-tensor"])}else if(qe==="ml-tensor-cpu-output"&&Ae>0){let xe=s.webnnCreateMLTensorDownloader(ne,G)(),ge=L.length;ae=!0,X.push((async()=>{let ve=[ge,await xe];return s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(te),ve})()),L.push([G,re,[],"cpu"])}else{let xe=$s(G),ge=new xe(Ae);new Uint8Array(ge.buffer,ge.byteOffset,ge.byteLength).set(s.HEAPU8.subarray(ne,ne+ge.byteLength)),L.push([G,re,ge,"cpu"])}}finally{s.stackRestore(K),G==="string"&&ne&&s._free(ne),ae||s._OrtReleaseTensor(te)}}m&&!g&&(s._OrtClearBoundOutputs(m.handle)!==0&&Ne("Can't clear bound outputs."),br.set(e,[d,c,f,m,g,!1]));for(let[M,te]of await Promise.all(X))L[M][2]=te;return L}finally{s.webnnOnRunEnd?.(d),s.stackRestore(z),S.forEach(Q=>s._OrtReleaseTensor(Q)),x.forEach(Q=>s._OrtReleaseTensor(Q)),T.forEach(Q=>s._free(Q)),v!==0&&s._OrtReleaseRunOptions(v),b.forEach(Q=>s._free(Q))}},bp=e=>{let t=De(),r=br.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&Ne("Can't get an profile file name."),t._OrtFree(a)},wp=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),wr,wt,bi,ln,dn,Xn,Pl,Yn,Jr,ei,O$,Vv,Lv,Gv,Hv,Fv,jv,Kv,Zv=ee(()=>{Zt(),Wv(),_i(),Xd(),wr=()=>!!Ue.wasm.proxy&&typeof document<"u",bi=!1,ln=!1,dn=!1,Yn=new Map,Jr=(e,t)=>{let r=Yn.get(e);r?r.push(t):Yn.set(e,[t])},ei=()=>{if(bi||!ln||dn||!wt)throw new Error("worker not ready")},O$=e=>{switch(e.data.type){case"init-wasm":bi=!1,e.data.err?(dn=!0,Pl[1](e.data.err)):(ln=!0,Pl[0]()),Xn&&(URL.revokeObjectURL(Xn),Xn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Yn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Vv=async()=>{if(!ln){if(bi)throw new Error("multiple calls to 'initWasm()' detected.");if(dn)throw new Error("previous call to 'initWasm()' failed.");if(bi=!0,wr())return new Promise((e,t)=>{wt?.terminate(),qw().then(([r,i])=>{try{wt=i,wt.onerror=n=>t(n),wt.onmessage=O$,Pl=[e,t];let a={type:"init-wasm",in:Ue};!a.in.wasm.wasmPaths&&(r||rd)&&(a.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href,import.meta.url).href}),wt.postMessage(a),Xn=r}catch(a){t(a)}},t)});try{await Yd(Ue.wasm),await mp(Ue),ln=!0}catch(e){throw dn=!0,e}finally{bi=!1}}},Lv=async e=>{if(wr())return ei(),new Promise((t,r)=>{Jr("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:Ue}};wt.postMessage(i)});await gp(Ue,e)},Gv=async e=>wr()?(ei(),new Promise((t,r)=>{Jr("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};wt.postMessage(i,[e.buffer])})):gs(e),Hv=async(e,t)=>{if(wr()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return ei(),new Promise((r,i)=>{Jr("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),wt.postMessage(a,n)})}else return _p(e,t)},Fv=async e=>{if(wr())return ei(),new Promise((t,r)=>{Jr("release",[t,r]);let i={type:"release",in:e};wt.postMessage(i)});$p(e)},jv=async(e,t,r,i,a,n)=>{if(wr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return ei(),new Promise((s,u)=>{Jr("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};wt.postMessage(d,wp(l))})}else return yp(e,t,r,i,a,n)},Kv=async e=>{if(wr())return ei(),new Promise((t,r)=>{Jr("end-profiling",[t,r]);let i={type:"end-profiling",in:e};wt.postMessage(i)});bp(e)}}),Ul,A$,Qv,Nk=ee(()=>{Zt(),Zv(),me(),Qd(),Gw(),Ul=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},A$=e=>{switch(e[3]){case"cpu":return new Ht(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ep(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Ht.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!tp(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Ht.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Qv=class{async fetchModelAndCopyToWasmMemory(e){return Gv(await rp(e))}async loadModel(e,t){jt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Hv(r,t),St()}async dispose(){return Fv(this.sessionId)}async run(e,t,r){jt();let i=[],a=[];Object.entries(e).forEach(f=>{let m=f[0],g=f[1],_=this.inputNames.indexOf(m);if(_===-1)throw new Error(`invalid input '${m}'`);i.push(g),a.push(_)});let n=[],s=[];Object.entries(t).forEach(f=>{let m=f[0],g=f[1],_=this.outputNames.indexOf(m);if(_===-1)throw new Error(`invalid output '${m}'`);n.push(g),s.push(_)});let u=i.map((f,m)=>Ul(f,()=>`input "${this.inputNames[a[m]]}"`)),l=n.map((f,m)=>f?Ul(f,()=>`output "${this.outputNames[s[m]]}"`):null),d=await jv(this.sessionId,a,u,s,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[s[f]]]=n[f]??A$(d[f]);return St(),c}startProfiling(){}endProfiling(){Kv(this.sessionId)}}}),Xv={};Ei(Xv,{OnnxruntimeWebAssemblyBackend:()=>_d,initializeFlags:()=>gd,wasmBackend:()=>Yv});var gd,_d,Yv,Mk=ee(()=>{Zt(),Zv(),Nk(),gd=()=>{(typeof Ue.wasm.initTimeout!="number"||Ue.wasm.initTimeout<0)&&(Ue.wasm.initTimeout=0);let e=Ue.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ue.wasm.simd=!1),typeof Ue.wasm.proxy!="boolean"&&(Ue.wasm.proxy=!1),typeof Ue.wasm.trace!="boolean"&&(Ue.wasm.trace=!1),typeof Ue.wasm.numThreads!="number"||!Number.isInteger(Ue.wasm.numThreads)||Ue.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ue.wasm.numThreads=1;else{let t=typeof navigator>"u"?v3("node:os").cpus().length:navigator.hardwareConcurrency;Ue.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},_d=class{async init(e){gd(),await Vv(),await Lv(e)}async createInferenceSessionHandler(e,t){let r=new Qv;return await r.loadModel(e,t),r}},Yv=new _d});Zt();Zt();Zt();var Dk="1.22.0",Pk=Rw;{let e=(Mk(),kn(Xv)).wasmBackend;ui("webgpu",e,5),ui("webnn",e,5),ui("cpu",e,10),ui("wasm",e,10)}Object.defineProperty(Ue.versions,"web",{value:Dk,enumerable:!0});/**
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
 */const qk=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return Zd},get TRACE(){return Sn},get TRACE_FUNC_BEGIN(){return jt},get TRACE_FUNC_END(){return St},get Tensor(){return Ht},default:Pk,get env(){return Ue},get registerBackend(){return ui}},Symbol.toStringTag,{value:"Module"}));export{bd as F,Gt as H,qk as a,Pe as b,Uk as o};
//# sourceMappingURL=vendor-onnxruntime-web-DFgSkXt1.js.map
