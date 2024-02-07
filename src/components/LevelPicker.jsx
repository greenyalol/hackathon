import { Box, Grid, GridItem, HStack, Heading, Stack, Text, useRadio, useRadioGroup } from "@chakra-ui/react";
import SubmitText from "./SubmitText";

function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default function LevelPicker({ setLevel }) {
    const options = ['A', 'B', 'C']
    const handleChange = (value) => {
        setLevel(value);
    }
    const { value, getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'Easy',
        onChange: handleChange,
    })

    // setLevel(value)
    const group = getRootProps()
    // const v = getRadioProps() 
    return (
        <Stack>
            <Heading as='h4' size='md'>
                Choose difficulty
            </Heading>
            <Box flexDirection="column" display="flex" gap="10px">
                {options.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                        <RadioCard key={value} {...radio}>
                            {value}
                        </RadioCard>
                    )
                })}
            </Box>
        </Stack>
    )
}