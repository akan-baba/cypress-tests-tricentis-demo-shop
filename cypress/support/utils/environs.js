export class Environment {
    static getBaseUrl() {
      let envi = Cypress.env('ENV'); // Get the value of the environment variable 'ENV'
      let baseUrl;
  
      switch (envi) {
        case 'dev':
          baseUrl = "https://demowebshop.tricentis.com/";
  
          break;
        case 'staging':
          baseUrl = "https://demowebshop.tricentis.com/";
  
          break;
        case 'qa':
          baseUrl = "https://demowebshop.tricentis.com/";
            
      }
      console.log('Base URL:', baseUrl);
  
      return baseUrl;
    }
  }