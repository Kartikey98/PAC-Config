function FindProxyForURL(url, host) {

  var proxy_yes = "PROXY 15.207.247.62:3003";
  var proxy_no = "DIRECT";
// If the hostname matches, send to proxy.
if (shExpMatch(url, "*zoho.*")){
    return proxy_no;
}
// DEFAULT RULE: All other traffic, send direct
else{
    return proxy_yes;
}

}
