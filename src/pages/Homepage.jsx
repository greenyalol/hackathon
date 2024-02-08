import { Box, Container } from "@chakra-ui/react";
import SubmitText from "../components/SubmitText";
import LevelPicker from "../components/LevelPicker";
import { useState } from "react";
import axios from "axios";

export default function Homepage() {
    const [article, setArticle] = useState();
    const [level, setLevel] = useState();

    function onSubmit() {
        //fetch article
        const postInfo = { difficulty: level, article: article };
        console.log(postInfo);
        axios({
            method: 'post',
            url: 'http://54.236.18.163:8080/generate-quiz',
            withCredentials: false,
            data: {
                postInfo
            }
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        <Box mt="5" display="flex" justifyContent="center" gap="10">
            <SubmitText onSubmit={onSubmit} setArticle={setArticle} />
            <LevelPicker setLevel={setLevel} />
        </Box>
    )
}