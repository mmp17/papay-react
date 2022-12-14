import { Box, Stack } from "@mui/material";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { useRef } from "react";

export const TViewer = (props: any) => {
  const editorRef = useRef();

  return (
    <Stack sx={{ background: "white", mt: "30px", borderRadius: "10%" }}>
      <Box sx={{ m: "40px" }}>
        <Viewer
          //@ts-ignore
          ref={editorRef}
          initialValue={props.text}
          height="600px"
        />
      </Box>
    </Stack>
  );
};
