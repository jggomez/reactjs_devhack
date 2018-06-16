import React from 'react';
import Title from './Title';

/*const Title = ({ title, styles }) => (
  <h1 style={styles}>{title}</h1>
)*/

const Paragraph = ({ body, styles }) => (
  <p style={styles}>{body}</p>
)

// stateless component
const App = ({ title, body }) => (
  <div>
    <Title
      title={title}
      styles={{ fontWeight: 400, color: 'red' }} />
    <Paragraph
      body={body}
      styles={{ backgroundColor: 'olive' }} />
  </div>
);

export default App;

