import React, { useState } from 'react';

import './App.scss';
import ColorPicker from './components/ColorPicker';
import ShirtIllustration from './components/ShirtIllustration';

function App() {
    const [pickedBaseColor, setPickedBaseColor] = useState('#ad84c9');
    const [pickedAccentColor, setPickedAccentColor] = useState('#bcff04');

    return (
        <div className="App">
            <div className="App__inner">
                <h1>Kies je t-shirt kleuren</h1>
                <ShirtIllustration
                    baseColor={pickedBaseColor}
                    accentColor={pickedAccentColor}
                />
                <ColorPicker
                    colorValue={pickedBaseColor}
                    setColorValue={setPickedBaseColor}
                    type="Hoofd kleur"
                />
                <ColorPicker
                    colorValue={pickedAccentColor}
                    setColorValue={setPickedAccentColor}
                    type="Accent kleur"
                />
            </div>
        </div>
    );
}

export default App;
