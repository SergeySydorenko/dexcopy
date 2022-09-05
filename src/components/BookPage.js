import Flex from "../ui/Flex";
import Book from "./Book";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import performSearch from "../functions/performSearch";

const BookPage = () => {
    let params = useParams();
    let [bookData , setBookData] = useState(0);
    useEffect(()=>{performSearch(params.id).then(res => setBookData(res.data.items.filter(function(item){return item.id == params.id})))},[params])

    return(
        <Flex width='100%' height='100%' justify='center' align='flex-start' padding='50px 0 0 0'>
            {bookData ? bookData.map((item) =>
                    <Book bookData={item} key={item.id} />)
                : <Flex>Loading</Flex>}
        </Flex>
    )
}

export default BookPage;