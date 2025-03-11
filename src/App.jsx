import AppRouter from "./router/AppRouter";
import {Provider} from 'react-redux';
import store from './redux/store/store';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Provider store={store}>
       <ScrollToTop />
    <AppRouter />
    </Provider>
  )
}

export default App;
