import React from 'react';
import { Title } from './gallery/Title'
import { UploadForm } from './gallery/UploadForm';import { Gallery } from './gallery/Gallery';

const App = () =>  {
  return (
       <div>
	<Title />
	<UploadForm />
	<Gallery />
      </div>
  );
}

export default App;
