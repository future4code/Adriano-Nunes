import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { baseURL } from "../../constants"
import { DiCodeigniter } from "react-icons/di";
import { IconButton, Box, Image, Badge } from "@chakra-ui/react";

const HomeScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    height: 50vh;
    width: 100%;
`

const ButtonMatchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    margin: 5vh;
`

const ButtonNo = styled.button`
    border-radius: 50%;
    background: gray;
    height: 8vh;
    width: 4vw;
    
`

const ButtonMatch = styled.button`
    border-radius: 50%;
    background: red;
    height: 8vh;
    width: 4vw;
    margin-left: 8vw;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: solid;
`

const HomeScreen = (props) => {
    const [profile, setProfile] = useState([])

    const getProfile = () => {
        axios
            .get(`${baseURL}/person`)
            .then((res) => setProfile(res.data.profile))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getProfile()
    }, [])

    return(
        <div>
            <HeaderContainer>
                <h1>astromatch</h1>
                <button onClick={() => props.goMatchesScreen('matchesScreen')}>Tela de MATCHES</button>
            </HeaderContainer>
       
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            
                <Image src={profile.photo}  />
                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {profile.name} beds &bull; {profile.age} baths
                            </Box>
                    </Box>
                    <Box>
                        {profile.bio}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                    </Box>
                </Box>
            </Box>

              
                {/* {getProfile()} */}
                <ButtonMatchContainer>
                    <ButtonNo>&#10007;</ButtonNo>
                    <IconButton as={DiCodeigniter} />
                </ButtonMatchContainer>
            
                
        </div>
       
    )
}

export default HomeScreen;