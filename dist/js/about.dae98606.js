(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"450e":function(i,a,e){"use strict";e.r(a);var t=function(){var i=this,a=i.$createElement,e=i._self._c||a;return e("section",{staticClass:"tw-mt-20 tw-bg-purple-800 tw-w-full tw-flex tw-flex-col",attrs:{"x-data":"{\n    skip: 1,\n    next() {\n        this.to((current, offset) => current + (offset * this.skip))\n    },\n    prev() {\n        this.to((current, offset) => current - (offset * this.skip))\n    },\n    to(strategy) {\n        let slider = this.$refs.slider\n        let current = slider.scrollLeft\n        let offset = slider.firstElementChild.getBoundingClientRect().width\n        slider.scrollTo({ left: strategy(current, offset), behavior: 'smooth' })\n    },\n    focusableWhenVisible: {\n        'x-intersect:enter'() {\n            this.$el.removeAttribute('tabindex')\n        },\n        'x-intersect:leave'() {\n            this.$el.setAttribute('tabindex', '-1')\n        }\n    }\n}"}},[e("h2",{staticClass:"tw-uppercase tw-text-2xl tw-text-left"},[i._v("Matching Items")]),e("div",{staticClass:"tw-flex tw-bg-purple-400",attrs:{"x-on:keydown.right":"next","x-on:keydown.left":"prev",tabindex:"0",role:"region"}},[i._m(0),e("ul",{staticClass:"tw-no-scroll-style tw-flex tw-mt-8 tw-w-full tw-overflow-y-hidden tw-overflow-x-auto md:tw-overflow-x-auto tw-gap-8 tw-snap-x tw-snap-mandatory tw-scroll-smooth tw-bg-purple-100 tw-snap-start",attrs:{"x-ref":"slider",tabindex:"0",role:"listbox"}},i._l(this.items,(function(a){return e("li",{key:a.sku,staticClass:"tw-snap-center"},[e("div",{staticClass:"tw-w-[200px] tw-border tw-overflow-hidden tw-relative tw-shrink tw-p-4 tw-bg-white md:hover:tw-drop-shadow-xl"},[e("span",{staticClass:"tw-absolute tw-z-20 tw-right-4 tw-h-[20px] tw-w-[20px] tw-bg-red-100 tw-text-center"},[i._v("A")]),e("a",{attrs:{href:a.url,title:a.title}},[e("div",{staticClass:"tw-relative tw-z-10"},[e("img",{staticClass:"tw-z-20 tw-relative tw-block tw-w-full",attrs:{width:"178",height:"178",src:a.img,alt:a.title}}),e("div",{staticClass:"tw-z-15 tw-absolute tw-w-[9] tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-slate-200 tw-animate-pulse"})]),e("h3",{staticClass:"tw-text-black tw-text-base tw-line-clamp-2"},[i._v(i._s(a.title))]),e("div",{staticClass:"tw-flex tw-justify-between tw-mt-4"},[e("div",{staticClass:"tw-uppercase tw-text-brand-secondary tw-text-base"},[i._v(i._s(a.sku))]),e("div",{staticClass:"tw-font-bold tw-text-black tw-text-base",domProps:{innerHTML:i._s(a.price)}})])])])])})),0),i._m(1)])])},r=[function(){var i=this,a=i.$createElement,e=i._self._c||a;return e("button",{staticClass:"tw-text-6xl tw-hidden md:tw-block tw-bg-red-700",attrs:{"x-on:click":"prev"}},[e("span",{staticClass:"tw-text-brand-secondary",attrs:{"aria-hidden":"true"}},[i._v("❮")]),e("span",{staticClass:"tw-sr-only",attrs:{hidden:""}},[i._v("Skip to previous slide")])])},function(){var i=this,a=i.$createElement,e=i._self._c||a;return e("button",{staticClass:"tw-text-6xl tw-hidden md:tw-block",attrs:{"x-on:click":"next"}},[e("span",{staticClass:"tw-text-brand-secondary",attrs:{"aria-hidden":"true"}},[i._v("❯")]),e("span",{staticClass:"tw-sr-only",attrs:{hidden:""}},[i._v("Skip to next slide")])])}],p=[{sku:"LR4576W45JJ",title:"14K White Gold Stackable Diamond Band",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="43926" data-price-box="product-id-43926"> <span class="price-container price-final_price tax weee" > <span id="product-price-43926" data-price-amount="1070" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,070</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Stackable-Diamond-Band~LR4576W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-stackable-diamond-band-lr4576w45jj"},{sku:"LR4579Y45JJ",title:"14K Yellow Gold Geometric Stackable Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="34484" data-price-box="product-id-34484"> <span class="price-container price-final_price tax weee" > <span id="product-price-34484" data-price-amount="1045" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,045</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Geometric-Stackable-Diamond-Ring~LR4579Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-geometric-stackable-diamond-ring-lr4579y45jj"},{sku:"LR4593W45JJ",title:"14K White Gold Scrolling Floral Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32438" data-price-box="product-id-32438"> <span class="price-container price-final_price tax weee" > <span id="product-price-32438" data-price-amount="815" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$815</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Scrolling-Floral-Diamond-Ring~LR4593W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-scrolling-floral-diamond-ring-lr4593w45jj"},{sku:"LR4593Y45JJ",title:"14K Yellow Gold Scrolling Floral Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="34515" data-price-box="product-id-34515"> <span class="price-container price-final_price tax weee" > <span id="product-price-34515" data-price-amount="815" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$815</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Scrolling-Floral-Diamond-Ring~LR4593Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-scrolling-floral-diamond-ring-lr4593y45jj"},{sku:"LR4748W45JJ",title:"14K White Gold Pear and Round Station Stackable Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32441" data-price-box="product-id-32441"> <span class="price-container price-final_price tax weee" > <span id="product-price-32441" data-price-amount="850" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$850</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Pear-and-Round-Station-Stackable-Diamond-Ring~LR4748W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-pear-and-round-station-stackable-diamond-ring-lr4748w45jj"},{sku:"LR4750W45JJ",title:"14K White Gold Graduating Station Diamond Stackable Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="34550" data-price-box="product-id-34550"> <span class="price-container price-final_price tax weee" > <span id="product-price-34550" data-price-amount="895" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$895</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Graduating-Station-Diamond-Stackable-Ring~LR4750W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-graduating-station-diamond-stackable-ring-lr4750w45jj"},{sku:"LR4801W45JJ",title:"14K White Gold Scalloped Stackable Diamond Band",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="34568" data-price-box="product-id-34568"> <span class="price-container price-final_price tax weee" > <span id="product-price-34568" data-price-amount="640" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$640</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Scalloped-Stackable-Diamond-Band~LR4801W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-scalloped-stackable-diamond-band-lr4801w45jj"},{sku:"LR50553W45JJ",title:"14K White Gold Open Link Diamond Station Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="34648" data-price-box="product-id-34648"> <span class="price-container price-final_price tax weee" > <span id="product-price-34648" data-price-amount="1255" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,255</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Open-Link-Diamond-Station-Ring~LR50553W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-open-link-diamond-station-ring-lr50553w45jj"},{sku:"LR50886Y45JJ",title:"14K Yellow Gold Twisted Diamond Stackable Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32596" data-price-box="product-id-32596"> <span class="price-container price-final_price tax weee" > <span id="product-price-32596" data-price-amount="895" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$895</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Twisted-Diamond-Stackable-Ring~LR50886Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-twisted-diamond-stackable-ring-lr50886y45jj"},{sku:"LR50890Y45PE",title:"14K Yellow Gold Cushion Cut Peridot and Diamond Halo Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32701" data-price-box="product-id-32701"> <span class="price-container price-final_price tax weee" > <span id="product-price-32701" data-price-amount="695" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$695</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Cushion-Cut-Peridot-and-Diamond-Halo-Ring~LR50890Y45PE-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-cushion-cut-peridot-and-diamond-halo-ring-lr50890y45pe"},{sku:"LR50992Y45JJ",title:"14K Yellow Gold Stackable Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32664" data-price-box="product-id-32664"> <span class="price-container price-final_price tax weee" > <span id="product-price-32664" data-price-amount="1155" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,155</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Stackable-Diamond-Ring~LR50992Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-stackable-diamond-ring-lr50992y45jj"},{sku:"LR51169W45JJ",title:"14K White Gold Criss Cross Diamond Stackable Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="34893" data-price-box="product-id-34893"> <span class="price-container price-final_price tax weee" > <span id="product-price-34893" data-price-amount="1015" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,015</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Criss-Cross-Diamond-Stackable-Ring~LR51169W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-criss-cross-diamond-stackable-ring-lr51169w45jj"},{sku:"LR51174Y45JJ",title:"14K Yellow Gold Hexagonal Station Stackable Diamond Band",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32886" data-price-box="product-id-32886"> <span class="price-container price-final_price tax weee" > <span id="product-price-32886" data-price-amount="1310" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,310</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Hexagonal-Station-Stackable-Diamond-Band~LR51174Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-hexagonal-station-stackable-diamond-band-lr51174y45jj"},{sku:"LR51175W45JJ",title:"14K White Gold Chain Link Stackable Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32789" data-price-box="product-id-32789"> <span class="price-container price-final_price tax weee" > <span id="product-price-32789" data-price-amount="1015" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,015</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Chain-Link-Stackable-Diamond-Ring~LR51175W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-chain-link-stackable-diamond-ring-lr51175w45jj"},{sku:"LR51175Y45JJ",title:"14K Yellow Gold Chain Link Stackable Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="34895" data-price-box="product-id-34895"> <span class="price-container price-final_price tax weee" > <span id="product-price-34895" data-price-amount="1015" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,015</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Chain-Link-Stackable-Diamond-Ring~LR51175Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-chain-link-stackable-diamond-ring-lr51175y45jj"},{sku:"LR51176W45JJ",title:"14K White Gold Segmented Diamond Stackable Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32887" data-price-box="product-id-32887"> <span class="price-container price-final_price tax weee" > <span id="product-price-32887" data-price-amount="750" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$750</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Segmented-Diamond-Stackable-Ring~LR51176W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-segmented-diamond-stackable-ring-lr51176w45jj"},{sku:"LR51176Y45JJ",title:"14K Yellow Gold Segmented Diamond Stackable Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="34896" data-price-box="product-id-34896"> <span class="price-container price-final_price tax weee" > <span id="product-price-34896" data-price-amount="750" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$750</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Segmented-Diamond-Stackable-Ring~LR51176Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-segmented-diamond-stackable-ring-lr51176y45jj"},{sku:"LR51179W45JJ",title:"14K White Gold Diamond Cluster Triangle Station Band",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32791" data-price-box="product-id-32791"> <span class="price-container price-final_price tax weee" > <span id="product-price-32791" data-price-amount="1290" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,290</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Diamond-Cluster-Triangle-Station-Band~LR51179W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-diamond-cluster-triangle-station-band-lr51179w45jj"},{sku:"LR51180W45JJ",title:"14K White Gold Diamond Pavé Station Stackable Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32907" data-price-box="product-id-32907"> <span class="price-container price-final_price tax weee" > <span id="product-price-32907" data-price-amount="1355" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,355</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Diamond-Pav-Station-Stackable-Ring~LR51180W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-diamond-pave-station-stackable-ring-lr51180w45jj"},{sku:"LR51180Y45JJ",title:"14K Yellow Gold Diamond Pavé Station Stackable Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="44392" data-price-box="product-id-44392"> <span class="price-container price-final_price tax weee" > <span id="product-price-44392" data-price-amount="1355" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,355</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Diamond-Pav-Station-Stackable-Ring~LR51180Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-diamond-pave-station-stackable-ring-lr51180y45jj"},{sku:"LR51181W45JJ",title:"14K White Gold Chain Link Stackable Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="44393" data-price-box="product-id-44393"> <span class="price-container price-final_price tax weee" > <span id="product-price-44393" data-price-amount="1585" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,585</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Chain-Link-Stackable-Diamond-Ring~LR51181W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-chain-link-stackable-diamond-ring-lr51181w45jj"},{sku:"LR51182W45JJ",title:"14K White Gold Twisted Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32812" data-price-box="product-id-32812"> <span class="price-container price-final_price tax weee" > <span id="product-price-32812" data-price-amount="1025" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,025</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Twisted-Diamond-Ring~LR51182W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-twisted-diamond-ring-lr51182w45jj"},{sku:"LR51183Y45JJ",title:"14K Yellow Gold Open Circle Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="44405" data-price-box="product-id-44405"> <span class="price-container price-final_price tax weee" > <span id="product-price-44405" data-price-amount="1235" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,235</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Open-Circle-Diamond-Ring~LR51183Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-open-circle-diamond-ring-lr51183y45jj"},{sku:"LR51184Y45JJ",title:"14K Yellow Gold Open Triangular Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="32920" data-price-box="product-id-32920"> <span class="price-container price-final_price tax weee" > <span id="product-price-32920" data-price-amount="1445" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$1,445</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-Yellow-Gold-Open-Triangular-Diamond-Ring~LR51184Y45JJ-1.jpg",url:"https://gabrielny.test/14k-yellow-gold-open-triangular-diamond-ring-lr51184y45jj"},{sku:"LR51185W45JJ",title:"14K White Gold Scalloped Diamond Ring",price:'<div class="price-box price-final_price" data-role="priceBox" data-product-id="44406" data-price-box="product-id-44406"> <span class="price-container price-final_price tax weee" > <span id="product-price-44406" data-price-amount="815" data-price-type="finalPrice" class="price-wrapper" ><span class="price">$815</span></span> </span> </div>',img:"https://cdn-images.gabrielny.com/is/image/GabrielCo/ListingMediumwp/14K-White-Gold-Scalloped-Diamond-Ring~LR51185W45JJ-1.jpg",url:"https://gabrielny.test/14k-white-gold-scalloped-diamond-ring-lr51185w45jj"}],c={name:"ProductCarousel",data:function(){return{items:p}},methods:{getItemId:function(i){return"item-"+i}}},n=c,s=e("2877"),l=Object(s["a"])(n,t,r,!1,null,"75f9f1f1",null);a["default"]=l.exports},f820:function(i,a,e){"use strict";e.r(a);var t=function(){var i=this,a=i.$createElement;i._self._c;return i._m(0)},r=[function(){var i=this,a=i.$createElement,e=i._self._c||a;return e("div",{staticClass:"about"},[e("h1",[i._v("This is an about page")])])}],p=e("2877"),c={},n=Object(p["a"])(c,t,r,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=about.dae98606.js.map