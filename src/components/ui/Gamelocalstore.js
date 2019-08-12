import React from 'react';

export const GameLocalStore = ({store=[], deldata=f=>f, loadingdata=f=>f}) =>
<div className="game-localstore">
	<h2>本機存檔{/*Local Save*/}</h2>
	<p>這裡是本機存檔的列表</p>
	<p>按下時間的按鍵，就可以把存檔的記錄再從頭表演一次</p>
	<p>按下"Ｘ"按鍵，就可以把對應的存檔刪除</p>
	{(store.length === 0) ?
		<p>No Local Save</p> :
		<ol>
			{store.map((gamedata) => 
				<li key={gamedata.id}>
					<input type="bottom" value="X" style={{width: 15 }}  onClick={() => deldata(gamedata.id)} />
					<input type="bottom" value={`Time: ${gamedata.date.toLocaleString('zh-cn')} `} onClick={() => loadingdata(gamedata)} />
				</li>
			)}
		</ol>
	}
</div>