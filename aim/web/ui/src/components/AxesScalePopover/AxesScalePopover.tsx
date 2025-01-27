import React from 'react';

import { ScaleEnum } from 'utils/d3';
import { Text, ToggleButton } from 'components/kit';
import {
  IAxesScalePopoverProps,
  IAxesScaleState,
} from 'types/components/AxesScalePopover/AxesScalePopover';

import './AxesScalePopover.scss';

function AxesScalePopover(
  props: IAxesScalePopoverProps,
): React.FunctionComponentElement<React.ReactNode> {
  function handleScaleChange(val: string | number, id: any) {
    const scaleParams: IAxesScaleState = {
      ...props.axesScaleType,
      [id]: val,
    };
    props.onAxesScaleTypeChange(scaleParams);
  }

  return (
    <div className='AxesScalePopover'>
      <Text
        size={12}
        tint={50}
        component='p'
        className='AxesScalePopover__subtitle'
      >
        Select Axes Scale:
      </Text>
      <div className='AxesScalePopover__select'>
        <ToggleButton
          title='X-axis scale:'
          id='xAxis'
          value={props.axesScaleType.xAxis}
          leftValue={ScaleEnum.Linear}
          rightValue={ScaleEnum.Log}
          leftLabel='Linear'
          rightLabel='Log'
          onChange={handleScaleChange}
        />
      </div>
      <div className='AxesScalePopover__select'>
        <ToggleButton
          title='Y-axis scale:'
          id='yAxis'
          value={props.axesScaleType.yAxis}
          leftValue={ScaleEnum.Linear}
          rightValue={ScaleEnum.Log}
          leftLabel='Linear'
          rightLabel='Log'
          onChange={handleScaleChange}
        />
      </div>
    </div>
  );
}

export default React.memo(AxesScalePopover);
