import React from 'react';
import {render} from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';

render(
	 <Provider store={store}>
		<HashRouter>
			<div>
		    <Route component={App}/>
		    </div>
	    </HashRouter>
	    </Provider>,
    document.getElementById('app')
)