import React, { useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = ({ data, onChange }) => {
  const editorRef = useRef();

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onReady={(editor) => {
          editorRef.current = editor;
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        config={{
          toolbar: [
            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote',
            'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|',
            'undo', 'redo'
          ],
        }}
      />
    </div>
  );
};

export default Editor;
