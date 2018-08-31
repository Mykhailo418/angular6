export class AuthService{
    loggedIn = false;

    isAuthenticted(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 300);
      });
    }

    login(){
      this.loggedIn = true;
    }

    logout(){
      this.loggedIn = false;
    }
}
