import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import OrderHistory from './pages/OrderHistory';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
            <footer className='row center mt-3' id="footer-items">
              <div className="hotels-cars">

                <a className="contact-email" href="mailto:customerservice@jlm_tourism.com">Contact: Email - customerservice@jlm_tourism.com</a>
                <a className="footer-cars" href="https://bridge.carnect.com" > Rent a Car</a>
                <a className="footer-hotel" href="https://www.hotelbeds.com/login" > Search For Hotel</a>
                <a className="location-address" href="https://www.google.com/search?rlz=1C1CHBF_enUS953US953&tbs=lf:1,lf_ui:10&tbm=lcl&sxsrf=AOaemvIwl8l_2AztRiy9d-_gPBKE8gzDAQ:1631592355058&q=miami+shopping+centers&rflfq=1&num=10&ved=2ahUKEwiW1faVy_3yAhUdKVkFHV5bCw4QtgN6BAgbEAQ#rlfi=hd:;si:18115241926405961007;mv:[[25.719071831343403,-80.3415402250283],[25.715567869821335,-80.34958685207297],null,[25.717319863483514,-80.34556353855064],18]" target="_blank" rel="noopener noreferrer">Address: 9375 SW 56th St, Miami, FL-33165</a>
                <a className="weather-condition" href="https://thirsty-williams-15b73e.netlify.app/" target="_blank" rel="noopener noreferrer"> <img src="/images/weather-icon.png" role="img" aria-label="Weather icon" class="icon" style={{ width: 40, height: 40 }} />Local Weather</a>
              </div>
            </footer>
          </StoreProvider>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
