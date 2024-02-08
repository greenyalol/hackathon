import { StarIcon } from "@chakra-ui/icons"
import { Box, Heading, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"


export default function UserStats() {
    //get games by user
    //fetch user 
    const userGames = [
        { date: "21.02.2002", score: "6" },
        { date: "21.02.2002", score: "8" },
        { date: "21.02.2002", score: "3" },
        { date: "21.02.2002", score: "10" }
    ];
    // function StartStats({ stars }) {
    //     console.log(parseInt(stars));
    //     for (const star in parseInt(stars)) {
    //         return (
    //             <StarIcon />
    //         )
    //     }
    // }
    return (
        <Box display="flex" ml="10" flexDirection="column">
            <Heading as="h2">My last stats</Heading>
            {userGames.map((game, index) => {
                return (
                    <Stat key={index}>
                        {/* <StatLabel>Collected Fees</StatLabel> */}

                        <StatNumber>{`${game.score}/10`}</StatNumber>
                        <StatHelpText>{game.date}</StatHelpText>
                    </Stat>
                )
            })}
        </Box>
    )
}