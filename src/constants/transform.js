export const transformRequest = (obj) => {
  // console.log(obj, 'transform')
  let retStr = '';
  let str: string[] = [];
  for(let key in obj) {
    if(obj[key] instanceof Array) {
      obj[key].map((x) =>
        str.push((x !== null && typeof x === "object") ? 
          encodeURIComponent(key) + '[]=' + JSON.stringify(x) :
          encodeURIComponent(key) + '[]=' + encodeURIComponent(x))
      );
    }else {
      str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }
  retStr = str.join("&");
  return retStr;
}

export const toFormData = (obj) => {
  let fd = new FormData();
  for(let key in obj) {
    if(obj[key] instanceof Array) {
      obj[key].map((x)=>
        fd.append(encodeURIComponent(key) + '[]', 
          (x !== null && typeof x === "object") ? 
          JSON.stringify(x) : x)
      );
    }else {
      fd.append(encodeURIComponent(key), obj[key]);
    }
  }

 //  console.log(fd, 'FD')
 // for (var pair of fd.entries()) {
 //    console.log(pair[0], pair[1]); 
 //  }
  return fd;
}
