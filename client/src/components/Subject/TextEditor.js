import React from "react";
import styled from "styled-components";
import brace from "brace";
import AceEditor from "react-ace";
import * as actions from "../../actions";
import { connect } from "react-redux";
import "brace/mode/html";
import "brace/theme/monokai";
import { addTests } from "../../actions";

class TextEditor extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);

    this.state = {
      output: ""
    };
  }

  componentDidMount() {
    this.props.changeEditorContent(this.state.output);
    const { tests, addTests, allTestsCompleted } = this.props;
    if (tests) {
      addTests(tests);
      allTestsCompleted(false);
    }
  }

  componentWillUnmount() {
    this.props.changeEditorContent(null);
    this.props.addTests(null);
    this.props.allTestsCompleted(true);
  }

  onChange(newValue) {
    this.setState({ output: newValue });
    this.props.changeEditorContent(this.state.output);
  }

  render() {
    return (
      <div>
        <AceEditor
          height="200px"
          mode="html"
          value={this.state.output}
          theme="monokai"
          onChange={this.onChange}
          wrapEnabled={true}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{
            $blockScrolling: true
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: `${this.state.output}`
          }}
        />
      </div>
    );
  }
}
export default connect(
  null,
  actions
)(TextEditor);
