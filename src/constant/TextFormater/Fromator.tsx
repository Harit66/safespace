import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Formator.css";

interface QuillEditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

interface QuillEditorState {
  text: string;
}

class QuillEditor extends Component<QuillEditorProps, QuillEditorState> {
  modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  formats = ["bold", "italic", "underline", "list", "bullet", "link", "image"];

  constructor(props: QuillEditorProps) {
    super(props);
    this.state = {
      text: props.initialValue || "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: string) {
    this.setState({ text: value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <ReactQuill
        className="Formater"
        modules={this.modules}
        formats={this.formats}
        onChange={this.handleChange}
      />
    );
  }
}

export default QuillEditor;
