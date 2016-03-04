import React from 'react';
import ReactDOM from 'react-dom';
require('./style.scss');
import Root from './main/root';


window.fbAsyncInit = function() {

    FB.init({
      appId      : '446563975515286',
      xfbml      : true,
      version    : 'v2.5'
    });

    ReactDOM.render(
      <Root />,
      document.getElementById('app')
    );
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
