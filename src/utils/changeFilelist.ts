type Obj = {
  uid: string,
  name: string,
  status: string,
  url: string
}

/**
 * 
 * @param url 
 * @param status 
 * @returns {Obj}
 */

export default function changeFilelist(url: string, status: string):Obj { 
    return { uid: Date.now(), name: Date.now()+'.png', status, url }
  
}