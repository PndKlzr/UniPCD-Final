import React from 'react';
import { Box, Container, Heading, Image, Link } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const NewsSection = () => {
    const newsList = [
        {

            content: 'Conteúdo da Notícia 1...',
            contentUrl: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


        },
        {

            content: 'Conteúdo da Notícia 2...',
            contentUrl: 'https://images.unsplash.com/photo-1682687982423-295485af248a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        },
        {

            content: 'Conteúdo da Notícia 3...',
            contentUrl: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        },
        {

            content: 'Conteúdo da Notícia 4...',
            contentUrl: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        },

        {

            content: 'Conteúdo da Notícia 5...',
            contentUrl: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        }
    ];

    return (
        <Box height='100px' w='100%' mt={'30px'}>
            <Container maxW="container.lg" >

                <Carousel
                    showArrows={true}
                    showStatus={true}
                    renderIndicator={(clickHandler, isSelected, index) => (
                        <div
                            key={index}
                            onClick={clickHandler}
                            style={{
                                background: isSelected ? '#4424D3' : '#fff',
                                width: 15,
                                height: 15,
                                display: 'inline-block',
                                margin: '0 5px',
                                cursor: 'pointer',
                                border: `2px solid ${isSelected ? '#4424D3' : '#4424D3'}`,
                                borderRadius: '50%',
                            }}
                        />
                    )}
                    infiniteLoop={true}
                    autoPlay={true} // Habilita a mudança automática de slides
                    interval={3000}
                >
                    {newsList.map((news, index) => (
                        <div key={index}
                            style={{
                                width: '100%', // Largura fixa desejada
                                height: '100%'

                            }}>
                            <Box p={2} borderWidth="2px" borderRadius="50px" bg="white" maxH='100%'>
                                <Link href={news.contentUrl} isExternal>
                                    <Heading as="h5" size="lg" mb={1}>
                                        {news.title}
                                    </Heading>

                                    <div style={{ textAlign: 'center', height: '100%' }}>
                                        <Image src={news.contentUrl} style={{ width: '50%', height: '50%', objectFit: 'contain' }} />
                                    </div>
                                </Link>
                            </Box>
                        </div>
                    ))}
                </Carousel>
            </Container >
        </Box >
    );
};


export default NewsSection;