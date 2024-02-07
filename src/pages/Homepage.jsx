import { Box, Container } from "@chakra-ui/react";
import SubmitText from "../components/SubmitText";
import LevelPicker from "../components/LevelPicker";

export default function Homepage() {
    return (
        <Box mt="5" display="flex" justifyContent="center" gap="10">
            <SubmitText />
            <LevelPicker />
        </Box>
    )
}