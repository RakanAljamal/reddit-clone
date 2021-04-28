import HomePage from "../components/HomePage";
import {useQuery} from "@apollo/client";
import {GET_POSTS} from "../graphql/Query";


export default function Home(props) {
    return <HomePage {...props}/>
}

Home.getInitialProps = async (ctx) => {
    return {
        subreddits: [{
            logo: 'https://styles.redditmedia.com/t5_3h7yi/styles/communityIcon_9ds9kugm99g51.png',
            name: 'nextjs'
        }, {
            logo: 'https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png?width=256&s=13a87a036836ce95570a76feb53f27e61717ad1b',
            name: 'reactjs'
        }, {
            logo: 'https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png',
            name: 'javascript'
        }, {
            logo: 'https://styles.redditmedia.com/t5_2qhd7/styles/communityIcon_tzuj58g8ax451.png?width=256&s=84724eb7266fa9876bcaa7a42bf09aa49030b38d',
            name: 'java'
        }, {
            logo: 'https://styles.redditmedia.com/t5_2fwo/styles/communityIcon_1bqa1ibfp8q11.png?width=256&s=45361614cdf4a306d5510b414d18c02603c7dd3c',
            name: 'programming'
        }],
    }
}
