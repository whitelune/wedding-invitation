import './App.css';
import Main from './page/Main';
import Common from './page/Common';
import pages from "./json/pages.json";
import interviews from "./json/interviews.json";
import stories from "./json/stories.json";
import flows from "./json/flows.json";
import advices from "./json/advices.json";
import prepares from "./json/prepares.json";
import NotFound from './page/NotFound';
import Footer from './page/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './js/ScrollTop';

function App() {
  return (
    <div className="App">
      	<BrowserRouter>
				{/* <header /> */}
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Main />}></Route>
          			<Route path="/interview/*" element={<Common title={pages.interviews.title} description={pages.interviews.description} json={interviews}/>}></Route>
          			<Route path="/story/*" element={<Common title={pages.stories.title} description={pages.stories.description} json={stories}/>}></Route>
          			<Route path="/advice/*" element={<Common title={pages.advices.title} description={pages.advices.description} json={advices}/>}></Route>
          			<Route path="/flow/*" element={<Common title={pages.flows.title} description={pages.flows.description} json={flows}/>}></Route>
          			<Route path="/prepare/*" element={<Common title={pages.prepares.title} description={pages.prepares.description} json={prepares}/>}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
        	<Footer />
		</BrowserRouter>
    </div>
  );
}

export default App;
