import React from "react";
import { Box, FlexBox, FullScreen, Progress, defaultTheme } from "spectacle";

// SPECTACLE_CLI_TEMPLATE_START
const Template = () => (
    <FlexBox
        justifyContent="space-between"
        position="absolute"
        bottom={0}
        width={1}>
        <Box padding="0 1em">
            <FullScreen color={'white'} size={24} />
        </Box>
        <Box padding="1em">
            <Progress color="white" size={defaultTheme.size[0]} />
        </Box>
    </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

export default Template;
