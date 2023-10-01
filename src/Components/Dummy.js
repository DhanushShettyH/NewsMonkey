import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Dummy(props) {

  const source = {
    "status": "ok",
    "totalResults": 38,
    "articles": [
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "Asian Games 2023 September 30 Live Updates: Preeti Assures Boxing Medal, Rohan Bopanna-Rutuja Bhosale Trail In Tennis Mixed Doubles Final - NDTV Sports",
        "description": "Asian Games 2023 September 30, Live Updates: After a silver in shooting, boxers have assured India of two more medals on Day 7",
        "url": "https://sports.ndtv.com/asian-games-2023/asian-games-2023-live-september-30-latest-updates-4436911",
        "urlToImage": "https://c.ndtvimg.com/2023-03/6bm1brus_lovlina-borgohain-pti_640x480_26_March_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2023-09-30T06:22:27Z",
        "content": "Asian Games 2023 September 30, Live Updates: Indian boxer Lovlina Borgohain has assured India its third medal in boxing. India's TT star Manika Batra has lost her singles last eight match. Mixed doub… [+740 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "Science Desk",
        "title": "Hubble takes timelapse video of expanding bubble made from exploded star - The Indian Express",
        "description": "You can watch a timelapse video of supernova remnant captured by scientists using the Hubble Space Telescope.",
        "url": "https://indianexpress.com/article/technology/science/hubble-timelapse-video-supernova-8962539/",
        "urlToImage": "https://images.indianexpress.com/2023/09/Cygnus-loop-20230930.jpg",
        "publishedAt": "2023-09-30T06:03:54Z",
        "content": "A star exploded around 20,000 years ago but today, in 2023, you can sit where you are and watch a timelapse video of its remnants racing into space at unimaginable speeds captured by the Hubble Space… [+1990 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "World Heart Day | 225 South Africans die of heart disease daily - eNCA",
        "description": "Over 200 South Africans die of heart disease and stroke every single day. Cardiovascular issues is largely caused by poor lifestyle and diet. On World Heart ...",
        "url": "https://www.youtube.com/watch?v=fLPBw_lEs_Q",
        "urlToImage": "https://i.ytimg.com/vi/fLPBw_lEs_Q/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBPce0cqh60ZQum8EMuzCWxh8te_w",
        "publishedAt": "2023-09-30T05:51:46Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "Rinku Ghosh, Anonna Dutt",
        "title": "10,000 steps, home food, rowing and sleep: Top cardiologists tell you secrets of their heart health - The Indian Express",
        "description": "We speak to cardiologists in three cities about how they practise what they preach while getting through a busy day",
        "url": "https://indianexpress.com/article/health-wellness/top-cardiologists-secrets-heart-health-8962520/",
        "urlToImage": "https://images.indianexpress.com/2023/09/fi-7.jpg",
        "publishedAt": "2023-09-30T05:37:14Z",
        "content": "Running between critical surgeries and OPDs, given the burden of heart disease in the country, cardiologists are under a lot of stress themselves. Not too long ago, a cardiologist in Ahmedabad had su… [+4924 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Bollywood Hungama"
        },
        "author": "Bollywood Hungama",
        "title": "Dunki vs Salaar: Karan Johar changes the release date of Sidharth Malhotra-starrer Yodha out of respect for Shah Rukh Khan, Prabhas - Bollywood Hungama",
        "description": "Dunki vs Salaar: Karan Johar changes the release date of Sidharth Malhotra-starrer Yodha out of respect for Shah Rukh Khan, Prabhas. Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb News, Celebrities …",
        "url": "https://www.bollywoodhungama.com/news/bollywood/dunki-vs-salaar-karan-johar-changes-release-date-sidharth-malhotra-starrer-yodha-respect-shah-rukh-khan-prabhas/",
        "urlToImage": "https://stat5.bollywoodhungama.in/wp-content/uploads/2023/09/Dunki-vs-Salaar-Karan-Johar-changes-the-release-date-of-Sidharth-Malhotra-starrer-Yodha-out-of-respect-for-Shah-Rukh-Khan-Prabhas-2.jpg",
        "publishedAt": "2023-09-30T05:36:50Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Moneycontrol"
        },
        "author": "Ravi Hari",
        "title": "NASA to launch Psyche mission on October 12 to reveal mysteries of the metal-rich asteroid - Moneycontrol",
        "description": "Psyche mission, the first such to a metal-rich asteroid, may be able to tell the world &quot;how rocky planets like our own Earth formed.&quot;",
        "url": "https://www.moneycontrol.com/news/science/nasa-plans-to-launch-psyche-mission-on-october-12-to-reveal-mysteries-of-the-metal-rich-asteroid-11454631.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/09/Psyche-770x433.png",
        "publishedAt": "2023-09-30T05:26:09Z",
        "content": "NASA and SpaceX are targeting an October 12 lift-off for the Psyche mission, which will launch from the Kennedy Space Center in Florida and will be carried into space aboard a Falcon Heavy rocket. Th… [+3315 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Livemint"
        },
        "author": "Livemint",
        "title": "IAF air show today: Chinook helicopters showcase aerobatic performance| WATCH | Mint - Mint",
        "description": "Indian Air Force celebrates 91st anniversary with aerial exhibition over Bhojtal Lake in Bhopal. Traffic and parking guidelines issued for event.",
        "url": "https://www.livemint.com/news/india/iaf-air-show-today-chinook-helicopters-showcase-aerobatic-performance-watch-11696049801535.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/09/30/1600x900/chi_1696050042476_1696050054870.PNG",
        "publishedAt": "2023-09-30T05:13:21Z",
        "content": "In celebration of its 91st Anniversary, the Indian Air Force (IAF) conducted an aerial exhibition above Bhojtal Lake in Bhopal, Madhya Pradesh. The event treated the city to exhilarating aerobatic di… [+2160 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "Sea Lion Swims Out Of Enclosure As Heavy Rain Floods Pool At New York Zoo - NDTV",
        "description": "A sea lion swam outside its enclosure at a New York zoo on Friday as heavy rain flooded her pool. She explored the area outside before returning to its pool to the company of other sea lions, authorities said.",
        "url": "https://www.ndtv.com/world-news/sea-lion-swims-out-of-enclosure-as-heavy-rain-floods-pool-at-new-york-zoo-4437311",
        "urlToImage": "https://c.ndtvimg.com/2023-09/qu473f8o_sea-lion-new-york-zoo_625x300_30_September_23.jpg",
        "publishedAt": "2023-09-30T04:55:53Z",
        "content": "New York: A sea lion swam outside its enclosure at a New York zoo on Friday as heavy rain flooded her pool. She explored the area outside before returning to its pool to the company of other sea lion… [+1496 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "Science Desk",
        "title": "Perseverance rover takes video of 2-kilometre-high dust devil on Mars - The Indian Express",
        "description": "Watch this video of a dust devil on Mars captured by NASA's Perseverance rover.",
        "url": "https://indianexpress.com/article/technology/science/nasa-perseverance-mars-dust-devil-8962477/",
        "urlToImage": "https://images.indianexpress.com/2023/09/Dust-devil-20230930.jpg",
        "publishedAt": "2023-09-30T04:52:58Z",
        "content": "While exploring the Jezero crater on Mars, the National Aeronautics and Space Administrations (NASA) Perseverance rover caught a surprise weather eventa dust devil. The huge swirling vortex of dust w… [+1444 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "Manjiri Chitre",
        "title": "Last day to exchange ₹2,000 currency note today. What happens after deadline? - Hindustan Times",
        "description": "The last date for returning or exchanging the ₹2,000 denomination currency notes is today, the Reserve Bank of India (RBI) said.",
        "url": "https://www.hindustantimes.com/business/last-day-to-exchange-2-000-currency-note-today-what-happens-after-deadline-101696037381976.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/09/30/1600x900/2000_notes_withdrawal_rbi_gold_silver_1684666158126_1696037505729.JPG",
        "publishedAt": "2023-09-30T04:47:42Z",
        "content": "The last date for returning or exchanging the 2,000 denomination currency notes is today. According to the Reserve Bank of India (RBI), from October 1 onwards the banknote will cease to have its valu… [+2078 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Moneycontrol"
        },
        "author": "Moneycontrol News",
        "title": "Just one man planned the Rs 25 crore jewellery heist that shocked Delhi - Moneycontrol",
        "description": "The Rs 25 crore jewellery heist that shocked Delhi was planned and executed by just one man - a Chhattisgarh native named Lokesh Srivas.",
        "url": "https://www.moneycontrol.com/news/trends/delhi-jewellery-heist-mastermind-lokesh-srivas-arrested-in-chhattisgarh-11455371.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/09/Collage-Maker-30-Sep-2023-10-06-AM-5121-770x433.jpg",
        "publishedAt": "2023-09-30T04:40:23Z",
        "content": "The Rs 25 crore jewellery heist that shocked Delhi was planned and executed by just one man, despite the fact that it looked like the sophisticated handiwork of a gang of criminals. Lokesh Srivas, a … [+3635 chars]"
      },
      {
        "source": {
          "id": "the-hindu",
          "name": "The Hindu"
        },
        "author": "Sportstar",
        "title": "Asian Games 2023: Sarabjot, Divya win silver in 10m air pistol mixed team event - Sportstar",
        "description": null,
        "url": "https://sportstar.thehindu.com/asian-games/asian-games-shooting-sarabjot-singh-divya-thadigol-win-silver-medal-10m-air-pistol-mixed-team-even-final-hangzhou-2022/article67364740.ece",
        "urlToImage": null,
        "publishedAt": "2023-09-30T04:30:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Livemint"
        },
        "author": "Asit Manohar",
        "title": "Buy or sell: Sumeet Bagadia recommends three stocks to buy next week | Mint - Mint",
        "description": "Buy or sell stocks: Sumeet Bagadia has recommended three stocks to buy on Tuesday — Hero MotoCorp, Dr Reddy's and Metro Brands",
        "url": "https://www.livemint.com/market/stock-market-news/buy-or-sell-sumeet-bagadia-recommends-three-stocks-to-buy-next-week-11696046569601.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/09/30/1600x900/Buy_or_sell_stocks_to_buy_today_stock_market_news_1696046796243_1696046796588.jpg",
        "publishedAt": "2023-09-30T04:11:48Z",
        "content": "Buy or sell stocks: Amid expectations of partial US shutdown, Indian stock market opened upside and extended its early morning gains further during Friday session. Nifty 50 index gained 114 points an… [+5327 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Questioned on minority rights in India, Jaishankar says, ‘I defy you to show me discrimination’ | Mint - Mint",
        "description": "On status of minorities in India, Jaishankar says ‘It’s fairer, show me discrimination'",
        "url": "https://www.livemint.com/news/india/on-status-of-minorities-in-india-jaishankar-says-it-s-fairer-show-me-discrimination-11696040305862.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/09/30/1600x900/Jaishankar--PTI-_1696044421670_1696044437914.jpg",
        "publishedAt": "2023-09-30T03:30:46Z",
        "content": "External Affairs Minister S Jaishankar on Friday questioned the status of minorities in India under the Narendra Modi government. What is the test really of fair and good governance or the balance of… [+2599 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Vicky Kaushal opens up about married life with Katrina Kaif, says 'she's like a monster when...' - Times of India",
        "description": "Vicky Kaushal opens up about his married life with Katrina Kaif, describing her as disciplined and picky. He admits to being the lazy one in the relat",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/vicky-kaushal-opens-up-about-married-life-with-katrina-kaif-says-shes-like-a-monster-when-/articleshow/104057098.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-104056803,width-1070,height-580,imgsize-35102,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-09-30T03:23:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "S Jaishankar Speaks In Favour Of Sikh Community Amid \"Extremism\" In Canada - NDTV",
        "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
        "url": "https://www.ndtv.com",
        "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
        "publishedAt": "2023-09-30T03:20:51Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "Manjiri Chitre",
        "title": "Ujjain Police official offers treatment, education to rape survivor - Hindustan Times",
        "description": "The incident was reported on September 25 after the 15-year-old girl was found bleeding on a road in Mahakal police station limits in Ujjain. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/ujjain-police-official-offers-treatment-education-to-rape-survivor-101696034019403.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/09/30/1600x900/ujjain_1696034313412_1696034339658.jpg",
        "publishedAt": "2023-09-30T02:51:23Z",
        "content": "A Madhya Pradesh Police official, who was part of the investigation into the rape case of a minor girl in Ujjain, has offered to take responsibility for the girl's medical treatment, education, and m… [+1902 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "The Vaccine War box office collection day 2: Vivek Agnihotri's film mints just ₹85 lakh - Hindustan Times",
        "description": "The Vaccine War box office collection day 2: The film earned ₹1.50 crore in two days since its release. It stars Nana Patekar, Anupam Kher and Pallavi Joshi. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/the-vaccine-war-box-office-collection-day-2-vivek-agnihotri-anupam-kher-pallavi-joshi-film-101696038971802.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/09/30/1600x900/The_Vaccine_War_1696040362866_1696040363090.png",
        "publishedAt": "2023-09-30T02:20:14Z",
        "content": "The Vaccine War box office collection day 2: Helmed by filmmaker Vivek Agnihotri, The Vaccine War is not doing well at the domestic box office. As per Sacnilk.com, the film managed to earn a little o… [+1620 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ANI News"
        },
        "author": null,
        "title": "World Rabies Day: IIT Guwahati spreads awareness on viral zoonotic disease - ANI News",
        "description": "The Indian Institute of Technology Guwahati (IIT Guwahati) observed World Rabies Day on September 28 with multiple activities and initiatives to spread awareness about this fatal, yet preventable disease.",
        "url": "https://www.aninews.in/news/national/general-news/world-rabies-day-iit-guwahati-spreads-awareness-on-viral-zoonotic-disease20230930074528",
        "urlToImage": "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230930021246.jpg",
        "publishedAt": "2023-09-30T02:15:00Z",
        "content": "Guwahati (Assam) [India], September 30 (ANI): The Indian Institute of Technology Guwahati (IIT Guwahati) observed World Rabies Day on September 28 with multiple activities and initiatives to spread a… [+5120 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "PTI",
        "title": "US lawmaker launches caucus to protect interests of Hindus, Buddhists, Sikhs - Hindustan Times",
        "description": "Thanedar on Friday formally launched in the US Congress the caucus that aims to combat religious discrimination and promote religious freedom. | World News",
        "url": "https://www.hindustantimes.com/world-news/us-lawmaker-shri-thanedar-launches-caucus-to-protect-interests-of-hindus-buddhists-sikhs-jains-101696037623511.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/09/30/1600x900/Screenshot_2023-09-30_070748_1696037889781_1696037906223.png",
        "publishedAt": "2023-09-30T01:39:42Z",
        "content": "Washington, Sep 30 (PTI) Over two dozen US lawmakers have joined the bipartisan Congressional Hindu, Buddhist, Sikh and Jain American Caucus, its founder and Indian American Congressman Shri Thanedar… [+3349 chars]"
      }
    ]
  }

  const capitalizfun = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}


  const [state, setState] = useState({
    article: [],
    loading: true,
    pageno: 0,
    totalResults: 0,

  })

  useEffect(() => {
    setTimeout(() => {

      setState({
        ...state,
        article: state.article.concat(source.articles),
        totalResults: source.totalResults,
        pageno: state.pageno + 1,
        loading: false,
      })

    }, 2000);
  }, [])


  let stylemode = props.mode === "dark" ? { filter: "invert(1)" } : { filter: "invert(0)" };


  
  return (
    <>
    <div style={{marginTop: "90px"}}> </div>
      <h2 className='text-center mb-3' style={stylemode}>NewsMonkey - Top {capitalizfun(props.category)}  Headlines</h2>
      {state.loading && <Spinner />}

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

      {/* <div className="container d-flex justify-content-between my-3">
        <button disabled={state.pageno === 1} type="button" className="btn btn-dark" style={stylemode} onClick={handlePreclick}>&larr; Previous</button>
        <button disabled={state.pageno + 1 > Math.ceil(state.totalResults / props.articleSize)} type="button" className="btn btn-dark" style={stylemode} onClick={() => { setState({ ...state, pageno: 2 }); handleNextClick() }}> Next &rarr;</button>
        if article or page is over than fetch is not gona work so totalarticle/no of article in single page gets use no of page
     so pageno+1 > no of page than fetch is not executed
    </div> */}


    </>
  )
}
