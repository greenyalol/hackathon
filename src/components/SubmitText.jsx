import { Box, Button, Heading, Text, Textarea } from '@chakra-ui/react'
import { useState } from 'react'


export default function SubmitText({setArticle, onSubmit}) {
    let [value, setValue] = useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
        setArticle(inputValue)
    }

    return (
        <Box display="flex" width="500px" flexDirection="column" gap="2" >
            <Heading as='h4' size='md'>
                Post your article
            </Heading>
            <Text mb='8px'>{value}</Text>
            <Textarea
                width="500px"
                height="100%"
                value={value}
                onChange={handleInputChange}
                placeholder='Here is a sample placeholder'
                size='sm'
            />
            <Button width="75px" onClick={onSubmit} colorScheme='teal' size='md' ml="auto">Submit</Button>
        </Box>
    )
}