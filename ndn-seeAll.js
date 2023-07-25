import { AltUri, Interest, Name } from "@ndn/packet";
 import { WsTransport } from "@ndn/ws-transport";
 import { Endpoint } from "@ndn/endpoint";

async function ping(evt) { //membuat fungsi async
  evt.preventDefault();
  const prefix = new Name(document.querySelector("#app_prefix").value); //membuat const baru dari id #app_prefix dari form
  const app = document.querySelector("#app_param").value; //membuat const baru dari id #app_param dari form
  const $log = document.querySelector("#app_log"); //membuat const baru dari id #app_log dari form
  
  const endpoint = new Endpoint();
  const encoder = new TextEncoder(); //membuat const baru untuk fungsi TextEncoder
  const interest = new Interest();  //membuat const baru untuk fungsi Interest
  
  interest.name = prefix; //membuat const baru untuk dari fungsi interest dan name
  interest.mustBeFresh = true; 
  interest.lifetime = 1000;
  interest.appParameters = encoder.encode(app); //melakukan encode packet ndn
  await interest.updateParamsDigest();
  
  //console.log(`ini dari ${app} dan ini dari ${interest.appParameters}`);
  //console.log(app)
  const t0 = Date.now();
  const data = await endpoint.consume(interest);
  const rtt = Date.now() - t0;
  const dataContent = data.content;
  
  $log.textContent += `content= ${String.fromCharCode(...dataContent)}\n`; //print data respon
  console.log(interest.appParameters)
  console.log(`${rtt} ms`);
}

async function main() {
  // Connect to the global NDN network in one line.
  // This function queries the NDN-FCH service, and connects to the nearest router.
  //await WsTransport.createFace({}, "wss://ndn-ehealth.australiaeast.cloudapp.azure.com");
  const face = await WsTransport.createFace({}, "wss://hmbe.ndntel-u.my.id:9696");
  //const face = await WsTransport.createFace({}, "wss://scbe.ndntel-u.my.id:9696");
  //await WsTransport.createFace({}, "wss://20.92.254.187:9696/");
  //await WsTransport.createFace({}, "wss://104.21.31.135:9696/");
  face.addRoute(new Name("/"));
  //await connectToRouter("wss://192.168.56.106:9696/ws/", {});
  //await WsTransport.createFace({}, "wss://testbed-ndn-rg.stei.itb.ac.id/ws/");
  //await WsTransport.createFace({}, "ws://192.168.56.111:9696/ws/");
  //await WsTransport.createFace({}, "ws://coba.ndntel-u.my.id/ws/");

  // Enable the form after connection was successful.
  document.querySelector("#app_form").addEventListener("submit", ping);
}
window.addEventListener("load", main);
