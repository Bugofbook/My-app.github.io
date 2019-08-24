import React from 'react'
import fetch from 'isomorphic-fetch';

export 	class  HomeForm extends React.Component {
	constructor(props) {
		super(props);
		this.movegamedata = this.props.movegamedata.bind(this) 
		this.moveplayerdata = this.props.moveplayerdata.bind(this)
		this.playerdata = this.props.playerdata
		this.clear = this.clear.bind(this)
		this.loadingonlinedata = this.loadingonlinedata.bind(this)
		this.processdata = this.processdata.bind(this)
	}
	loadingonlinedata(url) {
		fetch(url)
		.then(response => response.json())
		.then(onlinedata => this.processdata(onlinedata))
		.catch(error => console.log('There has been a problem with your fetch operation: ', error.message))
	}
	processdata(data) {
		this.movegamedata(data.player1,data.player2)
		this.moveplayerdata(data.gamedate)
	}
	clear() {
		this.movegamedata([])
		this.moveplayerdata("Tom","Jerry")
	}
	render() {
			return (
				<div>
					<div>
						<h1>遊戲玩家</h1>
						<div>{`遊戲玩家１：${this.props.playerdata.player1}`}</div>
						<div>{`遊戲玩家２：${this.props.playerdata.player2}`}</div>
					</div>
					<div>
						<h1>讀取伺服器記錄，但是還沒架設伺服器就是了</h1>
						<div>
						<input type="buttom" value="回復初始" onClick={() => this.clear()} />						
						<input type="buttom" value="讀取存檔１" onClick={() => this.loadingonlinedata('//localhost:4000/games/1.json')} />
						<input type="buttom" value="讀取存檔２" onClick={() => this.loadingonlinedata('//localhost:4000/games/2.json')} />
						</div>
						<p>如果沒有載入預設的遊戲玩家的名稱，請先按一下“回復初始”按鍵來強制載入遊戲玩家的名稱</p>
					</div>
				</div>
				)
			}
		}