import './scss/style.scss';

function App() {
	let isPop = true;

	return (
		<div className='wrap'>
			<div className='content'>컨텐츠</div>
			{/* {isPop ? <aside className='modal'>레이어 팝업</aside> : null} */}
			{isPop && <aside className='modal'>레이어 팝업</aside>}
		</div>
	);
}

export default App;
