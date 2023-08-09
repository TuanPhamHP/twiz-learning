import React, { useState } from 'react';
import myData from '../dum-data';
export default function HomePage() {
	const [listData, setListData] = useState(myData);
	console.log(listData);
	return (
		<div>
			<div className='container py-5'>
				<h1 className='text-center'>Trang chủ</h1>
			</div>
		</div>
	);
}
