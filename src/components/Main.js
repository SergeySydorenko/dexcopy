import Flex from "../ui/Flex";
import Book from "./Book.js";
import { Outlet, useParams } from "react-router-dom";
import performSearch from "../functions/performSearch";
import { useEffect, useState, useRef } from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import Spinner from "./Spinner";

const FlexButtons = styled(Flex)`
    border-top: 2px solid black;
    background-color: #984063;
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
            myRef.current.scrollIntoView();
        }
        if(movePage == 'back' && page > 1){
            setPage(Number(page-20));
            myRef.current.scrollIntoView();
        }
    }

    let pages = [];
    for(let i = 1; i < pages; i++){
        pages.push(i+10);
    }

    try{
    return(
        <Flex direction='column' align='center' width='100%' height='90%' overflow='hidden' padding='1% 0 0 0' backgroundColor='#984063'>
            <hr ref={myRef}/>
            {bookData ? <h3>Books found: {bookData?.totalItems}</h3> : null}
            {/* <Flex direction='row' width='100%' justify='stretch' height='100%'> */}
                <Flex direction='row' justify='center' align='center' width="100%" height='100%' overflow='scroll' wrap='wrap' padding='1% 5%'>
                    {bookData ? bookData?.items.map((item) =>
                        // <LinkStyled to={`/id=${item.id}`} key={item.id} >
                            <Book bookData={item} short='true' key={item.id}/>

                        ) 
                        : <Spinner/>
                        }
                </Flex>
                {totalPages ? 
                    <FlexButtons padding='0 0 10px 0' color='white' width='100%' justify='center'>
                        <Button colorhover='white' onClick={()=>changePage('back')} padding='5px' margin='5px 0 0 10px' width='100px' backgroundcolor='#fe9677' bgColorHover='#984063' minwidth='100px'>Previous</Button>
                        <Button colorhover='white' onClick={()=>changePage('forward')} padding='5px' margin='5px 0 0 10px' width='100px' backgroundcolor='#fe9677' bgColorHover='#984063' minwidth='100px'>Next</Button>
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