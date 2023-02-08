import React from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
// tslint:disable-next-line: no-submodule-imports
import 'react-toastify/dist/ReactToastify.min.css';

import { ToastType, ToastMessage } from '@src/data/ToastMessage';
import styles from '@src/assets/stylesheets/pitayas/PitayaToast.scss';
import ApiError from '@src/services/api/errors/ApiError';
import DupSkuErrorMessage from '@src/features/collection/components/DupSkuErrorMessage';

interface PitayaToastProps {
  toastMessage?: ToastMessage;
  toastOptions?: ToastOptions;
}

function handleSkuDuplicateError(error: ApiError) {
  if (!error || !error.respBody) {
    return false;
  }

  const { respBody, message } = error;
  const { error_type } = respBody as any;

  if (error_type === 'CollectionSkuDuplicateError') {
    toast.error(<DupSkuErrorMessage message={message} respBody={respBody} />);
    return true;
  }
  return false;
}

export default class PitayaToast extends React.Component<PitayaToastProps> {
  componentDidUpdate(prevProps: PitayaToastProps): void {
    const { toastMessage, toastOptions } = this.props;
    if (toastMessage && prevProps.toastMessage !== toastMessage) {
      switch (toastMessage.type) {
        case ToastType.SUCCESS:
          toast.success(toastMessage.message, {
            autoClose: 5000,
            ...toastOptions,
          });
          break;
        case ToastType.WARNING:
          toast.warn(toastMessage.message, {
            autoClose: 10000,
            ...toastOptions,
          });
          break;
        case ToastType.ERROR:
          if (handleSkuDuplicateError(toastMessage.error as ApiError)) {
            return;
          }

          toast.error(toastMessage.message);
          break;
        case ToastType.INFO:
          toast.info(toastMessage.message, {
            autoClose: 5000,
            ...toastOptions,
          });
          break;
      }
    }
  }

  render(): React.ReactNode {
    const { toastMessage } = this.props;

    if (!toastMessage) {
      return null;
    }

    return (
      <div className={styles.pitayaToast}>
        <ToastContainer
          position="bottom-center"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          draggable={true}
          pauseOnHover={true}
        />
      </div>
    );
  }
}
