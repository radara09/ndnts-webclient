import { connectToNetwork, connectToRouter } from "@ndn/autoconfig";
import { Endpoint } from "@ndn/endpoint";
import { AltUri, Interest, Name } from "@ndn/packet";
import { WsTransport } from "@ndn/ws-transport";

async function ping(evt) {
  evt.preventDefault();
  // Disable the submit button during function execution.
  const $button = document.querySelector("#app_button");
  $button.disabled = true;

  try {
    // Construct the name prefix <user-input>+/ping
    const prefix = new Name(document.querySelector("#app_prefix").value);
    const app = document.querySelector("#app_param").value;
    const $log = document.querySelector("#app_log");
    $log.textContent = `Check Data \n${AltUri.ofName(prefix)}\n`;

    const endpoint = new Endpoint();
    const encoder = new TextEncoder();
    // Generate a random number as initial sequence number.
    let seqNum = Math.trunc(Math.random() * 1e8);
    for (let i = 0; i < 3; ++i) {
      ++seqNum;
      // Construct an Interest with prefix + seqNum.
      const interest = new Interest();
      interest.name = prefix;
      interest.mustBeFresh = true; 
      interest.lifetime = 1000;
      interest.appParameters = encoder.encode(app);
      $log.textContent += `\n${encoder.encode(app)}\n`;
      const t0 = Date.now();
      await interest.updateParamsDigest();
      try {
        // Retrieve Data and compute round-trip time.
        const data = await endpoint.consume(interest);
        const rtt = Date.now() - t0;
        const dataContent = data.content;
        //console.log(dataContent);
        $log.textContent += `${AltUri.ofName(data.name)} rtt= ${rtt}ms content= ${String.fromCharCode(...dataContent)}\n`;
        console.log(`${rtt} ms`);
      } catch(err) {
        // Report Data retrieval error.
        $log.textContent += `\n${AltUri.ofName(interest.name)} ${err}`;
      }

      // Delay 500ms before sending the next Interest.
      await new Promise((r) => setTimeout(r, 500));
    }
  } finally {
    // Re-enable the submit button.
    $button.disabled = false;
  }
}

async function main() {
  // Connect to the global NDN network in one line.
  // This function queries the NDN-FCH service, and connects to the nearest router.
  //await WsTransport.createFace({}, "wss://ndn-ehealth.australiaeast.cloudapp.azure.com");
  const face = await WsTransport.createFace({}, "wss://hmbe.ndntel-u.my.id:9696");
  //await WsTransport.createFace({}, "wss://20.92.254.187:9696/");
  //await WsTransport.createFace({}, "wss://104.21.31.135:9696/");
  face.addRoute(new Name("/"));
  //await connectToRouter("wss://192.168.56.106:9696/ws/", {});
  //await WsTransport.createFace({}, "wss://testbed-ndn-rg.stei.itb.ac.id/ws/");
  //await WsTransport.createFace({}, "ws://192.168.56.111:9696/ws/");
  //await WsTransport.createFace({}, "ws://coba.ndntel-u.my.id/ws/");

  // Enable the form after connection was successful.
  document.querySelector("#app_button").disabled = false;
  document.querySelector("#app_form").addEventListener("submit", ping);
}

window.addEventListener("load", main);





/*
import { AltUri, Interest, Name } from "@ndn/packet"; //import lib

async function ping() { //membuat fungsi async
    const prefix = new Name(document.querySelector("#app_prefix").value); //membuat const baru dari id #app_prefix dari form
    const app = document.querySelector("#app_param").value; //membuat const baru dari id #app_param dari form
    const $log = document.querySelector("#app_log"); //membuat const baru dari id #app_log dari form
    const encoder = new TextEncoder(); //membuat const baru untuk fungsi TextEncoder
    const interest = new Interest();  //membuat const baru untuk fungsi Interest
    interest.name = prefix; //membuat const baru untuk dari fungsi interest dan name
    interest.appParameters = encoder.encode(app); //melakukan encode packet ndn
    $log.textContent += `content= ${String.fromCharCode(...dataContent)}\n`; //print data respon
}

*/
