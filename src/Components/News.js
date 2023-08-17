import React, { useState } from 'react'
import NewsItem from './NewsItem'
import { useEffect } from 'react'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


function News(props) {

    const [state, setState] = useState({
        article: [],
        loading: true,
        pageno: 0,
        totalResults: 0,

    })

    // const updatenews = async (no) => {
    //     setState({
    //         ...state,
    //         loading: true,
    //     })
    //     fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0d89b3b4124441f8bcf251237d7749f6&page=${no}&pageSize=${props.articleSize}`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setState({
    //                 ...state,
    //                 article: data.articles,
    //                 totalResults: data.totalResults,
    //                 pageno: no,
    //                 loading: false,
    //             })
    //         })
    // }

    const capitalizfun = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    // async means this func await to resolve promiss and give data 
    //useeffect run when component render and when dependency state chaged 
    useEffect(() => {
        document.title = `${capitalizfun(props.category)} - NewsMonkey`;
        props.setProgress(10);
        fetchMoreData();
        setTimeout(() => {

            props.setProgress(100);

        }, 2000);

    }, []);
    // const handlePreclick = async () => {
    //     let no = state.pageno - 1;
    //     updatenews(no);

    // }

    // const handleNextClick = () => {
    //     let no = state.pageno + 1;
    //     updatenews(no);

    // }
    const fetchMoreData = async () => {

        setTimeout(() => {

            fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.pageno + 1}&pageSize=${props.articleSize}`)
                .then(res => {
                    return res.json();

                })
                .then(data => {
                    setState({
                        ...state,
                        article: state.article.concat(data.articles),
                        totalResults: data.totalResults,
                        pageno: state.pageno + 1,
                        loading: false,
                    })
                })
        }, 2000);

    };

    let stylemode = props.mode === "dark" ? { filter: "invert(1)" } : { filter: "invert(0)" };


    return (
        <>
            <h2 className='text-center mb-3' style={{ marginTop: "90px", stylemode }}>NewsMonkey - Top {capitalizfun(props.category)}  Headlines</h2>
            {state.loading && <Spinner />}
            <InfiniteScroll
                dataLength={state.article.length}
                next={fetchMoreData}
                hasMore={state.article.length !== state.totalResults}
                loader={<Spinner />}
            >
                <div className="container-sm">
                    <div className="row">
                        {/* {!state.loading && */}{state.article.map((element) => {
                            return (
                                <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 44) : " "} description={element.description ? element.description : ""}
                                        imgurl={element.urlToImage} newurl={element.url} mode={props.mode} stylemode={stylemode} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between my-3">
                <button disabled={state.pageno === 1} type="button" className="btn btn-dark" style={stylemode} onClick={handlePreclick}>&larr; Previous</button>
                <button disabled={state.pageno + 1 > Math.ceil(state.totalResults / props.articleSize)} type="button" className="btn btn-dark" style={stylemode} onClick={() => { setState({ ...state, pageno: 2 }); handleNextClick() }}> Next &rarr;</button>
                if article or page is over than fetch is not gona work so totalarticle/no of article in single page gets use no of page
             so pageno+1 > no of page than fetch is not executed
            </div> */}


        </>
    )
}

News.prototype = {
    country: PropTypes.string,
    articleSize: PropTypes.number,
    category: PropTypes.string,
}
News.defaultProps = {
    country: 'in',
    articleSize: 12,
}
export default News
