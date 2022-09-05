import Flex from "../ui/Flex"
import LinkStyled from "../ui/LinkStyled"

const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

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
    let styleImg;
    if(short){
        styleImg = {
            width: '100%',
            height: '210px'
            // height: '80%'
        }
    }else{
        styleImg = {
            width: '200px',
            height: '320px'
            // height: '80%'
        }
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
            <LinkStyled to={`/id=${book.id}`} width='150px' height='300px' margin='10px' padding='5px'>
                <Flex direction="column" width='100%' onClick={() => console.log(book?.id)}>
                        <img src={book?.thumbnailSmall || noImage} style={styleImg}></img>
                        <Flex direction='column' overflow='hidden' color='white'>
                            <h3 style={overflowHid}>{book?.title}</h3>
                        </Flex>
                </Flex>
            </LinkStyled>
        )
    }else{
        return(
            // <LinkStyled to={`/id=${book.id}`} width='150px' height='300px' margin='10px' padding='5px'>
                <Flex direction="column" width='80%' align='space-around' justify='center' onClick={() => console.log(book?.id)}>
                        <Flex direction='row' justify='flex-start'>
                            <img src={book?.thumbnail || noImage} style={styleImg}></img>
                            <Flex direction='column' overflow='hidden' margin='0 0 0 30px'>
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
                        </Flex>
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