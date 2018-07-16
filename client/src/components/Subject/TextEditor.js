import React from "react";
import styled from "styled-components";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/theme/monokai";

export default class TextEditor extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);

    this.state = {
      output: ""
    };
  }

  onChange(newValue) {
    this.setState({ output: newValue });
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
          wrapEnabled="true"
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
