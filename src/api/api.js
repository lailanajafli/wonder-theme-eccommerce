const $api = (service, params) => {
    const services = {
      get_product_details: "/productDetail/{products_id}",
    };
  
    if (typeof services[service] === "string") {
      services[service] = { path: String(services[service]) };
    }
  
    let url = services[service].path;
    if (params) {
      let query_params = {};
      let has_query_params = false;
  
      for (const [key, value] of Object.entries(params)) {
        let replaced = false;
        url = url.replaceAll("{" + key + "}", () => {
          replaced = true;
          return value;
        });
        if (!replaced) {
          has_query_params = true;
          query_params[key] = value;
        }
      }
  
      if (has_query_params) {
        let param = new URLSearchParams(query_params);
        url += "?" + param.toString();
      }
    }
  
    return url;
  };
  
  export { $api };
  