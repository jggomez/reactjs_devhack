import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import Header from './Header';

/*const Title = ({ title, styles }) => (
  <h1 style={styles}>{title}</h1>
)*/

/*const Paragraph = ({ body, styles }) => (
  <p style={styles}>{body}</p>
)*/

// stateless component
const App = ({ title, body }) => (
  <div>
    <Header
      title={"Blog Geek"}
      subTitle={"Enterate de las mejores Noticias Geek"}
      styles={{
        backgroundColor: 'blue', color: 'white',
        width: '100%', height: '100px'
      }}
    />
    <Title
      title={title}
      styles={{ fontWeight: 400, color: 'red' }} />
    <Paragraph
      body={body}
      styles={{ backgroundColor: 'olive' }} />
  </div>
);

export default App;

