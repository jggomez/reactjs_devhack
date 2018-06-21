import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BasicContainer, SaveButton,
  StyledTextField, PaperContainer, StyledTypography,
} from './styles';

class TagForm extends Component {

  static propTypes = {
    createTag: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    description: '',
  }

  setText = (key, value) => this.setState({ [key]: value });

  handlerCreatePost = () => {
    const { createTag } = this.props;
    createTag({ ...this.state, date: new Date() });
    this.setState({ name: '', description: '' });
  }

  render() {
    return (
      <PaperContainer>
        <BasicContainer
          style={{ textAlign: 'center', background: '#D8D8D8' }}
        >
          <StyledTypography component="h3" variant="headline">
            Creation the Tags
          </StyledTypography>
        </BasicContainer>
        <BasicContainer>
          <StyledTextField
            label="Name:"
            value={this.state.name}
            onChange={e => this.setText('name', e.target.value)}
          />
        </BasicContainer>
        <BasicContainer>
          <StyledTextField
            label="Description:"
            value={this.state.description}
            onChange={e => this.setText('description', e.target.value)}
          />
        </BasicContainer>
        <BasicContainer
          style={{ textAlign: 'center' }}
        >
          <SaveButton
            onClick={this.handlerCreatePost}
            variant="contained"
            color="primary"
          >
            Save
          </SaveButton>
        </BasicContainer>
      </PaperContainer>
    );
  }

}

export default TagForm;
