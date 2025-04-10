export function getCookie(name) {
    const cookieName = `${name}=;`;
    let cookies = document.cookie.split("; ");
    
    for (let i = 0; i < cookies.length; i++) {
      if (cookies[i].startsWith(cookieName)) {
        return cookies[i].substring(cookieName.length);
      }
    }
  
    return null;
  }
  
  export function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  export function eraseCookie(name, path = '/', domain = '') {
    let cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
    if (domain) {
      cookieString += `; domain=${domain}`;
    }
    document.cookie = cookieString;
  }
  