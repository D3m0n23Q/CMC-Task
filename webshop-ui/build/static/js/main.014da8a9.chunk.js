(this["webpackJsonpwebshop-ui"]=this["webpackJsonpwebshop-ui"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(6),o=n.n(c),u=(n(13),n(1)),i=n(2),s=n(4),d=n(3),h=n(5),l=function(t){function e(t){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).call(this,t))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props.product;return a.a.createElement("span",null,t.name," ",t.value," ")}}]),e}(r.Component),p=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(s.a)(this,Object(d.a)(e).call(this,t))).addProductToCart=n.props.addProductToCart,n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props.product;return a.a.createElement("div",null,a.a.createElement(l,{product:t}),a.a.createElement("button",{onClick:this.addToCart.bind(this,t)},"Add to cart"))}},{key:"addToCart",value:function(t){this.addProductToCart(t)}}]),e}(r.Component),m=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return this.props.products.map((function(e){return a.a.createElement(p,{key:e.id,product:e,addProductToCart:t.props.addProductToCart})}))}}]),e}(r.Component),b=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(s.a)(this,Object(d.a)(e).call(this,t))).checkout=n.props.checkout,n.addProductToCart=n.props.addProductToCart,n.state={products:[]},fetch("/api/Products").then((function(t){return t.text()})).then((function(t){n.setState({products:t})})),n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(O,{checkout:this.checkout}),a.a.createElement(m,{products:this.state.products,addProductToCart:this.addProductToCart}))}},{key:"dojson",value:function(t){return t.json()}}]),e}(r.Component),O=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{onClick:this.props.navigateHome},"Home"),a.a.createElement("button",{onClick:this.props.checkout},"Checkout"))}}]),e}(r.Component),j=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return this.props.products.map((function(t){return a.a.createElement("div",{key:t.id},a.a.createElement(l,{product:t})," ",t.count)}))}}]),e}(r.Component),f=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(O,{navigateHome:this.props.navigateHome}),a.a.createElement("h1",null,"Checkout page"),a.a.createElement(j,{products:this.props.products}),a.a.createElement("button",{onClick:this.createOrder.bind(this)},"Purchase"))}},{key:"createOrder",value:function(){this.props.createOrder()}}]),e}(r.Component),v=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(O,{checkout:this.props.checkout,navigateHome:this.props.navigateHome}),a.a.createElement("h1",null,"Thank you!"))}}]),e}(r.Component),k=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(s.a)(this,Object(d.a)(e).call(this))).products=[],t}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement(b,{addProductToCart:this.addProductToCart.bind(this),checkout:this.checkout.bind(this)})}},{key:"addProductToCart",value:function(t){t.count=1;var e=this.products.find((function(e){return e.id==t.id}));e?e.count+=1:this.products.push(t)}},{key:"checkout",value:function(){var t=this.products.sort((function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}));o.a.render(a.a.createElement(f,{products:t,createOrder:this.createOrder.bind(this),navigateHome:this.navigateHome.bind(this)}),document.getElementById("root"))}},{key:"createOrder",value:function(){alert("Success! Your order has been submitted."),o.a.render(a.a.createElement(v,{navigateHome:this.navigateHome.bind(this)}),document.getElementById("root")),this.products=[]}},{key:"navigateHome",value:function(){o.a.render(a.a.createElement(b,{addProductToCart:this.addProductToCart.bind(this),checkout:this.checkout.bind(this)}),document.getElementById("root"))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.014da8a9.chunk.js.map