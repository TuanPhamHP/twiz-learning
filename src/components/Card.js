import React from 'react';

const getTypeName = type => {
	switch (type) {
		case 'income':
			return 'Thu nhập';

		case 'outcome':
			return 'Chi tiêu';
		default:
			return 'Không rõ';
	}
};

export default function Card(props) {
	// props là 1 obj đại diện cho các giá trị được truyền vào
	// console.log(props);
	// const todo = props.todo;
	// console.log('todo đây:', todo);

	// dùng syntax destructoring
	const { todo, removeData, changeType } = props;

	return (
		<div className='col-4 mb-3'>
			<div className='card shadow border-0'>
				<div className='card-body'>
					<div className='d-flex align-center justify-content-between'>
						<h5 className='card-title'>{todo.title} </h5>
						<h5 className={`card-title ${todo.type === 'income' ? 'text-success' : 'text-danger'}`}> {todo.amount}đ</h5>
					</div>
					<p className='card-text'>Loại: {getTypeName(todo.type)}</p>
					<div className='mb-0 d-flex align-items-center' style={{ gap: '12px' }}>
						<button
							className='btn btn-danger px-4'
							onClick={() => {
								removeData(todo.id);
							}}
						>
							Xóa
						</button>
						<button
							className='btn btn-primary px-4'
							onClick={() => {
								changeType(todo.id);
							}}
						>
							Đổi kiểu
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

// Router: 4
// cài đặt + setup
// C: 4
// R: 3
// U: 3
// R: 3

// UI + Valid data : 3
