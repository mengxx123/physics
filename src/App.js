import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar'
import { Button } from "yunser-ui-react"

function App() {
    return (
        <div className="App">
            <AppBar position="static" color="default">
            </AppBar>
            <header className="App-header">
                {/* 物理 */}
                <ul>
                    <li>
                        <a href="https://demos.yunser.com/physics/light" target="_blank">光的三原色</a>
                    </li>
                    <li>
                        <a href="https://demos.yunser.com/physics/ruler" target="_blank">长度测量</a>
                    </li>
                    <li>
                        <a href="https://demos.yunser.com/physics/newton" target="_blank">牛顿摆</a>
                    </li>
                    <li>
                        <a href="https://demos.yunser.com/physics/pulley" target="_blank">滑轮</a>
                    </li>
                    <li>
                        <a href="https://demos.yunser.com/physics/fall" target="_blank">重力</a>
                    </li>
                    <li>
                        <a href="https://demos.yunser.com/physics/float" target="_blank">浮力</a>
                    </li>

                </ul>
                {/* <Button text={'haha'}></Button> */}
            </header>
        </div>
    );
}

export default App;
