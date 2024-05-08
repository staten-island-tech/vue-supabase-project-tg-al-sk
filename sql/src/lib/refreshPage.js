export default function refreshPage(redirect){
    location.reload();
    if(redirect === true){
    location.href = location.href.replace('login', '');
    }else if(redirect === false){
      return;
    }
  }