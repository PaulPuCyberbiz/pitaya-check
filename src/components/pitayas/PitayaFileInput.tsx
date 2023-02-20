import React, { ChangeEvent } from 'react';
import { Size, sizeClassName } from '@src/components/pitayas/PitayaStatus';
import styles from '@src/assets/stylesheets/pitayas/PitayaFileInput.module.scss';

const getImageData = (
  newFile: File,
  callback: (file: File, src: string) => void,
) => {
  const fileReader = new FileReader();
  fileReader.onload = e => {
    const src = fileReader.result;
    callback(newFile, src as string);
  };
  fileReader.readAsDataURL(newFile);
};

export interface FileData {
  src?: string;
  file: File;
}

interface PitayaFileInputProps {
  label: string;
  buttonSize?: Size;
  defaultPreview?: JSX.Element;
  fileData?: FileData;
  previousFile?: FileData;
  value?: FileData;
  warningContent?: string;
  onChange: (file: FileData) => void;
  onRemove?: () => void;
}

class PitayaFileInput extends React.Component<PitayaFileInputProps> {
  constructor(props: PitayaFileInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { onChange } = this.props;
    const { files } = event.target;
    const file = files && files[0];

    if (!file) {
      return;
    }

    getImageData(file, (newFile: File, src: string) => {
      onChange({
        src,
        file: newFile,
      });
    });
  }

  render() {
    const sizeName = sizeClassName(this.props.buttonSize);

    const { defaultPreview, label, fileData, onRemove, warningContent } =
      this.props;

    return (
      <div className={styles.pitayaFileInput}>
        <label className={styles.fileLabel}>{label}</label>
        <div className={styles.fileContent}>
          {fileData && fileData.src !== '' ? (
            <div className="preview">
              <img src={fileData.src} />
              <button onClick={onRemove}>x</button>
            </div>
          ) : (
            defaultPreview && <div className="preview">{defaultPreview}</div>
          )}
          <div className={styles.fileBar}>
            <div>
              <label className={sizeName} htmlFor={label}>
                上傳圖片
              </label>
              <input
                className="fileInput"
                id={label}
                type="file"
                value=""
                onChange={this.handleChange}
              />
            </div>
            <div className="fileWarning">{warningContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PitayaFileInput;
