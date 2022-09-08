import Flex from "../ui/Flex";
import Book from "./Book.js";
import { Outlet, useParams } from "react-router-dom";
import performSearch from "../functions/performSearch";
import { useEffect, useState, useRef } from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import Spinner from "./Spinner";
import { LinkArrow } from "../ui/LinkStyled";

const FlexButtons = styled(Flex)`
    /* border-top: 2px solid black; */
    @media (max-width: 768px){
        font-size: 16px;
        padding: 0 0 5px 0;
    }
`

const Main = (props) =>{
    const params = useParams();
    const myRef = useRef(null)



    let [bookData , setBookData] = useState();
    let [totalPages, SetTotalPages] = useState();
    let [page, setPage] = useState(0)

    useEffect(()=>{
        topFunction()
        performSearch(params.id, page).then(res => {
            setBookData(res.data);
            console.log(bookData);
            SetTotalPages(Math.ceil(res?.data?.totalItems/10))
        })
    },[params,page])


    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

    const changePage = (movePage) =>{
        if(movePage == 'forward' && page < totalPages){
            setPage(Number(page+20));
            // myRef.current.scrollIntoView();
        }
        if(movePage == 'back' && page > 1){
            setPage(Number(page-20));
            // myRef.current.scrollIntoView();
        }
    }

    let pages = [];
    for(let i = 1; i < pages; i++){
        pages.push(i+10);
    }

    try{
    return(
        <Flex direction='column' align='center' width='100%' height='100%' overflow='hidden' padding='0 0 0 0' backgroundColor='#41436A'>
            <LinkArrow/>
            {/* {bookData ? <h3>Books found: {bookData?.totalItems}</h3> : null} */}
            {/* <Flex direction='row' width='100%' justify='stretch' height='100%'> */}
                <Flex direction='row' justify='center' align='center' width="100%" height='100%' overflow='scroll' wrap='wrap'>
                    {bookData ? bookData?.items.map((item) =>
                        // <LinkStyled to={`/id=${item.id}`} key={item.id} >
                            <Book bookData={item} short='true' key={item.id}/>

                        ) 
                        : <Spinner/>
                        }
                </Flex>
                {totalPages ? 
                    <FlexButtons margin='0 0 0 0' color='white' width='100%' justify='space-between' height='60px' align='center' width='80%'>
                        <Button height='70%' overflow='hidden' onClick={()=>changePage('back')} bgColorHover='inherit' margin='0 0 0 0' width='100px' minwidth='100px'>Previous</Button>
                        <Button height='70%' overflow='hidden' onClick={()=>changePage('forward')} bgColorHover='inherit' margin='0 0 0 0' width='100px' minwidth='100px'>Next</Button>
                    </FlexButtons>
                    
                : null}
            {/* </Flex> */}
        </Flex>
    )}catch (err){
        return(
            <Flex>
                Book is not found.
            </Flex>
        )
    }
}

export default Main;