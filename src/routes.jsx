import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';

import history from './history';

import App from './app';
import Splash from './splash';
import Login from './login';

import MainApp from './main/index';
import SendGifts from './main/sendGifts/index';
import Merchandises from './main/sendGifts/merchandises';
import Merchandise from './main/sendGifts/merchandise';
import ReceiveGifts from './main/receiveGifts/index';
import Achievements from './main/achievements/index';
import Achievement from './main/achievements/achievement';

const routes = (
		<Route path="/" component={App} >
			<IndexRoute component={Splash} />
			<Route path="login" component={Login}  />
			<Route path="app" component={MainApp}>
				<Route path="send">
					<IndexRoute component={SendGifts} />
					<Route path="merchandises" component={Merchandises} />
					<Route path="merchandises/:merchandiseID" component={Merchandise} />
				</Route>
				<Route path="receive" component={ReceiveGifts} />
				<Route path="achievements">
					<IndexRoute component={Achievements} />
					<Route path=":friendID" component={Achievement} />
				</Route>
				<IndexRedirect to='send' />
			</Route>
		</Route>
);

export default routes;
