import PageHeaders from '@/components/PageHeaders';

export default function ServicesPage(){
    return(
        <div>
            <PageHeaders 
                h1Text={'Check out our Services'}
                h2Text={'Our Service is very good and affordable. We offer the best service in the world.'}
            />

            <div className="shadow-lg bg-white text-center text-black rounded-lg max-w-xs p-4 mx-auto">
                <h3 className='font-bold text-2xl'>Caption Generation</h3>
                <h4>which only generates caption for the videos</h4>
            </div>
        </div> 

    );
}