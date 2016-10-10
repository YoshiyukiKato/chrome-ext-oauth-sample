//もしoauth_tokenとoauth_secretがあれば、色を変えてチェックマークをつける

const services = [];

class Service{
  constructor(name){
    this.name = name;
    this.status = this.isConnected();
    this.initView();
    this.updateView();
  }

  get oauth_token_key(){
    return "oauth_token_" + this.name;
  }
  get oauth_secret_key(){
    return "oauth_token_secret_" + this.name;
  }

  isConnected(){
    let oauthToken = localStorage.getItem(this.oauth_token_key);
    let oauthSecret = localStorage.getItem(this.oauth_secret_key);
    return !!(oauthToken && oauthSecret);
  }

  connect(){
    if(!this.status){
      chrome.runtime.sendMessage({ type: "login", providor: this.name }, (res)=>{
        console.log(res);
      });
    }
  }

  disconnect(){
    if(this.status){
      localStorage.removeItem(this.oauth_token_key);
      localStorage.removeItem(this.oauth_secret_key);
      this.status = false;
      this.updateView();
    }
  }

  initView(){
    document.querySelector(`#oauth-${this.name} .oauth-switch-on`).addEventListener("click", this.connect.bind(this));
    document.querySelector(`#oauth-${this.name} .oauth-switch-off`).addEventListener("click", this.disconnect.bind(this));
  }

  updateView(){
    let id = "#oauth-" + this.name;
    let nextStatus = this.status ? "on" : "off";
    let prevStatus = this.status ? "off" : "on";
    document.querySelector(`${id} .oauth-switch-${prevStatus}`).classList.remove("active");
    document.querySelector(`${id} .oauth-switch-${nextStatus}`).classList.add("active");
  }
}

function buildComponent(elm, id="", classes=[]){
  let component = document.createElement(elm);
  component.id = id;
  classes.map(component.classList.add);
  return component;
}

const twitter = new Service("twitter");
console.log(twitter);

