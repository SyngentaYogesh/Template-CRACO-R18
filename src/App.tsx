import React from 'react';
import './App.css';
// import './App.less';
import { Button } from 'antd';
import {DemoPI,DemoColumn} from './chart/pi';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const App: React.FC = () => {
  return (
    <div className="App"><header className="App-header"><Greeting name="World" /><p>Welcome to my React app using CRACO and TypeScript.</p><Button type="primary">Primary Button</Button>
    <DemoPI />
    <DemoColumn />
    
    </header> </div>
  );
};

export default App;