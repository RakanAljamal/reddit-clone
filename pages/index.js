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
        },]
    }
}