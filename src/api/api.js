const $api = (service, params) => {
    const services = {
      selected_services: "selected-services",
      get_all_services: "services",
      get_service: "/getService/{service_id}",
      get_campaign: "/get-campaign",
      get_most_seller: "/most-sels-product",
      get_product_details: "/productDetail/{products_id}",
      get_phone_prefix: "/get-phone-prefix",
      get_all_blogs: "/blogs",
      get_blog_by_id: "/blogs/{blog_id}",
      post_login: "/login",
      post_logout: "/logout",
      get_all_videos: "/videos",
      get_adress: "/branches",
      get_vacancies: "/vacancy",
      create_vacancy: "/vacancy/{id}",
      show_product: '/products/{id}',
      get_all_partners: "/partners",
      get_all_basket: "/basket",
      favorites: "/wishlist",
      remove_favorites: "/wishlist/{id}",
      get_offer_week: "/weekly-picks",
      last_view_products: "/products/reliated-products",
      get_profile_data: "/profile"
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
  