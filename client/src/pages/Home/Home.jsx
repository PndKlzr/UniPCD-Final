import React from 'react';
import { Image, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Logo from '../../components/assets/img/Header/logo2.png';
import { SideBar } from '../../components/SideBar/SideBar';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer/Footer';
import NewsSection from '../Home/carosel';



export function Home() {
    let sidebarBg = useColorModeValue('white', 'navy.800');
    let variantChange = '0.2s linear';
    let sidebarRadius = '20px';
    let sidebarMargins = '20px';

    return (
        <Box>
            <Header />
            <Flex
                my={'3'}
                px={'1'}
                justifyContent="center"
                alignItems="center"
            >
                <SideBar />
                <Box
                    bg={sidebarBg}
                    transition={variantChange}
                    w="100%"
                    maxW="100%"
                    ms={{
                        sm: '16px',
                    }}
                    my={{
                        sm: '16px',
                    }}
                    h="calc(100vh - 32px)"
                    ps="15px"
                    pe="20px"
                    m={sidebarMargins}
                    filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.05))"
                    borderRadius={sidebarRadius}
                >
                    <NewsSection />
                    <Text
                        color="gray.700"
                        textAlign="center"
                        px={{ base: '2', sm: '4', md: '60' }}
                        mt={{ base: '8', md: '275px' }}
                        mb={"30px"}
                    >
                        <strong>Quem somos?</strong>
                        <br />
                        <br />
                        Bem-vindo ao nosso espaço dedicado à inclusão e acessibilidade na cidade de Jaraguá do Sul! Somos um grupo de profissionais dedicados e entusiastas comprometidos em criar um impacto positivo na vida das pessoas com deficiência (PCD's) através do desenvolvimento do nosso aplicativo.
                        <br />
                        <br />
                        Nossa missão é construir uma plataforma tecnológica que promova a inclusão, centralizando informações relevantes sobre pessoas com deficiência e conectando-as a oportunidades, serviços e recursos essenciais. Buscamos, assim, criar uma comunidade mais consciente, solidária e acessível.
                    </Text>
                    <Image
                        borderRadius={'50px'}
                        src={Logo}
                        w={['80%', '50%']}
                        mx="auto"

                        ms={{ sm: '25%' }}
                        mt={'10px'}

                    />

                </Box>
            </Flex >
            <Footer />
        </Box >
    );
}


export default Home;


// Adicionando os estilos diretamente no componente Home

// Home.style = {
//     ".Home_Image-sc-18r806q-1": {
//         margin: "0 auto",
//         display: "block",
//     },
// };