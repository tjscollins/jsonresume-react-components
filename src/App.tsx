import * as React from 'react';
import './App.css';

import Resume from './components/Resume';
import { JSONResume } from './components/types';

class App extends React.Component {
    private resumeData = require('./resume.json')

    public render() {
        return (
            <div className="App">
                <Resume resumeData={this.resumeData as JSONResume} />
            </div>
        );
    }
}

export default App;