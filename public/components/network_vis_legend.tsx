
import React from 'react';
import { ouiPaletteColorBlind } from '@elastic/eui';

export const Legend = ({colorDicc, setColorDicc, usedColors, uiState}) => {
  const defaultPalette = ouiPaletteColorBlind({rotations: 2});
  const saveColors = (event) => {
    event.persist()
    const copy = uiState.get('vis.colors', {});
    copy[event.target.id] = event.target.value;
    uiState.set('vis.colors', copy);
    setColorDicc(copy);
  };
  const options = defaultPalette.map((color) => <option key={color}>{color}</option>)
  const colorList = Object
    .keys(colorDicc)
    .filter(key => usedColors.find(color => color === colorDicc[key]));
  const listItems = colorList.map(colorKey =>
    <li key={colorKey} className='vis-network-legend-line'>
      <input
        type="color"
        list="color-datalist"
        id={colorKey}
        name={colorKey}
        value={colorDicc[colorKey]}
        onChange={saveColors}
      />
      <label htmlFor={colorKey}>
        <div 
          className="vis-network-legend-color"
          style={{backgroundColor: colorDicc[colorKey]}}
        />
        {colorKey}
      </label>
      <datalist id="color-datalist">{options}</datalist>
    </li>
  );

  return <ul className='vis-network-legend'>{listItems}</ul>;
};
