import HomePage from "../components/HomePage";
import {DarkModeProvider} from '../components/DarkModeProvider/index';
import {useLocalStorage} from "../effects/useLocalStorage";
import {useEffect, useState} from "react";

export default function Home(props) {
    const [darkMode] = useLocalStorage('darkModeEnabled');
    const [isMounted,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[])
    return (
        <div>
            <DarkModeProvider value={darkMode}>
                {  isMounted && <HomePage {...props}/>}
            </DarkModeProvider>
        </div>
    )
}

Home.getInitialProps = async (ctx) => {

    return {
        trending: [{
            image: 'https://www.iamvishnusankar.com/static/c2510022ce0b52a21ee0443ed4f22918/next.png',
            title: 'Reddit Clone',
            description: 'This is a clone website for reddit that\'s build in nextjs'
        }, {
            image: 'https://storage.googleapis.com/afs-prod/media/0414a0f7df3d49259db6e4550e180871/3000.jpeg',
            title: 'Prince Charles',
            description: 'Prince Charles celebrate 100 years unship with Jordan'
        }, {
            image: 'https://lh3.googleusercontent.com/proxy/FHKuOYYvcSJIC8q7HhS-hUfCahtnN9Gt1nU0s_qK3RuIIRszeX3gERHGdaWiZO84Qkgq1406UnDVk7-SbYxAv6OGHbnpJzGxyUxOsQ9590UkRR4DLQe4BL-5X-I3p9qDu_CsTg',
            title: 'Reddit Clone',
            description: 'This is a clone website for reddit that\'s build in nextjs'
        }, {
            image: 'https://storage.googleapis.com/afs-prod/media/0414a0f7df3d49259db6e4550e180871/3000.jpeg',
            title: 'Prince Charles',
            description: 'Prince Charles celebrate 100 years unship with Jordan'
        },],
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
        posts: [{
            title: 'Will Google Searchbot SEO also crawl my content APIs? Or do I really need nextjs SSR? maybe u guys have a clue',
            body: 'https://thehill.com/changing-america/respect/equality/548534-floridas-new-ban-on-transgender-students-in-sports-would',
            subreddit: {
                name: 'nextjs',
                logo: 'https://img.favpng.com/11/24/6/reddit-woman-logo-female-png-favpng-paGQ3UP6M0u5KighTBZEvhp2w.jpg'
            },
            user: 'Rakan',
            date: '4 hours ago',
            comments: {
                count: '11.4k'
            },
            type: 'ShortTitleWithPhoto',
            image: 'https://chrisbrownie.dev/blog/creating-a-completely-static-build-with-nextjs/nextjs.png'
        }, {
            title: 'In his most recent stream Daniel Negreanu said that he is considering making a pogchamps-like tournament but instead of chess the game is poker\n',
            body: 'https://thehill.com/changing-america/respect/equality/548534-floridas-new-ban-on-transgender-students-in-sports-would',
            subreddit: {
                name: 'twitch',
                logo: 'https://media-exp1.licdn.com/dms/image/C560BAQHm82ECP8zsGw/company-logo_200_200/0/1593628073916?e=2159024400&v=beta&t=89u72cg5KzjSQ1qwB9xPZYhWvr7jFkD_9mUyFdNFnVw'
            },
            user: 'Rakan',
            date: '4 hours ago',
            comments: {
                count: '11.4k'
            },
            type: 'ShortTitleWithPhoto',
            'image': 'https://www.ginx.tv/uploads/pogchamps_3_main.jpg'
        }, {
            title: 'There was Trump-Russia collusion — and Trump pardoned the colluder',
            body: 'https://thehill.com/opinion/white-house/548794-there-was-trump-russia-collusion-and-trump-pardoned-the-colluder',
            subreddit: {
                name: 'nextjs',
                logo: 'https://img.favpng.com/11/24/6/reddit-woman-logo-female-png-favpng-paGQ3UP6M0u5KighTBZEvhp2w.jpg'
            },
            user: 'Rakan',
            date: '4 hours ago',
            comments: {
                count: '11.4k'
            },
            type: 'ShortTitleWithLink'
        }, {
            title: 'Boomer stock streamer denounces cryptocurrency and wishes failure among investors',
            body: 'Every public area is filthy, polluted with litter, and there are intimidating adult males loitering. I did not feel safe taking the metro They do not speak French or English. WTF that was disappointing and I regret wasting time in Paris.',
            subreddit: {
                name: 'nextjs',
                logo: 'https://img.favpng.com/11/24/6/reddit-woman-logo-female-png-favpng-paGQ3UP6M0u5KighTBZEvhp2w.jpg'
            },
            user: 'Rakan',
            date: '4 hours ago',
            comments: {
                count: '11.4k'
            },
            type: 'ShortTitleShortBody'
        }, {
            title: 'Boomer stock streamer denounces cryptocurrency and wishes failure among investors',
            body: 'https://thehill.com/changing-america/respect/equality/548534-floridas-new-ban-on-transgender-students-in-sports-would',
            subreddit: {
                name: 'nextjs',
                logo: 'https://img.favpng.com/11/24/6/reddit-woman-logo-female-png-favpng-paGQ3UP6M0u5KighTBZEvhp2w.jpg'
            },
            user: 'Rakan',
            date: '4 hours ago',
            comments: {
                count: '11.4k'
            },
            type: 'ShortTitleShortBody'
        }]
    }
}