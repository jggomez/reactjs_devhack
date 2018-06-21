import React, { Component } from 'react';
import { BasicContainer, BasicCard } from './styles';
import TagForm from './TagForm';
import Tag from './Tag';

class Tags extends Component {

  state = {
    tags: [],
  }

  createTag = (tag) => {
    const tagWithId = { ...tag, id: this.state.tags.length };
    const tags = this.state.tags.concat(tagWithId);
    this.setState({ tags });
  }

  render() {
    const tags = this.state.tags.map(tag => (
      <BasicCard key={tag.id}>
        <Tag key={tag.id} name={tag.name} description={tag.description} />
      </BasicCard>
    ),
    );

    return (
      <BasicContainer style={{ display: 'flex', flexDirection: 'row' }}>
        <TagForm createTag={this.createTag} />
        <BasicContainer style={{ width: '40%', marginLeft: '2em' }}>
          {tags}
        </BasicContainer>
      </BasicContainer>
    );
  }
}

export default Tags;
