'use client'

export default function Home() {
    return (
        <>
            <nav>
                <div>
                </div>
            </nav>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow-300">
                <div className={"justify-center content-center my-auto"}>
                    <div className={'mb-2 ps-8'}>
                        <p className={'text-gray-800'}>Maybe Not</p>
                    </div>
                    <div className={''}>
                        <audio src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"} controls={true}/>
                    </div>
                </div>
                <div>
                </div>
            </main>
        </>
    );
}
