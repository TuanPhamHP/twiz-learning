import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/trang-chu';
import NotFoundPage from '../pages/404';
import TodoPage from '../pages/to-do';
import TodoSimplePage from '../pages/to-do-simple';
function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />}></Route>
			<Route path='/to-do' element={<TodoPage />}></Route>
			<Route path='/to-do-simple' element={<TodoSimplePage />}></Route>
			<Route path='*' element={<NotFoundPage />}></Route>
		</Routes>
	);
}

export default AppRoutes;
