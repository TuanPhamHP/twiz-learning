import React, { useState } from 'react';

import Card from '../components/Card';

export default function TodoPage() {
	const initData = [
		{
			id: 1,
			title: 'Đây là title',
			amount: 100000,
			type: 'income',
		},
		{
			id: 2,
			title: 'Đây là title',
			amount: 100000,
			type: 'income',
		},
	];

	const [listData, setListData] = useState(initData);
	const [form, setForm] = useState({
		type: 'income',
	});

	const handleChangeFormData = e => {
		// e event
		const myValue = e.target.value; // giá trị người dùng nhập
		const myKey = e.target.name; // dùng để lấy key từ thuộc tính name của target
		setForm({
			...form,
			[myKey]: myValue,
		});
	};

	const handleSubmitData = () => {
		const obj = { ...form, id: new Date().getTime() };
		if (!obj.title || !obj.amount) {
			alert('Chưa nhập đủ giá trị');
			return;
		}
		setListData([...listData, obj]);
		setForm({
			type: 'income',
			title: '',
			amount: '',
		});
	};

	const changeType = dataId => {
		const newArray = listData.map(item => {
			if (item.id === dataId) {
				// if (item.type === 'outcome') {
				// 	item.type = 'income';
				// } else {
				// 	item.type = 'outcome';
				// }

				item.type = item.type === 'outcome' ? 'income' : 'outcome';
			}
			return item;
		});

		setListData(newArray);
	};

	const removeData2 = dataId => {
		const listDataCopy = listData.filter(todo => todo.id !== dataId);
		setListData(listDataCopy);
	};

	return (
		<div>
			<div className='container'>
				<div className='py-3 border-bottom'>
					{/* Khối để tạo data */}
					<div className='mb-3'>
						<label htmlFor='exampleFormControlInput1' className='form-label'>
							Tiêu đề
						</label>
						<input
							value={form.title}
							type='text'
							className='form-control'
							id='exampleFormControlInput1'
							name='title'
							placeholder='Tiêu đề'
							onChange={handleChangeFormData}
						/>
					</div>

					<div className='mb-3'>
						<label htmlFor='amountIput' className='form-label'>
							Số tiền
						</label>
						<input
							value={form.amount}
							type='number'
							className='form-control'
							id='amountIput'
							name='amount'
							placeholder='Số tiền'
							onChange={handleChangeFormData}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='amountIput' className='form-label'>
							Loại
						</label>
						<select className='form-select' name='type' value={form.type} onChange={handleChangeFormData}>
							<option value='income'>Thu nhập</option>
							<option value='outcome'>Chi tiêu</option>
						</select>
					</div>
					<div className='mb-0'>
						<button className='btn btn-success d-block w-100' onClick={handleSubmitData}>
							Thêm
						</button>
					</div>
				</div>

				<div className='py-3'>
					{/* Khối render ra danh sách */}

					<div className='row'>
						{listData.map(data => {
							return <Card key={data.id} todo={data} removeData={removeData2} changeType={changeType} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
