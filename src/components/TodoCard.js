import React from 'react';

export default function Card(props) {
	const task = props.task;
	const removeTask = props.removeTask;
	const finishTask = props.finishTask;

	// const {task} = props;

	return (
		<div className='card todo-card py-2 mb-2'>
			<div className='card-body'>{task.title}</div>
			<div className='d-flex align-center justify-content-center' style={{ gap: '12px' }}>
				{task.status === 1 ? (
					<button
						type='button'
						className='btn btn-primary'
						onClick={() => {
							finishTask(task.id);
						}}
					>
						Hoàn thành
					</button>
				) : null}
				<button
					type='button'
					className='btn btn-danger'
					onClick={() => {
						removeTask(task.id);
					}}
				>
					Xóa
				</button>
			</div>
		</div>
	);
}
