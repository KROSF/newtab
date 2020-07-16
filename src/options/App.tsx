import React from "react";
import { monaco, ControlledEditor } from "@monaco-editor/react";
import { getSettings, saveSettings } from "./utils/settings";
import schema from "./schema.json";
import Ajv from "ajv";

monaco.init().then((instance) => {
  instance.languages.json.jsonDefaults.setDiagnosticsOptions({
    validate: true,
    schemas: [{ schema, fileMatch: ["*"], uri: "https://krosf.com" }],
  });
});

const ajv = new Ajv();

const validate = ajv.compile(schema);

const App = () => {
  return (
    <ControlledEditor
      height="100vh"
      language="json"
      theme="dark"
      value={getSettings()}
      onChange={(_, value = "") => {
        const settings = JSON.parse(value);
        if (validate(settings)) {
          saveSettings(settings);
          return value;
        }
      }}
      options={{
        minimap: {
          enabled: false,
        },
      }}
    />
  );
};

export default App;
