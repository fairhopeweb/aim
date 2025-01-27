import React from 'react';

import { ResizeModeEnum } from 'config/enums/tableEnums';
import { IResizeModeActions } from 'types/components/ResizeModeActions/ResizeModeActions';
import { IconName } from 'components/kit/Icon';

import { Button, Icon } from 'components/kit';

import './ResizeModeActions.scss';

const resizeButtons: { mode: ResizeModeEnum; icon: IconName }[] = [
  {
    mode: ResizeModeEnum.Hide,
    icon: 'table-resize-hide',
  },
  {
    mode: ResizeModeEnum.Resizable,
    icon: 'table-resize-resizable',
  },
  {
    mode: ResizeModeEnum.MaxHeight,
    icon: 'table-resize-maximize',
  },
];

function ResizeModeActions({
  onTableResizeModeChange,
  resizeMode,
  className,
}: IResizeModeActions): React.FunctionComponentElement<React.ReactNode> {
  return (
    <div
      className={`ResizeModeActions${
        resizeMode === ResizeModeEnum.Hide ? '__fullHeight' : ''
      } ${className || ''}`}
    >
      {resizeButtons.map(({ icon, mode }) => (
        <Button
          key={icon}
          color={resizeMode === mode ? 'primary' : 'secondary'}
          onClick={() => onTableResizeModeChange(mode)}
          withOnlyIcon
        >
          <Icon name={icon} />
        </Button>
      ))}
    </div>
  );
}

export default ResizeModeActions;
