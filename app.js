// "use strict";
// import { create } from "ipfs-http-client";
const ipfs = require("ipfs-http-client");
const fs = require('fs');

const createClient = async () => {
  const _ipfs = ipfs.create({
    host: "localhost",
    port: '5001',
    protocol: "http",
  });
  return _ipfs;
};

const saveText = async () => {
  let ipfs = await createClient();
  let result = await ipfs.add("hello world);
  console.log(result);
};

const saveImage = async () => {
  let ipfs = await createClient();
  let data = fs.readFileSync("./firewatch.jpg")
  data = Buffer.from(data)
  let options = {
    wrapWithDirectory:false,
    progress:(prog)=>console.log(`Saved : ${prog}`)
  }
  let result = await ipfs.add(data, options)
  console.log(result);
};

const savePdf = async () => {
  let ipfs = await createClient();
  let data = fs.readFileSync("./blockdiag.pdf")
  // data = Buffer.from(data)
  let options = {
    wrapWithDirectory:false,
    progress:(prog)=>console.log(`Saved : ${prog}`)
  }
  let result = await ipfs.add(data, options)
  console.log(result);
};

const readText = async (cid) => {
  let ipfs = await createClient();
  let result = ipfs.cat(cid)
  for await (const itr of result){
    console.log(Buffer.from(itr).toString());
  }
}

const readImage = async (cid) => {
  let ipfs = await createClient();
  let result = ipfs.cat(cid)
  for await (const itr of result){
    console.log(Buffer.from(itr).toString());
  }
}

const readPdf = async (cid) => {
  let ipfs = await createClient();
  let result = ipfs.cat(cid)
  for await (const itr of result){
    console.log(Buffer.from(itr).toString());
  }
}

function main() {
  console.log("main function is running");
  // saveText();
  // saveImage()
  savePdf()
  // let dataText = "QmX1bWA7gTDYkUdeX64B9jfbPP4g1xMDPSwPVUfEWVTZfp"
  // let dataImage = "QmUCdQPSptmkRN9k7EduPbb4WNUin5JLmx3oR84Yv81eeH"
  // let dataImage = "QmYwF3PeJNvPsJYAyNC6TbBgQ6Jnde3kmEPpdvYBY2EdGK"
  // let dataPdf = "QmQbMNFZjuSsypQTXw3a2dxf1j2pv3hKF42foDa3Emy7P7"
  // readText(dataText)
  // readImage(dataImage)
  // readPdf(dataPdf)
  // QmVhsmBt1inpq6Hp99eqYcSfcL6cTBQB6j5SiM4Q9rbPEF
}
main();

