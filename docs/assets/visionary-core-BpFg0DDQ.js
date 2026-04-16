import{env as st,Tensor as Ce,InferenceSession as qt}from"./vendor-onnxruntime-web-DpEzweEQ.js";import{u as Hs,v as Vs,w as js,x as ps,y as Rt,z as qs,F as ft,T as Xs,H as B,I as Ys,L as Xt,J as ke,K as yt,N as Js,Q as Te,U as Yt,X as Qs,Y as Ks,Z as Zs,_ as er,$ as tr,a0 as Ft,a1 as sr,a2 as ms,a3 as rr,a4 as nr,a5 as gs,a6 as ir,a7 as ys,a8 as or,a9 as ws,aa as _s,ab as ar,ac as Le,ad as lr,ae as At,af as rt,ag as ye,ah as fe,ai as Jt}from"./three-DJlHk5u2.js";import{_ as vs}from"./visionary-controllers-BLzJKLDy.js";import{c as Qt,a as Ue,b as cr,s as ur,d as dr,f as fr,e as nt,g as hr,h as pr,m as Kt,t as mr,i as _e,j as ht,k as gr,l as bs,n as $e,o as We,p as ze,q as je,r as yr,u as wr,v as Mt,w as it,x as ot,y as _r,z as vr,A as Zt,B as br,C as xr}from"./vendor-gl-matrix-Bfae2N03.js";import{u as Pr}from"./vendor-fflate-BJlM68iN.js";import{M as Sr,A as Mr}from"./vendor-mp4-muxer-DaZBAdSD.js";let xs="/src/ort/";function Cr(f){xs=f}function at(){return xs}function zn(f){if(Cr(f),typeof window<"u"&&window.ort){const e=window.ort;e.env.wasm.wasmPaths=at(),console.log(`[VisionaryCore] ONNX Runtime WASM paths configured: ${at()}`)}else if(console.warn("[VisionaryCore] ONNX Runtime not available, configuration will be applied when ort is loaded"),typeof window<"u"){const e=()=>{if(window.ort){const t=window.ort;t.env.wasm.wasmPaths=at(),console.log(`[VisionaryCore] ONNX Runtime WASM paths configured (delayed): ${at()}`)}else setTimeout(e,50)};setTimeout(e,50)}}async function Ct(f){try{if(await f.queryPermission({mode:"readwrite"})!=="granted"&&await f.requestPermission({mode:"readwrite"})!=="granted")throw new Error("文件夹权限被拒绝或已失效");const t=f.name}catch(e){const t=e.message||String(e);throw t.includes("could not be found")||t.includes("not found")||t.includes("权限")||t.includes("permission")?new Error(`文件夹句柄已失效：${t}`):e}}async function Ps(f){try{const e=[];for await(const[t,s]of f)e.push([t,s]);for(const[t,s]of e)try{s.kind==="file"?await f.removeEntry(t):s.kind==="directory"&&(await Ps(s),await f.removeEntry(t))}catch(r){const n=r.message||String(r);console.warn(`[Scene] 删除条目 ${t} 时出现错误:`,n)}}catch(e){const t=e.message||String(e);if(!t.includes("could not be found")&&!t.includes("not found"))throw console.warn("[Scene] 清空文件夹时出现错误:",t),new Error(`清空文件夹失败: ${t}`)}}async function $n(f){const{skyboxEnabled:e,scenes:t,folderHandle:s,meta:r}=f;await Ct(s),await Ps(s);const n=new Set;for(const o of t)if(!(!o||!Array.isArray(o.models)))for(const a of o.models){if(!a)continue;if(!a.id)throw new Error("模型必须包含id字段");if(!a.originFile)continue;const l=a.name||a.assetName;if(!l)throw new Error(`对象 ${a.id} 缺少保存外部资源所需的名称`);if(n.has(l))continue;n.add(l);let c;if(a.originFile instanceof File||a.originFile instanceof Blob)c=a.originFile;else if("getFile"in a.originFile&&typeof a.originFile.getFile=="function")c=await a.originFile.getFile();else throw new Error(`无法识别模型文件originFile类型: ${a.name}`);try{await Ct(s);const u=await(await s.getFileHandle(l,{create:!0})).createWritable();await u.write(c),await u.close()}catch(d){const u=d.message||String(d);throw console.error("[Scene] 写入模型文件失败:",l,d),u.includes("could not be found")||u.includes("not found")||u.includes("已失效")||u.includes("权限")?d:new Error(`写入模型文件 ${l} 失败: ${u}`)}}const i={version:1,meta:r||{createdAt:new Date().toISOString(),app:"VisionaryEditor"},skyboxEnabled:e||!1,camera:f.cameraParams||{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],fov:60,nearPlane:.1,farPlane:1e3},totalFrames:f.totalFrames||100,scenes:t.map(o=>({...o,models:o.models.map(({originFile:a,...l})=>l)}))};await Ct(s);try{console.log("[Scene] 写入 scene.json:",i);const a=await(await s.getFileHandle("scene.json",{create:!0})).createWritable();await a.write(JSON.stringify(i,null,2)),await a.close()}catch(o){const a=o.message||String(o);throw console.error("[Scene] 写入 scene.json 失败:",o),new Error(`写入场景配置文件失败: ${a}`)}}class Fe{buffer;bindGroup;label;size;_data;device;static bindGroupLayout(e){return e.createBindGroupLayout({label:"uniform bind group layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]})}constructor(e,t,s){this.device=e,this.label=s;const r=t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength);this.size=r.byteLength,this._data=new ArrayBuffer(this.size),new Uint8Array(this._data).set(r),this.buffer=e.createBuffer({label:s,size:this.size,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!1}),e.queue.writeBuffer(this.buffer,0,this._data),this.bindGroup=e.createBindGroup({label:s?`${s} bind group`:void 0,layout:Fe.bindGroupLayout(e),entries:[{binding:0,resource:{buffer:this.buffer}}]})}get data(){return this._data.slice(0)}set dataBytes(e){if(e.byteLength!==this.size)throw new Error(`Uniform size mismatch: expected ${this.size}, got ${e.byteLength}`);this._data=e.slice(0)}setData(e){if(e.byteLength!==this.size)throw new Error(`Uniform size mismatch: expected ${this.size}, got ${e.byteLength}`);new Uint8Array(this._data).set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}flush(e){(e||this.device).queue.writeBuffer(this.buffer,0,new Uint8Array(this._data))}clone(e){const t=e||this.device;return new Fe(t,this._data,this.label)}destroy(){this.buffer.destroy()}}class Je{min;max;constructor(e,t){this.min=Qt(e),this.max=Qt(t)}center(){const e=Ue();return cr(e,this.min,this.max),ur(e,e,.5),e}radius(){return .5*dr(this.min,this.max)}}const Tr=fr(1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1);function Br(f){const e=Math.sqrt(f);return Number.isInteger(e)?(e|0)-1:void 0}function Ne(f,e){const t=nt();hr(t,f);const s=pr(e[0],0,0,0,e[1],0,0,0,e[2]),r=nt();Kt(r,t,s);const n=nt();mr(n,r);const i=nt();return Kt(i,r,n),[i[0],i[1],i[2],i[4],i[5],i[8]]}function Ss(f){if(f>=0)return 1/(1+Math.exp(-f));const e=Math.exp(f);return e/(1+e)}const Ms=new Float32Array(1),Ur=new Uint32Array(Ms.buffer);function w(f,e={}){const{round:t="rne",ftz:s=!1,saturate:r=!1,canonicalNaN:n=!0,emulateLegacyExpCutoff:i}=e;Ms[0]=f;const o=Ur[0]>>>0,a=o>>>31<<15,l=o>>>23&255,c=o&8388607;if(l===255)return c!==0?a|(n?32256:31744|c>>>13):a|31744;if(i!==void 0&&l<i)return a;let u=l-127+15;if(u>=31)return a|(r?31743:31744);if(u<=0){if(u<-10||s)return a;let h=c|8388608;const v=14-u;let y=h>>>v;if(t==="rne"){const g=(1<<v)-1,m=h&g,x=1<<v-1;if((m>x||m===x&&y&1)&&(y++,y===1024))return a|1024}return a|y}let p=c>>>13;if(t==="rne"){const h=c>>>12&1,v=c&4095;if(h&&(v!==0||p&1)&&(p++,p===1024&&(p=0,u++,u>=31)))return a|(r?31743:31744)}return a|u<<10|p}const Gr=f=>(f+1)*(f+1);function Er(f){const{props:e,iDC0:t,iDC1:s,iDC2:r,k:n,shU32:i}=f,o=[];for(let p=0;p<e.length;++p){const h=e[p];if(h.startsWith("f_rest_")){const v=Number(h.slice(7));o.push({idx:p,order:Number.isFinite(v)?v:1e9+p})}}o.sort((p,h)=>p.order-h.order);const a=Gr(n)-1,l=a*3;o.length<l&&console.warn(`[copySH_f16] f_rest_* too few: have=${o.length}, need=${l}. Will pad zeros.`);const c=3+l;return c!==48&&console.warn(`[copySH_f16] k=${n} gives ${c} halfs; padding to 48 halfs for fixed 24 u32 stride.`),{copySH:(p,h,v=!1)=>{const y=a,g=new Uint16Array(48);g[0]=w(h[t]),g[1]=w(h[s]),g[2]=w(h[r]);let m=3;for(let x=0;x<y;++x){{const b=o[x]?.idx,P=b!==void 0?h[b]:0;g[m++]=w(P)}{const b=o[y+x]?.idx,P=b!==void 0?h[b]:0;g[m++]=w(P)}{const b=o[2*y+x]?.idx,P=b!==void 0?h[b]:0;g[m++]=w(P)}}for(;m<48;)g[m++]=0;for(let x=0;x<48;x+=2)i[p+(x>>1)]=g[x]&65535|(g[x+1]&65535)<<16;v&&console.log(`SH[k=${n}] DC (f16):`,g[0],g[1],g[2])},wordsPerPoint:24}}function Rr(f){return Number.isFinite(f[0])&&Number.isFinite(f[1])&&Number.isFinite(f[2])}function $t(f,e=!0){if(f.length===0)return{centroid:[0,0,0]};let t=0,s=0,r=0;for(const[m,x,b]of f)t+=m,s+=x,r+=b;const n=f.length,i=[t/n,s/n,r/n];if(f.length<3)return{centroid:i};let o=0,a=0,l=0,c=0,d=0,u=0;for(const[m,x,b]of f){const P=m-i[0],T=x-i[1],S=b-i[2];o+=P*P,a+=P*T,l+=P*S,c+=T*T,d+=T*S,u+=S*S}let p=1,h=1,v=1;const y=20;for(let m=0;m<y;m++){const x=o*p+a*h+l*v,b=a*p+c*h+d*v,P=l*p+d*h+u*v,T=Math.hypot(x,b,P);if(T<1e-10)break;p=x/T,h=b/T,v=P/T}let g=[p,h,v];return e&&g[1]<0&&(g=[-g[0],-g[1],-g[2]]),Rr(g)?{centroid:i,normal:g}:{centroid:i}}class Ye{static async loadHDRTexture(e){const s=await new Hs().loadAsync(e);return s.mapping=Vs,s}static async createPMREMEnvironmentMap(e,t){if(!e)return console.warn("[EnvMapHelper] 渲染器未初始化，无法创建 PMREM 环境贴图"),null;const s=e.backend;if(!s)return console.warn("[EnvMapHelper] 渲染器 backend 未初始化，无法创建 PMREM 环境贴图"),null;if(!s?.device)return console.warn("[EnvMapHelper] 渲染器 device 不存在，无法创建 PMREM 环境贴图"),null;if(!t||!t.image)return console.warn("[EnvMapHelper] 纹理无效，无法创建 PMREM 环境贴图"),null;await new Promise(i=>setTimeout(i,0));let n=null;try{if(n=new js(e),!n)return console.warn("[EnvMapHelper] PMREMGenerator 创建失败"),null;if("fromEquirectangular"in n&&typeof n.fromEquirectangular=="function"){const i=n.fromEquirectangular(t);if(!i)return console.warn("[EnvMapHelper] PMREMGenerator.fromEquirectangular 返回 null"),n&&n.dispose(),null;if(!i.texture)return console.warn("[EnvMapHelper] PMREMGenerator 返回的对象没有 texture 属性"),n&&n.dispose(),null;const o=i.texture;return o?(n&&n.dispose(),o):(console.warn("[EnvMapHelper] PMREM 环境贴图为 null"),n&&n.dispose(),null)}else return console.warn("[EnvMapHelper] PMREMGenerator.fromEquirectangular 方法不存在"),n&&n.dispose(),null}catch(i){const o=i instanceof Error?i.message:String(i),a=i instanceof Error?i.stack:void 0;if(console.warn("[EnvMapHelper] PMREMGenerator 处理失败:",o),a&&console.warn("[EnvMapHelper] 错误堆栈:",a),n)try{n.dispose()}catch(l){console.warn("[EnvMapHelper] 清理 PMREMGenerator 失败:",l)}return null}}static setupRendererToneMapping(e,t=null,s=ps,r=.8){t&&"toneMapping"in t&&typeof t.toneMapping<"u"?(e.toneMapping=t.toneMapping,e.toneMappingExposure=t.toneMappingExposure??r):(e.toneMapping=s,e.toneMappingExposure=r)}static updateRendererEnvironment(e,t){"updateEnvironment"in e&&typeof e.updateEnvironment=="function"?e.updateEnvironment(t):console.log("[EnvMapHelper] renderer.updateEnvironment 方法不存在，跳过")}static setupSceneEnvironment(e,t,s){t&&(e.environment=t),s&&(e.background=s)}}class Fr{static DEFAULT_CLEAR_COLOR="#808080";static DEFAULT_TONE_MAPPING=ps;static DEFAULT_EXPOSURE=.8;static DEFAULT_PIXEL_RATIO=1;static DEFAULT_FALLBACK_HDR_URL="/public/textures/hdr/daytime.hdr";static async initializeRenderer(e,t,s={}){s.sourceRenderer?this.setupRendererConfig(e,s.sourceRenderer):this.applyDefaultRendererConfig(e),s.width&&s.height&&(e.setPixelRatio(s.pixelRatio??this.DEFAULT_PIXEL_RATIO),e.setSize(s.width,s.height,!1));let r;return s.sourceRenderer&&t.environment?r=await this.setupEnvironmentFromSource(e,t,s.originalTexture,s.fallbackHdrUrl):r=await this.setupDefaultEnvironment(e,t,s.fallbackHdrUrl),this.updateRendererEnvironment(e,t),r}static applyDefaultRendererConfig(e){if(e.setClearColor(this.DEFAULT_CLEAR_COLOR,1),e.toneMapping=this.DEFAULT_TONE_MAPPING,e.toneMappingExposure=this.DEFAULT_EXPOSURE,e.outputColorSpace=Rt,e.shadowMap){const t=e.shadowMap;t.enabled=!1,t.type=qs,t.autoUpdate=!0}}static setupRendererConfig(e,t){this.setupClearColor(e,t),this.setupToneMapping(e,t),this.setupColorSpace(e,t),this.setupShadowMap(e,t),this.setupLightingSettings(e,t),this.setupRendererSettings(e,t)}static setupClearColor(e,t){try{if(typeof t.getClearColor=="function"){const s=new ft;t.getClearColor(s);const r=typeof t.getClearAlpha=="function"?t.getClearAlpha():1;e.setClearColor(s,r)}else e.setClearColor(this.DEFAULT_CLEAR_COLOR,1)}catch(s){console.warn("[RendererInitHelper] 设置清除颜色失败，使用默认值:",s),e.setClearColor(this.DEFAULT_CLEAR_COLOR,1)}}static setupToneMapping(e,t){Ye.setupRendererToneMapping(e,t)}static setupColorSpace(e,t){if("outputColorSpace"in t){const s=t.outputColorSpace;if(s!==void 0){e.outputColorSpace=s;return}}e.outputColorSpace=Rt}static setupShadowMap(e,t){e.shadowMap&&t.shadowMap&&(e.shadowMap.enabled=t.shadowMap.enabled,e.shadowMap.type=t.shadowMap.type,"autoUpdate"in t.shadowMap&&(e.shadowMap.autoUpdate=t.shadowMap.autoUpdate))}static setupLightingSettings(e,t){"physicallyCorrectLights"in t&&(e.physicallyCorrectLights=t.physicallyCorrectLights),"useLegacyLights"in t&&(e.useLegacyLights=t.useLegacyLights)}static setupRendererSettings(e,t){"sortObjects"in t&&(e.sortObjects=t.sortObjects)}static async setupDefaultEnvironment(e,t,s){if(t.environment){const r=this.getOriginalTextureFromScene(t);if(r){const n=await this.createEnvironmentMap(e,r);if(n)return{envMap:n,background:r}}}else{const r=s||this.DEFAULT_FALLBACK_HDR_URL;console.log("[RendererInitHelper] 场景无环境贴图，加载默认 HDR:",r);try{const n=await Ye.loadHDRTexture(r);if(n){const i=await this.createEnvironmentMap(e,n);if(i)return{envMap:i,background:n}}}catch(n){console.warn("[RendererInitHelper] 加载默认 HDR 失败:",n)}}return{envMap:null,background:null}}static async setupEnvironmentFromSource(e,t,s,r){if(!t.environment)return{envMap:null,background:null};const n=s;if(n){const o=await this.createEnvironmentMap(e,n);if(o)return{envMap:o,background:n}}const i=r||this.DEFAULT_FALLBACK_HDR_URL;console.warn("[RendererInitHelper] 无法获取原始纹理，回退到加载默认 HDR:",i);try{const o=await Ye.loadHDRTexture(i);if(o){const a=await this.createEnvironmentMap(e,o);if(a)return{envMap:a,background:o}}}catch(o){console.error("[RendererInitHelper] 回退 HDR 加载失败:",o)}return{envMap:null,background:null}}static getOriginalTextureFromScene(e){return e.background instanceof Xs?e.background:null}static async createEnvironmentMap(e,t){return!e||!t?null:await Ye.createPMREMEnvironmentMap(e,t)}static updateRendererEnvironment(e,t){Ye.updateRendererEnvironment(e,t)}static isRendererInitialized(e){return e?!!e.backend?.device:!1}}const es=new WeakMap,ts=new WeakMap;function dt(f){const e=es.get(f);if(e)return e;const t=f.createBindGroupLayout({label:"point cloud bind group layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});return es.set(f,t),t}function Dt(f){const e=ts.get(f);if(e)return e;const t=f.createBindGroupLayout({label:"Point Cloud Render Bind Group Layout",entries:[{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});return ts.set(f,t),t}const Wt={SPLAT_STRIDE:32};function Ar(f){const e=new ArrayBuffer(f.byteLength);return new Uint8Array(e).set(new Uint8Array(f.buffer,f.byteOffset,f.byteLength)),e}class Ae{splat2DBuffer;gaussianBufferGPU;shBufferGPU;extraPcaBufferGPU;weightBufferGPU=null;weightChannels=64;_bindGroup;_renderBindGroup;numPoints;shDeg;bbox;compressed;colorMode="sh";center;up;transform=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);mipSplatting;kernelSize;backgroundColor;_gaussianScaling=1;_maxShDeg=3;_kernelSize=.1;_opacityScale=1;_cutoffScale=1;_rendermode=0;uniforms;modelParamsUniforms;static bindGroupLayout(e){return dt(e)}static renderBindGroupLayout(e){return Dt(e)}constructor(e,t,s){this.numPoints=t.numPoints(),this.shDeg=t.shDegree(),this._maxShDeg=this.shDeg,this.bbox=new Je(t.bbox().min,t.bbox().max),this.center=t.center?_e(t.center[0],t.center[1],t.center[2]):_e(0,0,0),this.up=t.up?_e(t.up[0],t.up[1],t.up[2]):null,this.compressed=!1,s?(this.gaussianBufferGPU=s.gaussianBuffer,this.shBufferGPU=s.shBuffer,console.log("🌟 PointCloud created with external GPU buffers (no CPU upload)")):(this.gaussianBufferGPU=e.createBuffer({label:"gaussians/storage",size:t.gaussianBuffer().byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.gaussianBufferGPU,0,t.gaussianBuffer()),this.shBufferGPU=e.createBuffer({label:"sh/storage",size:t.shCoefsBuffer().byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.shBufferGPU,0,t.shCoefsBuffer()));const r=Math.max(1,this.numPoints)*16;let n=null;try{if(typeof t.extraPcaBuffer=="function"){const u=t.extraPcaBuffer();u&&u.byteLength>=r&&(n=u)}}catch{}this.extraPcaBufferGPU=e.createBuffer({label:"extra_pca/storage",size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),n?e.queue.writeBuffer(this.extraPcaBufferGPU,0,n):e.queue.writeBuffer(this.extraPcaBufferGPU,0,new Uint8Array(r)),this.splat2DBuffer=e.createBuffer({label:"splat2d/storage",size:Math.max(1,this.numPoints)*Wt.SPLAT_STRIDE,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.INDIRECT});const i=new Uint32Array([this.numPoints,this.shDeg,0,0]);this.uniforms=new Fe(e,i,"pointcloud uniforms");const o=new ArrayBuffer(128),a=new Float32Array(o),l=new Uint32Array(o);for(let u=0;u<16;u++)a[u]=u%5===0?1:0;l[16]=0,l[17]=this.numPoints,a[18]=this._gaussianScaling,l[19]=this._maxShDeg,a[20]=this._kernelSize,a[21]=this._opacityScale,a[22]=this._cutoffScale,l[23]=this._rendermode,l[24]=1,l[25]=1,a[26]=1,a[27]=0,a[28]=1,a[29]=0,this.modelParamsUniforms=new Fe(e,o,"model params");const c=dt(e);this._bindGroup=e.createBindGroup({label:"pointcloud/bg",layout:c,entries:[{binding:0,resource:{buffer:this.gaussianBufferGPU}},{binding:1,resource:{buffer:this.shBufferGPU}},{binding:2,resource:{buffer:this.splat2DBuffer}},{binding:3,resource:{buffer:this.uniforms.buffer}},{binding:4,resource:{buffer:this.extraPcaBufferGPU}}]});const d=Dt(e);this._renderBindGroup=e.createBindGroup({label:"pointcloud/render/bg",layout:d,entries:[{binding:2,resource:{buffer:this.splat2DBuffer}}]})}bindGroup(){return this._bindGroup}renderBindGroup(){return this._renderBindGroup}replaceStorageBuffers(e,t){this.gaussianBufferGPU=t.gaussianBuffer,this.shBufferGPU=t.shBuffer;const s=dt(e);this._bindGroup=e.createBindGroup({label:"pointcloud/bg",layout:s,entries:[{binding:0,resource:{buffer:this.gaussianBufferGPU}},{binding:1,resource:{buffer:this.shBufferGPU}},{binding:2,resource:{buffer:this.splat2DBuffer}},{binding:3,resource:{buffer:this.uniforms.buffer}},{binding:4,resource:{buffer:this.extraPcaBufferGPU}}]})}getExtraPcaBuffer(){return this.extraPcaBufferGPU}setWeightBufferGPU(e,t=64){this.weightBufferGPU=e,this.weightChannels=t}setWeightBufferFromArray(e,t,s=64){this.weightChannels=s,this.weightBufferGPU=e.createBuffer({label:"weights/storage",size:t.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.weightBufferGPU,0,Ar(t))}hasWeightBuffer(){return!!this.weightBufferGPU}getWeightBuffer(){return this.weightBufferGPU}getWeightChannels(){return this.weightChannels}getSplatBuffer(){return{gaussianBuffer:this.gaussianBufferGPU,shBuffer:this.shBufferGPU,numPoints:this.numPoints,shDegree:this.shDeg,bbox:this.bbox}}updateModelParamsBuffer(e,t=0){const s=new ArrayBuffer(128),r=new Float32Array(s),n=new Uint32Array(s);for(let i=0;i<16;i++)r[i]=e[i];n[16]=t,n[17]=this.numPoints,r[18]=this._gaussianScaling,n[19]=this._maxShDeg,r[20]=this._kernelSize,r[21]=this._opacityScale,r[22]=this._cutoffScale,n[23]=this._rendermode,n[24]=1,n[25]=1,r[26]=1,r[27]=0,r[28]=1,r[29]=0,this.modelParamsUniforms.setData(new DataView(s))}setTransform(e){const t=e instanceof Float32Array?e:new Float32Array(e);this.transform.set(t),this.updateModelParamsBuffer(this.transform,0)}updateModelParamsWithOffset(e,t){this.updateModelParamsBuffer(e,t)}setGaussianScaling(e){this._gaussianScaling=e,console.log(`[PointCloud] Gaussian scaling set to: ${e}`)}getGaussianScaling(){return this._gaussianScaling}setMaxShDeg(e){this._maxShDeg=Math.max(0,Math.min(3,e)),console.log(`[PointCloud] Max SH degree set to: ${this._maxShDeg}`)}getMaxShDeg(){return this._maxShDeg}setKernelSize(e){this._kernelSize=Math.max(0,e),console.log(`[PointCloud] Kernel size set to: ${this._kernelSize}`)}getKernelSize(){return this._kernelSize}setOpacityScale(e){this._opacityScale=Math.max(0,e),console.log(`[PointCloud] Opacity scale set to: ${this._opacityScale}`)}getOpacityScale(){return this._opacityScale}setCutoffScale(e){this._cutoffScale=Math.max(.1,e),console.log(`[PointCloud] Cutoff scale set to: ${this._cutoffScale}`)}getCutoffScale(){return this._cutoffScale}setRenderMode(e){this._rendermode=Math.max(0,Math.min(3,e)),console.log(`[PointCloud] Render mode set to: ${this._rendermode}`)}getRenderMode(){return this._rendermode}}var xe=(f=>(f.STOPPED="stopped",f.PLAYING="playing",f.PAUSED="paused",f))(xe||{});class Dr{_playbackState=xe.STOPPED;_animationSpeed=1;_eventListeners=[];get playbackState(){return this._playbackState}get animationSpeed(){return this._animationSpeed}get isPlaying(){return this._playbackState===xe.PLAYING}get isPaused(){return this._playbackState===xe.PAUSED}get isStopped(){return this._playbackState===xe.STOPPED}play(e=1){this._animationSpeed=Math.max(.1,e),this._playbackState=xe.PLAYING,this._emitEvent({type:"play",timestamp:performance.now(),data:{speed:this._animationSpeed}}),console.log(`🎬 Animation started at ${this._animationSpeed}x speed`)}pause(){this._playbackState===xe.PLAYING?(this._playbackState=xe.PAUSED,this._emitEvent({type:"pause",timestamp:performance.now()}),console.log("⏸️ Animation paused")):console.warn("Cannot pause: animation is not playing")}resume(){this._playbackState===xe.PAUSED?(this._playbackState=xe.PLAYING,this._emitEvent({type:"resume",timestamp:performance.now()}),console.log("▶️ Animation resumed")):console.warn("Cannot resume: animation is not paused")}stop(){this._playbackState=xe.STOPPED,this._emitEvent({type:"stop",timestamp:performance.now()}),console.log("⏹️ Animation stopped")}setSpeed(e){const t=this._animationSpeed;this._animationSpeed=Math.max(.1,e),t!==this._animationSpeed&&(this._emitEvent({type:"speedChange",timestamp:performance.now(),data:{oldSpeed:t,newSpeed:this._animationSpeed}}),console.log(`🎯 Animation speed changed from ${t}x to ${this._animationSpeed}x`))}getSpeed(){return this._animationSpeed}reset(){this._playbackState=xe.STOPPED,this._animationSpeed=1,this._emitEvent({type:"stop",timestamp:performance.now(),data:{reset:!0}}),console.log("🔄 Animation state reset")}addEventListener(e){this._eventListeners.push(e)}removeEventListener(e){const t=this._eventListeners.indexOf(e);t>-1&&this._eventListeners.splice(t,1)}clearEventListeners(){this._eventListeners=[]}getStateInfo(){return{playbackState:this._playbackState,animationSpeed:this._animationSpeed,isPlaying:this.isPlaying,isPaused:this.isPaused,isStopped:this.isStopped}}_emitEvent(e){this._eventListeners.forEach(t=>{try{t(e)}catch(s){console.error("Error in animation state event listener:",s)}})}}var pt=(f=>(f.FIXED_DELTA="fixed_delta",f.VARIABLE_DELTA="variable_delta",f))(pt||{});class Tt{static calculateDeltaTime(e){const{mode:t,currentTime:s,lastUpdateTime:r,fixedDeltaTime:n,maxDeltaTime:i}=e;switch(t){case"fixed_delta":return n;case"variable_delta":if(r===0)return 0;let o=(s-r)/1e3;return o=Math.min(Math.max(o,0),i),o;default:return console.warn(`Unknown time update mode: ${t}, using fixed delta`),n}}static isValidMode(e){return Object.values(pt).includes(e)}static fromString(e){return this.isValidMode(e)?e:(console.warn(`Invalid time update mode: ${e}, defaulting to FIXED_DELTA`),"fixed_delta")}static getDefaultFixedDeltaTime(){return .016*1.1}static getDefaultMaxDeltaTime(){return .05}static getModeDescription(e){switch(e){case"fixed_delta":return"固定时间步长 - 每帧使用固定的时间增量，确保动画播放稳定";case"variable_delta":return"可变时间步长 - 根据实际帧间隔计算时间增量，更接近真实时间";default:return"未知模式"}}}class Nt{_frameTime=-1;_lastUpdateTime=0;_config;constructor(e={}){this._config={timeScale:1,timeOffset:0,timeUpdateMode:"fixed_delta",animationSpeed:1,fixedDeltaTime:Tt.getDefaultFixedDeltaTime(),maxDeltaTime:Tt.getDefaultMaxDeltaTime(),...e}}get frameTime(){return this._frameTime}get config(){return{...this._config}}updateConfig(e){this._config={...this._config,...e}}setTimeScale(e){this._config.timeScale=Math.max(.01,e),console.log(`[TimeCalculator] Time scale set to: ${this._config.timeScale}`)}getTimeScale(){return this._config.timeScale}setTimeOffset(e){this._config.timeOffset=e,console.log(`[TimeCalculator] Time offset set to: ${this._config.timeOffset}`)}getTimeOffset(){return this._config.timeOffset}setTimeUpdateMode(e){this._config.timeUpdateMode=e,e==="variable_delta"&&(this._lastUpdateTime=0),console.log(`[TimeCalculator] Time update mode set to: ${e}`)}getTimeUpdateMode(){return this._config.timeUpdateMode}setAnimationSpeed(e){this._config.animationSpeed=Math.max(.1,e),console.log(`[TimeCalculator] Animation speed set to: ${this._config.animationSpeed}`)}getAnimationSpeed(){return this._config.animationSpeed}calculateTime(e=performance.now(),t=!0,s=!1){let r=0,n=!1;t&&!s?(this._lastUpdateTime,this._config.timeScale,this._config.animationSpeed,this._config.timeUpdateMode,this._config.fixedDeltaTime,this._config.maxDeltaTime,r=Tt.calculateDeltaTime({mode:this._config.timeUpdateMode,currentTime:e,lastUpdateTime:this._lastUpdateTime,fixedDeltaTime:this._config.fixedDeltaTime,maxDeltaTime:this._config.maxDeltaTime}),r*=this._config.timeScale*this._config.animationSpeed,this._frameTime+=r,n=!0):s&&this._config.timeUpdateMode==="variable_delta"&&(this._lastUpdateTime=e),this._lastUpdateTime=e;const i=this.getAdjustedTime();return{deltaTime:r,frameTime:this._frameTime,adjustedTime:i,shouldUpdate:n}}getAdjustedTime(){return(this._frameTime-this._config.timeOffset)*this._config.timeScale}setTime(e){this._frameTime=e,this._lastUpdateTime=0,console.log(`[TimeCalculator] Time set to: ${e.toFixed(3)}s`)}resetTime(){this._frameTime=0,this._lastUpdateTime=0,console.log("[TimeCalculator] Time reset to 0")}getStats(){return{frameTime:this._frameTime,adjustedTime:this.getAdjustedTime(),timeScale:this._config.timeScale,timeOffset:this._config.timeOffset,timeUpdateMode:this._config.timeUpdateMode,animationSpeed:this._config.animationSpeed,lastUpdateTime:this._lastUpdateTime}}clone(){const e=new Nt(this._config);return e._frameTime=this._frameTime,e._lastUpdateTime=this._lastUpdateTime,e}}const ss=-.5;class Or{animationState;timeCalculator;config;frameCount=0;eventListeners=[];constructor(e={}){this.config={timeScale:1,timeOffset:0,timeUpdateMode:"fixed_delta",animationSpeed:1,fixedDeltaTime:.016*1.1,maxDeltaTime:.05,...e},this.animationState=new Dr,this.timeCalculator=new Nt(this.config),this.animationState.addEventListener(t=>{this._emitEvent(t)})}start(e){this.animationState.play(e)}pause(){this.animationState.pause()}resume(){this.animationState.resume()}stop(){this.animationState.stop(),this.frameCount=0}setTime(e){this.timeCalculator.setTime(e),this._emitEvent({type:"timeChange",timestamp:performance.now(),data:{time:e}})}setSpeed(e){this.animationState.setSpeed(e),this.timeCalculator.setAnimationSpeed(e)}setTimeScale(e){this.timeCalculator.setTimeScale(e),this.config.timeScale=e}setTimeOffset(e){this.timeCalculator.setTimeOffset(e),this.config.timeOffset=e}setTimeUpdateMode(e){this.timeCalculator.setTimeUpdateMode(e),this.config.timeUpdateMode=e}startAnimation(e=1){this.start(e)}pauseAnimation(){this.pause()}resumeAnimation(){this.resume()}stopAnimation(){this.stop()}setAnimationTime(e){this.setTime(e)}setAnimationSpeed(e){this.setSpeed(e)}getAnimationSpeed(){return this.animationState.getSpeed()}getTimeScale(){return this.timeCalculator.getTimeScale()}getTimeOffset(){return this.timeCalculator.getTimeOffset()}getTimeUpdateMode(){return this.timeCalculator.getTimeUpdateMode()}update(e){const t=this.timeCalculator.calculateTime(e,this.animationState.isPlaying,this.animationState.isPaused);return t.shouldUpdate&&this.frameCount++,t.adjustedTime}getCurrentTime(){return this.timeCalculator.getAdjustedTime()}getFrameTime(){return this.timeCalculator.frameTime}isFallbackPreviewMode(){return this.timeCalculator.frameTime<ss}isPlaying(){return this.animationState.isPlaying}isPaused(){return this.animationState.isPaused}isStopped(){return this.animationState.isStopped}supportsAnimation(){return!0}getStats(){const e=this.timeCalculator.getStats(),t=this.animationState.getStateInfo();return{currentTime:e.frameTime,adjustedTime:e.adjustedTime,timeScale:e.timeScale,timeOffset:e.timeOffset,timeUpdateMode:e.timeUpdateMode,animationSpeed:e.animationSpeed,playbackState:t.playbackState,isPlaying:t.isPlaying,isPaused:t.isPaused,isStopped:t.isStopped,lastUpdateTime:e.lastUpdateTime,frameCount:this.frameCount}}clearEventListeners(){this.eventListeners=[],this.animationState.clearEventListeners()}_emitEvent(e){this.eventListeners.forEach(t=>{try{t(e)}catch(s){console.error("Error in timeline event listener:",s)}})}static FALLBACK_PREVIEW_THRESHOLD=ss}class Ze extends Ae{_countBuf;onnxGenerator;timeline;gaussianPrecision;colorPrecision;is_loop=!0;colorMode;colorChannels;constructor(e,t,s,r,n,i=48,o){let a;switch(i){case 3:a=0;break;case 12:a=1;break;case 27:a=2;break;case 48:a=3;break;default:console.warn(`⚠️ Unexpected color channels: ${i}, Maybe rgb channels`),a=3}console.log(`🎨 DynamicPointCloud: ${i} channels → SH degree ${a}`);const l={numPoints:()=>r,shDegree:()=>a,bbox:()=>({min:[-1,-1,-1],max:[1,1,1]}),center:[0,0,0],up:null,gaussianBuffer:()=>new ArrayBuffer(0),shCoefsBuffer:()=>new ArrayBuffer(0)};super(e,l,{gaussianBuffer:t,shBuffer:s}),this.colorChannels=i,this.colorMode=i===4?"rgb":"sh",console.log(`🎨 Color mode set: ${this.colorMode} (${this.colorChannels} channels)`),this._countBuf=n,this.gaussianPrecision=o?.gaussian,this.colorPrecision=o?.color,this.timeline=new Or({timeScale:1,timeOffset:0,timeUpdateMode:"fixed_delta",animationSpeed:1}),console.log("🌟 DynamicPointCloud created with direct GPU buffers (no CPU upload)")}countBuffer(){return this._countBuf}setOnnxGenerator(e){this.onnxGenerator=e,console.log("🔗 ONNX generator linked for dynamic updates")}getGaussianPrecision(){return this.gaussianPrecision}getColorPrecision(){return this.colorPrecision}setPrecisionForShader(){const e=this.modelParamsUniforms.data,t=new DataView(e),s=r=>{switch(r){case"float32":return 0;case"float16":return 1;case"int8":return 2;case"uint8":return 3;default:return 1}};this.gaussianPrecision&&(t.setUint32(96,s(this.gaussianPrecision.dataType),!0),typeof this.gaussianPrecision.scale=="number"&&t.setFloat32(104,this.gaussianPrecision.scale,!0),typeof this.gaussianPrecision.zeroPoint=="number"&&t.setFloat32(108,this.gaussianPrecision.zeroPoint,!0)),this.colorPrecision&&(t.setUint32(100,s(this.colorPrecision.dataType),!0),typeof this.colorPrecision.scale=="number"&&t.setFloat32(112,this.colorPrecision.scale,!0),typeof this.colorPrecision.zeroPoint=="number"&&t.setFloat32(116,this.colorPrecision.zeroPoint,!0)),this.modelParamsUniforms.dataBytes=e}applyFP16(e,t,s){this.replaceStorageBuffers(e,{gaussianBuffer:t,shBuffer:s}),this.gaussianPrecision={dataType:"float16",bytesPerElement:2},this.colorPrecision={dataType:"float16",bytesPerElement:2},this.setPrecisionForShader()}async update(e,t,s,r,n){if(!this.onnxGenerator){console.warn("⚠️ No ONNX generator available for dynamic update");return}var i=0;i=this.timeline.getCurrentTime(),i=i*.4%1,this.timeline.isFallbackPreviewMode()&&(i=s??0,i=i*.4,i=i%1);try{const o=this.onnxGenerator.getInputNames(),a=ht();gr(a,e,t),this.is_loop?i=i%1:i=Math.max(0,Math.min(i,1));const l={cameraMatrix:new Float32Array(a),projectionMatrix:r?new Float32Array(r):void 0,time:i};await this.onnxGenerator.generate(l)}catch(o){console.error("❌ Dynamic update failed:",o)}}startAnimation(e=1){this.timeline.startAnimation(e)}pauseAnimation(){this.timeline.pauseAnimation()}resumeAnimation(){this.timeline.resumeAnimation()}stopAnimation(){this.timeline.stopAnimation()}setAnimationTime(e){this.timeline.setAnimationTime(e)}setAnimationSpeed(e){this.timeline.setAnimationSpeed(e)}getAnimationSpeed(){return this.timeline.getAnimationSpeed()}get isAnimationRunning(){return this.timeline.isPlaying()}get isAnimationPaused(){return this.timeline.isPaused()}get isAnimationStopped(){return this.timeline.isStopped()}setTimeScale(e){this.timeline.setTimeScale(e)}getTimeScale(){return this.timeline.getTimeScale()}setTimeOffset(e){this.timeline.setTimeOffset(e)}setAnimationIsLoop(e){this.is_loop=e}getTimeOffset(){return this.timeline.getTimeOffset()}getFrameTime(){return this.timeline.getCurrentTime()}resetFrameTime(){this.timeline.setTime(0)}setTimeUpdateMode(e){this.timeline.setTimeUpdateMode(e)}getTimeUpdateMode(){return this.timeline.getTimeUpdateMode()==="fixed_delta"?pt.FIXED_DELTA:pt.VARIABLE_DELTA}getPerformanceStats(){return{...this.timeline.getStats(),hasOnnxGenerator:!!this.onnxGenerator,colorMode:this.colorMode,colorChannels:this.colorChannels,numPoints:this.numPoints}}dispose(){this.timeline.clearEventListeners(),console.log("🧹 DynamicPointCloud disposed")}}const Lr=Object.freeze(Object.defineProperty({__proto__:null,BUFFER_CONFIG:Wt,DynamicPointCloud:Ze,PointCloud:Ae,getBindGroupLayout:dt,getRenderBindGroupLayout:Dt},Symbol.toStringTag,{value:"Module"})),kr=`// enable f16;
const KERNEL_SIZE:f32 = 0.3;
//const MAX_SH_DEG:u32 = <injected>u;


override SH_LAYOUT_CHANNEL_MAJOR : bool = false;
override USE_RAW_COLOR : bool = false;

const SH_C0:f32 = 0.28209479177387814;

const SH_C1 = 0.4886025119029199;
const SH_C2 = array<f32,5>(
    1.0925484305920792,
    -1.0925484305920792,
    0.31539156525252005,
    -1.0925484305920792,
    0.5462742152960396
);

const SH_C3 = array<f32,7>(
    -0.5900435899266435,
    2.890611442640554,
    -0.4570457994644658,
    0.3731763325901154,
    -0.4570457994644658,
    1.445305721320277,
    -0.5900435899266435
);


struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    
    viewport: vec2<f32>,
    focal: vec2<f32>
};

struct Gaussian {
    pos_opacity: array<u32,2>,
    cov: array<u32,3>
}

struct Splat {
     // 4x f16 packed as u32
    v_0: u32, v_1: u32,
    // 2x f16 packed as u32 (NDC x,y)
    pos: u32,
    // NDC z (high precision)
    posz: f32,
    // rgba packed as f16
    color_0: u32,color_1: u32
};

struct DrawIndirect {
    /// The number of gaussians to draw.
    vertex_count: u32,
    /// The number of instances to draw.
    instance_count: atomic<u32>,
    /// The Index of the first vertex to draw.
    base_vertex: u32,
    /// The instance ID of the first instance to draw.
    /// Has to be 0, unless [\`Features::INDIRECT_FIRST_INSTANCE\`](crate::Features::INDIRECT_FIRST_INSTANCE) is enabled.
    base_instance: u32,
}

struct DispatchIndirect {
    dispatch_x: atomic<u32>,
    dispatch_y: u32,
    dispatch_z: u32,
}

struct SortInfos {
    keys_size: atomic<u32>,     // essentially contains the same info as instance_count in DrawIndirect
    padded_size: u32,
    passes: u32,
    even_pass: u32,
    odd_pass: u32,
}

@group(2) @binding(4)
var<storage, read_write> sort_source_indices : array<u32>;

struct RenderSettings {
    clipping_box_min: vec4<f32>,
    clipping_box_max: vec4<f32>,
    max_sh_deg: u32,
    show_env_map: u32,
    mip_spatting: u32,
    kernel_size: f32,
    walltime: f32,
    scene_extend: f32,
    center: vec3<f32>,
}

override DISCARD_BY_WORLD_TRACE   : bool = false;  // 可选：world-space 近似阈值
override MAX_WORLD_TRACE          : f32  = 0.25;   // 协方差迹上限（单位≈米^2，按你的尺度调）

@group(0) @binding(0)
var<uniform> camera: CameraUniforms;

// Shared buffer - read as different types based on gaussDataType
@group(1) @binding(0) 
var<storage,read> gaussians_packed : array<u32>; // Uint32Array backing

@group(1) @binding(1)
var<storage, read> color_buffer : array<u32>; // Uint32Array backing

@group(1) @binding(2) 
var<storage,read_write> points_2d : array<Splat>;

@group(1) @binding(4)
var<storage, read> extra_pca : array<vec4<f32>>;



@group(2) @binding(0)
var<storage, read_write> sort_infos: SortInfos;
@group(2) @binding(1)
var<storage, read_write> sort_depths : array<u32>;
@group(2) @binding(2)
var<storage, read_write> sort_indices : array<u32>;
@group(2) @binding(3)
var<storage, read_write> sort_dispatch: DispatchIndirect;

@group(3) @binding(0)
var<uniform> render_settings: RenderSettings;

// Phase B M1: per-model params
struct ModelParams {
    model: mat4x4<f32>,
    baseOffset: u32,
    num_points: u32,  // Dynamic point count from ONNX (was _pad0)
    gaussianScaling: f32,  // 每个模型的独立高斯缩放参数
    maxShDeg: u32,        // 球谐等级
    kernelSize: f32,      // 二维核大小
    opacityScale: f32,    // 透明度倍数
    cutoffScale: f32,     // 最大像素比例倍数
    rendermode: u32,      // 渲染模式: 0=颜色, 1=法线, 2=深度, 3=PCA
    // 多精度支持
    gaussDataType: u32,   // 0=f32, 1=f16, 2=i8, 3=u8
    colorDataType: u32,
    gaussScale: f32,
    gaussZeroPoint: f32,
    colorScale: f32,
    colorZeroPoint: f32,
}

@group(3) @binding(1)
var<uniform> uModel: ModelParams;






// Helper: read gaussian pos+opacity based on precision
fn read_gaussian_pos_opacity(idx: u32) -> vec4<f32> {
  if (uModel.gaussDataType == 0u) {
    // FP32: 4 consecutive f32s
    let base = idx * 10u;
    return vec4<f32>(
      bitcast<f32>(gaussians_packed[base + 0u]),
      bitcast<f32>(gaussians_packed[base + 1u]),
      bitcast<f32>(gaussians_packed[base + 2u]),
      bitcast<f32>(gaussians_packed[base + 3u])
    );
  } else {
    // FP16: packed as 2 u32s (pos_xy + pos_z_opacity)
    let w0 = gaussians_packed[idx * 5u + 0u];
    let w1 = gaussians_packed[idx * 5u + 1u];
    let a = unpack2x16float(w0);
    let b = unpack2x16float(w1);
    return vec4<f32>(a.x, a.y, b.x, b.y);
  }
}

// Helper: read gaussian covariance (6 floats) based on precision
fn read_gaussian_cov(idx: u32) -> array<f32,6> {
  if (uModel.gaussDataType == 0u) {
    // FP32: 6 consecutive f32s starting at idx*10+4
    let base = idx * 10u + 4u;
    return array<f32,6>(
      bitcast<f32>(gaussians_packed[base + 0u]),
      bitcast<f32>(gaussians_packed[base + 1u]),
      bitcast<f32>(gaussians_packed[base + 2u]),
      bitcast<f32>(gaussians_packed[base + 3u]),
      bitcast<f32>(gaussians_packed[base + 4u]),
      bitcast<f32>(gaussians_packed[base + 5u])
    );
  } else {
    // FP16: packed as 3 u32s
    let a = unpack2x16float(gaussians_packed[idx * 5u + 2u]);
    let b = unpack2x16float(gaussians_packed[idx * 5u + 3u]);
    let c = unpack2x16float(gaussians_packed[idx * 5u + 4u]);
    return array<f32,6>(a.x, a.y, b.x, b.y, c.x, c.y);
  }
}

// ---- 小工具：计算该点的起始 word 下标 ----
fn base_word_of(splat_idx: u32) -> u32 {
    if (USE_RAW_COLOR) {
        // RGB 直接颜色：每点的存储字数取决于颜色精度
        if (uModel.colorDataType == 0u) { // fp32: 3 words
            return splat_idx * 3u;
        } else if (uModel.colorDataType == 1u) { // fp16: 2 words (4 halfs)
            return splat_idx * 2u;
        } else { // int8/uint8: 1 word (4 bytes)
            return splat_idx * 1u;
        }
    }
    // SH：按精度和通道数计算
    if (uModel.colorDataType == 0u) {
      // FP32: 48 channels (degree 3) = 48 words
      return splat_idx * 48u;
    } else {
      // FP16: 48 channels = 48 halfs = 24 words
      return splat_idx * 24u;
    }
}

// 读第 word_idx 个 u32
fn read_word(splat_idx: u32, word_idx: u32) -> u32 {
  return color_buffer[base_word_of(splat_idx) + word_idx];
}

// ===== 读半精“标量”：线性 half 下标（0,1,2,3, ...）=====
fn read_half_at(splat_idx: u32, half_idx: u32) -> f32 {
  let w = read_word(splat_idx, half_idx >> 1u);
  let p = unpack2x16float(w);                 // vec2<f32>，低/高 half
  // 如果 half_idx 是奇数取高位，否则取低位
  return select(p.x, p.y, (half_idx & 1u) == 1u);
}

// ===== 连续颜色：直接读取前三个 half 作为最终 RGB =====
// 读取颜色分量（依据数据类型）
fn read_color_channel(splat_idx: u32, channel_idx: u32) -> f32 {
  if (uModel.colorDataType == 0u) {
    // fp32：每通道 1 word
    let w = read_word(splat_idx, channel_idx);
    return bitcast<f32>(w);
  } else if (uModel.colorDataType == 1u) {
    // fp16：按 half 读取
    return read_half_at(splat_idx, channel_idx);
  } else {
    // int8/uint8：从 word 中提取 8-bit，然后反量化
    let packed = read_word(splat_idx, channel_idx >> 2u);
    let byte_off = (channel_idx & 3u) * 8u;
    let q = extractBits(i32(packed), byte_off, 8u);
    return f32(q) * uModel.colorScale + uModel.colorZeroPoint;
  }
}

fn fetch_rgb_no_sh(splat_idx: u32) -> vec3<f32> {
  return vec3<f32>(
    read_color_channel(splat_idx, 0u),
    read_color_channel(splat_idx, 1u),
    read_color_channel(splat_idx, 2u)
  );
}

fn sh_coef_interleaved(splat_idx: u32, c_idx: u32) -> vec3<f32> {
  // c_idx ∈ [0 .. (deg+1)^2-1]，每个系数 3 个 half 连着
  let h0 = c_idx * 3u;
  return vec3<f32>(
    read_color_channel(splat_idx, h0 + 0u),
    read_color_channel(splat_idx, h0 + 1u),
    read_color_channel(splat_idx, h0 + 2u)
  );
}

// 新的：channel-major（[Rdc,Gdc,Bdc, R1..Rm, G1..Gm, B1..Bm]）
fn sh_coef_channel_major(splat_idx: u32, c_idx: u32) -> vec3<f32> {
  if (c_idx == 0u) {
    // DC
    return vec3<f32>(
      read_color_channel(splat_idx, 0u),
      read_color_channel(splat_idx, 1u),
      read_color_channel(splat_idx, 2u)
    );
  }
  // AC
  let m  = (uModel.maxShDeg + 1u) * (uModel.maxShDeg + 1u) - 1u; // 每通道 AC 数
  let k  = c_idx - 1u;                   // 第 k 个 AC，k ∈ [0..m-1]
  let r  = read_color_channel(splat_idx, 3u + k);
  let g  = read_color_channel(splat_idx, 3u + m + k);
  let b  = read_color_channel(splat_idx, 3u + 2u*m + k);
  return vec3<f32>(r, g, b);
}

// 统一入口：根据布局选择
fn sh_coef(splat_idx: u32, c_idx: u32) -> vec3<f32> {
  return select(
    sh_coef_interleaved(splat_idx, c_idx),
    sh_coef_channel_major(splat_idx, c_idx),
    SH_LAYOUT_CHANNEL_MAJOR
  );
}




fn evaluate_sh(dir: vec3<f32>, v_idx: u32, sh_deg: u32) -> vec3<f32> {
    var result = SH_C0 * sh_coef(v_idx, 0u) ;
    // sh_deg = 0;
    if sh_deg > 0u {

        let x = dir.x;
        let y = dir.y;
        let z = dir.z;

        result += - SH_C1 * y * sh_coef(v_idx, 1u) + SH_C1 * z * sh_coef(v_idx, 2u) - SH_C1 * x * sh_coef(v_idx, 3u);

        if sh_deg > 1u {

            let xx = dir.x * dir.x;
            let yy = dir.y * dir.y;
            let zz = dir.z * dir.z;
            let xy = dir.x * dir.y;
            let yz = dir.y * dir.z;
            let xz = dir.x * dir.z;

            result += SH_C2[0] * xy * sh_coef(v_idx, 4u) + SH_C2[1] * yz * sh_coef(v_idx, 5u) + SH_C2[2] * (2.0 * zz - xx - yy) * sh_coef(v_idx, 6u) + SH_C2[3] * xz * sh_coef(v_idx, 7u) + SH_C2[4] * (xx - yy) * sh_coef(v_idx, 8u);

            if sh_deg > 2u {
                result += SH_C3[0] * y * (3.0 * xx - yy) * sh_coef(v_idx, 9u) + SH_C3[1] * xy * z * sh_coef(v_idx, 10u) + SH_C3[2] * y * (4.0 * zz - xx - yy) * sh_coef(v_idx, 11u) + SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_coef(v_idx, 12u) + SH_C3[4] * x * (4.0 * zz - xx - yy) * sh_coef(v_idx, 13u) + SH_C3[5] * z * (xx - yy) * sh_coef(v_idx, 14u) + SH_C3[6] * x * (xx - 3.0 * yy) * sh_coef(v_idx, 15u);
            }
        }
    }
    result += 0.5;

    return result;
}


fn evaluate_color(dir: vec3<f32>, v_idx: u32, sh_deg: u32) -> vec3<f32> {
    if (USE_RAW_COLOR) {
        // 直接颜色（0..1），不做 +0.5
        return fetch_rgb_no_sh(v_idx);
    } else {
        // 球谐路径：evaluate_sh already adds 0.5 at the end
        return evaluate_sh(dir, v_idx, sh_deg);
    }
}


fn cov_coefs(v_idx: u32) -> array<f32,6> {
    return read_gaussian_cov(v_idx);
}


// normal calculation
fn inverse_sym3(m: mat3x3<f32>) -> mat3x3<f32> {
    // m = [[a,b,c],[b,d,e],[c,e,f]]
    let a = m[0][0]; let b = m[0][1]; let c = m[0][2];
    let d = m[1][1]; let e = m[1][2];
    let f = m[2][2];

    let co00 = d*f - e*e;
    let co01 = c*e - b*f;
    let co02 = b*e - c*d;
    let co11 = a*f - c*c;
    let co12 = c*b - a*e;
    let co22 = a*d - b*b;

    let det = a*co00 + b*co01 + c*co02;
    let eps = 1e-12;
    let inv_det = select(1.0/det, 1.0/eps, abs(det) < eps);

    // 对称：只需填上三角
    var inv = mat3x3<f32>(
        vec3<f32>(co00, co01, co02),
        vec3<f32>(co01, co11, co12),
        vec3<f32>(co02, co12, co22)
    );
    return inv * inv_det;
}

fn smallest_evec_via_power(Sigma_world: mat3x3<f32>) -> vec3<f32> {
    let invS = inverse_sym3(Sigma_world);
    // 选个稳定的初始向量（取列和可以避免退化）
    var v = normalize(invS[0] + invS[1] + invS[2]);
    // 少量迭代即可（3~5 次）
    v = normalize(invS * v);
    v = normalize(invS * v);
    v = normalize(invS * v);
    return v; // 未定向，之后可按相机翻转
}

fn normal_view_dependent(Sigma_world: mat3x3<f32>, cam_world: vec3<f32>, x_world: vec3<f32>) -> vec3<f32> {
    let v = normalize(cam_world - x_world);                // 从点指向相机
    let invS = inverse_sym3(Sigma_world);
    var n = normalize(invS * v);                           // ∝ Σ^{-1} v
    // 使法线朝向相机（可选）
    if (dot(n, v) < 0.0) { n = -n; }
    return n;
}


@compute @workgroup_size(256,1,1)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    let idx = gid.x;
    // Use dynamic point count from ONNX instead of full gaussian array length
    if idx >= uModel.num_points  {
   //     return;
    }
    if idx > 500000  {
       // return;
    }
    let focal = camera.focal;
    let viewport = camera.viewport;
    let pos_op = read_gaussian_pos_opacity(idx);
    let xyz_local = pos_op.xyz;
    let xyz = (uModel.model * vec4<f32>(xyz_local, 1.)).xyz;
    var opacity = pos_op.w * uModel.opacityScale;

    
    // uModel.maxShDeg = 0;

    var camspace = camera.view * vec4<f32>(xyz, 1.);
    let pos2d = camera.proj * camspace;
    let bounds = 1.2 * pos2d.w;
    let z = pos2d.z / pos2d.w;

    if uModel.baseOffset == 0u && idx == 0u {
        atomicAdd(&sort_dispatch.dispatch_x, 1u);   // safety addition to always have an unfull block at the end of the buffer
    }

    // TODO bring back frustrum culling
    // M1: no world-space clipping here to avoid sparse writes
    // if any(xyz < render_settings.clipping_box_min.xyz) || any(xyz > render_settings.clipping_box_max.xyz) { return; }


    // M1: disable frustum culling to keep dense writes
    if z <= 0. || z >= 1. || pos2d.x < -bounds || pos2d.x > bounds || pos2d.y < -bounds || pos2d.y > bounds { return; }

    if (opacity <0.02)
    {
        return;
    }


    if (opacity > 0.98)
    {
      //  return;
    }

    let cov_sparse = cov_coefs(idx);

    
    var scale_mod = 0.;

    scale_mod = 1.0;
    let scaling = uModel.gaussianScaling * scale_mod * 1.0f;

    // --- 1) 局部协方差（保持不变）
    let Sigma_local = mat3x3<f32>(
        cov_sparse[0], cov_sparse[1], cov_sparse[2],
        cov_sparse[1], cov_sparse[3], cov_sparse[4],
        cov_sparse[2], cov_sparse[4], cov_sparse[5]
    ) * scaling * scaling;

    // --- 2) 用模型矩阵的线性部分把协方差从 local 变到 world
    // 注意：WGSL 按列存储，这里取 model 的前三列作为 3x3 线性部分
    let A = mat3x3<f32>(
        uModel.model[0].xyz,  // 第0列
        uModel.model[1].xyz,  // 第1列
        uModel.model[2].xyz   // 第2列
    );
    let Sigma_world = A * Sigma_local * transpose(A);

    // --- 3 你的 J（cam → NDC）的写法可以沿用
    let J = mat3x3<f32>(
        focal.x / camspace.z,  0.0,                         -(focal.x * camspace.x) / (camspace.z * camspace.z),
        0.0,                  -focal.y / camspace.z,        (focal.y * camspace.y) / (camspace.z * camspace.z),
        0.0,                   0.0,                          0.0
    );

    // --- 4) 取 view 的 3x3 线性部分（world → camera）
    let W = transpose(mat3x3<f32>(
        camera.view[0].xyz,
        camera.view[1].xyz,
        camera.view[2].xyz
    ));

    // --- 5) 正确的组合：T = J * V，然后 Σ_ndc = T Σ_world T^T
    let T   = W * J;
    let cov = transpose(T) * Sigma_world * T;



    if (true) {
        let world_trace = Sigma_local[0][0] + Sigma_local[1][1] + Sigma_local[2][2];
        if (world_trace > 1000.0000002) {
            //return;
        }
    }


    let kernel_size = uModel.kernelSize;
    if bool(render_settings.mip_spatting) {
        // according to Mip-Splatting by Yu et al. 2023
        let det_0 = max(1e-6, cov[0][0] * cov[1][1] - cov[0][1] * cov[0][1]);
        let det_1 = max(1e-6, (cov[0][0] + kernel_size) * (cov[1][1] + kernel_size) - cov[0][1] * cov[0][1]);
        var coef = sqrt(det_0 / (det_1 + 1e-6) + 1e-6);

        if det_0 <= 1e-6 || det_1 <= 1e-6 {
            coef = 0.0;
        }
        opacity *= coef;
    }

    //opacity = 0.1;

    let diagonal1 = cov[0][0] + kernel_size;
    let offDiagonal = cov[0][1];
    let diagonal2 = cov[1][1] + kernel_size;

    let mid = 0.5 * (diagonal1 + diagonal2);
    let radius = length(vec2<f32>((diagonal1 - diagonal2) / 2.0, offDiagonal));
    // eigenvalues of the 2D screen space splat
    let lambda1 = mid + radius;
    let lambda2 = max(mid - radius, 0.1);

    let diagonalVector = normalize(vec2<f32>(offDiagonal, lambda1 - diagonal1));
    // scaled eigenvectors in screen space 
    let v1 = sqrt(2.0 * lambda1) * diagonalVector * uModel.cutoffScale;
    let v2 = sqrt(2.0 * lambda2) * vec2<f32>(diagonalVector.y, -diagonalVector.x) * uModel.cutoffScale;

    let v_center = pos2d.xyzw / pos2d.w;

    let camera_pos = camera.view_inv[3].xyz;
    // let dir = normalize(xyz - camera_pos);
    // DEBUG: prepare color var (assigned after store_idx is known)



    let t = uModel.model[3].xyz;

    // --- 世界相机位置
    let cam_world = camera.view_inv[3].xyz;

    // --- 计算 s^2 （等比缩放下三列长度平方相等，取均值更稳）
    let s2 = max(
        1e-12,
        (dot(A[0], A[0]) + dot(A[1], A[1]) + dot(A[2], A[2])) / 3.0
    );

    // --- cam_local = A^{-1} * (cam_world - t) = (A^T / s^2) * (cam_world - t)
    let cam_local = (transpose(A) * (cam_world - t)) / s2;

    // --- 用局部方向评估 SH
    let dir_local = normalize(xyz_local - cam_local);



    var color: vec4<f32>;
    
    
    // color = vec4<f32>(sh_coef(0, 1u),opacity);

    // M1 (revised): use global contiguous index to avoid per-dispatch uniform dependency
    let store_idx = atomicAdd(&sort_infos.keys_size, 1u);
    let global_index = store_idx;
    // 根据渲染模式选择不同的颜色
    if (uModel.rendermode == 0u) {
        // 模式0: 正常颜色 (SH evaluation or direct RGB)
        color = vec4<f32>(
            max(vec3<f32>(0.), evaluate_color(dir_local, idx, uModel.maxShDeg)),
            opacity
        );
    } else if (uModel.rendermode == 1u) {
        // 模式1: 法线可视化（视角无关：最小特征向量，使用自身分量确定符号，避免视角触发翻转）
        var n_world = smallest_evec_via_power(Sigma_world);

        // 选最大幅值分量的符号作为锚点，保证符号在不同视角下保持一致
        let abs_n = abs(n_world);
        if (abs_n.x >= abs_n.y && abs_n.x >= abs_n.z) {
            if (n_world.x < 0.0) { n_world = -n_world; }
        } else if (abs_n.y >= abs_n.z) {
            if (n_world.y < 0.0) { n_world = -n_world; }
        } else {
            if (n_world.z < 0.0) { n_world = -n_world; }
        }

        // 归一化，避免长度漂移/数值噪声；退化时给默认方向
        let n_len = length(n_world);
        if (n_len < 1e-8) {
            n_world = vec3<f32>(0.0, 0.0, 1.0);
        } else {
            n_world = n_world / n_len;
        }

        // 可视化时编码到颜色 [0,1]
        let n_rgb = clamp(0.5 * (n_world + vec3<f32>(1.0, 1.0, 1.0)), vec3<f32>(0.0), vec3<f32>(1.0));
        color = vec4<f32>(n_rgb, opacity);
    } else if (uModel.rendermode == 2u) {
        // 模式2: 深度可视化（使用透视除法后的 NDC 深度，0..1）
        let depth_ndc = 1.0 - clamp(pos2d.z / pos2d.w, 0.0, 1.0);
        color = vec4<f32>(depth_ndc, depth_ndc, depth_ndc, opacity);
    } else if (uModel.rendermode == 3u) {
        // 模式3: PCA可视化（extra_pca_r/g/b）
        let p = extra_pca[idx].xyz;
        color = vec4<f32>(clamp(p, vec3<f32>(0.0), vec3<f32>(1.0)), opacity);
    } else {
        // 默认: 正常颜色
        color = vec4<f32>(
            max(vec3<f32>(0.), evaluate_color(dir_local, idx, uModel.maxShDeg)),
            1
        );
    }

    let v = vec4<f32>(v1 / viewport, v2 / viewport);
    points_2d[store_idx] = Splat(
        pack2x16float(v.xy), pack2x16float(v.zw),
        pack2x16float(v_center.xy),
        v_center.z,
        pack2x16float(color.rg), pack2x16float(color.ba),
    );
    // filling the sorting buffers and the indirect sort dispatch buffer
    let znear = -camera.proj[3][2] / camera.proj[2][2];
    let zfar = -camera.proj[3][2] / (camera.proj[2][2] - (1.));
    // filling the sorting buffers and the indirect sort dispatch buffer
    sort_depths[store_idx] = bitcast<u32>(zfar - pos2d.z) ;//u32(f32(0xffffffu) - pos2d.z / zfar * f32(0xffffffu));
    sort_indices[store_idx] = store_idx;
    sort_source_indices[store_idx] = uModel.baseOffset + idx;

    let keys_per_wg = 256u * 15u;         // Caution: if workgroup size (256) or keys per thread (15) changes the dispatch is wrong!!
    if (global_index % keys_per_wg) == 0u {
        atomicAdd(&sort_dispatch.dispatch_x, 1u);
    }
}`,rs=`// we cutoff at 1/255 alpha value 
const CUTOFF:f32 = 2.3539888583335364; // = sqrt(log(255))

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) screen_pos: vec2<f32>,
    @location(1) color: vec4<f32>,
};

struct VertexInput {
    @location(0) v: vec4<f32>,
    @location(1) pos: vec4<f32>,
    @location(2) color: vec4<f32>,
};

struct Splat {
     // 4x f16 packed as u32
    v_0: u32, v_1: u32,
    // 2x f16 packed as u32 (NDC x,y)
    pos: u32,
    // NDC z (high precision)
    posz: f32,
    // rgba packed as f16
    color_0: u32,color_1: u32,
};

@group(0) @binding(2)
var<storage, read> points_2d : array<Splat>;
@group(1) @binding(4)
var<storage, read> indices : array<u32>;

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
    @builtin(instance_index) in_instance_index: u32
) -> VertexOutput {
    var out: VertexOutput;

    let vertex = points_2d[indices[in_instance_index] + 0u];

    // scaled eigenvectors in screen space 
    let v1 = unpack2x16float(vertex.v_0);
    let v2 = unpack2x16float(vertex.v_1);

    let v_center_xy = unpack2x16float(vertex.pos);
    let v_center_z = vertex.posz;

    // splat rectangle with left lower corner at (-1,-1)
    // and upper right corner at (1,1)
    let x = f32(in_vertex_index % 2u == 0u) * 2. - (1.);
    let y = f32(in_vertex_index < 2u) * 2. - (1.);

    let position = vec2<f32>(x, y) * CUTOFF;

    let offset = 2. * mat2x2<f32>(v1, v2) * position;
    let z_ndc = clamp(v_center_z, 0.0, 1.0);
    out.position = vec4<f32>(v_center_xy + offset, z_ndc, 1.);
    out.screen_pos = position;
    out.color = vec4<f32>(unpack2x16float(vertex.color_0), unpack2x16float(vertex.color_1));
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let a = dot(in.screen_pos, in.screen_pos);
    if a > 2. * CUTOFF {
        discard;
    }
    let b = min(0.99, exp(-a) * in.color.a);
    return vec4<f32>(in.color.rgb, 1.) * b;
}`,zr=`// GPU Radix Sort - deadlock-free implementation
// Replaces the original decoupled look-back (cross-workgroup spin-wait) with a 3-phase scatter:
//   Phase 1 (scatter_local): each workgroup computes local histogram + match/rank, writes reduction
//   Phase 2 (scatter_prefix_pass): a single-workgroup pass scans all partition reductions
//   Phase 3 (scatter_apply): each workgroup reads precomputed prefix, reorders and scatters globally

// Constants prepended by TypeScript before pipeline creation:
// const histogram_sg_size, histogram_wg_size, rs_radix_log2, rs_radix_size
// const rs_keyval_size, rs_histogram_block_rows, rs_scatter_block_rows
// const rs_mem_dwords, rs_mem_sweep_0_offset, rs_mem_sweep_1_offset, rs_mem_sweep_2_offset

struct GeneralInfo{
    keys_size: u32,
    padded_size: u32,
    passes: u32,       // reused to pass current radix pass index to scatter_prefix_pass
    even_pass: u32,
    odd_pass: u32,
};

@group(0) @binding(0)
var<storage, read_write> infos: GeneralInfo;
@group(0) @binding(1)
var<storage, read_write> histograms : array<atomic<u32>>;
@group(0) @binding(2)
var<storage, read_write> keys : array<u32>;
@group(0) @binding(3)
var<storage, read_write> keys_b : array<u32>;
@group(0) @binding(4)
var<storage, read_write> payload_a : array<u32>;
@group(0) @binding(5)
var<storage, read_write> payload_b : array<u32>;

// ============================================================================
// Buffer layout for histograms:
//   [0 .. keyval_size * radix_size)                                      -> global histograms
//   [keyval_size * radix_size .. (keyval_size + scatter_blocks_ru) * rs) -> per-workgroup reductions
//   [(keyval_size + scatter_blocks_ru) * rs .. (keyval_size + 2*scatter_blocks_ru) * rs) -> per-workgroup exclusive prefixes
// ============================================================================

// ============================================================================
// ZERO HISTOGRAMS
// ============================================================================
@compute @workgroup_size({histogram_wg_size})
fn zero_histograms(@builtin(global_invocation_id) gid : vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    if gid.x == 0u {
        infos.even_pass = 0u;
        infos.odd_pass = 1u;
    }
    let scatter_wg_size_ = histogram_wg_size;
    let scatter_block_kvs = scatter_wg_size_ * rs_scatter_block_rows;
    // In indirect mode, nwg.x may be scatter_blocks_ru+1 due to safety addition.
    // Use max(nwg.x, scatter_blocks_ru) to ensure we zero enough space.
    let scatter_blocks_ru = (infos.keys_size + scatter_block_kvs - 1u) / scatter_block_kvs;
    let actual_wgs = max(nwg.x, scatter_blocks_ru);
    
    let histo_size = rs_radix_size;
    // Zero: histograms + partitions + prefix areas
    var n = (rs_keyval_size + actual_wgs * 2u) * histo_size;
    let b = n;
    if infos.keys_size < infos.padded_size {
        n += infos.padded_size - infos.keys_size;
    }
    
    let line_size = nwg.x * {histogram_wg_size}u;
    for (var cur_index = gid.x; cur_index < n; cur_index += line_size) {
        if cur_index >= n {
            return;
        }
        if cur_index < b {
            atomicStore(&histograms[cur_index], 0u);
        }
        else {
            keys[infos.keys_size + cur_index - b] = 0xFFFFFFFFu;
        }
    }
}

// ============================================================================
// CALCULATE HISTOGRAM
// ============================================================================
var<workgroup> smem : array<atomic<u32>, rs_radix_size>;
var<private> kv : array<u32, rs_histogram_block_rows>;

fn zero_smem(lid: u32) {
    if lid < rs_radix_size {
        atomicStore(&smem[lid], 0u);
    }
}

fn histogram_pass(pass_: u32, lid: u32) {
    zero_smem(lid);
    workgroupBarrier();
    
    for (var j = 0u; j < rs_histogram_block_rows; j++) {
        let u_val = bitcast<u32>(kv[j]);
        let digit = extractBits(u_val, pass_ * rs_radix_log2, rs_radix_log2);
        atomicAdd(&smem[digit], 1u);
    }
    
    workgroupBarrier();
    let histogram_offset = rs_radix_size * pass_ + lid;
    if lid < rs_radix_size && atomicLoad(&smem[lid]) >= 0u {
        atomicAdd(&histograms[histogram_offset], atomicLoad(&smem[lid]));
    }
}

fn fill_kv(wid: u32, lid: u32) {
    let rs_block_keyvals : u32 = rs_histogram_block_rows * histogram_wg_size;
    let kv_in_offset = wid * rs_block_keyvals + lid;
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_wg_size;
        kv[i] = keys[pos];
    }
}

@compute @workgroup_size({histogram_wg_size})
fn calculate_histogram(@builtin(workgroup_id) wid : vec3<u32>, @builtin(local_invocation_id) lid : vec3<u32>) {
    fill_kv(wid.x, lid.x);
    histogram_pass(3u, lid.x);
    histogram_pass(2u, lid.x);
    histogram_pass(1u, lid.x);
    histogram_pass(0u, lid.x);
}

// ============================================================================
// PREFIX SUM OVER HISTOGRAM (unchanged)
// ============================================================================
fn prefix_reduce_smem(lid: u32) {
    var offset = 1u;
    for (var d = rs_radix_size >> 1u; d > 0u; d = d >> 1u) {
        workgroupBarrier();
        if lid < d {
            let ai = offset * (2u * lid + 1u) - 1u;
            let bi = offset * (2u * lid + 2u) - 1u;
            atomicAdd(&smem[bi], atomicLoad(&smem[ai]));
        }
        offset = offset << 1u;
    }
    
    if lid == 0u { 
        atomicStore(&smem[rs_radix_size - 1u], 0u);
    }
        
    for (var d = 1u; d < rs_radix_size; d = d << 1u) {
        offset = offset >> 1u;
        workgroupBarrier();
        if lid < d {
            let ai = offset * (2u * lid + 1u) - 1u;
            let bi = offset * (2u * lid + 2u) - 1u;
            let t = atomicLoad(&smem[ai]);
            atomicStore(&smem[ai], atomicLoad(&smem[bi]));
            atomicAdd(&smem[bi], t);
        }
    }
}

@compute @workgroup_size({prefix_wg_size})
fn prefix_histogram(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid : vec3<u32>) {
    let histogram_base = (rs_keyval_size - 1u - wid.x) * rs_radix_size;
    let histogram_offset = histogram_base + lid.x;
    
    atomicStore(&smem[lid.x], atomicLoad(&histograms[histogram_offset]));
    atomicStore(&smem[lid.x + {prefix_wg_size}u], atomicLoad(&histograms[histogram_offset + {prefix_wg_size}u]));

    prefix_reduce_smem(lid.x);
    workgroupBarrier();
    
    atomicStore(&histograms[histogram_offset], atomicLoad(&smem[lid.x]));
    atomicStore(&histograms[histogram_offset + {prefix_wg_size}u], atomicLoad(&smem[lid.x + {prefix_wg_size}u]));
}

// ============================================================================
// SCATTER - 3-phase deadlock-free approach
// ============================================================================
var<workgroup> scatter_smem: array<u32, rs_mem_dwords>;
var<private> kr : array<u32, rs_scatter_block_rows>;
var<private> pv : array<u32, rs_scatter_block_rows>;

fn partitions_base_offset() -> u32 { return rs_keyval_size * rs_radix_size; }
fn prefix_base_offset(scatter_blocks_ru: u32) -> u32 { return (rs_keyval_size + scatter_blocks_ru) * rs_radix_size; }

fn histogram_load(digit: u32) -> u32 {
    return atomicLoad(&smem[digit]);
}

fn histogram_store(digit: u32, count: u32) { 
    atomicStore(&smem[digit], count);
}

fn fill_kv_even(wid: u32, lid: u32) {
    let subgroup_id = lid / histogram_sg_size;
    let subgroup_invoc_id = lid - subgroup_id * histogram_sg_size;
    let subgroup_keyvals = rs_scatter_block_rows * histogram_sg_size;
    let rs_block_keyvals : u32 = rs_histogram_block_rows * histogram_wg_size;
    let kv_in_offset = wid * rs_block_keyvals + subgroup_id * subgroup_keyvals + subgroup_invoc_id;
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_sg_size;
        kv[i] = keys[pos];
    }
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_sg_size;
        pv[i] = payload_a[pos];
    }
}

fn fill_kv_odd(wid: u32, lid: u32) {
    let subgroup_id = lid / histogram_sg_size;
    let subgroup_invoc_id = lid - subgroup_id * histogram_sg_size;
    let subgroup_keyvals = rs_scatter_block_rows * histogram_sg_size;
    let rs_block_keyvals : u32 = rs_histogram_block_rows * histogram_wg_size;
    let kv_in_offset = wid * rs_block_keyvals + subgroup_id * subgroup_keyvals + subgroup_invoc_id;
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_sg_size;
        kv[i] = keys_b[pos];
    }
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_sg_size;
        pv[i] = payload_b[pos];
    }
}

// Compute match/rank for all elements in kv[] using smem-based emulation
// IMPORTANT: workgroupBarrier() ensures deterministic results across separate dispatch calls
// (scatter_local and scatter_apply must produce identical kr[] values for correctness)
fn compute_match_rank(pass_: u32, lid_x: u32) {
    let subgroup_id = lid_x / histogram_sg_size;
    let subgroup_offset = subgroup_id * histogram_sg_size;
    let subgroup_tid = lid_x - subgroup_offset;

    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        let u_val = bitcast<u32>(kv[i]);
        let digit = extractBits(u_val, pass_ * rs_radix_log2, rs_radix_log2);
        atomicStore(&smem[lid_x], digit);
        workgroupBarrier();  // ensure all threads have written their digit before any reads
        var count = 0u;
        var rank = 0u;
        
        for (var j = 0u; j < histogram_sg_size; j++) {
            if atomicLoad(&smem[subgroup_offset + j]) == digit {
                count += 1u;
                if j <= subgroup_tid {
                    rank += 1u;
                }
            }
        }
        workgroupBarrier();  // ensure all reads complete before next iteration overwrites smem
        
        kr[i] = (count << 16u) | rank;
    }
}

// Accumulate workgroup-level histogram in smem from match/rank data
fn accumulate_wg_histogram(pass_: u32, lid_x: u32) {
    let subgroup_id = lid_x / histogram_sg_size;
    let subgroup_count = {scatter_wg_size}u / histogram_sg_size;

    zero_smem(lid_x);
    workgroupBarrier();

    for (var i = 0u; i < subgroup_count; i++) {
        if subgroup_id == i {
            for (var j = 0u; j < rs_scatter_block_rows; j++) {
                let v = bitcast<u32>(kv[j]);
                let digit = extractBits(v, pass_ * rs_radix_log2, rs_radix_log2);
                let prev = histogram_load(digit);
                let rank = kr[j] & 0xFFFFu;
                let count = kr[j] >> 16u;
                kr[j] = prev + rank;

                if rank == count {
                    histogram_store(digit, (prev + count));
                }
            }            
        }
        workgroupBarrier();
    }
}

// ---- PHASE 1: scatter_local ----
// Each workgroup computes local histogram and writes its per-digit reduction to the partitions area.
// No cross-workgroup communication at all.

@compute @workgroup_size({scatter_wg_size})
fn scatter_local_even(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    if gid.x == 0u {
        infos.odd_pass = (infos.odd_pass + 1u) % 2u;
    }
    let cur_pass = infos.even_pass * 2u;
    
    fill_kv_even(wid.x, lid.x);
    compute_match_rank(cur_pass, lid.x);
    accumulate_wg_histogram(cur_pass, lid.x);

    // Write per-workgroup reduction
    let partition_base = partitions_base_offset() + wid.x * rs_radix_size;
    if lid.x < rs_radix_size {
        atomicStore(&histograms[partition_base + lid.x], histogram_load(lid.x));
    }
    
    // Pack pass index (low 16 bits) and workgroup count (high 16 bits) into infos.passes
    if gid.x == 0u {
        infos.passes = cur_pass | (nwg.x << 16u);
    }
}

@compute @workgroup_size({scatter_wg_size})
fn scatter_local_odd(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    if gid.x == 0u {
        infos.even_pass = (infos.even_pass + 1u) % 2u;
    }
    let cur_pass = infos.odd_pass * 2u + 1u;

    fill_kv_odd(wid.x, lid.x);
    compute_match_rank(cur_pass, lid.x);
    accumulate_wg_histogram(cur_pass, lid.x);

    let partition_base = partitions_base_offset() + wid.x * rs_radix_size;
    if lid.x < rs_radix_size {
        atomicStore(&histograms[partition_base + lid.x], histogram_load(lid.x));
    }
    
    if gid.x == 0u {
        infos.passes = cur_pass | (nwg.x << 16u);
    }
}

// ---- PHASE 2: scatter_prefix_pass ----
// One workgroup of 256 threads; each thread handles one digit (0..255).
// Sequentially scans all workgroup reductions for that digit and computes exclusive prefix sums.
// Fully safe: no cross-workgroup dependencies within this pass.

@compute @workgroup_size({scatter_wg_size})
fn scatter_prefix_pass(@builtin(local_invocation_id) lid: vec3<u32>) {
    if lid.x >= rs_radix_size {
        return;
    }
    
    let digit = lid.x;
    // Unpack: low 16 bits = pass index, high 16 bits = actual workgroup count
    let packed = infos.passes;
    let pass_ = packed & 0xFFFFu;
    let num_wgs = packed >> 16u;
    
    let hist_offset = pass_ * rs_radix_size + digit;
    var running_sum = atomicLoad(&histograms[hist_offset]);
    
    let part_base = partitions_base_offset();
    let pref_base = prefix_base_offset(num_wgs);
    
    for (var wg = 0u; wg < num_wgs; wg++) {
        let part_idx = part_base + wg * rs_radix_size + digit;
        let pref_idx = pref_base + wg * rs_radix_size + digit;
        
        // Store exclusive prefix for this workgroup
        atomicStore(&histograms[pref_idx], running_sum);
        
        // Accumulate the reduction
        let red = atomicLoad(&histograms[part_idx]);
        running_sum += red;
    }
}

// ---- PHASE 3: scatter_apply ----
// Each workgroup re-reads its data, re-computes match/rank (cheap), reads its precomputed prefix,
// does local reorder through scatter_smem, and writes to global output.

fn scatter_apply_core(pass_: u32, lid: vec3<u32>, wid: vec3<u32>, nwg: vec3<u32>) {
    // Use nwg.x from the dispatch — same dispatch buffer as scatter_local, so same workgroup count
    let num_wgs = nwg.x;
    
    // Re-compute match/rank from the same data
    compute_match_rank(pass_, lid.x);
    
    // Read precomputed exclusive prefix for this workgroup into scatter_smem[0..255]
    let pref_base = prefix_base_offset(num_wgs);
    if lid.x < rs_radix_size {
        let pref_idx = pref_base + wid.x * rs_radix_size + lid.x;
        scatter_smem[lid.x] = atomicLoad(&histograms[pref_idx]);
    }
    workgroupBarrier();

    // Re-accumulate workgroup histogram in smem (needed for local prefix scan)
    let subgroup_id = lid.x / histogram_sg_size;
    let subgroup_count = {scatter_wg_size}u / histogram_sg_size;

    zero_smem(lid.x);
    workgroupBarrier();

    for (var i = 0u; i < subgroup_count; i++) {
        if subgroup_id == i {
            for (var j = 0u; j < rs_scatter_block_rows; j++) {
                let v = bitcast<u32>(kv[j]);
                let digit = extractBits(v, pass_ * rs_radix_log2, rs_radix_log2);
                let prev = histogram_load(digit);
                let rank = kr[j] & 0xFFFFu;
                let count = kr[j] >> 16u;
                kr[j] = prev + rank;

                if rank == count {
                    histogram_store(digit, (prev + count));
                }
            }
        }
        workgroupBarrier();
    }

    // Local prefix scan of workgroup histogram
    prefix_reduce_smem(lid.x);
    workgroupBarrier();

    // Convert rank to local index
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        let v = bitcast<u32>(kv[i]);
        let digit = extractBits(v, pass_ * rs_radix_log2, rs_radix_log2);
        let exc = histogram_load(digit);
        let idx = exc + kr[i];
        kr[i] |= (idx << 16u);
    }
    workgroupBarrier();
    
    // Reorder through scatter_smem
    let smem_reorder_offset = rs_radix_size;
    let smem_base = smem_reorder_offset + lid.x;

    // Reorder keys
    for (var j = 0u; j < rs_scatter_block_rows; j++) {
        let smem_idx = smem_reorder_offset + (kr[j] >> 16u) - 1u;
        scatter_smem[smem_idx] = bitcast<u32>(kv[j]);
    }
    workgroupBarrier();
    for (var j = 0u; j < rs_scatter_block_rows; j++) {
        kv[j] = scatter_smem[smem_base + j * {scatter_wg_size}u];
    }
    workgroupBarrier();

    // Reorder payloads
    for (var j = 0u; j < rs_scatter_block_rows; j++) {
        let smem_idx = smem_reorder_offset + (kr[j] >> 16u) - 1u;
        scatter_smem[smem_idx] = pv[j];
    }
    workgroupBarrier();
    for (var j = 0u; j < rs_scatter_block_rows; j++) {
        pv[j] = scatter_smem[smem_base + j * {scatter_wg_size}u];
    }
    workgroupBarrier();

    // Reorder ranks
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        let smem_idx = smem_reorder_offset + (kr[i] >> 16u) - 1u;
        scatter_smem[smem_idx] = kr[i];
    }
    workgroupBarrier();
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        kr[i] = scatter_smem[smem_base + i * {scatter_wg_size}u] & 0xFFFFu;
    }
    
    // Convert local index to global index using precomputed exclusive prefix
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        let v = bitcast<u32>(kv[i]);
        let digit = extractBits(v, pass_ * rs_radix_log2, rs_radix_log2);
        let exc = scatter_smem[digit];
        kr[i] += exc - 1u;
    }
}

@compute @workgroup_size({scatter_wg_size})
fn scatter_apply_even(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    let cur_pass = infos.even_pass * 2u;
    
    fill_kv_even(wid.x, lid.x);
    scatter_apply_core(cur_pass, lid, wid, nwg);

    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        keys_b[kr[i]] = kv[i];
    }
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        payload_b[kr[i]] = pv[i];
    }
}

@compute @workgroup_size({scatter_wg_size})
fn scatter_apply_odd(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    let cur_pass = infos.odd_pass * 2u + 1u;

    fill_kv_odd(wid.x, lid.x);
    scatter_apply_core(cur_pass, lid, wid, nwg);

    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        keys[kr[i]] = kv[i];
    }
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        payload_a[kr[i]] = pv[i];
    }
}
`,$r=`struct WeightParams {
    baseOffset: u32,
    numPoints: u32,
    hasWeights: u32,
    _pad0: u32,
};

@group(0) @binding(0)
var<uniform> query_weights : array<vec4<f32>, 16>;

// Gram matrix G = C * C^T, row-major packed as 64 rows × 16 vec4s (= 64*64 floats)
@group(0) @binding(4)
var<uniform> gram : array<vec4<f32>, 64 * 16>;

@group(0) @binding(1)
var<storage, read> language_weights : array<vec4<f32>>;

@group(0) @binding(2)
var<storage, read_write> similarity : array<f32>;

@group(0) @binding(3)
var<uniform> params : WeightParams;

// softmaxParams.x = temperature (>= 1e-6)
// softmaxParams.y = useSoftmax (0.0 or 1.0)
@group(0) @binding(5)
var<uniform> softmaxParams : vec4<f32>;

fn lane_f32(v: vec4<f32>, lane: u32) -> f32 {
    if (lane == 0u) { return v.x; }
    if (lane == 1u) { return v.y; }
    if (lane == 2u) { return v.z; }
    return v.w;
}

fn gram_at(r: u32, c: u32) -> f32 {
    // r in [0,63], c in [0,63]
    let v = gram[r * 16u + (c >> 2u)];
    return lane_f32(v, c & 3u);
}

fn w_at(wv: ptr<function, array<vec4<f32>, 16>>, i: u32) -> f32 {
    let v = (*wv)[i >> 2u];
    return lane_f32(v, i & 3u);
}

fn q_at(i: u32) -> f32 {
    let v = query_weights[i >> 2u];
    return lane_f32(v, i & 3u);
}

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(global_invocation_id) gid : vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.numPoints) {
        return;
    }

    let out_index = params.baseOffset + idx;
    if (params.hasWeights == 0u) {
        similarity[out_index] = 0.0;
        return;
    }

    let base = idx * 16u;
    // Load 64D weights (16 vec4) for this gaussian
    var wv: array<vec4<f32>, 16>;
    for (var i: u32 = 0u; i < 16u; i = i + 1u) {
        wv[i] = language_weights[base + i];
    }

    var ws: array<f32, 64>;
    let useSoftmax = softmaxParams.y > 0.5;
    let temperature = max(1e-6, softmaxParams.x);
    let invTemp = 1.0 / temperature;

    if (useSoftmax) {
        // Stable softmax over 64D weights (optionally temperature-scaled).
        var maxv: f32 = -1e30;
        for (var i: u32 = 0u; i < 64u; i = i + 1u) {
            maxv = max(maxv, w_at(&wv, i));
        }
        var sumexp: f32 = 0.0;
        for (var i: u32 = 0u; i < 64u; i = i + 1u) {
            let e = exp((w_at(&wv, i) - maxv) * invTemp);
            ws[i] = e;
            sumexp = sumexp + e;
        }
        let invsum = 1.0 / max(1e-12, sumexp);
        for (var i: u32 = 0u; i < 64u; i = i + 1u) {
            ws[i] = ws[i] * invsum;
        }
    } else {
        // No softmax: interpret weights as already-normalized (or user-controlled).
        for (var i: u32 = 0u; i < 64u; i = i + 1u) {
            ws[i] = w_at(&wv, i);
        }
    }

    // Numerator: softmax(w) · (Cq)
    var num: f32 = 0.0;
    for (var i: u32 = 0u; i < 64u; i = i + 1u) {
        num = num + ws[i] * q_at(i);
    }

    // Denominator: || w^T C || = sqrt(w^T (C C^T) w) = sqrt(w^T G w)
    var den2: f32 = 0.0;
    for (var r: u32 = 0u; r < 64u; r = r + 1u) {
        var acc: f32 = 0.0;
        for (var c: u32 = 0u; c < 64u; c = c + 1u) {
            acc = acc + gram_at(r, c) * ws[c];
        }
        den2 = den2 + ws[r] * acc;
    }

    let denom = sqrt(max(1e-12, den2));
    // We keep only positive cosine for visualization/thresholding (range ~[0,1])
    let cos_sim = num / denom;
    similarity[out_index] = clamp(max(0.0, cos_sim), 0.0, 1.0);
}

`,mt=`// Render a per-splat similarity map (grayscale), using the same splat shape as gaussian.wgsl

// we cutoff at 1/255 alpha value 
const CUTOFF:f32 = 2.3539888583335364; // = sqrt(log(255))

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) screen_pos: vec2<f32>,
    @location(1) similarity: f32,
    @location(2) opacity: f32,
};

struct Splat {
     // 4x f16 packed as u32
    v_0: u32, v_1: u32,
    // 2x f16 packed as u32 (NDC x,y)
    pos: u32,
    // NDC z (high precision)
    posz: f32,
    // rgba packed as f16
    color_0: u32, color_1: u32,
};

@group(0) @binding(2)
var<storage, read> points_2d : array<Splat>;

@group(0) @binding(3)
var<storage, read> similarity_buffer : array<f32>;

@group(0) @binding(4)
var<storage, read> source_indices : array<u32>;

@group(1) @binding(4)
var<storage, read> indices : array<u32>;

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
    @builtin(instance_index) in_instance_index: u32
) -> VertexOutput {
    var out: VertexOutput;

    let splat_index = indices[in_instance_index];
    let vertex = points_2d[splat_index];

    // scaled eigenvectors in screen space 
    let v1 = unpack2x16float(vertex.v_0);
    let v2 = unpack2x16float(vertex.v_1);

    let v_center_xy = unpack2x16float(vertex.pos);
    let v_center_z = vertex.posz;

    // splat rectangle with left lower corner at (-1,-1)
    // and upper right corner at (1,1)
    let x = f32(in_vertex_index % 2u == 0u) * 2. - (1.);
    let y = f32(in_vertex_index < 2u) * 2. - (1.);

    let position = vec2<f32>(x, y) * CUTOFF;

    let offset = 2. * mat2x2<f32>(v1, v2) * position;
    let z_ndc = clamp(v_center_z, 0.0, 1.0);
    out.position = vec4<f32>(v_center_xy + offset, z_ndc, 1.);
    out.screen_pos = position;
    let src_index = source_indices[splat_index];
    out.similarity = similarity_buffer[src_index];
    // Match gaussian.wgsl: use per-splat opacity (stored in packed color alpha) in accumulation.
    let c1 = unpack2x16float(vertex.color_1);
    out.opacity = c1.y;
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let a = dot(in.screen_pos, in.screen_pos);
    if a > 2. * CUTOFF {
        discard;
    }
    let b = min(0.99, exp(-a) * in.opacity);
    let sim = clamp(in.similarity, 0.0, 1.0);
    return vec4<f32>(sim, sim, sim, 1.0) * b;
}

`,Wr=`// Compute per-Gaussian scalar numerator/denominator terms for pixel-level cosine approximation.
// Output per-point:
//   num  = w · q64
//   den2 = w^T (C C^T) w = w^T G w
//
// Notes:
// - This is an approximation when used with pixel compositing because it ignores cross-terms between
//   different splats inside the same pixel. It is still useful and much cheaper than HxWx64.

struct Params {
  baseOffset: u32,
  numPoints: u32,
  hasWeights: u32,
  _pad0: u32,
};

@group(0) @binding(0)
var<uniform> query_weights : array<vec4<f32>, 16>; // q64 packed as 16 vec4

@group(0) @binding(1)
var<storage, read> language_weights : array<vec4<f32>>; // 16 vec4 per point

@group(0) @binding(2)
var<storage, read_write> numden2_out : array<vec2<f32>>; // per-point (num, den2)

@group(0) @binding(3)
var<uniform> params : Params;

@group(0) @binding(4)
// Gram matrix G = C * C^T, row-major packed as 64 rows × 16 vec4s (= 64*64 floats)
var<uniform> gram : array<vec4<f32>, 64 * 16>;

fn lane_f32(v: vec4<f32>, lane: u32) -> f32 {
  if (lane == 0u) { return v.x; }
  if (lane == 1u) { return v.y; }
  if (lane == 2u) { return v.z; }
  return v.w;
}

fn gram_at(r: u32, c: u32) -> f32 {
  let v = gram[r * 16u + (c >> 2u)];
  return lane_f32(v, c & 3u);
}

fn w_at(wv: ptr<function, array<vec4<f32>, 16>>, i: u32) -> f32 {
  let vi = i >> 2u;
  let li = i & 3u;
  if (li == 0u) { return (*wv)[vi].x; }
  if (li == 1u) { return (*wv)[vi].y; }
  if (li == 2u) { return (*wv)[vi].z; }
  return (*wv)[vi].w;
}

fn q_at(i: u32) -> f32 {
  let vi = i >> 2u;
  let li = i & 3u;
  return lane_f32(query_weights[vi], li);
}

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(global_invocation_id) gid : vec3<u32>) {
  let idx = gid.x;
  if (idx >= params.numPoints) { return; }
  let out_index = params.baseOffset + idx;

  if (params.hasWeights == 0u) {
    numden2_out[out_index] = vec2<f32>(0.0, 1.0);
    return;
  }

  // Load 64D weights (16 vec4)
  let base = idx * 16u;
  var wv: array<vec4<f32>, 16>;
  for (var i: u32 = 0u; i < 16u; i = i + 1u) {
    wv[i] = language_weights[base + i];
  }

  // num = w · q64
  var num: f32 = 0.0;
  for (var i: u32 = 0u; i < 64u; i = i + 1u) {
    num = num + w_at(&wv, i) * q_at(i);
  }

  // den2 = w^T G w
  var den2: f32 = 0.0;
  for (var r: u32 = 0u; r < 64u; r = r + 1u) {
    var acc: f32 = 0.0;
    for (var c: u32 = 0u; c < 64u; c = c + 1u) {
      acc = acc + gram_at(r, c) * w_at(&wv, c);
    }
    den2 = den2 + w_at(&wv, r) * acc;
  }

  numden2_out[out_index] = vec2<f32>(num, den2);
}

`,ns=`// Render a per-splat (num, den2) map using the same splat shape as gaussian.wgsl.
// The map is accumulated with premultiplied alpha over blending.
//
// Output target format: rgba16float
//   r = num (premultiplied by alpha in shader)
//   g = den2 (premultiplied by alpha in shader)
//   b = 0
//   a = alpha

const CUTOFF:f32 = 2.3539888583335364; // = sqrt(log(255))

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) screen_pos: vec2<f32>,
    @location(1) num: f32,
    @location(2) den2: f32,
    @location(3) opacity: f32,
};

struct Splat {
    v_0: u32, v_1: u32,
    pos: u32,
    posz: f32,
    color_0: u32, color_1: u32,
};

@group(0) @binding(2)
var<storage, read> points_2d : array<Splat>;

@group(0) @binding(3)
var<storage, read> numden2_buffer : array<vec2<f32>>;

@group(0) @binding(4)
var<storage, read> source_indices : array<u32>;

@group(1) @binding(4)
var<storage, read> indices : array<u32>;

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
    @builtin(instance_index) in_instance_index: u32
) -> VertexOutput {
    var out: VertexOutput;
    let splat_index = indices[in_instance_index];
    let vertex = points_2d[splat_index];

    let v1 = unpack2x16float(vertex.v_0);
    let v2 = unpack2x16float(vertex.v_1);

    let v_center_xy = unpack2x16float(vertex.pos);
    let v_center_z = vertex.posz;

    let x = f32(in_vertex_index % 2u == 0u) * 2. - (1.);
    let y = f32(in_vertex_index < 2u) * 2. - (1.);
    let position = vec2<f32>(x, y) * CUTOFF;

    let offset = 2. * mat2x2<f32>(v1, v2) * position;
    let z_ndc = clamp(v_center_z, 0.0, 1.0);
    out.position = vec4<f32>(v_center_xy + offset, z_ndc, 1.);
    out.screen_pos = position;

    let src_index = source_indices[splat_index];
    let nd = numden2_buffer[src_index];
    out.num = nd.x;
    out.den2 = nd.y;

    let c1 = unpack2x16float(vertex.color_1);
    out.opacity = c1.y;
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let a = dot(in.screen_pos, in.screen_pos);
    if a > 2. * CUTOFF {
        discard;
    }
    let alpha = min(0.99, exp(-a) * in.opacity);
    // Premultiply by alpha; blending does the over composition.
    return vec4<f32>(in.num, in.den2, 0.0, 1.0) * alpha;
}

`,Nr=`// Compute per-Gaussian neg relevancy scores.
//
// We compute cosine similarities using precomputed q64 vectors and gram matrix G=C*C^T:
//   s(q) = (w · q64) / sqrt(w^T G w)
//
// Neg relevancy (binary softmax) against each negative:
//   p_pos_given_neg = softmax(tau * [s_pos, s_neg])[0] = sigmoid(tau * (s_pos - s_neg))
//
// Output similarity := min_j p_pos_given_neg_j (hardest negative), clamped to [0,1].

struct Params {
  baseOffset: u32,
  numPoints: u32,
  hasWeights: u32,
  _pad0: u32,
};

// cfg.x = tau
// cfg.y = negMask bits (0..3) encoded as f32 but treated as u32
// cfg.z = useRelevancy (0.0/1.0)
// cfg.w = reserved
@group(0) @binding(6)
var<uniform> cfg : vec4<f32>;

@group(0) @binding(0)
var<uniform> queries : array<vec4<f32>, 16u * 5u>; // [pos, neg0..3] each is 16 vec4

@group(0) @binding(1)
var<storage, read> language_weights : array<vec4<f32>>;

@group(0) @binding(2)
var<storage, read_write> similarity : array<f32>;

@group(0) @binding(3)
var<uniform> params : Params;

// Gram matrix G = C * C^T, row-major packed as 64 rows × 16 vec4s (= 64*64 floats)
@group(0) @binding(4)
var<uniform> gram : array<vec4<f32>, 64u * 16u>;

fn lane_f32(v: vec4<f32>, lane: u32) -> f32 {
  if (lane == 0u) { return v.x; }
  if (lane == 1u) { return v.y; }
  if (lane == 2u) { return v.z; }
  return v.w;
}

fn gram_at(r: u32, c: u32) -> f32 {
  let v = gram[r * 16u + (c >> 2u)];
  return lane_f32(v, c & 3u);
}

fn w_at(wv: ptr<function, array<vec4<f32>, 16>>, i: u32) -> f32 {
  let v = (*wv)[i >> 2u];
  return lane_f32(v, i & 3u);
}

fn q_at(qi: u32, i: u32) -> f32 {
  let base = qi * 16u;
  let v = queries[base + (i >> 2u)];
  return lane_f32(v, i & 3u);
}

fn sigmoid(x: f32) -> f32 {
  // Stable-ish sigmoid
  return 1.0 / (1.0 + exp(-x));
}

fn cosine_for_query(wv: ptr<function, array<vec4<f32>, 16>>, qi: u32, denom: f32) -> f32 {
  var num: f32 = 0.0;
  for (var i: u32 = 0u; i < 64u; i = i + 1u) {
    num = num + w_at(wv, i) * q_at(qi, i);
  }
  return num / denom;
}

fn denom_from_gram(wv: ptr<function, array<vec4<f32>, 16>>) -> f32 {
  var den2: f32 = 0.0;
  for (var r: u32 = 0u; r < 64u; r = r + 1u) {
    var acc: f32 = 0.0;
    for (var c: u32 = 0u; c < 64u; c = c + 1u) {
      acc = acc + gram_at(r, c) * w_at(wv, c);
    }
    den2 = den2 + w_at(wv, r) * acc;
  }
  return sqrt(max(1e-12, den2));
}

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(global_invocation_id) gid : vec3<u32>) {
  let idx = gid.x;
  if (idx >= params.numPoints) { return; }
  let out_index = params.baseOffset + idx;

  if (params.hasWeights == 0u) {
    similarity[out_index] = 0.0;
    return;
  }

  let useRel = cfg.z > 0.5;

  // Load 64D weights (16 vec4)
  let base = idx * 16u;
  var wv: array<vec4<f32>, 16>;
  for (var i: u32 = 0u; i < 16u; i = i + 1u) {
    wv[i] = language_weights[base + i];
  }

  let denom = denom_from_gram(&wv);
  let s_pos = cosine_for_query(&wv, 0u, denom);

  if (!useRel) {
    similarity[out_index] = clamp(max(0.0, s_pos), 0.0, 1.0);
    return;
  }

  let tau = max(1e-6, cfg.x);
  let negMask = bitcast<u32>(cfg.y);

  var best: f32 = 1.0;
  var hasAny: bool = false;
  for (var j: u32 = 0u; j < 4u; j = j + 1u) {
    if ((negMask & (1u << j)) == 0u) { continue; }
    hasAny = true;
    let s_neg = cosine_for_query(&wv, 1u + j, denom);
    let p = sigmoid(tau * (s_pos - s_neg));
    best = min(best, p);
  }
  if (!hasAny) {
    best = clamp(max(0.0, s_pos), 0.0, 1.0);
  }

  similarity[out_index] = clamp(best, 0.0, 1.0);
}

`,He=256,It=8,lt=1<<It,is=32/It,Qe=15,Bt=Qe,Ir=128,os=256;function Hr(f){const e=f.slice();for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}class ve{bindGroupLayout;renderBindGroupLayout;preprocessBindGroupLayout;zero_p;histogram_p;prefix_p;scatter_local_even_p;scatter_local_odd_p;scatter_prefix_p;scatter_apply_even_p;scatter_apply_odd_p;subgroupSize;constructor(){}static async create(e,t){console.debug("Searching for the maximum subgroup size...");const s=[16,32,16,8,1];for(const r of s){console.debug(`Testing sorting with subgroup size ${r}`);try{const n=new ve;if(await n.initializeWithSubgroupSize(e,r),await n.testSort(e,t))return console.log(`Subgroup size ${r} works.`),n}catch(n){console.warn(`Subgroup size ${r} failed during pipeline creation or test run.`,n)}}throw new Error("GPURSSorter::create() No working subgroup size was found. Unable to use sorter.")}async initializeWithSubgroupSize(e,t){this.subgroupSize=t,this.bindGroupLayout=this.createBindGroupLayout(e),this.renderBindGroupLayout=ve.createRenderBindGroupLayout(e),this.preprocessBindGroupLayout=ve.createPreprocessBindGroupLayout(e);const s=e.createPipelineLayout({label:"radix sort pipeline layout",bindGroupLayouts:[this.bindGroupLayout]}),r=this.processShaderTemplate(zr),n=e.createShaderModule({label:"Radix sort shader",code:r});this.zero_p=await e.createComputePipelineAsync({label:"Zero the histograms",layout:s,compute:{module:n,entryPoint:"zero_histograms"}}),this.histogram_p=await e.createComputePipelineAsync({label:"calculate_histogram",layout:s,compute:{module:n,entryPoint:"calculate_histogram"}}),this.prefix_p=await e.createComputePipelineAsync({label:"prefix_histogram",layout:s,compute:{module:n,entryPoint:"prefix_histogram"}}),this.scatter_local_even_p=await e.createComputePipelineAsync({label:"scatter_local_even",layout:s,compute:{module:n,entryPoint:"scatter_local_even"}}),this.scatter_local_odd_p=await e.createComputePipelineAsync({label:"scatter_local_odd",layout:s,compute:{module:n,entryPoint:"scatter_local_odd"}}),this.scatter_prefix_p=await e.createComputePipelineAsync({label:"scatter_prefix_pass",layout:s,compute:{module:n,entryPoint:"scatter_prefix_pass"}}),this.scatter_apply_even_p=await e.createComputePipelineAsync({label:"scatter_apply_even",layout:s,compute:{module:n,entryPoint:"scatter_apply_even"}}),this.scatter_apply_odd_p=await e.createComputePipelineAsync({label:"scatter_apply_odd",layout:s,compute:{module:n,entryPoint:"scatter_apply_odd"}})}processShaderTemplate(e){const t=Math.max(1,this.subgroupSize|0),s=Math.floor(lt/t),r=Math.floor(s/t),i=lt+Bt*os,o=0,a=o+s,l=a+r,c=`const histogram_sg_size: u32 = ${t}u;
            const histogram_wg_size: u32 = ${He}u;
            const rs_radix_log2: u32 = ${It}u;
            const rs_radix_size: u32 = ${lt}u;
            const rs_keyval_size: u32 = ${is}u;
            const rs_histogram_block_rows: u32 = ${Qe}u;
            const rs_scatter_block_rows: u32 = ${Bt}u;
            const rs_mem_dwords: u32 = ${i}u;
            const rs_mem_sweep_0_offset: u32 = ${o}u;
            const rs_mem_sweep_1_offset: u32 = ${a}u;
            const rs_mem_sweep_2_offset: u32 = ${l}u;
            `;let d=e.replace(/{histogram_wg_size}/g,He.toString()).replace(/{prefix_wg_size}/g,Ir.toString()).replace(/{scatter_wg_size}/g,os.toString());return c+d}async testSort(e,t){const r=new Float32Array(Hr(Array.from({length:8192},(l,c)=>8191-c))),n=new Float32Array(Array.from({length:8192},(l,c)=>c)),i=this.createSortStuff(e,8192);t.writeBuffer(i.key_a,0,r.buffer);const o=e.createCommandEncoder({label:"GPURSSorter test_sort"});this.recordSort(i,8192,o),t.submit([o.finish()]),await e.queue.onSubmittedWorkDone();const a=await this.downloadBuffer(e,t,i.key_a,"f32");for(let l=0;l<8192;l++)if(a[l]!==n[l])return console.error(`Sort failed at index ${l}. Expected ${n[l]}, got ${a[l]}`),!1;return!0}createSortStuff(e,t){const{key_a:s,key_b:r,payload_a:n,payload_b:i}=this.createKeyvalBuffers(e,t,4),o=this.createInternalMemBuffer(e,t),a=e.createBuffer({label:"Radix sort source indices",size:Math.max(1,t)*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),{sorter_uni:l,sorter_dis:c,sorter_bg:d}=this.createBindGroup(e,t,o,s,r,n,i),u=this.createRenderBindGroup(e,l,n),p=this.createPreprocessBindGroup(e,l,c,s,n,a);return{numPoints:t,num_points:t,sortedIndices:n,indirectBuffer:c,sorter_uni:l,sorter_dis:c,sorter_bg:d,sorter_render_bg:u,sorter_bg_pre:p,internal_mem:o,key_a:s,key_b:r,payload_a:n,payload_b:i,source_indices:a}}recordSort(e,t,s){const r=e;this.recordCalculateHistogram(r.sorter_bg,t,s),this.recordPrefixHistogram(r.sorter_bg,4,s),this.recordScatterKeys(r.sorter_bg,t,s)}recordSortIndirect(e,t,s){const r=e;{const n=s.beginComputePass({label:"RS::Zero (Indirect)"});n.setBindGroup(0,r.sorter_bg),n.setPipeline(this.zero_p),n.dispatchWorkgroupsIndirect(t,0),n.end()}{const n=s.beginComputePass({label:"RS::Histogram (Indirect)"});n.setBindGroup(0,r.sorter_bg),n.setPipeline(this.histogram_p),n.dispatchWorkgroupsIndirect(t,0),n.end()}this.recordPrefixHistogram(r.sorter_bg,4,s),this.recordScatterPassIndirect(r.sorter_bg,t,!0,s),this.recordScatterPassIndirect(r.sorter_bg,t,!1,s),this.recordScatterPassIndirect(r.sorter_bg,t,!0,s),this.recordScatterPassIndirect(r.sorter_bg,t,!1,s)}recordSortIndirect_one(e,t,s){this.recordSortIndirect(e,t,s)}static createRenderBindGroupLayout(e){return e.createBindGroupLayout({label:"Radix Sort Render Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]})}static createPreprocessBindGroupLayout(e){return e.createBindGroupLayout({label:"Radix Sort Preprocess Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})}recordResetIndirectBuffer(e,t,s){const r=new Uint32Array([0]);s.writeBuffer(e,0,r),s.writeBuffer(t,0,r)}createBindGroupLayout(e){return e.createBindGroupLayout({label:"Radix Sort Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})}getScatterHistogramSizes(e){const t=He*Bt,s=Math.ceil(e/t),r=s*t,n=He*Qe,o=Math.ceil(r/n)*n;return{scatter_blocks_ru:s,count_ru_histo:o}}createKeyvalBuffers(e,t,s){const r=He*Qe,i=(Math.floor((t+r)/r)+1)*r*Float32Array.BYTES_PER_ELEMENT,o=e.createBuffer({label:"Radix data buffer a",size:i,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),a=e.createBuffer({label:"Radix data buffer b",size:i,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});s!==4&&console.warn("Currently only 4-byte payloads are fully supported.");const l=Math.max(1,t*s),c=e.createBuffer({label:"Radix payload buffer a",size:l,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),d=e.createBuffer({label:"Radix payload buffer b",size:l,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return{key_a:o,key_b:a,payload_a:c,payload_b:d}}createInternalMemBuffer(e,t){const{scatter_blocks_ru:s}=this.getScatterHistogramSizes(t),r=lt*Uint32Array.BYTES_PER_ELEMENT,n=(is+(s+1)*2)*r;return e.createBuffer({label:"Internal radix sort buffer",size:n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}createBindGroup(e,t,s,r,n,i,o){const{scatter_blocks_ru:a,count_ru_histo:l}=this.getScatterHistogramSizes(t),c={keys_size:t,padded_size:l,passes:4,even_pass:0,odd_pass:0},d=e.createBuffer({label:"Radix uniform buffer",size:5*Uint32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,mappedAtCreation:!0});new Uint32Array(d.getMappedRange()).set([c.keys_size,c.padded_size,c.passes,c.even_pass,c.odd_pass]),d.unmap();const u={dispatch_x:a,dispatch_y:1,dispatch_z:1},p=e.createBuffer({label:"Dispatch indirect buffer",size:3*Uint32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.INDIRECT,mappedAtCreation:!0});new Uint32Array(p.getMappedRange()).set([u.dispatch_x,u.dispatch_y,u.dispatch_z]),p.unmap();const h=e.createBindGroup({label:"Radix bind group",layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:d}},{binding:1,resource:{buffer:s}},{binding:2,resource:{buffer:r}},{binding:3,resource:{buffer:n}},{binding:4,resource:{buffer:i}},{binding:5,resource:{buffer:o}}]});return{sorter_uni:d,sorter_dis:p,sorter_bg:h}}createRenderBindGroup(e,t,s){return e.createBindGroup({label:"Render bind group",layout:this.renderBindGroupLayout,entries:[{binding:0,resource:{buffer:t}},{binding:4,resource:{buffer:s}}]})}createPreprocessBindGroup(e,t,s,r,n,i){return e.createBindGroup({label:"Preprocess bind group",layout:this.preprocessBindGroupLayout,entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:r}},{binding:2,resource:{buffer:n}},{binding:3,resource:{buffer:s}},{binding:4,resource:{buffer:i}}]})}recordCalculateHistogram(e,t,s){const{count_ru_histo:r}=this.getScatterHistogramSizes(t),n=He*Qe,i=Math.ceil(r/n);{const o=s.beginComputePass({label:"RS::Zero"});o.setBindGroup(0,e),o.setPipeline(this.zero_p),o.dispatchWorkgroups(i,1,1),o.end()}{const o=s.beginComputePass({label:"RS::Histogram"});o.setBindGroup(0,e),o.setPipeline(this.histogram_p),o.dispatchWorkgroups(i,1,1),o.end()}}recordPrefixHistogram(e,t,s){const r=s.beginComputePass({label:"Radix Sort :: Prefix Sum Pass"});r.setPipeline(this.prefix_p),r.setBindGroup(0,e),r.dispatchWorkgroups(t,1,1),r.end()}recordScatterKeys(e,t,s){const{scatter_blocks_ru:r}=this.getScatterHistogramSizes(t),n=(i,o,a)=>{{const l=s.beginComputePass({label:`${a}::Local`});l.setBindGroup(0,e),l.setPipeline(i),l.dispatchWorkgroups(r,1,1),l.end()}{const l=s.beginComputePass({label:`${a}::Prefix`});l.setBindGroup(0,e),l.setPipeline(this.scatter_prefix_p),l.dispatchWorkgroups(1,1,1),l.end()}{const l=s.beginComputePass({label:`${a}::Apply`});l.setBindGroup(0,e),l.setPipeline(o),l.dispatchWorkgroups(r,1,1),l.end()}};n(this.scatter_local_even_p,this.scatter_apply_even_p,"RS::Scatter0_even"),n(this.scatter_local_odd_p,this.scatter_apply_odd_p,"RS::Scatter1_odd"),n(this.scatter_local_even_p,this.scatter_apply_even_p,"RS::Scatter2_even"),n(this.scatter_local_odd_p,this.scatter_apply_odd_p,"RS::Scatter3_odd")}recordScatterPassIndirect(e,t,s,r){const n=s?this.scatter_local_even_p:this.scatter_local_odd_p,i=s?this.scatter_apply_even_p:this.scatter_apply_odd_p,o=s?"even":"odd";{const a=r.beginComputePass({label:`RS::ScatterLocal_${o} (Indirect)`});a.setBindGroup(0,e),a.setPipeline(n),a.dispatchWorkgroupsIndirect(t,0),a.end()}{const a=r.beginComputePass({label:`RS::ScatterPrefix_${o} (Indirect)`});a.setBindGroup(0,e),a.setPipeline(this.scatter_prefix_p),a.dispatchWorkgroups(1,1,1),a.end()}{const a=r.beginComputePass({label:`RS::ScatterApply_${o} (Indirect)`});a.setBindGroup(0,e),a.setPipeline(i),a.dispatchWorkgroupsIndirect(t,0),a.end()}}async downloadBuffer(e,t,s,r){const n=e.createBuffer({label:"Download buffer",size:s.size,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),i=e.createCommandEncoder({label:"Copy encoder"});i.copyBufferToBuffer(s,0,n,0,s.size),t.submit([i.finish()]),await n.mapAsync(GPUMapMode.READ);const o=n.getMappedRange();let a;return r==="f32"?a=new Float32Array(o.slice(0)):a=new Uint32Array(o.slice(0)),n.unmap(),n.destroy(),a}}async function Vr(f,e,t=0,s=4){const r=f.createBuffer({size:s,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST,label:"debug-staging-buffer"}),n=f.createCommandEncoder();n.copyBufferToBuffer(e,t,r,0,s),f.queue.submit([n.finish()]),await f.queue.onSubmittedWorkDone(),await r.mapAsync(GPUMapMode.READ);const i=r.getMappedRange(0,s),o=new ArrayBuffer(s);return new Uint8Array(o).set(new Uint8Array(i)),r.unmap(),r.destroy(),o}async function Cs(f,e,t=0){const s=await Vr(f,e,t,4);return new Uint32Array(s)[0]}async function Ts(f,e){return await Cs(f,e,0)}async function as(f,e){const t=await Cs(f,e,68);return console.log(`🔍 DEBUG: ModelParams.num_points (offset 68) = ${t}`),t}async function jr(f,e,t,s){if(console.log("🔍 === GPU COUNT DEBUG TRACE ==="),console.log(`📊 Max points allocated: ${s}`),e){const r=await Ts(f,e);console.log(`📊 ONNX inference count: ${r}`);const n=await as(f,t);console.log(`📊 ModelParams count: ${n}`),r===n?console.log("✅ Count successfully propagated from ONNX to shader uniforms"):(console.log(`❌ Count mismatch! ONNX=${r}, ModelParams=${n}`),console.log("⚠️ The buffer copy may have failed or timing is wrong")),n===s&&console.log("⚠️ WARNING: Using maxPoints instead of dynamic count!")}else{console.log("ℹ️ No ONNX count buffer (static model)");const r=await as(f,t);console.log(`📊 ModelParams count: ${r}`)}console.log("🔍 === END DEBUG TRACE ===")}class ls{pipeline;pipelineLayout;cameraUniforms;settingsUniforms;shDegree=3;device;m_useRawColor=!1;scratchCameraBuffer=new ArrayBuffer(272);scratchCameraView=new Float32Array(this.scratchCameraBuffer);scratchSettingsBuffer=new ArrayBuffer(80);scratchSettingsView=new DataView(this.scratchSettingsBuffer);async initialize(e,t,s=!1){this.device=e,this.shDegree=t,this.cameraUniforms=new Fe(e,new ArrayBuffer(272),"Camera Uniforms"),this.settingsUniforms=new Fe(e,new ArrayBuffer(80),"Settings Uniforms"),this.pipelineLayout=e.createPipelineLayout({label:"preprocess pipeline layout",bindGroupLayouts:[Fe.bindGroupLayout(e),this.getPointCloudBindGroupLayout(e),this.getSortBindGroupLayout(e),this.getSettingsAndModelParamsBGL(e)]});const r=kr.replace("<injected>",t.toString()),n=e.createShaderModule({label:"preprocess.wgsl",code:r});this.pipeline=e.createComputePipeline({label:"preprocess pipeline",layout:this.pipelineLayout,compute:{module:n,entryPoint:"preprocess",constants:{USE_RAW_COLOR:s?1:0}}}),this.m_useRawColor=s,console.log(`📐 Preprocessor initialized with SH degree ${t}, raw color: ${s}`)}dispatchModel(e,t){if(this.packCameraUniforms(e.camera,e.viewport),this.packSettingsUniforms(e.pointCloud,e.settings),e.pointCloud.updateModelParamsWithOffset(e.modelMatrix,e.baseOffset),this.cameraUniforms.flush(this.device),this.settingsUniforms.flush(this.device),"setPrecisionForShader"in e.pointCloud&&typeof e.pointCloud.setPrecisionForShader=="function")try{e.pointCloud.setPrecisionForShader()}catch{}e.countBuffer?(e.pointCloud.modelParamsUniforms.flush(this.device),t.copyBufferToBuffer(e.countBuffer,0,e.pointCloud.modelParamsUniforms.buffer,68,4)):e.pointCloud.modelParamsUniforms.flush(this.device);const s=t.beginComputePass({label:"preprocess compute pass (global/M1)"});s.setPipeline(this.pipeline),s.setBindGroup(0,this.cameraUniforms.bindGroup);const r=this.pipeline.getBindGroupLayout(1),n=e.pointCloud.getSplatBuffer(),i=this.device.createBindGroup({label:"preprocess/pc-global-bg",layout:r,entries:[{binding:0,resource:{buffer:n.gaussianBuffer}},{binding:1,resource:{buffer:n.shBuffer}},{binding:2,resource:{buffer:e.global.splat2D}},{binding:3,resource:{buffer:e.pointCloud.uniforms.buffer}},{binding:4,resource:{buffer:e.pointCloud.getExtraPcaBuffer()}}]});s.setBindGroup(1,i),s.setBindGroup(2,this.getSortBindGroup(e.sortStuff));const o=this.pipeline.getBindGroupLayout(3),a=this.device.createBindGroup({layout:o,entries:[{binding:0,resource:{buffer:this.settingsUniforms.buffer}},{binding:1,resource:{buffer:e.pointCloud.modelParamsUniforms.buffer}}]});s.setBindGroup(3,a);const c=Math.ceil(e.pointCloud.numPoints/256);s.dispatchWorkgroups(c,1,1),s.end()}getBindGroupLayout(e){return this.pipeline.getBindGroupLayout(0)}packCameraUniforms(e,t){const s=this.scratchCameraView,r=e.viewMatrix();s.set(r,0);const n=this.invertMatrix4(r);s.set(n,16);const i=e.projMatrix(),o=this.multiplyMatrix4(Tr,i);s.set(o,32);const a=this.invertMatrix4(i);s.set(a,48),s[64]=t[0],s[65]=t[1];const l=e.projection.focal(t);s[66]=l[0],s[67]=l[1],this.cameraUniforms.setData(s)}packSettingsUniforms(e,t){const s=this.scratchSettingsView;let r=0;s.setFloat32(r+0,t.clippingBoxMin[0],!0),s.setFloat32(r+4,t.clippingBoxMin[1],!0),s.setFloat32(r+8,t.clippingBoxMin[2],!0),s.setFloat32(r+12,0,!0),r+=16,s.setFloat32(r+0,t.clippingBoxMax[0],!0),s.setFloat32(r+4,t.clippingBoxMax[1],!0),s.setFloat32(r+8,t.clippingBoxMax[2],!0),s.setFloat32(r+12,0,!0),r+=16,s.setFloat32(r,t.gaussianScaling,!0),r+=4,s.setUint32(r,t.maxSHDegree,!0),r+=4,s.setUint32(r,t.showEnvMap?1:0,!0),r+=4,s.setUint32(r,t.mipSplatting?1:0,!0),r+=4,s.setFloat32(r,t.kernelSize,!0),r+=4,s.setFloat32(r,t.walltime,!0),r+=4,s.setFloat32(r,t.sceneExtend,!0),r+=4,r=64,s.setFloat32(r+0,t.center[0],!0),s.setFloat32(r+4,t.center[1],!0),s.setFloat32(r+8,t.center[2],!0),s.setFloat32(r+12,0,!0),this.settingsUniforms.setData(s)}identityMat4(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}async debugCountValues(){this._debugCountBuffer&&(console.log("=== PREPROCESSOR DEBUG ==="),await jr(this.device,this._debugCountBuffer,this.modelParamsUniforms?.buffer||null,this._debugMaxPoints||0))}getPointCloudBindGroupLayout(e){return e.createBindGroupLayout({label:"Point Cloud Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]})}getSortBindGroupLayout(e){return e.createBindGroupLayout({label:"Sort Preprocess Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})}getSettingsAndModelParamsBGL(e){return e.createBindGroupLayout({label:"Settings + ModelParams BGL",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]})}getSortBindGroup(e){return e.sorter_bg_pre}invertMatrix4(e){const t=new Float32Array(16),s=e;t[0]=s[5]*s[10]*s[15]-s[5]*s[11]*s[14]-s[9]*s[6]*s[15]+s[9]*s[7]*s[14]+s[13]*s[6]*s[11]-s[13]*s[7]*s[10],t[4]=-s[4]*s[10]*s[15]+s[4]*s[11]*s[14]+s[8]*s[6]*s[15]-s[8]*s[7]*s[14]-s[12]*s[6]*s[11]+s[12]*s[7]*s[10],t[8]=s[4]*s[9]*s[15]-s[4]*s[11]*s[13]-s[8]*s[5]*s[15]+s[8]*s[7]*s[13]+s[12]*s[5]*s[11]-s[12]*s[7]*s[9],t[12]=-s[4]*s[9]*s[14]+s[4]*s[10]*s[13]+s[8]*s[5]*s[14]-s[8]*s[6]*s[13]-s[12]*s[5]*s[10]+s[12]*s[6]*s[9],t[1]=-s[1]*s[10]*s[15]+s[1]*s[11]*s[14]+s[9]*s[2]*s[15]-s[9]*s[3]*s[14]-s[13]*s[2]*s[11]+s[13]*s[3]*s[10],t[5]=s[0]*s[10]*s[15]-s[0]*s[11]*s[14]-s[8]*s[2]*s[15]+s[8]*s[3]*s[14]+s[12]*s[2]*s[11]-s[12]*s[3]*s[10],t[9]=-s[0]*s[9]*s[15]+s[0]*s[11]*s[13]+s[8]*s[1]*s[15]-s[8]*s[3]*s[13]-s[12]*s[1]*s[11]+s[12]*s[3]*s[9],t[13]=s[0]*s[9]*s[14]-s[0]*s[10]*s[13]-s[8]*s[1]*s[14]+s[8]*s[2]*s[13]+s[12]*s[1]*s[10]-s[12]*s[2]*s[9],t[2]=s[1]*s[6]*s[15]-s[1]*s[7]*s[14]-s[5]*s[2]*s[15]+s[5]*s[3]*s[14]+s[13]*s[2]*s[7]-s[13]*s[3]*s[6],t[6]=-s[0]*s[6]*s[15]+s[0]*s[7]*s[14]+s[4]*s[2]*s[15]-s[4]*s[3]*s[14]-s[12]*s[2]*s[7]+s[12]*s[3]*s[6],t[10]=s[0]*s[5]*s[15]-s[0]*s[7]*s[13]-s[4]*s[1]*s[15]+s[4]*s[3]*s[13]+s[12]*s[1]*s[7]-s[12]*s[3]*s[5],t[14]=-s[0]*s[5]*s[14]+s[0]*s[6]*s[13]+s[4]*s[1]*s[14]-s[4]*s[2]*s[13]-s[12]*s[1]*s[6]+s[12]*s[2]*s[5],t[3]=-s[1]*s[6]*s[11]+s[1]*s[7]*s[10]+s[5]*s[2]*s[11]-s[5]*s[3]*s[10]-s[9]*s[2]*s[7]+s[9]*s[3]*s[6],t[7]=s[0]*s[6]*s[11]-s[0]*s[7]*s[10]-s[4]*s[2]*s[11]+s[4]*s[3]*s[10]+s[8]*s[2]*s[7]-s[8]*s[3]*s[6],t[11]=-s[0]*s[5]*s[11]+s[0]*s[7]*s[9]+s[4]*s[1]*s[11]-s[4]*s[3]*s[9]-s[8]*s[1]*s[7]+s[8]*s[3]*s[5],t[15]=s[0]*s[5]*s[10]-s[0]*s[6]*s[9]-s[4]*s[1]*s[10]+s[4]*s[2]*s[9]+s[8]*s[1]*s[6]-s[8]*s[2]*s[5];let r=s[0]*t[0]+s[1]*t[4]+s[2]*t[8]+s[3]*t[12];if(Math.abs(r)<1e-8)throw new Error("Matrix not invertible");r=1/r;for(let n=0;n<16;n++)t[n]*=r;return t}multiplyMatrix4(e,t){const s=e,r=t,n=new Float32Array(16);for(let i=0;i<4;i++){const o=s[i],a=s[i+4],l=s[i+8],c=s[i+12];n[i]=o*r[0]+a*r[1]+l*r[2]+c*r[3],n[i+4]=o*r[4]+a*r[5]+l*r[6]+c*r[7],n[i+8]=o*r[8]+a*r[9]+l*r[10]+c*r[11],n[i+12]=o*r[12]+a*r[13]+l*r[14]+c*r[15]}return n}}function cs(f){const e=new ArrayBuffer(f.byteLength);return new Uint8Array(e).set(new Uint8Array(f.buffer,f.byteOffset,f.byteLength)),e}class qr{device;format;computePipeline;computeBindGroupLayout;renderPipeline;renderPipelineDepth=null;renderBindGroupLayout;renderBindGroup=null;lastRenderBindings={};queryUniform;gramUniform;softmaxUniform;paramsUniform;dummyWeights;renderTarget=null;renderTargetView=null;renderTargetSize=[0,0];constructor(e,t){this.device=e,this.format=t,this.queryUniform=e.createBuffer({label:"Weight query uniform",size:16*16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.gramUniform=e.createBuffer({label:"Weight gram uniform (C*C^T)",size:64*64*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.softmaxUniform=e.createBuffer({label:"Weight softmax params uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.paramsUniform=e.createBuffer({label:"Weight params uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummyWeights=e.createBuffer({label:"Weight dummy buffer",size:256,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.queryUniform,0,new Float32Array(64)),e.queue.writeBuffer(this.gramUniform,0,new Float32Array(64*64)),e.queue.writeBuffer(this.softmaxUniform,0,new Float32Array([1,0,0,0])),e.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([0,0,0,0]))}initialize(){this.createComputePipeline(),this.createRenderPipeline()}setQueryWeights(e){if(e.length!==64){console.warn("[WeightSimilarityPass] Query weights must be length 64.");return}this.device.queue.writeBuffer(this.queryUniform,0,cs(e))}setGramMatrix(e){if(e.length!==64*64){console.warn("[WeightSimilarityPass] Gram matrix must be length 4096 (64x64).");return}this.device.queue.writeBuffer(this.gramUniform,0,cs(e))}setSoftmaxConfig(e,t){const s=Number.isFinite(t)?Math.max(1e-6,t):1,r=e?1:0;this.device.queue.writeBuffer(this.softmaxUniform,0,new Float32Array([s,r,0,0]))}getRenderTarget(){return this.renderTarget}ensureRenderTarget(e,t){const s=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));return this.renderTarget&&this.renderTargetSize[0]===s&&this.renderTargetSize[1]===r?this.renderTargetView:(this.renderTarget&&this.renderTarget.destroy(),this.renderTarget=this.device.createTexture({label:"Weight map render target",size:{width:s,height:r},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.renderTargetView=this.renderTarget.createView(),this.renderTargetSize=[s,r],this.renderTargetView)}recordComputePass(e,t){const s=t.weightsBuffer?1:0;this.device.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([t.baseOffset,t.numPoints,s,0]));const r=this.device.createBindGroup({label:"Weight similarity compute bg",layout:this.computeBindGroupLayout,entries:[{binding:0,resource:{buffer:this.queryUniform}},{binding:1,resource:{buffer:t.weightsBuffer??this.dummyWeights}},{binding:2,resource:{buffer:t.similarityBuffer}},{binding:3,resource:{buffer:this.paramsUniform}},{binding:4,resource:{buffer:this.gramUniform}},{binding:5,resource:{buffer:this.softmaxUniform}}]}),n=e.beginComputePass({label:"weight similarity compute"});n.setPipeline(this.computePipeline),n.setBindGroup(0,r);const i=Math.ceil(t.numPoints/256);n.dispatchWorkgroups(i,1,1),n.end()}recordRenderPass(e,t){const s=this.ensureRenderTarget(t.width,t.height),r=!!t.useDepth&&!!t.depthView;(!this.renderBindGroup||this.lastRenderBindings.splat2d!==t.splat2DBuffer||this.lastRenderBindings.similarity!==t.similarityBuffer||this.lastRenderBindings.source!==t.sourceIndicesBuffer)&&(this.renderBindGroup=this.device.createBindGroup({label:"Weight map render bg",layout:this.renderBindGroupLayout,entries:[{binding:2,resource:{buffer:t.splat2DBuffer}},{binding:3,resource:{buffer:t.similarityBuffer}},{binding:4,resource:{buffer:t.sourceIndicesBuffer}}]}),this.lastRenderBindings={splat2d:t.splat2DBuffer,similarity:t.similarityBuffer,source:t.sourceIndicesBuffer});const n={colorAttachments:[{view:s,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};r&&t.depthView&&t.depthFormat&&(n.depthStencilAttachment={view:t.depthView,depthLoadOp:"load",depthStoreOp:"store",depthClearValue:1},(!this.renderPipelineDepth||this.renderPipelineDepth._depthFormat!==t.depthFormat)&&(this.renderPipelineDepth=this.createDepthPipeline(t.depthFormat),this.renderPipelineDepth._depthFormat=t.depthFormat));const i=e.beginRenderPass(n);return i.setBindGroup(0,this.renderBindGroup),i.setBindGroup(1,t.sortRenderBindGroup),i.setPipeline(r&&this.renderPipelineDepth?this.renderPipelineDepth:this.renderPipeline),i.drawIndirect(t.drawIndirectBuffer,0),i.end(),s}createComputePipeline(){this.computeBindGroupLayout=this.device.createBindGroupLayout({label:"Weight similarity compute BGL",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});const e=this.device.createPipelineLayout({label:"Weight similarity compute layout",bindGroupLayouts:[this.computeBindGroupLayout]}),t=this.device.createShaderModule({label:"Weight similarity compute shader",code:$r});this.computePipeline=this.device.createComputePipeline({label:"Weight similarity compute pipeline",layout:e,compute:{module:t,entryPoint:"main"}})}createRenderPipeline(){this.renderBindGroupLayout=this.device.createBindGroupLayout({label:"Weight map render BGL",entries:[{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});const e=this.device.createShaderModule({label:"Gaussian similarity shader",code:mt}),t=this.device.createPipelineLayout({label:"Weight map render pipeline layout",bindGroupLayouts:[this.renderBindGroupLayout,ve.createRenderBindGroupLayout(this.device)]});this.renderPipeline=this.device.createRenderPipeline({label:"Weight map render pipeline",layout:t,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},multisample:{}})}createDepthPipeline(e){const t=this.device.createShaderModule({label:"Gaussian similarity shader (depth)",code:mt}),s=this.device.createPipelineLayout({label:"Weight map render pipeline layout (depth)",bindGroupLayouts:[this.renderBindGroupLayout,ve.createRenderBindGroupLayout(this.device)]});return this.device.createRenderPipeline({label:`Weight map render pipeline (depth-${e})`,layout:s,vertex:{module:t,entryPoint:"vs_main",buffers:[]},fragment:{module:t,entryPoint:"fs_main",targets:[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},depthStencil:{format:e,depthWriteEnabled:!1,depthCompare:"less"},multisample:{}})}}function us(f){const e=new ArrayBuffer(f.byteLength);return new Uint8Array(e).set(new Uint8Array(f.buffer,f.byteOffset,f.byteLength)),e}class Xr{device;format;computePipeline;computeBindGroupLayout;renderPipeline;renderPipelineDepth=null;renderBindGroupLayout;renderBindGroup=null;lastRenderBindings={};queryUniform;gramUniform;paramsUniform;dummyWeights;renderTarget=null;renderTargetView=null;renderTargetSize=[0,0];constructor(e,t){this.device=e,this.format=t,this.queryUniform=e.createBuffer({label:"NumDen2 query uniform",size:16*16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.gramUniform=e.createBuffer({label:"NumDen2 gram uniform (C*C^T)",size:64*64*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.paramsUniform=e.createBuffer({label:"NumDen2 params uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummyWeights=e.createBuffer({label:"NumDen2 dummy buffer",size:256,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.queryUniform,0,new Float32Array(64)),e.queue.writeBuffer(this.gramUniform,0,new Float32Array(64*64)),e.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([0,0,0,0]))}initialize(){this.createComputePipeline(),this.createRenderPipeline()}setQueryWeights(e){if(e.length!==64){console.warn("[WeightNumDen2Pass] Query weights must be length 64.");return}this.device.queue.writeBuffer(this.queryUniform,0,us(e))}setGramMatrix(e){if(e.length!==64*64){console.warn("[WeightNumDen2Pass] Gram matrix must be length 4096 (64x64).");return}this.device.queue.writeBuffer(this.gramUniform,0,us(e))}getRenderTarget(){return this.renderTarget}recordComputePass(e,t){if(!this.computePipeline)return;const s=t.weightsBuffer?1:0;this.device.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([t.baseOffset,t.numPoints,s,0]));const r=this.device.createBindGroup({label:"NumDen2 compute bg",layout:this.computeBindGroupLayout,entries:[{binding:0,resource:{buffer:this.queryUniform}},{binding:1,resource:{buffer:t.weightsBuffer??this.dummyWeights}},{binding:2,resource:{buffer:t.numDen2Buffer}},{binding:3,resource:{buffer:this.paramsUniform}},{binding:4,resource:{buffer:this.gramUniform}}]}),n=e.beginComputePass({label:"NumDen2 compute pass"});n.setPipeline(this.computePipeline),n.setBindGroup(0,r),n.dispatchWorkgroups(Math.ceil(t.numPoints/256)),n.end()}recordRenderPass(e,t){if(this.ensureRenderTarget(t.width,t.height),!this.renderTargetView)return;(!this.renderBindGroup||this.lastRenderBindings.splat2d!==t.splat2DBuffer||this.lastRenderBindings.numden2!==t.numDen2Buffer||this.lastRenderBindings.source!==t.sourceIndicesBuffer)&&(this.renderBindGroup=this.device.createBindGroup({label:"NumDen2 render bg",layout:this.renderBindGroupLayout,entries:[{binding:2,resource:{buffer:t.splat2DBuffer}},{binding:3,resource:{buffer:t.numDen2Buffer}},{binding:4,resource:{buffer:t.sourceIndicesBuffer}}]}),this.lastRenderBindings={splat2d:t.splat2DBuffer,numden2:t.numDen2Buffer,source:t.sourceIndicesBuffer});const s={label:"NumDen2 render pass",colorAttachments:[{view:this.renderTargetView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]},r=!!t.useDepth&&!!t.depthView&&!!t.depthFormat;r&&(s.depthStencilAttachment={view:t.depthView,depthLoadOp:"load",depthStoreOp:"store"});const n=e.beginRenderPass(s);n.setBindGroup(0,this.renderBindGroup),n.setBindGroup(1,t.sortRenderBindGroup),n.setPipeline(r?this.getDepthPipeline(t.depthFormat):this.renderPipeline),n.drawIndirect(t.drawIndirectBuffer,0),n.end()}createComputePipeline(){this.computeBindGroupLayout=this.device.createBindGroupLayout({label:"NumDen2 compute BGL",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});const e=this.device.createPipelineLayout({label:"NumDen2 compute layout",bindGroupLayouts:[this.computeBindGroupLayout]}),t=this.device.createShaderModule({label:"NumDen2 compute shader",code:Wr});this.computePipeline=this.device.createComputePipeline({label:"NumDen2 compute pipeline",layout:e,compute:{module:t,entryPoint:"main"}})}createRenderPipeline(){this.renderBindGroupLayout=this.device.createBindGroupLayout({label:"NumDen2 render BGL",entries:[{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});const e=this.device.createShaderModule({label:"Gaussian numden2 shader",code:ns}),t=this.device.createPipelineLayout({label:"NumDen2 render pipeline layout",bindGroupLayouts:[this.renderBindGroupLayout,ve.createRenderBindGroupLayout(this.device)]});this.renderPipeline=this.device.createRenderPipeline({label:"NumDen2 render pipeline",layout:t,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},multisample:{}})}getDepthPipeline(e){if(this.renderPipelineDepth&&this.renderPipelineDepth.__depthFormat===e)return this.renderPipelineDepth;const t=this.device.createShaderModule({label:"Gaussian numden2 shader (depth)",code:ns}),s=this.device.createPipelineLayout({label:"NumDen2 render pipeline layout (depth)",bindGroupLayouts:[this.renderBindGroupLayout,ve.createRenderBindGroupLayout(this.device)]}),r=this.device.createRenderPipeline({label:`NumDen2 render pipeline (depth-${e})`,layout:s,vertex:{module:t,entryPoint:"vs_main",buffers:[]},fragment:{module:t,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},depthStencil:{format:e,depthWriteEnabled:!1,depthCompare:"less"},multisample:{}});return r.__depthFormat=e,this.renderPipelineDepth=r,r}ensureRenderTarget(e,t){this.renderTarget&&this.renderTargetView&&this.renderTargetSize[0]===e&&this.renderTargetSize[1]===t||(this.renderTarget?.destroy(),this.renderTarget=this.device.createTexture({label:"NumDen2 render target",size:{width:e,height:t},format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.renderTargetView=this.renderTarget.createView(),this.renderTargetSize=[e,t])}}function ds(f){const e=new ArrayBuffer(f.byteLength);return new Uint8Array(e).set(new Uint8Array(f.buffer,f.byteOffset,f.byteLength)),e}class Yr{device;format;computePipeline;computeBindGroupLayout;renderPipeline;renderPipelineDepth=null;renderBindGroupLayout;renderBindGroup=null;lastRenderBindings={};queriesUniform;gramUniform;cfgUniform;paramsUniform;dummyWeights;renderTarget=null;renderTargetView=null;renderTargetSize=[0,0];constructor(e,t){this.device=e,this.format=t,this.queriesUniform=e.createBuffer({label:"Relevancy queries uniform (pos+4 neg)",size:80*16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.gramUniform=e.createBuffer({label:"Relevancy gram uniform (C*C^T)",size:64*64*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cfgUniform=e.createBuffer({label:"Relevancy cfg uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.paramsUniform=e.createBuffer({label:"Relevancy params uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummyWeights=e.createBuffer({label:"Relevancy dummy weights buffer",size:256,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.queriesUniform,0,new Float32Array(80*4)),e.queue.writeBuffer(this.gramUniform,0,new Float32Array(64*64)),e.queue.writeBuffer(this.cfgUniform,0,new Float32Array([10,0,0,0])),e.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([0,0,0,0]))}initialize(){this.createComputePipeline(),this.createRenderPipeline()}setGramMatrix(e){if(e.length!==64*64){console.warn("[WeightRelevancyPass] Gram matrix must be length 4096 (64x64).");return}this.device.queue.writeBuffer(this.gramUniform,0,ds(e))}setQueriesPacked(e){if(e.length!==5*64){console.warn("[WeightRelevancyPass] Queries packed must be length 320 (5x64).");return}const t=new Float32Array(80*4);t.set(e),this.device.queue.writeBuffer(this.queriesUniform,0,ds(t))}setConfig(e,t,s){const r=Number.isFinite(t)?Math.max(1e-6,t):10,n=s>>>0,i=new Float32Array(new Uint32Array([n]).buffer)[0];this.device.queue.writeBuffer(this.cfgUniform,0,new Float32Array([r,i,e?1:0,0]))}getRenderTarget(){return this.renderTarget}recordComputePass(e,t){if(!this.computePipeline)return;const s=t.weightsBuffer?1:0;this.device.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([t.baseOffset,t.numPoints,s,0]));const r=this.device.createBindGroup({label:"Relevancy compute bg",layout:this.computeBindGroupLayout,entries:[{binding:0,resource:{buffer:this.queriesUniform}},{binding:1,resource:{buffer:t.weightsBuffer??this.dummyWeights}},{binding:2,resource:{buffer:t.similarityBuffer}},{binding:3,resource:{buffer:this.paramsUniform}},{binding:4,resource:{buffer:this.gramUniform}},{binding:6,resource:{buffer:this.cfgUniform}}]}),n=e.beginComputePass({label:"Relevancy compute pass"});n.setPipeline(this.computePipeline),n.setBindGroup(0,r),n.dispatchWorkgroups(Math.ceil(t.numPoints/256)),n.end()}recordRenderPass(e,t){if(this.ensureRenderTarget(t.width,t.height),!this.renderTargetView)return;(!this.renderBindGroup||this.lastRenderBindings.splat2d!==t.splat2DBuffer||this.lastRenderBindings.similarity!==t.similarityBuffer||this.lastRenderBindings.source!==t.sourceIndicesBuffer)&&(this.renderBindGroup=this.device.createBindGroup({label:"Relevancy render bg",layout:this.renderBindGroupLayout,entries:[{binding:2,resource:{buffer:t.splat2DBuffer}},{binding:3,resource:{buffer:t.similarityBuffer}},{binding:4,resource:{buffer:t.sourceIndicesBuffer}}]}),this.lastRenderBindings={splat2d:t.splat2DBuffer,similarity:t.similarityBuffer,source:t.sourceIndicesBuffer});const s={label:"Relevancy render pass",colorAttachments:[{view:this.renderTargetView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]},r=!!t.useDepth&&!!t.depthView&&!!t.depthFormat;r&&(s.depthStencilAttachment={view:t.depthView,depthLoadOp:"load",depthStoreOp:"store"});const n=e.beginRenderPass(s);n.setBindGroup(0,this.renderBindGroup),n.setBindGroup(1,t.sortRenderBindGroup),n.setPipeline(r?this.getDepthPipeline(t.depthFormat):this.renderPipeline),n.drawIndirect(t.drawIndirectBuffer,0),n.end()}createComputePipeline(){this.computeBindGroupLayout=this.device.createBindGroupLayout({label:"Relevancy compute BGL",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});const e=this.device.createPipelineLayout({label:"Relevancy compute layout",bindGroupLayouts:[this.computeBindGroupLayout]}),t=this.device.createShaderModule({label:"Relevancy compute shader",code:Nr});this.computePipeline=this.device.createComputePipeline({label:"Relevancy compute pipeline",layout:e,compute:{module:t,entryPoint:"main"}})}createRenderPipeline(){this.renderBindGroupLayout=this.device.createBindGroupLayout({label:"Relevancy render BGL",entries:[{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});const e=this.device.createShaderModule({label:"Gaussian similarity shader (relevancy map)",code:mt}),t=this.device.createPipelineLayout({label:"Relevancy render pipeline layout",bindGroupLayouts:[this.renderBindGroupLayout,ve.createRenderBindGroupLayout(this.device)]});this.renderPipeline=this.device.createRenderPipeline({label:"Relevancy render pipeline",layout:t,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},multisample:{}})}getDepthPipeline(e){if(this.renderPipelineDepth&&this.renderPipelineDepth.__depthFormat===e)return this.renderPipelineDepth;const t=this.device.createShaderModule({label:"Gaussian similarity shader (relevancy map, depth)",code:mt}),s=this.device.createPipelineLayout({label:"Relevancy render pipeline layout (depth)",bindGroupLayouts:[this.renderBindGroupLayout,ve.createRenderBindGroupLayout(this.device)]}),r=this.device.createRenderPipeline({label:`Relevancy render pipeline (depth-${e})`,layout:s,vertex:{module:t,entryPoint:"vs_main",buffers:[]},fragment:{module:t,entryPoint:"fs_main",targets:[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},depthStencil:{format:e,depthWriteEnabled:!1,depthCompare:"less"},multisample:{}});return r.__depthFormat=e,this.renderPipelineDepth=r,r}ensureRenderTarget(e,t){this.renderTarget&&this.renderTargetView&&this.renderTargetSize[0]===e&&this.renderTargetSize[1]===t||(this.renderTarget?.destroy(),this.renderTarget=this.device.createTexture({label:"Relevancy render target",size:{width:e,height:t},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.renderTargetView=this.renderTarget.createView(),this.renderTargetSize=[e,t])}}const Jr=.3;class Qr{device;format;shDegree;compressed;debug;pipeline;pipelineDepth;useDepth=!1;depthFormat="depth24plus";pipelineLayout;drawIndirectBuffer;sorter;preprocessorSH;preprocessorRGB;sortResourcesCache=new WeakMap;globalCapacity=0;globalBuffers=null;weightPass=null;weightMapEnabled=!1;numDen2Pass=null;weightMapApprox2Enabled=!1;relevancyPass=null;weightMapRelevancyEnabled=!1;weightSoftmaxEnabled=!1;weightSoftmaxTemperature=1;constructor(e,t,s,r=!1){"device"in e?(this.device=e.device,this.format=e.format,this.shDegree=e.shDegree,this.compressed=e.compressed??!1,this.debug=e.debug??!1):(this.device=e,this.format=t,this.shDegree=s,this.compressed=r,this.debug=!1)}async ensureSorter(){await this.initialize()}async initialize(){await this.initializeSorter(),await this.initializePreprocessor(),this.createPipelineLayout(),this.createRenderPipeline(),this.createIndirectDrawBuffer(),this.ensureGlobalCapacity(1e6);try{globalThis.gaussianRenderer=this}catch{}this.debug&&console.log(`GaussianRenderer initialized: ${this.format}, SH degree ${this.shDegree}, global capacity ${this.globalCapacity}`)}render(e,t){const s=this.getSortResources(t);e.setBindGroup(0,t.renderBindGroup()),e.setBindGroup(1,s.sorter_render_bg),e.setPipeline(this.useDepth&&this.pipelineDepth?this.pipelineDepth:this.pipeline),e.drawIndirect(this.drawIndirectBuffer,0)}setDepthEnabled(e){this.useDepth=!!e}setDepthFormat(e){this.depthFormat!==e&&(this.depthFormat=e,this.createDepthPipeline(),globalThis.GS_DEPTH_DEBUG&&(console.log("[GaussianRenderer] Depth format changed to:",e),console.log("[GaussianRenderer] Depth pipeline recreated")))}createDepthPipeline(){const e=this.device.createShaderModule({label:"Gaussian Shader Module",code:rs});this.pipelineDepth=this.device.createRenderPipeline({label:`Gaussian Render Pipeline (Depth-${this.depthFormat})`,layout:this.pipelineLayout,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},depthStencil:{format:this.depthFormat,depthWriteEnabled:!1,depthCompare:"less"},multisample:{}})}getPipelineInfo(){return{format:this.format,bindGroupLayouts:[Ae.renderBindGroupLayout(this.device),ve.createRenderBindGroupLayout(this.device)]}}getRenderStats(e){const t=this.sortResourcesCache.get(e);return{gaussianCount:e.numPoints,visibleSplats:t?.num_points??0,memoryUsage:this.estimateMemoryUsage(e)}}prepareMulti(e,t,s,r){if(s.length===0)return;const n=[];let i=0;for(const o of s)n.push(i),i+=o.numPoints;if(this._dlog("[prepareMulti] total points =",i,"offsets =",n),this.ensureGlobalCapacity(i),!!this.globalBuffers){this._dlog("[prepareMulti] using global capacity =",this.globalCapacity),this.weightMapEnabled&&this.ensureWeightPass(),this.weightMapApprox2Enabled&&this.ensureNumDen2Pass(),this.weightMapRelevancyEnabled&&this.ensureRelevancyPass(),this.sorter.recordResetIndirectBuffer(this.globalBuffers.sortStuff.sorter_dis,this.globalBuffers.sortStuff.sorter_uni,t);for(let o=0;o<s.length;o++){const a=s[o],l=n[o];this._dlog(`[prepareMulti] dispatch model #${o} baseOffset=${l} count=${a.numPoints}`);let c;"countBuffer"in a&&typeof a.countBuffer=="function"&&(c=a.countBuffer(),c&&this._dlog(`[prepareMulti] Model #${o} has ONNX count buffer`));const u=this.getColorMode(a)==="rgb"?this.preprocessorRGB:this.preprocessorSH,p=this.buildRenderSettings(a,r);if(u.dispatchModel({camera:r.camera,viewport:r.viewport,pointCloud:a,sortStuff:this.globalBuffers.sortStuff,settings:p,modelMatrix:a.transform,baseOffset:l,global:{splat2D:this.globalBuffers.splat2D},countBuffer:c},e),this.weightMapEnabled&&this.weightPass&&this.globalBuffers){const h=a.getWeightBuffer?.()??null;this.weightPass.recordComputePass(e,{weightsBuffer:h,similarityBuffer:this.globalBuffers.similarity,baseOffset:l,numPoints:a.numPoints})}if(this.weightMapApprox2Enabled&&this.numDen2Pass&&this.globalBuffers){const h=a.getWeightBuffer?.()??null;this.numDen2Pass.recordComputePass(e,{weightsBuffer:h,numDen2Buffer:this.globalBuffers.numDen2,baseOffset:l,numPoints:a.numPoints})}if(this.weightMapRelevancyEnabled&&this.relevancyPass&&this.globalBuffers){const h=a.getWeightBuffer?.()??null;this.relevancyPass.recordComputePass(e,{weightsBuffer:h,similarityBuffer:this.globalBuffers.similarity,baseOffset:l,numPoints:a.numPoints})}}this.sorter.recordSortIndirect(this.globalBuffers.sortStuff,this.globalBuffers.sortStuff.sorter_dis,e),e.copyBufferToBuffer(this.globalBuffers.sortStuff.sorter_uni,0,this.drawIndirectBuffer,4,4),this._dlog("[prepareMulti] recorded global sort & updated instanceCount from sorter_uni")}}renderMulti(e,t){this.globalBuffers&&(e.setBindGroup(0,this.globalBuffers.renderBG),e.setBindGroup(1,this.globalBuffers.sortStuff.sorter_render_bg),e.setPipeline(this.useDepth&&this.pipelineDepth?this.pipelineDepth:this.pipeline),e.drawIndirect(this.drawIndirectBuffer,0))}setWeightMapEnabled(e){this.weightMapEnabled=!!e,this.weightMapEnabled&&this.ensureWeightPass()}setWeightMapApprox2Enabled(e){this.weightMapApprox2Enabled=!!e,this.weightMapApprox2Enabled&&this.ensureNumDen2Pass()}setWeightMapRelevancyEnabled(e){this.weightMapRelevancyEnabled=!!e,this.weightMapRelevancyEnabled&&this.ensureRelevancyPass()}setWeightSoftmaxConfig(e,t=1){this.weightSoftmaxEnabled=!!e,this.weightSoftmaxTemperature=Number.isFinite(t)?Math.max(1e-6,t):1,this.ensureWeightPass(),this.weightPass?.setSoftmaxConfig(this.weightSoftmaxEnabled,this.weightSoftmaxTemperature)}setWeightQueryWeights(e,t){this.ensureWeightPass(),this.weightPass?.setQueryWeights(e),t&&this.weightPass?.setGramMatrix(t)}setWeightQueryNumDen2(e,t){this.ensureNumDen2Pass(),this.numDen2Pass?.setQueryWeights(e),t&&this.numDen2Pass?.setGramMatrix(t)}setWeightRelevancyData(e,t,s=!0,r=10,n=15){this.ensureRelevancyPass(),t&&this.relevancyPass?.setGramMatrix(t),this.relevancyPass?.setQueriesPacked(e),this.relevancyPass?.setConfig(s,r,n)}recordWeightMapPass(e,t,s){return!this.weightMapEnabled||!this.weightPass||!this.globalBuffers?null:(this.weightPass.recordRenderPass(e,{splat2DBuffer:this.globalBuffers.splat2D,similarityBuffer:this.globalBuffers.similarity,sourceIndicesBuffer:this.globalBuffers.sortStuff.source_indices,sortRenderBindGroup:this.globalBuffers.sortStuff.sorter_render_bg,drawIndirectBuffer:this.drawIndirectBuffer,width:t[0],height:t[1],depthView:s,depthFormat:this.depthFormat,useDepth:this.useDepth}),this.weightPass.getRenderTarget())}recordWeightMapApprox2Pass(e,t,s){return!this.weightMapApprox2Enabled||!this.numDen2Pass||!this.globalBuffers?null:(this.numDen2Pass.recordRenderPass(e,{splat2DBuffer:this.globalBuffers.splat2D,numDen2Buffer:this.globalBuffers.numDen2,sourceIndicesBuffer:this.globalBuffers.sortStuff.source_indices,sortRenderBindGroup:this.globalBuffers.sortStuff.sorter_render_bg,drawIndirectBuffer:this.drawIndirectBuffer,width:t[0],height:t[1],depthView:s,depthFormat:this.depthFormat,useDepth:this.useDepth}),this.numDen2Pass.getRenderTarget())}recordWeightMapRelevancyPass(e,t,s){return!this.weightMapRelevancyEnabled||!this.relevancyPass||!this.globalBuffers?null:(this.relevancyPass.recordRenderPass(e,{splat2DBuffer:this.globalBuffers.splat2D,similarityBuffer:this.globalBuffers.similarity,sourceIndicesBuffer:this.globalBuffers.sortStuff.source_indices,sortRenderBindGroup:this.globalBuffers.sortStuff.sorter_render_bg,drawIndirectBuffer:this.drawIndirectBuffer,width:t[0],height:t[1],depthView:s,depthFormat:this.depthFormat,useDepth:this.useDepth}),this.relevancyPass.getRenderTarget())}async initializeSorter(){this.sorter=await ve.create(this.device,this.device.queue)}async initializePreprocessor(){this.preprocessorSH=new ls,await this.preprocessorSH.initialize(this.device,this.shDegree,!1),this.preprocessorRGB=new ls,await this.preprocessorRGB.initialize(this.device,0,!0),console.log("Initialized dual preprocessors: SH and RGB modes")}getColorMode(e){return e.colorMode}createPipelineLayout(){this.pipelineLayout=this.device.createPipelineLayout({label:"Gaussian Renderer Pipeline Layout",bindGroupLayouts:[Ae.renderBindGroupLayout(this.device),ve.createRenderBindGroupLayout(this.device)]})}createRenderPipeline(){const e=this.device.createShaderModule({label:"Gaussian Shader Module",code:rs});this.pipeline=this.device.createRenderPipeline({label:"Gaussian Render Pipeline",layout:this.pipelineLayout,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},multisample:{}}),this.createDepthPipeline()}createIndirectDrawBuffer(){this.drawIndirectBuffer=this.device.createBuffer({label:"Gaussian Indirect Draw Buffer",size:16,usage:GPUBufferUsage.INDIRECT|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.device.queue.writeBuffer(this.drawIndirectBuffer,0,new Uint32Array([4,0,0,0]))}getSortResources(e){let t=this.sortResourcesCache.get(e);return(!t||t.num_points!==e.numPoints)&&(t=this.sorter.createSortStuff(this.device,e.numPoints),this.sortResourcesCache.set(e,t),this.debug&&console.log(`Created sort resources for ${e.numPoints} points`)),t}buildRenderSettings(e,t){const s=e.bbox,r=e.center,n=s.min,i=s.max,o=Math.max(Math.abs(i[0]-n[0]),Math.abs(i[1]-n[1]),Math.abs(i[2]-n[2]));return{maxSHDegree:Math.min(t.maxSHDegree??e.shDeg,this.shDegree),showEnvMap:t.showEnvMap??!0,mipSplatting:t.mipSplatting??e.mipSplatting??!1,kernelSize:t.kernelSize??e.kernelSize??Jr,walltime:t.walltime??1,sceneExtend:t.sceneExtend??o,center:new Float32Array([t.sceneCenter?.[0]??r[0],t.sceneCenter?.[1]??r[1],t.sceneCenter?.[2]??r[2]]),clippingBoxMin:new Float32Array([t.clippingBox?.min[0]??n[0],t.clippingBox?.min[1]??n[1],t.clippingBox?.min[2]??n[2]]),clippingBoxMax:new Float32Array([t.clippingBox?.max[0]??i[0],t.clippingBox?.max[1]??i[1],t.clippingBox?.max[2]??i[2]])}}estimateMemoryUsage(e){const t=e.numPoints*128,s=e.numPoints*8*2;return t+s}async ensureGlobalCapacity(e){const t=Math.max(1,e);if(this.globalBuffers&&t<=this.globalCapacity){const c=this.globalBuffers;c.numDen2||(c.numDen2=this.device.createBuffer({label:`global/numDen2(cap=${this.globalCapacity})`,size:this.globalCapacity*8,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}));return}this._dlog("[ensureGlobalCapacity] grow needed. needed=",t,"oldCap=",this.globalCapacity);const s=Math.ceil(t*1.25);if(this.globalBuffers){try{this.globalBuffers.splat2D.destroy()}catch{}try{this.globalBuffers.similarity?.destroy?.()}catch{}try{this.globalBuffers.numDen2?.destroy?.()}catch{}this.globalBuffers=null}for(;!this.sorter;)await new Promise(c=>setTimeout(c,100));const r=this.sorter.createSortStuff(this.device,s),n=this.device.createBuffer({label:`global/splat2d(cap=${s})`,size:s*Wt.SPLAT_STRIDE,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=this.device.createBuffer({label:`global/similarity(cap=${s})`,size:s*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),o=this.device.createBuffer({label:`global/numDen2(cap=${s})`,size:s*8,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),a=Ae.renderBindGroupLayout(this.device),l=this.device.createBindGroup({label:"global/render/bg",layout:a,entries:[{binding:2,resource:{buffer:n}}]});this.globalBuffers={splat2D:n,similarity:i,numDen2:o,renderBG:l,sortStuff:r},this.globalCapacity=s,this._dlog("[ensureGlobalCapacity] new capacity =",this.globalCapacity)}ensureWeightPass(){this.weightPass||(this.weightPass=new qr(this.device,this.format),this.weightPass.initialize()),this.weightPass.setSoftmaxConfig(this.weightSoftmaxEnabled,this.weightSoftmaxTemperature)}ensureNumDen2Pass(){this.numDen2Pass||(this.numDen2Pass=new Xr(this.device,"rgba16float"),this.numDen2Pass.initialize())}ensureRelevancyPass(){this.relevancyPass||(this.relevancyPass=new Yr(this.device,this.format),this.relevancyPass.initialize())}async readInstanceCountDebug(){const e=this.device.createBuffer({label:"debug/instanceCount",size:4,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),t=this.device.createCommandEncoder({label:"debug/enc"});t.copyBufferToBuffer(this.drawIndirectBuffer,4,e,0,4),this.device.queue.submit([t.finish()]),await this.device.queue.onSubmittedWorkDone(),await e.mapAsync(GPUMapMode.READ);const s=new Uint32Array(e.getMappedRange())[0];return e.unmap(),e.destroy(),console.log("[debug] instanceCount =",s),s}async debugONNXCount(){if(console.log("=== RENDERER DEBUG: ONNX Count Pipeline ==="),this._debugCountBuffer){const e=this.preprocessorSH;"debugCountValues"in e&&typeof e.debugCountValues=="function"&&await e.debugCountValues();const t=this._debugPointCloud;t&&console.log(`PointCloud.numPoints = ${t.numPoints}`)}else console.log("No ONNX count buffer to debug")}async readPayloadSampleDebug(e=8){if(!this.globalBuffers)throw new Error("globalBuffers not ready");const t=this.globalBuffers.sortStuff.payload_a,s=Math.min(t.size,e*4),r=this.device.createBuffer({label:"debug/payloadSample",size:s,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),n=this.device.createCommandEncoder({label:"debug/payloadEnc"});n.copyBufferToBuffer(t,0,r,0,s),this.device.queue.submit([n.finish()]),await this.device.queue.onSubmittedWorkDone(),await r.mapAsync(GPUMapMode.READ);const i=new Uint32Array(r.getMappedRange().slice(0));return r.unmap(),r.destroy(),console.log("[debug] payload[0..",e,")=",Array.from(i)),i}_dlog(...e){try{globalThis.GS_DEBUG_LOGS&&console.log(...e)}catch{}}}class fs{viewMat=ht();projMat=ht();_position=new Float32Array(3);_focal=[0,0];_viewport=[1,1];transposeRotation=!0;flipProjY=!1;flipProjX=!1;compensatePreprocessYFlip=!0;projection={focal:e=>this._focal};update(e,t){e.updateMatrixWorld(),e.updateProjectionMatrix();const s=e.matrixWorldInverse.elements;for(let c=0;c<16;c++)this.viewMat[c]=s[c];this.viewMat[0]=-this.viewMat[0],this.viewMat[4]=-this.viewMat[4],this.viewMat[8]=-this.viewMat[8],this.viewMat[12]=-this.viewMat[12],this.viewMat[2]=-this.viewMat[2],this.viewMat[6]=-this.viewMat[6],this.viewMat[10]=-this.viewMat[10],this.viewMat[14]=-this.viewMat[14];const r=e.projectionMatrix.elements,n=new Float32Array(16);n[0]=-1,n[5]=1,n[10]=-1,n[15]=1;const i=new Float32Array(16);for(let c=0;c<4;c++)for(let d=0;d<4;d++){let u=0;for(let p=0;p<4;p++){const h=r[p*4+d],v=n[c*4+p];u+=h*v}i[c*4+d]=u}this.compensatePreprocessYFlip&&(i[1]=-i[1],i[5]=-i[5],i[9]=-i[9],i[13]=-i[13]);for(let c=0;c<16;c++)this.projMat[c]=i[c];e.getWorldPosition(new B).toArray(this._position);const o=(e.fov??60)*Math.PI/180,a=e.aspect&&isFinite(e.aspect)&&e.aspect>0?e.aspect:t[0]/Math.max(1,t[1]),l=2*Math.atan(Math.tan(o*.5)*a);this._viewport=t,this._focal[0]=t[0]/(2*Math.tan(l*.5)),this._focal[1]=t[1]/(2*Math.tan(o*.5))}viewMatrix(){return this.viewMat}projMatrix(){return this.projMat}position(){return this._position}frustumPlanes(){const e=new Float32Array(24);for(let t=0;t<24;t++)e[t]=t<12?1e3:-1e3;return e}}class Ot{object3D;mixer;clips;transform;currentAction=null;isPlaying=!1;isPaused=!1;animationSpeed=1;timeScale=1;timeOffset=0;timeUpdateMode="variable_delta";lastUpdateTime=0;frameTime=0;constructor(e,t,s={}){this.object3D=e,this.clips=t,this.mixer=new Ys(e),this.transform=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.applyTransform(),t.length>0&&(this.currentAction=this.mixer.clipAction(t[0]),this.currentAction.setLoop(Xt,s.loop?1/0:1),s.autoPlay!==!1&&this.startAnimation(s.defaultSpeed||1))}applyTransform(){const e=new ke;e.fromArray(this.transform),this.object3D.matrix.copy(e),this.object3D.matrixAutoUpdate=!1}setTransform(e){this.transform=new Float32Array(e),this.applyTransform()}getVertexCount(){let e=0;return this.object3D.traverse(t=>{if(t instanceof yt){const s=t.geometry;s.attributes.position&&(e+=s.attributes.position.count)}}),e}setVisible(e){this.object3D.visible=e}getVisible(){return this.object3D.visible}setAnimationTime(e){this.currentAction&&(this.currentAction.time=e,this.mixer.update(0)),this.frameTime=e}setAnimationSpeed(e){this.animationSpeed=e,this.currentAction&&(this.currentAction.timeScale=e*this.timeScale)}getAnimationSpeed(){return this.animationSpeed}startAnimation(e){e!==void 0&&this.setAnimationSpeed(e),this.currentAction&&(this.currentAction.reset(),this.currentAction.play(),this.isPlaying=!0,this.isPaused=!1)}pauseAnimation(){this.currentAction&&(this.currentAction.paused=!0,this.isPaused=!0)}resumeAnimation(){this.currentAction&&(this.currentAction.paused=!1,this.isPaused=!1)}stopAnimation(){this.currentAction&&(this.currentAction.stop(),this.isPlaying=!1,this.isPaused=!1)}setTimeScale(e){this.timeScale=e,this.currentAction&&(this.currentAction.timeScale=this.animationSpeed*e)}getTimeScale(){return this.timeScale}setTimeOffset(e){this.timeOffset=e}getTimeOffset(){return this.timeOffset}setTimeUpdateMode(e){this.timeUpdateMode=e}getTimeUpdateMode(){return this.timeUpdateMode}getCurrentTime(){return this.currentAction?this.currentAction.time:0}supportsAnimation(){return this.clips.length>0}update(e){if(this.isPlaying&&!this.isPaused){const t=e*this.timeScale;this.mixer.update(t),this.frameTime+=t}this.lastUpdateTime=performance.now()}switchToClip(e){return e>=0&&e<this.clips.length?(this.currentAction&&this.currentAction.stop(),this.currentAction=this.mixer.clipAction(this.clips[e]),this.currentAction.setLoop(Xt,1/0),this.currentAction.timeScale=this.animationSpeed*this.timeScale,this.isPlaying&&!this.isPaused&&this.currentAction.play(),!0):!1}getClipInfo(){return this.clips.map(e=>({name:e.name,duration:e.duration}))}dispose(){this.currentAction&&this.currentAction.stop(),this.mixer.stopAllAction(),this.object3D.clear()}}class Lt extends yt{renderer;gaussianModels;pcs=null;threeRenderer;threeScene;device;canvasFormat;sceneDepthRT=null;sceneDepthTexture=null;autoDepthMode=!0;occluderMeshes=[];occluderScene=new Js;gizmoOverlayRT=null;overlaySampler=null;overlayBindGroupLayout=null;overlayPipeline=null;overlayRenderedThisFrame=!1;postProcessEnabled=!1;postProcessTarget=null;postProcessTargetView=null;postProcessTargetWidth=0;postProcessTargetHeight=0;postProcessTargetWrittenThisFrame=!1;postProcessSampler=null;postProcessBindGroupLayout=null;postProcessPipeline=null;postProcessFragmentWGSL=null;postProcessUsesDepth=!1;postProcessUsesExtraTexture=!1;postProcessUsesUniform=!1;postProcessExtraTexture=null;postProcessExtraSampler=null;postProcessUniformBuffer=null;dummyPostProcessExtraTexture=null;weightOverlayEnabled=!1;weightOverlayApprox2Enabled=!1;weightOverlayUseRelevancy=!1;weightOverlayRelevancyTau=10;weightOverlayThreshold=.25;weightOverlayOpacity=.6;weightOverlayBlendWithBase=!0;weightOverlayGain=1.5;weightOverlayColormap=0;constructor(e,t,s){super(),this.frustumCulled=!1,this.threeRenderer=e,this.threeScene=t,this.device=e.backend.device;try{this.device.onuncapturederror=n=>{const i=n.error?.message;console.error("[WebGPU] uncaptured error:",i??n.error,n.error)}}catch{}const r=navigator.gpu.getPreferredCanvasFormat();this.renderer=new Qr(this.device,r,3),this.gaussianModels=s,this.canvasFormat=r}onResize(e,t,s){}renderThreeScene(e){if(this.postProcessTargetWrittenThisFrame=!1,!this.autoDepthMode)return;const t=new Te;this.threeRenderer.getDrawingBufferSize?.(t);const s=t.x||this.threeRenderer.domElement.width||1,r=t.y||this.threeRenderer.domElement.height||1;(!this.sceneDepthRT||this.sceneDepthRT.width!==s||this.sceneDepthRT.height!==r)&&(this.sceneDepthRT&&this.sceneDepthRT.dispose(),this.sceneDepthRT=new Yt(s,r,{format:Ks,type:Qs,samples:1,depthBuffer:!0}),this.sceneDepthRT.texture.colorSpace=Zs,this.sceneDepthTexture=new er(s,r,tr),this.sceneDepthRT.depthTexture=this.sceneDepthTexture),this.threeRenderer.setRenderTarget(this.sceneDepthRT),this.threeRenderer.clear(!0,!0,!1),this.threeRenderer.render(this.threeScene,e),this.threeRenderer.setRenderTarget(null);const n=this.ensurePostProcessTarget(s,r);this.blitRenderTargetToTarget(e,n??void 0),this.postProcessTargetWrittenThisFrame=!!n}blitRenderTargetToTarget(e,t){if(this.sceneDepthRT)try{const s=this.threeRenderer.backend?.device;if(!s){console.warn("[Depth] No GPU device available for blit"),this.threeRenderer.render(this.threeScene,e);return}let r=t;if(!r){const d=this.threeRenderer.domElement.getContext("webgpu");if(!d){console.warn("[Depth] No WebGPU context available for blit"),this.threeRenderer.render(this.threeScene,e);return}r=d.getCurrentTexture().createView()}const i=this.threeRenderer.backend?.get?.(this.sceneDepthRT.texture),o=i?.texture;if(!o){console.warn("[Depth] Could not access RT color texture for blit"),this.threeRenderer.render(this.threeScene,e);return}const a=i?.format,l=this.canvasFormat;globalThis.GS_DEPTH_DEBUG,this.blitWithRenderPass(s,o,r,this.sceneDepthRT.width,this.sceneDepthRT.height),globalThis.GS_DEPTH_DEBUG}catch(s){console.warn("[Depth] Blit with render pass failed, falling back to re-render:",s),this.threeRenderer.render(this.threeScene,e)}}blitWithRenderPass(e,t,s,r,n){const i=e.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear"}),o=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]}),a=e.createBindGroup({layout:o,entries:[{binding:0,resource:t.createView()},{binding:1,resource:i}]}),l=e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[o]}),vertex:{module:e.createShaderModule({code:`
                        @vertex
                        fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4f {
                            var pos = array<vec2f, 6>(
                                vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
                                vec2f(-1.0, 1.0),  vec2f(1.0, -1.0), vec2f(1.0, 1.0)
                            );
                            return vec4f(pos[vertexIndex], 0.0, 1.0);
                        }
                    `}),entryPoint:"vs_main"},fragment:{module:e.createShaderModule({code:`
                        @group(0) @binding(0) var sourceTexture: texture_2d<f32>;
                        @group(0) @binding(1) var sourceSampler: sampler;

                        // 线性空间到sRGB空间的转换函数（标准sRGB gamma校正）
                        fn linearToSRGB(linear: vec3<f32>) -> vec3<f32> {
                            return select(
                                linear * 12.92,
                                pow(max(linear, vec3<f32>(0.0)), vec3<f32>(1.0 / 2.4)) * 1.055 - 0.055,
                                linear > vec3<f32>(0.0031308)
                            );
                        }

                        @fragment
                        fn fs_main(@builtin(position) fragCoord: vec4f) -> @location(0) vec4f {
                            let texCoord = fragCoord.xy / vec2f(${r}.0, ${n}.0);
                            // RT使用HalfFloatType（16位浮点），存储的是线性空间的值
                            // HalfFloatType支持可过滤采样，精度通常足够保持高动态范围内容
                            let linearColor = textureSample(sourceTexture, sourceSampler, texCoord);
                            
                            // 关键修复：将线性空间的值转换为sRGB空间输出到canvas
                            // 使用HalfFloatType（16位浮点）支持WebGPU的过滤采样，避免验证错误
                            // 在输出时进行线性到sRGB的转换，确保颜色正确显示
                            let srgbColor = linearToSRGB(linearColor.rgb);
                            
                            return vec4<f32>(srgbColor, linearColor.a);
                        }
                    `}),entryPoint:"fs_main",targets:[{format:this.canvasFormat}]},primitive:{topology:"triangle-list"}}),c=e.createCommandEncoder({label:"RT-to-Canvas render pass"}),d=c.beginRenderPass({colorAttachments:[{view:s,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});d.setPipeline(l),d.setBindGroup(0,a),d.draw(6,1,0,0),d.end(),e.queue.submit([c.finish()])}onBeforeRender(e,t,s,r,n,i){if(!(s instanceof Ft)&&s.type!=="PerspectiveCamera"){console.log("Only THREE.PerspectiveCamera is supported!",s);return}const o=this.convertCamera(s,e),a=this.gaussianModels.filter(h=>h.isVisible(s));if(this.pcs=a.map(h=>h.getPointCloud()).filter(h=>h&&typeof h=="object"&&("numPoints"in h||"countBuffer"in h)&&!("skeletalAnimation"in h||"fbxMesh"in h)),!this.pcs||this.pcs.length===0){globalThis.GS_VIDEO_EXPORT_DEBUG&&(console.warn("[GaussianThreeJSRenderer] onBeforeRender: 没有可见的高斯点云"),console.log("[GaussianThreeJSRenderer] - gaussianModels数量:",this.gaussianModels.length),console.log("[GaussianThreeJSRenderer] - visibleModels数量:",a.length),a.forEach((h,v)=>{const y=h.getPointCloud();console.log(`[GaussianThreeJSRenderer] - 模型${v} getPointCloud返回类型:`,y.constructor.name,"is PointCloud:",y instanceof Ae,"is DynamicPointCloud:",y instanceof Ze,"is FBXModelWrapper:",y instanceof Ot)}));return}a.forEach((h,v)=>{h.syncTransformToGPU()});const l=e.backend.device,c=l.createCommandEncoder({label:"frame"}),d=new Te;e.getDrawingBufferSize?.(d);const u=d.x||e.getSize(new Te).x,p=d.y||e.getSize(new Te).y;this.renderer.prepareMulti(c,l.queue,this.pcs,{camera:o,viewport:[u,p]}),l.queue.submit([c.finish()]),this.autoDepthMode&&globalThis.GS_DEPTH_DEBUG}drawSplats(e,t,s,r,n,i){if(this.pcs==null||this.pcs.length===0)return globalThis.GS_VIDEO_EXPORT_DEBUG&&console.warn("[GaussianThreeJSRenderer] drawSplats: pcs为空或长度为0"),!1;if(!(s instanceof Ft)&&s.type!=="PerspectiveCamera")return console.warn("drawSplats: Only THREE.PerspectiveCamera is supported!",s),!1;const o=e.backend.device,l=e.backend.context.getCurrentTexture().createView();let c=l;if(this.postProcessEnabled){const[v,y]=this.getViewport(),g=this.ensurePostProcessTarget(v,y);g&&(c=g)}const d=o.createCommandEncoder({label:"GS-render"});let u;if(this.sceneDepthTexture){const v=new Te;e.getDrawingBufferSize?.(v),v.x||e.getSize(new Te).x,v.y||e.getSize(new Te).y;try{const g=this.threeRenderer.backend?.get?.(this.sceneDepthTexture);globalThis.GS_DEPTH_DEBUG;const m=g?.texture,x=g?.format;m&&x?(this.renderer.setDepthFormat(x),u=m.createView(),globalThis.GS_DEPTH_DEBUG):globalThis.GS_DEPTH_DEBUG&&console.warn("[Depth] ⚠️ Could not access depth GPU texture from Three.js backend"),u&&(this.renderer.setDepthEnabled(!0),globalThis.GS_DEPTH_DEBUG)}catch(y){globalThis.GS_DEPTH_DEBUG&&console.error("[Depth] ❌ Error accessing depth texture:",y)}}else this.renderer.setDepthEnabled(!1);const p={colorAttachments:[{view:c,clearValue:{r:0,g:0,b:0,a:1},loadOp:this.postProcessEnabled&&c!==l&&!this.postProcessTargetWrittenThisFrame?"clear":"load",storeOp:"store"}]};u?p.depthStencilAttachment={view:u,depthLoadOp:"load",depthStoreOp:"store",depthClearValue:1}:globalThis.GS_DEPTH_DEBUG&&console.warn("[Depth] ⚠️ No depth view available - render pass has no depth attachment");const h=d.beginRenderPass(p);if(this.renderer.renderMulti(h,this.pcs),h.end(),this.compositeOverlayToCanvas(o,d,c),this.weightOverlayEnabled){const[v,y]=this.getViewport(),g=this.weightOverlayUseRelevancy?this.renderer.recordWeightMapRelevancyPass?.(d,[v,y],u):this.renderer.recordWeightMapPass(d,[v,y],u);g&&this.setPostProcessExtraTexture(g)}if(this.weightOverlayApprox2Enabled){const[v,y]=this.getViewport(),g=this.renderer.recordWeightMapApprox2Pass?.(d,[v,y],u);g&&this.setPostProcessExtraTexture(g)}return this.postProcessEnabled&&this.postProcessTarget&&c!==l&&this.runPostProcessPass(o,d,this.postProcessTarget,l,u),o.queue.submit([d.finish()]),!0}renderOverlayScene(e,t){const[s,r]=this.getViewport();if(this.ensureGizmoOverlayRenderTarget(s,r),!this.gizmoOverlayRT)return;const n=this.threeRenderer.getRenderTarget(),i=new ft;this.threeRenderer.getClearColor?.(i);const o=this.threeRenderer.getClearAlpha?.()??1;this.threeRenderer.setRenderTarget(this.gizmoOverlayRT),this.threeRenderer.setClearColor?.(new ft(0),0),this.threeRenderer.clear(!0,!1,!1),this.threeRenderer.render(e,t),this.threeRenderer.setClearColor?.(i,o),this.threeRenderer.setRenderTarget(n),this.overlayRenderedThisFrame=!0}ensureGizmoOverlayRenderTarget(e,t){const s=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));if(this.gizmoOverlayRT&&this.gizmoOverlayRT.width===s&&this.gizmoOverlayRT.height===r)return;this.gizmoOverlayRT&&this.gizmoOverlayRT.dispose();const n=sr??Yt;this.gizmoOverlayRT=new n(s,r),this.gizmoOverlayRT&&this.gizmoOverlayRT.texture&&(this.gizmoOverlayRT.texture.colorSpace=Rt)}compositeOverlayToCanvas(e,t,s){if(!this.overlayRenderedThisFrame||!this.gizmoOverlayRT)return;const i=this.threeRenderer.backend?.get?.(this.gizmoOverlayRT.texture)?.texture;if(!i){this.overlayRenderedThisFrame=!1;return}this.overlaySampler||(this.overlaySampler=e.createSampler({magFilter:"linear",minFilter:"linear"})),this.overlayBindGroupLayout||(this.overlayBindGroupLayout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]}));const o=e.createBindGroup({layout:this.overlayBindGroupLayout,entries:[{binding:0,resource:i.createView()},{binding:1,resource:this.overlaySampler}]});if(!this.overlayPipeline){const l=e.createShaderModule({code:`
                    struct VertexOutput {
                        @builtin(position) position : vec4f,
                        @location(0) uv : vec2f,
                    };

                    @vertex
                    fn vs_main(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var positions = array<vec2f, 6>(
                            vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
                            vec2f(-1.0, 1.0),  vec2f(1.0, -1.0), vec2f(1.0, 1.0)
                        );
                        var uvs = array<vec2f, 6>(
                            vec2f(0.0, 1.0), vec2f(1.0, 1.0), vec2f(0.0, 0.0),
                            vec2f(0.0, 0.0), vec2f(1.0, 1.0), vec2f(1.0, 0.0)
                        );

                        var output : VertexOutput;
                        output.position = vec4f(positions[vertexIndex], 0.0, 1.0);
                        output.uv = uvs[vertexIndex];
                        return output;
                    }

                    @group(0) @binding(0) var overlayTexture : texture_2d<f32>;
                    @group(0) @binding(1) var overlaySampler : sampler;

                    @fragment
                    fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
                        return textureSample(overlayTexture, overlaySampler, uv);
                    }
                `}),c=e.createPipelineLayout({bindGroupLayouts:[this.overlayBindGroupLayout]});this.overlayPipeline=e.createRenderPipeline({layout:c,vertex:{module:l,entryPoint:"vs_main"},fragment:{module:l,entryPoint:"fs_main",targets:[{format:this.canvasFormat,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list"}})}const a=t.beginRenderPass({colorAttachments:[{view:s,loadOp:"load",storeOp:"store"}]});a.setPipeline(this.overlayPipeline),a.setBindGroup(0,o),a.draw(6,1,0,0),a.end(),this.overlayRenderedThisFrame=!1}async init(){await this.renderer.ensureSorter(),console.log("GaussianThreeJSRenderer.init() Done!")}setOccluderMeshes(e){console.warn("[GaussianThreeJSRenderer] setOccluderMeshes is deprecated. Auto depth mode captures the full scene automatically."),console.warn("[GaussianThreeJSRenderer] To use manual occluders, set autoDepthMode = false"),this.autoDepthMode=!1,this.occluderMeshes=e,this.occluderScene.clear(),e.forEach(t=>this.occluderScene.add(t))}setAutoDepthMode(e){this.autoDepthMode=e}setPostProcessEnabled(e){this.postProcessEnabled=e}setPostProcessShader(e,t=!1){this.setPostProcessShaderEx(e,{usesDepth:t})}setPostProcessShaderEx(e,t){this.postProcessFragmentWGSL=e,this.postProcessUsesDepth=!!t?.usesDepth,this.postProcessUsesExtraTexture=!!t?.usesExtraTexture,this.postProcessUsesUniform=!!t?.usesUniform,this.postProcessPipeline=null,this.postProcessBindGroupLayout=null}setPostProcessExtraTexture(e){this.postProcessExtraTexture=e}setPostProcessUniformData(e){this.ensurePostProcessUniformBuffer(),this.postProcessUniformBuffer&&this.device.queue.writeBuffer(this.postProcessUniformBuffer,0,e.buffer,e.byteOffset,e.byteLength)}setWeightQueryWeights(e){this.renderer.setWeightQueryWeights(e)}setWeightQueryCosineData(e,t){this.renderer.setWeightQueryWeights(e,t);try{this.renderer.setWeightQueryNumDen2?.(e,t)}catch{}}setLanguageWeightsSoftmax(e,t=1){this.renderer.setWeightSoftmaxConfig?.(e,t)}async loadWeightQueryFromUrls(e,t,s){const[r,n]=await Promise.all([fetch(e).then(async c=>{if(!c.ok)throw new Error(`Failed to fetch codebook: ${c.status} ${c.statusText}`);return c.arrayBuffer()}),fetch(t).then(async c=>{if(!c.ok)throw new Error(`Failed to fetch query list: ${c.status} ${c.statusText}`);return c.json()})]),i=new Float32Array(r),o=this.extractQueryVector(n,s),a=this.computeQueryWeights(i,o),l=this.computeGramMatrix(i);this.setWeightQueryCosineData(a,l)}setWeightQueryFromData(e,t){const s=e,r=t,n=this.computeQueryWeights(s,r),i=this.computeGramMatrix(s);this.setWeightQueryCosineData(n,i)}setWeightOverlayEnabled(e,t){if(this.weightOverlayEnabled=!!e,this.weightOverlayEnabled&&(this.weightOverlayApprox2Enabled=!1),t?.threshold!==void 0&&(this.weightOverlayThreshold=t.threshold),t?.opacity!==void 0&&(this.weightOverlayOpacity=t.opacity),this.weightOverlayEnabled){if(this.weightOverlayUseRelevancy){try{this.renderer.setWeightMapRelevancyEnabled?.(!0)}catch{}try{this.renderer.setWeightMapEnabled?.(!1)}catch{}}else{this.renderer.setWeightMapEnabled(!0);try{this.renderer.setWeightMapRelevancyEnabled?.(!1)}catch{}}this.setPostProcessEnabled(!0),this.setPostProcessShaderEx(this.getWeightOverlayShader(),{usesExtraTexture:!0,usesUniform:!0}),this.ensureDummyPostProcessExtraTexture(),this.postProcessExtraTexture||this.setPostProcessExtraTexture(this.dummyPostProcessExtraTexture),this.updateWeightOverlayUniform()}else{try{this.renderer.setWeightMapEnabled?.(!1)}catch{}try{this.renderer.setWeightMapRelevancyEnabled?.(!1)}catch{}this.setPostProcessEnabled(!1),this.setPostProcessExtraTexture(null)}}setWeightOverlayApprox2Enabled(e,t){if(this.weightOverlayApprox2Enabled=!!e,this.weightOverlayApprox2Enabled&&(this.weightOverlayEnabled=!1),t?.threshold!==void 0&&(this.weightOverlayThreshold=t.threshold),t?.opacity!==void 0&&(this.weightOverlayOpacity=t.opacity),e){try{this.renderer.setWeightMapEnabled?.(!1)}catch{}try{this.renderer.setWeightMapRelevancyEnabled?.(!1)}catch{}try{this.renderer.setWeightMapApprox2Enabled?.(!0)}catch{}this.setPostProcessEnabled(!0),this.setPostProcessShaderEx(this.getWeightOverlayApprox2Shader(),{usesExtraTexture:!0,usesUniform:!0}),this.ensureDummyPostProcessExtraTexture(),this.postProcessExtraTexture||this.setPostProcessExtraTexture(this.dummyPostProcessExtraTexture),this.updateWeightOverlayUniform()}else{try{this.renderer.setWeightMapApprox2Enabled?.(!1)}catch{}this.setPostProcessEnabled(!1),this.setPostProcessExtraTexture(null)}}ensureDummyPostProcessExtraTexture(){if(this.dummyPostProcessExtraTexture)return;this.dummyPostProcessExtraTexture=this.device.createTexture({label:"postprocess/dummy-extra",size:{width:1,height:1},format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const e=new Uint8Array(256);this.device.queue.writeTexture({texture:this.dummyPostProcessExtraTexture},e,{bytesPerRow:256,rowsPerImage:1},{width:1,height:1,depthOrArrayLayers:1})}getWeightOverlayApprox2Shader(){return`
            fn sample_lut(t: f32, lut: array<vec3f, 16>) -> vec3f {
                let x = clamp(t, 0.0, 1.0) * 15.0;
                let i0 = u32(floor(x));
                let i1 = min(15u, i0 + 1u);
                let f = fract(x);
                return mix(lut[i0], lut[i1], f);
            }

            const TURBO : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.189,0.071,0.232), vec3f(0.259,0.275,0.518), vec3f(0.241,0.488,0.706), vec3f(0.149,0.690,0.741),
                vec3f(0.240,0.824,0.580), vec3f(0.508,0.902,0.329), vec3f(0.792,0.888,0.165), vec3f(0.961,0.787,0.173),
                vec3f(0.992,0.620,0.208), vec3f(0.955,0.412,0.223), vec3f(0.843,0.231,0.233), vec3f(0.678,0.111,0.242),
                vec3f(0.497,0.047,0.256), vec3f(0.330,0.034,0.271), vec3f(0.208,0.049,0.291), vec3f(0.140,0.078,0.299)
            );
            const VIRIDIS : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.267,0.005,0.329), vec3f(0.283,0.141,0.458), vec3f(0.254,0.265,0.530), vec3f(0.207,0.372,0.553),
                vec3f(0.164,0.471,0.558), vec3f(0.128,0.567,0.551), vec3f(0.135,0.659,0.518), vec3f(0.267,0.749,0.441),
                vec3f(0.478,0.821,0.318), vec3f(0.678,0.863,0.189), vec3f(0.824,0.884,0.106), vec3f(0.914,0.896,0.119),
                vec3f(0.965,0.909,0.190), vec3f(0.988,0.933,0.308), vec3f(0.993,0.959,0.439), vec3f(0.993,0.984,0.603)
            );
            const INFERNO : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.002,0.005,0.013), vec3f(0.081,0.017,0.174), vec3f(0.206,0.016,0.318), vec3f(0.340,0.057,0.431),
                vec3f(0.472,0.112,0.428), vec3f(0.604,0.176,0.401), vec3f(0.734,0.254,0.352), vec3f(0.845,0.353,0.285),
                vec3f(0.930,0.466,0.220), vec3f(0.972,0.584,0.165), vec3f(0.988,0.708,0.153), vec3f(0.975,0.822,0.216),
                vec3f(0.936,0.914,0.330), vec3f(0.885,0.967,0.476), vec3f(0.839,0.993,0.646), vec3f(0.988,0.998,0.905)
            );
            const MAGMA : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.001,0.000,0.014), vec3f(0.088,0.028,0.156), vec3f(0.212,0.060,0.304), vec3f(0.341,0.091,0.427),
                vec3f(0.469,0.117,0.514), vec3f(0.595,0.157,0.558), vec3f(0.713,0.216,0.565), vec3f(0.815,0.298,0.540),
                vec3f(0.895,0.404,0.490), vec3f(0.948,0.533,0.427), vec3f(0.976,0.678,0.363), vec3f(0.983,0.827,0.320),
                vec3f(0.965,0.949,0.400), vec3f(0.992,0.991,0.545), vec3f(0.996,0.999,0.741), vec3f(0.998,0.999,0.918)
            );
            const PLASMA : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.050,0.030,0.528), vec3f(0.209,0.027,0.675), vec3f(0.353,0.049,0.725), vec3f(0.488,0.079,0.708),
                vec3f(0.610,0.116,0.650), vec3f(0.710,0.164,0.563), vec3f(0.794,0.222,0.460), vec3f(0.861,0.292,0.357),
                vec3f(0.909,0.376,0.266), vec3f(0.941,0.474,0.199), vec3f(0.958,0.585,0.163), vec3f(0.961,0.709,0.167),
                vec3f(0.940,0.843,0.240), vec3f(0.883,0.945,0.375), vec3f(0.790,0.996,0.557), vec3f(0.637,0.996,0.714)
            );
            const JET : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.000,0.000,0.500), vec3f(0.000,0.000,1.000), vec3f(0.000,0.500,1.000), vec3f(0.000,1.000,1.000),
                vec3f(0.500,1.000,0.500), vec3f(1.000,1.000,0.000), vec3f(1.000,0.500,0.000), vec3f(1.000,0.000,0.000),
                vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000),
                vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000)
            );

            fn colormap(t: f32, id: u32) -> vec3f {
                if (id == 1u) { return sample_lut(t, VIRIDIS); }
                if (id == 2u) { return sample_lut(t, INFERNO); }
                if (id == 3u) { return sample_lut(t, MAGMA); }
                if (id == 4u) { return sample_lut(t, PLASMA); }
                if (id == 5u) { return sample_lut(t, JET); }
                return sample_lut(t, TURBO);
            }

            @fragment
            fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
                let base = textureSample(sourceTexture, sourceSampler, uv);
                let nd = textureSample(extraTexture, extraSampler, uv);
                let num = nd.r;
                let den2 = nd.g;
                let sim = num / sqrt(max(1e-12, den2));
                let similarity = clamp(max(0.0, sim), 0.0, 1.0);

                let s = clamp(similarity, 0.0, 1.0);
                let gateSmooth = max(1e-6, postParams.gateSmooth);
                let gate = smoothstep(postParams.threshold, min(1.0, postParams.threshold + gateSmooth), s);
                let hm = colormap(s, u32(postParams.colormap + 0.5));
                let alpha = clamp(gate * postParams.opacity * postParams.gain, 0.0, 1.0);
                let blendWithBase = postParams.blendWithBase > 0.5;
                let out_rgb = select(hm * alpha, mix(base.rgb, hm, alpha), blendWithBase);
                return vec4f(out_rgb, base.a);
            }
        `}setWeightOverlayParams(e){e.threshold!==void 0&&(this.weightOverlayThreshold=e.threshold),e.opacity!==void 0&&(this.weightOverlayOpacity=e.opacity),this.updateWeightOverlayUniform()}setWeightOverlayBlendWithBase(e){this.weightOverlayBlendWithBase=!!e,this.updateWeightOverlayUniform()}setWeightOverlayVisualOptions(e){if(e.gain!==void 0){const t=Number(e.gain);this.weightOverlayGain=Number.isFinite(t)?Math.max(0,t):this.weightOverlayGain}if(e.colormap!==void 0){const t=Number(e.colormap);this.weightOverlayColormap=Number.isFinite(t)?Math.max(0,Math.floor(t)):this.weightOverlayColormap}this.updateWeightOverlayUniform()}setWeightOverlayUseRelevancy(e,t=10){this.weightOverlayUseRelevancy=!!e,this.weightOverlayRelevancyTau=Number.isFinite(t)?Math.max(1e-6,t):10}setWeightOverlayRelevancyData(e,t,s=15){try{this.renderer.setWeightRelevancyData?.(e,t,!0,this.weightOverlayRelevancyTau,s)}catch{}}diagnoseDepth(){console.group("[Depth Diagnostic]"),console.log("Auto depth mode:",this.autoDepthMode),console.log("Scene depth RT exists:",!!this.sceneDepthRT),console.log("Scene depth texture exists:",!!this.sceneDepthTexture),this.sceneDepthRT&&(console.log("Scene depth RT size:",this.sceneDepthRT.width,"x",this.sceneDepthRT.height),console.log("Scene depth RT format:",this.sceneDepthRT.texture.format)),this.renderer&&(console.log("GaussianRenderer depth enabled:",this.renderer.useDepth),console.log("GaussianRenderer depth format:",this.renderer.depthFormat)),console.groupEnd()}disposeDepthResources(){this.sceneDepthRT&&(this.sceneDepthRT.dispose(),this.sceneDepthRT=null),this.sceneDepthTexture=null,globalThis.GS_DEPTH_DEBUG&&console.log("[Depth] Cleaned up depth resources"),this.gizmoOverlayRT&&(this.gizmoOverlayRT.dispose(),this.gizmoOverlayRT=null),this.overlayPipeline=null,this.overlayBindGroupLayout=null,this.overlaySampler=null,this.overlayRenderedThisFrame=!1,this.postProcessTarget&&(this.postProcessTarget.destroy(),this.postProcessTarget=null),this.postProcessTargetView=null,this.postProcessTargetWidth=0,this.postProcessTargetHeight=0,this.postProcessSampler=null,this.postProcessBindGroupLayout=null,this.postProcessPipeline=null,this.postProcessExtraTexture=null,this.postProcessExtraSampler=null,this.postProcessUsesExtraTexture=!1,this.postProcessUsesUniform=!1,this.postProcessUniformBuffer=null,this.weightOverlayEnabled=!1,this.weightOverlayApprox2Enabled=!1}ensurePostProcessTarget(e,t){if(!this.postProcessEnabled||!this.device)return null;const s=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));return this.postProcessTarget&&this.postProcessTargetWidth===s&&this.postProcessTargetHeight===r?this.postProcessTargetView:(this.postProcessTarget&&this.postProcessTarget.destroy(),this.postProcessTarget=this.device.createTexture({label:"GS postprocess target",size:{width:s,height:r},format:this.canvasFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.postProcessTargetView=this.postProcessTarget.createView(),this.postProcessTargetWidth=s,this.postProcessTargetHeight=r,this.postProcessTargetView)}ensurePostProcessUniformBuffer(){this.postProcessUniformBuffer||(this.postProcessUniformBuffer=this.device.createBuffer({label:"postprocess params",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}))}updateWeightOverlayUniform(){if(!this.weightOverlayEnabled&&!this.weightOverlayApprox2Enabled)return;this.ensurePostProcessUniformBuffer();const e=new Float32Array([this.weightOverlayThreshold,this.weightOverlayOpacity,this.weightOverlayBlendWithBase?1:0,this.weightOverlayGain,this.weightOverlayColormap,0,.02,0]);this.device.queue.writeBuffer(this.postProcessUniformBuffer,0,e.buffer,e.byteOffset,e.byteLength)}getWeightOverlayShader(){return`
            fn sample_lut(t: f32, lut: array<vec3f, 16>) -> vec3f {
                let x = clamp(t, 0.0, 1.0) * 15.0;
                let i0 = u32(floor(x));
                let i1 = min(15u, i0 + 1u);
                let f = fract(x);
                return mix(lut[i0], lut[i1], f);
            }

            const TURBO : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.189,0.071,0.232), vec3f(0.259,0.275,0.518), vec3f(0.241,0.488,0.706), vec3f(0.149,0.690,0.741),
                vec3f(0.240,0.824,0.580), vec3f(0.508,0.902,0.329), vec3f(0.792,0.888,0.165), vec3f(0.961,0.787,0.173),
                vec3f(0.992,0.620,0.208), vec3f(0.955,0.412,0.223), vec3f(0.843,0.231,0.233), vec3f(0.678,0.111,0.242),
                vec3f(0.497,0.047,0.256), vec3f(0.330,0.034,0.271), vec3f(0.208,0.049,0.291), vec3f(0.140,0.078,0.299)
            );
            const VIRIDIS : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.267,0.005,0.329), vec3f(0.283,0.141,0.458), vec3f(0.254,0.265,0.530), vec3f(0.207,0.372,0.553),
                vec3f(0.164,0.471,0.558), vec3f(0.128,0.567,0.551), vec3f(0.135,0.659,0.518), vec3f(0.267,0.749,0.441),
                vec3f(0.478,0.821,0.318), vec3f(0.678,0.863,0.189), vec3f(0.824,0.884,0.106), vec3f(0.914,0.896,0.119),
                vec3f(0.965,0.909,0.190), vec3f(0.988,0.933,0.308), vec3f(0.993,0.959,0.439), vec3f(0.993,0.984,0.603)
            );
            const INFERNO : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.002,0.005,0.013), vec3f(0.081,0.017,0.174), vec3f(0.206,0.016,0.318), vec3f(0.340,0.057,0.431),
                vec3f(0.472,0.112,0.428), vec3f(0.604,0.176,0.401), vec3f(0.734,0.254,0.352), vec3f(0.845,0.353,0.285),
                vec3f(0.930,0.466,0.220), vec3f(0.972,0.584,0.165), vec3f(0.988,0.708,0.153), vec3f(0.975,0.822,0.216),
                vec3f(0.936,0.914,0.330), vec3f(0.885,0.967,0.476), vec3f(0.839,0.993,0.646), vec3f(0.988,0.998,0.905)
            );
            const MAGMA : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.001,0.000,0.014), vec3f(0.088,0.028,0.156), vec3f(0.212,0.060,0.304), vec3f(0.341,0.091,0.427),
                vec3f(0.469,0.117,0.514), vec3f(0.595,0.157,0.558), vec3f(0.713,0.216,0.565), vec3f(0.815,0.298,0.540),
                vec3f(0.895,0.404,0.490), vec3f(0.948,0.533,0.427), vec3f(0.976,0.678,0.363), vec3f(0.983,0.827,0.320),
                vec3f(0.965,0.949,0.400), vec3f(0.992,0.991,0.545), vec3f(0.996,0.999,0.741), vec3f(0.998,0.999,0.918)
            );
            const PLASMA : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.050,0.030,0.528), vec3f(0.209,0.027,0.675), vec3f(0.353,0.049,0.725), vec3f(0.488,0.079,0.708),
                vec3f(0.610,0.116,0.650), vec3f(0.710,0.164,0.563), vec3f(0.794,0.222,0.460), vec3f(0.861,0.292,0.357),
                vec3f(0.909,0.376,0.266), vec3f(0.941,0.474,0.199), vec3f(0.958,0.585,0.163), vec3f(0.961,0.709,0.167),
                vec3f(0.940,0.843,0.240), vec3f(0.883,0.945,0.375), vec3f(0.790,0.996,0.557), vec3f(0.637,0.996,0.714)
            );
            const JET : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.000,0.000,0.500), vec3f(0.000,0.000,1.000), vec3f(0.000,0.500,1.000), vec3f(0.000,1.000,1.000),
                vec3f(0.500,1.000,0.500), vec3f(1.000,1.000,0.000), vec3f(1.000,0.500,0.000), vec3f(1.000,0.000,0.000),
                vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000),
                vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000)
            );

            fn colormap(t: f32, id: u32) -> vec3f {
                if (id == 1u) { return sample_lut(t, VIRIDIS); }
                if (id == 2u) { return sample_lut(t, INFERNO); }
                if (id == 3u) { return sample_lut(t, MAGMA); }
                if (id == 4u) { return sample_lut(t, PLASMA); }
                if (id == 5u) { return sample_lut(t, JET); }
                return sample_lut(t, TURBO);
            }

            @fragment
            fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
                let base = textureSample(sourceTexture, sourceSampler, uv);
                // The extraTexture stores per-pixel language similarity in [0, 1].
                let similarity = textureSample(extraTexture, extraSampler, uv).r;
                let s = clamp(similarity, 0.0, 1.0);
                let gateSmooth = max(1e-6, postParams.gateSmooth);
                let gate = smoothstep(postParams.threshold, min(1.0, postParams.threshold + gateSmooth), s);
                let hm = colormap(s, u32(postParams.colormap + 0.5));
                let alpha = clamp(gate * postParams.opacity * postParams.gain, 0.0, 1.0);
                let blendWithBase = postParams.blendWithBase > 0.5;
                let out_rgb = select(hm * alpha, mix(base.rgb, hm, alpha), blendWithBase);
                return vec4<f32>(out_rgb, base.a);
            }
        `}async computeQueryWeightsFromUrls(e,t,s){const[r,n]=await Promise.all([fetch(e).then(async a=>{if(!a.ok)throw new Error(`Failed to fetch codebook: ${a.status} ${a.statusText}`);return a.arrayBuffer()}),fetch(t).then(async a=>{if(!a.ok)throw new Error(`Failed to fetch query list: ${a.status} ${a.statusText}`);return a.json()})]),i=new Float32Array(r),o=this.extractQueryVector(n,s);return this.computeQueryWeights(i,o)}extractQueryVector(e,t){const s=e?.queries;if(!Array.isArray(s)||s.length===0)throw new Error("Query list JSON has no queries");const r=t?s.find(n=>n?.name===t):s[0];if(!r||!Array.isArray(r.vector))throw new Error("Query vector not found in query list JSON");return new Float32Array(r.vector)}computeQueryWeights(e,t){if(e.length!==64*512)throw new Error(`Codebook length mismatch: expected ${64*512}, got ${e.length}`);if(t.length!==512)throw new Error(`Query vector length mismatch: expected 512, got ${t.length}`);const n=new Float32Array(t);{let o=0;for(let l=0;l<n.length;l++)o+=n[l]*n[l];const a=o>1e-12?1/Math.sqrt(o):1;for(let l=0;l<n.length;l++)n[l]*=a}const i=new Float32Array(64);for(let o=0;o<64;o++){let a=0;const l=o*512;for(let c=0;c<512;c++)a+=e[l+c]*n[c];i[o]=a}return i}computeGramMatrix(e){if(e.length!==64*512)throw new Error(`Codebook length mismatch: expected ${64*512}, got ${e.length}`);const r=new Float32Array(64*64);for(let n=0;n<64;n++){const i=n*512;for(let o=n;o<64;o++){const a=o*512;let l=0;for(let c=0;c<512;c++)l+=e[i+c]*e[a+c];r[n*64+o]=l,r[o*64+n]=l}}return r}ensurePostProcessPipeline(e){if(this.postProcessPipeline&&this.postProcessBindGroupLayout)return this.postProcessPipeline;const t=[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}];this.postProcessUsesDepth&&t.push({binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}}),this.postProcessUsesExtraTexture&&(t.push({binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d"}}),t.push({binding:4,visibility:GPUShaderStage.FRAGMENT,sampler:{}})),this.postProcessUsesUniform&&t.push({binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}),this.postProcessBindGroupLayout=e.createBindGroupLayout({entries:t});const s=`
            @group(0) @binding(0) var sourceTexture: texture_2d<f32>;
            @group(0) @binding(1) var sourceSampler: sampler;
            ${this.postProcessUsesDepth?"@group(0) @binding(2) var sourceDepth: texture_depth_2d;":""}
            ${this.postProcessUsesExtraTexture?`@group(0) @binding(3) var extraTexture: texture_2d<f32>;
@group(0) @binding(4) var extraSampler: sampler;`:""}
            ${this.postProcessUsesUniform?`struct PostProcessParams { threshold: f32, opacity: f32, blendWithBase: f32, gain: f32, colormap: f32, gamma: f32, gateSmooth: f32, _pad0: f32 };
@group(0) @binding(5) var<uniform> postParams: PostProcessParams;`:""}

            ${this.postProcessFragmentWGSL??`
            @fragment
            fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
                return textureSample(sourceTexture, sourceSampler, uv);
            }
            `}
        `,r=e.createShaderModule({code:`
                struct VertexOutput {
                    @builtin(position) position : vec4f,
                    @location(0) uv : vec2f,
                };

                @vertex
                fn vs_main(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                    var positions = array<vec2f, 6>(
                        vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
                        vec2f(-1.0, 1.0),  vec2f(1.0, -1.0), vec2f(1.0, 1.0)
                    );
                    var uvs = array<vec2f, 6>(
                        vec2f(0.0, 1.0), vec2f(1.0, 1.0), vec2f(0.0, 0.0),
                        vec2f(0.0, 0.0), vec2f(1.0, 1.0), vec2f(1.0, 0.0)
                    );

                    var output : VertexOutput;
                    output.position = vec4f(positions[vertexIndex], 0.0, 1.0);
                    output.uv = uvs[vertexIndex];
                    return output;
                }

                ${s}
            `});return this.postProcessPipeline=e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[this.postProcessBindGroupLayout]}),vertex:{module:r,entryPoint:"vs_main"},fragment:{module:r,entryPoint:"fs_main",targets:[{format:this.canvasFormat}]},primitive:{topology:"triangle-list"}}),this.postProcessPipeline}runPostProcessPass(e,t,s,r,n){if(!this.postProcessEnabled)return;if(this.postProcessUsesDepth&&!n){console.warn("[PostProcess] Depth requested but not available, skipping pass.");return}if(this.postProcessUsesExtraTexture&&!this.postProcessExtraTexture){console.warn("[PostProcess] Extra texture requested but not available, skipping pass.");return}this.postProcessUsesUniform&&!this.postProcessUniformBuffer&&this.ensurePostProcessUniformBuffer(),this.postProcessSampler||(this.postProcessSampler=e.createSampler({magFilter:"linear",minFilter:"linear"}));const i=this.ensurePostProcessPipeline(e),o=[{binding:0,resource:s.createView()},{binding:1,resource:this.postProcessSampler}];this.postProcessUsesDepth&&n&&o.push({binding:2,resource:n}),this.postProcessUsesExtraTexture&&this.postProcessExtraTexture&&(this.postProcessExtraSampler||(this.postProcessExtraSampler=e.createSampler({magFilter:"linear",minFilter:"linear"})),o.push({binding:3,resource:this.postProcessExtraTexture.createView()}),o.push({binding:4,resource:this.postProcessExtraSampler})),this.postProcessUsesUniform&&this.postProcessUniformBuffer&&o.push({binding:5,resource:{buffer:this.postProcessUniformBuffer}});const a=e.createBindGroup({layout:this.postProcessBindGroupLayout,entries:o}),l=t.beginRenderPass({colorAttachments:[{view:r,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});l.setPipeline(i),l.setBindGroup(0,a),l.draw(6,1,0,0),l.end()}getViewport(){const e=new Te;this.threeRenderer.getDrawingBufferSize?.(e);const t=e.x||(this.threeRenderer.domElement?.width??0)||this.threeRenderer.getSize(new Te).x,s=e.y||(this.threeRenderer.domElement?.height??0)||this.threeRenderer.getSize(new Te).y;return[t,s]}convertCamera(e,t){const s=this.getViewport(),r=new fs;return r.update(e,s),r}async updateDynamicModels(e,t){const s=new fs,r=this.getViewport();s.update(e,r);const n=s.viewMatrix(),i=s.projMatrix();for(const o of this.gaussianModels)try{await o.update(n,t,i)}catch(a){console.warn("Failed to update model:",a)}}setModelGaussianScale(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setGaussianScale(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Gaussian scale set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelGaussianScale(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getGaussianScale():1}getModelVisible(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getModelVisible():!1}setModelMaxShDeg(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setMaxShDeg(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Max SH degree set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelMaxShDeg(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getMaxShDeg():0}setModelKernelSize(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setKernelSize(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Kernel size set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelKernelSize(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getKernelSize():0}setModelOpacityScale(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setOpacityScale(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Opacity scale set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelOpacityScale(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getOpacityScale():1}setModelCutoffScale(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setCutoffScale(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Cutoff scale set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelCutoffScale(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getCutoffScale():1}setModelTimeScale(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setTimeScale(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Time scale set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelTimeOffset(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setTimeOffset(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Time offset set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelAnimationIsLoop(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setAnimationIsLoop(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation is loop set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelTimeUpdateMode(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setTimeUpdateMode(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Time update mode set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelRenderMode(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setRenderMode(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Render mode set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelRenderMode(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getRenderMode():0}startModelAnimation(e,t=1){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].startAnimation(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation started at ${t}x speed`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}pauseModelAnimation(e){const t=parseInt(e.replace("model_",""));t>=0&&t<this.gaussianModels.length?(this.gaussianModels[t].pauseAnimation(),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation paused`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}resumeModelAnimation(e){const t=parseInt(e.replace("model_",""));t>=0&&t<this.gaussianModels.length?(this.gaussianModels[t].resumeAnimation(),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation resumed`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}stopModelAnimation(e){const t=parseInt(e.replace("model_",""));t>=0&&t<this.gaussianModels.length?(this.gaussianModels[t].stopAnimation(),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation stopped`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelAnimationTime(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setAnimationTime(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation time set to: ${t.toFixed(3)}s`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelAnimationSpeed(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setAnimationSpeed(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation speed set to: ${t}x`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelParams(){const e={models:{}};return this.gaussianModels.forEach((t,s)=>{const r=`model_${s}`;e.models[r]={id:r,name:t.name,visible:t.getModelVisible(),gaussianScale:t.getGaussianScale(),maxShDeg:t.getMaxShDeg(),kernelSize:t.getKernelSize(),opacityScale:t.getOpacityScale(),cutoffScale:t.getCutoffScale(),timeScale:t.getTimeScale(),timeOffset:t.getTimeOffset(),timeUpdateMode:t.getTimeUpdateMode(),animationSpeed:t.getAnimationSpeed(),isAnimationRunning:t.isAnimationRunning(),isAnimationPaused:t.isAnimationPaused()}}),e}getGaussianModels(){return[...this.gaussianModels]}appendGaussianModel(e){this.gaussianModels.push(e)}removeModelById(e){const t=parseInt(e.replace("model_",""));if(isNaN(t)||t<0||t>=this.gaussianModels.length)return console.warn(`[GaussianThreeJSRenderer] removeModelById: invalid id ${e}`),!1;const s=this.gaussianModels[t];try{this.threeScene.remove(s),s.dispose?.()}catch(r){console.warn("[GaussianThreeJSRenderer] Error removing model from scene:",r)}return this.gaussianModels.splice(t,1),console.log(`[GaussianThreeJSRenderer] Removed ${e} (${s.name})`),!0}setModelVisible(e,t){const s=parseInt(e.replace("model_",""));s>=0&&s<this.gaussianModels.length?(this.gaussianModels[s].setModelVisible(t),console.log(`[GaussianThreeJSRenderer] Model ${e} visible: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}resetParameters(){this.gaussianModels.forEach(e=>{e.setGaussianScale(1),e.setMaxShDeg(3),e.setKernelSize(.1),e.setOpacityScale(1),e.setCutoffScale(1),e.setTimeScale(1),e.setTimeOffset(0),e.setTimeUpdateMode("fixed_delta")}),console.log("[GaussianThreeJSRenderer] All parameters reset to defaults")}setGlobalTimeScale(e){this.gaussianModels.forEach(t=>t.setTimeScale(e)),console.log(`[GaussianThreeJSRenderer] Global time scale set: ${e}`)}setGlobalTimeOffset(e){this.gaussianModels.forEach(t=>t.setTimeOffset(e)),console.log(`[GaussianThreeJSRenderer] Global time offset set: ${e}`)}setGlobalTimeUpdateMode(e){this.gaussianModels.forEach(t=>t.setTimeUpdateMode(e)),console.log(`[GaussianThreeJSRenderer] Global time update mode: ${e}`)}startAllAnimations(e=1){this.gaussianModels.forEach(t=>t.startAnimation(e)),console.log(`[GaussianThreeJSRenderer] All animations started at ${e}x`)}pauseAllAnimations(){this.gaussianModels.forEach(e=>e.pauseAnimation()),console.log("[GaussianThreeJSRenderer] All animations paused")}resumeAllAnimations(){this.gaussianModels.forEach(e=>e.resumeAnimation()),console.log("[GaussianThreeJSRenderer] All animations resumed")}stopAllAnimations(){this.gaussianModels.forEach(e=>e.stopAnimation()),console.log("[GaussianThreeJSRenderer] All animations stopped")}setAllAnimationTime(e){this.gaussianModels.forEach(t=>t.setAnimationTime(e)),console.log(`[GaussianThreeJSRenderer] Global animation time set: ${e.toFixed(3)}s`)}setAllAnimationSpeed(e){this.gaussianModels.forEach(t=>t.setAnimationSpeed(e)),console.log(`[GaussianThreeJSRenderer] Global animation speed set: ${e}x`)}}class ct extends ms{mEntry;autoSyncEnabled=!0;_overrideLocalAabb=null;_cachedWorldAabb=null;_worldAabbDirty=!0;_gaussianScale=1;constructor(e){super(),this.mEntry=e,this.name=e.name,this.setupAutoSync()}setupAutoSync(){let e=!1,t=Date.now();const s=()=>{this.autoSyncEnabled&&!e&&(e=!0,requestAnimationFrame(()=>{this.syncTransformToGPU(),this._worldAabbDirty=!0,e=!1}))},r=this.updateMatrix.bind(this);this.updateMatrix=()=>{r();const n=Date.now();n-t>8&&(t=n,s())},this.matrixAutoUpdate=!0,this.interceptTransformMethods(s),console.log(`✅ Auto-sync setup for model: ${this.name}`)}interceptTransformMethods(e){const t=this.position.set.bind(this.position),s=this.scale.set.bind(this.scale),r=this.rotation.set.bind(this.rotation);this.position.set=(n,i,o)=>{const a=t(n,i,o);return e(),a},this.scale.set=(n,i,o)=>{const a=s(n,i,o);return e(),a},this.rotation.set=(n,i,o,a)=>{const l=r(n,i,o,a);return e(),l}}getModelId(){return this.mEntry.id}get modelName(){return this.mEntry.name}get pointCount(){return this.mEntry.pointCount}get isDynamic(){return this.mEntry.isDynamic}get modelType(){return this.mEntry.modelType}getEntry(){return this.mEntry}getPointCloud(){if(!this.mEntry?.pointCloud)throw new Error("PointCloud is not initialized");return this.mEntry.pointCloud}isGaussianModel(){const e=this.mEntry.pointCloud;return e instanceof Ae||e instanceof Ze}getTransformMatrix(){const e=new ke;e.compose(this.position,this.quaternion,this.scale);const t=new ke().makeScale(1,-1,-1);return t.premultiply(e),new Float32Array(t.elements)}syncTransformToGPU(e=0){if(!this.mEntry?.pointCloud)return;const t=this.getTransformMatrix();this.mEntry.pointCloud.setTransform(t),this.isGaussianModel()&&this.mEntry.pointCloud.updateModelParamsBuffer(t,e),globalThis.GS_DEBUG_FLAG&&console.log(`[GaussianModel] Synced transform for ${this.name}:`,{position:[this.position.x.toFixed(3),this.position.y.toFixed(3),this.position.z.toFixed(3)],rotation:[this.rotation.x.toFixed(3),this.rotation.y.toFixed(3),this.rotation.z.toFixed(3)],scale:[this.scale.x.toFixed(3),this.scale.y.toFixed(3),this.scale.z.toFixed(3)]})}setOverrideAABB(e){if(e===null)this._overrideLocalAabb=null;else if(e instanceof Je)this._overrideLocalAabb=e;else{const t=_e(e.min[0],e.min[1],e.min[2]),s=_e(e.max[0],e.max[1],e.max[2]);this._overrideLocalAabb=new Je(t,s)}this._worldAabbDirty=!0}getLocalAABB(){if(this._overrideLocalAabb)return this._overrideLocalAabb;const e=this.mEntry?.pointCloud;return e&&e.bbox instanceof Je?e.bbox:null}getWorldAABB(){const e=this.getLocalAABB();if(!e)return null;if(this._cachedWorldAabb&&!this._worldAabbDirty)return this._cachedWorldAabb;const t=e.min,s=e.max,r=[[t[0],t[1],t[2]],[t[0],t[1],s[2]],[t[0],s[1],t[2]],[t[0],s[1],s[2]],[s[0],t[1],t[2]],[s[0],t[1],s[2]],[s[0],s[1],t[2]],[s[0],s[1],s[2]]],n=new ke;n.compose(this.position,this.quaternion,this.scale);const i=new B,o=_e(1/0,1/0,1/0),a=_e(-1/0,-1/0,-1/0);for(const l of r)i.set(l[0],l[1],l[2]).applyMatrix4(n),i.x<o[0]&&(o[0]=i.x),i.y<o[1]&&(o[1]=i.y),i.z<o[2]&&(o[2]=i.z),i.x>a[0]&&(a[0]=i.x),i.y>a[1]&&(a[1]=i.y),i.z>a[2]&&(a[2]=i.z);return this._cachedWorldAabb=new Je(o,a),this._worldAabbDirty=!1,this._cachedWorldAabb}async update(e,t,s){if(!(this.mEntry?.pointCloud instanceof Ze))return;const r=this.getTransformMatrix();await this.mEntry.pointCloud.update(e,r,t||0,s)}setModelVisible(e){this.visible=e,this.mEntry.visible=e}getModelVisible(){return this.mEntry.visible&&this.visible}isVisible(e){return this.getModelVisible()}setAutoSync(e){this.autoSyncEnabled=e,console.log(`Auto-sync ${e?"enabled":"disabled"} for model: ${this.modelName}`)}getAutoSync(){return this.autoSyncEnabled}forceSyncToGPU(){this.syncTransformToGPU()}dispose(){this.autoSyncEnabled=!1,console.log(`🧹 GaussianModel disposed: ${this.modelName}`)}setTransform(e,t=0){console.warn("GaussianModel.setTransform() is deprecated. Modify position/rotation/scale instead."),this.mEntry.pointCloud.setTransform(e),this.isGaussianModel()&&this.mEntry.pointCloud.updateModelParamsBuffer(e,t)}setGaussianScale(e){this._gaussianScale=e,this.isGaussianModel()&&(this.mEntry.pointCloud.setGaussianScaling(e),console.log(`[GaussianModel] ${this.name} Gaussian scale set to: ${e}`))}getGaussianScale(){return this.isGaussianModel()?this.mEntry.pointCloud.getGaussianScaling():this._gaussianScale}setMaxShDeg(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setMaxShDeg(e),console.log(`[GaussianModel] ${this.name} Max SH degree set to: ${e}`))}getMaxShDeg(){return this.isGaussianModel()?this.mEntry.pointCloud.getMaxShDeg():0}setKernelSize(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setKernelSize(e),console.log(`[GaussianModel] ${this.name} Kernel size set to: ${e}`))}getKernelSize(){return this.isGaussianModel()?this.mEntry.pointCloud.getKernelSize():0}setOpacityScale(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setOpacityScale(e),console.log(`[GaussianModel] ${this.name} Opacity scale set to: ${e}`))}getOpacityScale(){return this.isGaussianModel()?this.mEntry.pointCloud.getOpacityScale():1}setCutoffScale(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setCutoffScale(e),console.log(`[GaussianModel] ${this.name} Cutoff scale set to: ${e}`))}getCutoffScale(){return this.isGaussianModel()?this.mEntry.pointCloud.getCutoffScale():1}setTimeScale(e){this.mEntry.pointCloud&&"setTimeScale"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setTimeScale(e),console.log(`[GaussianModel] ${this.name} Time scale set to: ${e}`)):console.warn(`[GaussianModel] ${this.name} does not support time scale (not a dynamic model)`)}getTimeScale(){return this.mEntry.pointCloud&&"getTimeScale"in this.mEntry.pointCloud?this.mEntry.pointCloud.getTimeScale():1}setTimeOffset(e){this.mEntry.pointCloud&&"setTimeOffset"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setTimeOffset(e),console.log(`[GaussianModel] ${this.name} Time offset set to: ${e}`)):console.warn(`[GaussianModel] ${this.name} does not support time offset (not a dynamic model)`)}setAnimationIsLoop(e){this.mEntry.pointCloud&&"setAnimationIsLoop"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setAnimationIsLoop(e),console.log(`[GaussianModel] ${this.name} Is Loop set to: ${e}`)):console.warn(`[GaussianModel] ${this.name} does not support animation is loop (not a dynamic model)`)}getTimeOffset(){return this.mEntry.pointCloud&&"getTimeOffset"in this.mEntry.pointCloud?this.mEntry.pointCloud.getTimeOffset():0}setTimeUpdateMode(e){this.mEntry.pointCloud&&"setTimeUpdateMode"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setTimeUpdateMode(e),console.log(`[GaussianModel] ${this.name} Time update mode set to: ${e}`)):console.warn(`[GaussianModel] ${this.name} does not support time update mode (not a dynamic model)`)}setRenderMode(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setRenderMode(e),console.log(`[GaussianModel] ${this.name} Render mode set to: ${e}`))}getRenderMode(){if(this.isGaussianModel()){const e=this.mEntry.pointCloud;if(typeof e.getRenderMode=="function")return e.getRenderMode()}return 0}getTimeUpdateMode(){return this.mEntry.pointCloud&&"getTimeUpdateMode"in this.mEntry.pointCloud?this.mEntry.pointCloud.getTimeUpdateMode():"fixed_delta"}startAnimation(e=1){this.mEntry.pointCloud&&"startAnimation"in this.mEntry.pointCloud?(this.mEntry.pointCloud.startAnimation(e),console.log(`[GaussianModel] ${this.name} Animation started at ${e}x speed`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}pauseAnimation(){this.mEntry.pointCloud&&"pauseAnimation"in this.mEntry.pointCloud?(this.mEntry.pointCloud.pauseAnimation(),console.log(`[GaussianModel] ${this.name} Animation paused`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}resumeAnimation(){this.mEntry.pointCloud&&"resumeAnimation"in this.mEntry.pointCloud?(this.mEntry.pointCloud.resumeAnimation(),console.log(`[GaussianModel] ${this.name} Animation resumed`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}stopAnimation(){this.mEntry.pointCloud&&"stopAnimation"in this.mEntry.pointCloud?(this.mEntry.pointCloud.stopAnimation(),console.log(`[GaussianModel] ${this.name} Animation stopped`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}setAnimationTime(e){this.mEntry.pointCloud&&"setAnimationTime"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setAnimationTime(e),console.log(`[GaussianModel] ${this.name} Animation time set to ${e.toFixed(3)}s`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}setAnimationSpeed(e){this.mEntry.pointCloud&&"setAnimationSpeed"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setAnimationSpeed(e),console.log(`[GaussianModel] ${this.name} Animation speed set to ${e}x`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}getAnimationSpeed(){return this.mEntry.pointCloud&&"getAnimationSpeed"in this.mEntry.pointCloud?this.mEntry.pointCloud.getAnimationSpeed():1}isAnimationRunning(){return this.mEntry.pointCloud&&"isAnimationRunning"in this.mEntry.pointCloud?this.mEntry.pointCloud.isAnimationRunning:!1}isAnimationPaused(){return this.mEntry.pointCloud&&"isAnimationPaused"in this.mEntry.pointCloud?this.mEntry.pointCloud.isAnimationPaused:!1}}class Ie{_gaussianBuffer;_shCoefsBuffer;_extraPcaBuffer;_weightBuffer;_numPoints;_shDegree;_bbox;center;up;kernelSize;mipSplatting;backgroundColor;constructor(e){this._gaussianBuffer=e.gaussianBuffer,this._shCoefsBuffer=e.shCoefsBuffer,this._extraPcaBuffer=e.extraPcaBuffer,this._weightBuffer=e.weightBuffer,this._numPoints=e.numPoints,this._shDegree=e.shDegree,this._bbox=e.bbox,this.center=e.center,this.up=e.up,this.kernelSize=e.kernelSize,this.mipSplatting=e.mipSplatting,this.backgroundColor=e.backgroundColor}gaussianBuffer(){return this._gaussianBuffer}shCoefsBuffer(){return this._shCoefsBuffer}extraPcaBuffer(){return this._extraPcaBuffer?this._extraPcaBuffer:new ArrayBuffer(0)}weightBuffer(){return this._weightBuffer?this._weightBuffer:new ArrayBuffer(0)}numPoints(){return this._numPoints}shDegree(){return this._shDegree}bbox(){return this._bbox}}class Kr{async loadFile(e,t){const s=await e.arrayBuffer();return this.loadBuffer(s,t)}async loadUrl(e,t){const s=await fetch(e,{signal:t?.signal});if(!s.ok)throw new Error(`Failed to fetch PLY file: ${s.status} ${s.statusText}`);const r=await s.arrayBuffer();return this.loadBuffer(r,t)}async loadBuffer(e,t){const s=(o,a,l)=>{t?.onProgress?.({stage:o,progress:a,message:l})};s("Parsing PLY header",.1);const r=this.parseHeader(e);s("Parsing vertex data",.2);const n=this.parseVertices(e,r);s("Processing Gaussian data",.4);const i=this.processGaussianData(r,n,s);return s("Complete",1),i}canHandle(e,t){return e.toLowerCase().endsWith(".ply")||t==="application/octet-stream"}getSupportedExtensions(){return[".ply"]}processGaussianData(e,t,s){const o=(3+t.props.filter(U=>U.startsWith("f_rest_")).length)/3,a=Br(o)??0,l=this.getFieldIndices(t.props);this.validateRequiredFields(l);const c=e.vertices,d=10,u=new Uint16Array(c*d),p=24,h=new Uint32Array(c*p),y=l.iExtraPcaR>=0&&l.iExtraPcaG>=0&&l.iExtraPcaB>=0?new Float32Array(c*4):null,g=l.weightIndices,m=g.some(U=>U>=0),x=g.every(U=>U>=0);if(m&&!x)throw new Error("PLY has partial weight properties (expected weight_0..weight_63)");const b=x?new Float32Array(c*64):null,P=[],T=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],S=[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],{copySH:$,wordsPerPoint:D}=Er({props:t.props,iDC0:l.iDC0,iDC1:l.iDC1,iDC2:l.iDC2,k:3,shU32:h});s?.("Processing Gaussians",.5);for(let U=0;U<c;U++){U%1e4===0&&s?.("Processing Gaussians",.5+.3*(U/c),`${U}/${c} points`);const E=t.rows(U),R=this.processGaussian(E,l,U,d,u);if(P.push([R.x,R.y,R.z]),$(U*D,E,!1),y){const Y=U*4;y[Y+0]=E[l.iExtraPcaR],y[Y+1]=E[l.iExtraPcaG],y[Y+2]=E[l.iExtraPcaB],y[Y+3]=0}if(b){const Y=U*64;for(let Z=0;Z<64;Z++)b[Y+Z]=E[g[Z]]}R.x<T[0]&&(T[0]=R.x),R.y<T[1]&&(T[1]=R.y),R.z<T[2]&&(T[2]=R.z),R.x>S[0]&&(S[0]=R.x),R.y>S[1]&&(S[1]=R.y),R.z>S[2]&&(S[2]=R.z)}s?.("Computing scene geometry",.8);const{centroid:X,normal:I}=this.computeSceneGeometry(P),q=[X[0],X[1],X[2]],O=I?[I[0],I[1],I[2]]:[1,0,0];return new Ie({gaussianBuffer:u.buffer,shCoefsBuffer:h.buffer,extraPcaBuffer:y?y.buffer:void 0,weightBuffer:b?b.buffer:void 0,numPoints:c,shDegree:a,bbox:{min:T,max:S},center:q,up:O,mipSplatting:void 0,kernelSize:void 0,backgroundColor:void 0})}getFieldIndices(e){const t=new Array(64).fill(-1);for(let s=0;s<64;s++)t[s]=e.indexOf(`weight_${s}`);return{ix:e.indexOf("x"),iy:e.indexOf("y"),iz:e.indexOf("z"),iOpacity:e.indexOf("opacity"),iS0:e.indexOf("scale_0"),iS1:e.indexOf("scale_1"),iS2:e.indexOf("scale_2"),iR0:e.indexOf("rot_0"),iR1:e.indexOf("rot_1"),iR2:e.indexOf("rot_2"),iR3:e.indexOf("rot_3"),iDC0:e.indexOf("f_dc_0"),iDC1:e.indexOf("f_dc_1"),iDC2:e.indexOf("f_dc_2"),iExtraPcaR:e.indexOf("extra_pca_r"),iExtraPcaG:e.indexOf("extra_pca_g"),iExtraPcaB:e.indexOf("extra_pca_b"),weightIndices:t}}validateRequiredFields(e){const t=["ix","iy","iz","iOpacity","iS0","iS1","iS2","iR0","iR1","iR2","iR3","iDC0","iDC1","iDC2"];for(const s of t)if(e[s]<0)throw new Error(`PLY missing required field: ${s.slice(1)}`)}processGaussian(e,t,s,r,n){const i=e[t.ix],o=e[t.iy],a=e[t.iz],l=Ss(e[t.iOpacity]),c=[Math.exp(e[t.iS0]),Math.exp(e[t.iS1]),Math.exp(e[t.iS2])],d=bs(e[t.iR1],e[t.iR2],e[t.iR3],e[t.iR0]);$e(d,d);const[u,p,h,v,y,g]=Ne(d,new Float32Array(c)),m=s*r;return n[m+0]=w(i),n[m+1]=w(o),n[m+2]=w(a),n[m+3]=w(l),n[m+4]=w(u),n[m+5]=w(p),n[m+6]=w(h),n[m+7]=w(v),n[m+8]=w(y),n[m+9]=w(g),{x:i,y:o,z:a}}computeSceneGeometry(e){return $t(e)}parseHeader(e){const t=new TextDecoder().decode(e.slice(0,Math.min(1048576,e.byteLength))),s=t.split(/\r?\n/);if(!/^ply\b/.test(s[0]))throw new Error("Not a PLY file");let r=null,n=0;const i=[];let o=0,a=!1;for(let l=1;l<s.length;l++){const c=s[l];if(c==="end_header"){let d=t.indexOf("end_header");if(d<0)throw new Error("Malformed PLY: missing end_header");const u=t.indexOf(`
`,d+10);o=u>=0?u+1:d+10+1;break}if(c.startsWith("format ")){const d=c.split(/\s+/)[1];if(d==="ascii"||d==="binary_little_endian"||d==="binary_big_endian")r=d;else throw new Error(`Unsupported PLY format: ${d}`)}else if(c.startsWith("element "))a=c.startsWith("element vertex "),a&&(n=parseInt(c.split(/\s+/)[2],10));else if(a&&c.startsWith("property ")){const d=c.trim().split(/\s+/);if(d[1]==="list")throw new Error("Unexpected list property in vertex");const u=d[d.length-1];i.push(u)}}if(!r)throw new Error("PLY header missing format");if(n<=0)throw new Error("PLY has no vertices element");return{format:r,vertices:n,props:i,headerByteLength:o}}parseVertices(e,t){const s=t.props.slice();return t.format==="ascii"?this.parseASCIIVertices(e,t,s):this.parseBinaryVertices(e,t,s)}parseASCIIVertices(e,t,s){const n=new TextDecoder().decode(e.slice(t.headerByteLength)).split(/\r?\n/).filter(i=>i.trim().length>0);return{props:s,rows:i=>{const o=n[i].trim().split(/\s+/);if(o.length<s.length)throw new Error("Malformed PLY ASCII row");return o.map(parseFloat)}}}parseBinaryVertices(e,t,s){const r=t.format==="binary_little_endian",n=new DataView(e,t.headerByteLength),i=s.length*4;return{props:s,rows:o=>{const a=o*i,l=new Array(s.length);for(let c=0;c<s.length;c++)l[c]=n.getFloat32(a+c*4,r);return l}}}}class Zr{async loadFile(e,t){return this.loadBuffer(await e.arrayBuffer(),t)}async loadUrl(e,t){const s=await fetch(e,{signal:t?.signal});if(!s.ok)throw new Error(`Failed to fetch SPZ: ${s.statusText}`);return this.loadBuffer(await s.arrayBuffer(),t)}async loadBuffer(e,t){const s=(j,L,G)=>{t?.onProgress?.({stage:j,progress:L,message:G})};s("Decompressing SPZ",.1);const r=new Uint8Array(e),i=new Blob([r]).stream().pipeThrough(new DecompressionStream("gzip")),o=await new Response(i).arrayBuffer();s("Parsing Data",.2);const a=new DataView(o),l=new Uint8Array(o);let c=0;const d=a.getUint32(c,!0);if(c+=4,d!==1347635022)throw new Error(`Invalid SPZ magic: 0x${d.toString(16)}`);const u=a.getUint32(c,!0);c+=4;const p=a.getUint32(c,!0);c+=4;const h=a.getUint8(c++),v=a.getUint8(c++);if(a.getUint8(c++),c++,u<1||u>3)throw new Error(`Unsupported SPZ version: ${u}`);const y=c;u===1?c+=p*6:c+=p*9;const g=c;c+=p;const m=c;c+=p*3;const x=c;c+=p*3;const b=c;u===3?c+=p*4:c+=p*3;const P=c,S={1:3,2:8,3:15}[h]||0,$=10,D=new Uint16Array(p*$),X=24,I=new Uint32Array(p*X),q=[];let O=1/0,U=1/0,E=1/0,R=-1/0,Y=-1/0,Z=-1/0;const ae=1<<v,ne=We(),me=Ue();s("Processing Points",.3);for(let j=0;j<p;j++){j%1e4===0&&j%5e4===0&&s("Processing Points",.3+.6*(j/p));let L,G,_;if(u===1)L=this.readHalfFloat(a,y+j*6+0),G=this.readHalfFloat(a,y+j*6+2),_=this.readHalfFloat(a,y+j*6+4);else{const N=y+j*9,A=l[N]|l[N+1]<<8|l[N+2]<<16,ee=l[N+3]|l[N+4]<<8|l[N+5]<<16,Q=l[N+6]|l[N+7]<<8|l[N+8]<<16;L=(A<<8>>8)/ae,G=(ee<<8>>8)/ae,_=(Q<<8>>8)/ae}const C=l[g+j]/255,F=m+j*3,M=(l[F]/255-.5)/.15,W=(l[F+1]/255-.5)/.15,H=(l[F+2]/255-.5)/.15,z=x+j*3,J=Math.exp(l[z]/16-10),re=Math.exp(l[z+1]/16-10),ie=Math.exp(l[z+2]/16-10);if(u===3){const N=b+j*4,A=l[N]|l[N+1]<<8|l[N+2]<<16|l[N+3]<<24,ee=.70710678,Q=511,te=A>>>30;let se=A;const ue=[0,0,0,0];let be=0;for(let V=3;V>=0;V--)if(V!==te){const we=se&Q,Se=se>>>9&1;se>>>=10;let ge=ee*(we/511);Se&&(ge=-ge),ue[V]=ge,be+=ge*ge}ue[te]=Math.sqrt(Math.max(1-be,0)),ze(ne,ue[0],ue[1],ue[2],ue[3])}else{const N=b+j*3,A=l[N]/127.5-1,ee=l[N+1]/127.5-1,Q=l[N+2]/127.5-1,te=Math.sqrt(Math.max(0,1-A*A-ee*ee-Q*Q));ze(ne,A,ee,Q,te)}$e(ne,ne),je(me,J,re,ie);const[K,k,he,pe,Pe,Ge]=Ne(ne,me),ce=j*$;D[ce+0]=w(L),D[ce+1]=w(G),D[ce+2]=w(_),D[ce+3]=w(C),D[ce+4]=w(K),D[ce+5]=w(k),D[ce+6]=w(he),D[ce+7]=w(pe),D[ce+8]=w(Pe),D[ce+9]=w(Ge);const Be=j*X;if(I[Be+0]=w(M)|w(W)<<16,I[Be+1]=w(H),S>0){const N=P+j*S*3;let A=Be+1,ee=!0;for(let Q=0;Q<S*3;Q++){const te=(l[N+Q]-128)/128,se=w(te);ee?(I[A]|=se<<16,A++,ee=!1):(I[A]=se,ee=!0)}}L<O&&(O=L),L>R&&(R=L),G<U&&(U=G),G>Y&&(Y=G),_<E&&(E=_),_>Z&&(Z=_),q.push([L,G,_])}s("Finalizing",.95);const{centroid:oe,normal:le}=$t(q);return console.log(`[SPZLoader] Loaded ${p} points efficiently.`),new Ie({gaussianBuffer:D.buffer,shCoefsBuffer:I.buffer,numPoints:p,shDegree:h,bbox:{min:[O,U,E],max:[R,Y,Z]},center:[oe[0],oe[1],oe[2]],up:le?[le[0],le[1],le[2]]:[0,1,0]})}canHandle(e){return e.toLowerCase().endsWith(".spz")}getSupportedExtensions(){return[".spz"]}readHalfFloat(e,t){const s=e.getUint16(t,!0),r=(s&32768)>>15,n=(s&31744)>>10,i=s&1023;return n===0?(r?-1:1)*Math.pow(2,-14)*(i/1024):n===31?i?NaN:r?-1/0:1/0:(r?-1:1)*Math.pow(2,n-15)*(1+i/1024)}}class en{async loadFile(e,t){return this.loadBuffer(await e.arrayBuffer(),t)}async loadUrl(e,t){const s=await fetch(e,{signal:t?.signal});if(!s.ok)throw new Error(`Failed to fetch KSplat: ${s.statusText}`);return this.loadBuffer(await s.arrayBuffer(),t)}async loadBuffer(e,t){const s=(j,L,G)=>{t?.onProgress?.({stage:j,progress:L,message:G})};s("Parsing KSplat Header",.1);const r=4096,n=1024;let i=0;const o=new DataView(e,i,r),a=o.getUint8(0),l=o.getUint8(1);(a!==0||l<1)&&console.warn(`KSplat version ${a}.${l} might not be fully supported.`);const c=o.getUint32(4,!0),d=o.getUint32(16,!0),u=o.getUint16(20,!0),p=o.getFloat32(36,!0)||-1.5,h=o.getFloat32(40,!0)||1.5,v={0:{bytesPerCenter:12,bytesPerScale:12,bytesPerRotation:16,bytesPerColor:4,bytesPerSphericalHarmonicsComponent:4,scaleOffsetBytes:12,rotationOffsetBytes:24,colorOffsetBytes:40,sphericalHarmonicsOffsetBytes:44,scaleRange:1},1:{bytesPerCenter:6,bytesPerScale:6,bytesPerRotation:8,bytesPerColor:4,bytesPerSphericalHarmonicsComponent:2,scaleOffsetBytes:6,rotationOffsetBytes:12,colorOffsetBytes:20,sphericalHarmonicsOffsetBytes:24,scaleRange:32767},2:{bytesPerCenter:6,bytesPerScale:6,bytesPerRotation:8,bytesPerColor:4,bytesPerSphericalHarmonicsComponent:1,scaleOffsetBytes:6,rotationOffsetBytes:12,colorOffsetBytes:20,sphericalHarmonicsOffsetBytes:24,scaleRange:32767}},y=[0,9,24,45];s("Loading Data",.2);const g=10,m=new Uint16Array(d*g),x=24,b=new Uint32Array(d*x);let P=1/0,T=1/0,S=1/0,$=-1/0,D=-1/0,X=-1/0,I=0,q=0,O=0,U=r+c*n,E=0,R=0;const Y=We(),Z=Ue(),ae=.28209479177387814,ne=[0,3,6,1,4,7,2,5,8,9,14,19,10,15,20,11,16,21,12,17,22,13,18,23,24,31,38,25,32,39,26,33,40,27,34,41,28,35,42,29,36,43,30,37,44];i=r;for(let j=0;j<c;j++){const L=new DataView(e,i,n);i+=n;const G=L.getUint32(0,!0);if(G===0)continue;const _=L.getUint32(4,!0),C=L.getUint32(8,!0),F=L.getUint32(12,!0),M=L.getFloat32(16,!0),W=L.getUint16(20,!0),H=L.getUint32(24,!0)||v[u].scaleRange,z=L.getUint32(32,!0),J=z*C,re=L.getUint32(36,!0),ie=L.getUint16(40,!0);R=Math.max(R,ie);const K=y[ie],k=v[u],he=k.bytesPerCenter+k.bytesPerScale+k.bytesPerRotation+k.bytesPerColor+K*k.bytesPerSphericalHarmonicsComponent,pe=re*4,Pe=W*F+pe,Ge=he*_,ce=U+pe,Be=U+Pe,N=Ge+Pe,A=new DataView(e,Be,Ge),ee=new Float32Array(e,ce,F*3),Q=new Uint32Array(e,U,re),te=M/2/H;let se=z,ue=J;for(let be=0;be<G;be++){E%2e4===0&&s("Processing Splats",.3+.6*(E/d));const V=be*he;let we;if(be<J)we=Math.floor(be/C);else{const Re=Q[se-z];be>=ue+Re&&(se+=1,ue+=Re),we=se}let Se,ge,Ee;if(u===0)Se=A.getFloat32(V+0,!0),ge=A.getFloat32(V+4,!0),Ee=A.getFloat32(V+8,!0);else{const Re=ee[3*we+0],qe=ee[3*we+1],Xe=ee[3*we+2];Se=(A.getUint16(V+0,!0)-H)*te+Re,ge=(A.getUint16(V+2,!0)-H)*te+qe,Ee=(A.getUint16(V+4,!0)-H)*te+Xe}let De,de,Oe;u===0?(De=A.getFloat32(V+k.scaleOffsetBytes,!0),de=A.getFloat32(V+k.scaleOffsetBytes+4,!0),Oe=A.getFloat32(V+k.scaleOffsetBytes+8,!0)):(De=this.fromHalf(A.getUint16(V+k.scaleOffsetBytes,!0)),de=this.fromHalf(A.getUint16(V+k.scaleOffsetBytes+2,!0)),Oe=this.fromHalf(A.getUint16(V+k.scaleOffsetBytes+4,!0))),De=Math.max(De,1e-6),de=Math.max(de,1e-6),Oe=Math.max(Oe,1e-6);let wt,_t,vt,bt;u===0?(wt=A.getFloat32(V+k.rotationOffsetBytes,!0),_t=A.getFloat32(V+k.rotationOffsetBytes+4,!0),vt=A.getFloat32(V+k.rotationOffsetBytes+8,!0),bt=A.getFloat32(V+k.rotationOffsetBytes+12,!0)):(wt=this.fromHalf(A.getUint16(V+k.rotationOffsetBytes,!0)),_t=this.fromHalf(A.getUint16(V+k.rotationOffsetBytes+2,!0)),vt=this.fromHalf(A.getUint16(V+k.rotationOffsetBytes+4,!0)),bt=this.fromHalf(A.getUint16(V+k.rotationOffsetBytes+6,!0)));const Gs=A.getUint8(V+k.colorOffsetBytes)/255,Es=A.getUint8(V+k.colorOffsetBytes+1)/255,Rs=A.getUint8(V+k.colorOffsetBytes+2)/255,Fs=A.getUint8(V+k.colorOffsetBytes+3)/255;ze(Y,_t,vt,bt,wt),$e(Y,Y),je(Z,De,de,Oe);const[As,Ds,Os,Ls,ks,zs]=Ne(Y,Z),Me=E*g;m[Me+0]=w(Se),m[Me+1]=w(ge),m[Me+2]=w(Ee),m[Me+3]=w(Fs),m[Me+4]=w(As),m[Me+5]=w(Ds),m[Me+6]=w(Os),m[Me+7]=w(Ls),m[Me+8]=w(ks),m[Me+9]=w(zs);const xt=E*x,$s=(Gs-.5)/ae,Ws=(Es-.5)/ae,Ns=(Rs-.5)/ae;if(b[xt+0]=w($s)|w(Ws)<<16,b[xt+1]=w(Ns),ie>0){let Re=xt+1,qe=!0;for(let Xe=0;Xe<K;Xe++){const Pt=ne[Xe];let tt;const St=V+k.sphericalHarmonicsOffsetBytes;if(u===0)tt=A.getFloat32(St+Pt*4,!0);else if(u===1)tt=this.fromHalf(A.getUint16(St+Pt*2,!0));else{const Is=A.getUint8(St+Pt)/255;tt=p+Is*(h-p)}const jt=w(tt);qe?(b[Re]|=jt<<16,Re++,qe=!1):(b[Re]=jt,qe=!0)}}P=Math.min(P,Se),$=Math.max($,Se),T=Math.min(T,ge),D=Math.max(D,ge),S=Math.min(S,Ee),X=Math.max(X,Ee),I+=Se,q+=ge,O+=Ee,E++}U+=N}s("Finalizing",.95);const me=E>0?I/E:0,oe=E>0?q/E:0,le=E>0?O/E:0;return console.log(`[KSplatLoader] Loaded ${E} splats.`),new Ie({gaussianBuffer:m.buffer,shCoefsBuffer:b.buffer,numPoints:d,shDegree:R,bbox:{min:[P,T,S],max:[$,D,X]},center:[me,oe,le],up:[0,1,0]})}canHandle(e){return e.toLowerCase().endsWith(".ksplat")}getSupportedExtensions(){return[".ksplat"]}fromHalf(e){const t=(e&32768)>>15,s=(e&31744)>>10,r=e&1023;return s===0?(t?-1:1)*Math.pow(2,-14)*(r/1024):s===31?r?NaN:t?-1/0:1/0:(t?-1:1)*Math.pow(2,s-15)*(1+r/1024)}}class tn{async loadFile(e,t){return this.loadBuffer(await e.arrayBuffer(),t)}async loadUrl(e,t){const s=await fetch(e,{signal:t?.signal});if(!s.ok)throw new Error(`Failed to fetch: ${s.statusText}`);return this.loadBuffer(await s.arrayBuffer(),t)}async loadBuffer(e,t){const s=(g,m,x)=>{t?.onProgress?.({stage:g,progress:m,message:x})};s("Parsing SPLAT",.1);const r=32,n=new DataView(e),i=Math.floor(e.byteLength/r);e.byteLength%r!==0&&console.warn("SPLAT file size not aligned to 32 bytes, truncating"),s("Loading SPLAT data",.3);const o=10,a=new Uint16Array(i*o),l=24,c=new Uint32Array(i*l),d=.28209479177387814,u=[1/0,1/0,1/0],p=[-1/0,-1/0,-1/0],h=[];for(let g=0;g<i;g++){g%5e3===0&&s("Processing SPLAT points",.3+.5*(g/i));let m=g*r;const x=n.getFloat32(m,!0);m+=4;const b=n.getFloat32(m,!0);m+=4;const P=n.getFloat32(m,!0);m+=4,h.push([x,b,P]);const T=n.getFloat32(m,!0);m+=4;const S=n.getFloat32(m,!0);m+=4;const $=n.getFloat32(m,!0);m+=4;const D=n.getUint8(m++)/255,X=n.getUint8(m++)/255,I=n.getUint8(m++)/255,q=n.getUint8(m++)/255,O=n.getUint8(m++)/255*2-1,U=n.getUint8(m++)/255*2-1,E=n.getUint8(m++)/255*2-1,R=n.getUint8(m++)/255*2-1,Y=bs(O,U,E,R);$e(Y,Y);const Z=new Float32Array([T,S,$]),[ae,ne,me,oe,le,j]=Ne(Y,Z),L=g*o;a[L+0]=w(x),a[L+1]=w(b),a[L+2]=w(P),a[L+3]=w(q),a[L+4]=w(ae),a[L+5]=w(ne),a[L+6]=w(me),a[L+7]=w(oe),a[L+8]=w(le),a[L+9]=w(j);const G=g*l,_=(D-.5)/d,C=(X-.5)/d,F=(I-.5)/d,M=w(_),W=w(C),H=w(F);c[G+0]=M|W<<16,c[G+1]=H,u[0]=Math.min(u[0],x),u[1]=Math.min(u[1],b),u[2]=Math.min(u[2],P),p[0]=Math.max(p[0],x),p[1]=Math.max(p[1],b),p[2]=Math.max(p[2],P)}s("Computing geometry",.9);const{centroid:v,normal:y}=$t(h);return new Ie({gaussianBuffer:a.buffer,shCoefsBuffer:c.buffer,numPoints:i,shDegree:0,bbox:{min:u,max:p},center:[v[0],v[1],v[2]],up:y?[y[0],y[1],y[2]]:[1,0,0]})}canHandle(e){return e.toLowerCase().endsWith(".splat")}getSupportedExtensions(){return[".splat"]}}class sn{async loadFile(e,t){return this.loadBuffer(await e.arrayBuffer(),t)}async loadUrl(e,t){const s=await fetch(e,{signal:t?.signal});if(!s.ok)throw new Error(`Failed to fetch SOG: ${s.statusText}`);return this.loadBuffer(await s.arrayBuffer(),t)}async loadBuffer(e,t){return new DataView(e).getUint32(0,!0)===67324752?this.loadCompressedSOG(e,t):this.loadRawSOG(e,t)}async loadRawSOG(e,t){const s=(q,O,U)=>{t?.onProgress?.({stage:q,progress:O,message:U})};s("Parsing SOG header",.1);const r=new DataView(e);let n=0;const i=r.getUint32(n,!0);if(n+=4,i!==1397704448&&i!==4673363)throw new Error("Invalid SOG file");const o=r.getUint32(n,!0);n+=4;const a=r.getUint32(n,!0);n+=4;const l=r.getUint32(n,!0);n+=4,console.log(`[SOGLoader] Ver:${o}, Points:${a}, SH Degree:${l}`),s("Loading SOG data",.3);const c=10,d=new Uint16Array(a*c),u=24,p=new Uint32Array(a*u);let h=1/0,v=1/0,y=1/0,g=-1/0,m=-1/0,x=-1/0,b=0,P=0,T=0;const S=We(),$=Ue();for(let q=0;q<a;q++){q%1e4===0&&s("Processing SOG points",.3+.6*(q/a));const O=r.getFloat32(n,!0);n+=4;const U=r.getFloat32(n,!0);n+=4;const E=r.getFloat32(n,!0);n+=4;const R=r.getFloat32(n,!0);n+=4;const Y=r.getFloat32(n,!0);n+=4;const Z=r.getFloat32(n,!0);n+=4;const ae=Math.exp(R),ne=Math.exp(Y),me=Math.exp(Z),oe=r.getFloat32(n,!0);n+=4;const le=r.getFloat32(n,!0);n+=4;const j=r.getFloat32(n,!0);n+=4;const L=r.getFloat32(n,!0);n+=4;const G=r.getFloat32(n,!0);n+=4;const _=Ss(G);ze(S,le,j,L,oe),$e(S,S),je($,ae,ne,me);const[C,F,M,W,H,z]=Ne(S,$),J=q*c;d[J+0]=w(O),d[J+1]=w(U),d[J+2]=w(E),d[J+3]=w(_),d[J+4]=w(C),d[J+5]=w(F),d[J+6]=w(M),d[J+7]=w(W),d[J+8]=w(H),d[J+9]=w(z);const re=3*Math.pow(l+1,2),ie=q*u;for(let K=0;K<re&&K<u*2;K++){const k=r.getFloat32(n,!0);n+=4;const he=w(k),pe=Math.floor(K/2);K%2===1?p[ie+pe]|=he<<16:p[ie+pe]=he}if(re>u*2){const K=re-u*2;n+=K*4}h=Math.min(h,O),g=Math.max(g,O),v=Math.min(v,U),m=Math.max(m,U),y=Math.min(y,E),x=Math.max(x,E),b+=O,P+=U,T+=E}s("Finalizing",.9);const D=b/a,X=P/a,I=T/a;return new Ie({gaussianBuffer:d.buffer,shCoefsBuffer:p.buffer,numPoints:a,shDegree:l,bbox:{min:[h,v,y],max:[g,m,x]},center:[D,X,I],up:[0,1,0]})}async loadCompressedSOG(e,t){const s=(G,_)=>t?.onProgress?.({stage:"SOG-WebP",progress:G,message:_});s(.1,"Unzipping SOG");const r=await new Promise((G,_)=>{Pr(new Uint8Array(e),(C,F)=>{C?_(C):G(F)})});if(!r["meta.json"])throw new Error("Invalid SOG ZIP: missing meta.json");const n=JSON.parse(new TextDecoder().decode(r["meta.json"])),i=n.count;console.log(`[SOGLoader] Compressed SOG, Points: ${i}`);const o=async G=>{if(!r[G])throw new Error(`Missing texture: ${G}`);const _=new Blob([new Uint8Array(r[G])],{type:"image/webp"}),C=await createImageBitmap(_);let F;const{width:M,height:W}=C;if(typeof OffscreenCanvas<"u"){F=new OffscreenCanvas(M,W).getContext("2d"),F?.drawImage(C,0,0);const z=F?.getImageData(0,0,M,W);return{data:new Uint8Array(z.data.buffer),width:M,height:W}}else{const H=document.createElement("canvas");H.width=M,H.height=W,F=H.getContext("2d"),F?.drawImage(C,0,0);const z=F?.getImageData(0,0,M,W);return{data:new Uint8Array(z.data.buffer),width:M,height:W}}};s(.2,"Decoding Base Textures");const[a,l,c,d,u]=await Promise.all([o(n.means.files[0]),o(n.means.files[1]),o(n.quats.files[0]),o(n.scales.files[0]),o(n.sh0.files[0])]);let p=0,h=null,v=null,y=0,g=[],m=null;if(n.shN){const G=n.shN;p=G.bands,console.log(`[SOGLoader] Found shN (Vector Quantized). Degree: ${p}`),s(.4,"Decoding SH Vector Tables");let _;[v,_]=await Promise.all([o(G.files[1]),o(G.files[0])]);const C=new Float32Array(G.codebook),F=G.count,M=p===3?15:p===2?8:3;y=M*3,h=new Float32Array(F*y);const W=_.data;for(let H=0;H<F;H++)for(let z=0;z<M;z++){const J=(H*M+z)*4,re=W[J+0],ie=W[J+1],K=W[J+2],k=H*y+z*3;h[k+0]=C[re],h[k+1]=C[ie],h[k+2]=C[K]}}else if(n.sh_rest&&n.sh_rest.files.length>0){console.log("[SOGLoader] Found sh_rest (Scalar Quantized)."),m=new Float32Array(n.sh_rest.codebook),g=await Promise.all(n.sh_rest.files.map(_=>o(_)));const G=3+g.length*3;p=Math.round(Math.sqrt(G/3)-1)}else console.log("[SOGLoader] No high-order SH data. Degree: 0");const x=10,b=new Uint16Array(i*x),P=24,T=new Uint32Array(i*P),S=We(),$=Ue(),D=n.means.mins[0],X=n.means.maxs[0]-D||1,I=n.means.mins[1],q=n.means.maxs[1]-I||1,O=n.means.mins[2],U=n.means.maxs[2]-O||1,E=new Float32Array(n.scales.codebook),R=new Float32Array(n.sh0.codebook);let Y=1/0,Z=1/0,ae=1/0,ne=-1/0,me=-1/0,oe=-1/0,le=0,j=0,L=0;s(.6,"Reconstructing Gaussians");for(let G=0;G<i;G++){G%5e4===0&&s(.6+.3*(G/i),"Reconstructing...");const _=G*4,C=a.data[_+0]|l.data[_+0]<<8,F=a.data[_+1]|l.data[_+1]<<8,M=a.data[_+2]|l.data[_+2]<<8,W=this.invLogTransform(D+X*(C/65535)),H=this.invLogTransform(I+q*(F/65535)),z=this.invLogTransform(O+U*(M/65535)),J=c.data[_+3];this.unpackQuatToRef(c.data[_],c.data[_+1],c.data[_+2],J,S);const re=Math.exp(E[d.data[_+0]]),ie=Math.exp(E[d.data[_+1]]),K=Math.exp(E[d.data[_+2]]);je($,re,ie,K);const[k,he,pe,Pe,Ge,ce]=Ne(S,$),Be=u.data[_+3]/255,N=G*x;b[N+0]=w(W),b[N+1]=w(H),b[N+2]=w(z),b[N+3]=w(Be),b[N+4]=w(k),b[N+5]=w(he),b[N+6]=w(pe),b[N+7]=w(Pe),b[N+8]=w(Ge),b[N+9]=w(ce);let A=G*P,ee=0;const Q=te=>{const se=w(te),ue=A+(ee>>1);(ee&1)===1?T[ue]|=se<<16:T[ue]=se,ee++};if(Q(R[u.data[_+0]]),Q(R[u.data[_+1]]),Q(R[u.data[_+2]]),h&&v){const te=G*4,se=v.data[te+0],ue=v.data[te+1],V=(se|ue<<8)*y;for(let we=0;we<y;we++)Q(h[V+we])}else if(m&&g.length>0)for(let te=0;te<g.length;te++){const se=g[te].data;Q(m[se[_+0]]),Q(m[se[_+1]]),Q(m[se[_+2]])}Y=Math.min(Y,W),ne=Math.max(ne,W),Z=Math.min(Z,H),me=Math.max(me,H),ae=Math.min(ae,z),oe=Math.max(oe,z),le+=W,j+=H,L+=z}return new Ie({gaussianBuffer:b.buffer,shCoefsBuffer:T.buffer,numPoints:i,shDegree:p,bbox:{min:[Y,Z,ae],max:[ne,me,oe]},center:[le/i,j/i,L/i],up:[0,1,0]})}invLogTransform(e){const t=Math.abs(e),s=Math.exp(t)-1;return e<0?-s:s}unpackQuatToRef(e,t,s,r,n){const i=r-252;if(i<0||i>3){ze(n,0,0,0,1);return}const o=e/255*2-1,a=t/255*2-1,l=s/255*2-1,c=1.41421356;let d=0,u=0,p=0,h=0;i===0?(u=o/c,p=a/c,h=l/c,d=Math.sqrt(Math.max(0,1-(u*u+p*p+h*h)))):i===1?(d=o/c,p=a/c,h=l/c,u=Math.sqrt(Math.max(0,1-(d*d+p*p+h*h)))):i===2?(d=o/c,u=a/c,h=l/c,p=Math.sqrt(Math.max(0,1-(d*d+u*u+h*h)))):(d=o/c,u=a/c,p=l/c,h=Math.sqrt(Math.max(0,1-(d*d+u*u+p*p)))),ze(n,u,p,h,d),$e(n,n)}canHandle(e){return e.toLowerCase().endsWith(".sog")}getSupportedExtensions(){return[".sog"]}}class Ht{static CHUNK_SIZE=256;async loadFile(e,t){const s=await e.arrayBuffer();return this.loadBuffer(s,t)}async loadUrl(e,t){const s=await fetch(e,{signal:t?.signal});if(!s.ok)throw new Error(`Failed to fetch compressed PLY: ${s.status}`);const r=await s.arrayBuffer();return this.loadBuffer(r,t)}canHandle(e){return e.toLowerCase().endsWith(".compressed.ply")}getSupportedExtensions(){return[".compressed.ply"]}async loadBuffer(e,t){const s=new TextDecoder().decode(e.slice(0,Math.min(1048576,e.byteLength))),r=s.indexOf("end_header")+10+1,n=s.slice(0,r).split(/\r?\n/);let i="binary_little_endian",o=0,a=0,l=0,c=!1;for(const _ of n)_.startsWith("format ")&&(_.includes("binary_little_endian")?i="binary_little_endian":_.includes("binary_big_endian")&&(i="binary_big_endian")),_.startsWith("element vertex")&&(o=parseInt(_.split(/\s+/)[2])),_.startsWith("element chunk")&&(a=parseInt(_.split(/\s+/)[2])),_.startsWith("element sh")?c=!0:c&&_.startsWith("property")?l++:c&&_.startsWith("element")&&(c=!1);const d=i==="binary_little_endian",u=new DataView(e,r),p=18*4,h=[];for(let _=0;_<a;_++){const C=_*p;h.push({minPos:[u.getFloat32(C+0,d),u.getFloat32(C+4,d),u.getFloat32(C+8,d)],maxPos:[u.getFloat32(C+12,d),u.getFloat32(C+16,d),u.getFloat32(C+20,d)],minScale:[u.getFloat32(C+24,d),u.getFloat32(C+28,d),u.getFloat32(C+32,d)],maxScale:[u.getFloat32(C+36,d),u.getFloat32(C+40,d),u.getFloat32(C+44,d)],minColor:[u.getFloat32(C+48,d),u.getFloat32(C+52,d),u.getFloat32(C+56,d)],maxColor:[u.getFloat32(C+60,d),u.getFloat32(C+64,d),u.getFloat32(C+68,d)]})}const v=a*p,y=4*4,g=v+o*y,m=l,x=10;let b,P;l===9?(b=1,P=12):l===24?(b=2,P=27):l===45?(b=3,P=48):(b=0,P=3);const T=Math.ceil(P/2),S=new Uint16Array(o*x),$=new Uint32Array(o*T);let D=1/0,X=1/0,I=1/0,q=-1/0,O=-1/0,U=-1/0;const E=(_,C,F)=>_*(1-F)+C*F,R=(_,C)=>{const F=(1<<C)-1;return(_&F)/F},Y=_=>({x:R(_>>>21,11),y:R(_>>>11,10),z:R(_,11)}),Z=_=>({r:R(_>>>24,8),g:R(_>>>16,8),b:R(_>>>8,8),a:R(_,8)}),ae=_=>{const C=1/(Math.sqrt(2)*.5),F=(R(_>>>20,10)-.5)*C,M=(R(_>>>10,10)-.5)*C,W=(R(_,10)-.5)*C,H=Math.sqrt(Math.max(0,1-(F*F+M*M+W*W)));switch(_>>>30){case 0:return{w:H,x:F,y:M,z:W};case 1:return{w:F,x:H,y:M,z:W};case 2:return{w:F,x:M,y:H,z:W};default:return{w:F,x:M,y:W,z:H}}},ne=.28209479177387814,me=(_,C,F)=>{const M=new Float32Array(P);M[0]=(C[0]-.5)/ne,M[1]=(C[1]-.5)/ne,M[2]=(C[2]-.5)/ne;const W=F.length/3;for(let z=0;z<W;z++){const J=3+z*3;if(J+2>=M.length)break;const re=z,ie=z+W,K=z+W*2,k=F[re],he=F[ie],pe=F[K];M[J+0]=(k/255-.5)*8,M[J+1]=(he/255-.5)*8,M[J+2]=(pe/255-.5)*8}const H=_*T;for(let z=0;z<M.length;z+=2){const J=w(M[z]),re=z+1<M.length?w(M[z+1]):0;$[H+(z>>1)]=re<<16|J}},oe=We(),le=Ue();for(let _=0;_<o;_++){const C=v+_*y,F=g+_*m,M=Math.floor(_/Ht.CHUNK_SIZE),W=u.getUint32(C+0,d),H=u.getUint32(C+4,d),z=u.getUint32(C+8,d),J=u.getUint32(C+12,d),re=Y(W),ie=ae(H),K=Y(z),k=Z(J),he=E(h[M].minPos[0],h[M].maxPos[0],re.x),pe=E(h[M].minPos[1],h[M].maxPos[1],re.y),Pe=E(h[M].minPos[2],h[M].maxPos[2],re.z),Ge=E(h[M].minScale[0],h[M].maxScale[0],K.x),ce=E(h[M].minScale[1],h[M].maxScale[1],K.y),Be=E(h[M].minScale[2],h[M].maxScale[2],K.z),N=Math.exp(Ge),A=Math.exp(ce),ee=Math.exp(Be),Q=E(h[M].minColor[0],h[M].maxColor[0],k.r),te=E(h[M].minColor[1],h[M].maxColor[1],k.g),se=E(h[M].minColor[2],h[M].maxColor[2],k.b),ue=[Q,te,se],be=k.a;ze(oe,ie.x,ie.y,ie.z,ie.w),je(le,N,A,ee),$e(oe,oe);const[V,we,Se,ge,Ee,De]=Ne(oe,le),de=_*x;S[de+0]=w(he),S[de+1]=w(pe),S[de+2]=w(Pe),S[de+3]=w(be),S[de+4]=w(V),S[de+5]=w(we),S[de+6]=w(Se),S[de+7]=w(ge),S[de+8]=w(Ee),S[de+9]=w(De);const Oe=new Uint8Array(e,r+F,m);me(_,ue,Oe),D=Math.min(D,he),X=Math.min(X,pe),I=Math.min(I,Pe),q=Math.max(q,he),O=Math.max(O,pe),U=Math.max(U,Pe)}const j=[D,X,I],L=[q,O,U],G=[(D+q)/2,(X+O)/2,(I+U)/2];return new Ie({gaussianBuffer:S.buffer,shCoefsBuffer:$.buffer,numPoints:o,shDegree:b,bbox:{min:j,max:L},center:G,up:[0,1,0]})}}class kt{_object3D;_bbox;_modelType;constructor(e,t="unknown"){this._object3D=e,this._modelType=t,this._bbox=this.calculateBoundingBox(e)}object3D(){return this._object3D}modelType(){return this._modelType}bbox(){return this._bbox}calculateBoundingBox(e){const t=new ws().setFromObject(e);return{min:[t.min.x,t.min.y,t.min.z],max:[t.max.x,t.max.y,t.max.z]}}}class et{loader;constructor(e){this.loader=e}applyShadowsAndMaterial(e,t){e.traverse(s=>{s&&s.isMesh&&(!s.material&&t&&(s.material=t),"castShadow"in s&&(s.castShadow=!0),"receiveShadow"in s&&(s.receiveShadow=!0))})}async loadFile(e,t){const s=URL.createObjectURL(e);try{const r=await this.loadFromUrl(s,t);return new kt(r,this.getModelType())}finally{URL.revokeObjectURL(s)}}async loadUrl(e,t){const s=await this.loadFromUrl(e,t);return new kt(s,this.getModelType())}async loadBuffer(e,t){throw new Error("Buffer loading not supported for Three.js models")}canHandle(e,t){return this.getSupportedExtensions().some(s=>e.toLowerCase().endsWith(s))}}class rn extends et{constructor(){super(new rr)}getSupportedExtensions(){return[".gltf",".glb"]}getModelType(){return"gltf"}async loadFromUrl(e,t){return new Promise((s,r)=>{this.loader.load(e,n=>{this.applyShadowsAndMaterial(n.scene),s(n.scene)},n=>{t?.onProgress&&t.onProgress({progress:n.loaded/n.total,stage:"Loading GLTF/GLB..."})},r)})}}class nn extends et{constructor(){super(new nr)}getSupportedExtensions(){return[".obj"]}getModelType(){return"obj"}async loadFromUrl(e,t){return new Promise((s,r)=>{this.loader.load(e,n=>{this.applyShadowsAndMaterial(n),s(n)},n=>{t?.onProgress&&t.onProgress({progress:n.loaded/n.total,stage:"Loading OBJ..."})},r)})}}class on extends et{constructor(){super(new gs)}getSupportedExtensions(){return[".fbx"]}getModelType(){return"fbx"}async loadFromUrl(e,t){return new Promise((s,r)=>{this.loader.load(e,n=>{this.applyShadowsAndMaterial(n),s(n)},n=>{t?.onProgress&&t.onProgress({progress:n.loaded/n.total,stage:"Loading FBX..."})},r)})}}class an extends et{constructor(){super(new ir)}getSupportedExtensions(){return[".stl"]}getModelType(){return"stl"}async loadFromUrl(e,t){return new Promise((s,r)=>{this.loader.load(e,n=>{const i=new ys({color:8947848}),o=new yt(n,i);this.applyShadowsAndMaterial(o,i),s(o)},n=>{t?.onProgress&&t.onProgress({progress:n.loaded/n.total,stage:"Loading STL..."})},r)})}}class ln extends et{constructor(){super(new or)}getSupportedExtensions(){return[".ply"]}getModelType(){return"ply"}async loadFromUrl(e,t){return new Promise((s,r)=>{this.loader.load(e,n=>{const i=new ys({vertexColors:!0}),o=new yt(n,i);this.applyShadowsAndMaterial(o,i),s(o)},n=>{t?.onProgress&&t.onProgress({progress:n.loaded/n.total,stage:"Loading PLY..."})},r)})}}function cn(){return[new rn,new nn,new on,new an,new ln]}class un{_weights;_numPoints;_channels;_bbox={min:[0,0,0],max:[0,0,0]};constructor(e){this._weights=e.weightsBuffer,this._numPoints=e.numPoints,this._channels=e.channels??64}weightsBuffer(){return this._weights}numPoints(){return this._numPoints}weightChannels(){return this._channels}bbox(){return this._bbox}}class dn{async loadFile(e,t){const s=await e.arrayBuffer();return this.loadBuffer(s,t)}async loadUrl(e,t){const s=await fetch(e,{signal:t?.signal});if(!s.ok)throw new Error(`Failed to fetch weight PLY: ${s.status} ${s.statusText}`);const r=await s.arrayBuffer();return this.loadBuffer(r,t)}async loadBuffer(e,t){const s=(o,a,l)=>{t?.onProgress?.({stage:o,progress:a,message:l})};s("Parsing PLY header",.1);const r=this.parseHeader(e);s("Parsing vertex data",.2);const n=this.parseVertices(e,r);s("Processing weights",.5);const i=this.processWeights(r,n,s);return s("Complete",1),i}canHandle(e,t){return e.toLowerCase().endsWith(".ply")||t==="application/octet-stream"}getSupportedExtensions(){return[".ply"]}processWeights(e,t,s){const r=new Array(64).fill(-1);for(let a=0;a<64;a++)r[a]=t.props.indexOf(`weight_${a}`);if(!r.every(a=>a>=0))throw new Error("Weight PLY missing required properties weight_0..weight_63");const i=e.vertices,o=new Float32Array(i*64);for(let a=0;a<i;a++){a%1e4===0&&s?.("Processing weights",.5+.4*(a/i),`${a}/${i} points`);const l=t.rows(a),c=a*64;for(let d=0;d<64;d++)o[c+d]=l[r[d]]}return new un({weightsBuffer:o.buffer,numPoints:i,channels:64})}parseHeader(e){const t=new TextDecoder().decode(e.slice(0,Math.min(1048576,e.byteLength))),s=t.split(/\r?\n/);if(!/^ply\b/.test(s[0]))throw new Error("Not a PLY file");let r=null,n=0;const i=[];let o=0,a=!1;for(let l=1;l<s.length;l++){const c=s[l];if(c==="end_header"){let d=t.indexOf("end_header");if(d<0)throw new Error("Malformed PLY: missing end_header");const u=t.indexOf(`
`,d+10);o=u>=0?u+1:d+10+1;break}if(c.startsWith("format ")){const d=c.split(/\s+/)[1];if(d==="ascii"||d==="binary_little_endian"||d==="binary_big_endian")r=d;else throw new Error(`Unsupported PLY format: ${d}`)}else if(c.startsWith("element "))a=c.startsWith("element vertex "),a&&(n=parseInt(c.split(/\s+/)[2],10));else if(a&&c.startsWith("property ")){const d=c.trim().split(/\s+/);if(d[1]==="list")throw new Error("Unexpected list property in vertex");const u=d[d.length-1];i.push(u)}}if(!r)throw new Error("PLY header missing format");if(n<=0)throw new Error("PLY has no vertices element");return{format:r,vertices:n,props:i,headerByteLength:o}}parseVertices(e,t){const s=t.props.slice();return t.format==="ascii"?this.parseASCIIVertices(e,t,s):this.parseBinaryVertices(e,t,s)}parseASCIIVertices(e,t,s){const n=new TextDecoder().decode(e.slice(t.headerByteLength)).split(/\r?\n/).filter(i=>i.trim().length>0);return{props:s,rows:i=>{const o=n[i].trim().split(/\s+/);if(o.length<s.length)throw new Error("Malformed PLY ASCII row");return o.map(parseFloat)}}}parseBinaryVertices(e,t,s){const r=t.format==="binary_little_endian",n=new DataView(e,t.headerByteLength),i=s.length*4;return{props:s,rows:o=>{const a=o*i,l=new Array(s.length);for(let c=0;c<s.length;c++)l[c]=n.getFloat32(a+c*4,r);return l}}}}class fn{gaussianLoaders=new Map;threeLoaders=new Map;constructor(){this.register(new Kr,[".ply"],"gaussian"),this.register(new Zr,[".spz"],"gaussian"),this.register(new en,[".ksplat"],"gaussian"),this.register(new tn,[".splat"],"gaussian"),this.register(new sn,[".sog"],"gaussian"),this.register(new Ht,[".compressed.ply"],"gaussian"),cn().forEach(t=>{const s=t.getSupportedExtensions();this.register(t,s,"three")})}register(e,t,s="three"){const r=s==="gaussian"?this.gaussianLoaders:this.threeLoaders;for(const n of t)r.set(n.toLowerCase(),e)}getLoader(e,t,s){const r=e.toLowerCase(),n=this.getFileExtension(r);if(r.endsWith(".compressed.ply"))return this.gaussianLoaders.get(".compressed.ply")||null;s?.isGaussian;const i=s?.isGaussian===!1;if(i)return this.threeLoaders.get(n)||null;let o=this.gaussianLoaders.get(n);if(o||(o=this.threeLoaders.get(n),o))return o;if(!i){for(const[,a]of this.gaussianLoaders)if(a.canHandle(e,t))return a}for(const[,a]of this.threeLoaders)if(a.canHandle(e,t))return a;return null}async getLoaderForFile(e,t){let s;return e.name.toLowerCase().endsWith(".ply")&&(s=await this.is3dgsPly(e)),this.getLoader(e.name,t,{isGaussian:s})}getAllSupportedExtensions(){const e=new Set;for(const t of this.gaussianLoaders.keys())e.add(t);for(const t of this.threeLoaders.keys())e.add(t);return Array.from(e)}async loadFile(e,t={}){if(t.isGaussian===void 0&&e.name.toLowerCase().endsWith(".ply")){const r=await this.is3dgsPly(e);t.isGaussian=r}const s=this.getLoader(e.name,e.type,t);if(!s)throw new Error(`Unsupported file format: ${e.name}`);return s.loadFile(e,t)}async loadUrl(e,t={}){const s=this.getLoader(e,void 0,t);if(!s)throw new Error(`Unsupported file format for URL: ${e}`);return s.loadUrl(e,t)}async loadBuffer(e,t){const s=this.detectFormatFromBuffer(e);if(!s)throw new Error("Unable to detect file format from buffer");return s.loadBuffer(e,t)}canHandle(e,t,s){return this.getLoader(e,t,s)!==null}getSupportedExtensions(){return this.getAllSupportedExtensions()}getFileExtension(e){const t=e.lastIndexOf(".");return t>=0?e.slice(t).toLowerCase():""}detectFormatFromBuffer(e){const t=new DataView(e),s=new TextDecoder().decode(e.slice(0,100));if(s.startsWith(`ply
`)||s.startsWith(`ply\r
`))return this.is3dgsPlyFromHeader(s)?this.gaussianLoaders.get(".ply")||null:this.threeLoaders.get(".ply")||null;if(e.byteLength>=2){const r=t.getUint8(0),n=t.getUint8(1);if(r===31&&n===139)return this.gaussianLoaders.get(".spz")||null}return e.byteLength>=4&&String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))==="KSPL"?this.gaussianLoaders.get(".ksplat")||null:e.byteLength>=4&&t.getUint32(0,!0)===67324752?this.gaussianLoaders.get(".sog")||null:(e.byteLength>0&&e.byteLength%32,null)}async readFileHeader(e,t=4096){const r=await e.slice(0,t).arrayBuffer();return new TextDecoder("utf-8").decode(r||new ArrayBuffer(0))}async is3dgsPly(e){try{const t=await this.readFileHeader(e),s=this.is3dgsPlyFromHeader(t);return console.log(`PLY 文件 ${e.name} 3DGS 检测结果: ${s}`),s}catch(t){return console.warn("读取 PLY 头信息失败，按非 3DGS 处理:",e.name,t),!1}}is3dgsPlyFromHeader(e){const t=e.toLowerCase();return t.startsWith("ply")?["property float opacity","property float scale_0","property float scale_1","property float scale_2","property float rot_0","property float rot_1","property float rot_2","property float rot_3"].every(n=>t.includes(n)):!1}}function hn(){return new fn}const gt=hn();function pn(){return[".ply",".spz",".ksplat",".splat",".sog",".compressed.ply"]}function ut(f){const e=f.toLowerCase();return pn().some(t=>e.endsWith(t))}function Ve(f){const e=f.toLowerCase();return e.endsWith(".compressed.ply")?"compressed.ply":e.endsWith(".ksplat")?"ksplat":e.endsWith(".splat")?"splat":e.endsWith(".spz")?"spz":e.endsWith(".sog")?"sog":e.endsWith(".ply")?"ply":null}function mn(f){return"gaussianBuffer"in f&&"shCoefsBuffer"in f&&"numPoints"in f&&"shDegree"in f}class gn{constructor(e,t){this.fileLoader=e,this.onnxManager=t}async createFromGaussian(e,t,s,r){const n=e.backend.device,i=Ve(t);console.log(`[GaussianLoader] Loading ${i?.toUpperCase()||"GAUSSIAN"} file:`,t);const o=await this.fileLoader.loadSample(t,n,r||"gaussian");if(!o)throw new Error(`Failed to load Gaussian file: ${t}`);return s?.name&&(o.name=s.name),new ct(o)}async createFromPLY(e,t,s){const r=e.backend.device,n=await this.fileLoader.loadSample(t,r,"ply");if(!n)throw new Error(`Failed to load PLY file: ${t}`);return s?.name&&(n.name=s.name),new ct(n)}async createFromSPZ(e,t,s){return this.createFromGaussian(e,t,s)}async createFromKSplat(e,t,s){return this.createFromGaussian(e,t,s)}async createFromSplat(e,t,s){return this.createFromGaussian(e,t,s)}async createFromSOG(e,t,s){return this.createFromGaussian(e,t,s)}async createFromONNX(e,t,s,r,n){const i=e.backend.device,o={staticInference:!1,debugLogging:!0,...n?.onnxOptions},a=await this.onnxManager.loadONNXModel(i,t,s,r,n?.name,o);return new ct(a)}async attachWeightsFromPLY(e,t,s){const r=e.backend.device,i=await new dn().loadUrl(s),o=t.getPointCloud();if(!(o instanceof Ae))throw new Error("attachWeightsFromPLY: model is not a PointCloud");i.numPoints()!==o.numPoints&&console.warn(`[GaussianLoader] Weight PLY point count (${i.numPoints()}) does not match model (${o.numPoints})`),o.setWeightBufferFromArray(r,new Float32Array(i.weightsBuffer()),64)}async createFromFile(e,t,s,r,n){const i=n||this.fileLoader.getFileType(t);if(i==="ply")return this.createFromPLY(e,t,r);if(i==="onnx"){if(!s)throw new Error(`ONNX file ${t} requires camera matrices`);return this.createFromONNX(e,t,s.camMat,s.projMat,r)}if(["gaussian","sog","splat","ksplat","spz","compressed.ply"].includes(i))return this.createFromGaussian(e,t,r,i);throw new Error(`Unsupported file type: ${i}`)}createFromEntry(e){return new ct(e)}isFormatSupported(e){return this.fileLoader.isFileTypeSupported(e)}getSupportedFormats(){return this.fileLoader.getSupportedExtensions()}detectFormat(e){return this.fileLoader.getGaussianFormat(e)}}class Bs{loader;modelManager;callbacks;constructor(e,t={}){this.modelManager=e,this.callbacks=t,this.loader=new gs,console.warn("⚠️ FBXLoader 与 WebGPU 渲染器可能存在兼容性问题。如果加载失败，建议："),console.warn("1. 将 FBX 模型转换为 GLTF/GLB 格式"),console.warn("2. 使用 GLTFLoader 替代 FBXLoader"),console.warn("3. 或暂时切换到 WebGLRenderer")}async loadFromFile(e,t={}){try{if(this.showProgress(!0,"Loading FBX file...",10),this.modelManager.isAtCapacity())throw this.showProgress(!1),this.showError(`Reached model limit (${this.modelManager.getRemainingCapacity()}). Remove models before adding more.`),new Error("Model limit reached");const s=await this.loadFBXFromFile(e);this.showProgress(!0,"Processing animations...",30);const r=this.extractAnimationClips(s);this.showProgress(!0,"Creating model wrapper...",60);const n=new Ot(s,r,t);this.showProgress(!0,"Registering model...",80);const i=e.name.replace(/\.[^/.]+$/,""),o=this.modelManager.generateUniqueName(i),a=this.modelManager.addModel({name:o,visible:!0,pointCloud:n,pointCount:n.getVertexCount(),isDynamic:r.length>0,modelType:"fbx"});return this.showProgress(!1),this.callbacks.onSuccess?.(a),console.log(`FBX model loaded: ${a.name} (${a.pointCount} vertices, ${r.length} animations)`),a}catch(s){this.showProgress(!1);const r=`Failed to load FBX file: ${s.message}`;throw this.showError(r),s}}async loadFromURL(e,t={}){try{if(this.showProgress(!0,"Loading FBX from URL...",10),this.modelManager.isAtCapacity())throw this.showProgress(!1),this.showError(`Reached model limit (${this.modelManager.getRemainingCapacity()}). Remove models before adding more.`),new Error("Model limit reached");const s=await this.loadFBXFromURL(e);this.showProgress(!0,"Processing animations...",30);const r=this.extractAnimationClips(s);this.showProgress(!0,"Creating model wrapper...",60);const n=new Ot(s,r,t);this.showProgress(!0,"Registering model...",80);const i=e.split("/").pop()?.replace(/\.[^/.]+$/,"")||"FBX Model",o=this.modelManager.generateUniqueName(i),a=this.modelManager.addModel({name:o,visible:!0,pointCloud:n,pointCount:n.getVertexCount(),isDynamic:r.length>0,modelType:"fbx"});return this.showProgress(!1),this.callbacks.onSuccess?.(a),console.log(`FBX model loaded from URL: ${a.name} (${a.pointCount} vertices, ${r.length} animations)`),a}catch(s){this.showProgress(!1);const r=`Failed to load FBX from URL: ${s.message}`;throw this.showError(r),s}}async loadFBXFromFile(e){return new Promise((t,s)=>{const r=setTimeout(()=>{s(new Error("FBX loading timeout after 30 seconds. This might be due to WebGPU compatibility issues with FBXLoader."))},3e4),n=new FileReader;n.onload=i=>{try{const o=i.target?.result;if(!o)throw new Error("Failed to read file");console.log(`FBX file read successfully, size: ${o.byteLength} bytes`),console.log("Starting FBX parsing...");try{const a=this.loader.parse(o,"");clearTimeout(r),console.log("FBX parsing completed successfully"),t(a)}catch(a){clearTimeout(r),console.error("FBX parsing failed:",a),s(new Error(`FBX parsing error: ${a.message||a}`))}}catch(o){clearTimeout(r),console.error("Error in file read handler:",o),s(o)}},n.onerror=()=>{clearTimeout(r);const i=new Error("Failed to read file");console.error(i),s(i)},console.log(`Reading FBX file: ${e.name}, size: ${e.size} bytes`),n.readAsArrayBuffer(e)})}async loadFBXFromURL(e){return new Promise((t,s)=>{this.loader.load(e,r=>t(r),r=>{const n=r.loaded/r.total*100;this.showProgress(!0,`Loading... ${n.toFixed(1)}%`,n)},r=>s(r))})}extractAnimationClips(e){const t=[];return e.traverse(r=>{r.animations&&r.animations.length>0&&t.push(...r.animations)}),t.filter((r,n,i)=>n===i.findIndex(o=>o.name===r.name))}showProgress(e,t,s){e&&t&&s!==void 0?this.callbacks.onProgress?.(s,t):e||this.callbacks.onProgress?.(0,"")}showError(e){console.error(e),this.callbacks.onError?.(e)}}class yn{modelManager;callbacks;constructor(e,t={}){this.modelManager=e,this.callbacks=t}async loadFile(e,t){try{if(this.showProgress(!0,"Reading file...",10),e.arrayBuffer().then(r=>{console.log("[FileLoader] First 16 bytes:",new Uint8Array(r).slice(0,16))}),this.modelManager.isAtCapacity())return this.showProgress(!1),this.showError(`Reached model limit (${this.modelManager.getRemainingCapacity()}). Remove models before adding more.`),null;const s=e.name.toLowerCase();if(ut(s)){const r=Ve(s);return console.log(`[FileLoader] Loading Gaussian format: ${r}`),await this.loadGaussianFile(e,t)}else return s.endsWith(".onnx")?(this.showError("ONNX files should be loaded through ONNXManager, not FileLoader"),null):s.endsWith(".fbx")?await this.loadFBXFile(e):(this.showProgress(!1),this.showError(`Unsupported file type: ${s}
Supported formats: ${this.getSupportedExtensions().join(", ")}`),null)}catch(s){return this.showProgress(!1),this.showError(s.message),null}}async loadSample(e,t,s){try{if(this.modelManager.isAtCapacity())return this.showError("Reached model limit. Remove models before adding more."),null;console.log("[FileLoader] Loading sample:",e,s?`(expected: ${s})`:"");let r=s;return r||(r=this.detectTypeFromFilename(e)),r&&["ply","gaussian","sog","splat","ksplat","spz","compressed.ply"].includes(r)?await this.loadGaussianUrl(e,t,r):r==="onnx"?(this.showError("ONNX files should be loaded through ONNXManager, not FileLoader"),null):(this.showError(`Unsupported file type: ${e}`),null)}catch(r){return console.error(`[FileLoader] Failed to load sample ${e}:`,r),this.showProgress(!1),this.showError(r.message),null}}detectTypeFromFilename(e){const t=e.toLowerCase();if(ut(t))return"gaussian";if(t.endsWith(".onnx"))return"onnx"}async loadGaussianFile(e,t){const s=Ve(e.name)||"unknown";console.log(`[FileLoader] Loading ${s.toUpperCase()} file:`,e.name);const r=await gt.loadFile(e,{onProgress:n=>{this.showProgress(!0,n.stage,n.progress*100)},isGaussian:!0});if(!this.isGaussianDataSource(r))throw new Error(`Loaded data is not a valid Gaussian format: ${e.name}`);return await this.createGaussianModel(r,e.name,t)}async loadGaussianUrl(e,t,s){if(e.startsWith("blob:"))return console.log("[FileLoader] Detected blob URL, using blob-to-file loading path"),await this.loadGaussianFromBlob(e,t,s);const r=Ve(e)||"unknown";console.log(`[FileLoader] Loading ${r.toUpperCase()} from URL:`,e);const n=await gt.loadUrl(e,{onProgress:o=>{this.showProgress(!0,o.stage,o.progress*100)}});if(!this.isGaussianDataSource(n))throw new Error(`Loaded data is not a valid Gaussian format: ${e}`);const i=e.split("/").pop()||e;return await this.createGaussianModel(n,i,t)}async loadGaussianFromBlob(e,t,s){console.log(`[FileLoader] Converting blob URL to File object. Hint: ${s}`);try{const r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch blob: ${r.status} ${r.statusText}`);const n=await r.blob();let i="ply";s&&s!=="gaussian"&&(i=s,console.log("type:",i));const o=`scene-model.${i}`,a=new File([n],o,{type:"application/octet-stream"});return console.log(`[FileLoader] Created File object '${o}' from blob, delegating to loadGaussianFile`),await this.loadGaussianFile(a,t)}catch(r){throw console.error("[FileLoader] Failed to load from blob URL:",r),r}}async createGaussianModel(e,t,s){this.showProgress(!0,"Creating GPU buffers...",60);const{PointCloud:r}=await vs(async()=>{const{PointCloud:l}=await Promise.resolve().then(()=>Lr);return{PointCloud:l}},void 0,import.meta.url),n=new r(s,e);if(typeof e.weightBuffer=="function"){const l=e.weightBuffer();if(l&&l.byteLength>0){const c=new Float32Array(l);n.setWeightBufferFromArray(s,c,64)}}const i=this.modelManager.generateUniqueName(t),o=Ve(t)||"ply",a=this.modelManager.addModel({name:i,visible:!0,pointCloud:n,pointCount:n.numPoints,isDynamic:!1,modelType:o});return this.showProgress(!0,"Initializing renderer...",90),this.showProgress(!1),console.log(`[FileLoader] Successfully created ${o.toUpperCase()} model:`,i),a}async loadFBXFile(e){try{return await new Bs(this.modelManager,{onProgress:(s,r)=>this.showProgress(!0,r,s),onError:s=>this.showError(s),onSuccess:s=>console.log("[FileLoader] FBX loaded successfully:",s.name)}).loadFromFile(e)}catch(t){return this.showError(`Failed to load FBX file: ${t.message}`),null}}isFileTypeSupported(e){const t=e.toLowerCase();return ut(t)||t.endsWith(".onnx")||t.endsWith(".fbx")}getSupportedExtensions(){return[".ply",".spz",".ksplat",".splat",".sog",".compressed.ply",".onnx",".fbx"]}getFileType(e){const t=e.toLowerCase();return ut(t)?"gaussian":t.endsWith(".onnx")?"onnx":t.endsWith(".fbx")?"fbx":"unknown"}getGaussianFormat(e){return Ve(e)}setCallbacks(e){this.callbacks={...this.callbacks,...e}}showProgress(e,t,s){this.callbacks.onProgress&&this.callbacks.onProgress(e,t,s)}showError(e){this.callbacks.onError?this.callbacks.onError(e):console.error("[FileLoader] Error:",e)}validateFile(e){return e.size>1073741824?{valid:!1,error:"File too large (max 1GB)"}:this.isFileTypeSupported(e.name)?this.modelManager.isAtCapacity()?{valid:!1,error:"Model limit reached. Remove models before adding more."}:{valid:!0}:{valid:!1,error:`Unsupported file type. Supported: ${this.getSupportedExtensions().join(", ")}`}}isGaussianDataSource(e){return mn(e)}}function wn(f){return Math.ceil(f/16)*16}function zt(f,e){const t=f.reduce((s,r)=>s*Math.max(1,r),1);return wn(t*e.bytesPerElement)}function Ut(f){return f.dataType}class Gt{static detectOutputPrecisionFromName(e){const t=(e||"").toLowerCase();return t.includes("_f32")||t.includes("_float32")?{dataType:"float32",bytesPerElement:4}:t.includes("_f16")||t.includes("_float16")?{dataType:"float16",bytesPerElement:2}:t.includes("_i8")||t.includes("_int8")?{dataType:"int8",bytesPerElement:1}:t.includes("_u8")||t.includes("_uint8")?{dataType:"uint8",bytesPerElement:1}:{dataType:"float16",bytesPerElement:2}}static detectFromMetadataPreferringNameSuffix(e,t){try{const s=e.outputMetadata;if(s&&typeof s=="object"){const r=o=>s instanceof Map?s.get(o)??s.get(String(o)):Array.isArray(s)&&typeof o=="number"?s[o]:s[o]??s[String(o)],n=s instanceof Map?Array.from(s.values()):Object.keys(s).map(o=>s[o]);let i=t?r(t):void 0;if(!i&&n.length&&(i=n.find(o=>o?.name===t)),!i&&t){const o=e.outputNames,a=Array.isArray(o)?o.findIndex(l=>l===t):-1;a>=0&&(i=r(a))}if(i){const o=i?.type??i?.dataType;if(o){const a=this.mapOrtTypeToPrecision(o);if(a)return a}}}}catch{}return this.detectOutputPrecisionFromName(t)}static mapOrtTypeToPrecision(e){const t=String(e).toLowerCase();if(t.includes("float16")||t==="float16"||t==="tensor(float16)")return{dataType:"float16",bytesPerElement:2};if(t.includes("float32")||t==="float32"||t==="float"||t==="tensor(float)")return{dataType:"float32",bytesPerElement:4};if(t.includes("int8")||t==="int8"||t==="tensor(int8)")return{dataType:"int8",bytesPerElement:1};if(t.includes("uint8")||t==="uint8"||t==="tensor(uint8)")return{dataType:"uint8",bytesPerElement:1}}static extractQuantizationParams(e,t){try{const r=e.model?.graph?.initializer??[];let n,i;for(const o of r){const a=o?.name;if(!a)continue;const l=a.toLowerCase();if(l.includes("scale")&&l.includes(t.toLowerCase())){const c=o?.floatData?.[0]??o?.doubleData?.[0];typeof c=="number"&&(n=c)}if((l.includes("zero")||l.includes("zeropoint"))&&l.includes(t.toLowerCase())){const c=o?.int32Data?.[0]??o?.int64Data?.[0];typeof c=="number"&&(i=c)}}return{scale:n,zeroPoint:i}}catch{return{}}}static calculateBufferSize(e,t){return zt(e,t)}}let Et=!1;class Ke{device;session;verbose=!1;static _runChain=Promise.resolve();static async runExclusive(e){const t=Ke._runChain;let s;Ke._runChain=new Promise(r=>s=r);try{await t}catch{}try{const r=await e();return s(),r}catch(r){throw s(),r}}colorMode="sh";colorDim=48;colorOutputName=null;capacity;gaussOutputName=null;gaussFields=10;gaussBuf;shBuf;countBuf;cameraMatrixBuf;projMatrixBuf;timeBuf;maxPoints;get detectedCapacity(){return this.capacity}get detectedGaussOutputName(){return this.gaussOutputName}get detectedGaussFields(){return this.gaussFields}actualPoints;inputNames;gaussianPrecision;colorPrecision;get detectedColorMode(){return this.colorMode}get detectedColorDim(){return this.colorDim}get detectedColorOutputName(){return this.colorOutputName}log(...e){this.verbose&&console.log(...e)}warn(...e){this.verbose&&console.warn(...e)}table(e){this.verbose&&console.table(e)}async init(e){this.device=e.device,this.verbose=e.verbose??!1,this.log("Initializing ONNX Runtime environment...");try{st.wasm.numThreads=1,st.logLevel="warning",st.wasm.wasmPaths="/src/ort/";try{const u=st.webgpu;if(u){const p=Object.getOwnPropertyDescriptor(u,"device");(!p||p.writable!==!1)&&(u.device=e.device)}}catch{}this.log("isGPUDevice?",e.device&&typeof e.device.createBuffer=="function"&&!!e.device.queue),this.log("ONNX Runtime environment configured with provided WebGPU device")}catch(u){this.warn("ONNX Runtime environment configuration failed:",u)}this.log(`Attempting to create ONNX session with model: ${e.modelUrl}`),this.log(`Model URL type: ${typeof e.modelUrl}`),e.modelUrl&&e.modelUrl.constructor&&this.log(`Model URL constructor: ${e.modelUrl.constructor.name}`),e.modelUrl&&typeof e.modelUrl.toString=="function"&&this.log(`Model URL toString: ${e.modelUrl.toString()}`);let t;if(e.modelUrl)if(typeof e.modelUrl=="string")t=e.modelUrl;else if(typeof e.modelUrl=="object"&&e.modelUrl&&"toString"in e.modelUrl&&typeof e.modelUrl.toString=="function")t=e.modelUrl.toString();else throw new Error(`Invalid modelUrl type: ${typeof e.modelUrl}. Expected string path.`);else throw new Error(`modelUrl is required but was ${e.modelUrl}`);if(!t||t.trim()==="")throw new Error(`modelUrl cannot be empty. Got: "${t}"`);const s=u=>({executionProviders:[{name:"webgpu",device:e.device,deviceId:0,powerPreference:"high-performance"}],graphOptimizationLevel:"extended",preferredOutputLocation:"gpu-buffer",enableGraphCapture:u&&!Et,enableProfiling:Et});let r=null;const n=async()=>{if(r)return r;this.log(` Fetching model as ArrayBuffer from: ${t}`);const u=await fetch(t);if(!u.ok)throw new Error(`Failed to fetch model: ${u.status} ${u.statusText}`);const p=await u.arrayBuffer();return this.log(` Model buffer size: ${p.byteLength} bytes`),r=new Uint8Array(p),r},i=async u=>{const p=s(u);this.log(`Creating WebGPU-only ONNX session (graphCapture=${u})...`),this.log(`Using model path: "${t}"`),this.log("Session options:",p);try{this.session=await qt.create(t,p),this.log(" ONNX session created successfully with WebGPU provider");return}catch(h){this.warn(" WebGPU session creation failed, trying ArrayBuffer approach:",h);try{const v=await n();this.session=await qt.create(v,p),this.log(" ONNX session created successfully with WebGPU provider (ArrayBuffer)");return}catch(v){console.error(" WebGPU session creation failed with both path and buffer approaches"),console.error("Path error:",h),console.error("Buffer error:",v);const y=new Error(`WebGPU execution provider required but failed to initialize (graphCapture=${u}). Ensure WebGPU is supported and enabled.`);throw y.pathError=h,y.bufferError=v,y}}};try{await i(!0)}catch(u){const h=`Onnx can not enable WebGPU Graph Capture, system will automatically close this feature and re-initialize.
Error details: ${u instanceof Error?u.message:String(u)}`,v=globalThis?.alert;typeof v=="function"?v(h):console.error(h),this.warn(" Graph Capture initialization failed, retrying without it",u),await i(!1)}this.log(" Using provided WebGPU device to avoid device mismatch"),this.log("📋 Model Input Names:",this.session.inputNames),this.log("📋 Model Output Names:",this.session.outputNames),this.inputNames=this.session.inputNames,await this.detectFromMetadata(),this.maxPoints=this.capacity||e.maxPoints||2e6,this.log(`📏 Using maxPoints: ${this.maxPoints} (detected: ${this.capacity}, config: ${e.maxPoints})`),await this.detectPrecisions(e.precisionConfig),console.log("gaussianPrecision",this.gaussianPrecision),console.log("gaussianPrecision",this.colorPrecision);const o=zt([this.maxPoints,10],this.gaussianPrecision),a=zt([this.maxPoints,this.colorDim],this.colorPrecision);this.log(` Allocating buffers (gauss ${this.gaussianPrecision.dataType}): ${o}B, (color ${this.colorPrecision.dataType}): ${a}B, channels=${this.colorDim}`),this.log(` Color mode: ${this.colorMode}, output name: '${this.colorOutputName}'`);const l=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.VERTEX;this.gaussBuf=this.device.createBuffer({size:o,usage:l,label:`gaussian_${this.gaussianPrecision.dataType}`}),this.shBuf=this.device.createBuffer({size:a,usage:l,label:`color_${this.colorPrecision.dataType}`}),this.countBuf=this.device.createBuffer({size:Math.ceil(4/16)*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,label:"num_points"});const c=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,d=u=>Math.ceil(u/16)*16;this.cameraMatrixBuf=this.device.createBuffer({size:d(16*4),usage:c,label:"camera_matrix"}),this.projMatrixBuf=this.device.createBuffer({size:d(16*4),usage:c,label:"projection_matrix"}),this.timeBuf=this.device.createBuffer({size:d(4),usage:c,label:"time_input"})}async detectFromMetadata(){this.log(" Detecting capacity and color output from model metadata...");try{await this.pickCapacityFromMetadataOrProbe()?this.log(` Capacity detected from metadata: ${this.capacity}`):this.log(" Could not detect capacity from metadata"),this.pickColorOutputFromMetadata()?this.log(` Color mode detected from metadata: ${this.colorMode} (${this.colorDim} channels)`):(this.log(" Could not detect color type from metadata, using defaults"),this.colorMode="sh",this.colorDim=48,this.colorOutputName="sh_f16")}catch(e){console.error(" Metadata detection failed:",e),this.warn(" Falling back to defaults"),this.colorMode="sh",this.colorDim=48,this.colorOutputName="sh_f16",this.log(` Detection completed with defaults: capacity=${this.capacity||"none"}, color=${this.colorMode} (${this.colorDim} channels)`)}}async detectPrecisions(e){try{const r=this.session.outputNames||[],n=this.session.outputMetadata;if(this.verbose&&(console.log("[ONNX][Debug] outputNames =",r),n))for(const i in n){const o=n[i],a=o?.shape?`[${o.shape.join(", ")}]`:"unknown";console.log(`[ONNX][Meta] idx=${i} name='${o?.name}' type='${o?.type??o?.dataType}' shape=${a}`)}}catch{}const t=this.gaussOutputName||(this.session.outputNames?.find(r=>/gauss|gaussian/i.test(r))??"gaussian_f16"),s=Gt.detectFromMetadataPreferringNameSuffix(this.session,t);if(this.gaussianPrecision=s,this.colorPrecision={...s},s.dataType==="int8"||s.dataType==="uint8"){const r=Gt.extractQuantizationParams(this.session,t);this.gaussianPrecision.scale=r.scale??1,this.gaussianPrecision.zeroPoint=r.zeroPoint??0;const n=this.colorOutputName||"sh_f16",i=Gt.extractQuantizationParams(this.session,n);this.colorPrecision.scale=i.scale??1,this.colorPrecision.zeroPoint=i.zeroPoint??0}this.log(`Precision detected: gaussian=${this.gaussianPrecision.dataType} (${this.gaussianPrecision.bytesPerElement}B), color=${this.colorPrecision.dataType}`),this.detectedPrecisionLabel=this.gaussianPrecision?.dataType||"float16"}async pickCapacityFromMetadataOrProbe(){this.log("🧭 Detecting capacity from gaussian output metadata...");try{const e=this.session;this.log(" DEBUG: session object keys:",Object.keys(e));const t=e.outputMetadata;this.log(" DEBUG: outputMetadata:",t);for(const s of Object.keys(t))if(console.log(` Found gaussian candidate in outputMetadata: '${s}' dims=${t[s]?.shape?`[${t[s]?.shape.join(", ")}]`:"undefined"}`),t[s].name.startsWith("gauss")||t[s].name.startsWith("gaussian")){const r=t[s]?.shape;return console.log(` Found gaussian candidate in outputMetadata: '${s}' dims=${r?`[${r.join(", ")}]`:"undefined"}`),this.gaussOutputName=t[s].name,this.gaussFields=r[-1],this.capacity=r[0],this.log(`🦭 Capacity from metadata: ${t[s].name} -> N=${this.capacity}, fields=${this.gaussFields}`),!0}return console.log("🔬 Fallback: Running minimal CPU inference to detect shapes..."),await this.detectCapacityFromCPUInference()}catch(e){return console.warn(" Error accessing output metadata:",e),await this.detectCapacityFromCPUInference()}}async detectCapacityFromCPUInference(){this.log("🔬 Running minimal CPU inference to detect model dimensions...");try{const e={};for(const r of this.inputNames)r.toLowerCase().includes("camera")||r.toLowerCase().includes("view")||r.toLowerCase().includes("matrix")?e[r]=new Ce("float32",new Float32Array(16).fill(0),[4,4]):r.toLowerCase().includes("time")||r==="t"?e[r]=new Ce("float32",new Float32Array([0]),[1]):(r.toLowerCase().includes("projection")||r.toLowerCase().includes("proj"))&&(e[r]=new Ce("float32",new Float32Array(16).fill(0),[4,4]));this.log(` Running CPU inference with inputs: ${Object.keys(e).join(", ")}`);const t=await this.session.run(e),s=this.session.outputNames.filter(r=>/gauss|gaussian|means|cov|gaussian_f16/i.test(r));for(const r of s){const n=t[r];if(n&&n.dims.length>=2){const i=n.dims,o=i[i.length-1],a=i[0];if(this.log(` Found gaussian output '${r}': shape [${i.join(", ")}]`),(o===10||o===9)&&Number.isFinite(a)&&a>0)return this.gaussOutputName=r,this.gaussFields=o,this.capacity=a,this.log(` Capacity detected from CPU inference: ${r} -> N=${this.capacity}, fields=${this.gaussFields}`),this.detectColorFromCPUResult(t),!0}}return this.log(" No gaussian output found with expected dimensions"),!1}catch(e){return this.warn(" CPU inference detection failed:",e),!1}}detectColorFromCPUResult(e){for(const[t,s]of Object.entries(e)){const r=s.dims,n=t.toLowerCase();if((n.includes("color")||n.includes("sh")||n.includes("rgb"))&&r.length>=2){const i=r[r.length-1];if(i===48){this.colorMode="sh",this.colorDim=48,this.colorOutputName=t,this.log(` Color mode detected from CPU inference: SH (${i} channels) - ${t}`);return}else if(i===3||i===4){this.colorMode="rgb",this.colorDim=i===3?4:i,this.colorOutputName=t,this.log(` Color mode detected from CPU inference: RGB (${i} channels) - ${t}`);return}else if(i===12||i===27){this.colorMode="sh",this.colorDim=i,this.colorOutputName=t,this.log(` Color mode detected from CPU inference: SH (${i} channels) - ${t}`);return}}}}pickColorOutputFromMetadata(){this.log(" Detecting color output type from metadata dimensions...");try{const t=this.session.outputMetadata??{};for(const s of this.session.outputNames){const r=s.toLowerCase();if(r.includes("color")||r.includes("sh")||r.includes("rgb")){let n=-1;for(const a in t)if(t[a]?.name===s){n=Number(a);break}if(n===-1)continue;const o=t[n]?.shape;if(this.log(` Found potential color output: '${s}' dims=${o?`[${o.join(", ")}]`:"undefined"}`),o&&o.length>=2){const a=o[o.length-1];if(a===48)return this.colorMode="sh",this.colorDim=48,this.colorOutputName=s,this.log(` Detected SH from dimensions: '${s}' → ${a} channels`),!0;if(a===3||a===4)return this.colorMode="rgb",this.colorDim=a,this.colorOutputName=s,this.log(` Detected RGB from dimensions: '${s}' → ${a} channels`),!0;if(a===12||a===27)return this.colorMode="sh",this.colorDim=a,this.colorOutputName=s,this.log(` Detected SH from dimensions: '${s}' → ${a} channels`),!0;this.warn(` Found color output '${s}' with unexpected ${a} channels`)}}}}catch(t){this.warn(" Error accessing color output metadata:",t)}const e=["sh_f16","spherical_harmonics","color_sh"];for(const t of e)if(this.session.outputNames.includes(t))return this.colorMode="sh",this.colorDim=48,this.colorOutputName=t,this.log(`📝 Found standard SH output: '${t}' → 48 channels (name-based fallback)`),!0;return this.log(" No color output detected from metadata"),!1}updateInputBuffers(e,t,s){if(e&&(this.log(" DEBUG: Camera Matrix passed to ONNX:"),this.log(e),this.table([e.slice(0,4),e.slice(4,8),e.slice(8,12),e.slice(12,16)]),this.device.queue.writeBuffer(this.cameraMatrixBuf,0,e.buffer)),t&&(this.log(" DEBUG: Projection Matrix passed to ONNX:"),this.log(t),this.table([t.slice(0,4),t.slice(4,8),t.slice(8,12),t.slice(12,16)]),this.device.queue.writeBuffer(this.projMatrixBuf,0,t.buffer)),s!==void 0){this.log(` DEBUG: Time passed to ONNX: ${s}`);const r=new Float32Array([s]);this.device.queue.writeBuffer(this.timeBuf,0,r.buffer)}}async runInference(e={}){return Ke.runExclusive(async()=>{this.log(" GPU DIRECT: Running WebGPU inference with IOBinding..."),this.log(`📏 Using pre-allocated buffers for ${this.maxPoints} points`),this.updateInputBuffers(e.cameraMatrix,e.projectionMatrix,e.time);const t=this.maxPoints,s={};for(const o of this.inputNames)o.toLowerCase().includes("camera")||o.toLowerCase().includes("view")||o.toLowerCase().includes("matrix")?(s[o]=Ce.fromGpuBuffer(this.cameraMatrixBuf,{dataType:"float32",dims:[4,4]}),this.log(`  📷 Created GPU camera matrix for '${o}'`)):o.toLowerCase().includes("time")||o==="t"?(s[o]=Ce.fromGpuBuffer(this.timeBuf,{dataType:"float32",dims:[1]}),this.log(`  ⏰ Created GPU time input for '${o}'`)):(o.toLowerCase().includes("projection")||o.toLowerCase().includes("proj"))&&(s[o]=Ce.fromGpuBuffer(this.projMatrixBuf,{dataType:"float32",dims:[4,4]}),this.log(`  📐 Created GPU projection matrix for '${o}'`));const r=this.gaussOutputName||"gaussian_f16",n={};n[r]=Ce.fromGpuBuffer(this.gaussBuf,{dataType:Ut(this.gaussianPrecision),dims:[t,10]}),n.num_points=Ce.fromGpuBuffer(this.countBuf,{dataType:"int32",dims:[1]});const i=this.colorOutputName||"sh_f16";if(this.log("----- real needed color channels "+this.colorDim),this.session.outputNames.includes(i))n[i]=Ce.fromGpuBuffer(this.shBuf,{dataType:Ut(this.colorPrecision),dims:[t,this.colorDim]});else{this.warn(` Color output '${i}' not found in model outputs`),this.warn(`Available outputs: ${this.session.outputNames.join(", ")}`);const o=this.session.outputNames.find(a=>a.toLowerCase().includes("color")||a.toLowerCase().includes("sh")||a.toLowerCase().includes("rgb"));if(o)this.warn(` Using possible color output: '${o}'`),n[o]=Ce.fromGpuBuffer(this.shBuf,{dataType:Ut(this.colorPrecision),dims:[t,this.colorDim]});else throw new Error(`No suitable color output found in model. Available outputs: ${this.session.outputNames.join(", ")}`)}this.log(` IOBinding configured: gaussian[${t}x10], ${this.colorMode}[${t}x${this.colorDim}]`),this.log(` Input feeds: ${Object.keys(s).join(", ")}`),this.log(` Output fetches: ${Object.keys(n).join(", ")}`);try{await this.session.run(s,n),this.log(" GPU DIRECT SUCCESS: Inference completed with full GPU pipeline");try{const o=await Ts(this.device,this.countBuf);this.log(` DEBUG: ONNX wrote count=${o} to GPU buffer`),this.actualPoints=o}catch(o){this.warn(" Could not read count buffer for debugging:",o)}}catch(o){console.error(" WebGPU IOBinding failed:",o);const a=o instanceof Error?o.message:String(o);throw console.error("name:",o?.name,"message:",o?.message,"stack:",o?.stack),new Error(`WebGPU inference required but failed: ${a}`)}})}destroy(){this.gaussBuf?.destroy?.(),this.shBuf?.destroy?.(),this.countBuf?.destroy?.(),this.cameraMatrixBuf?.destroy?.(),this.projMatrixBuf?.destroy?.(),this.timeBuf?.destroy?.()}}class _n{constructor(e){this.cfg=e}io;inited=!1;async initialize(e){const t=e||this.cfg.device;if(!t)throw new Error("WebGPU device is required. Pass device to initialize() or provide it in config.");this.io=new Ke,await this.io.init({modelUrl:this.cfg.modelUrl,maxPoints:this.cfg.maxPoints,device:t,verbose:!1,precisionConfig:this.cfg.precisionConfig}),this.inited=!0}async generate(e={}){if(!this.inited)throw new Error("ONNXGenerator not initialized");await this.io.runInference(e)}getGaussianBuffer(){return this.io.gaussBuf}getSHBuffer(){return this.io.shBuf}getCountBuffer(){return this.io.countBuf}getDevice(){return this.io.device}getInputNames(){return this.io.inputNames||[]}getDetectedCapacity(){return this.io.detectedCapacity}getDetectedColorMode(){return this.io.detectedColorMode}getDetectedColorDim(){return this.io.detectedColorDim}getActualMaxPoints(){return this.io.maxPoints}getGaussianPrecision(){return this.io.gaussianPrecisionInfo??this.io.gaussianPrecision}getColorPrecision(){return this.io.colorPrecisionInfo??this.io.colorPrecision}dispose(){this.io?.destroy()}}class vn{constructor(e){this.modelManager=e}generators=new Map;pointClouds=new Map;async loadONNXModel(e,t,s,r,n,i={}){console.log(i),console.log(`Loading ONNX model from: ${t}`);const{staticInference:o=!0,maxPoints:a,debugLogging:l=!1}=i,c=new _n({modelUrl:t,maxPoints:a,debugLogging:l,precisionConfig:i.precisionConfig});await c.initialize(e);const d=c.getInputNames();if(!o&&d.length>0){const P={cameraMatrix:s,projectionMatrix:r,time:0};console.log(`Initial data for dynamic model - inputs: ${d.join(", ")}`),await c.generate(P)}else await c.generate({}),console.log(o,d.length,d),console.log("Static model - ran single inference with no inputs");const u=c.io?.actualPoints||a||0,p=c.io?.detectedColorMode||"sh",h=c.io?.detectedColorDim||48,v=c.io?.detectedColorOutputName||null,y=new Ze(e,c.getGaussianBuffer(),c.getSHBuffer(),a||c.getActualMaxPoints(),c.getCountBuffer(),h,{gaussian:c.getGaussianPrecision?.(),color:c.getColorPrecision?.()}),g=c.io?.detectedPrecisionLabel||"float16",m=n||`ONNX Model (${g})`,x=this.modelManager.generateUniqueName(m);l&&(console.log("ONNX Color Detection Results:"),console.log(`  Color Mode: ${p}`),console.log(`  Color Channels: ${h}`),console.log(`  Color Output Name: ${v||"default"}`),console.log(`  Actual Points: ${u}`),console.log(`  Max Points: ${a}`)),o||(y.setOnnxGenerator(c),l&&console.log("🎬 Dynamic mode enabled - will update per frame"));const b=this.modelManager.addModel({name:x,visible:!0,pointCloud:y,pointCount:u,isDynamic:!o,modelType:"onnx",colorMode:p,colorChannels:h});return this.generators.set(b.id,c),this.pointClouds.set(b.id,y),l&&console.log(`ONNX Model '${x}' (ID: ${b.id}) registered with isolated resources - color mode: ${p} (${h} channels)`),b}async loadONNXFromFile(e,t,s,r){const n=URL.createObjectURL(t);try{const i=new Float32Array(16),o=new Float32Array(16);return yr(i,[0,0,5],[0,0,0],[0,1,0]),wr(o,Math.PI/4,16/9,.01,1e3),await this.loadONNXModel(e,n,s||i,r||o,t.name.replace(".onnx",""),{staticInference:!0,maxPoints:4e6,debugLogging:!0})}finally{URL.revokeObjectURL(n)}}async updateCameraMatrices(e,t,s){console.log(`Updating camera matrices for model: ${e}`)}disposeModel(e){const t=this.generators.get(e),s=this.pointClouds.get(e);t?.dispose(),s?.dispose?.(),this.generators.delete(e),this.pointClouds.delete(e),console.log(`ONNXManager: Disposed model ${e}`)}dispose(){for(const[e,t]of this.generators.entries())t?.dispose(),console.log(`ONNXManager: Disposed generator ${e}`);for(const[e,t]of this.pointClouds.entries())t?.dispose?.(),console.log(`ONNXManager: Disposed point cloud ${e}`);this.generators.clear(),this.pointClouds.clear(),console.log("ONNXManager: All resources disposed")}getGenerator(e){return this.generators.get(e)}getPointCloud(e){return this.pointClouds.get(e)}hasONNXModels(){return this.generators.size>0}getONNXModels(){return Array.from(this.generators.keys())}getONNXPerformanceStats(){return{modelCount:this.generators.size,totalGenerators:this.generators.size,totalPointClouds:this.pointClouds.size}}}class bn{models=[];maxModels;constructor(e=1e4){this.maxModels=e}addModel(e){if(this.models.length>=this.maxModels)throw new Error(`Reached model limit (${this.maxModels}). Remove models before adding more.`);const s={id:`${Date.now()}-${Math.random().toString(16).slice(2,8)}`,...e};return this.models.push(s),console.log(`Model added: ${s.name} (${s.pointCount.toLocaleString()} points, ${s.modelType})`),s}removeModel(e){const t=this.models.findIndex(s=>s.id===e);if(t>=0){const s=this.models[t];return this.models.splice(t,1),console.log(`Model removed: ${s.name}`),!0}return!1}getModels(){return this.models.map(e=>({id:e.id,name:e.name,visible:e.visible,pointCount:e.pointCount||0,isDynamic:e.isDynamic,modelType:e.modelType,colorMode:e.colorMode,colorChannels:e.colorChannels}))}getModelWithPointCloud(e,t){return t?this.models.find(s=>s.id===t)||null:this.models.find(s=>s.modelType===e)||null}getFullModels(){return[...this.models]}getModelsByType(e){return this.models.filter(t=>t.modelType===e)}getVisibleModels(){return this.models.filter(e=>e.visible)}getDynamicModels(){return this.models.filter(e=>e.isDynamic)}setModelVisibility(e,t){const s=this.models.find(r=>r.id===e);return s?(s.visible=t,console.log(`Model ${s.name}: ${t?"shown":"hidden"}`),!0):!1}getTotalVisiblePoints(){return this.models.filter(e=>e.visible).reduce((e,t)=>e+t.pointCount,0)}getTotalPoints(){return this.models.reduce((e,t)=>e+t.pointCount,0)}isAtCapacity(){return this.models.length>=this.maxModels}getModelCount(){return this.models.length}getRemainingCapacity(){return Math.max(0,this.maxModels-this.models.length)}clearAllModels(){const e=this.models.length;this.models=[],console.log(`Cleared ${e} models`)}findModelByName(e){return this.models.find(t=>t.name===e)||null}setModelPosition(e,t,s,r){return this.updateModelTransform(e,{translation:_e(t,s,r)})}setModelRotation(e,t,s,r){return this.updateModelTransform(e,{rotationEuler:_e(t,s,r)})}setModelScale(e,t){const r=Array.isArray(t)?_e(Math.max(1e-4,t[0]),Math.max(1e-4,t[1]),Math.max(1e-4,t[2])):_e(Math.max(1e-4,t),Math.max(1e-4,t),Math.max(1e-4,t));return this.updateModelTransform(e,{scale:r})}setModelTransform(e,t){const s=this.models.find(r=>r.id===e);return s?(s.pointCloud.setTransform(t),console.log(`Model ${s.name} transform updated`),!0):!1}getModelPosition(e){const t=this.models.find(s=>s.id===e);if(t){const s=t.pointCloud.transform;return[s[12],s[13],s[14]]}return null}getModelRotation(e){const t=this.models.find(p=>p.id===e);if(!t)return null;const s=Mt(t.pointCloud.transform),r=We();if(!it)return[0,0,0];it(r,s);const n=2*(r[3]*r[0]+r[1]*r[2]),i=1-2*(r[0]*r[0]+r[1]*r[1]),o=Math.atan2(n,i),a=2*(r[3]*r[1]-r[2]*r[0]),l=Math.abs(a)>=1?Math.sign(a)*Math.PI/2:Math.asin(a),c=2*(r[3]*r[2]+r[0]*r[1]),d=1-2*(r[1]*r[1]+r[2]*r[2]),u=Math.atan2(c,d);return[o,l,u]}getModelScale(e){const t=this.models.find(n=>n.id===e);if(!t)return null;const s=Mt(t.pointCloud.transform),r=Ue();return ot?(ot(r,s),[r[0],r[1],r[2]]):[1,1,1]}getModelTransform(e){const t=this.models.find(s=>s.id===e);return t?t.pointCloud.transform:null}updateModelTransform(e,t){const s=this.models.find(l=>l.id===e);if(!s)return console.log(`Model with ID ${e} not found for transform update`),!1;const r=Mt(s.pointCloud.transform),n=Ue();_r?.(n,r);const i=Ue();ot?ot(i,r):je(i,1,1,1);const o=We();if(it?it(o,r):vr(o),t.translation&&Zt(n,t.translation),t.scale&&Zt(i,t.scale),t.rotationEuler){const l=_e(t.rotationEuler[0]*180/Math.PI,t.rotationEuler[1]*180/Math.PI,t.rotationEuler[2]*180/Math.PI);br(o,l[0],l[1],l[2])}const a=ht();return xr(a,o,n,i),s.pointCloud.setTransform(a),console.log(`Model ${s.name} transform updated (pos=${n.join(",")}, scale=${i.join(",")})`),!0}hasModelWithName(e){return this.models.some(t=>t.name===e)}generateUniqueName(e){if(!this.hasModelWithName(e))return e;let t=1,s;do s=`${e} (${t})`,t++;while(this.hasModelWithName(s));return s}}const xn="/models/onnx_dummy.onnx";async function Vt(){const f=globalThis;if(f.__ORT_WEBGPU_SINGLETON__)return f.__ORT_WEBGPU_SINGLETON__;try{const e=await vs(()=>import("./vendor-onnxruntime-web-DpEzweEQ.js"),[],import.meta.url);return f.__ORT_WEBGPU_SINGLETON__=e,e}catch{return null}}async function Pn(f){const e=await Vt();if(!e)return;e.env.wasm.numThreads=1,e.env.logLevel="warning",e.env.wasm.wasmPaths?console.log("[WebGPU] Using existing WASM paths:",e.env.wasm.wasmPaths):(e.env.wasm.wasmPaths="/src/ort/",console.log("[WebGPU] Setting default WASM paths:",e.env.wasm.wasmPaths));const t=await fetch(f);if(!t.ok)throw new Error(`[ORT] Failed to fetch dummy model: ${f}`);const s=await t.arrayBuffer();await e.InferenceSession.create(s,{executionProviders:["webgpu"]})}async function Sn(f){const e=await Vt();if(!e)return null;try{const t=e.env.webgpu;if(t){const s=t.device;if(s){const r=s instanceof Promise?await s:s;if(r)return console.log("[WebGPU] Reusing existing ORT device from obtainOrtDevice"),r}}}catch(t){console.warn("[WebGPU] Could not check existing ORT device:",t)}if(f.adapter)try{const t=e.env.webgpu||{};e.env.webgpu=t;const s=t.adapter;if(s){if(s!==f.adapter)try{const r=Object.getOwnPropertyDescriptor(t,"adapter");r&&r.writable!==!1?t.adapter=f.adapter:console.warn("[WebGPU] Adapter is read-only, keeping existing adapter")}catch(r){console.warn("[WebGPU] Could not update adapter (may be read-only, which is OK):",r)}}else try{t.adapter=f.adapter}catch(r){console.warn("[WebGPU] Could not set adapter (may be read-only):",r)}}catch(t){console.warn("[WebGPU] Could not access ORT webgpu environment:",t)}if(f.adapter)try{const t=e.env.webgpu||{};if(e.env.webgpu=t,!t.device){const s=await Us(f.adapter);return t.device=s,t.adapter||(t.adapter=f.adapter),console.log("[WebGPU] Created app-owned device with requiredLimits; ORT backend will use it from env.webgpu.device."),s}}catch(t){console.warn("[WebGPU] Failed to create shared device for ORT:",t)}if(f.adapter&&f.dummyModelUrl)try{const t=e.env.webgpu||{};e.env.webgpu=t,t.adapter||(t.adapter=f.adapter),await Pn(f.dummyModelUrl);const s=e.env.webgpu?.device;if(s){const r=s instanceof Promise?await s:s;if(r)return console.log("[WebGPU] ORT created device via dummy session."),r}}catch(t){console.warn("[WebGPU] Failed to obtain device via ORT dummy session:",t)}try{const t=e.env.webgpu;if(t){const s=t.device;if(s){const r=s instanceof Promise?await s:s;if(r)return r}}}catch(t){console.warn("[WebGPU] Could not get device from ORT env:",t)}return null}async function Us(f){const e=[];f.features.has("shader-f16")&&e.push("shader-f16"),f.features.has("timestamp-query")&&e.push("timestamp-query"),f.features.has("chromium-experimental-timestamp-query-inside-passes")&&e.push("chromium-experimental-timestamp-query-inside-passes");const t=f.limits,s=t.maxStorageBuffersPerShaderStage??8,r=Math.min(10,s);r<9&&console.warn(`[WebGPU] maxStorageBuffersPerShaderStage=${r} < 9; preprocess pipeline may fail on this adapter.`);const n={maxStorageBufferBindingSize:t.maxStorageBufferBindingSize,maxBufferSize:t.maxBufferSize??t.maxStorageBufferBindingSize,maxComputeWorkgroupStorageSize:Math.min(32768,t.maxComputeWorkgroupStorageSize),maxComputeInvocationsPerWorkgroup:t.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.maxComputeWorkgroupSizeZ,maxStorageBuffersPerShaderStage:r},i=await f.requestDevice({requiredFeatures:e,requiredLimits:n});return i.label||(i.label="app-device"),i}async function Mn(f,e={}){if(!navigator.gpu)return console.error("WebGPU not supported in this environment."),null;const t=await Vt();let s=null,r=null;if(e.preferShareWithOrt!==!1&&t)try{const o=t.env.webgpu;if(o){const a=o.device;if(a&&(s=a instanceof Promise?await a:a,s)){const l=s.limits.maxStorageBuffersPerShaderStage??8;l<9?(console.warn(`[WebGPU] Existing ORT device maxStorageBuffersPerShaderStage=${l} < 9; ignore and re-create.`),s=null):(console.log("[WebGPU] Reusing existing ORT device for new canvas"),r=o.adapter)}}}catch(o){console.warn("[WebGPU] Could not get existing ORT device:",o)}if(s){if(!r){try{r=t?.env?.webgpu?.adapter}catch{}r||(r=await navigator.gpu.requestAdapter({powerPreference:e.adapterPowerPreference}))}}else{if(r=await navigator.gpu.requestAdapter({powerPreference:e.adapterPowerPreference}),!r)throw new Error("No WebGPU adapter found");if(e.preferShareWithOrt!==!1&&t)if(s=await Sn({adapter:r,dummyModelUrl:e.dummyModelUrl??null}),s){if(s&&!r)try{r=t.env?.webgpu?.adapter}catch{}}else{const o=!!e.allowOwnDeviceWhenOrtPresent,a="[WebGPU init] ORT detected but failed to obtain its device. "+(o?"Proceeding with app-owned device (do NOT use ORT later).":"Refusing to create a separate device to avoid future mismatch.- Provide a valid dummyModelUrl, ORdisable preferShareWithOrt, ORensure a single ORT import.");if(console.warn(a),!o)throw new Error("ORT present but cannot acquire ORT device (strict mode)")}if(!s){if(!r&&(r=await navigator.gpu.requestAdapter({powerPreference:e.adapterPowerPreference}),!r))throw new Error("No WebGPU adapter found");s=await Us(r)}}s.pushErrorScope("out-of-memory"),s.pushErrorScope("validation"),await s.popErrorScope().then(o=>console.warn("validation:",o)),await s.popErrorScope().then(o=>console.warn("oom:",o)),s.lost.then(o=>console.error("device lost:",o.message,o.reason));const n=f.getContext("webgpu");if(!n)throw new Error("Failed to get WebGPU canvas context");const i=navigator.gpu.getPreferredCanvasFormat();return n.configure({device:s,format:i,alphaMode:"premultiplied"}),console.log(`[WebGPU] initialized. format=${i}, sharedWithORT=${!!(t&&e.preferShareWithOrt!==!1)}`),{device:s,context:n,format:i}}_e(0,1,0);async function Wn(f){const e=await Mn(f,{dummyModelUrl:xn,adapterPowerPreference:"high-performance",allowOwnDeviceWhenOrtPresent:!1});if(!e)return Promise.reject("initWebGPU_onnx failed!");const t=new _s({canvas:f,antialias:!0,forceWebGL:!1,context:e.context,device:e.device});return await t.init(),t.setClearColor(new ft("#808080"),1),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(f.clientWidth,f.clientHeight,!1),console.log("Init ThreeJS Successfully!","Width:",f.clientWidth,"Height",f.clientHeight),t}class Cn{transformControls;camera;renderer;overlayScene;currentObject=null;pivotProxy=null;callbacks={};options;pivotMode="aabb";pivotWorld=new B;pivotHelper=null;isDragging=!1;lastPivotWorld=new B;changeStartSnapshot=null;constructor(e,t,s={},r){this.camera=e,this.renderer=t,this.overlayScene=r??null,this.options={mode:"translate",showX:!0,showY:!0,showZ:!0,space:"local",snap:!1,translationSnap:1,rotationSnap:Math.PI/4,scaleSnap:.1,showHelper:!0,size:1,colors:{x:"#ff0000",y:"#00ff00",z:"#0000ff"},pivotMode:"aabb",pivot:void 0,showPivotHelper:!0,...s},this.options.pivot&&this.pivotWorld.copy(this.options.pivot),this.transformControls=new ar(e,t.domElement),this.setupTransformControls(),this.setupEventListeners(),this.pivotProxy=new ms,this.pivotProxy.name="VisionaryPivotProxy",this.pivotProxy.userData=this.pivotProxy.userData||{},this.pivotProxy.userData.__visionaryEditorHelper=!0}setupTransformControls(){const e=this.transformControls,t=s=>s==="normal"?"translate":s;e.setMode(t(this.options.mode)),e.setSpace(this.options.space),e.setSize(this.options.size),e.showX=this.options.showX,e.showY=this.options.showY,e.showZ=this.options.showZ,this.options.snap&&(e.translationSnap=this.options.translationSnap,e.rotationSnap=this.options.rotationSnap,e.scaleSnap=this.options.scaleSnap)}setupEventListeners(){const e=this.transformControls;e.addEventListener("change",()=>{this.currentObject&&(this.syncTransformFromProxyToTarget(),this.callbacks.onChange&&this.callbacks.onChange(this.createEvent("change")))}),e.addEventListener("dragging-changed",t=>{this.currentObject&&(this.isDragging=t.value,t.value?(this.snapshotChangeStart(),this.callbacks.onChangeStart&&this.callbacks.onChangeStart(this.createEvent("changeStart"))):(this.callbacks.onChangeEnd&&this.callbacks.onChangeEnd(this.createEvent("changeEnd")),this.options.mode!=="translate"&&this.updatePivotProxyTransform(),this.changeStartSnapshot=null))}),e.addEventListener("objectChange",()=>{this.currentObject&&(this.syncTransformFromProxyToTarget(),this.callbacks.onObjectChange&&this.callbacks.onObjectChange(this.createEvent("objectChange")))})}createEvent(e){if(!this.currentObject)throw new Error("No current object set");return{type:e,target:this.currentObject,mode:this.options.mode,translation:this.currentObject.position.clone(),rotation:this.currentObject.rotation.clone(),scale:this.currentObject.scale.clone(),pivot:this.pivotWorld.clone()}}attachToScene(e){this.overlayScene=e;const t=this.transformControls.getHelper();t.name=t.name||"VisionaryTransformControls",t.userData=t.userData||{},t.userData.__visionaryEditorHelper=!0,e.add(t),t.traverse(s=>{if(s&&s.isObject3D){s.renderOrder=9999;const r=s.material;r&&(Array.isArray(r)?r:[r]).forEach(i=>{i&&i.isMaterial&&(i.depthTest=!1,i.depthWrite=!1,i.transparent=!0)})}}),this.pivotProxy&&!this.pivotProxy.parent&&e.add(this.pivotProxy),this.options.showPivotHelper&&this.ensurePivotHelper(e)}detachFromScene(e){e.remove(this.transformControls.getHelper()),this.pivotProxy&&this.pivotProxy.parent===e&&e.remove(this.pivotProxy),this.pivotHelper&&this.pivotHelper.parent===e&&e.remove(this.pivotHelper)}setTarget(e){if(this.currentObject=e,e){if(this.pivotProxy){const t=this.overlayScene??e.parent??e.scene??null;t&&this.pivotProxy.parent!==t&&(this.pivotProxy.parent?.remove(this.pivotProxy),t.add(this.pivotProxy))}this.pivotProxy&&(this.transformControls.attach(this.pivotProxy),this.updatePivotProxyTransform()),this.updatePivotHelper()}else this.transformControls.detach()}getTarget(){return this.currentObject}setMode(e){this.options.mode=e;const t=e==="normal"?"translate":e;this.transformControls.setMode(t)}getMode(){return this.options.mode}setSpace(e){this.options.space=e,this.transformControls.setSpace(e),this.isDragging||this.updatePivotProxyTransform(),globalThis.GS_DEBUG_FLAG&&(console.log(`[GizmoController] Space set to: ${e}`),console.log(`[GizmoController] TransformControls.space: ${this.transformControls.space}`))}getSpace(){return this.options.space}setSize(e){this.options.size=e,this.transformControls.setSize(e)}setEnabled(e){this.transformControls.enabled=e}getEnabled(){return this.transformControls.enabled}setCallbacks(e){this.callbacks={...this.callbacks,...e}}update(){this.pivotWorld.equals(this.lastPivotWorld)||(this.isDragging||this.updatePivotProxyTransform(),this.lastPivotWorld.copy(this.pivotWorld)),this.updatePivotHelper()}dispose(){this.transformControls.dispose(),this.currentObject=null,this.callbacks={}}getTransformControls(){return this.transformControls}setPivotMode(e){this.pivotMode=e}getPivotMode(){return this.pivotMode}setPivot(e){this.pivotWorld.copy(e),this.updatePivotProxyTransform(),this.updatePivotHelper(),this.lastPivotWorld.copy(e)}getPivot(){return this.pivotWorld.clone()}snapshotChangeStart(){if(!this.currentObject||!this.pivotProxy)return;const e=this.currentObject,t=this.pivotProxy;e.updateWorldMatrix(!0,!1),t.updateWorldMatrix(!0,!1);const s=e.matrixWorld.clone(),r=t.matrixWorld.clone(),n=new B,i=new Le,o=new B;s.decompose(n,i,o);const a=new B,l=new Le,c=new B;r.decompose(a,l,c);const d=new ke;if(e.parent){const u=e.parent.matrixWorld.clone();d.copy(u).invert()}else d.identity();this.changeStartSnapshot={objPosW:n.clone(),objQuatW:i.clone(),objScaleW:o.clone(),pivotProxyPosW:a.clone(),pivotProxyQuatW:l.clone(),pivotProxyScaleW:c.clone(),parentInvMatrix:d}}updatePivotProxyTransform(){if(!this.pivotProxy)return;const e=this.pivotProxy,t=this.currentObject,s=new Le;if(this.options.space==="local"&&t){t.updateWorldMatrix(!0,!1);const a=new B,l=new B;t.matrixWorld.decompose(a,s,l)}else s.identity();const r=new ke().compose(this.pivotWorld,s,new B(1,1,1));if(e.parent){e.parent.updateMatrixWorld();const a=new ke().copy(e.parent.matrixWorld).invert();r.premultiply(a)}const n=new B,i=new Le,o=new B;r.decompose(n,i,o),e.position.copy(n),e.quaternion.copy(i),e.scale.set(1,1,1)}syncTransformFromProxyToTarget(){if(!this.currentObject||!this.pivotProxy||!this.changeStartSnapshot)return;const e=this.currentObject,t=this.pivotProxy,{objPosW:s,objQuatW:r,objScaleW:n,pivotProxyPosW:i,pivotProxyQuatW:o,pivotProxyScaleW:a,parentInvMatrix:l}=this.changeStartSnapshot;t.updateWorldMatrix(!0,!1);const c=t.matrixWorld.clone(),d=new B,u=new Le,p=new B;if(c.decompose(d,u,p),this.options.mode==="translate"){const h=new B().subVectors(d,i),v=new B().addVectors(s,h),y=new B().copy(v).applyMatrix4(l);e.position.copy(y),this.pivotWorld.copy(d)}else if(this.options.mode==="rotate"){const h=new Le().multiplyQuaternions(u,o.clone().invert()),y=new B().subVectors(s,i).clone().applyQuaternion(h),g=new B().addVectors(d,y),m=new B().copy(g).applyMatrix4(l);e.position.copy(m),e.quaternion.multiplyQuaternions(h,r)}else if(this.options.mode==="scale"){const h=new B(p.x/(a.x||1),p.y/(a.y||1),p.z/(a.z||1)),y=new B().subVectors(s,i).clone().multiply(h),g=new B().addVectors(d,y),m=new B().copy(g).applyMatrix4(l);e.position.copy(m),e.scale.multiplyVectors(n,h)}}ensurePivotHelper(e){if(this.pivotHelper){this.pivotHelper.userData=this.pivotHelper.userData||{},this.pivotHelper.userData.__visionaryEditorHelper=!0,this.pivotHelper.name=this.pivotHelper.name||"VisionaryPivotHelper",e.children.includes(this.pivotHelper)||e.add(this.pivotHelper),this.pivotHelper.renderOrder=9999;const r=this.pivotHelper.material;r&&(Array.isArray(r)?r:[r]).forEach(i=>{i&&i.isMaterial&&(i.depthTest=!1,i.depthWrite=!1,i.transparent=!0)});return}const t=new lr(.3*(this.options.size||1));t.matrixAutoUpdate=!0,t.name="VisionaryPivotHelper",t.userData=t.userData||{},t.userData.__visionaryEditorHelper=!0,t.renderOrder=9999;const s=t.material;s&&(Array.isArray(s)?s:[s]).forEach(n=>{n&&n.isMaterial&&(n.depthTest=!1,n.depthWrite=!1,n.transparent=!0)}),this.pivotHelper=t,e.add(t),this.updatePivotHelper()}updatePivotHelper(){this.pivotHelper&&(this.pivotHelper.position.copy(this.pivotWorld),this.pivotHelper.visible=!!this.options.showPivotHelper)}}class Nn{scene;overlayScene;camera;renderer;gizmoController;currentTarget=null;gizmoEnabled=!0;callbacks={};cameraControls=null;constructor(e,t,s,r={},n){this.scene=e,this.overlayScene=n??e,this.camera=t,this.renderer=s,this.gizmoController=new Cn(t,s,r,this.overlayScene),this.gizmoController.setCallbacks({onChange:i=>this.handleGizmoChange(i),onChangeStart:i=>this.handleGizmoChangeStart(i),onChangeEnd:i=>this.handleGizmoChangeEnd(i),onObjectChange:i=>this.handleGizmoObjectChange(i)}),this.gizmoController.attachToScene(this.overlayScene),r.pivot&&this.gizmoController.setPivot(r.pivot.clone()),r.pivotMode&&this.gizmoController.setPivotMode(r.pivotMode)}setTarget(e){this.currentTarget=e,this.gizmoController.setTarget(e),e&&this.getPivotMode()==="aabb"&&this.useAabbCenterPivot(),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Target set to:",e?.name||"null")}getTarget(){return this.currentTarget}setMode(e){this.gizmoController.setMode(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Mode set to:",e)}getMode(){return this.gizmoController.getMode()}setEnabled(e){this.gizmoEnabled=e,this.gizmoController.setEnabled(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Enabled:",e)}getEnabled(){return this.gizmoEnabled&&this.gizmoController.getEnabled()}setSpace(e){this.gizmoController.setSpace(e),globalThis.GS_DEBUG_FLAG&&console.log(`[GizmoManager] Space set to: ${e}`)}getSpace(){return this.gizmoController.getSpace()}setSize(e){this.gizmoController.setSize(e)}setPivotMode(e){this.gizmoController.setPivotMode(e)}getPivotMode(){return this.gizmoController.getPivotMode()}setPivot(e){this.gizmoController.setPivot(e)}getPivot(){return this.gizmoController.getPivot()}useAabbCenterPivot(){const e=this.currentTarget;if(!e)return;const t=new ws().setFromObject(e),s=new B;t.getCenter(s),this.gizmoController.setPivot(s),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Pivot set to AABB center:",s.toArray())}setCallbacks(e){this.callbacks={...this.callbacks,...e}}setCameraControls(e){this.cameraControls=e,globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Camera controls set:",e)}getCameraControls(){return this.cameraControls}resolveCameraControls(){if(this.cameraControls)return this.cameraControls;try{const t=globalThis?.globalTools?.cameraTools?.cameraController;t&&(this.cameraControls=t,globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Camera controls resolved from globalTools:",t))}catch(e){globalThis.GS_DEBUG_FLAG&&console.warn("[Gizmo] Failed to resolve camera controls automatically:",e)}return this.cameraControls}handleGizmoChange(e){this.callbacks.onChange&&this.callbacks.onChange(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Change:",e)}handleGizmoChangeStart(e){const t=this.resolveCameraControls();t&&(typeof t.setEnabled=="function"?t.setEnabled(!1):typeof t.enabled<"u"&&(t.enabled=!1),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Camera controls disabled during transform")),this.callbacks.onChangeStart&&this.callbacks.onChangeStart(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Change start:",e)}handleGizmoChangeEnd(e){const t=this.resolveCameraControls();t&&(typeof t.setEnabled=="function"?t.setEnabled(!0):typeof t.enabled<"u"&&(t.enabled=!0),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Camera controls re-enabled after transform")),this.callbacks.onChangeEnd&&this.callbacks.onChangeEnd(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Change end:",e)}handleGizmoObjectChange(e){this.callbacks.onObjectChange&&this.callbacks.onObjectChange(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Object change:",e)}update(){this.gizmoController.update()}onResize(){globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Resize handled")}dispose(){this.gizmoController.detachFromScene(this.overlayScene),this.gizmoController.dispose(),this.currentTarget=null,this.callbacks={}}getGizmoController(){return this.gizmoController}getTransformControls(){return this.gizmoController.getTransformControls()}}class Tn{renderer;scene;gaussianLoader;fbxLoader;modelManager;constructor(e,t){this.renderer=e,this.scene=t,this.modelManager=new bn;const s=new yn(this.modelManager),r=new vn(this.modelManager);this.gaussianLoader=new gn(s,r),this.fbxLoader=new Bs(this.modelManager)}detectFileType(e){const t=e.toLowerCase();if(t.endsWith(".compressed.ply"))return"gaussian";const s=t.split(".").pop();return["onnx","sog","ksplat","splat","spz"].includes(s||"")?"gaussian":s==="ply"?"ply":s==="fbx"?"fbx":s||"unknown"}async loadModel(e,t={}){try{const s=e instanceof File?e.name:e,r=t.type||this.detectFileType(s);console.log(`开始加载模型: ${s}, 类型: ${r}`);let n=s.toLowerCase().split(".").pop(),i=n==="onnx";n==="ply"&&(e instanceof File?i=await this.is3dgsPly(e):i=await this.isGaussianPlyUrl(e)),t.isGaussian=i;const o=await this.loadModelByType(e,r,t);return console.log(`模型加载完成: ${o.info.name}, 数量: ${o.info.count}`),o}catch(s){const r=s;throw console.error(`模型加载失败: ${r.message}`),t.onError&&t.onError(r),r}}async loadModelByType(e,t,s){if(console.log("fileType:",t,"is Gaussian?",s.isGaussian),t==="gaussian"||t==="onnx")return await this.loadGaussianModel(e,s);if(t==="ply"){if(s.isGaussian)return await this.loadGaussianModel(e,s);console.log("UnifiedModelLoader: 检测到普通 Mesh PLY")}else if(s.isGaussian)return await this.loadGaussianModel(e,s);if(t==="fbx")return await this.loadFBXModel(e,s);const r=await this.loadWithUniversalLoader(e,s);return await this.processLoadedData(r,t,s)}async loadWithUniversalLoader(e,t){const s={onProgress:r=>{t.onProgress&&t.onProgress(r.progress)},isGaussian:t.isGaussian};return e instanceof File?await gt.loadFile(e,s):await gt.loadUrl(e,s)}async processLoadedData(e,t,s){const r=s.sourceFile?.name||"model",n=s.name||r.split("/").pop()?.split(".")[0]||"model";return e instanceof kt?(console.log("处理 Three.js 模型"),this.processThreeJSModel(e,t,n,s)):(console.log("处理 高斯模型"),this.processGaussianModel(e,t,n,s))}processThreeJSModel(e,t,s,r){const n=e.object3D(),i=[];return n instanceof At?i.push(...n.children):i.push(n),i.forEach(o=>{this.scene.add(o)}),console.log("=== Three.js 模型加载完成 ==="),console.log("模型名称:",s),console.log("模型数量:",i.length),i.forEach((o,a)=>{console.log(`模型 ${a+1}:`),console.log("  Object3D UUID:",o.uuid),console.log("  Object3D 类型:",o.constructor.name),console.log("  Object3D 名称:",o.name||"未命名")}),r.sourceFile?(console.log("原始文件路径:",r.sourceFile.name),console.log("文件大小:",r.sourceFile.size,"bytes"),console.log("文件类型:",r.sourceFile.type)):console.log("原始文件: URL 加载，无 File 对象"),{models:i,sourceFile:r.sourceFile,info:{type:t,name:s,count:i.length,isGaussian:!1}}}async processGaussianModel(e,t,s,r){throw new Error("高斯模型处理需要特殊实现，请使用 loadGaussianModel 方法")}async loadGaussianModel(e,t){const s=e instanceof File?e.name:e,r=t.name||s.split("/").pop()?.split(".")[0]||"gaussian_model";console.log("=== 进入 loadGaussianModel ==="),console.log("文件名:",s);let n="ply";const i=s.toLowerCase();i.endsWith(".compressed.ply")?n="compressed.ply":i.endsWith(".sog")?n="sog":i.endsWith(".ksplat")?n="ksplat":i.endsWith(".splat")?n="splat":i.endsWith(".spz")?n="spz":i.endsWith(".onnx")&&(n="onnx"),console.log("传递给加载器的具体格式:",n);const o=t.sourceFile||(e instanceof File?e:void 0),a=await this.gaussianLoader.createFromFile(this.renderer,e instanceof File?URL.createObjectURL(e):e,{camMat:t.cameraMatrix||new Float32Array(16),projMat:t.projectionMatrix||new Float32Array(16),...t.gaussianOptions},t.gaussianOptions,n);e instanceof File&&URL.revokeObjectURL(URL.createObjectURL(e)),this.scene.add(a);const l=new Lt(this.renderer,this.scene,[a]);return await l.init(),this.scene.add(l),console.log("=== 高斯模型加载完成 ==="),console.log("模型名称:",r),console.log("Object3D UUID:",a.uuid),console.log("Object3D 类型:",a.constructor.name),o?(console.log("原始文件路径:",o.name),console.log("文件大小:",o.size,"bytes"),console.log("文件类型:",o.type)):console.log("原始文件: URL 加载，无 File 对象"),console.log("高斯渲染器 UUID:",l.uuid),{models:[a],gaussianRenderer:l,sourceFile:o,info:{type:"gaussian",name:r,count:1,isGaussian:!0}}}async readFileHeader(e,t=4096){const r=await e.slice(0,t).arrayBuffer();return new TextDecoder("utf-8").decode(r||new ArrayBuffer(0))}async is3dgsPly(e){try{const t=(await this.readFileHeader(e)).toLowerCase();if(!t.startsWith("ply"))return console.log("不是 PLY 文件:",e.name),!1;const r=["property float opacity","property float scale_0","property float scale_1","property float scale_2","property float rot_0","property float rot_1","property float rot_2","property float rot_3"].every(i=>t.includes(i)),n=/property\s+float\s+sh_\d+/.test(t);return console.log(`PLY 文件 ${e.name} 3DGS 检测结果: 基础属性=${r}, SH 系数=${n}`),r}catch(t){return console.warn("读取 PLY 头信息失败，按非 3DGS 处理:",e.name,t),!1}}async isGaussianPlyUrl(e){try{const t=e.includes("?")?"&":"?",s=`${e}${t}temp=${new Date().getTime()}`,r=await fetch(s,{method:"GET",mode:"cors",headers:{Range:"bytes=0-4095"}});!r.ok&&r.status!==206&&console.warn(`[UnifiedModelLoader] Range 请求未按预期返回 206，状态码: ${r.status}。尝试继续解析...`);const i=(await r.text()).slice(0,4096).toLowerCase();if(!i.startsWith("ply"))return console.log(`[UnifiedModelLoader] URL 资源不是 PLY 格式: ${s}`),!1;const a=["property float opacity","property float scale_0","property float scale_1","property float scale_2","property float rot_0","property float rot_1","property float rot_2","property float rot_3"].every(c=>i.includes(c)),l=/property\s+float\s+sh_\d+/.test(i)||/property\s+float\s+f_dc_0/.test(i);return console.log(`[UnifiedModelLoader] 线上 PLY 检测结果: 基础属性=${a}, SH系数=${l}, URL=${s}`),a}catch(t){return console.warn("[UnifiedModelLoader] 无法检测线上 PLY 类型 (可能是跨域或网络问题)，默认按 False 处理:",t),!1}}async loadModels(e,t={}){const s=[];for(let r=0;r<e.length;r++){const n=e[r],i={...t,onProgress:o=>{if(t.onProgress){const a=(r+o)/e.length;t.onProgress(a)}}};try{const o=await this.loadModel(n,i);s.push(o)}catch(o){console.error(`加载模型失败: ${n}`,o),t.onError&&t.onError(o)}}return s}async loadFBXModel(e,t){const s=e instanceof File?e.name:e,r=t.name||s.split("/").pop()?.split(".")[0]||"fbx_model";console.log("=== 进入 loadFBXModel ==="),console.log("文件名:",s);try{let n;e instanceof File?n=await this.fbxLoader.loadFromFile(e,t.fbxOptions):n=await this.fbxLoader.loadFromURL(e,t.fbxOptions);const i=n.pointCloud,o=i.object3D;return this.scene.add(o),console.log("=== FBX 模型加载完成 ==="),console.log("模型名称:",r),console.log("Object3D UUID:",o.uuid),console.log("Object3D 类型:",o.constructor.name),console.log("动画数量:",i.clips.length),console.log("顶点数量:",n.pointCount),{models:[o],sourceFile:e instanceof File?e:void 0,info:{type:"fbx",name:r,count:1,isGaussian:!1}}}catch(n){throw console.error("FBX 模型加载失败:",n),n}}dispose(){}}async function In(f,e,t,s={}){const r=new Tn(f,e);try{return Array.isArray(t)?await r.loadModels(t,s):await r.loadModel(t,s)}finally{r.dispose()}}var Bn=(f=>(f.VP9="video/webm; codecs=vp9",f.VP8="video/webm; codecs=vp8",f.H264="video/webm; codecs=h264",f.AV1="video/webm; codecs=av01",f.MP4_H264="video/mp4; codecs=avc1.42E01E",f.MP4_H265="video/mp4; codecs=hev1.1.6.L93.B0",f))(Bn||{}),Un=(f=>(f.LOW="low",f.MEDIUM="medium",f.HIGH="high",f.NEAR_LOSSLESS="near_lossless",f))(Un||{});function Gn(f){return f.includes("mp4")?".mp4":".webm"}class En{isRecording=!1;muxer=null;videoEncoder=null;recordingCamera=null;scene=null;captureCanvas=null;frameProcessor;currentFrameIndex=0;fps=30;useSSAA=!1;downscaleCanvas=null;downscaleCtx=null;async startRecording(e){if(this.isRecording)throw new Error("录制已在进行中");this.useSSAA=!!e.enableSSAA,this.recordingCamera=e.recordingCamera,this.scene=e.scene,this.captureCanvas=e.captureCanvas||e.recordingCamera.canvas,this.frameProcessor=e.frameProcessor,this.fps=e.mode==="timeline"?e.timelineController?.getFrameRate()||30:e.fps||30;const t=e.resolution?.width||1920,s=e.resolution?.height||1080;let r,n;this.useSSAA?(r=t*2,n=s*2):(r=t,n=s),this.captureCanvas.width=r,this.captureCanvas.height=n;const i=e.recordingCamera.camera;i.aspect=t/s,i.updateProjectionMatrix(),e.mainRenderer.setSize(r,n,!1),await e.recordingCamera.initializeRenderer(e.mainRenderer,e.scene,e.gaussianModels),e.recordingCamera.renderer&&e.recordingCamera.renderer.setSize(r,n,!1),e.recordingCamera.canvas&&(console.log(`[RecordingManager] 强制更新深度纹理: ${e.recordingCamera.canvas.width}x${e.recordingCamera.canvas.height}`),e.recordingCamera.onResize(!0,{width:r,height:n})),this.useSSAA?(this.downscaleCanvas=new OffscreenCanvas(t,s),this.downscaleCtx=this.downscaleCanvas.getContext("2d",{alpha:!1,desynchronized:!0}),this.downscaleCtx&&(this.downscaleCtx.imageSmoothingEnabled=!0,this.downscaleCtx.imageSmoothingQuality="high")):(this.downscaleCanvas=null,this.downscaleCtx=null),this.muxer=new Sr({target:new Mr,video:{codec:"avc",width:t,height:s},fastStart:"in-memory"}),this.videoEncoder=new VideoEncoder({output:(l,c)=>this.muxer.addVideoChunk(l,c),error:l=>console.error("VideoEncoder 错误:",l)}),this.videoEncoder.configure({codec:"avc1.640033",width:t,height:s,bitrate:25e6,framerate:this.fps}),this.currentFrameIndex=0,this.isRecording=!0,console.log(`[RecordingManager] 录制开始. 
            模式: ${this.useSSAA?`🔥 超采样开启 (${r}x${n}渲染 -> ${t}x${s}输出)`:`⚡ 普通模式 (${t}x${s}直出)`}
            渲染分辨率: ${r}x${n}
            输出分辨率: ${t}x${s}`),e.mode==="timeline"&&this.setupTimelineMode(e)}setupTimelineMode(e){if(!e.timelineController)throw new Error("TimelineController missing");e.timelineController.registerFrameUpdateCallback(async()=>{await this.renderFrame()})}async renderFrame(){const{scene:e,recordingCamera:t,videoEncoder:s,captureCanvas:r,isRecording:n}=this;if(!(!n||!t||!e||!s||!r))try{const i=await t.renderToCanvas(e);let o;this.frameProcessor?(await this.frameProcessor(i),o=r):o=i;let a;this.useSSAA&&this.downscaleCtx&&this.downscaleCanvas?(this.downscaleCtx.clearRect(0,0,this.downscaleCanvas.width,this.downscaleCanvas.height),this.downscaleCtx.drawImage(o,0,0,this.downscaleCanvas.width,this.downscaleCanvas.height),a=this.downscaleCanvas):a=o;const l=this.currentFrameIndex*1e6/this.fps,c=1e6/this.fps,d=new VideoFrame(a,{timestamp:l,duration:c}),u=this.currentFrameIndex%this.fps===0;s.encode(d,{keyFrame:u}),d.close(),this.currentFrameIndex++}catch(i){console.error("渲染/编码帧失败:",i)}}async stopRecording(){if(!this.isRecording)throw new Error("未在录制");if(console.log("[RecordingManager] 停止录制，正在封装 MP4..."),this.videoEncoder&&(await this.videoEncoder.flush(),this.videoEncoder.close()),this.muxer){this.muxer.finalize();const{buffer:e}=this.muxer.target,t=new Blob([e],{type:"video/mp4"});return this.isRecording=!1,this.videoEncoder=null,this.muxer=null,console.log(`[RecordingManager] MP4 生成完毕: ${(t.size/1024/1024).toFixed(2)} MB`),t}throw new Error("Muxer 未初始化")}isRecordingActive(){return this.isRecording}getStopPromise(){return null}getCompletedBlob(){return null}cancelRecording(){this.isRecording=!1}}async function Hn(f,e,t,s=15,r=30,n={width:1920,height:1080},i,o=!0,a={},l,c,d){console.log("🎬 [exportVideo] 初始化导出流程"),console.log("[exportVideo] 分辨率:",n);const u=new En,p=l?"timeline":"realtime";console.log(`[exportVideo] 导出模式: ${p}, timelineController: ${l?"存在":"不存在"}`);const h=i?i.getGaussianModels():void 0;console.log("[exportVideo] 提取gaussianModels:",h?`${h.length}个`:"无"),h&&h.length>0&&h.forEach((y,g)=>{console.log(`[exportVideo] 模型${g}: ${y.name}, visible: ${y.visible}, pointCloud: ${y.getPointCloud()?"有":"无"}`)});const v={mode:p,mainRenderer:f,scene:e,recordingCamera:t,gaussianModels:h,config:a,resolution:n,...p==="timeline"?{timelineController:l}:{duration:s,fps:r},...d?.captureCanvas?{captureCanvas:d.captureCanvas}:{},...d?.frameProcessor?{frameProcessor:d.frameProcessor}:{},enableSSAA:!1};try{if(console.log("[exportVideo] -> startRecording()"),await u.startRecording(v),console.log("[exportVideo] -> RecordingManager 已进入录制状态"),p==="timeline"&&l){const S=l.getTotalFrames(),$=l.getLastKeyframeIndex(),D=S;console.log(`[VideoExport] 时间轴模式：总帧数=${S}, 最后一个关键帧=${$}, 导出帧数=${D} (0到${D-1})`);const X=l.getFrameRate(),I=1e3/X,q=Math.max(5,Math.min(20,I*.4));console.log(`[VideoExport] 帧率同步：帧率=${X} FPS, 每帧时间=${I.toFixed(2)}ms, 等待时间=${q.toFixed(2)}ms`);for(let O=0;O<D;O++){if(!u.isRecordingActive()){console.log(`[VideoExport] 录制已经停止，提前终止帧循环；当前帧=${O}`);break}try{await l.setFrameIndex(O),console.log("frameIndex done",O),await new Promise(U=>setTimeout(U,100))}catch(U){console.error(`时间轴模式：设置帧索引 ${O} 失败:`,U)}if(!u.isRecordingActive())break}if(u.isRecordingActive()){console.log("[VideoExport] 帧循环结束，但 RecordingManager 仍在运行，等待补帧");const O=1e3/l.getFrameRate()}}else if(p==="realtime"){const $=s*1e3+2e3,D=100,X=Date.now();for(console.log(`[VideoExport] 进入实时模式等待循环，duration=${s}s`);u.isRecordingActive()&&Date.now()-X<$;)await new Promise(I=>setTimeout(I,D));u.isRecordingActive()&&console.warn("真实时间模式：等待超时，但录制仍在进行中，继续处理...")}console.log("[exportVideo] 停止录制并收集 Blob");let y;if(u.isRecordingActive())console.log("[exportVideo] -> stopRecording()"),y=await u.stopRecording(),console.log("[exportVideo] <- stopRecording() 完成");else{const S=u.getStopPromise();if(S)console.log("[exportVideo] 等待 stopPromise 完成"),y=await S;else{const $=u.getCompletedBlob();if($)console.log("[exportVideo] 使用 completedBlob"),y=$;else throw new Error("录制已停止，无法获取视频文件。可能的原因：录制过程中出现异常或已提前结束。")}}console.log("[exportVideo] 开始触发下载");const g=URL.createObjectURL(y),m=document.createElement("a");m.href=g;const x=new Date().toISOString().slice(0,19).replace(/:/g,"-"),b=y.type||"video/webm",P=Gn(b),T=c?`Video-${c}-${x}${P}`:`Video-${x}${P}`;m.download=T,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(g)}catch(y){throw console.error("[exportVideo] 导出失败，准备取消录制"),u.cancelRecording(),y}}class Vn{parentNodeId;domId;isPreviewShow=!1;camera;canvas;overlayContainer;renderer=null;gaussianRenderer=null;gizmo=null;gizmoVisible=!0;gizmoColor=65280;gizmoLength=5;width;height;showPreview;sceneWrapper=null;tempPosition=new B;tempQuaternion=new Le;tempScale=new B;editorHelperVisibilityCache=[];recordingEnvMap=null;recordingBackground=null;originalEnvMap=null;originalBackground=null;skyboxEnabled=!0;statusDom=null;cameraInfoDom=null;titleDom=null;cameraName="";isSync=!1;constructor(e,t=1920,s=1080,r=55,n=!0,i="",o=!1){this.parentNodeId=e,this.domId=`recordingOverlay_${this.parentNodeId}`,this.cameraName=i,this.camera=new Ft(r,t/s,.1,1e3),this.width=t,this.height=s,this.showPreview=n,this.isSync=o;const a=document.getElementById(this.domId);a&&(this.overlayContainer=a,this.canvas=this.overlayContainer.querySelector("canvas"),console.log("overlayContainer----",this.overlayContainer,this.canvas),this.titleDom=this.overlayContainer.querySelector(".recording-overlay-title-name"))}isInitialized(){return!!this.renderer}ensurePreviewWindow(e="zh"){if(this.overlayContainer&&document.body.contains(this.overlayContainer)){this.overlayContainer.style.visibility="visible",this.overlayContainer.style.opacity="1",this.showPreview=!0,this.canvas||(this.canvas=this.overlayContainer.querySelector("canvas")),this.titleDom||(this.titleDom=this.overlayContainer.querySelector(".recording-overlay-title-name")),console.log("[RecordingCamera] 预览窗口已存在，显示窗口");return}this.showPreview=!0,console.log("[RecordingCamera] 创建新的预览窗口"),this.createOverlayCanvas(this.width,this.height,e),this.overlayContainer&&(this.overlayContainer.style.display="none",this.overlayContainer.style.visibility="visible",this.overlayContainer.style.opacity="1")}hidePreviewWindow(){this.overlayContainer&&(this.overlayContainer.style.display="none",this.isPreviewShow=!1)}showPreviewWindow(e=!0){this.titleDom&&(this.titleDom.textContent=` - ${this.cameraName}`),this.overlayContainer&&(this.overlayContainer.style.display="block",this.isPreviewShow=!0),this.setSkyboxEnabled(e)}setCameraName(e){this.cameraName=e,this.titleDom&&(this.titleDom.textContent=` - ${this.cameraName}`)}setSkyboxEnabled(e){this.skyboxEnabled=e}isPreviewVisible(){if(!this.overlayContainer||!document.body.contains(this.overlayContainer))return!1;const e=window.getComputedStyle(this.overlayContainer),t=e.display!=="none"&&e.visibility!=="hidden"&&e.opacity!=="0";return!t&&this.showPreview&&console.warn("[RecordingCamera] 预览窗口应该可见但检测为不可见",{display:e.display,visibility:e.visibility,opacity:e.opacity,showPreview:this.showPreview}),t}cleanupCanvasElements(){this.gaussianRenderer&&(this.gaussianRenderer=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),console.log("dom----",document.getElementById(this.domId))}hideEditorHelpers(e){this.editorHelperVisibilityCache.length=0,e.traverse(t=>{t.userData&&t.userData.__visionaryEditorHelper&&(this.editorHelperVisibilityCache.push({object:t,visible:t.visible}),t.visible=!1)})}restoreEditorHelpers(){for(const e of this.editorHelperVisibilityCache)e.object.visible=e.visible;this.editorHelperVisibilityCache.length=0}createOverlayCanvas(e,t,s="zh"){this.cleanupCanvasElements(),this.showPreview=!0;const r=document.getElementById(this.domId);if(r)this.overlayContainer=r;else{console.log("创建录制相机预览窗口dom"),this.overlayContainer=document.createElement("div"),this.overlayContainer.id=this.domId,this.overlayContainer.classList.add("recording-overlay-container");let n="录制预览",i=" - 同步录制相机";s==="zh"?(n="录制预览",i=" - 同步录制相机"):s==="en"&&(n="Preview",i=" - Sync Camera");const o=document.createElement("div");o.classList.add("title-bar");const a=document.createElement("h3");a.classList.add("recording-overlay-title");const l=document.createElement("span");if(l.textContent=n,l.setAttribute("data-i18n","recordingCamera.previewWindowTitle"),a.appendChild(l),this.isSync){const b=document.createElement("span");b.textContent=i,b.setAttribute("data-i18n","recordingCamera.syncPreviewTitle"),a.appendChild(b)}const c=document.createElement("span");c.classList.add("recording-overlay-title-name"),c.textContent=this.cameraName,a.appendChild(c),this.titleDom=c;const d=document.createElement("button");d.textContent="×",d.classList.add("recording-overlay-close-btn"),d.onclick=()=>this.hidePreviewWindow(),o.appendChild(a),o.appendChild(d),this.overlayContainer.appendChild(o);const u=document.createElement("div");u.classList.add("canvas-container"),this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t;const p=400,h=300,v=e/t;let y=p,g=p/v;g>h&&(g=h,y=h*v),this.canvas.classList.add("recording-overlay-canvas"),this.canvas.style.cssText=`
            width: ${y}px;
            height: ${g}px;
        `,u.appendChild(this.canvas),this.overlayContainer.appendChild(u);const m=document.createElement("div");m.classList.add("camera-info"),this.cameraInfoDom=m,this.overlayContainer.appendChild(m);const x=document.getElementById(this.parentNodeId);x&&x.appendChild(this.overlayContainer),this.makeDraggable(this.overlayContainer,o)}}createHiddenCanvas(e,t){this.cleanupCanvasElements(),this.showPreview=!1,this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t,this.canvas.style.cssText=`
            position: fixed;
            top: -9999px;
            left: -9999px;
            width: ${e}px;
            height: ${t}px;
            visibility: hidden;
            pointer-events: none;
        `,document.body.appendChild(this.canvas),this.overlayContainer=document.createElement("div"),this.overlayContainer.id="recordingStatus",this.overlayContainer.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 10px 15px;
            border-radius: 5px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 10000;
            pointer-events: none;
        `,this.overlayContainer.textContent="录制中...",document.body.appendChild(this.overlayContainer)}makeDraggable(e,t){let s=!1,r=0,n=0,i=0,o=0;const a=document.getElementById(this.parentNodeId);if(!a){console.warn("[RecordingCamera] 未找到父容器元素，无法启用拖动功能");return}const l=p=>{if(!s)return;const h=p.clientX-r,v=p.clientY-n,y=i+h,g=o+v,m=a.getBoundingClientRect(),x=m.width-e.offsetWidth,b=m.height-e.offsetHeight,P=y-m.left,T=g-m.top;e.style.left=Math.max(0,Math.min(P,x))+"px",e.style.top=Math.max(0,Math.min(T,b))+"px",e.style.right="auto",e.style.bottom="auto"},c=()=>{s&&(s=!1,e.style.cursor="move",a.removeEventListener("mousemove",l),a.removeEventListener("mouseup",d),a.removeEventListener("mouseleave",u),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",d))},d=()=>{c()},u=()=>{c()};t.addEventListener("mousedown",p=>{s=!0,r=p.clientX,n=p.clientY;const h=e.getBoundingClientRect();i=h.left,o=h.top,e.style.cursor="grabbing",p.preventDefault(),a.addEventListener("mousemove",l),a.addEventListener("mouseup",d),a.addEventListener("mouseleave",u),document.addEventListener("mousemove",l),document.addEventListener("mouseup",d)})}setPosition(e,t,s){this.camera.position.set(e,t,s),this.camera.updateMatrixWorld(),this.syncWrapperTransform(),this.updateGizmo()}lookAt(e,t,s){this.camera.lookAt(e,t,s),this.camera.updateMatrixWorld(),this.syncWrapperTransform(),this.updateGizmo()}syncWrapperTransform(){this.sceneWrapper&&(this.sceneWrapper.position.copy(this.camera.position),this.sceneWrapper.quaternion.copy(this.camera.quaternion),this.sceneWrapper.scale.set(1,1,1),this.gizmo&&this.gizmo.parent!==this.sceneWrapper&&this.sceneWrapper.add(this.gizmo),this.sceneWrapper.updateMatrixWorld(!0))}syncCameraFromWrapper(){this.sceneWrapper&&(this.sceneWrapper.updateMatrixWorld(!0),this.sceneWrapper.matrixWorld.decompose(this.tempPosition,this.tempQuaternion,this.tempScale),this.camera.position.copy(this.tempPosition),this.camera.quaternion.copy(this.tempQuaternion),this.camera.scale.copy(this.tempScale),this.camera.updateMatrixWorld(!0),this.updateGizmo())}getSceneWrapper(){return this.sceneWrapper}attachSceneObject(e){e.name||(e.name="RecordingCameraWrapper"),this.sceneWrapper=e,this.sceneWrapper.userData||(this.sceneWrapper.userData={}),this.sceneWrapper.userData.recordingCamera=this,this.sceneWrapper.userData.type="recordingCamera",this.gizmo&&this.gizmo.parent!==this.sceneWrapper&&this.sceneWrapper.add(this.gizmo),this.syncWrapperTransform()}createGizmo(e=65280,t){if(this.gizmo)return this.gizmo;this.gizmoColor=e,t!==void 0&&(this.gizmoLength=t);const s=new At;s.name="RecordingCameraGizmo",s.position.set(0,0,0),s.layers.set(0);const n=(()=>{const g=this.camera,m=g.near,x=m+this.gizmoLength,b=g.fov*(Math.PI/180),P=g.aspect,T=2*Math.tan(b/2)*m,S=T*P,$=2*Math.tan(b/2)*x,D=$*P,X=new B(-S/2,T/2,-m),I=new B(S/2,T/2,-m),q=new B(-S/2,-T/2,-m),O=new B(S/2,-T/2,-m),U=new B(-D/2,$/2,-x),E=new B(D/2,$/2,-x),R=new B(-D/2,-$/2,-x),Y=new B(D/2,-$/2,-x);return{near:{topLeft:X,topRight:I,bottomLeft:q,bottomRight:O},far:{topLeft:U,topRight:E,bottomLeft:R,bottomRight:Y}}})(),i=new rt({color:e,linewidth:2,transparent:!0,opacity:.8}),o=new ye().setFromPoints([n.near.topLeft,n.near.topRight,n.near.bottomRight,n.near.bottomLeft,n.near.topLeft]),a=new fe(o,i);s.add(a);const l=new ye().setFromPoints([n.far.topLeft,n.far.topRight,n.far.bottomRight,n.far.bottomLeft,n.far.topLeft]),c=new fe(l,i);s.add(c);const d=new fe(new ye().setFromPoints([n.near.topLeft,n.far.topLeft]),i),u=new fe(new ye().setFromPoints([n.near.topRight,n.far.topRight]),i),p=new fe(new ye().setFromPoints([n.near.bottomLeft,n.far.bottomLeft]),i),h=new fe(new ye().setFromPoints([n.near.bottomRight,n.far.bottomRight]),i);s.add(d,u,p,h);const v=this.camera.near+this.gizmoLength,y=new fe(new ye().setFromPoints([new B(0,0,0),new B(0,0,-(this.camera.near+v)/2)]),new rt({color:e,linewidth:1,transparent:!0,opacity:.5}));return s.add(y),this.gizmo=s,this.sceneWrapper&&s.parent!==this.sceneWrapper&&this.sceneWrapper.add(s),this.updateGizmo(),s}updateGizmo(){if(!this.gizmo)return;[...this.gizmo.children].forEach(O=>{O instanceof fe&&(O.geometry.dispose(),O.material instanceof Jt&&O.material.dispose(),this.gizmo.remove(O))});const t=this.camera,s=t.near,r=s+this.gizmoLength,n=t.fov*(Math.PI/180),i=t.aspect,o=2*Math.tan(n/2)*s,a=o*i,l=2*Math.tan(n/2)*r,c=l*i,d=new B(-a/2,o/2,-s),u=new B(a/2,o/2,-s),p=new B(-a/2,-o/2,-s),h=new B(a/2,-o/2,-s),v=new B(-c/2,l/2,-r),y=new B(c/2,l/2,-r),g=new B(-c/2,-l/2,-r),m=new B(c/2,-l/2,-r),x=new rt({color:this.gizmoColor,linewidth:2,transparent:!0,opacity:.8}),b=new ye().setFromPoints([d,u,h,p,d]),P=new fe(b,x);this.gizmo.add(P);const T=new ye().setFromPoints([v,y,m,g,v]),S=new fe(T,x);this.gizmo.add(S);const $=new fe(new ye().setFromPoints([d,v]),x),D=new fe(new ye().setFromPoints([u,y]),x),X=new fe(new ye().setFromPoints([p,g]),x),I=new fe(new ye().setFromPoints([h,m]),x);this.gizmo.add($,D,X,I);const q=new fe(new ye().setFromPoints([new B(0,0,0),new B(0,0,-(s+r)/2)]),new rt({color:this.gizmoColor,linewidth:1,transparent:!0,opacity:.5}));this.gizmo.add(q),this.sceneWrapper?(this.gizmo.position.set(0,0,0),this.gizmo.quaternion.identity(),this.gizmo.rotation.set(0,0,0)):(this.gizmo.position.copy(this.camera.position),this.gizmo.quaternion.copy(this.camera.quaternion)),this.gizmo.visible=this.gizmoVisible,this.gizmo.updateMatrixWorld(!0)}setGizmoVisible(e){this.gizmoVisible=e,this.gizmo&&(this.gizmo.visible=e)}setGizmoLength(e){if(e<=0){console.warn("[RecordingCamera] gizmo长度必须大于0");return}this.gizmoLength=e,this.gizmo&&this.updateGizmo()}getGizmoLength(){return this.gizmoLength}getGizmo(){return this.gizmo}getSceneObject(){if(!this.sceneWrapper){const t=new At;this.attachSceneObject(t)}const e=this.sceneWrapper;return this.gizmo||this.createGizmo(65280),this.gizmo&&e.children.indexOf(this.gizmo)===-1&&e.add(this.gizmo),this.syncWrapperTransform(),e}updateStatusInfo(e){this.statusDom&&(this.statusDom.textContent=e)}async initializeRenderer(e,t,s,r){try{const i=e.backend?.device;if(!i)throw new Error("无法获取WebGPU设备");const o=this.canvas.getContext("webgpu");if(!o)throw new Error("无法获取WebGPU上下文");const a=navigator.gpu.getPreferredCanvasFormat();o.configure({device:i,format:a,alphaMode:"premultiplied"}),this.renderer=new _s({canvas:this.canvas,antialias:!0,forceWebGL:!1,context:o,device:i}),await this.renderer.init();const l=await Fr.initializeRenderer(this.renderer,t,{sourceRenderer:e,originalTexture:r||null,width:this.canvas.width,height:this.canvas.height,pixelRatio:1});return this.recordingEnvMap=l.envMap,this.recordingBackground=l.background,console.log("[RecordingCamera] 开始初始化 GaussianThreeJSRenderer..."),console.log("[RecordingCamera] gaussianModels:",s?`${s.length}个`:"无"),console.log("[RecordingCamera] this.renderer:",this.renderer?"存在":"不存在"),s&&s.length>0&&this.renderer?(console.log("[RecordingCamera] 创建 GaussianThreeJSRenderer..."),this.gaussianRenderer=new Lt(this.renderer,t,s),console.log("[RecordingCamera] 调用 gaussianRenderer.init()..."),await this.gaussianRenderer.init(),console.log("[RecordingCamera] 调用 onResize...",this.canvas.width,this.canvas.height),this.gaussianRenderer.onResize(this.canvas.width,this.canvas.height,!0),console.log("[RecordingCamera] 录制相机Gaussian渲染器初始化成功")):((!s||s.length===0)&&console.log("[RecordingCamera] 未提供高斯模型，使用标准 Three.js 渲染流程"),this.renderer||console.warn("[RecordingCamera] 录制渲染器未初始化")),console.log("录制相机渲染器初始化成功"),!0}catch(n){return console.warn("录制相机渲染器初始化失败:",n),this.renderer=null,this.gaussianRenderer=null,!1}}onResize(e=!1,t){if(!this.renderer||!this.overlayContainer)return;this.overlayContainer.style.inset="";let s,r;if(console.log("[RecordingCamera] onResize...",e,t),e&&this.canvas)s=t.width||this.canvas.width,r=t.height||this.canvas.height,console.log("[RecordingCamera] 录制模式 onResize，使用实际像素尺寸:",s,r);else{const n=this.overlayContainer.querySelector(".canvas-container");if(!n||(s=Math.floor(n.clientWidth/2)*2,r=Math.floor(n.clientHeight/2)*2,s===0||r===0))return;console.log("[RecordingCamera] 预览模式 onResize，使用CSS显示尺寸:",s,r)}this.renderer&&this.renderer.setSize(s,r,!1),this.gaussianRenderer&&this.gaussianRenderer.onResize(s,r,e)}async updateGaussianModels(e,t){return new Promise((s,r)=>{let n=this.isPreviewShow;this.gaussianRenderer&&(this.gaussianRenderer=null),e&&e.length>0?(this.isPreviewShow=!1,this.gaussianRenderer=new Lt(this.renderer,t,e),console.log("init 高斯renderer",n),this.gaussianRenderer.init().then(()=>{this.isPreviewShow=n,s(!0)}).catch(i=>{console.warn("高斯renderer初始化失败:",i),this.isPreviewShow=n,r(i)})):(console.warn("没有提供高斯模型"),s(!0))})}async render(e){if(!this.renderer){const t="录制渲染器未初始化";console.error(`[RecordingCamera] ${t}`),this.updateStatusInfo(t);return}if(this.isPreviewShow&&this.isPreviewVisible()){this.hideEditorHelpers(e);try{this.camera.updateMatrixWorld(),this.originalEnvMap=e.environment,this.originalBackground=e.background,this.skyboxEnabled&&this.recordingEnvMap&&this.recordingBackground&&(e.environment=this.recordingEnvMap,e.background=this.recordingBackground);try{this.gaussianRenderer?(this.gaussianRenderer.onBeforeRender(this.renderer,e,this.camera),this.gaussianRenderer.renderThreeScene(this.camera),this.gaussianRenderer.drawSplats(this.renderer,e,this.camera)):(this.originalEnvMap===null&&(this.originalEnvMap=e.environment),this.originalBackground===null&&(this.originalBackground=e.background),this.skyboxEnabled&&this.recordingEnvMap&&this.recordingBackground&&(e.environment=this.recordingEnvMap,e.background=this.recordingBackground),this.renderer.render(e,this.camera))}finally{this.originalEnvMap!==null&&(e.environment=this.originalEnvMap),this.originalBackground!==null&&(e.background=this.originalBackground)}const s=this.renderer.backend?.device;s&&s.queue&&await s.queue.onSubmittedWorkDone()}catch(t){console.error("[RecordingCamera] 录制相机渲染失败error:",t),this.updateStatusInfo("Error: Rendering failed")}finally{this.restoreEditorHelpers()}}}getStream(e=30){if(!this.canvas)return console.error("[RecordingCamera] getStream Canvas 未初始化，无法获取流"),null;try{const t=this.canvas.captureStream(e);return t?t.getVideoTracks().length===0?(console.error("[RecordingCamera] getStream 流中没有视频轨道"),null):t:(console.error("[RecordingCamera] getStream captureStream 返回 null"),null)}catch(t){return console.error("获取录制流失败:",t),null}}getParameters(){return{width:this.width,height:this.height,fov:this.camera.fov}}dispose(){this.gizmo&&(this.gizmo.traverse(e=>{e instanceof fe&&(e.geometry.dispose(),e.material instanceof Jt&&e.material.dispose())}),this.gizmo=null),this.sceneWrapper&&(this.sceneWrapper.parent&&this.sceneWrapper.parent.remove(this.sceneWrapper),this.sceneWrapper=null),this.gaussianRenderer&&(this.gaussianRenderer=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.overlayContainer&&this.overlayContainer.parentNode&&(this.overlayContainer.parentNode.removeChild(this.overlayContainer),this.overlayContainer=null),this.canvas&&this.canvas.parentNode&&(this.canvas.parentNode.removeChild(this.canvas),this.canvas=null)}async renderToCanvas(e){if(!this.renderer||!this.sceneWrapper)throw new Error("RecordingCamera is not fully initialized. Renderer or Scene is missing.");const t=this.renderer,s=this.camera,r=this.canvas.width||this.width,n=this.canvas.height||this.height;t.setSize(r,n,!1),s.aspect=r/n,s.updateProjectionMatrix(),this.originalEnvMap=e.environment,this.originalBackground=e.background;try{this.skyboxEnabled&&this.recordingEnvMap&&(e.environment=this.recordingEnvMap),this.skyboxEnabled&&this.recordingBackground&&(e.background=this.recordingBackground);var i=!1;if(this.gaussianRenderer){const u=(Date.now()-window.startTime)/1e3;await this.gaussianRenderer.updateDynamicModels(s,u),this.gaussianRenderer.onBeforeRender(t,e,s);const h=this.renderer.backend?.device;h&&h.queue&&await h.queue.onSubmittedWorkDone(),this.gaussianRenderer.renderThreeScene(s),i=this.gaussianRenderer.drawSplats(t,e,s)}i||(t.render(e,s),console.warn("fall back in three js render camera recording camera"));const a=this.renderer.backend?.device,l=document.createElement("canvas");l.width=r,l.height=n;const c=l.getContext("2d");if(!c)throw new Error("Failed to create context for export canvas");const d=t.domElement;return c.drawImage(d,0,0,r,n),a&&a.queue&&await a.queue.onSubmittedWorkDone(),l}catch(o){throw new Error(`RecordingCamera failed to render frame: ${o.message}`)}finally{this.originalEnvMap!==null&&(e.environment=this.originalEnvMap),this.originalBackground!==null&&(e.background=this.originalBackground),this.originalEnvMap=null,this.originalBackground=null}}}const Rn=["ply","spz","ksplat","splat","sog","compressed.ply","onnx","fbx"],hs=f=>Rn.includes(f);class jn{rootHandle=null;permissions=null;constructor(){}async pickFolderRead(){try{const e=await window.showDirectoryPicker({mode:"read"});await this.ensurePermission(e,"read"),this.rootHandle=e,this.permissions="read",console.log("SceneFS: Root folder selected (read-only)",e.name)}catch(e){throw e.name==="AbortError"?new Error("Folder selection cancelled by user"):new Error(`Failed to select read folder: ${e.message}`)}}async setRootHandle(e,t){try{await this.ensurePermission(e,t),this.rootHandle=e,this.permissions=t,console.log("SceneFS: Root folder selected (read-only)",e.name)}catch(s){throw s.name==="AbortError"?new Error("Folder selection cancelled by user"):new Error(`Failed to select read folder: ${s.message}`)}}async pickFolderWrite(){try{const e=await window.showDirectoryPicker({mode:"readwrite"});await this.ensurePermission(e,"readwrite"),this.rootHandle=e,this.permissions="readwrite",console.log("SceneFS: Root folder selected (read-write)",e.name)}catch(e){throw e.name==="AbortError"?new Error("Folder selection cancelled by user"):new Error(`Failed to select write folder: ${e.message}`)}}async loadScene(e,t){const s=t?.sceneData;try{if(s!==void 0)return console.log("SceneFS: Loading scene from provided data..."),await this.loadSceneDataIntoApp(e,s),console.log("SceneFS: Scene (provided data) loaded successfully"),s;if(!this.rootHandle)throw new Error("No root directory selected. Use pickFolderRead() first.");console.log("SceneFS: Loading scene from folder...");const r=await this.readJSON("scene.json").catch(()=>null);if(r&&Array.isArray(r.scenes))return console.log("SceneFS: Detected unified scenes schema; loading per view"),await this.loadScenesArrayIntoApp(e,r),console.log("SceneFS: Scene (scenes[]) loaded successfully"),r;if(r){const i=this.normalizeSceneManifest(r);if(i)return await this.loadManifestIntoApp(e,i),console.log("SceneFS: Scene loaded successfully"),r}const n=await this.findSceneManifestAtRoot();if(!n)throw new Error("No scene.json found in root directory");return console.log(`SceneFS: Found scene manifest with ${n.assets.length} assets`),await this.loadManifestIntoApp(e,n),console.log("SceneFS: Scene loaded successfully"),n}catch(r){throw console.error("SceneFS: Failed to load scene:",r),r}}async loadScenesArrayIntoApp(e,t){const s=t.scenes.length,r=i=>i===0?"left":"right";t.env&&(t.env.gaussianScale!==void 0&&typeof e.setGaussianScale=="function"&&e.setGaussianScale(t.env.gaussianScale),t.env.bgColor&&typeof e.setBackgroundColor=="function"&&e.setBackgroundColor(t.env.bgColor));const n=new Map;for(let i=0;i<s;i++){const o=r(i),a=t.scenes[i]||{},l=Array.isArray(a?.models)?a.models:[],c=typeof e.getSceneView=="function"?e.getSceneView(o):null,d=typeof e.getAnimationControllerForView=="function"?e.getAnimationControllerForView(o):null;c&&typeof c.clearScene=="function"&&c.clearScene(),c&&typeof c.clearSelection=="function"&&c.clearSelection(),d&&typeof d.replaceGlobalKeyframes=="function"&&d.replaceGlobalKeyframes([]);for(const u of l){if(!u)continue;const p=u.typeTag||"fileModel";if(p==="fileModel"){const h=this.resolveModelSource(u);if(!h){console.warn("SceneFS: fileModel 缺少可识别的资源路径，跳过",u);continue}if((typeof u?.type=="string"?u.type.toLowerCase():"")==="url"||this.isHttpUrl(h))try{await this.loadModelFromUrl(e,c,o,h,u)}catch(g){console.warn("SceneFS: 通过 URL 加载模型失败:",g);continue}else{let g=n.get(h);if(!g)try{g=await this.fileFromRelativePath(h),n.set(h,g)}catch(m){console.warn(`SceneFS: 无法加载模型 ${h}`,m);continue}if(typeof e.loadSerializedFileModel=="function")await e.loadSerializedFileModel(o,g,u);else{const m=u?.type==="onnx"||u?.type==="ply"?u.type:"ply",x=u?.name??this.extractFileNameFromPath(h);m==="onnx"?typeof e.loadONNXModelToView=="function"?await e.loadONNXModelToView(o,g,x,!u?.dynamic):typeof e.loadONNXModel=="function"&&await e.loadONNXModel(g,x,!u?.dynamic):typeof e.loadPLYToView=="function"?await e.loadPLYToView(o,g):typeof e.loadPLY=="function"&&await e.loadPLY(g);const b=Array.isArray(u?.trs)?u.trs:void 0;if(b){const P=typeof e.getModelManagerForView=="function"?e.getModelManagerForView(o):e.getModelManager?.();if(P){const T=Array.isArray(b[0])?b[0]:void 0,S=Array.isArray(b[1])?b[1]:void 0,$=Array.isArray(b[2])?b[2]:void 0;T&&typeof P.setModelPosition=="function"&&P.setModelPosition(x,T[0]||0,T[1]||0,T[2]||0),S&&typeof P.setModelRotation=="function"&&P.setModelRotation(x,S[0]||0,S[1]||0,S[2]||0),$&&typeof P.setModelScale=="function"&&(Array.isArray($),P.setModelScale(x,$))}}}}if(c&&u.gaussianParams&&typeof c.applyGaussianParams=="function"){const g=u.id||u.name;c.applyGaussianParams(g,u.gaussianParams)}c&&Array.isArray(u.trs)&&typeof c.applyTRSToObject=="function"&&c.applyTRSToObject(u.id||u.name,u.trs)}else if(p==="url")try{const h=this.resolveModelSource(u);if(!h){console.warn("SceneFS: url 缺少可识别的资源路径，跳过",u);continue}await this.loadModelFromUrl(e,c,o,h,u)}catch(h){console.warn("SceneFS: 通过 URL 加载模型失败:",h);continue}else p==="recordingCamera"?c&&typeof c.restoreRecordingCameraFromSerialized=="function"?c.restoreRecordingCameraFromSerialized(u.id,u.name,Array.isArray(u.trs)?u.trs:void 0,u.params):console.warn("SceneFS: 当前视窗不支持恢复录制相机对象",u):c&&typeof c.restorePrimitiveFromSerialized=="function"?(c.restorePrimitiveFromSerialized(p,u.id,u.name,u.params),Array.isArray(u.trs)&&typeof c.applyTRSToObject=="function"&&c.applyTRSToObject(u.id,u.trs)):console.warn("SceneFS: 未知或暂不支持的对象类型标签",p,u)}Array.isArray(a.keyframes)&&d&&typeof d.loadKeyframesFromSerialized=="function"&&d.loadKeyframesFromSerialized(a.keyframes)}}async loadSceneDataIntoApp(e,t){if(!t||typeof t!="object")throw new Error("SceneFS: Provided scene data is empty or invalid");if(Array.isArray(t.scenes)){await this.loadScenesArrayIntoApp(e,t);return}const s=this.normalizeSceneManifest(t);if(!s)throw new Error("SceneFS: Unsupported scene data format. Expect scenes[] or assets[].");await this.loadManifestIntoApp(e,s)}async loadModelFromUrl(e,t,s,r,n){const i=n?.id,o=n?.name,a=r;if(t&&typeof t.loadModel=="function"){const c={};i&&(c.forcedId=i),o&&(c.displayName=o),await t.loadModel(a,c);return}const l=a.toLowerCase();if(l.endsWith(".onnx")){if(typeof e.loadONNXModel=="function"){await e.loadONNXModel(a,o??void 0,!n?.dynamic);return}}else if(l.endsWith(".ply")||l.endsWith(".glb")||l.endsWith(".gltf")){if(typeof e.loadPLY=="function"){await e.loadPLY(a);return}if(typeof e.loadSample=="function"){await e.loadSample(a);return}}else if(typeof e.loadSample=="function"){await e.loadSample(a);return}throw new Error(`SceneFS: 无法通过 URL 加载模型，缺少匹配的加载接口 (${a})`)}resolveModelSource(e){if(!e||typeof e!="object")return null;const t=[e.assetName,e.path,e.url,e.source,e?.extras?.urlFallback,e.name];for(const s of t)if(typeof s=="string"&&s.trim().length>0)return s.trim();return null}normalizeSceneManifest(e){if(!e||typeof e!="object")return null;if(Array.isArray(e.scenes)){const t=e.scenes,s=[];for(const r of t){const n=Array.isArray(r?.models)?r.models:[];for(const i of n){const o=this.resolveModelSource(i);if(!o){console.warn("SceneFS: 无法从 scenes[] 中推断模型路径，跳过",i);continue}const a=typeof i?.type=="string"?i.type.toLowerCase():"",l=hs(a)?a:a==="url"?"url":"ply",d={name:typeof i?.name=="string"&&i.name.length>0?i.name:this.extractFileNameFromPath(o),type:l,path:o};i?.dynamic!==void 0&&(d.dynamic=!!i.dynamic);const u=Array.isArray(i?.trs)?i.trs:void 0;u&&(d.transform={position:Array.isArray(u[0])?[Number(u[0][0]??0),Number(u[0][1]??0),Number(u[0][2]??0)]:void 0,rotationEulerRad:Array.isArray(u[1])?[Number(u[1][0]??0),Number(u[1][1]??0),Number(u[1][2]??0)]:void 0,scale:Array.isArray(u[2])?[Number(u[2][0]??1),Number(u[2][1]??1),Number(u[2][2]??1)]:void 0}),i?.extras?d.extras=i.extras:this.isHttpUrl(o)&&(d.extras={urlFallback:o}),s.push(d)}}return s.length===0?null:{version:1,meta:e.meta??{app:"VisionaryEditor",createdAt:new Date().toISOString()},env:e.env??{},assets:s}}if(Array.isArray(e.assets)){const t=[];for(const s of e.assets){if(!s||typeof s!="object")continue;const r=this.resolveModelSource(s);if(!r){console.warn("SceneFS: 资产缺少路径/URL，跳过",s);continue}const n=typeof s.type=="string"?s.type.toLowerCase():"",i=hs(n)?n:n==="url"?"url":"ply",a={name:typeof s.name=="string"&&s.name.length>0?s.name:this.extractFileNameFromPath(r),type:i,path:r};s.dynamic!==void 0&&(a.dynamic=!!s.dynamic),s.transform&&(a.transform=s.transform),s.extras?a.extras=s.extras:this.isHttpUrl(r)&&(a.extras={urlFallback:r}),t.push(a)}return t.length===0?null:{version:1,meta:e.meta??{app:"VisionaryEditor",createdAt:new Date().toISOString()},env:e.env??{},assets:t}}return null}isHttpUrl(e){return typeof e=="string"&&/^https?:\/\//i.test(e)}async fetchFileFromUrl(e){const t=await fetch(e);if(!t.ok)throw new Error(`Failed to fetch ${e}: ${t.status} ${t.statusText}`);const s=await t.blob(),r=this.extractFileNameFromPath(e),n=s.type&&s.type.length>0?s.type:this.guessMimeType(r);return new File([s],r,{type:n})}extractFileNameFromPath(e){if(!e)return"model";try{const i=new URL(e).pathname.split("/").filter(Boolean).pop();if(i)return i.split("?")[0].split("#")[0]}catch{}const s=e.split("/").filter(Boolean).pop();return!s||s.length===0?e:s.split("?")[0].split("#")[0]}guessMimeType(e){switch(e.split(".").pop()?.toLowerCase()){case"onnx":return"application/octet-stream";case"ply":return"application/octet-stream";case"fbx":return"application/octet-stream";case"json":return"application/json";default:return"application/octet-stream"}}async loadUrlAsset(e,t,s){const r=t.toLowerCase();if(r.endsWith(".onnx")){if(typeof e.loadONNXModel=="function"){await e.loadONNXModel(t,s.name,!s.dynamic);return}}else if(r.endsWith(".ply")||r.endsWith(".glb")||r.endsWith(".gltf")){if(typeof e.loadPLY=="function"){await e.loadPLY(t);return}if(typeof e.loadSample=="function"){await e.loadSample(t);return}}else if(typeof e.loadSample=="function"){await e.loadSample(t);return}throw new Error(`SceneFS: 无法通过 URL 加载资产 ${s.name} (${t})`)}async saveToFolder(e){return this.saveSceneToFolderSmart(e)}async ensurePermission(e,t){if(await e.queryPermission({mode:t})==="granted")return;if(await e.requestPermission({mode:t})!=="granted")throw new Error(`${t} permission denied for directory`)}async fileFromRelativePath(e){if(this.isHttpUrl(e))return this.fetchFileFromUrl(e);if(!this.rootHandle)throw new Error("No root directory handle");const t=e.split("/").filter(n=>n.length>0);let s=this.rootHandle;for(let n=0;n<t.length-1;n++){const i=t[n];try{s=await s.getDirectoryHandle(i)}catch{throw new Error(`Directory not found: ${t.slice(0,n+1).join("/")}`)}}const r=t[t.length-1];try{return await(await s.getFileHandle(r)).getFile()}catch{throw new Error(`File not found: ${e}`)}}async readJSON(e){if(!this.rootHandle)throw new Error("No root directory handle");try{const r=await(await(await this.rootHandle.getFileHandle(e)).getFile()).text();return JSON.parse(r)}catch(t){throw new Error(`Failed to read ${e}: ${t.message}`)}}async writeJSONToRoot(e,t){if(!this.rootHandle)throw new Error("No root directory handle");try{const r=await(await this.rootHandle.getFileHandle(e,{create:!0})).createWritable();await r.write(JSON.stringify(t,null,2)),await r.close()}catch(s){throw new Error(`Failed to write ${e}: ${s.message}`)}}async findSceneManifestAtRoot(){try{const e=await this.readJSON("scene.json"),t=this.normalizeSceneManifest(e);if(t)return t;throw new Error("Invalid scene.json format")}catch(e){return console.warn("SceneFS: No valid scene.json found or parse failed:",e.message),null}}async loadManifestIntoApp(e,t){console.log("SceneFS: Loading manifest into app...");const s=new Set(e.getModels().map(n=>n.id));t.env&&(t.env.gaussianScale!==void 0&&(e.setGaussianScale(t.env.gaussianScale),console.log(`SceneFS: Set gaussian scale to ${t.env.gaussianScale}`)),t.env.bgColor&&(e.setBackgroundColor(t.env.bgColor),console.log(`SceneFS: Set background color to ${t.env.bgColor}`)));const r=t.assets.map(async(n,i)=>{try{if(console.log(`SceneFS: Loading asset ${i+1}/${t.assets.length}: ${n.name} (${n.type})`),n.type==="url"||this.isHttpUrl(n.path)){const o=n.type==="url"||this.isHttpUrl(n.path)?n.path:n.extras?.urlFallback;if(!o)throw new Error(`Invalid URL asset path for ${n.name}`);await this.loadUrlAsset(e,o,n)}else{let o=null,a=!1;try{o=await this.fileFromRelativePath(n.path)}catch(l){if(n.extras?.urlFallback)console.warn(`SceneFS: Local file not found, trying fallback URL: ${n.extras.urlFallback}`),a=!0,o=null;else throw new Error(`File not found: ${n.path} (${l.message})`)}if(n.type==="onnx")a&&n.extras?.urlFallback?(console.log(`SceneFS: Loading ONNX asset from URL: ${n.extras.urlFallback}`),await e.loadONNXModel(n.extras.urlFallback,n.name,!n.dynamic)):(console.log(`SceneFS: Loading ONNX asset from File: ${n.name}`),await e.loadONNXModel(o,n.name,!n.dynamic));else if(n.type==="ply"||n.type==="fbx")a&&n.extras?.urlFallback?(console.log(`SceneFS: Loading ${n.type.toUpperCase()} asset from URL: ${n.extras.urlFallback}`),n.type==="fbx"&&typeof e.loadFBX=="function"?await e.loadFBX(n.extras.urlFallback):await e.loadPLY(n.extras.urlFallback)):(console.log(`SceneFS: Loading ${n.type.toUpperCase()} asset from File: ${n.name}`),n.type==="fbx"&&typeof e.loadFBX=="function"?await e.loadFBX(o):await e.loadPLY(o,{debugLogging:!0}));else{console.warn(`SceneFS: Unknown asset type: ${n.type}`);return}}console.log(`SceneFS: Successfully loaded ${n.name}`)}catch(o){console.error(`SceneFS: Failed to load asset ${n.name}:`,o)}});await Promise.allSettled(r),await this.applyTransforms(e,t.assets,s)}async applyTransforms(e,t,s){await new Promise(i=>setTimeout(i,100));const n=e.getModels().filter(i=>!s.has(i.id));console.log(`SceneFS: Applying transforms to ${n.length} newly loaded models`);for(const i of t){if(!i.transform)continue;let o=n.find(c=>c.name===i.name);if(o||(o=n.find(c=>c.name.includes(i.name)||i.name.includes(c.name))),!o){console.warn(`SceneFS: Could not find model to apply transform: ${i.name}`);continue}const a=e.getModelManager(),l=i.transform;if(l.position&&a.setModelPosition(o.id,...l.position),l.rotationEulerRad&&a.setModelRotation(o.id,...l.rotationEulerRad),l.scale){const[c,d,u]=l.scale;c===d&&d===u?a.setModelScale(o.id,c):a.setModelScale(o.id,l.scale)}console.log(`SceneFS: Applied transforms to ${o.name}`)}}async buildManifestFromApp(e){const t=e.getModels(),s=e.__transformTracker,r=[],n=[],i=[];for(const a of t){const l=s?.getSource(a.id),c=s?.getTransform(a.id);if(!l){n.push({name:a.name,reason:"No source tracking information available"});continue}if(l.kind!=="relative"){if(l.url==="<file-input>"&&this.rootHandle&&this.permissions==="readwrite"){const v=await this.findFileInSceneDirectory(l.originalName);if(v){i.push({model:a,source:l,suggestedPath:v}),n.push({name:a.name,reason:"Uploaded file (found in scene directory - can be converted)",model:a,source:l});continue}}const h=l.url==="<file-input>"?"Uploaded file (cannot be referenced by relative path)":"Loaded from URL (not a local file)";n.push({name:a.name,reason:h,model:a,source:l});continue}const d=typeof l.path=="string"?l.path.split("/").filter(Boolean).pop():void 0,u=l.originalName||d||a.name,p={name:u,type:a.modelType,path:u};a.modelType==="onnx"&&a.isDynamic&&(p.dynamic=!0),c&&(c.position&&(c.position[0]!==0||c.position[1]!==0||c.position[2]!==0)||c.rotationEulerRad&&(c.rotationEulerRad[0]!==0||c.rotationEulerRad[1]!==0||c.rotationEulerRad[2]!==0)||c.scale&&(c.scale[0]!==1||c.scale[1]!==1||c.scale[2]!==1))&&(p.transform=c),r.push(p)}const o={version:1,meta:{app:"WebGaussianJS",createdAt:new Date().toISOString(),unit:"meter"},env:{bgColor:e.getBackgroundColor(),gaussianScale:e.getGaussianScale()},assets:r};return console.log(`SceneFS: Scene manifest built - ${r.length} models included, ${n.length} models skipped`),i.length>0&&(console.log(`SceneFS: Found ${i.length} uploaded files that exist in the scene directory:`),i.forEach(({model:a,source:l,suggestedPath:c})=>{console.log(`  • ${a.name}: ${c}`)})),n.length>0&&(console.log("SceneFS: Skipped models (cannot be included in reproducible scenes):"),n.forEach(({name:a,reason:l})=>{console.log(`  • ${a}: ${l}`)}),console.log("SceneFS: Note - Only models loaded from local files with relative paths can be saved to scenes")),r.length>0&&(console.log("SceneFS: Included models:"),r.forEach(a=>{console.log(`  • ${a.name} (${a.type}): ${a.path}`)})),{manifest:o,convertibleModels:i.length>0?i:void 0}}async findFileInSceneDirectory(e){if(!this.rootHandle)return null;try{try{const t=await this.rootHandle.getFileHandle(e);return e}catch{}return await this.searchDirectoryRecursively(this.rootHandle,e,"")}catch(t){return console.warn(`SceneFS: Error searching for file ${e}:`,t),null}}async searchDirectoryRecursively(e,t,s){try{for await(const[r,n]of e){const i=s?`${s}/${r}`:r;if(n.kind==="file"&&r===t)return i;if(n.kind==="directory"&&i.split("/").length<10){const a=await this.searchDirectoryRecursively(n,t,i);if(a)return a}}}catch(r){console.warn(`SceneFS: Could not search directory ${s}:`,r)}return null}async convertUploadedFilesToRelative(e,t){const s=e.__transformTracker;if(!s)throw new Error("Transform tracker not available");for(const{modelId:r,relativePath:n}of t){const i=s.getSource(r);if(i&&i.url==="<file-input>"){const o={kind:"relative",path:n,originalName:i.originalName};s.updateSource(r,o),console.log(`SceneFS: Converted model ${r} to relative path: ${n}`)}}}async saveSceneToFolderSmart(e){if(!this.rootHandle||this.permissions!=="readwrite")throw new Error("No writable folder selected. Use pickFolderWrite() first.");console.log("SceneFS: Building manifest and checking for convertible files...");const{manifest:t,convertibleModels:s}=await this.buildManifestFromApp(e);if(s&&s.length>0)if(await this.promptUserForConversion(s)){const n=s.map(({model:o,suggestedPath:a})=>({modelId:o.id,relativePath:a}));await this.convertUploadedFilesToRelative(e,n);const{manifest:i}=await this.buildManifestFromApp(e);await this.writeManifest(i)}else await this.writeManifest(t);else await this.writeManifest(t);console.log("SceneFS: Scene saved successfully")}async promptUserForConversion(e){const t=e.map(({model:s,suggestedPath:r})=>`• ${s.name} → ${r}`).join(`
`);return confirm(`Found ${e.length} uploaded file(s) that exist in the scene directory:

${t}

Would you like to convert these to use relative paths so they can be included in the scene?`)}async writeManifest(e){if(!this.rootHandle)throw new Error("No root handle available");const t=JSON.stringify(e,null,2),r=await(await this.rootHandle.getFileHandle("scene.json",{create:!0})).createWritable();await r.write(t),await r.close(),console.log("SceneFS: Wrote scene.json with",e.assets.length,"assets")}getPermissions(){return this.permissions}hasFolder(){return this.rootHandle!==null}getFolderName(){return this.rootHandle?.name||null}}export{Ye as E,Nn as G,Ke as O,Vn as R,jn as S,Un as V,Bn as a,ct as b,zn as c,Hn as e,Wn as i,In as l,$n as s};
//# sourceMappingURL=visionary-core-BpFg0DDQ.js.map
