import React from 'react';
import styles from './CKEditorViewer.module.css';
import DOMPurify from 'isomorphic-dompurify';

type CKEditorViewerProps = {
  data: string;
  centered?: boolean;
};

const CKEditorViewer: React.FC<CKEditorViewerProps> = ({ data, centered = true }) => {
  return (
    <div
      className={`flex flex-col text-black dark:text-slate-100 ${centered ? 'items-center' : ''} ${
        styles.text
      }`}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}
    />
  );
};

export default CKEditorViewer;
