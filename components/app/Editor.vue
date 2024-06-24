<template>
  <div class="container">
    <div id="toolbar-container"></div>
    <div id="editor"></div>
  </div>
</template>

<script>
let DecoupledEditor;
if (process.browser) {
  DecoupledEditor = require("@ckeditor/ckeditor5-build-decoupled-document");
}

export default {
  name: "TextEditor",

  props: {
    value: String,
  },

  data() {
    return {
      editorData: this.value,
    };
  },

  mounted() {
    DecoupledEditor.create(document.querySelector("#editor"))
      .then((editor) => {
        const toolbarContainer = document.querySelector("#toolbar-container");
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);

        // Set the initial content
        editor.setData(this.editorData);

        // Listen for changes and update the data property
        editor.model.document.on("change:data", () => {
          this.editorData = editor.getData();
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

  watch: {
    // Watch for changes in editorData and update the editor content
    editorData(newValue) {
      if (this.$refs.editor) {
        this.$refs.editor.setData(newValue);
        this.$emit("input", newValue);
      }
    },
  },
};
</script>

<style scoped>
.ck-editor__editable[role="textbox"] {
  /* Editing area */
  min-height: 200px;
  background: #1c2833;
  border: 0.5px solid #6ef4ac;
  @apply border-t-0 border-lemon;
}
.ck-editor__editable[role="textbox"]:focus-visible {
  outline: none;
  @apply border-2 border-t-0 border-lemon;
}
/* .ck-content .image {} */
</style>
