import Flex from "../ui/Flex"
import LinkStyled from "../ui/LinkStyled"
import styled from "styled-components";

const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

const LinkBook = styled(LinkStyled)`
    @media (max-width: 768px) {
        width: 100%;
        height: 150px;
    }
`
const FlexBook = styled(Flex)`
    @media (max-width: 768px) {
        flex-direction: row;
        /* flex-wrap: nowrap; */
        align-items: flex-start;
        justify-items: flex-start;
    }
`
const BookInfo = styled(Flex)`
    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        align-items: center;
    }
`

const StyledImage = styled.img`
            border: 1px solid black;
            width: 140px;
            height: 215px;
            margin: 0 20px 0 0;
            @media (max-width: 768px) {
                width: 100px;
                min-width: 100px;
                margin: 0 10px 0 0;
                height: 140px;
            }
    `
    
const Book = ({bookData, short}) => {


    let book = {
        id: bookData?.id,
        title: bookData.volumeInfo?.title,
        authors: bookData.volumeInfo?.authors,
        thumbnailSmall: bookData.volumeInfo?.imageLinks?.smallThumbnail,
        thumbnail: bookData.volumeInfo?.imageLinks?.thumbnail,
        description: bookData.volumeInfo?.description,
        categories: bookData.volumeInfo?.categories,
        language: bookData.volumeInfo?.language,
        country: bookData.saleInfo?.country,
        saleability: bookData.saleInfo?.saleability,
        maturity: bookData.volumeInfo?.maturityRating,
        pageCount: bookData.volumeInfo.pageCount,
        publichedDate: bookData.volumeInfo.publishedDate
    }
    
    const overflowHid = {
        overflow: 'hidden',
        fontSize: '15px'
    }
    const margin = {
        margin: '10px 0 10px 0',
    }
    const font = {
        fontSize: '18px',
        textIndent : '30px'
    }

    if(short){
        return(
            <LinkBook to={`/id=${book.id}`} width='150px' height='300px' margin='5px 5px' padding='5px' overflow='hidden' justify='center' align='flex-start'>
                <FlexBook direction="column" width='100%' onClick={() => console.log(book?.id)} overflow='hidden' color='white' fontSize='16px'>
                        <StyledImage src={book?.thumbnailSmall || noImage} ></StyledImage>
                        <Flex direction='column' overflow='hidden' color='white' shrink='1'>
                            {book?.title}
                        </Flex>
                </FlexBook>
            </LinkBook>
        )
    }else{
        return(
            // <LinkStyled to={`/id=${book.id}`} width='150px' height='300px' margin='10px' padding='5px'>
                <Flex direction="column" width='90%' align='space-around' justify='center' onClick={() => console.log(book?.id)} overflow='auto' maxHeight=' '>
                        <BookInfo direction='row' justify='center' overflow='hidden'>
                            <StyledImage src={book?.thumbnail || noImage} ></StyledImage>
                            <Flex direction='column' overflow='hidden'>
                                <h3 style={overflowHid}>{book?.title}</h3>
                                <span style={overflowHid}>Author(s): {book?.authors ? book?.authors.map((item)=>item + ' ') : 'Unknown'}</span>
                                <span>{book?.maturity}</span>
                                <span>Language: {book?.language}</span>
                                <span>Categories: {book?.categories ? book?.categories.map((item)=>item + ' ') : 'other'}</span>
                                <span>Sale in {book?.country}: {book?.saleability}</span>
                                <span>Page count: {book?.pageCount}</span>
                                <span>Published date: {book?.publichedDate}</span>
                                {book?.eBook ? <span>Have eBook</span> : null}
                            </Flex>
                        </BookInfo>
                        <hr style={margin}/>
                        <p style={font}>
                            {book?.description}
                        </p>
                </Flex>
            // </LinkStyled>
        )
    }
}

export default Book;