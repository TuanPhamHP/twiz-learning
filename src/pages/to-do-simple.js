import React, { useState } from 'react';

import TodoCard from '../components/TodoCard';

export default function TodoPage() {
	const [listData, setListData] = useState([
		{
			id: 1,
			title: 'Công việc A',
			status: 1,
		},
		{
			id: 2,
			title: 'Công việc B',
			status: 2,
		},
		{
			id: 3,
			title: 'Công việc C',
			status: 1,
		},
	]);
	const [form, setForm] = useState({ status: 1 });

	const listUndoneTask = listData.filter(item => {
		return item.status === 1;
	});
	const listDoneTask = listData.filter(item => {
		return item.status === 2;
	});

	const removeTask = taskId => {
		const newArray = listData.filter(item => {
			return item.id !== taskId;
		});

		setListData(newArray);
	};

	const finishTask = taskId => {
		const newArray = listData.map(item => {
			if (item.id === taskId) {
				item.status = 2;
			}
			return item;
		});

		setListData(newArray);
	};

	const handleChangeFormData = e => {
		const obj = { ...form, title: e.target.value, id: listData.length + 1 };
		setForm(obj);
	};

	const submitData = () => {
		if (!form.title) {
			alert('Cần nhập đủ thông tin');
			return;
		}
		setListData([...listData, form]);
		setForm({
			title: '',
			status: 1,
		});
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
					<div className='mb-0'>
						<button className='btn btn-success d-block w-100' onClick={submitData}>
							Thêm
						</button>
					</div>
				</div>

				<div className='py-3'>
					{/* Khối render ra danh sách */}

					<div className='row'>
						<div className='col-6'>
							<h1>Việc cần làm</h1>

							{listUndoneTask.map(item => {
								return <TodoCard key={item.id} task={item} removeTask={removeTask} finishTask={finishTask} />;
							})}
						</div>
						<div className='col-6'>
							<h1>Việc đã hoàn thành</h1>

							{listDoneTask.map(item => {
								return <TodoCard key={item.id} task={item} removeTask={removeTask} finishTask={finishTask} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
