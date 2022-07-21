// Style Body
document.body.style.cssText =
    "margin:0;background-color:#ddd;font-family:sans-serif;";

// Create Header
let header = document.createElement("header");
header.className = "website-head";
header.style.cssText =
    "display:flex;justify-content:space-between;align-items:center;padding:20px;background-color:#fff;";

// Create Logo
let webName = document.createElement("div");
webName.innerHTML = "Elzero";
webName.style.cssText = "color:#4caf50;font-weight:bold;font-size:24px;";
header.prepend(webName);

// Create Links
let links = document.createElement("ul");
links.style.cssText = "display:flex;list-style-type:none;";
const words = ["Home", "About", "Services", "Contact"];
for (let i = 0; i < words.length; i++) {
    let link = document.createElement("li");
    link.innerHTML = words[i];
    link.style.marginInline = "5px";
    links.append(link);
}
header.append(links);

// Create Container For Products
let content = document.createElement("div");
content.className = "content";
content.style.cssText =
    "box-sizing:border-box;display:flex;justify-content:center;flex-flow:row wrap;gap:20px;padding:20px;min-height:calc(100vh - 142px);";

// Create Products
for (let j = 0; j < 15; j++) {
    let product = document.createElement("div");
    product.className = "product";
    product.style.cssText =
        "padding:20px;background-color:rgb(255,255,255);border:1px solid rgb(221,221,221);width:calc((100% - 40px) / 3);box-sizing:border-box;text-align:center;color:rgb(136,136,136);border-radius:6px;";
    let num = document.createElement("span");
    num.innerHTML = `${j + 1}`;
    num.style.cssText =
        "font-size:40px;display:block;font-weight:normal;margin-block:10px;color:#000;";
    let txt = (document.createTextNode = "Product");
    product.append(num);
    product.append(txt);
    content.append(product);
}

// Create Footer
let footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText =
    "background-color:rgb(35,169,110);font-size:26px;text-align:center;padding:20px;color:rgb(255,255,255);";
footer.innerHTML = "Copyright 2021 - Elzero";

// Adding Componenets to Body
document.body.prepend(footer);
document.body.prepend(content);
document.body.prepend(header);
