import { Fragment } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {publicRoutes} from '~/routes/routes'
import { DefaultLayout } from './components/Layouts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map(route =>{
            const Page = route.component;
            let Layout = DefaultLayout;

            if(route.layout){
              Layout = route.layout;
            }else if(route.layout === null){
              Layout = Fragment;
            };

            return <Route path={route.path} element={<Layout> <Page/> </Layout>}/>
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
