var push = require('web-push');

let vapidKeys = {
    publicKey: 'BHRz39EbkV5W7eT0ochToIhhcNkvxABTIBVH5HmDuhEqA5qMsh5y0OmyN0a3sBuBmUU-wvTCfzElK1azhk9ovmM',
    privateKey: 'AfW3xqPoRxDNZ_YhCZEVq3GF_0Tl8tEh7W9r-BbvMvY'
  }


push.setVapidDetails('mailto:aziz.elithair@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = {};
push.sendNotification(sub, 'text message')