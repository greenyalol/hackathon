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
            url: 'https://ec2-174-129-121-11.compute-1.amazonaws.com/',
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