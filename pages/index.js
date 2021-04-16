import HomePage from "../components/HomePage";

export default function Home(props) {
    return (
        <div>
            <HomePage {...props}/>
        </div>
    )
}

Home.getInitialProps = async (ctx) => {

    return {
        trending: [{
            image: 'https://chrisbrownie.dev/blog/creating-a-completely-static-build-with-nextjs/nextjs.png',
            title: 'Reddit Clone',
            description: 'This is a clone website for reddit that\'s build in nextjs'
        }, {
            image: 'https://storage.googleapis.com/afs-prod/media/0414a0f7df3d49259db6e4550e180871/3000.jpeg',
            title: 'Prince Charles',
            description: 'Prince Charles celebrate 100 years unship with Jordan'
        }, {
            image: 'https://chrisbrownie.dev/blog/creating-a-completely-static-build-with-nextjs/nextjs.png',
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
        }]
    }
}