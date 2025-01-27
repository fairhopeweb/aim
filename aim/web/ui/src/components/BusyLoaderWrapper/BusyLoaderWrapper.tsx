import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Skeleton } from '@material-ui/lab';
import { IBusyLoaderWrapperProps } from 'types/components/BusyLoaderWrapper/BusyLoaderWrapper';
import './BusyLoaderWrapper.scss';

function BusyLoaderWrapper({
  isLoading = false,
  className = '',
  children,
  loaderType = 'spinner',
  loaderConfig = {},
  width = '100%',
  height = 'auto',
  loaderComponent,
}: IBusyLoaderWrapperProps): React.FunctionComponentElement<React.ReactNode> | null {
  function loaderRender(): React.ReactElement {
    switch (loaderType) {
      case 'skeleton': {
        return <Skeleton {...loaderConfig} />;
      }
      default: {
        return <CircularProgress {...loaderConfig} />;
      }
    }
  }
  return isLoading ? (
    <div className={`BusyLoaderWrapper ${className}`} style={{ width, height }}>
      {loaderComponent || loaderRender()}
    </div>
  ) : children ? (
    children
  ) : null;
}

export default React.memo(BusyLoaderWrapper);
